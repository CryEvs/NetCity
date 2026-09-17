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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 217);
/******/ })
/************************************************************************/
/******/ ({

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = angular.module("irtech.netcity.school.ndconstructor", ["ngRoute", "ngSanitize", "ngMessages", "ui.select", "uikit.alerts", "uikit.dialogs", "ui.bootstrap", "irtech.netcity.common", "irtech.netcity.ui-components"]);

__webpack_require__(219);

_module.config(function ($routeProvider, $locationProvider) {
  $routeProvider.otherwise({
    templateUrl: "/static/dist/app/school/ndconstructor/index/template.html",
    controller: "ndconstructorCtrl"
  });
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(220);

angular.module("irtech.netcity.school.ndconstructor").controller("ndconstructorCtrl", function ($scope, $http, $document, $location, $appLoader, settingsProvider, $sce) {
  $scope.$parent.page = {
    title: language.Generic.MenuFolders.kIntegrationNewDiskConstructor,
    back: {
      history: true
    }
  };
  $.extend($scope, {
    url: ""
  });

  $scope.trustSrc = function (src) {
    return $sce.trustAsResourceUrl(src);
  }; //загрузка данных


  $scope.load = function () {
    $appLoader.show();
    $http.get("/webapi/newDiskConstructor/get").then(function (result) {
      $scope.url = result.data;
      $scope.$applyAsync(function () {
        $appLoader.hide();
      });
    })["catch"](function () {
      return $appLoader.hide();
    });
  };

  $(function () {
    var frameElement = document.getElementById('apps-iframe');

    function postMessageHandler(e) {
      var message, height;

      if (e.data) {
        try {
          message = JSON.parse(e.data);

          if (message.onresize && message.onresize.height) {
            height = message.onresize.height;

            if (height) {
              height = height > window.innerHeight ? height : window.innerHeight;
              setTimeout(function () {
                frameElement.style.height = height + 'px';
              }, 100);
            }
          }
        } catch (e) {
          console.dir(e);
        }
      }
    }

    if (window.addEventListener) {
      window.addEventListener('message', postMessageHandler);
    } else {
      window.attachEvent('onmessage', postMessageHandler);
    }

    function frameScrollTopHandler() {
      var scrollTop = $(window).scrollTop() - frameElement.getBoundingClientRect().top;
      frameElement.contentWindow.postMessage({
        scrollTop: scrollTop
      }, $scope.url);
    }

    $(window).resize(frameScrollTopHandler);
    $(window).scroll(frameScrollTopHandler);
  });
  $scope.load();
});

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  // пользователь активен
  var userIsActive = false; // последнее время активности сессии на клиенте

  var clientLastAccessTime; // время неактивности сессии пользователя, мс

  var tokenTimeOut = appContext.tokenTimeOut; // идентификаторы задач

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
  }; // инициализирует время последней активности сессии


  var initLastAccessTime = function initLastAccessTime() {
    var now = new Date();
    clientLastAccessTime = now;
  }; // продлевает сессию


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
  }; // останавливает задачу setInterval


  var stopTask = function stopTask(intervalId) {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }; // останавливает выполнение задач


  var stopTasks = function stopTasks() {
    stopTask(task1Id);
    stopTask(task2Id);
  };

  var TimeOutError =
  /*#__PURE__*/
  function (_Error) {
    _inherits(TimeOutError, _Error);

    function TimeOutError() {
      _classCallCheck(this, TimeOutError);

      return _possibleConstructorReturn(this, _getPrototypeOf(TimeOutError).apply(this, arguments));
    }

    return TimeOutError;
  }(_wrapNativeSuper(Error));

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
    var now = new Date(); // время простоя в мс

    var ms = now - lastAccessTimeDt; // мс

    return ms;
  }; // проверяет попадание оставшегося времени жизни сессии в двухминутный интервал


  var checkAnxietyInterval = function checkAnxietyInterval(lifetime) {
    var twoMinutsMs = 2 * 60 * 1000;
    return lifetime > 0 && lifetime < twoMinutsMs;
  }; // вычисляет оставшееся время жизни сессии


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

    alert(language.Generic.Common.kSessionExpireSoonWarn, {
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
  }; // проверяет истечение времени жизни сессии


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
  }; // инициализирует выполнение задач


  var initTasks = function initTasks() {
    // задачи
    var task1 = detectUserActivity;
    var task2 = checkEndOfSession;
    initLastAccessTime(); // запуск задач

    task1Id = setInterval(task1, opts.activityInterval);
    task2Id = setInterval(task2, opts.checkEndOfSessionInterval); // подписаться на события движения мыши и нажатия клавиатуры

    $(document).mousemove(setUserIsActivity);
    $(document).keypress(setUserIsActivity);
  };

  initTasks();
})();

/***/ })

/******/ });