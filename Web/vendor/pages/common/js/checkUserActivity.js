"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  if (typeof module !== "undefined" && module !== null) {
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