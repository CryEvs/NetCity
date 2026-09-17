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


var _foodpayStudentOrders = __webpack_require__(2);
var _foodpayBalance = __webpack_require__(6);
var _foodpayOrders = __webpack_require__(7);
var _foodpayPayments = __webpack_require__(9);
var _classes = __webpack_require__(13);
var _foodpay = __webpack_require__(18);
var _foodpay2 = __webpack_require__(4);
var _editFoodpayBalance = __webpack_require__(19);
var _floatinput = __webpack_require__(20);
var _dateInput = __webpack_require__(21);
var _foodpayPaynorms = __webpack_require__(22);
var _floatInput = __webpack_require__(23);
var _module = angular.module("irtech.netcity.school.foodpay", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "irtech.netcity.ui-components"]);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when('/studentorders', _foodpayStudentOrders.FoodPayStudentOrdersComponent).when('/orders', _foodpayOrders.FoodPayOrdersComponent).when('/payment-norms', _foodpayPaynorms.FoodPayNormsComponent).when('/payments', _foodpayPayments.FoodPayPaymentsComponent).when('/balance', _foodpayBalance.FoodPayBalanceComponent).when('/balance/edit', _editFoodpayBalance.EditFoodPayBalanceComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.service("foodPayOrdersRepository", _foodpay.FoodPayOrdersRepository).service("foodPayBalanceRepository", _foodpay.FoodPayBalanceRepository).service("foodPayStudentOrdersRepository", _foodpay.FoodPayStudentOrdersRepository).service("foodPayDocumentsRepository", _foodpay.FoodPayDocumentsRepository).service("foodPayNormsRepository", _foodpay.FoodPayNormsRepository).service("classesRepository", _classes.ClassesRepository).service("payBalanceEditContext", _foodpay2.PayBalanceEditContext).directive("floatInput", _floatInput.FloatInputDirective).directive("numericInput", _floatinput.NumericModelDirective).component("editDateRangeComponent", _dateInput.EditDateRangeComponent).config(config);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodPayStudentOrdersComponent = void 0;
var Rights = _interopRequireWildcard(__webpack_require__(3));
var _foodpay = __webpack_require__(4);
var _commonRouting = __webpack_require__(5);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FoodPayStudentOrdersController = /*#__PURE__*/function () {
  FoodPayStudentOrdersController.$inject = ["pageContext", "$appLoader", "appContext", "dateUtils", "foodPayOrdersRepository", "foodPayStudentOrdersRepository", "classesRepository", "$longWork", "changeTracker", "$dialogs", "$alerts", "$location", "foodPayNormsRepository", "language"];
  /*@ngInject*/
  function FoodPayStudentOrdersController(pageContext, $appLoader, appContext, dateUtils, foodPayOrdersRepository, foodPayStudentOrdersRepository, classesRepository, $longWork, changeTracker, $dialogs, $alerts, $location, foodPayNormsRepository, language) {
    var _this = this;
    _classCallCheck(this, FoodPayStudentOrdersController);
    this.appContext = appContext;
    this.dateUtils = dateUtils;
    this.foodPayOrdersRepository = foodPayOrdersRepository;
    this.foodPayStudentOrdersRepository = foodPayStudentOrdersRepository;
    this.classesRepository = classesRepository;
    this.$longWork = $longWork;
    this.changeTracker = changeTracker;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$location = $location;
    this.foodPayNormsRepository = foodPayNormsRepository;
    this.language = language;
    this.dataReady = true;
    this.firstOpen = true;
    this.dateApproved = false;
    this.blankClass = {
      id: -1,
      name: "<не выбран>"
    };
    this.date = dateUtils.asUTCDate(new Date());
    this.minDate = this.getMinDate();
    pageContext.title = "Постановка учащихся на питание";
    pageContext.parent = null;
    pageContext.back = null;
    $appLoader.hide();
    this.search = _.debounce(function () {
      return _this.changeSearch();
    }, 400);
    this.dateChanged = _.debounce(function () {
      if (_this.firstOpen || _this.studentsOrders == null || _this.studentsOrders == [] || _this.searchString == '' || !_this.date) return;
      _this.load();
    }, 400);
    this.init();
  }
  _createClass(FoodPayStudentOrdersController, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      var self = !this.hasRightsOnEditStudentOrdersAll();
      this.$longWork.execute(this.classesRepository.getYearClasses({
        self: self
      }).then(function (data) {
        _this2.classes = data;
        _this2.classes.unshift(_this2.blankClass);
        _this2.selectedClass = _this2.blankClass;
      }));
    }
  }, {
    key: "changeClass",
    value: function changeClass() {
      this.firstOpen = false;
      this.searchString = null;
      this.studentsOrders = null;
      this.loadByClass();
    }
  }, {
    key: "changeSearch",
    value: function changeSearch() {
      this.firstOpen = false;
      this.selectedClass = this.blankClass;
      this.studentsOrders = null;
      if (this.searchString == null || this.searchString == '') {
        this.studentsOrders = [];
        return;
      }
      this.loadBySearch();
    }
  }, {
    key: "load",
    value: function load() {
      if (this.selectedClass == this.blankClass) {
        return this.loadBySearch();
      } else {
        return this.loadByClass();
      }
    }
  }, {
    key: "loadByClass",
    value: function loadByClass() {
      var _this3 = this;
      if (this.selectedClass == this.blankClass) {
        return;
      }
      var prepareSchoolOrder = this.loadSchoolOrder();
      var preparePayNorm = this.loadPayNorm();
      this.dataReady = false;
      return this.foodPayStudentOrdersRepository.getStudents(this.selectedClass.id).then(function (students) {
        return _this3.loadEntries(students);
      }).then(function () {
        return Promise.all([prepareSchoolOrder, preparePayNorm]);
      }).then(function () {
        return _this3.dataReady = true;
      });
    }
  }, {
    key: "loadBySearch",
    value: function loadBySearch() {
      var _this4 = this;
      this.dataReady = false;
      var self = !this.hasRightsOnEditStudentOrdersAll();
      var prepareSchoolOrder = this.loadSchoolOrder();
      var preparePayNorm = this.loadPayNorm();
      return this.foodPayStudentOrdersRepository.searchStudents(this.searchString, this.appContext.yearId, this.appContext.schoolId, self).then(function (students) {
        return _this4.loadEntries(students);
      }).then(function () {
        return Promise.all([prepareSchoolOrder, preparePayNorm]);
      }).then(function () {
        return _this4.dataReady = true;
      });
    }
  }, {
    key: "loadSchoolOrder",
    value: function loadSchoolOrder() {
      var _this5 = this;
      return this.foodPayOrdersRepository.getOrderByDate(this.date).then(function (result) {
        _this5.dateApproved = result && result.approved;
      });
    }
  }, {
    key: "loadPayNorm",
    value: function loadPayNorm() {
      var _this6 = this;
      return this.foodPayNormsRepository.getFoodPayNormOnDate(this.date).then(function (payNorm) {
        _this6.payNorm = payNorm;
      });
    }
  }, {
    key: "loadEntries",
    value: function loadEntries(students) {
      var _this7 = this;
      var studentsIds = students.map(function (s) {
        return s.id;
      });
      if (studentsIds.length < 1) {
        this.studentsOrders = [];
        return;
      }
      var request = {
        day: this.date
      };
      if (this.selectedClass.id != -1) {
        request.classId = this.selectedClass.id;
      } else {
        request.studentId = studentsIds;
      }
      return this.foodPayStudentOrdersRepository.getOrdersByFilter(request).then(function (entries) {
        _this7.studentsOrders = students.map(function (student) {
          var entry = entries.find(function (obj) {
            return obj.student.id == student.id;
          });
          if (!entry) {
            entry = {
              id: 0,
              student: student,
              day: _this7.date
            };
          }
          var model = new _foodpay.StudentFoodOrderModel(entry);
          model.className = student.className;
          return model;
        });
        _this7.originData = angular.copy(_this7.studentsOrders);
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this8 = this;
      if (!this.changeTracker.isDataChanged()) {
        this.$dialogs.notify(this.language.Generic.Common.kAttention, this.language.Generic.SetupSchoolUI.kDataNotModified, false);
        return;
      }
      var request = {
        day: [this.date],
        orders: []
      };
      var _iterator = _createForOfIteratorHelper(this.studentsOrders),
        _step;
      try {
        var _loop = function _loop() {
          var order = _step.value;
          var origin = _this8.originData.find(function (o) {
            return o.student.id == order.student.id;
          });
          if (order.equals(origin)) {
            return "continue";
          }
          var saveDto = {
            studentId: order.student.id,
            breakfast: order.breakfast,
            lunch: order.lunch,
            snack: order.snack
          };
          request.orders.push(saveDto);
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
      this.$longWork.execute(this.foodPayStudentOrdersRepository.saveOrders(request)).then(function (result) {
        _this8.informSave(result);
        _this8.changeTracker.clearDataChanges();
        _this8.selectedClass.id == -1 ? _this8.loadBySearch() : _this8.loadByClass();
      });
    }
  }, {
    key: "informSave",
    value: function informSave(result) {
      var _a, _b;
      if (result.created > 0 || result.removed > 0) {
        var countsMessage = "Создано: " + result.created + " записей, удалённо: " + result.removed + " записей";
        this.$alerts.success(countsMessage);
      }
      if (((_a = result.weekEndDays) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        var weekEndMessage = this.dateUtils.date2str(this.date) + " является нерабочим днем организации.";
        this.$dialogs.message(weekEndMessage);
      }
      if (((_b = result.eventDays) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        var eventsMessage = this.dateUtils.date2str(this.date) + " выпадает на каникулы. Заявки не были сохранены.";
        this.$dialogs.error(eventsMessage);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this9 = this;
      if (this.changeTracker.isDataChanged()) {
        this.$dialogs.confirm("Внимание! Текущие изменения будут сброшены. Продолжить?").then(function () {
          return _this9.$longWork.execute(_this9.load());
        }).then(function () {
          return _this9.$dialogs.message("Данные успешно востановленны!");
        });
      } else {
        this.$dialogs.message(this.language.Generic.SetupSchoolUI.kDataNotModified);
      }
    }
  }, {
    key: "toggleBreakfast",
    value: function toggleBreakfast() {
      if (!this.payNorm.breakfastCost) {
        return;
      }
      var hasUnchecked = this.studentsOrders.findIndex(function (order) {
        return !order.breakfast;
      }) > -1;
      if (hasUnchecked) {
        this.studentsOrders.forEach(function (o) {
          return o.breakfast = true;
        });
      } else {
        this.studentsOrders.forEach(function (o) {
          return o.breakfast = false;
        });
      }
      this.changeTracker.dataWasChanged();
    }
  }, {
    key: "toggleLunch",
    value: function toggleLunch() {
      if (!this.payNorm.lunchCost) {
        return;
      }
      var hasUnchecked = this.studentsOrders.findIndex(function (order) {
        return !order.lunch;
      }) > -1;
      if (hasUnchecked) {
        this.studentsOrders.forEach(function (o) {
          return o.lunch = true;
        });
      } else {
        this.studentsOrders.forEach(function (o) {
          return o.lunch = false;
        });
      }
      this.changeTracker.dataWasChanged();
    }
  }, {
    key: "toggleSnack",
    value: function toggleSnack() {
      if (!this.payNorm.snackCost) {
        return;
      }
      var hasUnchecked = this.studentsOrders.findIndex(function (order) {
        return !order.snack;
      }) > -1;
      if (hasUnchecked) {
        this.studentsOrders.forEach(function (o) {
          return o.snack = true;
        });
      } else {
        this.studentsOrders.forEach(function (o) {
          return o.snack = false;
        });
      }
      this.changeTracker.dataWasChanged();
    }
  }, {
    key: "toggleStudent",
    value: function toggleStudent(student) {
      var order = this.studentsOrders.find(function (o) {
        return o.student.id == student.id;
      });
      var hasUnchecked = this.payNorm.breakfastCost && !order.breakfast || this.payNorm.lunchCost && !order.lunch || this.payNorm.snackCost && !order.snack;
      if (hasUnchecked) {
        order.breakfast = this.payNorm.breakfastCost > 0;
        order.lunch = this.payNorm.lunchCost > 0;
        order.snack = this.payNorm.snackCost > 0;
      } else {
        order.breakfast = false;
        order.lunch = false;
        order.snack = false;
      }
      this.changeTracker.dataWasChanged();
    }
  }, {
    key: "getMinDate",
    value: function getMinDate() {
      var date = this.dateUtils.asUTCDate(new Date());
      date.setDate(1); //первый день месяца
      return date;
    }
  }, {
    key: "hasRightOnSchoolOrders",
    value: function hasRightOnSchoolOrders() {
      return this.appContext.hasAnyRight([Rights.arEditFoodPayOrders]);
    }
  }, {
    key: "goSchoolOrders",
    value: function goSchoolOrders() {
      this.$location.path("/orders");
    }
  }, {
    key: "goFoodPayNorms",
    value: function goFoodPayNorms() {
      this.$location.path("/payment-norms");
    }
  }, {
    key: "hasRightsOnPayNorms",
    value: function hasRightsOnPayNorms() {
      return this.appContext.hasAnyRight([Rights.arEditFoodPayNorms]);
    }
  }, {
    key: "hasRightsOnEditStudentOrdersAll",
    value: function hasRightsOnEditStudentOrdersAll() {
      return this.appContext.hasAnyRight([Rights.arEditFoodPayStudentOrdersAll]);
    }
  }]);
  return FoodPayStudentOrdersController;
}();
var FoodPayStudentOrdersComponent = {
  controller: FoodPayStudentOrdersController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/foodpay/studentOrders/foodpay.studentOrders.component.html",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arEditFoodPayStudentOrdersAll, Rights.arEditFoodPayStudentOrdersSelf])).Set()
};
exports.FoodPayStudentOrdersComponent = FoodPayStudentOrdersComponent;

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
exports.StudentFoodOrderModel = exports.PayBalanceEditContext = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var StudentFoodOrderModel = /*#__PURE__*/function () {
  function StudentFoodOrderModel(dto) {
    _classCallCheck(this, StudentFoodOrderModel);
    Object.assign(this, dto);
  }
  _createClass(StudentFoodOrderModel, [{
    key: "removing",
    value: function removing() {
      return !this["new"] && !this.breakfast && !this.lunch && !this.snack;
    }
  }, {
    key: "equals",
    value: function equals(b) {
      var _a, _b, _c, _d, _e, _f;
      return ((_a = this.breakfast) !== null && _a !== void 0 ? _a : false) == ((_b = b.breakfast) !== null && _b !== void 0 ? _b : false) && ((_c = this.lunch) !== null && _c !== void 0 ? _c : false) == ((_d = b.lunch) !== null && _d !== void 0 ? _d : false) && ((_e = this.snack) !== null && _e !== void 0 ? _e : false) == ((_f = b.snack) !== null && _f !== void 0 ? _f : false);
    }
  }]);
  return StudentFoodOrderModel;
}();
exports.StudentFoodOrderModel = StudentFoodOrderModel;
var PayBalanceEditContext = /*#__PURE__*/_createClass(function PayBalanceEditContext() {
  _classCallCheck(this, PayBalanceEditContext);
});
exports.PayBalanceEditContext = PayBalanceEditContext;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RolesGuard = exports.RightsGuard = exports.Guards = exports.GuardBuilder = exports.FuncTypeGuard = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RouteAccessRestrict = "RouteAccessRestrict";
var FuncTypeGuard = function FuncTypeGuard(config) {
  return {
    /*@ngInject*/
    functypeGuard: ["appContext", "$q", function functypeGuard(appContext, $q) {
      if (config.allowed && config.allowed.indexOf(appContext.funcType) == -1) {
        return $q.reject(RouteAccessRestrict);
      }
      if (config.disallowed && config.disallowed.indexOf(appContext.funcType) > -1) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.FuncTypeGuard = FuncTypeGuard;
var RightsGuard = function RightsGuard(needRights) {
  return {
    /*@ngInject*/
    rightsGuard: ["appContext", "$q", function rightsGuard(appContext, $q) {
      if (!appContext.hasAnyRight(needRights)) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.RightsGuard = RightsGuard;
var RolesGuard = function RolesGuard(needRoles) {
  return {
    /*@ngInject*/
    rolesGuard: ["appContext", "$q", function rolesGuard(appContext, $q) {
      if (!needRoles.some(function (role) {
        return appContext.hasRole(role);
      })) {
        return $q.reject(RouteAccessRestrict);
      }
      return true;
    }]
  };
};
exports.RolesGuard = RolesGuard;
var GuardBuilder = /*#__PURE__*/function () {
  function GuardBuilder() {
    _classCallCheck(this, GuardBuilder);
    this.guards = {};
  }
  _createClass(GuardBuilder, [{
    key: "Add",
    value: function Add(guardConfig) {
      this.guards = Object.assign(this.guards, guardConfig);
      return this;
    }
  }, {
    key: "Set",
    value: function Set() {
      return this.guards;
    }
  }]);
  return GuardBuilder;
}();
exports.GuardBuilder = GuardBuilder;
var Guards = function Guards() {
  return new GuardBuilder();
};
exports.Guards = Guards;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodPayBalanceComponent = void 0;
var _commonRouting = __webpack_require__(5);
var Rights = _interopRequireWildcard(__webpack_require__(3));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FoodPayBalanceController = /*#__PURE__*/function () {
  FoodPayBalanceController.$inject = ["pageContext", "$scope", "$appLoader", "language", "foodPayBalanceRepository", "dateUtils", "$alerts", "$dialogs", "payBalanceEditContext", "$location"];
  /*@ngInject*/
  function FoodPayBalanceController(pageContext, $scope, $appLoader, language, foodPayBalanceRepository, dateUtils, $alerts, $dialogs, payBalanceEditContext, $location) {
    var _this = this;
    _classCallCheck(this, FoodPayBalanceController);
    this.$scope = $scope;
    this.$appLoader = $appLoader;
    this.language = language;
    this.foodPayBalanceRepository = foodPayBalanceRepository;
    this.dateUtils = dateUtils;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.payBalanceEditContext = payBalanceEditContext;
    this.$location = $location;
    this.state = {
      monthRangeInfoReady: false,
      monthRangeInfoEmpty: false
    };
    pageContext.title = this.language.Generic.MenuFolders.kFNFoodPayBalance;
    pageContext.parent = null;
    pageContext.back = null;
    this.balanceMonthes = null;
    this.studentBalances = null;
    this.editNumMonth = -1;
    var fpUrl = "/webapi/food-pay/balance/init-filters";
    this.filterPanelSettings = {
      url: fpUrl,
      initUrl: fpUrl,
      events: {
        ready: function ready(fpValues) {
          return _this.load(fpValues);
        },
        emptyChoice: function emptyChoice(emptyFilter) {
          _this.$appLoader.hide();
          _this.$scope.$applyAsync();
        }
      }
    };
  }
  _createClass(FoodPayBalanceController, [{
    key: "load",
    value: function load(fpVals) {
      var _this2 = this;
      this.$appLoader.show();
      this.payBalanceEditContext.filterClass = null;
      this.payBalanceEditContext.monthInfo = null;
      this.payBalanceEditContext.studentBalances = null;
      var loadMonthRangeInfo = function loadMonthRangeInfo() {
        if (_this2.state.monthRangeInfoReady) {
          return Promise.resolve();
        }
        return _this2.foodPayBalanceRepository.getBalanceMonthRangeInfo().then(function (info) {
          _this2.state.monthRangeInfoReady = true;
          _this2.state.monthRangeInfoEmpty = info == null;
          if (info != null) {
            info.monthRange.start = _this2.dateUtils.asUTCDate(info.monthRange.start);
            info.monthRange.end = _this2.dateUtils.asUTCDate(info.monthRange.end);
            _this2.balanceMonthes = [];
            var lastMonthTime = info.monthRange.end.getTime();
            for (var curMonth = info.monthRange.start; curMonth.getTime() <= lastMonthTime; curMonth.setMonth(curMonth.getMonth() + 1)) {
              var nMonth = _this2.calendar2LearnNumMonth(curMonth.getMonth() + 1);
              _this2.balanceMonthes.push({
                startMonth: new Date(curMonth),
                numMonth: nMonth,
                titleMonth: _this2.getMonthTitle(curMonth)
              });
              if (!info.readOnly && curMonth.getTime() == lastMonthTime) {
                _this2.editNumMonth = nMonth;
              }
            }
          }
          return Promise.resolve();
        });
      };
      var loadBalances = function loadBalances() {
        if (!_this2.state.monthRangeInfoReady || _this2.state.monthRangeInfoEmpty) {
          return Promise.resolve();
        }
        return _this2.foodPayBalanceRepository.getStudentBalances(fpVals.PCLID).then(function (balances) {
          if (_this2.balanceMonthes) {
            // дополняем до полной таблицы пустыми значениями
            balances.forEach(function (x) {
              _this2.balanceMonthes.filter(function (y) {
                return !x.monthBalances.some(function (z) {
                  return z.numMonth == y.numMonth;
                });
              }).forEach(function (bm) {
                x.monthBalances.push({
                  balanceId: null,
                  numMonth: bm.numMonth,
                  balance: null
                });
              });
              x.monthBalances = x.monthBalances.sort(function (a, b) {
                return a.numMonth - b.numMonth;
              });
              if (x.free) {
                x.fullName += " ".concat(_this2.language.Generic.Common.kRemovedStudentMark);
              }
            });
          }
          _this2.studentBalances = balances;
          return Promise.resolve();
        });
      };
      return Promise.all([loadMonthRangeInfo()]).then(loadBalances).then(function () {
        _this2.$appLoader.hide();
        _this2.$scope.$applyAsync();
      });
    }
  }, {
    key: "getMonthTitle",
    value: function getMonthTitle(startMonth) {
      var month = startMonth.toLocaleString("ru", {
        month: "long"
      });
      month = month[0].toUpperCase() + month.substring(1);
      return "".concat(month, " ").concat(startMonth.getFullYear());
    }
  }, {
    key: "calendar2LearnNumMonth",
    value: function calendar2LearnNumMonth(calendarNum) {
      return (calendarNum + 3) % 12 + 1;
    }
  }, {
    key: "editBalance",
    value: function editBalance(monthInfo) {
      var editBalances = null;
      if (monthInfo.numMonth == 1) {
        editBalances = angular.copy(this.studentBalances);
      } else {
        editBalances = angular.copy(this.studentBalances.filter(function (x) {
          var _a;
          return !x.free || ((_a = x.monthBalances[monthInfo.numMonth - 2].balance) !== null && _a !== void 0 ? _a : 0) != 0;
        }));
        editBalances.forEach(function (x) {
          return x.monthBalances = x.monthBalances.filter(function (y) {
            return y.numMonth == monthInfo.numMonth;
          });
        });
      }
      if (!editBalances || editBalances.length == 0) {
        this.$dialogs.message(this.language.Generic.FoodPayModule.kNoAvailableStudents);
        return;
      }
      var fpValues = this.filterPanel.getValues();
      var fpTexts = this.filterPanel.getTexts();
      this.payBalanceEditContext.filterClass = {
        id: fpValues.PCLID,
        name: fpTexts.PCLID
      };
      this.payBalanceEditContext.monthInfo = angular.copy(monthInfo);
      this.payBalanceEditContext.studentBalances = editBalances;
      this.$location.path("/balance/edit/");
    }
  }]);
  return FoodPayBalanceController;
}();
var FoodPayBalanceComponent = {
  controller: FoodPayBalanceController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/foodpay/balance/foodpay.balance.component.html",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arEditFoodPayBalanceAll, Rights.arEditFoodPayBalanceSelf])).Set()
};
exports.FoodPayBalanceComponent = FoodPayBalanceComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodPayOrdersComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(8));
var Rights = _interopRequireWildcard(__webpack_require__(3));
var _commonRouting = __webpack_require__(5);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FoodPayOrdersController = /*#__PURE__*/function () {
  FoodPayOrdersController.$inject = ["pageContext", "$scope", "appContext", "$appLoader", "dateUtils", "$alerts", "$dialogs", "$longWork", "$q", "foodPayOrdersRepository", "foodPayNormsRepository", "$location", "language"];
  /*@ngInject*/
  function FoodPayOrdersController(pageContext, $scope, appContext, $appLoader, dateUtils, $alerts, $dialogs, $longWork, $q, foodPayOrdersRepository, foodPayNormsRepository, $location, language) {
    _classCallCheck(this, FoodPayOrdersController);
    this.$scope = $scope;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.dateUtils = dateUtils;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$longWork = $longWork;
    this.$q = $q;
    this.foodPayOrdersRepository = foodPayOrdersRepository;
    this.foodPayNormsRepository = foodPayNormsRepository;
    this.$location = $location;
    this.language = language;
    this.state = {
      ready: false,
      emptyData: false
    };
    pageContext.title = this.language.Generic.MenuFolders.kFNFoodPayOrders;
    pageContext.parent = null;
    pageContext.back = null;
    this.data = {
      selection: new _selectable["default"](),
      schoolOrders: null
    };
    this.filterPanel = null;
    this.init();
  }
  _createClass(FoodPayOrdersController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.foodPayNormsRepository.getFoodPayNorms().then(function (norms) {
        return _this.noPayNorms = norms.length == 0;
      });
      var fpUrl = "/webapi/food-pay/school-orders/init-filters";
      this.filterPanelSettings = {
        url: fpUrl,
        initUrl: fpUrl,
        events: {
          ready: function ready() {
            return _this.onReady();
          },
          emptyChoice: function emptyChoice() {
            _this.$appLoader.hide();
            _this.$scope.$applyAsync();
          }
        }
      };
    }
  }, {
    key: "onReady",
    value: function onReady() {
      this.state.ready = false;
      this.load();
    }
  }, {
    key: "load",
    value: function load() {
      var _this2 = this;
      var fpVals = this.filterPanel.getValues();
      var monthId = fpVals.MonthsFilter;
      var year = parseInt(monthId.split("_")[0]);
      var month = parseInt(monthId.split("_")[1]);
      var getSchoolOrders = this.foodPayOrdersRepository.getSchoolOrders(year, month).then(function (orders) {
        return _this2.data.schoolOrders = orders;
      });
      return this.$q.when(getSchoolOrders).then(function () {
        _this2.data.selection.dropSelect();
        _this2.state.ready = true;
        _this2.state.emptyData = !_this2.data.schoolOrders || !_this2.data.schoolOrders.length;
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "canClick",
    value: function canClick() {
      return this.data.selection.selected != null;
    }
  }, {
    key: "hasEditRight",
    value: function hasEditRight() {
      return this.appContext.hasAnyRight([Rights.arEditFoodPayOrders]);
    }
  }, {
    key: "checkApproved",
    value: function checkApproved() {
      var schoolOrder = this.data.selection.selected;
      return schoolOrder.approved;
    }
  }, {
    key: "approveSchoolOrder",
    value: function approveSchoolOrder() {
      var _this3 = this;
      var schoolOrder = this.data.selection.selected;
      var msg = this.language.Generic.FoodPayModule.kApproveWarn.replace("%date%", this.dateUtils.date2str(new Date(schoolOrder.day)));
      this.$dialogs.confirm(msg).then(function () {
        return _this3.$longWork.execute(_this3.foodPayOrdersRepository.approveSchoolOrder(schoolOrder.id));
      }).then(function () {
        _this3.$alerts.success(_this3.language.Generic.FoodPayModule.kApproveOrderMsg);
        _this3.load();
      });
    }
  }, {
    key: "disapproveSchoolOrder",
    value: function disapproveSchoolOrder() {
      var _this4 = this;
      var schoolOrder = this.data.selection.selected;
      var work = this.foodPayOrdersRepository.disapproveSchoolOrder(schoolOrder.id);
      this.$longWork.execute(work).then(function () {
        _this4.$alerts.success(_this4.language.Generic.FoodPayModule.kDisapproveOrderMsg);
        _this4.load();
      });
    }
  }, {
    key: "goFoodPayNorms",
    value: function goFoodPayNorms() {
      this.$location.path("/payment-norms");
    }
  }, {
    key: "hasRightsOnPayNorms",
    value: function hasRightsOnPayNorms() {
      return this.appContext.hasAnyRight([Rights.arEditFoodPayNorms]);
    }
  }]);
  return FoodPayOrdersController;
}();
var FoodPayOrdersComponent = {
  controller: FoodPayOrdersController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/foodpay/orders/foodpay.orders.component.html",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arEditFoodPayOrders, Rights.arViewFoodPayOrders])).Set()
};
exports.FoodPayOrdersComponent = FoodPayOrdersComponent;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostFoodPayOrderComponent = exports.MonthDaySelectorComponent = exports.GenerateFoodPayDocumentComponent = exports.FoodPayPaymentsComponent = exports.DisplayPayCodeComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(8));
var _netcityModalCtrl = __webpack_require__(10);
var _nsModal = __webpack_require__(11);
var _weeksHelper = __webpack_require__(12);
var Rights = _interopRequireWildcard(__webpack_require__(3));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var Month = /*#__PURE__*/_createClass(function Month(year, number) {
  _classCallCheck(this, Month);
  this.year = year;
  this.startDate = new Date(year, number - 1, 1);
  this.endDate = new Date(this.startDate).addMonths(1).addDays(-1);
  this.number = number;
  this.name = moment(this.startDate).format('MMMM') + " " + year;
});
var FoodPayPaymentsController = /*#__PURE__*/function () {
  FoodPayPaymentsController.$inject = ["$scope", "dateUtils", "pageContext", "$appLoader", "$longWork", "$alerts", "appContext", "contextService", "$dialogs", "$uibModal", "foodPayDocumentsRepository", "foodPayStudentOrdersRepository", "downloadService", "parentStudentsListService"];
  /*@ngInject*/
  function FoodPayPaymentsController($scope, dateUtils, pageContext, $appLoader, $longWork, $alerts, appContext, contextService, $dialogs, $uibModal, foodPayDocumentsRepository, foodPayStudentOrdersRepository, downloadService, parentStudentsListService) {
    _classCallCheck(this, FoodPayPaymentsController);
    this.$scope = $scope;
    this.dateUtils = dateUtils;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.appContext = appContext;
    this.contextService = contextService;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.foodPayDocumentsRepository = foodPayDocumentsRepository;
    this.foodPayStudentOrdersRepository = foodPayStudentOrdersRepository;
    this.downloadService = downloadService;
    this.parentStudentsListService = parentStudentsListService;
    this.orderSelection = new _selectable["default"]();
    this.payDocumentSelection = new _selectable["default"]();
    pageContext.title = "Оплата питания";
    this.showOrderBlock = appContext.hasRights([Rights.arPostFoodPayStudentOrders]);
    this.showPayDocumentBlock = appContext.hasRights([Rights.arFoodPayPayment]);
    this.init();
  }
  _createClass(FoodPayPaymentsController, [{
    key: "init",
    value: function init() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.initMonthes();
            case 2:
              this.parentStudentsListService.student.subscribe(function (student) {
                _this.load(student.id).then(function () {
                  _this.$appLoader.hide();
                });
              });
              this.parentStudentsListService.showStudentsList = true;
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "initMonthes",
    value: function initMonthes() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;
        var yearId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              yearId = parseInt(this.appContext.yearId);
              _context2.next = 3;
              return this.contextService.getYears().then(function (years) {
                _this2.year = years.find(function (y) {
                  return y.id == yearId;
                });
                _this2.year.startDate = _this2.dateUtils.asUTCDate(_this2.year.startDate);
                _this2.year.endDate = _this2.dateUtils.asUTCDate(_this2.year.endDate);
                var calendarStartYear = _this2.year.startDate.getFullYear();
                var calendarEndYear = _this2.year.endDate.getFullYear();
                _this2.monthes = [new Month(calendarStartYear, 9), new Month(calendarStartYear, 10), new Month(calendarStartYear, 11), new Month(calendarStartYear, 12), new Month(calendarEndYear, 1), new Month(calendarEndYear, 2), new Month(calendarEndYear, 3), new Month(calendarEndYear, 4), new Month(calendarEndYear, 5), new Month(calendarEndYear, 6), new Month(calendarEndYear, 7), new Month(calendarEndYear, 8)];
                var today = new Date().getTime();
                var sortedMonthes = _this2.monthes.map(function (m) {
                  return {
                    diff: m.endDate.getTime() - today,
                    m: m
                  };
                }).sort(function (a, b) {
                  return b.diff - a.diff;
                });
                _this2.currentMonth = sortedMonthes[0].m;
                var monthIndex = _this2.monthes.indexOf(_this2.currentMonth);
                _this2.monthes = _this2.monthes.filter(function (m, i) {
                  return i <= monthIndex + 1;
                });
                _this2.month = angular.copy(_this2.currentMonth);
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "load",
    value: function load(studentId) {
      var _this3 = this;
      studentId = studentId || this.parentStudentsListService.student.getValue().id;
      var promises = [];
      if (this.showPayDocumentBlock) {
        var yearId = parseInt(this.appContext.yearId);
        var getPayDocs = this.foodPayDocumentsRepository.getPayDocuments(studentId, yearId).then(function (payDocs) {
          payDocs.forEach(function (d) {
            return d.startMonth = _this3.dateUtils.asUTCDate(d.startMonth);
          });
          _this3.payDocuments = payDocs;
        });
        promises.push(getPayDocs);
      }
      if (this.showOrderBlock) {
        var filter = {
          studentId: [studentId],
          year: this.month.year,
          month: this.month.number
        };
        var getOrders = this.foodPayStudentOrdersRepository.getOrdersByFilter(filter).then(function (orders) {
          _this3.payOrders = orders;
        });
        promises.push(getOrders);
      }
      return Promise.all(promises);
    }
  }, {
    key: "changeMonth",
    value: function changeMonth() {
      this.load();
    }
  }, {
    key: "postOrder",
    value: function postOrder() {
      var _this4 = this;
      var modal = this.$uibModal.open({
        controller: PostFoodPayOrderComponent.controller,
        controllerAs: PostFoodPayOrderComponent.controllerAs,
        template: PostFoodPayOrderComponent.template,
        resolve: {
          studentId: function studentId() {
            return _this4.parentStudentsListService.student.getValue().id;
          },
          monthes: function monthes() {
            return _this4.monthes;
          },
          year: function year() {
            return _this4.year;
          }
        }
      });
      modal.result.then(function (day) {
        var editedMonth = _this4.monthes.find(function (m) {
          return m.startDate <= day && m.endDate >= day;
        });
        if (editedMonth) {
          _this4.month = editedMonth;
        }
        _this4.load();
      });
    }
  }, {
    key: "deleteOrder",
    value: function deleteOrder() {
      var _this5 = this;
      var order = this.orderSelection.item;
      var request = {
        day: [order.day],
        orders: [{
          studentId: this.parentStudentsListService.student.getValue().id
        }]
      };
      this.$dialogs.confirmDelete("Вы действительно хотите отозвать заявку на питание?").then(function () {
        var work = _this5.foodPayStudentOrdersRepository.saveOrders(request);
        return _this5.$longWork.execute(work);
      }).then(function () {
        _this5.$alerts.success("Заявка успешно отозвана");
        _this5.payOrders = _this5.payOrders.filter(function (o) {
          return o.day != order.day;
        });
        _this5.orderSelection.dropSelect();
        _this5.$scope.$applyAsync();
      });
    }
  }, {
    key: "generatePayDocument",
    value: function generatePayDocument() {
      var _this6 = this;
      var modal = this.$uibModal.open({
        controller: GenerateFoodPayDocumentComponent.controller,
        controllerAs: GenerateFoodPayDocumentComponent.controllerAs,
        template: GenerateFoodPayDocumentComponent.template,
        resolve: {
          studentId: function studentId() {
            return _this6.parentStudentsListService.student.getValue().id;
          },
          month: function month() {
            return angular.copy(_this6.currentMonth);
          },
          monthes: function monthes() {
            return _this6.monthes;
          }
        }
      });
      modal.result.then(function () {
        return _this6.load();
      });
    }
  }, {
    key: "downloadPdf",
    value: function downloadPdf(payDoc) {
      this.$longWork.execute(this.downloadService.downloadFile("/webapi/food-pay/payment-documents/" + payDoc.id + "/pdf"));
    }
  }, {
    key: "displayPayCode",
    value: function displayPayCode(payDoc) {
      var _this7 = this;
      this.$longWork.execute(this.foodPayDocumentsRepository.getQrCodeBase64(payDoc.id)).then(function (_qrCode) {
        var modal = _this7.$uibModal.open({
          controller: DisplayPayCodeComponent.controller,
          controllerAs: DisplayPayCodeComponent.controllerAs,
          template: DisplayPayCodeComponent.template,
          resolve: {
            paymentId: function paymentId() {
              return payDoc.id;
            },
            qrCode: function qrCode() {
              return _qrCode;
            }
          }
        });
      });
    }
  }]);
  return FoodPayPaymentsController;
}();
var FoodPayPaymentsComponent = {
  controller: FoodPayPaymentsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/foodpay/payments/foodpay.payments.component.html"
};
exports.FoodPayPaymentsComponent = FoodPayPaymentsComponent;
var PostFoodPayOrderController = /*#__PURE__*/function (_NetCityModalControll) {
  PostFoodPayOrderController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$timeout", "dateUtils", "studentId", "monthes", "$alerts", "$longWork", "year", "foodPayStudentOrdersRepository", "foodPayNormsRepository"];
  _inherits(PostFoodPayOrderController, _NetCityModalControll);
  var _super = _createSuper(PostFoodPayOrderController);
  /*@ngInject*/
  function PostFoodPayOrderController($scope, $uibModalInstance, changeTracker, $dialogs, $timeout, dateUtils, studentId, monthes, $alerts, $longWork, year, foodPayStudentOrdersRepository, foodPayNormsRepository) {
    var _this8;
    _classCallCheck(this, PostFoodPayOrderController);
    _this8 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this8.$timeout = $timeout;
    _this8.dateUtils = dateUtils;
    _this8.studentId = studentId;
    _this8.monthes = monthes;
    _this8.$longWork = $longWork;
    _this8.foodPayStudentOrdersRepository = foodPayStudentOrdersRepository;
    _this8.foodPayNormsRepository = foodPayNormsRepository;
    _this8.validation = {
      message: null,
      isValid: function isValid() {
        var today = _this8.dateUtils.asUTCDate(new Date());
        if (_this8.dateUtils.asUTCDate(_this8.startDate) < today) {
          _this8.validation.message = "Нельзя подавать заявки на прошедшие даты";
          return false;
        }
        if (_this8.dateUtils.asUTCDate(_this8.endDate) > _this8.dateRangeOptions.calendarMaxDate) {
          _this8.validation.message = "Нельзя подавать заявки далее чем на 2 недели";
          return false;
        }
        _this8.validation.message = null;
        return true;
      }
    };
    _this8.header = "Отправка заявки на питание";
    _this8.month = _this8.monthes[0];
    var weeks = new _weeksHelper.WeeksHelper().getWeekList(year.startDate, year.endDate);
    var today = dateUtils.asUTCDate(new Date());
    var tomorrow = today.addDays(1);
    var currentWeek = weeks.find(function (w) {
      return w.start <= today && w.end >= today;
    });
    if (!currentWeek) {
      _this8.$dialogs.message("Учебный год завершился. Нет возможности подать заявку на прошлые даты");
      _this8.$timeout(20).then(function () {
        return _this8.$uibModalInstance.close();
      });
    }
    var week = currentWeek || weeks.pop();
    _this8.startDate = week.start;
    if (_this8.startDate < today) {
      _this8.startDate = tomorrow;
    }
    _this8.endDate = week.end;
    _this8.dateChanged();
    var limitEndDate = week.end.addDays(14);
    if (limitEndDate < today) {
      limitEndDate = today;
    }
    _this8.dateRangeOptions = {
      calendarMinDate: today,
      calendarMaxDate: limitEndDate,
      calendarSettings: null,
      datePickerOptions: {
        keepEmptyField: true,
        autoCorrectDates: false
      }
    };
    _this8.buttons = [{
      title: "Сохранить",
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      isEnabled: function isEnabled() {
        return _this8.payNorm != null;
      },
      action: function action() {
        return _this8.save();
      }
    }, {
      title: "Отмена",
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this8.close();
      }
    }];
    return _this8;
  }
  _createClass(PostFoodPayOrderController, [{
    key: "dateChanged",
    value: function dateChanged() {
      var _this9 = this;
      if (!this.startDate) {
        return;
      }
      var startDate = this.dateUtils.asUTCDate(this.startDate);
      this.foodPayNormsRepository.getFoodPayNormOnDate(startDate).then(function (payNorm) {
        _this9.payNorm = payNorm;
        if (payNorm.breakfastCost == 0) {
          _this9.breakfast = false;
        }
        if (payNorm.lunchCost == 0) {
          _this9.lunch = false;
        }
        if (payNorm.snackCost == 0) {
          _this9.snack = false;
        }
        _this9.$scope.$applyAsync();
      });
    }
  }, {
    key: "save",
    value: function save() {
      var _this10 = this;
      if (!this.validation.isValid()) {
        return;
      }
      if (this.hasNotCheckedAnyTypeOfFood()) {
        this.$dialogs.error("Не выбран ни один тип питания");
        return;
      }
      var range = new DateRange();
      range.startDate = this.dateUtils.asUTCDate(this.startDate);
      range.endDate = this.dateUtils.asUTCDate(this.endDate);
      var request = {
        day: range.getDays(),
        orders: [{
          studentId: this.studentId,
          breakfast: this.breakfast,
          lunch: this.lunch,
          snack: this.snack
        }]
      };
      var save = this.foodPayStudentOrdersRepository.saveOrders(request);
      this.$longWork.execute(save).then(function (result) {
        var _a, _b;
        var message = "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0437\u0430\u044F\u0432\u043E\u043A: ".concat(result.created);
        if (((_a = result.eventDays) === null || _a === void 0 ? void 0 : _a.length) > 0) {
          message += "\n\u041D\u0430 \u043A\u0430\u043D\u0438\u043A\u0443\u043B\u044B \u0438 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u0432\u044B\u043F\u0430\u043B\u043E ".concat(result.eventDays.length, " \u0434\u043D\u0435\u0439. \u041E\u043D\u0438 \u043D\u0435 \u0431\u044B\u043B\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B.");
        }
        if (((_b = result.weekEndDays) === null || _b === void 0 ? void 0 : _b.length) > 0) {
          message += "\n\u041D\u0430 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u043D\u0438 \u0432\u044B\u043F\u0430\u043B\u043E ".concat(result.weekEndDays.length, " \u0434\u043D\u0435\u0439.");
        }
        _this10.$dialogs.message(message);
        _this10.$uibModalInstance.close(request.day[0]);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }, {
    key: "hasNotCheckedAnyTypeOfFood",
    value: function hasNotCheckedAnyTypeOfFood() {
      return !(this.breakfast || this.lunch || this.snack);
    }
  }]);
  return PostFoodPayOrderController;
}(_netcityModalCtrl.NetCityModalController);
var DateRange = /*#__PURE__*/function () {
  function DateRange() {
    _classCallCheck(this, DateRange);
  }
  _createClass(DateRange, [{
    key: "getDays",
    value: function getDays() {
      var dayList = [];
      var loopDate = this.startDate;
      while (loopDate <= this.endDate) {
        dayList.push(loopDate);
        loopDate = new Date(loopDate).addDays(1);
      }
      return dayList;
    }
  }]);
  return DateRange;
}();
var PostFoodPayOrderComponent = {
  controller: PostFoodPayOrderController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\t\t<form name=\"$ctrl.form\">\n\t\t<ns-form control-size=\"col-md-9\" label-size=\"col-md-3\" class=\"form-horizontal\">\n\t\t\t<ns-form-group title=\"\u041F\u0435\u0440\u0438\u043E\u0434\" ng-class=\"{ 'has-error': !$ctrl.validation.isValid() }\">\n\t\t\t\t<edit-date-range-component\n\t\t\t\t\tstart-date=\"$ctrl.startDate\"\n\t\t\t\t\tend-date=\"$ctrl.endDate\"\n\t\t\t\t\toptions=\"$ctrl.dateRangeOptions\"\n\t\t\t\t\tdate-range=\"true\"\n\t\t\t\t\tdate-change=\"$ctrl.dateChanged()\"\n\t\t\t\t\tname=\"range\">\n\t\t\t\t</edit-date-range-component>\n\t\t\t\t<div ng-if=\"!$ctrl.validation.isValid()\">\n\t\t\t\t\t<span class=\"help-block\">{{$ctrl.validation.message}}</span>\n\t\t\t\t</div>\n\t\t\t</ns-form-group>\n\n\t\t\t<ns-form-group title=\"\u041F\u0438\u0442\u0430\u043D\u0438\u0435\" ng-if=\"$ctrl.payNorm\" ng-class=\"{ 'has-error': $ctrl.hasNotCheckedAnyTypeOfFood()}\">\n\t\t\t\t<span class=\"help-block\" ng-show=\"$ctrl.hasNotCheckedAnyTypeOfFood()\">\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435</span>\n\t\t\t\t<div class=\"checkbox\" ng-if=\"$ctrl.payNorm\"> <label> <input type=\"checkbox\" ng-model=\"$ctrl.breakfast\" ng-disabled=\"!$ctrl.payNorm.breakfastCost\"> \u0417\u0430\u0432\u0442\u0440\u0430\u043A </label> </div>\n\t\t\t\t<div class=\"checkbox\" ng-if=\"$ctrl.payNorm\"> <label> <input type=\"checkbox\" ng-model=\"$ctrl.lunch\" ng-disabled=\"!$ctrl.payNorm.lunchCost\"> \u041E\u0431\u0435\u0434 </label> </div>\n\t\t\t\t<div class=\"checkbox\" ng-if=\"$ctrl.payNorm\"> <label> <input type=\"checkbox\" ng-model=\"$ctrl.snack\" ng-disabled=\"!$ctrl.payNorm.snackCost\"> \u041F\u043E\u043B\u0434\u043D\u0438\u043A </label> </div>\n\t\t\t</ns-form-group>\n\n\t\t\t<div ng-if=\"!$ctrl.payNorm\" class=\"alert alert-warning\" role=\"alert\">\n\t\t\t\t\u041D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0434\u0430\u0442\u0443 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F. \n\t\t\t\t\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043A\u043B\u0430\u0441\u0441\u043D\u043E\u043C\u0443 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044E \u0432 \u0448\u043A\u043E\u043B\u0443.\n\t\t\t</div>\n\n\t\t</ns-form>\n\t\t</form>\n\t</ns-modal>\n\t"
};
exports.PostFoodPayOrderComponent = PostFoodPayOrderComponent;
var DisplayPayCodeController = /*#__PURE__*/function (_NetCityModalControll2) {
  DisplayPayCodeController.$inject = ["$scope", "appContext", "$uibModalInstance", "changeTracker", "$dialogs", "paymentId", "qrCode"];
  _inherits(DisplayPayCodeController, _NetCityModalControll2);
  var _super2 = _createSuper(DisplayPayCodeController);
  /*@ngInject*/
  function DisplayPayCodeController($scope, appContext, $uibModalInstance, changeTracker, $dialogs, paymentId, qrCode) {
    var _this11;
    _classCallCheck(this, DisplayPayCodeController);
    _this11 = _super2.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this11.qrCode = qrCode;
    _this11.header = "QR-код для оплаты";
    _this11.buttons = [{
      title: "Закрыть",
      action: function action() {
        return _this11.close();
      }
    }];
    _this11.url = "/webapi/food-pay/payment-documents/".concat(paymentId, "/qr-code?at=").concat(appContext.at);
    return _this11;
  }
  _createClass(DisplayPayCodeController, [{
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return DisplayPayCodeController;
}(_netcityModalCtrl.NetCityModalController);
var DisplayPayCodeComponent = {
  controller: DisplayPayCodeController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\t\t<div style=\"text-align: center\">\n\t\t\t<!--<img ng-src=\"{{$ctrl.url}}\" style=\"width: 400px; height: 400px; image-rendering: pixelated;\" />-->\n\t\t\t<object style=\"width: 400px; height: 400px; image-rendering: pixelated;\" data=\"data:image/png;base64, {{$ctrl.qrCode}}\"></object>\n\t\t</div>\n\t</ns-modal>\n\t"
};
exports.DisplayPayCodeComponent = DisplayPayCodeComponent;
var GenerateFoodPayDocumentController = /*#__PURE__*/function (_NetCityModalControll3) {
  GenerateFoodPayDocumentController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "studentId", "monthes", "month", "$alerts", "$longWork", "foodPayDocumentsRepository"];
  _inherits(GenerateFoodPayDocumentController, _NetCityModalControll3);
  var _super3 = _createSuper(GenerateFoodPayDocumentController);
  /*@ngInject*/
  function GenerateFoodPayDocumentController($scope, $uibModalInstance, changeTracker, $dialogs, studentId, monthes, month, $alerts, $longWork, foodPayDocumentsRepository) {
    var _this12;
    _classCallCheck(this, GenerateFoodPayDocumentController);
    _this12 = _super3.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this12.studentId = studentId;
    _this12.monthes = monthes;
    _this12.month = month;
    _this12.$alerts = $alerts;
    _this12.$longWork = $longWork;
    _this12.foodPayDocumentsRepository = foodPayDocumentsRepository;
    _this12.header = "Формирование платежного документа";
    _this12.buttons = [{
      title: "Сохранить",
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this12.save();
      }
    }, {
      title: "Отмена",
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this12.close();
      }
    }];
    return _this12;
  }
  _createClass(GenerateFoodPayDocumentController, [{
    key: "save",
    value: function save() {
      var _this13 = this;
      var save = this.foodPayDocumentsRepository.generatePayDocument(this.studentId, this.month.year, this.month.number);
      this.$longWork.execute(save).then(function (payDocument) {
        _this13.$alerts.success("Платёжный документ успешно сформирован");
        _this13.$uibModalInstance.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return GenerateFoodPayDocumentController;
}(_netcityModalCtrl.NetCityModalController);
var GenerateFoodPayDocumentComponent = {
  controller: GenerateFoodPayDocumentController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\t\t<ns-form control-size=\"col-md-9\" label-size=\"col-md-3\" class=\"form-horizontal\">\n\t\t\t<ns-form-group title=\"\u041C\u0435\u0441\u044F\u0446\">\n\t\t\t\t<select class=\"form-control\" ng-change=\"$ctrl.changeMonth()\" ng-model=\"$ctrl.month\" ng-options=\"month as month.name for month in $ctrl.monthes track by month.number\"></select>\n\t\t\t</ns-form-group>\n\t\t</ns-form>\n\t</ns-modal>\n\t"
};
exports.GenerateFoodPayDocumentComponent = GenerateFoodPayDocumentComponent;
var MonthDaySelectorComponent = {
  selector: "monthDaysSelector",
  controller: /*#__PURE__*/function () {
    function controller() {
      _classCallCheck(this, controller);
    }
    _createClass(controller, [{
      key: "initWeeks",
      value: function initWeeks() {
        var days = [];
        var month = this.month.getMonth();
        var date = this.month;
        var weekDay = this.month.getDay();
        if (weekDay > 1) {
          for (var incr = weekDay; incr > 1; incr--) {
            var prevDay = new Date(date).addDays(-incr);
            days.push(prevDay);
          }
        }
        while (date.getMonth() === month) {
          days.push(date);
          date = new Date(date);
          date.setDate(date.getDate() + 1);
        }
        weekDay = date.getDay();
        if (weekDay < 7) {
          for (var _incr = 1; _incr < 7 - weekDay; _incr++) {
            var nextDay = new Date(date).addDays(_incr);
            days.push(nextDay);
          }
        }
        return days;
      }
    }]);
    return controller;
  }(),
  controllerAs: "$ctrl",
  template: "\n\t\t<table class=\"table-condensed\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"cw\">&nbsp;</th>\n\t\t\t\t\t<th class=\"dow\">\u041F\u043D</th>\n\t\t\t\t\t<th class=\"dow\">\u0412\u0442</th>\n\t\t\t\t\t<th class=\"dow\">\u0421\u0440</th>\n\t\t\t\t\t<th class=\"dow\">\u0427\u0442</th>\n\t\t\t\t\t<th class=\"dow\">\u041F\u0442</th>\n\t\t\t\t\t<th class=\"dow\">\u0421\u0431</th>\n\t\t\t\t\t<th class=\"dow\">\u0412\u0441</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr ng-repeat=\"week in $ctrl.weeks\">\n\t\t\t\t\t<td>{{week.num}}</td>\n\t\t\t\t\t<td ng-repeat=\"day in week.days\">{{day.num}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t"
};
exports.MonthDaySelectorComponent = MonthDaySelectorComponent;

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeeksHelper = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var WeeksHelper = /*#__PURE__*/function () {
  function WeeksHelper() {
    _classCallCheck(this, WeeksHelper);
  }
  _createClass(WeeksHelper, [{
    key: "getWeekList",
    value: function getWeekList(startDate, endDate) {
      var weekList = [];
      var jsMondayWeekDay = 1;
      var weekNumber = 1;
      var loopWeekStart = startDate;
      var weekDay = loopWeekStart.getDay();
      if (weekDay !== jsMondayWeekDay) {
        //перемещаем дату начала недели на понедельник, если это не так
        loopWeekStart.addDays(jsMondayWeekDay - weekDay);
      }
      while (loopWeekStart < endDate) {
        var weekStart = new Date(loopWeekStart);
        var weekEnd = new Date(weekStart).addDays(6);
        var title = weekNumber + " " + language.Generic.Common.kWeek.toLowerCase() + ": " + dateUtils.date2str(weekStart) + " - " + dateUtils.date2str(weekEnd);
        var week = {
          number: weekNumber,
          start: weekStart,
          end: weekEnd,
          title: title
        };
        weekList.push(week);
        weekNumber++;
        loopWeekStart = new Date(weekStart).addDays(7);
      }
      return weekList;
    }
  }, {
    key: "getCurrentWeek",
    value: function getCurrentWeek(weekList, currentDate) {
      var currentWeek = _.find(weekList, function (week) {
        return currentDate >= week.start && currentDate <= week.end;
      });
      if (currentWeek) {
        if (moment(currentDate).isSame(moment(currentWeek.end))) {
          currentDate = moment(currentDate).add(1, "days").toDate();
          currentWeek = _.find(weekList, function (week) {
            return moment(currentDate).isSame(moment(week.start));
          });
        }
        if (currentWeek) {
          return currentWeek;
        }
      }
      currentWeek = _.last(weekList);
      return currentWeek;
    }
  }]);
  return WeeksHelper;
}();
exports.WeeksHelper = WeeksHelper;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassesRepository = exports.ClassExpandProp = void 0;
var _baseRepository = __webpack_require__(14);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;
var _common = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(16);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(17);
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodPayStudentOrdersRepository = exports.FoodPayOrdersRepository = exports.FoodPayNormsRepository = exports.FoodPayDocumentsRepository = exports.FoodPayBalanceRepository = void 0;
var _baseRepository = __webpack_require__(14);
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
var FoodPayOrdersRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(FoodPayOrdersRepository, _BaseRepository);
  var _super = _createSuper(FoodPayOrdersRepository);
  function FoodPayOrdersRepository() {
    _classCallCheck(this, FoodPayOrdersRepository);
    return _super.apply(this, arguments);
  }
  _createClass(FoodPayOrdersRepository, [{
    key: "getOrderByDate",
    value: function getOrderByDate(date) {
      return this.$http.get("/webapi/food-pay/school-orders/get-by-date", {
        params: {
          date: date
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getSchoolOrders",
    value: function getSchoolOrders(year, month) {
      var params = {
        year: year,
        month: month
      };
      return this.$http.get("/webapi/food-pay/school-orders", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "approveSchoolOrder",
    value: function approveSchoolOrder(id) {
      return this.$http.post("/webapi/food-pay/school-orders/".concat(id, "/approve")).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "disapproveSchoolOrder",
    value: function disapproveSchoolOrder(id) {
      return this.$http.post("/webapi/food-pay/school-orders/".concat(id, "/disapprove")).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return FoodPayOrdersRepository;
}(_baseRepository.BaseRepository);
exports.FoodPayOrdersRepository = FoodPayOrdersRepository;
var FoodPayBalanceRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(FoodPayBalanceRepository, _BaseRepository2);
  var _super2 = _createSuper(FoodPayBalanceRepository);
  function FoodPayBalanceRepository() {
    _classCallCheck(this, FoodPayBalanceRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(FoodPayBalanceRepository, [{
    key: "getStudentBalances",
    value: function getStudentBalances(classId) {
      var params = {
        classId: classId
      };
      return this.$http.get("/webapi/food-pay/balance", {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "getBalanceMonthRangeInfo",
    value: function getBalanceMonthRangeInfo() {
      return this.$http.get("/webapi/food-pay/balance/month-range-info").then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "saveBalance",
    value: function saveBalance(classId, numMonth, studentBalances) {
      var params = {
        classId: classId,
        numMonth: numMonth
      };
      return this.$http.post("/webapi/food-pay/balance", studentBalances, {
        params: params
      }).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);
  return FoodPayBalanceRepository;
}(_baseRepository.BaseRepository);
exports.FoodPayBalanceRepository = FoodPayBalanceRepository;
var FoodPayStudentOrdersRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(FoodPayStudentOrdersRepository, _BaseRepository3);
  var _super3 = _createSuper(FoodPayStudentOrdersRepository);
  function FoodPayStudentOrdersRepository() {
    _classCallCheck(this, FoodPayStudentOrdersRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(FoodPayStudentOrdersRepository, [{
    key: "getOrdersByFilter",
    value: function getOrdersByFilter(request) {
      return this.$http.post("/webapi/food-pay/student-orders/get-by-filter", request).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "saveOrders",
    value: function saveOrders(request) {
      return this.$http.post("/webapi/food-pay/student-orders", request).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getStudents",
    value: function getStudents(classId) {
      return this.$http.get('/webapi/users/studentlist', {
        params: {
          classId: classId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "searchStudents",
    value: function searchStudents(name, schoolYearId, schoolId) {
      var self = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      return this.$http.get('/webapi/users/search', {
        params: {
          withClassName: true,
          student: true,
          schoolYearId: schoolYearId,
          schoolId: schoolId,
          name: name,
          self: self
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return FoodPayStudentOrdersRepository;
}(_baseRepository.BaseRepository);
exports.FoodPayStudentOrdersRepository = FoodPayStudentOrdersRepository;
var FoodPayDocumentsRepository = /*#__PURE__*/function (_BaseRepository4) {
  _inherits(FoodPayDocumentsRepository, _BaseRepository4);
  var _super4 = _createSuper(FoodPayDocumentsRepository);
  function FoodPayDocumentsRepository() {
    _classCallCheck(this, FoodPayDocumentsRepository);
    return _super4.apply(this, arguments);
  }
  _createClass(FoodPayDocumentsRepository, [{
    key: "getStudents",
    value: function getStudents() {
      return this.$http.get("/webapi/context/students").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getPayDocuments",
    value: function getPayDocuments(studentId, yearId) {
      return this.$http.get("/webapi/food-pay/payment-documents", {
        params: {
          studentId: studentId,
          yearId: yearId
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "generatePayDocument",
    value: function generatePayDocument(studentId, year, month) {
      return this.$http.post("/webapi/food-pay/payment-documents", null, {
        params: {
          studentId: studentId,
          year: year,
          month: month
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getQrCodeBase64",
    value: function getQrCodeBase64(paymentId) {
      return this.$http.get("/webapi/food-pay/payment-documents/".concat(paymentId, "/qr-code"), {
        params: {
          base64: true
        }
      }).then(this.handleResponse, this.handleError);
    }
  }]);
  return FoodPayDocumentsRepository;
}(_baseRepository.BaseRepository);
exports.FoodPayDocumentsRepository = FoodPayDocumentsRepository;
var FoodPayNormsRepository = /*#__PURE__*/function (_BaseRepository5) {
  _inherits(FoodPayNormsRepository, _BaseRepository5);
  var _super5 = _createSuper(FoodPayNormsRepository);
  function FoodPayNormsRepository() {
    _classCallCheck(this, FoodPayNormsRepository);
    return _super5.apply(this, arguments);
  }
  _createClass(FoodPayNormsRepository, [{
    key: "getFoodPayNorms",
    value: function getFoodPayNorms() {
      return this.$http.get("/webapi/food-pay/payment-norms").then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getFoodPayNormOnDate",
    value: function getFoodPayNormOnDate(date) {
      return this.$http.get("/webapi/food-pay/payment-norms/get-on-date", {
        params: {
          date: date
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createFoodPayNorm",
    value: function createFoodPayNorm(dto) {
      return this.$http.put("/webapi/food-pay/payment-norms", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editFoodPayNorm",
    value: function editFoodPayNorm(dto) {
      return this.$http.post("/webapi/food-pay/payment-norms", dto).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "deleteFoodPayNorm",
    value: function deleteFoodPayNorm(paynormId) {
      return this.$http["delete"]("/webapi/food-pay/payment-norms/".concat(paynormId)).then(this.handleResponse, this.handleError);
    }
  }]);
  return FoodPayNormsRepository;
}(_baseRepository.BaseRepository);
exports.FoodPayNormsRepository = FoodPayNormsRepository;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditFoodPayBalanceComponent = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EditFoodPayBalanceController = /*#__PURE__*/function () {
  EditFoodPayBalanceController.$inject = ["pageContext", "$appLoader", "language", "foodPayBalanceRepository", "$alerts", "payBalanceEditContext", "$location", "changeTracker", "$longWork"];
  /*@ngInject*/
  function EditFoodPayBalanceController(pageContext, $appLoader, language, foodPayBalanceRepository, $alerts, payBalanceEditContext, $location, changeTracker, $longWork) {
    _classCallCheck(this, EditFoodPayBalanceController);
    this.$appLoader = $appLoader;
    this.language = language;
    this.foodPayBalanceRepository = foodPayBalanceRepository;
    this.$alerts = $alerts;
    this.payBalanceEditContext = payBalanceEditContext;
    this.$location = $location;
    this.changeTracker = changeTracker;
    this.$longWork = $longWork;
    pageContext.title = this.language.Generic.FoodPayModule.kEditFoodPayBalanceTitle;
    pageContext.back = {
      history: true,
      href: '/balance/'
    };
    pageContext.parent = {
      title: this.language.Generic.MenuFolders.kFNFoodPayBalance,
      href: '/balance/'
    };
    if (!this.payBalanceEditContext.filterClass) {
      this.$location.path('/balance/');
    }
    this.classInfo = angular.copy(this.payBalanceEditContext.filterClass);
    this.monthInfo = angular.copy(this.payBalanceEditContext.monthInfo);
    this.restoreData();
    this.$appLoader.hide();
  }
  _createClass(EditFoodPayBalanceController, [{
    key: "restoreData",
    value: function restoreData() {
      this.studentBalances = angular.copy(this.payBalanceEditContext.studentBalances);
    }
  }, {
    key: "save",
    value: function save() {
      var _this = this;
      var studBalances = [];
      studBalances = this.studentBalances.map(function (sb) {
        return {
          balanceId: sb.monthBalances[0].balanceId,
          studentId: sb.id,
          balance: sb.monthBalances[0].balance
        };
      });
      var processing = this.$longWork.show();
      this.foodPayBalanceRepository.saveBalance(this.classInfo.id, this.monthInfo.numMonth, studBalances).then(function (savedBalance) {
        _this.studentBalances.forEach(function (sb) {
          return sb.monthBalances[0].balanceId = savedBalance.find(function (x) {
            return x.studentId == sb.id;
          }).balanceId;
        });
        _this.payBalanceEditContext.studentBalances = angular.copy(_this.studentBalances);
        _this.changeTracker.clearDataChanges();
        _this.$appLoader.hide();
        processing.close();
        _this.$alerts.success(_this.language.Generic.Common.kDataSaved);
      });
    }
  }]);
  return EditFoodPayBalanceController;
}();
var EditFoodPayBalanceComponent = {
  controller: EditFoodPayBalanceController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/foodpay/balance/edit/editFoodpay.balance.component.html"
};
exports.EditFoodPayBalanceComponent = EditFoodPayBalanceComponent;

/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodPayNormsComponent = exports.EditFoodNormComponent = void 0;
var _selectable = _interopRequireDefault(__webpack_require__(8));
var _netcityModalCtrl = __webpack_require__(10);
var _nsModal = __webpack_require__(11);
var _commonRouting = __webpack_require__(5);
var Rights = _interopRequireWildcard(__webpack_require__(3));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var FoodPayNormsController = /*#__PURE__*/function () {
  FoodPayNormsController.$inject = ["$scope", "dateUtils", "pageContext", "$appLoader", "$longWork", "$alerts", "$dialogs", "$uibModal", "foodPayNormsRepository", "language"];
  /*@ngInject*/
  function FoodPayNormsController($scope, dateUtils, pageContext, $appLoader, $longWork, $alerts, $dialogs, $uibModal, foodPayNormsRepository, language) {
    _classCallCheck(this, FoodPayNormsController);
    this.$scope = $scope;
    this.dateUtils = dateUtils;
    this.$appLoader = $appLoader;
    this.$longWork = $longWork;
    this.$alerts = $alerts;
    this.$dialogs = $dialogs;
    this.$uibModal = $uibModal;
    this.foodPayNormsRepository = foodPayNormsRepository;
    this.language = language;
    this.selection = new _selectable["default"]();
    pageContext.title = "Нормативы оплаты питания";
    pageContext.parent = {
      title: this.language.Generic.MenuFolders.kFNFoodPayOrders,
      href: "/orders/"
    };
    pageContext.back = {
      history: true
    };
    this.init();
  }
  _createClass(FoodPayNormsController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.foodPayNormsRepository.getFoodPayNorms().then(function (payNorms) {
        payNorms.forEach(function (pn) {
          return pn.startDate = _this.dateUtils.asUTCDate(pn.startDate);
        });
        _this.payNorms = payNorms;
        _this.$appLoader.hide();
      });
    }
  }, {
    key: "addPayNorm",
    value: function addPayNorm() {
      var _this2 = this;
      var blank = {
        id: 0,
        reason: "",
        startDate: this.dateUtils.asUTCDate(new Date()),
        breakfastCost: null,
        lunchCost: null,
        snackCost: null
      };
      var modal = this.$uibModal.open({
        controller: EditFoodNormComponent.controller,
        controllerAs: EditFoodNormComponent.controllerAs,
        template: EditFoodNormComponent.template,
        backdrop: "static",
        resolve: {
          payNorm: function payNorm() {
            return blank;
          }
        }
      });
      modal.result.then(function (payNorm) {
        _this2.$alerts.success("Норматив успешно добавлен");
        _this2.payNorms.push(payNorm);
        _this2.$scope.$applyAsync();
      });
    }
  }, {
    key: "editPayNorm",
    value: function editPayNorm() {
      var _this3 = this;
      var initialPayNorm = this.selection.item;
      var modal = this.$uibModal.open({
        controller: EditFoodNormComponent.controller,
        controllerAs: EditFoodNormComponent.controllerAs,
        template: EditFoodNormComponent.template,
        resolve: {
          payNorm: function payNorm() {
            return angular.copy(initialPayNorm);
          }
        }
      });
      modal.result.then(function (payNorm) {
        _this3.$alerts.success("Норматив успешно изменен");
        Object.assign(initialPayNorm, payNorm);
        _this3.$scope.$applyAsync();
      });
    }
  }, {
    key: "deletePayNorm",
    value: function deletePayNorm() {
      var _this4 = this;
      var payNorm = this.selection.item;
      this.$dialogs.confirmDelete("Вы действительно хотите удалить норматив?").then(function () {
        var work = _this4.foodPayNormsRepository.deleteFoodPayNorm(payNorm.id);
        return _this4.$longWork.execute(work);
      }).then(function () {
        _this4.$alerts.success("Норматив успешно удалён");
        _this4.payNorms = _this4.payNorms.filter(function (pn) {
          return pn.id != payNorm.id;
        });
        _this4.selection.dropSelect();
        _this4.$scope.$applyAsync();
      });
    }
  }]);
  return FoodPayNormsController;
}();
var FoodPayNormsComponent = {
  controller: FoodPayNormsController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/foodpay/paymentnorms/foodpay.paynorms.component.html",
  resolve: (0, _commonRouting.Guards)().Add((0, _commonRouting.RightsGuard)([Rights.arEditFoodPayNorms])).Set()
};
exports.FoodPayNormsComponent = FoodPayNormsComponent;
var EditFoodNormController = /*#__PURE__*/function (_NetCityModalControll) {
  EditFoodNormController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "$longWork", "payNorm", "foodPayNormsRepository"];
  _inherits(EditFoodNormController, _NetCityModalControll);
  var _super = _createSuper(EditFoodNormController);
  /*@ngInject*/
  function EditFoodNormController($scope, $uibModalInstance, changeTracker, $dialogs, $longWork, payNorm, foodPayNormsRepository) {
    var _this5;
    _classCallCheck(this, EditFoodNormController);
    _this5 = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this5.$longWork = $longWork;
    _this5.payNorm = payNorm;
    _this5.foodPayNormsRepository = foodPayNormsRepository;
    _this5.withBreakfast = true;
    _this5.withLunch = false;
    _this5.withSnack = false;
    _this5.header = "Редактирование норматива оплаты питания";
    if (payNorm.id > 0) {
      _this5.withBreakfast = payNorm.breakfastCost > 0 ? true : false;
      _this5.withLunch = payNorm.lunchCost > 0 ? true : false;
      _this5.withSnack = payNorm.snackCost > 0 ? true : false;
    }
    _this5.decimalInputSettings = {
      maxIntegerLength: 4,
      maxDecimalLength: 2
    };
    _this5.buttons = [{
      title: "Сохранить",
      "class": _nsModal.ButtonClass.primary,
      icon: "glyphicon glyphicon-floppy-save",
      action: function action() {
        return _this5.save();
      }
    }, {
      title: "Отмена",
      icon: "glyphicon glyphicon-ban-circle",
      action: function action() {
        return _this5.close();
      }
    }];
    return _this5;
  }
  _createClass(EditFoodNormController, [{
    key: "save",
    value: function save() {
      var _this6 = this;
      if (this.form.$invalid || this.formReason.$invalid) {
        this.form.$displayErrors = true;
        this.formReason.$displayErrors = true;
        return;
      }
      var saveModel = Object.assign({}, this.payNorm);
      saveModel.breakfastCost = this.withBreakfast ? saveModel.breakfastCost : null;
      saveModel.lunchCost = this.withLunch ? saveModel.lunchCost : null;
      saveModel.snackCost = this.withSnack ? saveModel.snackCost : null;
      var save = this.payNorm.id == 0 ? this.foodPayNormsRepository.createFoodPayNorm(saveModel) : this.foodPayNormsRepository.editFoodPayNorm(saveModel);
      this.$longWork.execute(save).then(function (result) {
        _this6.$uibModalInstance.close(result);
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.cancel();
    }
  }]);
  return EditFoodNormController;
}(_netcityModalCtrl.NetCityModalController);
var EditFoodNormComponent = {
  controller: EditFoodNormController,
  controllerAs: "$ctrl",
  template: "\n\t<ns-modal controller=\"$ctrl\" header=\"{{$ctrl.header}}\" buttons=\"$ctrl.buttons\">\n\t\t<form name=\"$ctrl.form\">\n\t\t<ns-form control-size=\"col-md-6\" label-size=\"col-md-6\" class=\"form-horizontal\">\n\t\t\t<ns-form-group title=\"\u041D\u0430\u0447\u0430\u043B\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u0430\">\n\t\t\t\t<date-input-component date-model=\"$ctrl.payNorm.startDate\" required=\"true\" readonly=\"$ctrl.payNorm.id > 0\"></date-input-component>\n\t\t\t</ns-form-group>\n\t\t\t<ns-form-group title=\"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u0432\u0442\u0440\u0430\u043A\u0430\" ng-class=\"{'has-error': $ctrl.form.breakfastCost.$invalid && ($ctrl.form.breakfastCost.$dirty || $ctrl.form.$displayErrors)}\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t<input name=\"breakfastCost\" ng-model=\"$ctrl.payNorm.breakfastCost\" ng-required=\"$ctrl.withBreakfast\" ng-disabled=\"!$ctrl.withBreakfast\" class=\"form-control\" float-input=\"$ctrl.decimalInputSettings\" type=\"number\"/>\n\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"$ctrl.withBreakfast\" aria-label=\"\u041F\u0438\u0442\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043E\">\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<p ng-if=\"$ctrl.form.breakfastCost.$invalid && ($ctrl.form.breakfastCost.$dirty || $ctrl.form.$displayErrors)\" class=\"help-block\">\n\t\t\t\t\t{{\"language.Generic.Messages.kRequiredField\" | language}}\n\t\t\t\t</p>\n\t\t\t</ns-form-group>\n\t\t\t<ns-form-group title=\"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0431\u0435\u0434\u0430\" ng-class=\"{'has-error': $ctrl.form.lunchCost.$invalid && ($ctrl.form.lunchCost.$dirty || $ctrl.form.$displayErrors)}\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t<input name=\"lunchCost\" ng-model=\"$ctrl.payNorm.lunchCost\" ng-required=\"$ctrl.withLunch\" ng-disabled=\"!$ctrl.withLunch\" class=\"form-control\" float-input=\"$ctrl.decimalInputSettings\" type=\"number\"/>\n\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"$ctrl.withLunch\" aria-label=\"\u041F\u0438\u0442\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043E\">\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<p ng-if=\"$ctrl.form.lunchCost.$invalid && ($ctrl.form.lunchCost.$dirty || $ctrl.form.$displayErrors)\" class=\"help-block\">\n\t\t\t\t\t{{\"language.Generic.Messages.kRequiredField\" | language}}\n\t\t\t\t</p>\n\t\t\t</ns-form-group>\n\t\t\t<ns-form-group title=\"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0434\u043D\u0438\u043A\u0430\" ng-class=\"{'has-error': $ctrl.form.snackCost.$invalid && ($ctrl.form.snackCost.$dirty || $ctrl.form.$displayErrors)}\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t<input name=\"snackCost\" ng-model=\"$ctrl.payNorm.snackCost\" ng-required=\"$ctrl.withSnack\" ng-disabled=\"!$ctrl.withSnack\" class=\"form-control\" float-input=\"$ctrl.decimalInputSettings\" type=\"number\"/>\n\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"$ctrl.withSnack\" aria-label=\"\u041F\u0438\u0442\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043E\">\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<p ng-if=\"$ctrl.form.snackCost.$invalid && ($ctrl.form.snackCost.$dirty || $ctrl.form.$displayErrors)\" class=\"help-block\">\n\t\t\t\t\t{{\"language.Generic.Messages.kRequiredField\" | language}}\n\t\t\t\t</p>\n\t\t\t</ns-form-group>\n\t\t</ns-form>\n\t\t</form>\n\n\t\t<form class=\"form\" name=\"$ctrl.formReason\">\n\t\t\t<div class=\"form-group\" ng-class=\"{'has-error': $ctrl.formReason.reason.$invalid && ($ctrl.formReason.reason.$dirty || $ctrl.formReason.$displayErrors)}\">\n\t\t\t\t<label>\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435</label>\n\t\t\t\t<textarea name=\"reason\" required class=\"form-control\" ng-model=\"$ctrl.payNorm.reason\" rows=\"2\" cols=\"70\" wrap=\"soft\"></textarea>\n\t\t\t\t<p ng-if=\"$ctrl.formReason.reason.$invalid && ($ctrl.formReason.reason.$dirty || $ctrl.formReason.$displayErrors)\" class=\"help-block\">\n\t\t\t\t\t{{\"language.Generic.Messages.kRequiredField\" | language}}\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</form>\n\t</ns-modal>\n\t"
};
exports.EditFoodNormComponent = EditFoodNormComponent;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatInputDirective = void 0;
var _floatInput = __webpack_require__(24);
/**Универсальная директива float-input с настройкой точности.<br>
 * Для настройки точности необходимо передать структуру типа FloatInputOptions.
 * @example
 *<input type="number" float-input="$ctrl.decimalInputSettings" ng-model="inp">
 */
var FloatInputDirective = function FloatInputDirective() {
  return {
    require: 'ngModel',
    restrict: 'A',
    scope: {
      floatInputOptions: "=floatInput"
    },
    link: function link(scope, element, attrs, ngModel) {
      var options = scope.floatInputOptions;
      ngModel.$parsers.unshift(function (val) {
        var service = new _floatInput.FloatInputService(val, options.maxIntegerLength, options.maxDecimalLength);
        return service.validate(ngModel);
      });
      ngModel.$parsers.unshift(function (value) {
        return value;
      });
      ngModel.$parsers.push(function (value) {
        if (!value) return value;
        return value;
      });
      //Если пользователь вводит знаки '-' или '+' то отменяет событие
      element.on('keydown', function (e) {
        if (e.key == '-' || e.key == '+') {
          e.stopPropagation();
          e.preventDefault();
        }
      });
      //Дополнительная проверка на вставку текста из буфера обмена
      //Сначала валидирует значение потом устанавливает его в поле
      element.on('paste', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var val = (e.originalEvent || e).clipboardData.getData('text/plain');
        var service = new _floatInput.FloatInputService(val, options.maxIntegerLength, options.maxDecimalLength);
        service.validate(ngModel, true, true);
      });
    }
  };
};
exports.FloatInputDirective = FloatInputDirective;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatInputService = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FloatInputService = /*#__PURE__*/function () {
  function FloatInputService(val, allowedIntegerLength, allowedDecimalLength) {
    var _this = this;
    _classCallCheck(this, FloatInputService);
    this.hasChanged = false;
    this.isNotANumber = function () {
      return isNaN(Number(_this.val)) || _this.val[_this.val.length - 1] === '.';
    };
    this.hasDecimals = function () {
      return _this.val.indexOf(".") !== -1;
    };
    this.hasTooMuchDecimals = function () {
      return _this.decimalsLength > _this.allowedDecimalLength;
    };
    this.hasTooMuchIntegers = function () {
      return _this.integersLength > _this.allowedIntegerLength;
    };
    this.didItChanged = function () {
      return _this.hasChanged;
    };
    val = val.replace('-', '');
    val = val.replace('+', '');
    val = val.replace(',', '.');
    this.val = val;
    this.pointIndex = val.indexOf(".");
    this.integersLength = this.pointIndex !== -1 ? val.substring(0, this.pointIndex).length : val.length;
    this.decimalsLength = this.pointIndex !== -1 ? val.substring(this.pointIndex + 1).length : 0;
    this.allowedIntegerLength = allowedIntegerLength;
    this.allowedDecimalLength = allowedDecimalLength;
    this.decimalEnabled = this.allowedDecimalLength > 0;
  }
  _createClass(FloatInputService, [{
    key: "handleIsNaN",
    value: function handleIsNaN() {
      while (true) {
        if (this.isNotANumber()) {
          this.val = this.val.substr(0, this.val.length - 1);
        } else {
          break;
        }
      }
      this.hasChanged = true;
    }
  }, {
    key: "throwDecimals",
    value: function throwDecimals() {
      var incrementer = this.allowedDecimalLength ? this.allowedDecimalLength + 1 : 0;
      this.val = this.val.substring(0, this.pointIndex + incrementer);
      this.hasChanged = true;
    }
  }, {
    key: "throwIntegers",
    value: function throwIntegers() {
      var integersLength = this.allowedIntegerLength;
      if (this.pointIndex !== -1) {
        integersLength = this.pointIndex <= this.allowedIntegerLength ? this.pointIndex : this.allowedIntegerLength;
      }
      this.val = this.val.substr(0, integersLength);
      this.hasChanged = true;
    }
  }, {
    key: "validate",
    value: function validate(ngModel) {
      var ignoreChangedFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var checkAfterHandle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.isNotANumber()) {
        this.handleIsNaN();
      }
      if (this.hasDecimals()) {
        if (this.decimalEnabled) {
          if (this.hasTooMuchDecimals()) {
            this.throwDecimals();
          }
        } else {
          this.throwDecimals();
        }
      }
      if (this.hasTooMuchIntegers()) {
        this.throwIntegers();
      }
      if (checkAfterHandle) {
        if (this.val == '') return null;
      }
      if (this.didItChanged() || ignoreChangedFlag) {
        ngModel.$setViewValue(this.val);
      }
      ngModel.$render();
      return this.val;
    }
  }]);
  return FloatInputService;
}();
exports.FloatInputService = FloatInputService;

/***/ })
/******/ ]);