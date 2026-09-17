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
/******/ 	return __webpack_require__(__webpack_require__.s = 297);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(298);


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = angular.module("irtech.netcity.school.gia", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(303);
__webpack_require__(304);
_module.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/results/", {
    templateUrl: "/static/dist/app/school/gia/results/template.html",
    controller: "GiaResultsCtrl"
  }).when("/persons/", {
    templateUrl: "/static/dist/app/school/gia/persons/template.html",
    controller: "GiaPersonsCtrl"
  }).otherwise({
    templateUrl: "/static/dist/app/school/calendar/vacations/classesRelations/template.html",
    controller: "GiaResultsCtrl"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var GiaRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(GiaRepository, _BaseRepository);
  var _super = _createSuper(GiaRepository);
  function GiaRepository() {
    _classCallCheck(this, GiaRepository);
    return _super.apply(this, arguments);
  }
  _createClass(GiaRepository, [{
    key: "getClasses",
    value: function getClasses(grade) {
      return this.$http.get("/webapi/classes", {
        params: {
          grade: grade
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getStudents",
    value: function getStudents(classId) {
      return this.$http.get("/webapi/users/studentlist", {
        params: {
          classId: classId
        }
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getResults",
    value: function getResults(examType, giaClassId, giaSubjectId, studentId) {
      var params = {
        examType: examType,
        giaClassId: giaClassId,
        giaSubjectId: giaSubjectId
      };
      if (studentId) {
        params.studentId = studentId;
      }
      return this.$http.get("/webapi/gia/results", {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getPersonRelations",
    value: function getPersonRelations(examType, unknowns) {
      var params = {
        unknowns: unknowns
      };
      if (examType >= 0) {
        params.examType = examType;
      }
      return this.$http.get("/webapi/gia/persons/relations", {
        params: params
      }).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "setPersonRelations",
    value: function setPersonRelations(personId, studentId) {
      return this.$http.post("/webapi/gia/persons/relations", null, {
        params: {
          personId: personId,
          studentId: studentId
        }
      })["catch"](this.handleError);
    }
  }]);
  return GiaRepository;
}(_repository.BaseRepository);
angular.module("irtech.netcity.school.gia").factory("giaRepository", function ($http, $dialogs, $alerts) {
  return new GiaRepository($http, $dialogs, $alerts);
});

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Roles = _interopRequireWildcard(__webpack_require__(9));
var _filters = __webpack_require__(301);
var _emGia = __webpack_require__(302);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
angular.module("irtech.netcity.school.gia").controller("GiaResultsCtrl", function ($scope, $http, $document, $location, $appLoader, giaRepository, $q, $longWork, parentStudentsListService) {
  $scope.$parent.page = {
    title: language.Generic.EGE.kEGEResults
  };
  $.extend($scope, {
    language: language,
    data: {
      giaRows: []
    },
    filterInfo: {
      filterPanel: null
    },
    state: {
      dataReady: false,
      emptyData: false,
      staffMode: false,
      studentMode: false,
      parentMode: false,
      emptyChoice: false
    },
    refs: {
      giaTypes: new _emGia.EmGiaRefs().giaTypes
    }
  });
  $scope.state.parentMode = appContext.roles.indexOf(Roles.parent) >= 0;
  $scope.state.studentMode = appContext.roles.indexOf(Roles.student) >= 0;
  $scope.state.staffMode = !$scope.state.parentMode && !$scope.state.studentMode;
  $scope.data = {
    oldFormat: false,
    newFormat: true,
    studentId: null,
    giaExamType: 0,
    giaExamTypes: [{
      id: 0,
      name: "ОГЭ"
    }, {
      id: 1,
      name: "ЕГЭ"
    }],
    giaSubject: -1,
    giaSubjects: [{
      id: -1,
      name: "Все"
    }],
    giaClass: -1,
    giaClasses: [{
      id: -1,
      name: "Все"
    }],
    giaResults: []
  };
  $scope.showEmptyChoiceInfo = function () {
    $(".info-panel").html('<div class="col-md-12 alert alert-danger" role="alert">' + language.Generic.Movement.kMsgNoChoice + '</div>');
  };
  $scope.clearEmptyChoiceInfo = function () {
    $(".info-panel").html('');
  };
  $scope.isForeignLanguage = function () {
    return ['12', '13', '14', '15', '16', '17', '18', '19', '21', '22'].indexOf($scope.data.giaSubject) >= 0;
  };

  // перенес повыше, так как метод load = undefined в вызове parentStudentsListService.student.subscribe
  //загрузка данных
  $scope.load = function () {
    $scope.state.dataReady = false;
    giaRepository.getResults($scope.data.giaExamType, $scope.data.giaClass, $scope.data.giaSubject, $scope.data.studentId).then(function (results) {
      $scope.data.giaResults = results;
      $scope.state.dataReady = true;
      $scope.state.emptyData = $scope.data.giaResults.length === 0;
      $appLoader.hide();
    });
  };
  var ready = $q.defer();
  if ($scope.state.studentMode) {
    $scope.data.studentId = parseInt(appContext.userId);
    ready.resolve();
  } else if ($scope.state.parentMode) {
    parentStudentsListService.student.subscribe(function (student) {
      //при смене текущего учащегося
      $scope.data.student = student ? {
        id: student.id,
        nickName: student.name
      } : null;
      $scope.data.studentId = student === null || student === void 0 ? void 0 : student.id;
      if ($scope.data.student) {
        $scope.load();
      }
      $scope.$applyAsync();
    });
    parentStudentsListService.showStudentsList = true;
    ready.reject();
  } else {
    var fpUrl = "/webapi/gia/results/filter";
    $http.get(fpUrl).then(function (response) {
      var fpInfo = response.data.filterPanel;
      var fpSources = response.data.filterSources;
      var btnPanel = $(".buttons-panel");
      var fltPanel = $(".filters-panel");
      $scope.filterInfo.filterPanel = new _filters.filterPanel(fltPanel, fpInfo, fpSources, fpUrl, btnPanel);
      $scope.filterInfo.filterPanel.handlers_emptyChoice = [$scope.showEmptyChoiceInfo];
      var syncFpValues = function syncFpValues() {
        var values = $scope.filterInfo.filterPanel.getValues();
        $scope.data.giaExamType = values.giaType;
        $scope.data.giaClass = values.giaClass;
        $scope.data.giaSubject = values.giaSubject;
      };
      $scope.filterInfo.filterPanel.ready(function () {
        $scope.clearEmptyChoiceInfo();
        $scope.state.filterChanged = true;
        $scope.state.emptyData = false;
        $scope.state.dataReady = false;
        $scope.state.emptyChoice = false;
        syncFpValues();
        $scope.load();
      });
      $scope.filterInfo.filterPanel.emptyChoice(function () {
        $scope.state.filterChanged = true;
        $scope.state.emptyData = true;
        $scope.state.dataReady = false;
        $scope.state.emptyChoice = true;
      });
      $scope.filterInfo.filterPanel.tryReady();
      syncFpValues();
      ready.resolve();
    });
  }
  $scope.goEgePersons = function () {
    $location.path("/persons/");
  };
  $scope.exportGiaExcel = function () {
    var values = $scope.filterInfo.filterPanel.getValues();
    var processing = $longWork.show();
    var queryStringParams = "\n\t\t\t?examType=".concat(values.giaType, "\n\t\t\t&giaSubjectId=").concat(values.giaSubject, "\n\t\t\t&giaClassId=").concat(values.giaClass);
    downloadFile("/webapi/gia/results/export" + queryStringParams).then(function () {
      processing.close();
    })["catch"](function () {
      return processing.close();
    });
  };
  ready.promise.then($scope.load);
});

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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmGiaRefs = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var EmGiaRefs = /*#__PURE__*/function () {
  function EmGiaRefs() {
    _classCallCheck(this, EmGiaRefs);
  }
  _createClass(EmGiaRefs, [{
    key: "giaTypes",
    get: function get() {
      return [{
        id: 0,
        name: "ОГЭ"
      }, {
        id: 1,
        name: "ЕГЭ"
      }];
    }
  }]);
  return EmGiaRefs;
}();
exports.EmGiaRefs = EmGiaRefs;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.gia").controller("GiaPersonsCtrl", function ($scope, $http, $document, $location, $appLoader, giaRepository, $uibModal, $alerts) {
  $scope.$parent.page = {
    title: language.Generic.EGE.kEgePersons,
    back: {
      history: true
    },
    parent: {
      title: language.Generic.EGE.kEGEResults,
      href: "/results"
    }
  };
  $scope.language = language;
  $scope.state = {
    dataReady: false,
    emptyData: false
  };
  $scope.refs = {
    examTypes: [{
      id: -1,
      name: "Все"
    }, {
      id: 0,
      name: "ОГЭ"
    }, {
      id: 1,
      name: "ЕГЭ"
    }],
    viewTypes: [{
      id: 0,
      name: language.Generic.EGE.KAllPersons
    }, {
      id: 1,
      name: language.Generic.EGE.kUnknownPersons
    }]
  };
  $scope.data = {
    examType: -1,
    //Все
    viewType: 1,
    //Без привязки
    relations: []
  };
  $scope.load = function () {
    $scope.state.dataReady = false;
    giaRepository.getPersonRelations($scope.data.examType, $scope.data.viewType === 1).then(function (relations) {
      $scope.data.relations = _.map(relations, function (rel) {
        rel["class"] = rel["class"] || {
          id: -1,
          name: "Не выбран"
        };
        rel.student = rel.student || {
          id: -1,
          name: "Не выбран"
        };
        return rel;
      });
      $scope.state.dataReady = true;
      $scope.state.emptyData = $scope.data.relations.length === 0;
      $appLoader.hide();
    });
  };
  $scope.edit = function (_personRelation) {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/gia/persons/edit/template.html",
      controller: "EditGiaPersonCtrl",
      resolve: {
        personRelation: function personRelation() {
          return angular.copy(_personRelation);
        }
      }
    });
    modalInstance.result.then($scope.load);
  };
  $scope.load();
});

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.gia").controller("EditGiaPersonCtrl", function ($scope, giaRepository, personRelation, $uibModalInstance, $alerts) {
  $scope.header = "Редактирование персоны";
  var constants = {
    giaGrades: [9, 10, 11, 12],
    unselected: {
      id: -1,
      name: "Не выбран"
    }
  };
  $.extend($scope, {
    language: language,
    data: {
      personRelation: personRelation,
      edit: personRelation.student && personRelation.student.id > 0,
      classes: [constants.unselected],
      students: [constants.unselected]
    }
  });
  giaRepository.getClasses(constants.giaGrades).then(function (classes) {
    return $scope.data.classes = classes;
  }).then(function () {
    $scope.data.classes.unshift(constants.unselected);
  });
  $scope.loadStudentsByClass = function (internal) {
    if (!internal) {
      personRelation.student = constants.unselected;
    }
    giaRepository.getStudents(personRelation["class"].id).then(function (students) {
      return $scope.data.students = students;
    }).then(function () {
      $scope.data.students.unshift(constants.unselected);
    });
  };
  if (personRelation["class"] && personRelation["class"].id > 0) {
    $scope.loadStudentsByClass(true);
  }
  $scope.save = function () {
    giaRepository.setPersonRelations(personRelation.giaPerson.id, personRelation.student.id).then(function () {
      $alerts.success("привязка успешно установлена");
      $uibModalInstance.close(personRelation);
    });
  };
  $scope["delete"] = function () {
    $.show.confirmation("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0443?").then(function () {
      return giaRepository.setPersonRelations(personRelation.giaPerson.id, 0);
    }).then(function () {
      $alerts.success("привязка успешно удалена");
      $uibModalInstance.close(personRelation);
    });
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

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