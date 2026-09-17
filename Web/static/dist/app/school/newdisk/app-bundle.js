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
/******/ 	return __webpack_require__(__webpack_require__.s = 464);
/******/ })
/************************************************************************/
/******/ ({

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CheckUserActivityPlug = function () {
  // пользователь активен
  var userIsActive = false;
  // последнее время активности сессии на клиенте
  var clientLastAccessTime;
  // время неактивности сессии пользователя, мс
  var tokenTimeOut = appContext.tokenTimeOut;

  // идентификаторы задач
  var task1Id, task2Id;
  var opts = {
    activityInterval: 300000,
    // мс
    checkEndOfSessionInterval: 60000 // мс
  };

  var setUserIsActivity = function setUserIsActivity() {
    if (!userIsActive) {
      userIsActive = true;
    }
  };

  // инициализирует время последней активности сессии
  var initLastAccessTime = function initLastAccessTime() {
    var now = new Date();
    clientLastAccessTime = now;
  };

  // продлевает сессию
  var extendSession = function extendSession() {
    return jsSubmit({
      action: "/webapi/context/keepAlive?token=" + appContext.at,
      auth: false,
      method: "GET",
      defaultErrorHandling: false
    }).then(function (time) {
      initLastAccessTime();
    });
  };
  var detectUserActivity = function detectUserActivity() {
    // если пользователь активен - отправить запрос на сервер и продлить сессию
    if (userIsActive) {
      var queries = [extendSession];
      extDeferred.when(queries).then(function () {
        userIsActive = false;
      });
    }
  };

  // останавливает задачу setInterval
  var stopTask = function stopTask(intervalId) {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  // останавливает выполнение задач
  var stopTasks = function stopTasks() {
    stopTask(task1Id);
    stopTask(task2Id);
  };
  var TimeOutError = /*#__PURE__*/function (_Error) {
    _inherits(TimeOutError, _Error);
    var _super = _createSuper(TimeOutError);
    function TimeOutError() {
      _classCallCheck(this, TimeOutError);
      return _super.apply(this, arguments);
    }
    return _createClass(TimeOutError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var handleError = function handleError(error) {
    stopTasks();
    if (error instanceof TimeOutError) {
      $.show.message(error.message, language.Generic.Common.kAttention).then(function () {
        return window.postTo({
          path: "/",
          method: "GET"
        });
      });
    } else {
      $.show.error(error.message);
    }
  };
  var getIdleMs = function getIdleMs(lastAccessTimeDt) {
    // срез времени
    var now = new Date();
    // время простоя в мс
    var ms = now - lastAccessTimeDt; // мс

    return ms;
  };

  // проверяет попадание оставшегося времени жизни сессии в двухминутный интервал
  var checkAnxietyInterval = function checkAnxietyInterval(lifetime) {
    var twoMinutsMs = 2 * 60 * 1000;
    return lifetime > 0 && lifetime < twoMinutsMs;
  };

  // вычисляет оставшееся время жизни сессии
  var getLifetime = function getLifetime(lastAccessTime) {
    var ms = getIdleMs(lastAccessTime);
    var lifetime = tokenTimeOut - ms;
    return lifetime;
  };
  var checkTime = function checkTime(time) {
    if (time === 0) {
      // для мс
      return;
    }
    if (time) {
      return;
    }
    throw new TimeOutError(language.Generic.Common.kTimeOutSessionWarn);
  };
  var showMessage = function showMessage() {
    if ($("#timeOutInfoId").is(":visible")) {
      return;
    }
    alert(language.Generic.SetupSchoolUI.kStrExpireWarning, {
      id: "timeOutInfoId"
    });
  };
  var checkServerSessionLifetime = function checkServerSessionLifetime() {
    // убедиться, что на сервере сессия скоро подойдет к концу
    jsSubmit({
      action: "/webapi/context/lifetime?token=" + appContext.at,
      auth: false,
      method: "GET",
      defaultErrorHandling: false
    }).then(function (serverSessionLifetime) {
      try {
        checkTime(serverSessionLifetime);
        if (checkAnxietyInterval(serverSessionLifetime)) {
          if (userIsActive) {
            extendSession().then(function () {
              userIsActive = false;
            });
          } else {
            showMessage();
          }
        }
      } catch (ex) {
        handleError(ex);
      }
    });
  };
  var checkSessionLifetime = function checkSessionLifetime() {
    try {
      checkTime(clientLastAccessTime);
      var clientSessionLifetime = getLifetime(clientLastAccessTime);
      if (checkAnxietyInterval(clientSessionLifetime)) {
        // убедиться, что на сервере сессия скоро подойдет к концу
        checkServerSessionLifetime();
      }
    } catch (ex) {
      handleError(ex);
    }
  };

  // проверяет истечение времени жизни сессии
  var sessionExpired = function sessionExpired() {
    if (!clientLastAccessTime) {
      return true;
    }
    var clientIdleMs = getIdleMs(clientLastAccessTime);
    return clientIdleMs > tokenTimeOut;
  };
  var sessionExpiredWhen = function sessionExpiredWhen() {
    var deferred = $.Deferred();
    var isExpired = sessionExpired();
    if (isExpired) {
      // убедиться, что на сервере сессия тоже истекла
      jsSubmit({
        action: "/webapi/context/expired?token=" + appContext.at,
        auth: false,
        method: "GET",
        defaultErrorHandling: false
      }).then(function (expired) {
        deferred.resolve(expired);
      });
    } else {
      deferred.resolve(isExpired);
    }
    return deferred.promise();
  };
  var handleEndSession = function handleEndSession() {
    stopTasks();
    if ($("#timeOutInfoId").is(":visible")) {
      $("#timeOutInfoId").modal("hide");
    }
    $.show.message(language.Generic.Common.kTimeOutSessionWarn, language.Generic.Common.kAttention).then(function () {
      return window.postTo({
        path: "/",
        method: "GET"
      });
    });
  };
  var checkEndOfSession = function checkEndOfSession() {
    sessionExpiredWhen().then(function (isExpired) {
      if (isExpired) {
        // сессия истекла
        handleEndSession();
      } else {
        checkSessionLifetime();
      }
    });
  };

  // инициализирует выполнение задач
  var initTasks = function initTasks() {
    // задачи
    var task1 = detectUserActivity;
    var task2 = checkEndOfSession;
    initLastAccessTime();

    // запуск задач
    task1Id = setInterval(task1, opts.activityInterval);
    task2Id = setInterval(task2, opts.checkEndOfSessionInterval);

    // подписаться на события движения мыши и нажатия клавиатуры
    $(document).on("mousemove", setUserIsActivity);
    $(document).on("keypress", setUserIsActivity);
  };
  initTasks();
}();
(function (exp, name) {
  var exports;
  var exported = false;
  if ( true && module !== null) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === undefined)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(CheckUserActivityPlug);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(251)(module)))

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

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.university = exports.school = exports.profSchool = exports.preSchool = exports.orphanage = exports.locale = exports.generic = exports.educMgr = exports.addSchool = void 0;
var generic = -1;
exports.generic = generic;
var educMgr = 0;
exports.educMgr = educMgr;
var preSchool = 1;
exports.preSchool = preSchool;
var school = 2;
exports.school = school;
var addSchool = 3;
exports.addSchool = addSchool;
var profSchool = 4;
exports.profSchool = profSchool;
var orphanage = 5;
exports.orphanage = orphanage;
var university = 6;
exports.university = university;
var locale = {
  "-1": "-",
  0: language.Generic.Common.kEMName,
  1: language.Generic.Common.kFuncType_PreSchool,
  2: language.Generic.Common.kFuncType_School,
  3: language.Generic.Common.kFuncType_AddSchool,
  4: language.Generic.Common.kFuncType_ProfSchool,
  5: language.Generic.Common.kFuncType_Orphanage,
  6: language.Generic.Common.kFuncType_University
};
exports.locale = locale;

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(465);


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Roles = _interopRequireWildcard(__webpack_require__(9));
var FuncTypes = _interopRequireWildcard(__webpack_require__(418));
var _newdisk = __webpack_require__(466);
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
var _module = angular.module("irtech.netcity.school.newdisk", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "ngFileUpload", "ui.tree", "irtech.netcity.ui-components"]);
var FinGramController = /*#__PURE__*/function (_NewDiskController) {
  _inherits(FinGramController, _NewDiskController);
  var _super = _createSuper(FinGramController);
  function FinGramController() {
    _classCallCheck(this, FinGramController);
    return _super.apply(this, arguments);
  }
  _createClass(FinGramController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.language.Generic.MenuFolders.kIntegrationNewDiskFinGram;
      this.newDiskType = "fingram";
    }
  }]);
  return FinGramController;
}(_newdisk.NewDiskController);
var ConstructorController = /*#__PURE__*/function (_NewDiskController2) {
  _inherits(ConstructorController, _NewDiskController2);
  var _super2 = _createSuper(ConstructorController);
  function ConstructorController() {
    _classCallCheck(this, ConstructorController);
    return _super2.apply(this, arguments);
  }
  _createClass(ConstructorController, [{
    key: "initPage",
    value: function initPage() {
      this.pageContext.title = this.language.Generic.MenuFolders.kIntegrationNewDiskConstructor;
      this.newDiskType = "constructor";
    }
  }]);
  return ConstructorController;
}(_newdisk.NewDiskController);
var EducPortalController = /*#__PURE__*/function (_NewDiskController3) {
  _inherits(EducPortalController, _NewDiskController3);
  var _super3 = _createSuper(EducPortalController);
  function EducPortalController() {
    _classCallCheck(this, EducPortalController);
    return _super3.apply(this, arguments);
  }
  _createClass(EducPortalController, [{
    key: "initPage",
    value: function initPage() {
      if (this.appContext.funcType == FuncTypes.preSchool && this.appContext.hasRole(Roles.parent)) {
        this.pageContext.parent = null;
        this.pageContext.back = null;
      } else if (this.appContext.hasRole(Roles.student) || this.appContext.hasRole(Roles.parent)) {
        this.pageContext.parent = {
          title: this.language.Generic.MenuFolders.kStudentDiary,
          href: "/angular/school/studentDiary/"
        };
      } else {
        this.pageContext.parent = {
          title: this.language.Generic.MenuFolders.kLearningApplications,
          href: "/angular/school/studentDiary/"
        };
      }
      this.pageContext.title = this.language.Generic.LearnApp.kCollectionOfResources;
      this.newDiskType = "educportal";
    }
  }]);
  return EducPortalController;
}(_newdisk.NewDiskController);
/*@ngInject*/
var config = function config($routeProvider, $locationProvider) {
  $routeProvider.when("/constructor", (0, _newdisk.BuildNewDiskComponent)(ConstructorController)).when("/educportal", (0, _newdisk.BuildNewDiskComponent)(EducPortalController)).when("/fingram", (0, _newdisk.BuildNewDiskComponent)(FinGramController));
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
};
config.$inject = ["$routeProvider", "$locationProvider"];
_module.config(config);

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewDiskController = exports.BuildNewDiskComponent = void 0;
__webpack_require__(250);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var NewDiskController = /*#__PURE__*/function () {
  NewDiskController.$inject = ["pageContext", "language", "appContext", "$appLoader", "$http", "$scope", "$sce", "$window"];
  /*@ngInject*/
  function NewDiskController(pageContext, language, appContext, $appLoader, $http, $scope, $sce, $window) {
    _classCallCheck(this, NewDiskController);
    this.pageContext = pageContext;
    this.language = language;
    this.appContext = appContext;
    this.$appLoader = $appLoader;
    this.$http = $http;
    this.$scope = $scope;
    this.$sce = $sce;
    this.$window = $window;
    pageContext.title = "Новый диск";
    pageContext.back = {
      history: true
    };
    this.initPage();
    this.initScroll();
    this.load();
  }
  _createClass(NewDiskController, [{
    key: "load",
    value: function load() {
      var _this = this;
      this.$appLoader.show();
      this.$http.get("/webapi/newdisk/".concat(this.newDiskType)).then(function (result) {
        _this.url = result.data;
        _this.$scope.$applyAsync(function () {
          _this.$appLoader.hide();
        });
      })["catch"](function () {
        return _this.$appLoader.hide();
      });
    }
  }, {
    key: "initScroll",
    value: function initScroll() {
      var _this2 = this;
      $(document).ready(function () {
        _this2.frameElement = document.getElementById('apps-iframe');
        var postMessageHandler = function postMessageHandler(e) {
          var message, height;
          if (e.data) {
            try {
              message = JSON.parse(e.data);
              if (message.onresize && message.onresize.height) {
                height = message.onresize.height;
                if (height) {
                  height = height > window.innerHeight ? height : window.innerHeight;
                  setTimeout(function () {
                    _this2.frameElement.style.height = height + 'px';
                  }, 100);
                }
              }
            } catch (e) {
              console.dir(e);
            }
          }
        };
        if (_this2.$window.addEventListener) {
          _this2.$window.addEventListener('message', postMessageHandler);
        } else {
          _this2.$window.attachEvent('onmessage', postMessageHandler);
        }
        function frameScrollTopHandler(frameElement, window) {
          if (frameElement && frameElement.contentWindow && frameElement.contentWindow.postMessage) {
            var scrollTop = $(window).scrollTop() - frameElement.getBoundingClientRect().top;
            frameElement.contentWindow.postMessage({
              scrollTop: scrollTop
            }, '*');
          }
        }
        $(window).on("resize", function () {
          return frameScrollTopHandler(_this2.frameElement, _this2.$window);
        });
        $(window).on("scroll", function () {
          return frameScrollTopHandler(_this2.frameElement, _this2.$window);
        });
      });
    }
  }, {
    key: "trustSrc",
    value: function trustSrc(src) {
      return this.$sce.trustAsResourceUrl(src);
    }
  }]);
  return NewDiskController;
}();
exports.NewDiskController = NewDiskController;
var BuildNewDiskComponent = function BuildNewDiskComponent(controller) {
  return {
    controller: controller,
    controllerAs: "newDiskCtrl",
    selector: "newdisk",
    templateUrl: "/static/dist/app/school/newdisk/newdisk.component.html"
  };
};
exports.BuildNewDiskComponent = BuildNewDiskComponent;

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