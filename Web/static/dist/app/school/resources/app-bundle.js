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


var _resourcesEdit = __webpack_require__(2);
var _resourcesList = __webpack_require__(8);
var _resources = __webpack_require__(10);
var _module = angular.module("irtech.netcity.school.resources", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components", "irtech.netcity.school.portfolio.common"]);
__webpack_require__(15);
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when('/', _resourcesList.ResourcesListComponent).when('/edit', _resourcesEdit.ResourcesEditComponent).otherwise(_resourcesList.ResourcesListComponent);
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
_module.service("resourcesRepository", _resources.ResourcesRepository).config(config);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourcesEditController = exports.ResourcesEditComponent = void 0;
var _treeEqualizer = _interopRequireDefault(__webpack_require__(3));
var _editLink = __webpack_require__(4);
var _editGroup = __webpack_require__(6);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ResourcesEditController = /*#__PURE__*/function () {
  ResourcesEditController.$inject = ["pageContext", "$appLoader", "appContext", "language", "resourcesRepository", "$dialogs", "$alerts", "$uibModal", "$longWork", "$routeParams"];
  /*@ngInject*/
  function ResourcesEditController(pageContext, $appLoader, appContext, language, resourcesRepository, $dialogs, $alerts, $uibModal, $longWork, $routeParams) {
    _classCallCheck(this, ResourcesEditController);
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.appContext = appContext;
    this.language = language;
    this.resourcesRepository = resourcesRepository;
    this.$dialogs = $dialogs;
    this.$alerts = $alerts;
    this.$uibModal = $uibModal;
    this.$longWork = $longWork;
    pageContext.title = this.language.Generic.Curriculum.kTitleSchoolResourcesEdit;
    pageContext.parent = {
      title: this.language.Generic.Curriculum.kTitleSchoolResources,
      href: "/"
    };
    this.data = {
      groups: [],
      treeGroups: [],
      selectedGroup: null,
      selectedGroupId: parseInt($routeParams.groupId) || -1,
      resources: [],
      selectedResource: null
    };
    this.init();
  }
  _createClass(ResourcesEditController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.$appLoader.show();
      this.resourcesRepository.getGroups(parseInt(this.appContext.schoolId)).then(function (res) {
        if (res.length == 0) {
          _this.data.groups = [];
          _this.$appLoader.hide();
          return;
        }
        _this.data.groups = res;
        var equalizer = new _treeEqualizer["default"](res, function (g) {
          return g.order;
        });
        _this.data.treeGroups = equalizer.execute();
        if (_this.data.selectedGroupId !== -1) {
          var group = _this.data.treeGroups.find(function (g) {
            return g.id == _this.data.selectedGroupId;
          });
          if (group) {
            _this.data.selectedGroup = group;
            return;
          }
        }
        _this.data.selectedGroup = _this.data.treeGroups[0];
      }).then(function () {
        _this.changeGroup();
      });
    }
  }, {
    key: "changeGroup",
    value: function changeGroup() {
      var _this2 = this;
      this.$appLoader.show();
      this.resourcesRepository.getResources(parseInt(this.appContext.schoolId), this.data.selectedGroup.id).then(function (res) {
        if (res.length == 0) {
          _this2.data.resources = [];
          _this2.$appLoader.hide();
          return;
        }
        _this2.data.resources = res;
        _this2.data.selectedResource = _this2.data.resources[0];
      }).then(function () {
        _this2.$appLoader.hide();
      });
    }
  }, {
    key: "addGroup",
    value: function addGroup() {
      var _this3 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editGroup.EditGroupComponent.controller,
        controllerAs: _editGroup.EditGroupComponent.controllerAs,
        templateUrl: _editGroup.EditGroupComponent.templateUrl,
        size: "md",
        resolve: {
          groups: function groups() {
            return _this3.data.groups;
          },
          parentGroup: function parentGroup() {
            return _this3.data.selectedGroup;
          },
          group: function group() {
            return {
              editing: true
            };
          }
        }
      });
      modalInstance.result.then(function () {
        _this3.init();
      });
    }
  }, {
    key: "editGroup",
    value: function editGroup() {
      var _this4 = this;
      var _parentGroup = _.findWhere(this.data.groups, {
        id: this.data.selectedGroup.parentGroupId
      });
      var modalInstance = this.$uibModal.open({
        controller: _editGroup.EditGroupComponent.controller,
        controllerAs: _editGroup.EditGroupComponent.controllerAs,
        templateUrl: _editGroup.EditGroupComponent.templateUrl,
        size: "md",
        resolve: {
          groups: function groups() {
            return _this4.data.groups;
          },
          parentGroup: function parentGroup() {
            return _parentGroup;
          },
          group: function group() {
            return Object.assign(Object.assign({}, _this4.data.selectedGroup), {
              editing: true
            });
          }
        }
      });
      modalInstance.result.then(function () {
        _this4.init();
      });
    }
  }, {
    key: "removeGroup",
    value: function removeGroup() {
      var _this5 = this;
      this.$dialogs.confirm(this.language.Generic.Curriculum.kGroupCurrDelConfirm).then(function () {
        return _this5.$longWork.execute(_this5.resourcesRepository.removeGroup(parseInt(_this5.appContext.schoolId), _this5.data.selectedGroup.id).then(function () {
          _this5.init();
          _this5.$alerts.success("Раздел успешно удален");
        }));
      });
    }
  }, {
    key: "addResource",
    value: function addResource() {
      var _this6 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editLink.EditLinkComponent.controller,
        controllerAs: _editLink.EditLinkComponent.controllerAs,
        templateUrl: _editLink.EditLinkComponent.templateUrl,
        size: "md",
        resolve: {
          link: function link() {
            return {
              id: -1,
              name: "",
              groupId: _this6.data.selectedGroup.id
            };
          }
        }
      });
      modalInstance.result.then(function () {
        _this6.changeGroup();
      });
    }
  }, {
    key: "editResource",
    value: function editResource() {
      var _this7 = this;
      var modalInstance = this.$uibModal.open({
        controller: _editLink.EditLinkComponent.controller,
        controllerAs: _editLink.EditLinkComponent.controllerAs,
        templateUrl: _editLink.EditLinkComponent.templateUrl,
        size: "md",
        resolve: {
          link: function link() {
            return angular.copy(_this7.data.selectedResource);
          }
        }
      });
      modalInstance.result.then(function () {
        _this7.changeGroup();
      });
    }
  }, {
    key: "removeResource",
    value: function removeResource() {
      var _this8 = this;
      this.$dialogs.confirm(this.language.Generic.ResourceGroups.kAreYouSureToDeleteLink).then(function () {
        return _this8.$longWork.execute(_this8.resourcesRepository.removeResource(parseInt(_this8.appContext.schoolId), _this8.data.selectedResource.id).then(function () {
          _this8.changeGroup();
          _this8.$alerts.success("Ссылка успешно удалена");
        }));
      });
    }
  }]);
  return ResourcesEditController;
}();
exports.ResourcesEditController = ResourcesEditController;
var ResourcesEditComponent = {
  controller: ResourcesEditController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/resources/edit/resourcesEdit.component.html"
};
exports.ResourcesEditComponent = ResourcesEditComponent;

/***/ }),
/* 3 */
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
var TreeEqualizer = /*#__PURE__*/function () {
  function TreeEqualizer(tree, sorter) {
    _classCallCheck(this, TreeEqualizer);
    this.tree = tree;
    this.sorter = sorter;
  }
  _createClass(TreeEqualizer, [{
    key: "execute",
    value: function execute(excludeGroup) {
      var _this = this;
      var groupReducer = function groupReducer(memo, group) {
        group.treeItemName = "";
        for (var i = 1; i < memo.level; i++) {
          group.treeItemName += "\xA0\xA0\xA0\xA0";
        }
        group.treeItemName += group.name;
        group.treeLevel = memo.level;
        if (group === excludeGroup) {
          return {
            groups: memo.groups,
            level: memo.level
          };
        }
        memo.groups = memo.groups.concat([group]);
        var sortedGroups = _.sortBy(group.groups, _this.sorter);
        var reduceRes = _.reduce(sortedGroups, groupReducer, {
          groups: [],
          level: memo.level + 1
        });
        return {
          groups: memo.groups.concat(reduceRes.groups),
          level: memo.level
        };
      };
      var sortedGroups = _.sortBy(this.tree, this.sorter);
      var res = _.reduce(sortedGroups, groupReducer, {
        groups: [],
        level: 1
      });
      return res.groups;
    }
  }]);
  return TreeEqualizer;
}();
exports["default"] = TreeEqualizer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditLinkController = exports.EditLinkComponent = void 0;
var _netcityModalCtrl = __webpack_require__(5);
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
var EditLinkController = /*#__PURE__*/function (_NetCityModalControll) {
  EditLinkController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "appContext", "resourcesRepository", "$alerts", "language", "$longWork", "link"];
  _inherits(EditLinkController, _NetCityModalControll);
  var _super = _createSuper(EditLinkController);
  /*@ngInject*/
  function EditLinkController($scope, $uibModalInstance, changeTracker, $dialogs, appContext, resourcesRepository, $alerts, language, $longWork, link) {
    var _this;
    _classCallCheck(this, EditLinkController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.appContext = appContext;
    _this.resourcesRepository = resourcesRepository;
    _this.$alerts = $alerts;
    _this.language = language;
    _this.$longWork = $longWork;
    _this.link = link;
    _this.editMode = link.id > 0;
    _this.header = _this.editMode ? "Редактирование ссылки" : "Создание ссылки";
    _this.data = {
      link: link
    };
    if (_this.editMode) {
      _this.data.link.description = _this.data.link.name;
    }
    _this.buildButtons();
    return _this;
  }
  _createClass(EditLinkController, [{
    key: "buildButtons",
    value: function buildButtons() {
      var _this2 = this;
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this2.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this2.close();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons = [saveBtn, cancelBtn];
    }
  }, {
    key: "save",
    value: function save() {
      var _this3 = this;
      if (!this.linkForm.$valid) {
        this.linkForm.$displayErrors = true;
        return;
      }
      if (this.data.link.description) {
        this.data.link.name = this.data.link.description;
      }
      if (this.editMode) {
        this.$longWork.execute(this.resourcesRepository.editResource(parseInt(this.appContext.schoolId), this.data.link)).then(function (response) {
          _this3.$uibModalInstance.close(response);
          _this3.$alerts.success("Ссылка успешно изменена");
        });
      } else {
        this.$longWork.execute(this.resourcesRepository.createResource(parseInt(this.appContext.schoolId), this.data.link)).then(function (response) {
          _this3.$uibModalInstance.close(response);
          _this3.$alerts.success("Ссылка успешно добавлена");
        });
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return EditLinkController;
}(_netcityModalCtrl.NetCityModalController);
exports.EditLinkController = EditLinkController;
var EditLinkComponent = {
  controller: EditLinkController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/resources/edit/editLink.component.html"
};
exports.EditLinkComponent = EditLinkComponent;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditGroupController = exports.EditGroupComponent = void 0;
var _baseEditGroup = __webpack_require__(7);
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
var EditGroupController = /*#__PURE__*/function (_BaseEditGroupControl) {
  EditGroupController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "appContext", "$alerts", "$longWork", "resourcesRepository", "groups", "group", "parentGroup"];
  _inherits(EditGroupController, _BaseEditGroupControl);
  var _super = _createSuper(EditGroupController);
  /*@ngInject*/
  function EditGroupController($scope, $uibModalInstance, changeTracker, $dialogs, language, appContext, $alerts, $longWork, resourcesRepository, groups, group, parentGroup) {
    var _this;
    _classCallCheck(this, EditGroupController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs, language, groups, group, parentGroup);
    _this.appContext = appContext;
    _this.$alerts = $alerts;
    _this.$longWork = $longWork;
    _this.resourcesRepository = resourcesRepository;
    return _this;
  }
  _createClass(EditGroupController, [{
    key: "save",
    value: function save() {
      var _this2 = this;
      if (!this.groupForm.$valid) {
        this.groupForm.$displayErrors = true;
        return;
      }
      if (this.editMode) {
        this.$longWork.execute(this.resourcesRepository.editGroup(parseInt(this.appContext.schoolId), Object.assign(Object.assign({}, this.data.group), {
          links: []
        }))).then(function (response) {
          _this2.$uibModalInstance.close(response);
          _this2.$alerts.success("Раздел успешно изменен");
        });
      } else {
        this.$longWork.execute(this.resourcesRepository.createGroup(parseInt(this.appContext.schoolId), Object.assign(Object.assign({}, this.data.group), {
          links: []
        }))).then(function (response) {
          _this2.$uibModalInstance.close(response);
          _this2.$alerts.success("Раздел успешно добавлен");
        });
      }
    }
  }]);
  return EditGroupController;
}(_baseEditGroup.BaseEditGroupController);
exports.EditGroupController = EditGroupController;
var EditGroupComponent = {
  controller: EditGroupController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/portfolio/common/edit/editGroup.component.html"
};
exports.EditGroupComponent = EditGroupComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeIndexer = exports.BaseEditGroupController = void 0;
var _netcityModalCtrl = __webpack_require__(5);
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
var BaseEditGroupController = /*#__PURE__*/function (_NetCityModalControll) {
  BaseEditGroupController.$inject = ["$scope", "$uibModalInstance", "changeTracker", "$dialogs", "language", "groups", "group", "parentGroup"];
  _inherits(BaseEditGroupController, _NetCityModalControll);
  var _super = _createSuper(BaseEditGroupController);
  /*@ngInject*/
  function BaseEditGroupController($scope, $uibModalInstance, changeTracker, $dialogs, language, groups, group, parentGroup) {
    var _this;
    _classCallCheck(this, BaseEditGroupController);
    _this = _super.call(this, $scope, $uibModalInstance, changeTracker, $dialogs);
    _this.language = language;
    _this.editMode = group.id > 0;
    _this.header = _this.editMode ? "Редактирование раздела" : "Создание раздела";
    _this.data = {
      groups: groups,
      parentGroup: parentGroup,
      group: group,
      tree: _.chain(groups).map(function (group) {
        return new GroupTreeItem(group, null, group.groups, group);
      }).sortBy(function (treeItem) {
        return treeItem.group.order;
      }).value()
    };
    if (!group.id) {
      var newItem = new GroupTreeItem(_this.data.group, _this.data.parentGroup, [], _this.data.group);
      newItem.editing = true;
      _this.data.group.order = 1;
      var parentTreeItem;
      if (parentGroup == null) {
        parentTreeItem = {
          groups: _this.data.tree
        };
      } else {
        parentTreeItem = treeIndexer[parentGroup.id];
        _this.data.group.parentGroupId = parentGroup.id;
      }
      if (parentTreeItem.groups.length) {
        _this.data.group.order = _.chain(parentTreeItem.groups).map(function (i) {
          return i.group.order;
        }).max().value() + 1;
      }
      parentTreeItem.groups.push(newItem);
    } else {
      var treeItem = treeIndexer[group.id];
      treeItem.editing = true;
    }
    _this.initTreeOptions();
    _this.buildButtons();
    return _this;
  }
  _createClass(BaseEditGroupController, [{
    key: "initTreeOptions",
    value: function initTreeOptions() {
      var _this2 = this;
      this.treeOptions = {
        beforeDrag: function beforeDrag(event) {
          return event.$modelValue.id === _this2.data.group.id;
        },
        dropped: function dropped(event) {
          _this2.data.group.order = event.dest.index + 1;
          var parentNodeScope = event.dest.nodesScope.$nodeScope;
          if (parentNodeScope == null) {
            _this2.data.group.parentGroupId = null;
          } else {
            _this2.data.group.parentGroupId = parentNodeScope.$modelValue.id;
          }
        }
      };
    }
  }, {
    key: "buildButtons",
    value: function buildButtons() {
      var _this3 = this;
      var saveBtn = {
        title: this.language.Generic.Buttons.kSave,
        action: function action() {
          return _this3.save();
        },
        icon: "glyphicon glyphicon-floppy-save"
      };
      var cancelBtn = {
        title: this.language.Generic.Buttons.kCancel,
        action: function action() {
          return _this3.close();
        },
        icon: "glyphicon glyphicon-ban-circle"
      };
      this.buttons = [saveBtn, cancelBtn];
    }
  }, {
    key: "close",
    value: function close() {
      this.$uibModalInstance.dismiss();
    }
  }]);
  return BaseEditGroupController;
}(_netcityModalCtrl.NetCityModalController);
exports.BaseEditGroupController = BaseEditGroupController;
var treeIndexer = {};
exports.treeIndexer = treeIndexer;
var GroupTreeItem = /*#__PURE__*/_createClass(function GroupTreeItem(group, parentGroup, subGroups, currentGroup) {
  _classCallCheck(this, GroupTreeItem);
  this.parentGroup = parentGroup;
  this.id = group.id;
  if (this.id == currentGroup.id) {
    this.group = currentGroup;
  } else {
    this.group = group;
  }
  this.editing = false;
  this.groups = _.map(subGroups, function (subItem) {
    return new GroupTreeItem(subItem, group, subItem.groups, currentGroup);
  });
  treeIndexer[this.id] = this;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourcesListController = exports.ResourcesListComponent = void 0;
var _treeEqualizer = _interopRequireDefault(__webpack_require__(3));
var Rights = _interopRequireWildcard(__webpack_require__(9));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ResourcesListController = /*#__PURE__*/function () {
  ResourcesListController.$inject = ["pageContext", "$appLoader", "appContext", "navigationService", "$location", "language", "resourcesRepository"];
  /*@ngInject*/
  function ResourcesListController(pageContext, $appLoader, appContext, navigationService, $location, language, resourcesRepository) {
    _classCallCheck(this, ResourcesListController);
    this.pageContext = pageContext;
    this.$appLoader = $appLoader;
    this.appContext = appContext;
    this.navigationService = navigationService;
    this.$location = $location;
    this.language = language;
    this.resourcesRepository = resourcesRepository;
    this.dataReady = false;
    this.editUrl = "edit";
    pageContext.title = this.language.Generic.Curriculum.kTitleSchoolResources;
    pageContext.parent = null;
    pageContext.back = null;
    this.data = {
      groups: [],
      selectorGroups: [],
      selectedGroup: null,
      treeGroups: [],
      editAllowed: appContext.hasRights([Rights.arEditSchoolResources])
    };
    this.init();
  }
  _createClass(ResourcesListController, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.resourcesRepository.getGroups(parseInt(this.appContext.schoolId)).then(function (groups) {
        if (groups.length == 0) {
          _this.data.selectorGroups = [];
        } else {
          _this.data.groups = angular.copy(groups);
          var rootGroup = [{
            order: 0,
            id: -1,
            name: _this.language.Generic.SetupSchoolResources.kAllDocGroups,
            groups: groups,
            parentGroupId: undefined
          }];
          var equalizer = new _treeEqualizer["default"](rootGroup, function (g) {
            return g.order;
          });
          _this.data.selectorGroups = equalizer.execute();
          _this.data.selectedGroup = _this.data.selectorGroups[0];
        }
      }).then(function () {
        _this.$appLoader.hide();
        _this.changeGroup();
      });
    }
  }, {
    key: "changeGroup",
    value: function changeGroup() {
      var _this2 = this;
      this.dataReady = false;
      var isNotAllGroupsGroup = this.data.selectedGroup.id != -1;
      this.resourcesRepository.getResources(parseInt(this.appContext.schoolId), this.data.selectedGroup.id, isNotAllGroupsGroup).then(function (resources) {
        if (isNotAllGroupsGroup) {
          //превращаем дерево в плоский список для сортировки выбранного раздела
          var equalizer = new _treeEqualizer["default"](_this2.data.groups, function (g) {
            return g.order;
          });
          _this2.data.treeGroups = equalizer.execute().filter(function (x) {
            return x.id == _this2.data.selectedGroup.id;
          });
        } else {
          _this2.data.treeGroups = _.sortBy(_this2.data.groups, function (g) {
            return g.order;
          });
        }
        resources.map(function (x) {
          return x.description = x.name;
        });
        _this2.fillGroups(_this2.data.treeGroups, resources);
      }).then(function () {
        _this2.dataReady = true;
      });
    }
  }, {
    key: "editResources",
    value: function editResources() {
      if (this.data.selectedGroup !== null && this.data.selectedGroup.id !== -1) {
        this.$location.path("/edit/").search({
          groupId: this.data.selectedGroup.id
        });
      } else {
        this.$location.path("/edit/");
      }
    }
  }, {
    key: "fillGroups",
    value: function fillGroups(groups, resources) {
      var _this3 = this;
      groups.forEach(function (g) {
        g.links = resources.filter(function (x) {
          return x.groupId === g.id;
        });
        if (g.groups.length > 0) _this3.fillGroups(g.groups, resources);
      });
    }
  }]);
  return ResourcesListController;
}();
exports.ResourcesListController = ResourcesListController;
var ResourcesListComponent = {
  controller: ResourcesListController,
  controllerAs: "$ctrl",
  templateUrl: "/static/dist/app/school/resources/list/resourcesList.component.html"
};
exports.ResourcesListComponent = ResourcesListComponent;

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourcesRepository = void 0;
var _baseRepository = __webpack_require__(11);
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
var ResourcesRepository = /*#__PURE__*/function (_BaseRepository) {
  ResourcesRepository.$inject = ["$http", "$dialogs", "$longWork"];
  _inherits(ResourcesRepository, _BaseRepository);
  var _super = _createSuper(ResourcesRepository);
  /*@ngInject*/
  function ResourcesRepository($http, $dialogs, $longWork) {
    _classCallCheck(this, ResourcesRepository);
    return _super.call(this, $http, $dialogs, $longWork);
  }
  _createClass(ResourcesRepository, [{
    key: "getGroups",
    value: function getGroups(schoolId) {
      return this.$http.get("/webapi/schools/".concat(schoolId, "/resources/groups")).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createGroup",
    value: function createGroup(schoolId, group) {
      return this.$http.post("/webapi/schools/".concat(schoolId, "/resources/groups"), group).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editGroup",
    value: function editGroup(schoolId, group) {
      return this.$http.put("/webapi/schools/".concat(schoolId, "/resources/groups/").concat(group.id), group).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(schoolId, groupId) {
      return this.$http["delete"]("/webapi/schools/".concat(schoolId, "/resources/groups/").concat(groupId)).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "getResources",
    value: function getResources(schoolId, groupId) {
      var includeChilds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return this.$http.get("/webapi/schools/".concat(schoolId, "/resources"), {
        params: {
          groupId: groupId,
          includeChilds: includeChilds
        }
      }).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "createResource",
    value: function createResource(schoolId, resource) {
      return this.$http.post("/webapi/schools/".concat(schoolId, "/resources"), resource).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "editResource",
    value: function editResource(schoolId, resource) {
      return this.$http.put("/webapi/schools/".concat(schoolId, "/resources/").concat(resource.id), resource).then(this.handleResponse, this.handleError);
    }
  }, {
    key: "removeResource",
    value: function removeResource(schoolId, resourceId) {
      return this.$http["delete"]("/webapi/schools/".concat(schoolId, "/resources/").concat(resourceId)).then(this.handleResponse, this.handleError);
    }
  }]);
  return ResourcesRepository;
}(_baseRepository.BaseRepository);
exports.ResourcesRepository = ResourcesRepository;

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonXhrErrorHandler = void 0;
var _common = __webpack_require__(13);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFormPosition = exports.restoreFormPosition = exports.postTo = void 0;
var _urlHelper = __webpack_require__(14);
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.portfolio.common", []).directive("portfolioGroupLinks", function ($compile) {
  return {
    restrict: "A",
    scope: {
      links: "=links",
      end: "=end"
    },
    replace: true,
    template: "<li class=\"tree-group-item\">\n\t\t\t\t\t\t<span ng-class=\"{'border-remove': end}\">\n\t\t\t\t\t\t\t<label>\u0421\u0441\u044B\u043B\u043A\u0438</label>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a ng-repeat-start=\"link in links\" href=\"{{link.url}}\" target=\"_blank\">{{link.url}}</a><p ng-repeat-end>{{link.description}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>"
  };
}).directive("portfolioGroupDocs", function ($compile) {
  return {
    restrict: "A",
    scope: {
      docs: "=docs",
      end: "=end",
      opendoc: "=opendoc"
    },
    replace: true,
    template: "<li class=\"tree-group-item\">\n\t\t\t\t\t\t<span ng-class=\"{'border-remove': end}\">\n\t\t\t\t\t\t\t<label>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B</label>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<dl ng-repeat=\"doc in docs\" class=\"doc-item\">\n\t\t\t\t\t\t\t\t<dt><span class =\"doc-type\" fileExt=\"{{doc.fileName | extension}}\"><span class =\"fileCorner\"></span></dt>\n\t\t\t\t\t\t\t\t<dd class=\"doc-data\">\n\t\t\t\t\t\t\t\t\t<a class =\"mdi mdi-file\" href=\"#\" ng-click=\"opendoc(doc.downloadUrl, doc.name)\">\n\t\t\t\t\t\t\t\t\t\t<span class =\"name_file\">{{doc.name}}</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<p class =\"doc-descr\">{{doc.description}}</p>\n\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>"
  };
}).directive("portfolioSubgroup", function ($compile) {
  var template = "\n\t\t\t<li class =\"tree-group-item tree-group-subgroup\">\n\t\t\t\t<span>\n\t\t\t\t\t<label for=\"{{group.id}}\" class =\"section-level\">{{group.name}}</label>\n\t\t\t\t\t<a ng-href=\"{{editurl}}?groupId={{group.id}}\" ng-if=\"!readonly\" title=\"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\" class=\"primary edit-group-link\"\n\t\t\t\t\t\tstyle=\"float: right; position: relative;top: -10px;left: -10px;color: white;outline: none !important;\">\n\t\t\t\t\t\t<span class =\"glyphicon glyphicon-pencil\" style=\"border: 0;\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t\t<div>\n\t\t\t\t\t<input type=\"checkbox\" checked id=\"{{group.id}}\">\n\t\t\t\t\t<ul class=\"tree-group-item\">\n\t\t\t\t\t\t<li portfolio-group-links links=\"group.links\" end=\"group.groups.length == 0\" ng-if=\"group.links.length > 0\"></li>\n\t\t\t\t\t\t<li portfolio-group-docs docs=\"group.docs\" end=\"group.groups.length == 0\" ng-if=\"group.docs.length > 0\" opendoc=\"opendoc\"></li>\n\n\t\t\t\t\t\t<li portfolio-subgroup group=\"subgroup\" editurl=\"editurl\" opendoc=\"opendoc\" readonly=\"readonly\" ng-repeat=\"subgroup in group.groups\" ng-if=\"group.groups.length > 0\"></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>";
  return {
    restrict: "A",
    scope: {
      editurl: "=editurl",
      readonly: "=readonly",
      group: "=group",
      opendoc: "=opendoc"
    },
    template: template,
    replace: true
  };
}).directive("portfolioGroup", function ($compile) {
  var template = "\n\t\t\t<li class =\"tree-group\">\n\t\t\t\t<span>\n\t\t\t\t\t<label for=\"{{group.id}}\">{{group.name}}</label>\n\t\t\t\t\t<a ng-href=\"{{editurl}}?groupId={{group.id}}\" ng-if=\"!readonly\" title=\"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\" class=\"primary edit-group-link\"\n\t\t\t\t\t\tstyle=\"float: right; position: relative;top: -10px;left: -10px;color: white;outline: none !important;\">\n\t\t\t\t\t\t<span class =\"glyphicon glyphicon-pencil\" style=\"border: 0;\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t\t<input type=\"checkbox\" ng-checked=\"!collapsed\" id=\"{{group.id}}\">\n\t\t\t\t<ul class=\"tree-group-item\">\n\t\t\t\t\t<li portfolio-group-links links=\"group.links\" ng-if=\"group.links.length > 0\"></li>\n\t\t\t\t\t<li portfolio-group-docs docs=\"group.docs\" opendoc=\"opendoc\" end=\"group.groups.length == 0\" ng-if=\"group.docs.length > 0\"></li>\n\n\t\t\t\t\t<li portfolio-subgroup group=\"subgroup\" editurl=\"editurl\" readonly=\"readonly\" opendoc=\"opendoc\" ng-repeat=\"subgroup in group.groups\" ng-if=\"group.groups.length > 0\"></li>\n\t\t\t\t</ul>\n\t\t\t</li>";
  return {
    restrict: "A",
    scope: {
      editurl: "=editurl",
      collapsed: "<?collapsed",
      readonly: "=readonly",
      group: "=group",
      opendoc: "=opendoc"
    },
    template: template,
    replace: true
  };
});

/***/ })
/******/ ]);