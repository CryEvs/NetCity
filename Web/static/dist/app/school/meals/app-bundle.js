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
/******/ 	return __webpack_require__(__webpack_require__.s = 350);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = angular.module("irtech.netcity.school.meals", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "ngFileUpload", "ui.tree", "irtech.netcity.common", "irtech.netcity.ui-components"]);
__webpack_require__(352);
__webpack_require__(353);
__webpack_require__(354);
__webpack_require__(355);
__webpack_require__(358);
__webpack_require__(362);
__webpack_require__(363);
_module.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when("/dishes/", {
    templateUrl: "/static/dist/app/school/meals/dishes/list/template.html",
    controller: "ListDishesCtrl"
  }).when("/dishes/edit/", {
    templateUrl: "/static/dist/app/school/meals/dishes/edit/template.html",
    controller: "EditDishesCtrl"
  }).when("/menu/", {
    templateUrl: "/static/dist/app/school/meals/menu/list/template.html",
    controller: "ListMenuCtrl"
  }).when("/menu/:menuId/details", {
    templateUrl: "/static/dist/app/school/meals/menu/details/template.html",
    controller: "DetailsMenuCtrl"
  }).when("/products/", {
    templateUrl: "/static/dist/app/school/meals/products/list/template.html",
    controller: "ListProductsCtrl"
  }).otherwise({
    templateUrl: "/static/dist/app/school/meals/menu/list/template.html",
    controller: "ListMenuCtrl"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 352:
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
var ProductsRepository = /*#__PURE__*/function (_BaseRepository) {
  _inherits(ProductsRepository, _BaseRepository);
  var _super = _createSuper(ProductsRepository);
  function ProductsRepository() {
    _classCallCheck(this, ProductsRepository);
    return _super.apply(this, arguments);
  }
  _createClass(ProductsRepository, [{
    key: "getAll",
    value: function getAll(params) {
      params = params || {};
      return this.$http.get("/webapi/modules/food/products", {
        params: params
      }).then(function (response) {
        var products = response.data;
        if (response.headers("count")) {
          products.totalcount = parseInt(response.headers("count"));
        }
        return products;
      });
    }
  }, {
    key: "create",
    value: function create(product) {
      var _this = this;
      return this.$http.put("/webapi/modules/food/products", product).then(function (response) {
        _this.$alerts.success("Продукт добавлен");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(product) {
      var _this2 = this;
      return this.$http.post("/webapi/modules/food/products", product).then(function (response) {
        _this2.$alerts.success("Продукт отредактирован");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var _this3 = this;
      return this.$http["delete"]("/webapi/modules/food/products?id=".concat(id)).then(function () {
        _this3.$alerts.success("Продукт удалён");
      })["catch"](this.handleError);
    }
  }]);
  return ProductsRepository;
}(_repository.BaseRepository);
var MenusRepository = /*#__PURE__*/function (_BaseRepository2) {
  _inherits(MenusRepository, _BaseRepository2);
  var _super2 = _createSuper(MenusRepository);
  function MenusRepository() {
    _classCallCheck(this, MenusRepository);
    return _super2.apply(this, arguments);
  }
  _createClass(MenusRepository, [{
    key: "get",
    value: function get(menuId) {
      return this.$http.get("/webapi/modules/food/schoolmenu", {
        params: {
          id: menuId
        }
      }).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "add",
    value: function add(menu) {
      return this.$http.put("/webapi/modules/food/schoolmenu", menu).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "remove",
    value: function remove(menuId) {
      var _this4 = this;
      return this.$http["delete"]("/webapi/modules/food/schoolmenu?id=".concat(menuId)).then(function (response) {
        _this4.$alerts.success("Меню успешно удалено");
        return response.data;
      });
    }
  }, {
    key: "save",
    value: function save(menu) {
      var _this5 = this;
      _.each(menu.eatingTimes, function (et) {
        var type = et.type.key;
        et.type = type;
      });
      if (menu.dayMenu.length > 0) {
        _.each(menu.dayMenu, function (dm) {
          var type = dm.eatingTime.type.key;
          dm.eatingTime.type = type;
        });
      }
      return this.$http.post("/webapi/modules/food/schoolmenu", menu).then(function (response) {
        _this5.$alerts.success("Меню успешно изменено");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.$http.get("/webapi/modules/food/schoolmenus", {
        params: {}
      }).then(function (response) {
        return response.data;
      });
    }
  }]);
  return MenusRepository;
}(_repository.BaseRepository);
var DishesRepository = /*#__PURE__*/function (_BaseRepository3) {
  _inherits(DishesRepository, _BaseRepository3);
  var _super3 = _createSuper(DishesRepository);
  function DishesRepository() {
    _classCallCheck(this, DishesRepository);
    return _super3.apply(this, arguments);
  }
  _createClass(DishesRepository, [{
    key: "getAll",
    value: function getAll(params) {
      params = params || {};
      return this.$http.get("/webapi/modules/food/dishes", {
        params: params
      }).then(function (response) {
        var dishes = response.data;
        if (response.headers("count")) {
          dishes.totalcount = parseInt(response.headers("count"));
        }
        return dishes;
      })["catch"](this.handleError);
    }
  }, {
    key: "create",
    value: function create(dish) {
      var _this6 = this;
      return this.$http.put("/webapi/modules/food/dishes", dish).then(function (response) {
        _this6.$alerts.success("Добавлено блюдо");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(dish) {
      var _this7 = this;
      return this.$http.post("/webapi/modules/food/dishes", dish).then(function (response) {
        _this7.$alerts.success("Блюдо отредактировано");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var _this8 = this;
      return this.$http["delete"]("/webapi/modules/food/dishes?id=".concat(id)).then(function () {
        _this8.$alerts.success("Блюдо удалено");
      })["catch"](this.handleError);
    }
  }, {
    key: "addContent",
    value: function addContent(dishId, content) {
      var _this9 = this;
      return this.$http.post("/webapi/modules/food/dishes/".concat(dishId, "/contents"), content).then(function (response) {
        _this9.$alerts.success("Добавлен продукт для блюда");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "editContent",
    value: function editContent(dishId, content) {
      var _this10 = this;
      return this.$http.post("/webapi/modules/food/dishes/".concat(dishId, "/contents"), content).then(function (response) {
        _this10.$alerts.success("Изменены данные о продукте для блюда");
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "removeContent",
    value: function removeContent(dishId, contentId) {
      var _this11 = this;
      return this.$http["delete"]("/webapi/modules/food/dishes/".concat(dishId, "/contents"), contentId).then(function (response) {
        _this11.$alerts.success("Удалён продукт у блюда");
        return response.data;
      })["catch"](this.handleError);
    }
  }]);
  return DishesRepository;
}(_repository.BaseRepository);
var DayMenusRepository = /*#__PURE__*/function (_BaseRepository4) {
  _inherits(DayMenusRepository, _BaseRepository4);
  var _super4 = _createSuper(DayMenusRepository);
  function DayMenusRepository() {
    _classCallCheck(this, DayMenusRepository);
    return _super4.apply(this, arguments);
  }
  _createClass(DayMenusRepository, [{
    key: "getMenuDayMenus",
    value: function getMenuDayMenus(menuId) {
      return this.$http.get("/webapi/modules/food/schoolmenu/".concat(menuId, "/daymenu")).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "add",
    value: function add(menuId, dayMenu) {
      var type = dayMenu.eatingTime.type.key;
      dayMenu.eatingTime.type = type;
      return this.$http.put("/webapi/modules/food/schoolmenu/".concat(menuId, "/daymenu"), dayMenu).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(menuId, dayMenu) {
      var type = dayMenu.eatingTime.type.key;
      dayMenu.eatingTime.type = type;
      return this.$http.post("/webapi/modules/food/schoolmenu/".concat(menuId, "/daymenu"), dayMenu)["catch"](this.handleError);
    }
  }, {
    key: "remove",
    value: function remove(menuId, id) {
      var _this12 = this;
      return this.$http["delete"]("/webapi/modules/food/schoolmenu/".concat(menuId, "/daymenu?id=").concat(id)).then(function () {
        return _this12.$alerts.success("Меню на день успешно удалено");
      })["catch"](this.handleError);
    }
  }, {
    key: "addOrEditContent",
    value: function addOrEditContent(menuId, dayMenuId, content) {
      return this.$http.post("/webapi/modules/food/schoolmenu/".concat(menuId, "/daymenu/").concat(dayMenuId, "/contents"), content).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "removeContent",
    value: function removeContent(menuId, dayMenuId, id) {
      var _this13 = this;
      return this.$http["delete"]("/webapi/modules/food/schoolmenu/".concat(menuId, "/daymenu/").concat(dayMenuId, "/contents?id=").concat(id)).then(function () {
        return _this13.$alerts.success("Блюдо успешно удалено из состава");
      })["catch"](this.handleError);
    }
  }]);
  return DayMenusRepository;
}(_repository.BaseRepository);
var EatingTimesRepository = /*#__PURE__*/function (_BaseRepository5) {
  _inherits(EatingTimesRepository, _BaseRepository5);
  var _super5 = _createSuper(EatingTimesRepository);
  function EatingTimesRepository() {
    _classCallCheck(this, EatingTimesRepository);
    return _super5.apply(this, arguments);
  }
  _createClass(EatingTimesRepository, [{
    key: "getMenuEatingTimes",
    value: function getMenuEatingTimes(menuId) {
      return this.$http.get("/webapi/modules/food/schoolmenu/".concat(menuId, "/eatingtimes")).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "add",
    value: function add(menuId, eatingTime) {
      _.each(eatingTime.menu.eatingTimes, function (et) {
        var type = et.type.key;
        et.type = type;
      });
      if (eatingTime.menu.dayMenu.length > 0) {
        _.each(eatingTime.menu.dayMenu, function (dm) {
          var type = dm.eatingTime.type.key;
          dm.eatingTime.type = type;
        });
      }
      return this.$http.put("/webapi/modules/food/schoolmenu/".concat(menuId, "/eatingtimes"), eatingTime).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "edit",
    value: function edit(menuId, eatingTime) {
      return this.$http.post("/webapi/modules/food/schoolmenu/".concat(menuId, "/eatingtimes"), eatingTime).then(function (response) {
        return response.data;
      })["catch"](this.handleError);
    }
  }, {
    key: "remove",
    value: function remove(menuId, id) {
      var _this14 = this;
      return this.$http["delete"]("/webapi/modules/food/schoolmenu/".concat(menuId, "/eatingtimes?id=").concat(id)).then(function () {
        return _this14.$alerts.success("Прием пищи успешно удалён");
      })["catch"](this.handleError);
    }
  }]);
  return EatingTimesRepository;
}(_repository.BaseRepository);
var RefsRepository = /*#__PURE__*/function (_BaseRepository6) {
  _inherits(RefsRepository, _BaseRepository6);
  var _super6 = _createSuper(RefsRepository);
  function RefsRepository() {
    _classCallCheck(this, RefsRepository);
    return _super6.apply(this, arguments);
  }
  _createClass(RefsRepository, [{
    key: "getEatingTypes",
    value: function getEatingTypes() {
      return this.$http.get("/webapi/modules/food/refs/eatingtypes").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getSeasonTypes",
    value: function getSeasonTypes() {
      return this.$http.get("/webapi/modules/food/refs/seasontypes").then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getStatusTypes",
    value: function getStatusTypes() {
      return this.$http.get("/webapi/modules/food/refs/statustypes").then(function (response) {
        return response.data;
      });
    }
  }]);
  return RefsRepository;
}(_repository.BaseRepository);
angular.module("irtech.netcity.school.meals").factory('productsRepository', function ($http, $dialogs, $alerts) {
  return new ProductsRepository($http, $dialogs, $alerts);
}).factory('menusRepository', function ($http, $dialogs, $alerts) {
  return new MenusRepository($http, $dialogs, $alerts);
}).factory('dayMenusRepository', function ($http, $dialogs, $alerts) {
  return new DayMenusRepository($http, $dialogs, $alerts);
}).factory('dishesRepository', function ($http, $dialogs, $alerts) {
  return new DishesRepository($http, $dialogs, $alerts);
}).factory('refsRepository', function ($http, $dialogs, $alerts) {
  return new RefsRepository($http, $dialogs, $alerts);
}).factory('eatingTimesRepository', function ($http, $dialogs, $alerts) {
  return new EatingTimesRepository($http, $dialogs, $alerts);
});

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _selectable = _interopRequireDefault(__webpack_require__(321));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
angular.module("irtech.netcity.school.meals").controller("ListDishesCtrl", function ($scope, dishesRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModal) {
  $scope.$parent.page = {
    title: "Блюда"
  };
  angular.extend($scope, {
    paging: {
      page: 1,
      pageSize: 20,
      totalcount: 0
    }
  });
  $.extend($scope, {
    language: language,
    data: {
      dishes: [],
      selection: new _selectable["default"]()
    },
    state: {
      dataReady: false,
      emptyData: false,
      viewReady: true
    }
  });

  //редактировать
  $scope.edit = function (_dish) {
    var modalInstance = $uibModal.open({
      templateUrl: '/static/dist/app/school/meals/dishes/edit/template.html',
      controller: 'EditDishesCtrl',
      backdrop: false,
      keyboard: false,
      resolve: {
        dish: function dish() {
          return angular.copy(_dish);
        },
        mode: function mode() {
          return new Object({
            edit: true
          });
        }
      }
    });
    modalInstance.result.then(function () {
      return $scope.load();
    });
    modalInstance.closed.then(function () {
      return $scope.load();
    });
  };

  //добавить
  $scope.add = function (dish) {
    var modalInstance = $uibModal.open({
      templateUrl: '/static/dist/app/school/meals/dishes/edit/template.html',
      controller: 'EditDishesCtrl',
      backdrop: false,
      keyboard: false,
      resolve: {
        dish: dish,
        mode: function mode() {
          return new Object({
            create: true
          });
        }
      }
    });
    modalInstance.result.then(function (dish) {
      return $scope.load();
    });
    modalInstance.closed.then(function () {
      return $scope.load();
    });
  };

  //удалить
  $scope.remove = function (dish) {
    $.show.confirmation("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u043B\u044E\u0434\u043E \"".concat(dish.name, "\"?")).then(function () {
      dishesRepository.remove(dish.id).then(function () {
        $scope.load();
      });
    });
  };

  //загрузка данных
  $scope.load = function () {
    var params = {
      page: $scope.paging.page,
      pageSize: $scope.paging.pageSize
    };
    dishesRepository.getAll(params).then(function (dishes) {
      // paging
      $scope.paging.totalcount = dishes.totalcount;
      $scope.paging.show = $scope.paging.totalcount > $scope.paging.pageSize && $scope.paging.page > 0;
      $scope.data.dishes = dishes;
      $scope.data.selection.selected = false;
      $scope.state.emptyData = !dishes.length;
      $scope.state.dataReady = true;
      $appLoader.hide();
    });
  };
  $scope.load();
});

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _selectable = _interopRequireDefault(__webpack_require__(321));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
angular.module("irtech.netcity.school.meals").controller("EditDishContentCtrl", function ($scope, dishesRepository, productsRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModalInstance, dishContent, mode, dishId) {
  $.extend($scope, {
    language: language,
    data: {
      dishId: dishId,
      dishContent: dishContent,
      products: [],
      selection: new _selectable["default"]()
    },
    state: {
      dataReady: false,
      emptyData: false,
      viewReady: true
    },
    mode: mode,
    header: mode.edit ? "Редактировать ингредиент" : "Добавить ингредиент"
  });
  $scope.load = function () {
    var params = {
      page: -1,
      pageSize: -1
    };
    productsRepository.getAll(params).then(function (products) {
      $scope.data.products = products;
      $appLoader.hide();
    });
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss("cancel");
  };
  $scope.onChange = function () {
    $scope.state.wasChanged = true;
  };
  $scope.save = function (valid, content) {
    if (valid) {
      if (content) {
        dishesRepository.editContent($scope.data.dishId, content).then(function (content) {
          $scope.state.dataReady = true;
          $appLoader.hide();
          $uibModalInstance.close(content);
        });
      } else {
        dishesRepository.addContent($scope.data.dishId, $scope.data.dishContent).then(function (content) {
          $scope.state.dataReady = true;
          $appLoader.hide();
          $uibModalInstance.close(content);
        });
      }
    }
  };
  $scope.load();
}).controller("EditDishesCtrl", function ($scope, dishesRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModal, $uibModalInstance, dish, mode) {
  $.extend($scope, {
    language: language,
    data: {
      dish: dish,
      selection: new _selectable["default"]()
    },
    state: {
      dataReady: false,
      emptyData: false,
      viewReady: true,
      contentWasChanged: false
    },
    mode: mode,
    header: mode.edit ? "Редактировать блюдо" : "Добавить блюдо"
  });
  $scope.cancel = function () {
    if ($scope.state.contentWasChanged) {
      $uibModalInstance.close($scope.data.dish);
    } else {
      $uibModalInstance.dismiss("cancel");
    }
  };
  $scope.save = function (valid, dish) {
    if (valid) {
      if (dish) {
        dishesRepository.edit(dish).then(function (dish) {
          $scope.state.dataReady = true;
          $appLoader.hide();
          $uibModalInstance.close(dish);
        });
      } else {
        dishesRepository.create($scope.data.dish.item).then(function (dish) {
          $scope.state.dataReady = true;
          $appLoader.hide();
          $scope.mode.edit = true;
          $scope.mode.create = false;
          $scope.data.dish.item = dish;
        });
      }
    }
  };
  $scope.addProduct = function (dishContent) {
    var modalInstance = $uibModal.open({
      templateUrl: '/static/dist/app/school/meals/dishes/edit/editDishContentTemplate.html',
      controller: 'EditDishContentCtrl',
      backdrop: false,
      keyboard: false,
      resolve: {
        dishContent: dishContent,
        dishId: $scope.data.dish.item.id,
        mode: function mode() {
          return new Object({
            create: true
          });
        }
      }
    });
    modalInstance.result.then(function (dishContent) {
      $scope.state.contentWasChanged = true;
      $scope.data.dish.item.contents = _.union($scope.data.dish.item.contents, [dishContent]);
      $scope.$applyAsync(function () {
        return $appLoader.hide();
      });
    });
  };
  $scope.editProduct = function (dishContent) {
    var modalInstance = $uibModal.open({
      templateUrl: '/static/dist/app/school/meals/dishes/edit/editDishContentTemplate.html',
      controller: 'EditDishContentCtrl',
      backdrop: false,
      keyboard: false,
      resolve: {
        dishContent: angular.copy(dishContent),
        dishId: $scope.data.dish.item.id,
        mode: function mode() {
          return new Object({
            edit: true
          });
        }
      }
    });
    modalInstance.result.then(function (dishContent) {
      $scope.state.contentWasChanged = true;
      $scope.data.dish.item.contents = _.union(_.reject($scope.data.dish.item.contents, function (item) {
        return item.id === dishContent.id;
      }), [dishContent]);
      $scope.$applyAsync(function () {
        return $appLoader.hide();
      });
    });
  };
  $scope.removeProduct = function (dishContent) {
    $.show.confirmation("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442 \"".concat(dishContent.product.name, "\"?")).then(function () {
      dishesRepository.removeContent(dishContent.id).then(function () {
        $scope.state.contentWasChanged = true;
        $scope.data.selection.selected = false;
        $scope.data.dish.item.contents = _.reject($scope.data.dish.item.contents, function (item) {
          return item.id === dishContent.id;
        });
        $scope.$applyAsync(function () {
          return $appLoader.hide();
        });
      });
    });
  };
  $scope.onChange = function () {
    $scope.state.contentWasChanged = true;
  };
  $appLoader.hide();
});

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _selectable = _interopRequireDefault(__webpack_require__(321));
var mailsRefs = _interopRequireWildcard(__webpack_require__(356));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
__webpack_require__(357);
angular.module("irtech.netcity.school.meals").controller("ListMenuCtrl", function ($scope, refsRepository, menusRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $location, $uibModal) {
  $scope.$parent.page = {
    title: "Меню"
  };
  $.extend($scope, {
    language: language,
    data: {
      menus: [],
      selection: new _selectable["default"]()
    },
    refs: {
      ageRangesIdx: _.indexBy(mailsRefs["default"].ageRanges, "id"),
      stayRegimesIdx: _.indexBy(mailsRefs["default"].stayRegimes, "id"),
      seasonTypesIdx: {}
    },
    state: {
      dataReady: false,
      emptyData: false,
      viewReady: true
    }
  });

  //редактировать
  $scope.add = function () {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/meals/menu/add/template.html",
      controller: "AddMenuCtrl",
      backdrop: false,
      keyboard: false,
      resolve: {}
    });
    modalInstance.result.then($scope.load);
  };

  //редактировать
  $scope.edit = function (menu) {
    $location.path("/menu/".concat(menu.id, "/details"));
  };

  //удалить
  $scope.remove = function (menu) {
    $.show.confirmation("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043C\u0435\u043D\u044E \"".concat(menu.name, "\"?")).then(function () {
      menusRepository.remove(menu.id).then(function () {
        $scope.load();
      });
    });
  };
  var seasonTypesReady = refsRepository.getSeasonTypes().then(function (seasonTypes) {
    $scope.refs.seasonTypesIdx = _.indexBy(seasonTypes, "key");
  });
  var statusTypesReady = refsRepository.getStatusTypes().then(function (statusTypes) {
    $scope.refs.statusTypesIdx = _.indexBy(statusTypes, "key");
  });
  var refsReady = $q.all([seasonTypesReady, statusTypesReady]);

  //загрузка данных
  $scope.load = function () {
    menusRepository.getAll(appContext.yearId).then(function (menus) {
      $scope.data.menus = menus;
      $scope.data.selection.dropSelect();
      refsReady.then(function () {
        _.each($scope.data.menus, function (menu) {
          menu.douGroupAge = $scope.refs.ageRangesIdx[menu.douGroupAgeId];
          menu.douGroupRegime = $scope.refs.stayRegimesIdx[menu.douGroupRegimeId];
          menu.season = $scope.refs.seasonTypesIdx[menu.season].name;
          menu.status = $scope.refs.statusTypesIdx[menu.status].name;
        });
        $scope.state.emptyData = !menus.length;
        $scope.state.dataReady = true;
        $appLoader.hide();
      });
    });
  };
  $scope["export"] = function () {
    postTo({
      path: "/webapi/modules/food/schoolmenu/file",
      formParams: {
        method: "GET"
      },
      params: {
        schoolYearId: appContext.yearId
      }
    });
  };
  $(document).on("click", ".menu-export-btn", $scope["export"]);
  $scope.load();
});

/***/ }),

/***/ 356:
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
var mealRefs = /*#__PURE__*/function () {
  function mealRefs() {
    _classCallCheck(this, mealRefs);
  }
  _createClass(mealRefs, [{
    key: "ageRanges",
    get: function get() {
      return [{
        id: 1,
        name: "От 2 месяцев до 1 года"
      }, {
        id: 2,
        name: "От 1 года до 3 лет"
      }, {
        id: 3,
        name: "От 3 лет до 7 лет"
      }, {
        id: 4,
        name: "От 1 года до 7 лет"
      }, {
        id: 5,
        name: "От 3 лет до 5 лет"
      }, {
        id: 6,
        name: "От 5 лет до 7 лет"
      }, {
        id: 7,
        name: "От 4 лет до 5 лет"
      }, {
        id: 8,
        name: "От 4 лет до 7 лет"
      }, {
        id: 9,
        name: "От 2 лет до 3 лет"
      }, {
        id: 10,
        name: "От 3 лет до 6 лет"
      }, {
        id: 11,
        name: "От 5 лет до 6 лет"
      }, {
        id: 12,
        name: "От 2 лет до 7 лет"
      }, {
        id: 13,
        name: "От 2 лет до 4 лет"
      }, {
        id: 14,
        name: "От 2 лет до 5 лет"
      }, {
        id: 15,
        name: "От 6 лет до 7 лет"
      }, {
        id: 16,
        name: "От 3 до 8 лет"
      }];
    }
  }, {
    key: "stayRegimes",
    get: function get() {
      return [{
        id: 1,
        name: "полный день"
      }, {
        id: 2,
        name: "продлённый день"
      }, {
        id: 3,
        name: "кратковременного пребывания"
      }, {
        id: 4,
        name: "круглосуточного пребывания"
      }];
    }
  }]);
  return mealRefs;
}();
var instance = new mealRefs();
var _default = instance;
exports["default"] = _default;

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.meals").controller("AddMenuCtrl", function ($scope, menusRepository, $uibModalInstance) {
  $scope.header = "Создание нового меню";
  $.extend($scope, {
    language: language,
    data: {
      menu: {}
    },
    state: {
      dataReady: true,
      viewReady: true
    }
  });
  $scope.create = function () {
    menusRepository.add($scope.data.menu).then(function (saved) {
      $uibModalInstance.close(saved);
    });
  };
  $scope.add = function () {
    menusRepository.add($scope.data.menu).then(function (saved) {
      $uibModalInstance.close(saved);
    });
  };
  $scope.remove = function () {
    menusRepository.remove($scope.data.menu).then(function (saved) {
      $uibModalInstance.close(saved);
    });
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _selectable = _interopRequireDefault(__webpack_require__(321));
var mailsRefs = _interopRequireWildcard(__webpack_require__(356));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(359);
__webpack_require__(360);
__webpack_require__(361);
angular.module("irtech.netcity.school.meals").controller("DetailsMenuCtrl", function ($scope, refsRepository, menusRepository, dayMenusRepository, eatingTimesRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModal) {
  $scope.$parent.page = {
    parent: {
      title: "Меню",
      href: "menu/"
    },
    back: {
      history: true
    },
    title: "Информация по меню"
  };
  $.extend($scope, {
    language: language,
    data: {
      menuId: $routeParams.menuId,
      menu: null,
      selection: {
        eatingTimes: new _selectable["default"](),
        dayMenus: new _selectable["default"]()
      }
    },
    refs: {
      ageRanges: mailsRefs["default"].ageRanges,
      stayRegimes: mailsRefs["default"].stayRegimes,
      eatingTypes: [],
      seasonTypes: []
    },
    state: {
      dataReady: false,
      emptyData: false,
      viewReady: true
    },
    totals: {
      weight: null,
      caloricValue: null,
      carbohydrate: null,
      fats: null,
      proteins: null,
      vitaminC: null
    }
  });
  $scope.addEatingTime = function () {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/meals/menu/details/editEatingTime/template.html",
      controller: "EditEatingTimeCtrl",
      backdrop: false,
      keyboard: false,
      resolve: {
        menu: function menu() {
          return $scope.data.menu;
        },
        eatingTime: function eatingTime() {
          return null;
        }
      }
    });
    modalInstance.closed.then($scope.load);
    modalInstance.result.then($scope.load);
  };
  $scope.editEatingTime = function (_eatingTime) {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/meals/menu/details/editEatingTime/template.html",
      controller: "EditEatingTimeCtrl",
      backdrop: false,
      keyboard: false,
      resolve: {
        menu: function menu() {
          return $scope.data.menu;
        },
        eatingTime: function eatingTime() {
          return _eatingTime;
        }
      }
    });
    modalInstance.closed.then($scope.load);
    modalInstance.result.then($scope.load);
  };
  $scope.removeEatingTime = function (eatingTime) {
    var typeInfo = _.find($scope.refs.eatingTypes, function (type) {
      return type.key === eatingTime.type.key;
    });
    $.show.confirmation("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u0435\u043C \u043F\u0438\u0449\u0438 \"".concat(typeInfo.name, "\" \u0438\u0437 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F ?")).then(function () {
      eatingTimesRepository.remove($scope.data.menuId, eatingTime.id).then($scope.load);
    });
  };
  $scope.addDayMenu = function () {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/meals/menu/details/editDayMenu/template.html",
      controller: "EditDayMenuCtrl",
      backdrop: false,
      keyboard: false,
      resolve: {
        menu: function menu() {
          return $scope.data.menu;
        },
        dayMenu: function dayMenu() {}
      }
    });
    modalInstance.closed.then($scope.load);
    modalInstance.result.then($scope.load);
  };
  $scope.editDayMenu = function (_dayMenu) {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/meals/menu/details/editDayMenu/template.html",
      controller: "EditDayMenuCtrl",
      backdrop: false,
      keyboard: false,
      resolve: {
        menu: function menu() {
          return $scope.data.menu;
        },
        dayMenu: function dayMenu() {
          return angular.copy(_dayMenu);
        }
      }
    });
    modalInstance.closed.then($scope.load);
    modalInstance.result.then($scope.load);
  };
  $scope.removeDayMenu = function (dayMenu) {
    dayMenusRepository.remove($scope.data.menuId, dayMenu.id).then($scope.load);
  };

  //редактировать
  $scope.save = function () {
    menusRepository.save($scope.data.menu).then($scope.load);
  };
  $scope.lazySave = _.debounce($scope.save, 1500);
  var sum = function sum(collection, fieldRef) {
    var sum = _.chain(collection).map(fieldRef).reduce(function (memo, val) {
      return memo + val;
    }, 0);
    sum = parseFloat(Math.round(sum * 100) / 100).toFixed(2);
    return sum;
  };

  // эталонный вес
  var referenceWeight = 100;

  // рассчитывает компоненты блюда на каждые сто грамм
  var prepareDayMenu = function prepareDayMenu(dayMenu) {
    // информация по блюдам
    var contents = _toConsumableArray(dayMenu.contents);
    _.each(contents, function (content) {
      // считать из расчета на каждые сто грамм
      var coeff = content.weight / referenceWeight;
      if (content.dish) {
        var dish = content.dish;
        dish.proteins = dish.proteins * coeff;
        dish.fats = dish.fats * coeff;
        dish.carbohydrate = dish.carbohydrate * coeff;
        dish.caloricValue = dish.caloricValue * coeff;
        dish.vitaminC = dish.vitaminC * coeff;
      }
    });
    var preparedDayMenu = {
      contents: contents
    };
    return preparedDayMenu;
  };
  var calcTotals = function calcTotals(dayMenu) {
    var preparedDayMenu = prepareDayMenu(dayMenu);
    $scope.totals = {
      weight: sum(preparedDayMenu.contents, function (c) {
        return c.weight;
      }),
      caloricValue: sum(preparedDayMenu.contents, function (c) {
        return c.dish.caloricValue;
      }),
      carbohydrate: sum(preparedDayMenu.contents, function (c) {
        return c.dish.carbohydrate;
      }),
      fats: sum(preparedDayMenu.contents, function (c) {
        return c.dish.fats;
      }),
      proteins: sum(preparedDayMenu.contents, function (c) {
        return c.dish.proteins;
      }),
      vitaminC: sum(preparedDayMenu.contents, function (c) {
        return c.dish.vitaminC;
      })
    };
  };

  //загрузка данных
  $scope.load = function () {
    var refsLoaded = refsRepository.getEatingTypes().then(function (eatingTypes) {
      $scope.refs.eatingTypes = eatingTypes;
      $scope.refs.eatingTypes.idx = _.indexBy($scope.refs.eatingTypes, "key");
    });
    var seasonTypesLoaded = refsRepository.getSeasonTypes().then(function (seasonTypes) {
      $scope.refs.seasonTypes = seasonTypes;
    });
    var statusTypesLoaded = refsRepository.getStatusTypes().then(function (statusTypes) {
      $scope.refs.statusTypes = statusTypes;
    });
    var menuLoaded = menusRepository.get($scope.data.menuId).then(function (menu) {
      return $scope.data.menu = menu;
    });
    $q.all([refsLoaded, seasonTypesLoaded, statusTypesLoaded, menuLoaded]).then(function () {
      _.each($scope.data.menu.dayMenu, function (dm) {
        calcTotals(dm);
        dm.eatingTime.type = $scope.refs.eatingTypes.idx[dm.eatingTime.type];
      });
      _.each($scope.data.menu.eatingTimes, function (et) {
        et.type = $scope.refs.eatingTypes.idx[et.type];
        et.start = new Date(et.start);
        et.end = new Date(et.end);
        et.startStr = moment(et.start).format("LT");
        et.endStr = moment(et.end).format("LT");
      });
      $scope.state.dataReady = true;
      $appLoader.hide();
    });
    $scope.data.selection.eatingTimes.dropSelect();
    $scope.data.selection.dayMenus.dropSelect();
  };
  $scope.load();
});

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.meals").controller("EditEatingTimeCtrl", function ($scope, eatingTimesRepository, refsRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModalInstance, menu, eatingTime) {
  $scope.mode = {
    create: !eatingTime,
    edit: eatingTime && eatingTime.id
  };
  $scope.header = "Редактирование расписания приема пищи";
  $.extend($scope, {
    language: language,
    data: {
      menu: menu,
      eatingTime: eatingTime
    },
    refs: {
      types: []
    },
    state: {
      dataReady: false,
      viewReady: false
    }
  });

  // получает форматированную дату
  var getFormatDate = function getFormatDate(date) {
    var hh = date.getHours();
    var mm = date.getMinutes();
    var hhStr = (hh < 10 ? "0" : "") + hh;
    var mmStr = (mm < 10 ? "0" : "") + mm;
    return "".concat(hhStr, ":").concat(mmStr);
  };
  var formatTimes = function formatTimes() {
    var eatingTime = $scope.data.eatingTime;
    if (eatingTime) {
      var start = eatingTime.start;
      var end = eatingTime.end;
      if (start) {
        $scope.data.eatingTime.formatStart = getFormatDate(start);
      }
      if (end) {
        $scope.data.eatingTime.formatEnd = getFormatDate(end);
      }
    }
  };

  // убирает непечатаемые символы
  var fixLocaleDateString = function fixLocaleDateString(localeDate) {
    return localeDate.replace(/[^\x20-\x7E]/g, "");
  };
  var mapTimes = function mapTimes() {
    $scope.data.eatingTime.start = Date.parse(fixLocaleDateString($("#eatingTime-start").val()));
    $scope.data.eatingTime.end = Date.parse(fixLocaleDateString($("#eatingTime-end").val()));
  };
  var checkEatingTimeInterval = function checkEatingTimeInterval(eatingTime) {
    var hourMs = 1 * 60 * 60 * 1000;
    var start = eatingTime.start;
    var end = eatingTime.end;
    var datediff = end - start;
    if (datediff > hourMs) {
      alert("Длительность приема пищи не должна быть более часа");
      return false;
    }
    if (datediff < 0) {
      alert("Время начала приема пищи не может быть больше времени окончания");
      return false;
    }
    return true;
  };
  var checkEatingTimeDuplicate = function checkEatingTimeDuplicate(eatingTime) {
    // тип приема пищи до изменений
    var oldEatingTimeType = $scope.data.eatingTime.oldEatingTimeType;
    if (eatingTime.type === oldEatingTimeType) {
      return true;
    }

    // коллекция существующих приемов пищи
    var types = $scope.data.types;
    // информация о типе, чтобы извлечь имя
    var typeInfo = _.find($scope.refs.types, function (type) {
      return type.key === eatingTime.type;
    });
    if (typeInfo && _.contains(types, typeInfo.name)) {
      alert("Прием пищи уже добавлен в расписание");
      return false;
    }
    return true;
  };
  var validEatingTimeInterval = function validEatingTimeInterval(eatingTime) {
    if (!checkEatingTimeDuplicate(eatingTime)) {
      return false;
    }
    if (!checkEatingTimeInterval(eatingTime)) {
      return false;
    }
    return true;
  };
  refsRepository.getEatingTypes().then(function (types) {
    return $scope.refs.types = types;
  }).then(function () {
    formatTimes();
    var eatingTime = $scope.data.eatingTime;
    if (eatingTime) {
      $scope.data.eatingTime.oldEatingTimeType = eatingTime.type.key;
    }

    // коллекция существующих приемов пищи
    $scope.data.types = _.map($('table[name="EatingTimes"]').find('td[name="TypeName"]'), function (item) {
      return item.innerText.trim();
    });
    $scope.state.dataReady = true;
    $scope.state.viewReady = true;
  });
  $scope.create = function () {
    var time = $scope.data.eatingTime;
    if (!time) {
      return alert("Необходимо заполнить поля");
    }

    // тип приема пищи
    var type = time.type;
    if (!type || !type.key) {
      return alert("Необходимо заполнить Тип");
    }
    $scope.data.eatingTime.type = type.key;
    $scope.data.eatingTime.menu = $scope.data.menu;
    mapTimes();

    // время приема пищи
    var start = $scope.data.eatingTime.start;
    var end = $scope.data.eatingTime.end;
    if (!start || !end) {
      return alert("Время должно быть заполнено в формате чч:мм");
    }
    $scope.data.eatingTime.start = dateUtils.asUTC(start);
    $scope.data.eatingTime.end = dateUtils.asUTC(end);
    if (validEatingTimeInterval($scope.data.eatingTime)) {
      eatingTimesRepository.add($scope.data.menu.id, $scope.data.eatingTime).then(function (saved) {
        $uibModalInstance.close(saved);
      });
    }
  };
  $scope.save = function () {
    // тип приема пищи
    var type = $scope.data.eatingTime.type;
    if (!type || !type.key) {
      return alert("Необходимо заполнить Тип");
    }
    $scope.data.eatingTime.type = $scope.data.eatingTime.type.key;
    $scope.data.eatingTime.menu = {
      id: $scope.data.menu.id
    };
    mapTimes();

    // время приема пищи
    var start = $scope.data.eatingTime.start;
    var end = $scope.data.eatingTime.end;
    if (!start || !end) {
      return alert("Время должно быть заполнено в формате чч:мм");
    }
    $scope.data.eatingTime.start = dateUtils.asUTC(start);
    $scope.data.eatingTime.end = dateUtils.asUTC(end);
    if (validEatingTimeInterval($scope.data.eatingTime)) {
      eatingTimesRepository.edit($scope.data.menu.id, $scope.data.eatingTime).then(function (saved) {
        $uibModalInstance.close(saved);
      });
    }
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _selectable = _interopRequireDefault(__webpack_require__(321));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
angular.module("irtech.netcity.school.meals").controller("EditDayMenuCtrl", function ($scope, dayMenusRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModal, $uibModalInstance, menu, dayMenu) {
  $scope.mode = {
    create: !dayMenu,
    edit: dayMenu && dayMenu.id
  };
  $scope.header = $scope.mode.create ? "Создание меню на день" : "Редактирование меню на день";
  $.extend($scope, {
    language: language,
    data: {
      menu: menu,
      dayMenu: dayMenu,
      selection: new _selectable["default"](),
      refs: {
        //todo. загружать
        dayNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        eatingTimes: menu.eatingTimes
      }
    },
    state: {
      dataReady: menu.eatingTimes.length > 0,
      viewReady: true,
      wasChanged: false
    }
  });
  $scope.create = function (valid) {
    if (valid) {
      dayMenusRepository.add($scope.data.menu.id, $scope.data.dayMenu).then(function (createdMenu) {
        $scope.data.dayMenu = createdMenu;
        $scope.mode.create = false;
        $scope.mode.edit = true;
        $scope.state.wasChanged = false;
      });
    }
  };
  $scope.onChange = function () {
    $scope.state.wasChanged = true;
  };
  $scope.save = function (valid) {
    if (valid) {
      $scope.data.dayMenu.menu = {
        id: $scope.data.menu.id
      };
      dayMenusRepository.edit($scope.data.menu.id, $scope.data.dayMenu).then(function (content) {
        $uibModalInstance.close(content);
      });
    }
  };
  $scope.addContent = function () {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/meals/menu/details/editDayMenuContent/template.html",
      controller: "EditDayMenuContentCtrl",
      backdrop: false,
      keyboard: false,
      resolve: {
        dayMenu: function dayMenu() {
          return $scope.data.dayMenu;
        },
        content: function content() {
          return null;
        }
      }
    });
    modalInstance.result.then(function (newContent) {
      $scope.data.dayMenu.contents = $scope.data.dayMenu.contents || [];
      $scope.data.dayMenu.contents.push(newContent);
      $scope.state.wasChanged = true;
    });
  };
  $scope.editContent = function (_content) {
    var modalInstance = $uibModal.open({
      templateUrl: "/static/dist/app/school/meals/menu/details/editDayMenuContent/template.html",
      controller: "EditDayMenuContentCtrl",
      backdrop: false,
      keyboard: false,
      resolve: {
        dayMenu: function dayMenu() {
          return $scope.data.dayMenu;
        },
        content: function content() {
          return _content;
        }
      }
    });
    modalInstance.result.then(function (newContent) {
      $scope.state.wasChanged = true;
      //todo. как-то обновить или перезагрузить
      //dayMenu.contents.push(newContent);
    });
  };

  $scope.removeContent = function (content) {
    dayMenusRepository.removeContent($scope.data.menu.id, $scope.data.dayMenu.id, content.id).then(function () {
      $scope.data.dayMenu.contents = _.without($scope.data.dayMenu.contents, content);
    });
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.meals").controller("EditDayMenuContentCtrl", function ($scope, dishesRepository, dayMenusRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModalInstance, dayMenu, content) {
  $scope.mode = {
    create: !content,
    edit: content && content.id
  };
  $scope.header = "Редактирование состава меню";
  $.extend($scope, {
    language: language,
    data: {
      dayMenu: dayMenu,
      content: content,
      refs: {
        dishes: []
      }
    },
    state: {
      dataReady: false,
      viewReady: false
    }
  });
  dishesRepository.getAll().then(function (dishes) {
    if (dishes) {
      $scope.data.refs.dishes = dishes;
      $scope.state.dataReady = true;
      $scope.state.viewReady = true;
    } else {
      $uibModalInstance.dismiss('cancel');
    }
  });
  $scope.save = function (valid) {
    if (valid) {
      dayMenusRepository.addOrEditContent(0, $scope.data.dayMenu.id, $scope.data.content).then(function (savedContent) {
        $uibModalInstance.close(savedContent);
      });
    }
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _selectable = _interopRequireDefault(__webpack_require__(321));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
angular.module("irtech.netcity.school.meals").controller("ListProductsCtrl", function ($scope, productsRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModal) {
  $scope.$parent.page = {
    title: "Продукты"
  };
  angular.extend($scope, {
    paging: {
      page: 1,
      pageSize: 20,
      totalcount: 0
    }
  });
  $.extend($scope, {
    language: language,
    data: {
      products: [],
      selection: new _selectable["default"]()
    },
    state: {
      dataReady: false,
      emptyData: false,
      viewReady: true
    }
  });

  // показать модальный диалог
  $scope.$showModal = function (options) {
    // опции по умолчанию
    var defOpts = {
      templateUrl: "/static/dist/app/school/meals/products/edit/template.html",
      controller: "EditProductCtrl",
      size: "md"
    };
    options = options || {}; // если нет опций, то проинициализировать пустым объектом
    var modalOpts = $.extend({}, defOpts, options);
    var modalInstance = $uibModal.open(modalOpts); // инициализация модального диалога

    return modalInstance;
  };

  // добавить продукт
  $scope.add = function () {
    var options = {
      backdrop: false,
      keyboard: false,
      resolve: {
        product: function product() {
          return null;
        }
      }
    };
    var modalInstance = $scope.$showModal(options);
    modalInstance.result.then(function () {
      $scope.load();
    });
  };

  // редактировать продукт
  $scope.edit = function (_product) {
    var options = {
      backdrop: false,
      keyboard: false,
      resolve: {
        product: function product() {
          return angular.copy(_product);
        }
      }
    };
    var modalInstance = $scope.$showModal(options);
    modalInstance.result.then(function () {
      $scope.load();
    });
  };

  // удалить продукт
  $scope.remove = function (product) {
    $.show.confirmation("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \"".concat(product.name, "\"?")).then(function () {
      productsRepository.remove(product.id).then(function () {
        $scope.load();
      });
    });
  };

  //загрузка данных
  $scope.load = function () {
    var params = {
      page: $scope.paging.page,
      pageSize: $scope.paging.pageSize
    };
    productsRepository.getAll(params).then(function (products) {
      $scope.data.products = products;

      // сброс выбора
      $scope.data.selection.selected = null;

      // paging
      $scope.paging.totalcount = products.totalcount;
      $scope.paging.show = $scope.paging.totalcount > $scope.paging.pageSize && $scope.paging.page > 0;
      $scope.state.emptyData = !products.length;
      $scope.state.dataReady = true;
      $appLoader.hide();
    });
  };
  $scope.load();
});

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module("irtech.netcity.school.meals").controller("EditProductCtrl", function ($scope, productsRepository, $http, $q, $alerts, $routeParams, $dialogs, $appLoader, $uibModalInstance, product) {
  $scope.header = "Редактирование продукта";
  $scope.isAdd = !product;
  $.extend($scope, {
    language: language,
    data: {
      product: product || {}
    }
  });
  $scope.save = function () {
    var product = $scope.data.product;
    if ($scope.isAdd) {
      if (!product.name) {
        $alerts.error("не заполнено название продукта");
        return;
      }
      productsRepository.create(product).then(function () {
        $uibModalInstance.close(product);
      });
    } else {
      productsRepository.edit(product).then(function () {
        $uibModalInstance.close(product);
      });
    }
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss("cancel");
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

/***/ })

/******/ });