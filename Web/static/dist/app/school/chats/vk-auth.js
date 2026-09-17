var VkAuth =
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authVk = authVk;
exports.linkVkEduProfile = linkVkEduProfile;
var _superappkit = __webpack_require__(2);
var _common = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
function authVk() {
  var appId = window.appId;
  var superAppToken = window.superAppToken;
  var at = window.at;
  var callback = window.callback;
  _superappkit.Config.init({
    appId: appId
  });
  var authSettings = {
    url: callback,
    state: at,
    action: {
      name: 'login_with_eljour',
      token: superAppToken
    }
  };
  _superappkit.Connect.redirectAuth(authSettings);
}
function absolutePath(href) {
  var link = document.createElement("a");
  link.href = href;
  return link.href;
}
function linkVkEduProfile(chatsRepository, appContext) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var ip, data, accessData, callbackurl, authWin, winOptions, doc;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return chatsRepository.getIp();
        case 2:
          ip = _context.sent;
          data = {
            ip: ip
          };
          _context.next = 6;
          return chatsRepository.getVkAccessData(data);
        case 6:
          accessData = _context.sent;
          callbackurl = absolutePath('/webapi/integration/vk/auth-callback');
          authWin = null;
          winOptions = {
            url: "",
            name: "vk-auth",
            specs: "status=yes, toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=820,height=620",
            winChild: authWin
          };
          (0, _common.windowOpen)(winOptions);
          authWin = winOptions.winChild;
          authWin.appId = accessData.appId;
          authWin.superAppToken = accessData.superAppToken;
          authWin.at = appContext.at;
          authWin.callback = callbackurl;
          doc = authWin.document;
          doc.open();
          doc.write("<head><script src=\"/static/dist/app/school/chats/vk-auth.js\"></script><script type=\"text/javascript\">VkAuth.authVk();</script></head>");
          doc.close();
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationProfileEvents = exports.VerificationProfile = exports.UserEvents = exports.User = exports.SDKErrorCodes = exports.OneTapAuthEventsSDK = exports.MiniAppService = exports.MiniAppEvents = exports.MiniApp = exports.MessengerEvents = exports.Messenger = exports.GeoserviceEvents = exports.GeoService = exports.FloatingOneTapAuthEventsSDK = exports.DataPolicyEventsSDK = exports.ConnectEvents = exports.Connect = exports.Config = exports.CommonSDKEvents = exports.ButtonOneTapAuthEventsSDK = exports.BodyOverflowManager = exports.AuthQREvents = exports.AuthQR = exports.AuthCaptchaEventsSDK = exports.Account = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function e(t) {
  return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  })(t);
}
var t = ["vk.com", "vk.ru"],
  n = ["agreements", "promo", "vkc_behavior", "vkc_auth_action", "vkc_brand", "vkc_display_mode", "service_groups", "external_device_id"],
  r = 0,
  o = 1,
  i = 3,
  a = 4,
  s = 6,
  c = 15,
  u = 16,
  l = 82,
  p = !("undefined" == typeof window || !window.document || !window.document.createElement),
  d = p && !!window.addEventListener;
function h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
function f(e, t) {
  return e(t = {
    exports: {}
  }, t.exports), t.exports;
}
var m = h(f(function (e) {
    function t(n) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = t = function t(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = t = function t(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), t(n);
    }
    e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  })),
  v = function v() {};
if (d) try {
  var g = Object.defineProperty({}, "passive", {
    get: function get() {
      !0;
    }
  });
  window.addEventListener("test", v, g), window.removeEventListener("test", v, g);
} catch (e) {}
!function () {
  if (!p) return !1;
  var e = !1;
  try {
    document.createElement("div").scrollTo({
      top: 0,
      get behavior() {
        return e = !0, "smooth";
      }
    });
  } catch (e) {}
}();
var _ = f(function (e) {
  e.exports = function (e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(_);
var A = f(function (e) {
  e.exports = function (e) {
    if (Array.isArray(e)) return _(e);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(A);
var y = f(function (e) {
  e.exports = function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(y);
var T = f(function (e) {
  e.exports = function (e, t) {
    if (e) {
      if ("string" == typeof e) return _(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0;
    }
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(T);
var E = f(function (e) {
  e.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
});
h(E), h(f(function (e) {
  e.exports = function (e) {
    return A(e) || y(e) || T(e) || E();
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}));
var O = h(f(function (e) {
  e.exports = function (e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}));
function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? S(Object(n), !0).forEach(function (t) {
      O(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
var P = {
  parse: function parse(e) {
    if ("string" != typeof e) return {};
    if (!(e = e.trim().replace(/^[?#&]/, ""))) return {};
    var t = /\?(.+)$/gi.exec(e);
    return (t ? t[1] : e).split("&").reduce(function (e, t) {
      var n = t.split("=");
      return n[1] && (e[n[0]] = decodeURIComponent(n[1])), e;
    }, {});
  },
  stringify: function stringify(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ("object" !== m(e) || null === e) return "";
    t = C({
      encode: !0
    }, t);
    var n = function n(e) {
      return t.encode ? encodeURIComponent(e) : String(e);
    };
    return Object.keys(e).reduce(function (r, o) {
      var i = e[o];
      return void 0 === i ? r : null === i ? (t.skipNull || r.push([n(o), ""].join("=")), r) : Array.isArray(i) ? (i.map(function (e) {
        r.push("".concat(n(o), "[]=").concat(n(e)));
      }).join(), r) : (r.push([n(o), n(i)].join("=")), r);
    }, []).join("&");
  }
};
function w(e) {
  return P.stringify(e, {
    skipNull: !0
  });
}
function b(e) {
  return Object.keys(e).filter(function (e) {
    return n.includes(e);
  });
}
function D(e) {
  var t;
  return Boolean(null === (t = b(e)) || void 0 === t ? void 0 : t.length);
}
function N(e) {
  var t = function (e) {
    return b(e).reduce(function (t, n) {
      return t[n] = e[n], t;
    }, {});
  }(e);
  return btoa(JSON.stringify(t));
}
function k(e, t) {
  var n,
    r,
    o = document.createElement("iframe");
  for (var i in e && (o.src = e), o.style.cssText = null !== (n = null == t ? void 0 : t.cssText) && void 0 !== n ? n : "", o.width = "100%", o.height = "100%", o.style.border = "none", null == t ? void 0 : t.properties) t && t.properties.hasOwnProperty(i) && (o[i] = null !== (r = t.properties[i]) && void 0 !== r ? r : "");
  return o;
}
function I() {
  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
  var r = function r(t) {
    return t && "object" === e(t);
  };
  return t.reduce(function (e, t) {
    return Object.keys(t).forEach(function (n) {
      var o = e[n],
        i = t[n];
      Array.isArray(o) && Array.isArray(i) ? e[n] = o.concat.apply(o, i) : r(o) && r(i) ? e[n] = I(o, i) : e[n] = i;
    }), e;
  }, {});
}
function R(e, t) {
  return void 0 === e ? t : "number" != typeof e ? e ? 1 : 0 : e;
}
function K(t, n) {
  return t && "object" === e(t) ? Object.keys(t).reduce(function (e, r) {
    return n.includes(r) ? (e[r] = t[r], e) : e;
  }, {}) : t;
}
h(f(function (e) {
  e.exports = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
})), h(f(function (e) {
  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  e.exports = function (e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}));
var M,
  x,
  L,
  V = new (function () {
    function e() {
      this.savedStyles = [], this.bodyScrollYValue = 0, this.isFreezed = !1;
    }
    return e.prototype.freezeBodyOverflow = function () {
      if (!this.isFreezed) {
        this.isFreezed = !0;
        var e = (n = window.document.documentElement.clientWidth, Math.abs(window.innerWidth - n)),
          t = parseInt(window.getComputedStyle(window.document.body).paddingRight, 10) || 0;
        this.bodyScrollYValue = window.pageYOffset || window.scrollY, this.savedStyles = [], this.savedStyles.push({
          value: window.document.body.style.paddingRight,
          property: "padding-right"
        }, {
          value: window.document.body.style.overflow,
          property: "overflow"
        }, {
          value: window.document.body.style.overflowX,
          property: "overflow-x"
        }, {
          value: window.document.body.style.overflowY,
          property: "overflow-y"
        }), window.document.body.style.setProperty("overflow", "hidden"), window.document.body.style.setProperty("padding-right", e + t + "px");
      }
      var n;
    }, e.prototype.restoreBodyOverflow = function () {
      this.isFreezed && (this.savedStyles.forEach(function (e) {
        var t = e.value,
          n = e.property;
        t ? window.document.body.style.setProperty(n, t) : window.document.body.style.removeProperty(n);
      }), window.scrollTo(0, this.bodyScrollYValue), this.isFreezed = !1);
    }, e;
  }())();
exports.BodyOverflowManager = V;
exports.SDKErrorCodes = L;
exports.CommonSDKEvents = M;
!function (e) {
  e.OPEN = "VKSDKOpen", e.CLOSE = "VKSDKClose", e.LOGOUT = "VKSDKLogout", e.GET_CAPTCHA = "VKSDKGetCaptcha", e.CAPTCHA_SUCCESS = "VKSDKGetCaptchaSuccess", e.CAPTCHA_FAILED = "VKSDKGetCaptchaFail", e.AUTH_NEEDED = "VKSDKAuthNeeded", e.UPDATE_PARAMS = "VKSDKUpdateParams", e.REQUEST_SUPERAPP_TOKEN = "VKSDKRequestSuperAppToken", e.ERROR = "VKSDKError";
}(M || (exports.CommonSDKEvents = M = {})), function (e) {
  e.INIT = "VKSDKInit";
}(x || (x = {})), function (e) {
  e[e.UNKNOWN = 1] = "UNKNOWN", e[e.MISSING_PARAM = 2] = "MISSING_PARAM", e[e.CONNECTION_LOST = 3] = "CONNECTION_LOST", e[e.USER_DENIED = 4] = "USER_DENIED", e[e.INVALID_PARAMS = 5] = "INVALID_PARAMS", e[e.CUSTOM = 6] = "CUSTOM", e[e.LOADING_ERROR = 7] = "LOADING_ERROR", e[e.CONNECT_WINDOW_CLOSED = 7] = "CONNECT_WINDOW_CLOSED", e[e.CONNECT_WINDOW_NOT_OPENED = 8] = "CONNECT_WINDOW_NOT_OPENED", e[e.CONNECT_DOMAIN_NOT_ALLOWED = 9] = "CONNECT_DOMAIN_NOT_ALLOWED", e[e.CONNECT_UNKNOWN_SDK_MESSAGE = 10] = "CONNECT_UNKNOWN_SDK_MESSAGE", e[e.CONNECT_CLIENT_SDK_ERROR = 11] = "CONNECT_CLIENT_SDK_ERROR", e[e.VALIDATE_ERROR = 12] = "VALIDATE_ERROR", e[e.CAPTCHA_ERROR = 14] = "CAPTCHA_ERROR", e[e.OLD_MISSING_PARAM = 100] = "OLD_MISSING_PARAM";
}(L || (exports.SDKErrorCodes = L = {}));
var U = function U(e, t) {
    return 'Wrong "' + e + '" param. ' + (t || "");
  },
  H = function H() {
    return "Connect window was closed.";
  },
  G = function G() {
    return "Connect window was not opened.";
  },
  W = function W(e) {
    return 'URL domain "' + e + '" is not allowed.';
  },
  F = function F(e) {
    return "This SDK message is unknown: " + e;
  },
  j = function j(e) {
    return e.error + ";" + e.errorCode;
  },
  z = function z() {
    return "Loading timeout";
  },
  B = function B(e) {
    return "The " + e + " parameter must be a number";
  },
  Y = function Y(e) {
    return "The " + e + " parameter must be a string";
  },
  q = function q(e) {
    return "The " + e + " is required parameter";
  },
  Z = function Z(e) {
    return "The " + e + " parameter must be a number or a string";
  },
  J = function J(e) {
    return "The " + e + " parameter must be а function";
  },
  _Q = function Q(e, t) {
    return (_Q = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(e, t);
  };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function X(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function n() {
    this.constructor = e;
  }
  _Q(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var $,
  ee,
  te,
  ne,
  _re = function re() {
    return (_re = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
  };
exports.MiniAppEvents = ee;
function oe(e) {
  return e = e || Object.create(null), {
    on: function on(t, n) {
      (e[t] || (e[t] = [])).push(n);
    },
    off: function off(t, n) {
      e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
    },
    emit: function emit(t, n) {
      (e[t] || []).slice().map(function (e) {
        e(n);
      }), (e["*"] || []).slice().map(function (e) {
        e(t, n);
      });
    }
  };
}
function ie(e) {
  return "number" == typeof e;
}
function ae(e) {
  return "string" == typeof e;
}
function se(e) {
  return void 0 !== e && "" !== e && null !== e;
}
function ce(e) {
  return "function" == typeof e;
}
function ue(e, t, n, r) {
  return {
    type: e,
    code: t,
    message: n,
    params: r
  };
}
function le(e, t) {
  return {
    type: L[L.VALIDATE_ERROR],
    code: L.VALIDATE_ERROR,
    message: e,
    params: t
  };
}
function pe(e) {
  return e.message ? {
    code: e.code,
    reason: e.message,
    data: e.params
  } : {
    code: e.code,
    data: e.params
  };
}
!function (e) {
  e.GET_CAPTCHA = "VKSDKGetCaptcha", e.APP_CLOSE = "VKWebAppClose", e.APP_READY = "VKSDKMiniAppReady", e.RESIZE = "VKSDKMiniAppResize", e.APP_INIT_CONFIG = "VKSDKMiniAppInitConfig", e.OPEN_APP = "VKWebAppOpenApp", e.OPEN_PAY_FORM = "VKWebAppOpenPayForm", e.ACTION_DONE = "VKWebAppActionDone", e.SET_TITLE = "VKWebAppSetTitle", e.AUTH_BY_EXCHANGE_TOKEN = "VKWebAppAuthByExchangeToken", e.FORCE_LOGOUT = "VKWebAppForceLogout";
}($ || ($ = {})), function (e) {
  e.OPEN = "open", e.HIDE = "hide", e.CLOSE = "close", e.SHOW = "show", e.MESSAGE = "message", e.CREATE_APP = "createapp";
}(ee || (exports.MiniAppEvents = ee = {})), function (e) {
  e.SUPERAPP_TOKEN = "VKSDKGeneralSuperAppToken", e.AUTH_NEEDED = "VKSDKGeneralAuthNeeded", e.OPEN_APP = "VKSDKGeneralOpenApp";
}(te || (te = {})), function (e) {
  e.SUPERAPP_TOKEN_CHANGE_V2 = "superAppTokenV2", e.SUPERAPP_TOKEN_CHANGE = "superAppToken";
}(ne || (ne = {}));
var de,
  he = function () {
    function e(e, t, n) {
      void 0 === e && (e = "Parameter validation error"), this.errorText = e, this.params = t, this.valid = n;
    }
    return e.prototype.isValid = function () {
      return Boolean(this.valid);
    }, e.prototype.error = function (e) {
      return this.isValid() ? null : e ? pe(le(this.errorText, this.params)) : le(this.errorText, this.params);
    }, e;
  }(),
  fe = function () {
    function e(e) {
      this.rules = e;
    }
    return e.prototype.validate = function (e) {
      for (var t in this.rules) if (this.rules.hasOwnProperty(t)) for (var n = 0; n < this.rules[t].length; n++) {
        var r = this.rules[t][n];
        if (!r.rule(e[t])) return new he(r.errorText, e, !1);
      }
      return new he("", e, !0);
    }, e;
  }(),
  me = (new fe({
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }), new fe({
    token: [{
      rule: ae,
      errorText: Y("token")
    }]
  })),
  ve = new fe({
    event: [{
      rule: ae,
      errorText: Y("event")
    }, {
      rule: se,
      errorText: q("event")
    }],
    handler: [{
      rule: se,
      errorText: q("handler")
    }]
  }),
  ge = new fe({
    app: [{
      rule: function rule(e) {
        return ie(e) || ae(e);
      },
      errorText: Z("app")
    }, {
      rule: se,
      errorText: q("app")
    }]
  }),
  _e = new fe({
    message: [{
      rule: se,
      errorText: q("message")
    }]
  }),
  Ae = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  ye = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  Te = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  Ee = new fe({
    appId: [{
      rule: ie,
      errorText: B("appId")
    }]
  }),
  Oe = {
    appId: 0,
    superAppToken: "",
    superAppTokenV2: "",
    loginDomain: "login.vk.com",
    oauthDomain: "oauth.vk.com",
    connectDomain: "id.vk.com",
    _debug: !1,
    _localhost: !1
  },
  Se = {},
  Ce = function () {
    function e() {}
    return e.init = function (e) {
      if (!e.appId) throw new Error("appId required");
      var t = Ee.validate({
        appId: e.appId
      });
      !t.isValid() && console.error(t.error()), Oe.appId = e.appId, Oe.superAppToken = e.superAppToken || "", Oe.superAppTokenV2 = e.superAppTokenV2 || "", Oe.loginDomain = e.loginDomain || "login.vk.com", Oe.oauthDomain = e.oauthDomain || "oauth.vk.com", Oe.connectDomain = e.connectDomain || "id.vk.com", Oe.appSettings = e.appSettings, Oe._debug = !!e._debug, Oe._localhost = !!e._localhost;
    }, e.get = function () {
      return Oe;
    }, e.setSuperAppToken = function (t, n) {
      void 0 === n && (n = {});
      var r = me.validate({
        token: t
      });
      !r.isValid() && console.error(r.error()), 2 === n.version ? (Oe.superAppTokenV2 = t, e.events.emit(ne.SUPERAPP_TOKEN_CHANGE_V2, t)) : (Oe.superAppToken = t, e.events.emit(ne.SUPERAPP_TOKEN_CHANGE, t));
    }, e.onRequestSuperAppToken = function (e) {
      var t = Ae.validate({
        handler: e
      });
      !t.isValid() && console.error(t.error()), Se.requestSuperAppToken = e;
    }, e._requestSuperAppToken = function (t, n) {
      var r;
      void 0 === n && (n = {}), Se.requestSuperAppToken && (r = Se.requestSuperAppToken(t, n)), r && r.then(function (t) {
        return e.setSuperAppToken(t, n);
      })["catch"](console.error);
    }, e.onAuth = function (e) {
      var t = ye.validate({
        handler: e
      });
      !t.isValid() && console.error(t.error()), Se.auth = e;
    }, e._auth = function (t) {
      var n;
      void 0 === t && (t = {}), Se.auth && (n = Se.auth()), n && n.then(function (n) {
        e.setSuperAppToken(n, t);
      })["catch"](console.error);
    }, e.onOpenApp = function (e) {
      Se.openApp = e;
    }, e._openApp = function (e) {
      Se.openApp && Se.openApp(e.app);
    }, e.onLogout = function (e) {
      var t = Te.validate({
        handler: e
      });
      !t.isValid() && console.error(t.error()), Se.logout = e;
    }, e._logout = function () {
      Se.logout && Se.logout();
    }, e.fetchDomain = function () {
      return Boolean(de) || (de = new Promise(function (e) {
        fetch("https://vk.ru/domain.txt").then(function (e) {
          return e.text();
        }).then(function (e) {
          return e.trim();
        }).then(function (e) {
          Oe.loginDomain = Oe.loginDomain.replace("vk.com", e), Oe.oauthDomain = Oe.oauthDomain.replace("vk.com", e), Oe.connectDomain = Oe.connectDomain.replace("vk.com", e);
        }).then(e)["catch"](function (t) {
          e(), console.warn(t);
        });
      })), de;
    }, e.events = oe(), e;
  }(),
  Pe = new fe({
    iframe: [{
      rule: se,
      errorText: q("iframe")
    }],
    origin: [{
      rule: ae,
      errorText: Y("origin")
    }, {
      rule: se,
      errorText: q("origin")
    }]
  }),
  we = new fe({
    event: [{
      rule: se,
      errorText: q("event")
    }]
  }),
  be = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }, {
      rule: ce,
      errorText: J("handler")
    }]
  }),
  De = new fe({
    handler: [{
      rule: se,
      errorText: q("handler")
    }],
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }),
  Ne = function Ne(e) {
    var t = this;
    this.handler = function () {
      return {};
    }, this.destroy = function () {
      delete t.config, window.removeEventListener("message", t.handleMessage);
    }, this.onMessage = function (e) {
      var n = be.validate({
        handler: e
      });
      !n.isValid() && console.error(n.error()), t.handler = e;
    }, this.sendMessage = function (e) {
      var n,
        r = De.validate(e);
      !r.isValid() && console.error(r.error()), null === (n = t.config.iframe.contentWindow) || void 0 === n || n.postMessage(_re({
        type: "vk-sak-sdk"
      }, e), t.config.origin);
    }, this.handleMessage = function (e) {
      var n = we.validate({
        event: e
      });
      !n.isValid() && console.error(n.error()), t.config.origin && e.origin === t.config.origin && e.source === t.config.iframe.contentWindow && e.data && "vk-sak-sdk" === e.data.type && t.handler(e.data);
    };
    var n = Pe.validate(e);
    !n.isValid() && console.error(n.error()), this.config = e, window.addEventListener("message", this.handleMessage);
  },
  ke = function () {
    function e() {
      var e = this;
      this.resolve = function (t) {
        if (Boolean(e.promise)) return e.finished = !0, e.active = !1, e.resolveHandler(t);
      }, this.reject = function (t) {
        if (Boolean(e.promise)) return e.finished = !0, e.active = !1, e.rejectHandler(t);
      };
    }
    return e.prototype.start = function () {
      var e = this;
      this.active = !0, this.finished = !1, this.promise = new Promise(function (t, n) {
        e.resolveHandler = t, e.rejectHandler = n;
      });
    }, e.prototype.get = function () {
      return this.promise;
    }, e;
  }(),
  Ie = ["extend_token", "login_with_user", "login_silent_user", "__sferum_invite_link", "registration_with_phone", "registration_with_email", "validate_phone", "bind_ok_account", "no_password_flow", "confirm_service_action", "login_with_eljour", "login_with_multi_user", "auth_validation_phone", "qr_auth", "multi_account_flow"];
exports.Config = Ce;
function Re(e) {
  return e && Ie.includes(e.name) ? btoa(JSON.stringify(e)) : "";
}
function Ke(e) {
  return e ? btoa(JSON.stringify(e)) : "";
}
function Me(e, t) {
  return void 0 === t && (t = "auth"), Ce.fetchDomain().then(function () {
    var n = Ce.get(),
      r = n.appId,
      o = n.connectDomain,
      i = n.appSettings,
      a = n._debug,
      s = n._localhost,
      c = _re({
        app_id: r,
        response_type: "silent_token",
        v: "1.58.5",
        debug: a ? 1 : null,
        localhost: s ? 1 : null
      }, e);
    i && D(i) && (c.app_settings = N(i));
    var u = w(c);
    return Promise.resolve("https://" + o + "/" + t + "?" + u);
  });
}
var xe,
  Le = [r, o, i, a, s, c, u, l];
!function (e) {
  e.Default = "default", e.NamePhone = "name_phone", e.PhoneName = "phone_name";
}(xe || (xe = {}));
var Ve,
  Ue = [xe.Default, xe.NamePhone, xe.PhoneName];
!function (e) {
  e.Primary = "primary", e.Flat = "flat";
}(Ve || (Ve = {}));
var He = [Ve.Primary, Ve.Flat];
var Ge;
exports.AuthCaptchaEventsSDK = Ge;
!function (e) {
  e.CAPTCHA_SUCCESS = "VKSDKAuthCaptchaSuccess", e.CAPTCHA_FAIL = "VKSDKAuthCaptchaFail";
}(Ge || (exports.AuthCaptchaEventsSDK = Ge = {}));
var We,
  Fe = function Fe(e, t, n) {
    var r = this;
    this.events = oe(), this.showReadyPromiseTask = new ke(), this.init = function () {
      Ce.fetchDomain().then(function () {
        Me(_re(_re({
          origin: location.protocol + "//" + location.host,
          uuid: r.uuid
        }, r.captchaData), {
          scheme: r.scheme
        }), "auth_captcha").then(r.handleCaptcha);
      });
    }, this.createFrame = function () {
      return r.iframe = k("", {
        cssText: "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      min-height: 100vh;\n      border: none;\n      z-index: 99999;\n     "
      }), r;
    }, this.handleError = function (e) {
      var t = pe(ue(L[L.CUSTOM], L.CUSTOM, "", e));
      r.events.emit(M.ERROR, t);
    }, this.onMessage = function (e) {
      switch (e.handler) {
        case M.ERROR:
          r.handleError(e.params);
          break;
        case Ge.CAPTCHA_SUCCESS:
          r.showReadyPromiseTask.resolve(e.params), r.destroy();
          break;
        default:
          r.showReadyPromiseTask.reject(), r.destroy();
      }
    }, this.handleCaptcha = function (e) {
      r.iframe.src = e, document.body.appendChild(r.iframe), r.bridge = new Ne({
        iframe: r.iframe,
        origin: "https://" + Ce.get().connectDomain
      }), r.bridge.onMessage(r.onMessage);
    }, this.destroy = function () {
      r.iframe && document.body.removeChild(r.iframe), r.bridge && r.bridge.destroy();
    }, this.show = function () {
      return r.iframe.style.display = "block", new Promise(function (e) {
        r.showReadyPromiseTask.start(), r.showReadyPromiseTask.get().then(e);
      });
    }, this.uuid = e, this.captchaData = t, this.scheme = n || "bright_light", this.createFrame().init();
  },
  je = function () {
    function e(t) {
      var n = this;
      this.readyPromiseResolve = null, this.readyPromise = null, this.child = null, this.initialTitle = window.document.title, this.open = function (e, t) {
        return Ce.fetchDomain().then(function () {
          return n.loading ? (n.getMiniAppUrl(e, t).then(function (e) {
            n.iframe.src = e;
          }), n.loading = new Promise(function (e) {
            n.iframe.onload = function () {
              n.iframe.onload = null, e();
            };
          }), n.readyPromise = new Promise(function (e) {
            return n.readyPromiseResolve = e;
          }), n.eventOpenSettings(), n.readyPromise) : n.preload(e, t)["catch"](console.error);
        });
      }, this.eventOpenSettings = function () {
        n.iframe.style.display = "block", n.params.stackMode || V.freezeBodyOverflow(), n.loading.then(n.handleResize)["catch"](console.error), n.events.emit(ee.OPEN);
      }, this.hide = function () {
        n.iframe.style.display = "none", n.params.stackMode || V.restoreBodyOverflow(), n.events.emit(ee.HIDE);
      }, this.close = function (e) {
        window.document.title !== n.initialTitle && (window.document.title = n.initialTitle), n.params.stackMode || V.restoreBodyOverflow(), n.iframe && n.iframe.remove(), n.bridge && n.bridge.destroy(), delete n.iframe, delete n.bridge, Ce.events.off(ne.SUPERAPP_TOKEN_CHANGE, n.onSuperAppToken), window.removeEventListener("resize", n.handleResize), n.events.emit(ee.CLOSE, e);
      }, this.show = function () {
        if (!n.loading) throw new Error('App is not loaded, use "open" or "preload" methods');
        n.iframe.style.display = "block", n.params.stackMode || V.freezeBodyOverflow(), n.events.emit(ee.SHOW);
      }, this.preload = function (e, t) {
        return Ce.fetchDomain().then(function () {
          var r = document.createElement("iframe"),
            o = window.innerHeight,
            i = isFinite(n.params.zIndex) ? n.params.zIndex : 999999;
          return n.getMiniAppUrl(e, t).then(function (e) {
            r.src = e;
          }), r.setAttribute("allow", "geolocation"), r.style.cssText = "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: " + o + "px;\n      min-height: " + o + "px;\n      border: none;\n      z-index: " + i + ";\n    ", n.iframe = r, document.body.appendChild(n.iframe), n.bridge = new Ne({
            iframe: n.iframe,
            origin: "https://" + Ce.get().connectDomain
          }), n.loading = new Promise(function (e) {
            r.onload = function () {
              r.onload = null, e();
            };
          }), n.readyPromise = new Promise(function (e) {
            return n.readyPromiseResolve = e;
          }), n.bridge.onMessage(n.handleMessage), Ce.events.on(ne.SUPERAPP_TOKEN_CHANGE, n.onSuperAppToken), window.addEventListener("resize", n.handleResize), n.eventOpenSettings(), n.loading;
        });
      }, this.sendMessage = function (e) {
        var t = _e.validate({
          message: e
        });
        !t.isValid() && console.error(t.error()), n.bridge.sendMessage(e);
      }, this.onSuperAppToken = function (e) {
        n.bridge.sendMessage({
          handler: te.SUPERAPP_TOKEN,
          params: {
            result: e
          }
        });
      }, this.handleError = function (e) {
        var t = pe(ue(L[L.CUSTOM], L.CUSTOM, "", e));
        n.events.emit(M.ERROR, t);
      }, this.handleMessage = function (e) {
        switch (e.handler) {
          case M.GET_CAPTCHA:
            var t = e.params.uuid,
              r = new Fe(t, {
                captcha_sid: e.params.captcha_sid,
                captcha_img: e.params.captcha_img
              });
            r.show().then(function (e) {
              n.bridge.sendMessage({
                handler: M.CAPTCHA_SUCCESS,
                params: _re({
                  uuid: t
                }, e)
              });
            })["catch"](function () {
              n.bridge.sendMessage({
                handler: M.CAPTCHA_FAILED,
                params: {
                  uuid: t
                }
              }), r.destroy();
            });
            break;
          case $.APP_CLOSE:
            n.hide();
            break;
          case M.ERROR:
            n.handleError(e.params);
            break;
          case $.APP_READY:
            n.resolveReadyPromise(), n.handleUpdateConfig();
            break;
          case $.OPEN_APP:
            n.openMiniapp(e.params);
            break;
          case $.OPEN_PAY_FORM:
            n.openPayForm(e.params);
            break;
          case $.SET_TITLE:
            n.setTitle(e.params);
            break;
          case $.AUTH_BY_EXCHANGE_TOKEN:
            n.onAuthByExchangeToken();
            break;
          case $.FORCE_LOGOUT:
            n.onForceLogout();
            break;
          case te.SUPERAPP_TOKEN:
            Ce._requestSuperAppToken(e.params);
            break;
          case te.AUTH_NEEDED:
            Ce._auth();
            break;
          default:
            n.events.emit(ee.MESSAGE, e);
        }
      }, this.handleResize = function () {
        if (n.iframe) {
          var e = innerWidth,
            t = innerHeight;
          n.iframe.style.height = t + "px", n.iframe.style.minHeight = t + "px", n.bridge.sendMessage({
            handler: $.RESIZE,
            params: {
              viewport_width: e,
              viewport_height: t
            }
          });
        }
      }, this.handleUpdateConfig = function () {
        n.bridge.sendMessage({
          handler: $.APP_INIT_CONFIG,
          params: {
            fullMode: n.params.fullMode,
            hideMenu: n.params.hideMenu,
            scheme: n.params.scheme
          }
        });
      }, this.update = function (e) {
        e && (n.params = I(n.params, e || {}), n.sendUpdateParamsMessage());
      }, this.getMiniAppUrl = function (e, t) {
        return Ce.fetchDomain().then(function () {
          var r = Ce.get(),
            o = r.connectDomain,
            i = r.appId,
            a = r.superAppToken,
            s = r._debug,
            c = r._localhost;
          return "https://" + o + "/mini_app?" + w({
            app: n.params.app,
            host_app_id: i,
            superapp_token: a,
            app_query: e ? JSON.stringify(e) : "",
            app_hash: t || "",
            debug: s ? 1 : null,
            localhost: c ? 1 : null
          });
        });
      }, this.resolveReadyPromise = function () {
        n.readyPromise && n.readyPromiseResolve && (n.readyPromiseResolve(), n.readyPromise = null, n.readyPromiseResolve = null);
      }, this.openMiniapp = function (t) {
        n.child = new e({
          app: t.app_id,
          stackMode: n.params.stackMode
        }), n.events.emit(ee.CREATE_APP, {
          app: n.child,
          location: t.location
        });
      }, this.openPayForm = function (t) {
        var r = _re({}, t.params);
        r.data && (r.data = JSON.stringify(r.data));
        var o = _re(_re({}, r), {
            app_id: t.app_id,
            action: t.action
          }),
          i = new e({
            app: 6217559,
            stackMode: n.params.stackMode
          });
        i.open(o).then(function () {
          return n.hide();
        })["catch"](console.error), i.events.on(ee.MESSAGE, function (e) {
          n.handleVKPayFormMessage(e), i.close(), n.show();
        }), i.events.on(ee.HIDE, function () {
          i.close(), n.close();
        });
      }, this.setTitle = function (e) {
        window.document.title = e.title;
      }, this.onAuthByExchangeToken = function () {
        n.close({
          closedByExchangeToken: !0
        });
      }, this.onForceLogout = function () {
        n.close({
          closedByForceLogout: !0
        });
      }, this.handleVKPayFormMessage = function (e) {
        e.handler === $.ACTION_DONE && n.sendMessage(e), e.handler === M.ERROR && n.handleError(e.params);
      };
      var r = ge.validate(t);
      !r.isValid() && console.error(r.error()), this.params = _re(_re({}, t), {
        app: "number" == typeof t.app ? "app" + t.app : t.app,
        scheme: "string" == typeof t.scheme ? t.scheme : "bright_light"
      }), this.events = oe();
    }
    return e.prototype.on = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.on(e, t);
    }, e.prototype.off = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.off(e, t);
    }, e.prototype.sendUpdateParamsMessage = function () {
      this.bridge && this.bridge.sendMessage({
        params: this.params,
        handler: M.UPDATE_PARAMS
      });
    }, e;
  }(),
  ze = function () {
    function e() {
      this.stack = [];
    }
    return e.prototype.removeMiniApp = function (e) {
      var t = e.app,
        n = this.stack.lastIndexOf(t);
      if (n > -1 && n === this.stack.length - 1) if (this.stack.splice(n, 1), this.stack.length) {
        this.stack[this.stack.length - 1].show();
        var r = this.stack[this.stack.length - 2];
        setTimeout(function () {
          return null == r ? void 0 : r.hide();
        }, 0);
      } else V.restoreBodyOverflow();
    }, e.prototype.makeHandleMiniAppClose = function (e) {
      var t = this,
        n = e.app;
      return function () {
        t.removeMiniApp({
          app: n
        });
      };
    }, e.prototype.makeHandleMiniAppHide = function (e) {
      var t = this,
        n = e.app;
      return function () {
        var e = t.stack.lastIndexOf(n);
        e > -1 && e === t.stack.length - 1 && setTimeout(function () {
          return n.close();
        }, 0);
      };
    }, e.prototype.handleMiniAppCreate = function (e) {
      var t = e.app,
        n = e.query,
        r = e.hash;
      this.stack.push(t), t.open(n, r)["catch"](console.error), t.events.on(ee.CREATE_APP, this.handleMiniAppCreate.bind(this)), t.events.on(ee.HIDE, this.makeHandleMiniAppHide({
        app: t
      })), t.events.on(ee.CLOSE, this.makeHandleMiniAppClose({
        app: t
      })), V.freezeBodyOverflow();
      var o = this.stack[this.stack.length - 2];
      return setTimeout(function () {
        null == o || o.hide();
      }, 0), t;
    }, Object.defineProperty(e.prototype, "length", {
      get: function get() {
        return this.stack.length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.open = function (e) {
      var t = ge.validate(e);
      !t.isValid() && console.error(t.error());
      var n = e.app,
        r = e.query,
        o = e.hash,
        i = new je({
          app: n,
          stackMode: !0
        });
      return this.handleMiniAppCreate({
        app: i,
        query: r,
        hash: o
      }), i;
    }, e.prototype.close = function () {
      var e = this.stack;
      this.stack.splice(0), e.reverse().forEach(function (e) {
        return e.close();
      }), V.restoreBodyOverflow();
    }, e;
  }(),
  Be = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Ye = function Ye() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21, t = "", n = e; n--;) t += Be[64 * Math.random() | 0];
    return t;
  };
exports.MiniAppService = ze;
exports.MiniApp = je;
exports.GeoserviceEvents = We;
!function (e) {
  e.STATIC_MAP = "VKSDKRequestToGeoservice:staticmap/png/", e.SEARCH = "VKSDKRequestToGeoservice:search", e.OVERALL = "VKSDKRequestToGeoservice:overall", e.DIRECTIONS = "VKSDKRequestToGeoservice:directions", e.ISO = "VKSDKRequestToGeoservice:iso";
}(We || (exports.GeoserviceEvents = We = {}));
var qe,
  Ze,
  Je,
  Qe,
  Xe,
  $e,
  et = function () {
    function e(e) {
      var t = this;
      this.apiKey = e.apiKey, this.requestMap = {};
      var n = document.createElement("iframe");
      this.iframe = n, Ce.fetchDomain().then(function () {
        var e = Ce.get().appId;
        t.getGeoserviceProxyUrl({
          app_id: e
        }).then(function (e) {
          n.src = e;
        }), n.style.cssText = "\n      display: none;\n    ", document.body.appendChild(t.iframe), t.bridge = new Ne({
          iframe: t.iframe,
          origin: "https://" + Ce.get().connectDomain
        }), t.bridge.onMessage(function (e) {
          var n = e.params,
            r = n.requestID,
            o = n.response;
          t.requestMap[r].resolve(o), delete t.requestMap[r];
        });
      });
    }
    return e.prototype.setApiKey = function (e) {
      this.apiKey = e;
    }, e.prototype.getGeoserviceProxyUrl = function (e) {
      return Ce.fetchDomain().then(function () {
        var t = Ce.get(),
          n = t.connectDomain,
          r = t._debug,
          o = t._localhost;
        return "https://" + n + "/geoservice?" + w(_re(_re({}, e || {}), {
          origin: location.protocol + "//" + location.host,
          debug: r ? 1 : null,
          localhost: o ? 1 : null
        }));
      });
    }, e.prototype.prepareAnswer = function (e, t, n) {
      var r = this,
        o = Ye();
      return this.bridge.sendMessage({
        handler: "VKSDKRequestToGeoservice:" + e,
        params: _re(_re({}, t), {
          api_key: this.apiKey,
          wrapRequestInJSON: n,
          requestID: o
        })
      }), new Promise(function (e, t) {
        r.requestMap[o] = {
          resolve: e,
          reject: t
        };
      });
    }, e.prototype.getStaticMap = function (e) {
      return this.prepareAnswer("staticmap/png/", e);
    }, e.prototype.encodeCoords = function (e) {
      return this.prepareAnswer("search", e);
    }, e.prototype.decodeCoords = function (e) {
      return this.prepareAnswer("overall", e);
    }, e.prototype.getDirections = function (e) {
      return this.prepareAnswer("directions", e, !0);
    }, e.prototype.getISO = function (e) {
      return this.prepareAnswer("iso", e, !0);
    }, e;
  }();
exports.GeoService = et;
exports.ButtonOneTapAuthEventsSDK = Xe;
exports.FloatingOneTapAuthEventsSDK = Qe;
exports.OneTapAuthEventsSDK = Je;
exports.DataPolicyEventsSDK = qe;
!function (e) {
  e.SHOW_DATA_POLICY = "VKSDKOneTapAuthConnectDataPolicy", e.HIDE_DATA_POLICY = "VKSDKOneTapAuthDataPolicyClose", e.DATA_POLICY_RESULT = "VKSDKOneTapAuthDataPolicyResult", e.SHOW_CAPTCHA = "VKSDKOneTapAuthDataPolicyShowCaptcha";
}(qe || (exports.DataPolicyEventsSDK = qe = {})), function (e) {
  e.SHOW_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsShow", e.HIDE_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsHide", e.ACCEPT_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsAccept", e.DECLINE_POLICY_AGREEMENTS = "VKSDKOneTapAuthPolicyAgreementsDecline", e.POLICY_AGREEMENTS_ERROR = "VKSDKOneTapAuthPolicyAgreementsError", e.SHOW_DATA_POLICY = "VKSDKOneTapAuthPolicyAgreementsShowDataPolicy", e.GET_CAPTCHA = "VKSDKGetCaptcha", e.CAPTCHA_SUCCESS = "VKSDKGetCaptchaSuccess", e.CAPTCHA_FAIL = "VKSDKGetCaptchaFail";
}(Ze || (Ze = {})), function (e) {
  e.PHONE_VALIDATION_NEEDED = "VKSDKOneTapAuthPhoneValidationNeeded", e.FULL_AUTH_NEEDED = "VKSDKOneTapAuthFullAuthNeeded", e.AUTH_DATA_LOADED = "VKSDKOneTapAuthDataLoaded", e.NOT_AUTHORIZED = "VKSDKOneTapAuthNotAuthorized", e.LOGIN_SUCCESS = "VKSDKOneTapAuthLoginSuccess", e.RESIZE_FRAME = "VKSDKOneTapResizeFrame", e.SHOW_CAPTCHA = "VKSDKOneTapShowCaptcha", e.VALIDATE_CAPTCHA = "VKSDKOneTapValidateCaptcha", e.UPDATE_PARAMS = "VKSDKUpdateParams";
}(Je || (exports.OneTapAuthEventsSDK = Je = {})), function (e) {
  e.CLOSE_AUTH = "VKSDKOneTapAuthClose", e.ADAPTIVITY_CHANGE = "VKSDKFloatingOneTapAdaptivityChange", e.ADAPTIVITY_CHANGED = "VKSDKFloatingOneTapAdaptivityChanged", e.UPDATE_PARAMS = "VKSDKUpdateParams";
}(Qe || (exports.FloatingOneTapAuthEventsSDK = Qe = {})), function (e) {
  e.SHOW_LOGIN = "VKSDKButtonOneTapAuthShowLogin", e.SHOW_LOGIN_OPTIONS = "VKSDKButtonOneTapAuthShowLoginOptions", e.SHOW_AGREEMENTS_DIALOG = "VKSDKButtonOneTapAuthShowAgreementsDialog", e.START_AUTHORIZE = "VKSDKButtonOneTapAuthStartAuthorize", e.UPDATE_PARAMS = "VKSDKUpdateParams";
}(Xe || (exports.ButtonOneTapAuthEventsSDK = Xe = {})), function (e) {
  e.WRONG_TOKEN = "VKSDKBindAccountErrorWrongToken", e.ALREADY_BIND = "VKSDKBindAccountErrorAlreadyBind";
}($e || ($e = {}));
var tt = new fe({
    url: [{
      rule: ae,
      errorText: Y("url")
    }, {
      rule: se,
      errorText: q("url")
    }]
  }),
  nt = new fe({
    uuid: [{
      rule: ae,
      errorText: Y("uuid")
    }, {
      rule: se,
      errorText: q("uuid")
    }]
  }),
  rt = (new fe({
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }), new fe({
    callback: [{
      rule: se,
      errorText: q("callback")
    }]
  })),
  ot = function () {
    function e() {}
    var n;
    return e.on = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.on(e, t);
    }, e.off = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.off(e, t);
    }, n = e, e.flags = null, e.events = oe(), e.handleError = function (e) {
      var t = pe(ue(L[L.CUSTOM], L.CUSTOM, "", e));
      n.events.emit(M.ERROR, t);
    }, e.silentAuth = function () {
      return Ce.fetchDomain().then(function () {
        var e = Ce.get(),
          t = e.loginDomain,
          n = e.appId,
          r = new ke(),
          o = Ye(),
          i = "https://" + t + "/?act=connect&app_id=" + n + "&response_type=silent_token&uuid=" + o + "&v=1.58.5",
          a = new XMLHttpRequest();
        return a.open("GET", i, !0), a.responseType = "json", a.withCredentials = !0, r.start(), a.onload = function () {
          var e,
            t = a.response,
            n = a.status >= 200 && a.status < 300;
          if (t && (null === (e = t.error) || void 0 === e ? void 0 : e.error_code) === L.CAPTCHA_ERROR) {
            var s = t.error,
              c = s.captcha_sid,
              u = s.captcha_img;
            new Fe(o, {
              captcha_sid: c,
              captcha_img: u
            }).show().then(function (e) {
              var t = i + "&captcha_key=" + e.captcha_key + "&captcha_sid=" + e.captcha_sid;
              a.open("GET", t, !0), a.send();
            });
          } else t && n ? r.resolve({
            provider: "vk",
            payload: a.response
          }) : r.reject();
        }, a.onerror = function () {
          r.reject();
        }, a.send(), r.get();
      });
    }, e.oneTapAuth = function (t, n) {
      if (console.warn("Connect.oneTapAuth method is deprecated. Use Connect.floatingOneTapAuth and Connect.buttonOneTapAuth methods."), !["floating", "button"].includes(t)) return null;
      switch (t) {
        case "button":
          return e.buttonOneTapAuth(n);
        case "floating":
          return e.floatingOneTapAuth(n);
        default:
          return null;
      }
    }, e.floatingOneTapAuth = function (t) {
      var r = rt.validate({
        callback: t.callback
      });
      !r.isValid() && console.error(r.error());
      var o = function () {
          var e,
            t = window.innerWidth,
            n = t <= 768;
          return {
            destroy: function destroy() {
              return window.removeEventListener("resize", e);
            },
            isAdaptive: function isAdaptive() {
              return n;
            },
            observe: function observe(r) {
              e = function e() {
                var e = window.innerWidth;
                t > 768 && e <= 768 ? r(n = !0) : t <= 768 && e > 768 && r(n = !1), t = e;
              }, window.addEventListener("resize", e);
            }
          };
        }(),
        i = function (e, t) {
          var n,
            r,
            o,
            i = {},
            a = e ? "314px" : "334px",
            s = e ? "\n      display: none;\n      position: fixed;\n      bottom: 0;\n      right: 50%;\n      transform: translate(50%, 0);\n      max-width: 468px;\n      width: 100%;\n      height: " + a + ";\n    " : "\n        display: none;\n        position: fixed;\n        top: 0;\n        right: 0;\n        max-width: 400px;\n        width: 100%;\n        height: " + a + ";\n      ";
          return (null === (n = null == t ? void 0 : t.styles) || void 0 === n ? void 0 : n.zIndex) && isFinite(null === (r = null == t ? void 0 : t.styles) || void 0 === r ? void 0 : r.zIndex) && (s += "z-index: " + (null === (o = null == t ? void 0 : t.styles) || void 0 === o ? void 0 : o.zIndex) + ";"), t && (i.skip_success = R(t.skipSuccess, 0), void 0 !== t.scheme && ["bright_light", "space_gray"].includes(t.scheme) && (i.scheme = t.scheme)), {
            pageUrl: "floating_one_tap_auth",
            pageUrlParams: _re({
              adaptive: e ? 1 : 0
            }, i),
            frameStyles: s,
            scheme: (null == t ? void 0 : t.scheme) || "bright_light"
          };
        }(o.isAdaptive(), t.options);
      if (!i) throw new Error("options were not set");
      var a,
        s,
        c,
        u = Ye(),
        l = _re({
          origin: location.protocol + "//" + location.host,
          uuid: u
        }, i.pageUrlParams),
        p = i.pageUrl,
        d = new ke(),
        h = function h() {
          s && s.sendMessage({
            handler: Je.RESIZE_FRAME,
            params: {
              uuid: u
            }
          });
        },
        f = function f() {
          a && (a.remove(), a = null), window.removeEventListener("resize", h), o && o.destroy(), s && s.destroy();
        };
      c = new Promise(function (e) {
        d.start(), d.get().then(function (t) {
          e(t);
        });
      });
      var m = function m(r) {
        if (r.params.uuid === u) switch (r.handler) {
          case M.ERROR:
            n.handleError(r.params);
            break;
          case Je.NOT_AUTHORIZED:
            t.callback({
              type: r.handler,
              payload: {
                uuid: u,
                error: "not_authorized"
              }
            }), f(), d.resolve(r.handler);
            break;
          case Je.RESIZE_FRAME:
            a.style.height = r.params.height + "px";
            break;
          case Qe.CLOSE_AUTH:
            t.callback({
              type: r.handler,
              payload: {
                uuid: u
              }
            }), f();
            break;
          case Qe.ADAPTIVITY_CHANGED:
            a.style.display = "block";
            break;
          case Je.AUTH_DATA_LOADED:
            a.style.display = "block", d.resolve(r.handler);
          default:
            e.handleOneTapEvents(r, s, t);
        }
      };
      return a = k("", {
        cssText: null == i ? void 0 : i.frameStyles
      }), document.body.appendChild(a), Ce.fetchDomain().then(function () {
        return Me(l, p).then(function (e) {
          a.src = e, (s = new Ne({
            iframe: a,
            origin: "https://" + Ce.get().connectDomain
          })).onMessage(m), o.observe(function (e) {
            s.sendMessage({
              handler: Qe.ADAPTIVITY_CHANGE,
              params: {
                uuid: u,
                is_adaptive: e
              }
            }), e ? (a.style.maxWidth = "468px", a.style.top = "auto", a.style.bottom = "0", a.style.right = "50%", a.style.transform = "translate(50%, 0)") : (a.style.maxWidth = "400px", a.style.top = "0", a.style.bottom = "auto", a.style.right = "0", a.style.transform = "none"), a.style.display = "none";
          }), window.addEventListener("resize", h);
        });
      }), {
        getFrame: function getFrame() {
          return a;
        },
        destroy: f,
        authReadyPromise: c,
        update: function update(e) {
          i = I(i || {}, e), s && i && s.sendMessage({
            handler: Qe.UPDATE_PARAMS,
            params: i
          });
        }
      };
    }, e.buttonOneTapAuth = function (t) {
      var n = rt.validate({
        callback: t.callback
      });
      !n.isValid() && console.error(n.error());
      var o = function (e) {
        var t,
          n,
          o,
          i,
          a,
          s,
          c = {},
          u = 44,
          l = 56;
        return e && (c.display = e.displayMode && Ue.includes(e.displayMode) ? e.displayMode : xe.Default, c.button_skin = e.buttonSkin && He.includes(e.buttonSkin) ? e.buttonSkin : Ve.Primary, c.show_agreements = R(e.showAgreements, 0), c.show_alternative_login = R(e.showAlternativeLogin, 0), void 0 !== e.scheme && ["bright_light", "space_gray"].includes(e.scheme) && (c.scheme = e.scheme), void 0 !== (null === (t = e.buttonStyles) || void 0 === t ? void 0 : t.height) && (u = Number(null === (n = e.buttonStyles) || void 0 === n ? void 0 : n.height), l = Number(null === (o = e.buttonStyles) || void 0 === o ? void 0 : o.height) + 12, c.style_height = null === (i = e.buttonStyles) || void 0 === i ? void 0 : i.height), void 0 !== (null === (a = e.buttonStyles) || void 0 === a ? void 0 : a.borderRadius) && (c.style_border_radius = null === (s = e.buttonStyles) || void 0 === s ? void 0 : s.borderRadius), void 0 !== e.langId && (c.lang_id = Le.includes(e.langId) ? e.langId : r), u += c.show_alternative_login ? l : 0, u += c.show_agreements ? 80 : 0), {
          pageUrl: "button_one_tap_auth",
          pageUrlParams: c,
          frameStyles: "\n        height: " + u + "px;\n      ",
          scheme: (null == e ? void 0 : e.scheme) || "bright_light"
        };
      }(t.options);
      if (!o) throw new Error("options were not set");
      var i,
        a,
        s,
        c = Ye(),
        u = _re({
          origin: location.protocol + "//" + location.host,
          uuid: c
        }, o.pageUrlParams),
        l = o.pageUrl,
        p = new ke();
      s = new Promise(function (e) {
        p.start(), p.get().then(function (t) {
          e(t);
        });
      });
      var d = function d() {
          a && a.sendMessage({
            handler: Je.RESIZE_FRAME,
            params: {
              uuid: c
            }
          });
        },
        h = function h(n) {
          if (n.params.uuid === c) switch (n.handler) {
            case Je.RESIZE_FRAME:
              i.style.height = n.params.height + "px";
              break;
            case Je.NOT_AUTHORIZED:
              p.resolve(n.handler);
              break;
            case Xe.SHOW_LOGIN:
            case Xe.SHOW_LOGIN_OPTIONS:
              t.callback({
                type: n.handler,
                payload: {
                  uuid: c
                }
              });
              break;
            case Xe.SHOW_AGREEMENTS_DIALOG:
              e.userPolicyAgreements(c, null == o ? void 0 : o.scheme).show().then(function (e) {
                e && e.accepted && a.sendMessage({
                  handler: Xe.START_AUTHORIZE,
                  params: {
                    uuid: c
                  }
                });
              })["catch"](function () {
                a.sendMessage({
                  handler: Ze.DECLINE_POLICY_AGREEMENTS,
                  params: {
                    uuid: c
                  }
                });
              });
              break;
            case Je.AUTH_DATA_LOADED:
              p.resolve(n.handler);
            default:
              e.handleOneTapEvents(n, a, t);
          }
        };
      i = k("", {
        cssText: null == o ? void 0 : o.frameStyles
      });
      var f = t.container;
      return f && f.appendChild(i), Ce.fetchDomain().then(function () {
        return Me(u, l).then(function (e) {
          i.src = e, (a = new Ne({
            iframe: i,
            origin: "https://" + Ce.get().connectDomain
          })).onMessage(h), window.addEventListener("resize", d);
        });
      }), {
        getFrame: function getFrame() {
          return i;
        },
        destroy: function destroy() {
          i && (i.remove(), i = null), window.removeEventListener("resize", d), a && a.destroy();
        },
        authReadyPromise: s,
        update: function update(e) {
          o = I(o || {}, e), a && o && a.sendMessage({
            handler: Xe.UPDATE_PARAMS,
            params: o
          });
        }
      };
    }, e.handleOneTapEvents = function (t, r, o) {
      var i,
        a,
        s = t.params.uuid;
      switch (t.handler) {
        case M.ERROR:
          n.handleError(t.params);
          break;
        case Je.AUTH_DATA_LOADED:
          r.sendMessage({
            handler: Je.RESIZE_FRAME,
            params: {
              uuid: s
            }
          });
          break;
        case Je.LOGIN_SUCCESS:
          o.callback({
            type: t.handler,
            provider: "vk",
            payload: t.params
          });
          break;
        case Je.SHOW_CAPTCHA:
          var c = new Fe(s, {
            captcha_sid: t.params.captcha_sid,
            captcha_img: t.params.captcha_img
          }, null === (i = o.options) || void 0 === i ? void 0 : i.scheme);
          c.show().then(function (e) {
            r.sendMessage({
              handler: Ge.CAPTCHA_SUCCESS,
              params: _re({
                uuid: s
              }, e)
            });
          })["catch"](function () {
            r.sendMessage({
              handler: Ge.CAPTCHA_FAIL,
              params: {
                uuid: s
              }
            }), c.destroy();
          });
          break;
        case qe.SHOW_DATA_POLICY:
          e.userDataPolicy(s, null === (a = o.options) || void 0 === a ? void 0 : a.scheme).show().then(function () {
            o.callback({
              type: qe.DATA_POLICY_RESULT,
              payload: {
                uuid: s,
                policyAccepted: !0
              }
            });
          })["catch"](function () {
            o.callback({
              type: qe.DATA_POLICY_RESULT,
              payload: {
                uuid: s,
                policyAccepted: !1
              }
            });
          });
          break;
        case Je.FULL_AUTH_NEEDED:
        case Je.PHONE_VALIDATION_NEEDED:
          o.callback({
            type: t.handler,
            payload: {
              uuid: s
            }
          });
      }
    }, e.userDataPolicy = function (e, t) {
      var r,
        o = nt.validate({
          uuid: e
        });
      !o.isValid() && console.error(o.error());
      var i,
        a = window.innerHeight,
        s = function s() {
          r && (r.style.display = "none");
        },
        c = new ke(),
        u = function u() {
          r && r.remove(), i && i.destroy();
        };
      r = k("", {
        properties: {
          height: a + "px"
        },
        cssText: "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      min-height: 100vh;\n      border: none;\n      z-index: 99999;\n    "
      }), document.body.appendChild(r);
      var l = function l(o) {
        switch (o.handler) {
          case M.ERROR:
            n.handleError(o.params);
            break;
          case qe.HIDE_DATA_POLICY:
            s(), c.resolve(void 0), u();
            break;
          case qe.SHOW_CAPTCHA:
            var a = new Fe(e, {
              captcha_sid: o.params.captcha_sid,
              captcha_img: o.params.captcha_img
            }, t);
            a.show().then(function (t) {
              i.sendMessage({
                handler: Ge.CAPTCHA_SUCCESS,
                params: _re({
                  uuid: e
                }, t)
              }), r.style.display = "block";
            })["catch"](function () {
              i.sendMessage({
                handler: Ge.CAPTCHA_FAIL,
                params: {
                  uuid: e
                }
              }), a.destroy();
            }), s();
            break;
          default:
            s(), c.reject(), u();
        }
      };
      return Ce.fetchDomain().then(function () {
        Me({
          origin: location.protocol + "//" + location.host,
          uuid: e,
          scheme: t || "bright_light"
        }, "user_data_policy").then(function (e) {
          r.src = e;
        }), (i = new Ne({
          iframe: r,
          origin: "https://" + Ce.get().connectDomain
        })).onMessage(l);
      }), {
        show: function show() {
          return r.style.display = "block", new Promise(function (e) {
            c.start(), c.get().then(function (t) {
              e(t);
            });
          });
        },
        hide: s,
        destroy: u
      };
    }, e.userPolicyAgreements = function (t, r) {
      var o,
        i,
        a,
        s,
        c = new ke();
      a = "", s = window.innerHeight, o = k(a, {
        properties: {
          height: s + "px"
        },
        cssText: "\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: " + s + "px;\n      min-height: " + s + "px;\n      border: none;\n      z-index: 99999;\n    "
      }), document.body.appendChild(o);
      var u = function u() {
          o && (o.remove(), o = null), i && i.destroy();
        },
        l = function l() {
          o && (o.style.display = "none");
        },
        p = function p(a) {
          switch (a.handler) {
            case M.ERROR:
              n.handleError(a.params);
              break;
            case Ze.ACCEPT_POLICY_AGREEMENTS:
              l(), c.resolve({
                accepted: !0
              }), u();
              break;
            case Ze.DECLINE_POLICY_AGREEMENTS:
              l(), c.resolve({
                accepted: !1
              }), u();
              break;
            case Ze.GET_CAPTCHA:
              var s = new Fe(t, {
                captcha_sid: a.params.captcha_sid,
                captcha_img: a.params.captcha_img
              }, r);
              s.show().then(function (e) {
                i.sendMessage({
                  handler: Ze.CAPTCHA_SUCCESS,
                  params: _re({
                    uuid: t
                  }, e)
                }), o.style.display = "block";
              })["catch"](function () {
                i.sendMessage({
                  handler: Ze.CAPTCHA_FAIL,
                  params: {
                    uuid: t
                  }
                }), s.destroy();
              }), l();
              break;
            case Ze.SHOW_DATA_POLICY:
              l();
              var p = function p() {
                o.style.display = "block";
              };
              e.userDataPolicy(t, r).show().then(p)["catch"](p);
              break;
            case Ze.POLICY_AGREEMENTS_ERROR:
            case Ze.HIDE_POLICY_AGREEMENTS:
            default:
              c.reject(), u();
          }
        };
      return Ce.fetchDomain().then(function () {
        Me({
          origin: location.protocol + "//" + location.host,
          uuid: t,
          scheme: r || "bright_light"
        }, "user_policy_agreements").then(function (e) {
          o.src = e, (i = new Ne({
            iframe: o,
            origin: "https://" + Ce.get().connectDomain
          })).onMessage(p);
        });
      }), {
        show: function show() {
          return o.style.display = "block", new Promise(function (e) {
            c.start(), c.get().then(function (t) {
              e(t);
            });
          });
        },
        hide: l,
        destroy: u
      };
    }, e.userVisibleAuth = function (n) {
      return Ce.fetchDomain().then(function () {
        var r = Ye(),
          o = Ce.get(),
          i = _re(_re({
            origin: location.protocol + "//" + location.host,
            uuid: r,
            debug: o._debug ? 1 : null,
            localhost: o._localhost ? 1 : null
          }, K(n, ["screen", "source"])), {
            scheme: null == n ? void 0 : n.scheme
          }),
          a = Re(null == n ? void 0 : n.action);
        a && (i.action = a);
        var s = Ke(null == n ? void 0 : n.entry);
        return s && (i.initial_stats_info = s), Me(i).then(function (n) {
          e.flags && (n = n + "#" + w(e.flags));
          var o = screen.height / 2 - 280,
            i = screen.width / 2 - 410,
            a = window.open(n, "_blank", "top=" + o + ",left=" + i + ",width=820,height=560,location");
          if (!a) {
            var s = pe(ue(L[L.CONNECT_WINDOW_NOT_OPENED], L.CONNECT_WINDOW_NOT_OPENED, G()));
            return Promise.reject(s);
          }
          return new Promise(function (e, n) {
            var o = setInterval(function () {
              if (!a || a.closed) {
                window.removeEventListener("message", i), clearInterval(o);
                var e = pe(ue(L[L.CONNECT_WINDOW_CLOSED], L.CONNECT_WINDOW_CLOSED, H()));
                n(e);
              }
            }, 1e3);
            function i(s) {
              if (s.source === a && a) if (window.removeEventListener("message", i), clearInterval(o), function (e) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (e.slice(e.length - r.length) === r) return !0;
                }
                return !1;
              }(s.origin)) {
                if (s.data.action === "vk_connect_response" + r) {
                  var c = s.data.payload;
                  if (a.close(), c.error) {
                    l = pe(ue(L[L.CONNECT_CLIENT_SDK_ERROR], L.CONNECT_CLIENT_SDK_ERROR, j(c.error)));
                    n(l);
                  } else e({
                    provider: "vk",
                    payload: c
                  });
                } else if (s.data.action === "oauth_callback" + r) e({
                  provider: s.data.payload.name
                }), a.close();else if (s.data.action === "skip_callback" + r) {
                  var u = s.data.payload.redirectURL;
                  u && (window.location.href = u), a.close();
                } else if (s.data.action === "bind_ok_account" + r) e(s.data.payload), a.close();else {
                  a.close();
                  l = pe(ue(L[L.CONNECT_UNKNOWN_SDK_MESSAGE], L.CONNECT_UNKNOWN_SDK_MESSAGE, F(JSON.stringify(s.data))));
                  n(l);
                }
              } else {
                a.close();
                var l = pe(ue(L[L.CONNECT_DOMAIN_NOT_ALLOWED], L.CONNECT_DOMAIN_NOT_ALLOWED, W(s.origin)));
                n(l);
              }
            }
            window.addEventListener("message", i);
          });
        });
      });
    }, e.redirectAuth = function (e) {
      var t = tt.validate(e);
      !t.isValid() && console.error(t.error());
      var n = Ye(),
        r = _re(_re({
          redirect_uri: e.url,
          uuid: n
        }, K(e, ["screen", "source"])), {
          scheme: null == e ? void 0 : e.scheme
        }),
        o = Re(null == e ? void 0 : e.action);
      o && (r.action = o);
      var i = Ke(null == e ? void 0 : e.entry);
      i && (r.initial_stats_info = i), (null == e ? void 0 : e.state) && (r.redirect_state = e.state), Me(r).then(function (e) {
        location.assign(e);
      });
    }, e.logout = function () {
      return Ce.fetchDomain().then(function () {
        var e = Ce.get(),
          t = e.connectDomain,
          n = e.appId,
          r = e.superAppTokenV2;
        if (!r) return Promise.reject(U("superappToken", "SuperappToken is undefined"));
        var o = w({
            origin: location.protocol + "//" + location.host,
            host_app_id: n,
            superapp_token: r
          }),
          i = fetch("https://" + t + "/logout?" + o, {
            credentials: "include"
          });
        return Ce.events.emit(M.LOGOUT), Ce.setSuperAppToken(""), Ce.setSuperAppToken("", {
          version: 2
        }), i;
      });
    }, e;
  }(),
  it = {
    OneTapAuthEventsSDK: Je,
    FloatingOneTapAuthEventsSDK: Qe,
    ButtonOneTapAuthEventsSDK: Xe,
    DataPolicyEventsSDK: qe
  },
  at = ["open_account"];
exports.ConnectEvents = it;
exports.Connect = ot;
var st,
  ct,
  ut = function () {
    function e() {}
    return e.open = function (e) {
      var t = me.validate({
        token: e.action.token
      });
      return !t.isValid() && console.error(t.error()), Ce.fetchDomain().then(function () {
        var t,
          n = Ye(),
          r = Ce.get(),
          o = _re({
            origin: location.protocol + "//" + location.host,
            uuid: n,
            debug: R(r._debug, 0),
            localhost: R(r._localhost, 0)
          }, K(e, ["screen", "source"])),
          i = (t = null == e ? void 0 : e.action) && at.includes(t.name) ? btoa(JSON.stringify(t)) : "";
        return i && (o.action = i), function (e) {
          return Ce.fetchDomain().then(function () {
            var t = Ce.get(),
              n = t.appId,
              r = t.connectDomain,
              o = t.appSettings,
              i = t._debug,
              a = t._localhost,
              s = _re({
                app_id: n,
                response_type: "silent_token",
                v: "1.58.5",
                debug: i ? 1 : null,
                localhost: a ? 1 : null
              }, e);
            o && D(o) && (s.app_settings = N(o));
            var c = w(s);
            return Promise.resolve("https://" + r + "/open_account?" + c);
          });
        }(o).then(function (e) {
          if (!window.open(e, "_blank")) {
            var t = pe(ue(L[L.CONNECT_WINDOW_NOT_OPENED], L.CONNECT_WINDOW_NOT_OPENED, G()));
            return Promise.reject(t);
          }
          return Promise.resolve();
        });
      });
    }, e;
  }();
exports.Account = ut;
exports.MessengerEvents = ct;
!function (e) {
  e.INTERNAL_RESIZE = "VKSDKMessengerInternalResize", e.INTERNAL_LOGOUT = "VKSDKMessengerInternalLogout";
}(st || (st = {})), function (e) {
  e.CLOSE_CHAT = "VKSDKMessengerCloseChat";
}(ct || (exports.MessengerEvents = ct = {}));
var lt,
  pt = function () {
    function e() {}
    return e.log = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, e;
  }(),
  dt = new fe({
    params: [{
      rule: se,
      errorText: q("params")
    }]
  }),
  ht = function () {
    function e() {
      var e = this;
      this.config = {}, this.params = {}, this.loadingTask = new ke(), this.initTask = new ke(), this.cssText = "", this.handleError = function (t) {
        var n = pe(ue(L[L.CUSTOM], L.CUSTOM, "", t));
        e.events.emit(M.ERROR, n);
      }, this.events = oe(), this.handleBridgeMessage = this.handleBridgeMessage.bind(this), this.handleChangeSuperAppToken = this.handleChangeSuperAppToken.bind(this), this.close = this.close.bind(this), this.handleLogout = this.handleLogout.bind(this);
    }
    return e.prototype.preload = function (e) {
      var t = this;
      return Ce.fetchDomain().then(function () {
        return t.validateParams(e).then(function () {
          return t.updateParams(e), t.createIframe().then(function () {
            return t.initTask.start(), t.loadingTask.start(), t.timeoutTimer = setTimeout(function () {
              if (!t.initTask.finished) {
                var e = pe(ue(L[L.LOADING_ERROR], L.LOADING_ERROR, z()));
                t.initTask.reject(e);
              }
            }, 5e3), t.iframe.onload = function () {
              t.iframe.onload = null, t.loadingTask.resolve();
            }, t.bridge = new Ne({
              iframe: t.iframe,
              origin: "https://" + Ce.get().connectDomain
            }), t.bridge.onMessage(t.handleBridgeMessage), Ce.events.on(ne.SUPERAPP_TOKEN_CHANGE_V2, t.handleChangeSuperAppToken), Ce.events.on(M.LOGOUT, t.close), t.getIframeContainer().appendChild(t.iframe), t.loadingTask.get();
          });
        });
      });
    }, e.prototype.open = function (e) {
      var t = this;
      return this.validateParams(e).then(function () {
        return t.initTask.finished ? (t.updateParams(e), Promise.resolve()) : t.initTask.active || t.initTask.finished ? (t.updateParams(e), t.initTask.get()) : t.preload(e).then(function () {
          return t.initTask.get();
        });
      });
    }, e.prototype.update = function (e, t) {
      e && this.updateParams(e), t && this.updateConfig(t);
    }, e.prototype.close = function () {
      this.iframe && (this.iframe.onload = null, this.iframe.remove()), this.bridge && this.bridge.destroy(), Ce.events.off(ne.SUPERAPP_TOKEN_CHANGE_V2, this.handleChangeSuperAppToken), Ce.events.off(M.LOGOUT, this.close), delete this.iframe, delete this.bridge, this.loadingTask = new ke(), this.initTask = new ke(), this.events.emit(M.CLOSE);
    }, e.prototype.sendMessage = function (e) {
      var t = _e.validate({
        message: e
      });
      !t.isValid() && console.error(t.error()), this.bridge.sendMessage(e);
    }, e.prototype.on = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.on(e, t);
    }, e.prototype.off = function (e, t) {
      var n = ve.validate({
        event: e,
        handler: t
      });
      !n.isValid() && console.error(n.error()), this.events.off(e, t);
    }, e.prototype.handleInit = function () {
      this.initTask.finished || (clearTimeout(this.timeoutTimer), this.initTask.resolve()), this.sendUpdateParamsMessage(), this.iframe.style.display = "block";
    }, e.prototype.handleRequestAuth = function () {
      Ce._auth({
        version: 2
      });
    }, e.prototype.handleRequestSuperAppToken = function (e) {
      Ce._requestSuperAppToken(e, {
        version: 2
      });
    }, e.prototype.handleChangeSuperAppToken = function (e) {
      this.bridge.sendMessage({
        handler: M.REQUEST_SUPERAPP_TOKEN + "Success",
        params: {
          result: e
        }
      });
    }, e.prototype.handleBridgeMessage = function (e) {
      switch (pt.log(e), e.handler) {
        case x.INIT:
          this.handleInit();
          break;
        case M.REQUEST_SUPERAPP_TOKEN:
          this.handleRequestSuperAppToken(e.params);
          break;
        case M.AUTH_NEEDED:
          this.handleRequestAuth();
          break;
        case M.CLOSE:
          this.close();
          break;
        case M.ERROR:
          this.handleError(e.params);
          break;
        default:
          return;
      }
    }, e.prototype.handleLogout = function () {
      Ce._logout();
    }, e.prototype.handleAfterUpdateParams = function () {
      this.sendUpdateParamsMessage();
    }, e.prototype.handleAfterUpdateConfig = function () {}, e.prototype.handleAfterCreateIframe = function () {}, e.prototype.validateParams = function (e) {
      var t = dt.validate({
        params: e
      });
      return !t.isValid() && console.error(t.error()), Promise.resolve(e);
    }, e.prototype.createIframe = function () {
      var e = this;
      return this.getIframeUrl().then(function (t) {
        return e.iframe = k(t, {
          cssText: e.cssText
        }), e.handleAfterCreateIframe(), Promise.resolve();
      });
    }, e.prototype.getIframeUrl = function () {
      return new Promise(function (e) {
        return e("");
      });
    }, e.prototype.getIframeContainer = function () {
      return window.document.body;
    }, e.prototype.getIframeUrlParams = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        var t = Ce.get(),
          n = t.superAppTokenV2,
          r = t.appId,
          o = t._debug,
          i = t._localhost;
        return Promise.resolve(w(_re(_re({}, e.params), {
          host_app_id: r,
          superapp_token: n,
          origin: location.protocol + "//" + location.host,
          debug: o ? 1 : null,
          localhost: i ? 1 : null
        })));
      });
    }, e.prototype.updateConfig = function (e) {
      this.config = I(this.config, e), this.handleAfterUpdateConfig();
    }, e.prototype.updateParams = function (e) {
      this.params = I(this.params, e || {}), this.handleAfterUpdateParams();
    }, e.prototype.sendUpdateParamsMessage = function () {
      this.bridge && this.initTask.finished && this.bridge.sendMessage({
        params: this.params,
        handler: M.UPDATE_PARAMS
      });
    }, e;
  }(),
  ft = new fe({
    config: [{
      rule: se,
      errorText: q("config")
    }]
  }),
  mt = {
    styles: {
      bottom: "0",
      right: "0",
      zIndex: 99999
    }
  },
  vt = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.config = mt, n.cssText = "\n    border: none;\n    display: none;\n    position: fixed;\n  ", n.updateStyles = function () {
        if (n.iframe) {
          var e = n.config.styles,
            t = isFinite(e.zIndex) ? e.zIndex : 999999;
          n.iframe.style.zIndex = "" + t, n.iframe.style.bottom = e.bottom, n.iframe.style.right = e.right;
        }
      };
      var r = ft.validate({
        config: t
      });
      return !r.isValid() && console.error(r.error()), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.handleBridgeMessage = function (t) {
      var n = this;
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case M.GET_CAPTCHA:
          var r = t.params.uuid,
            o = new Fe(r, {
              captcha_sid: t.params.captcha_sid,
              captcha_img: t.params.captcha_img
            });
          o.show().then(function (e) {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Success",
              params: _re({
                uuid: r
              }, e)
            });
          })["catch"](function () {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Fail",
              params: {
                uuid: r
              }
            }), o.destroy();
          });
          break;
        case st.INTERNAL_RESIZE:
          this.handleInternalIframeResize(t);
          break;
        case st.INTERNAL_LOGOUT:
          this.handleLogout();
          break;
        case ct.CLOSE_CHAT:
          this.events.emit(ct.CLOSE_CHAT, t.params);
          break;
        default:
          return;
      }
    }, t.prototype.handleInternalIframeResize = function (e) {
      var t = e.params;
      this.iframe.width = t.width + "px", this.iframe.height = t.height + "px";
    }, t.prototype.handleAfterUpdateConfig = function () {
      this.updateStyles();
    }, t.prototype.handleAfterCreateIframe = function () {
      this.updateStyles();
    }, t.prototype.validateParams = function (e) {
      return e.peer_id >= 0 ? Promise.reject(U("peer_id", "Peer id can`t be positive")) : Promise.resolve(e);
    }, t.prototype.getIframeUrl = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        return e.getIframeUrlParams().then(function (e) {
          var t = Ce.get().connectDomain;
          return Promise.resolve("https://" + t + "/messenger?" + e);
        });
      });
    }, t;
  }(ht);
exports.Messenger = vt;
exports.AuthQREvents = lt;
!function (e) {
  e.SCANNED = "VKSDKQRScaned", e.CLICKED = "VKSDKQRClicked";
}(lt || (exports.AuthQREvents = lt = {}));
var gt,
  _t = new fe({
    container: [{
      rule: se,
      errorText: q("container")
    }]
  }),
  At = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.getIframeContainer = function () {
        return n.config.container ? n.config.container : window.document.body;
      };
      var r = _t.validate(t);
      return !r.isValid() && console.error(r.error()), (null == t ? void 0 : t.langId) && !Le.includes(null == t ? void 0 : t.langId) && console.error(U("lang_id", "This lang id is not allowed")), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.getIframeUrl = function () {
      return this.getIframeUrlParams().then(function (e) {
        var t = Ce.get().connectDomain;
        return Promise.resolve("https://" + t + "/qr_auth?" + e);
      });
    }, t.prototype.getIframeUrlParams = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        var t,
          n = Ce.get(),
          r = n.appId,
          o = n._debug,
          i = n._localhost;
        return Promise.resolve(w({
          scheme: (null === (t = e.params) || void 0 === t ? void 0 : t.scheme) || "bright_light",
          app_id: r,
          origin: location.protocol + "//" + location.host,
          lang_id: e.config.langId || null,
          initial_stats_info: Ke(e.config.entry) || null,
          debug: o ? 1 : null,
          localhost: i ? 1 : null
        }));
      });
    }, t.prototype.handleBridgeMessage = function (t) {
      var n = this;
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case lt.CLICKED:
          this.events.emit(lt.CLICKED);
          break;
        case lt.SCANNED:
          this.events.emit(lt.SCANNED, t.params.token);
          break;
        case M.GET_CAPTCHA:
          var r = t.params.uuid,
            o = new Fe(r, {
              captcha_sid: t.params.captcha_sid,
              captcha_img: t.params.captcha_img
            });
          o.show().then(function (e) {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Success",
              params: _re({
                uuid: r
              }, e)
            });
          })["catch"](function () {
            n.bridge.sendMessage({
              handler: M.GET_CAPTCHA + "Fail",
              params: {
                uuid: r
              }
            }), o.destroy();
          });
          break;
        default:
          return;
      }
    }, t;
  }(ht);
exports.AuthQR = At;
exports.UserEvents = gt;
!function (e) {
  e.CONTENT_IN_HEIGHT = "VKSDKUserContentInHeight", e.VALIDATION_PHONE_CLOSE = "VKSDKUserValidationPhoneClose";
}(gt || (exports.UserEvents = gt = {}));
var yt,
  Tt = new fe({
    container: [{
      rule: se,
      errorText: q("container")
    }]
  }),
  Et = new fe({
    canSkip: [{
      rule: se,
      errorText: q("canSkip")
    }],
    origin: [{
      rule: se,
      errorText: q("origin")
    }]
  }),
  Ot = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.getIframeContainer = function () {
        return n.config.container ? n.config.container : window.document.body;
      };
      var r = Tt.validate(t);
      return !r.isValid() && console.error(r.error()), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.getIframeUrl = function () {
      var e = _re(_re({
          redirect_uri: this.params.url,
          uuid: Ye()
        }, K(this.params, ["screen", "source"])), {
          scheme: this.params.scheme
        }),
        t = Re(this.params.action);
      t && (e.action = t);
      var n = Ke(this.params.entry);
      return n && (e.initial_stats_info = n), this.params.state && (e.redirect_state = this.params.state), Me(e);
    }, t.prototype.handleBridgeMessage = function (t) {
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case gt.CONTENT_IN_HEIGHT:
          this.events.emit(gt.CONTENT_IN_HEIGHT, t.params);
          break;
        case gt.VALIDATION_PHONE_CLOSE:
          this.events.emit(gt.VALIDATION_PHONE_CLOSE, t.params);
          break;
        default:
          return;
      }
    }, t.prototype.validatePhone = function (e) {
      var t = Et.validate(e);
      !t.isValid() && console.error(t.error());
      var n = {
        name: "auth_validation_phone",
        params: {
          status: e.canSkip ? "1" : "0"
        }
      };
      e.sid && (n.params.sid = e.sid), this.open({
        url: e.origin,
        scheme: e.scheme,
        action: n
      });
    }, t;
  }(ht);
exports.User = Ot;
exports.VerificationProfileEvents = yt;
!function (e) {
  e.SUCCESS = "VKSDKVerificationProfileSuccess", e.CLOSE = "VKSDKVerificationProfileClose";
}(yt || (exports.VerificationProfileEvents = yt = {}));
var St = new fe({
    config: [{
      rule: se,
      errorText: q("config")
    }],
    provider: [{
      rule: ae,
      errorText: Y("provider")
    }, {
      rule: se,
      errorText: q("provider")
    }]
  }),
  Ct = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.cssText = "\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n    border: none;\n    display: none;\n  ";
      var r = St.validate({
        config: t,
        provider: t.provider
      });
      return !r.isValid() && console.error(r.error()), n.updateConfig(t), n;
    }
    return X(t, e), t.prototype.handleBridgeMessage = function (t) {
      switch (e.prototype.handleBridgeMessage.call(this, t), t.handler) {
        case yt.SUCCESS:
          this.events.emit(yt.SUCCESS);
          break;
        case yt.CLOSE:
          this.close();
          break;
        default:
          return;
      }
    }, t.prototype.handleAfterUpdateConfig = function () {
      this.updateZIndex();
    }, t.prototype.handleAfterCreateIframe = function () {
      this.updateZIndex();
    }, t.prototype.getIframeUrlParams = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        var t = Ce.get(),
          n = t.superAppTokenV2,
          r = t.appId,
          o = t._debug,
          i = t._localhost;
        return Promise.resolve(w(_re(_re({}, e.params), {
          app: r,
          superapp_token: n,
          origin: location.protocol + "//" + location.host,
          debug: o ? 1 : null,
          localhost: i ? 1 : null,
          provider: e.config.provider
        })));
      });
    }, t.prototype.getIframeUrl = function () {
      var e = this;
      return Ce.fetchDomain().then(function () {
        return e.getIframeUrlParams().then(function (e) {
          var t = Ce.get().connectDomain;
          return Promise.resolve("https://" + t + "/verification_profile?" + e);
        });
      });
    }, t.prototype.updateZIndex = function () {
      if (this.iframe) {
        var e = this.config.zIndex;
        this.iframe.style.zIndex = "" + e;
      }
    }, t;
  }(ht);
exports.VerificationProfile = Ct;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowOpen = exports.openTab = exports.openPopupWindow = exports.closeChildWindows = exports.center = void 0;
window.childWindows = [];
var windowsNotCloseNames = ["_mail", "_forum", "_help", "_qualityAssessmentAnalytics", "_qualityAssessmentAnalyticsEM", "nsxml", "_staffAttest"];
var makeUrlWithToken = function makeUrlWithToken(url) {
  var appendUrl;
  if (url.lastIndexOf("?") != -1) appendUrl = "&";else appendUrl = "?";
  appendUrl += "at=" + appContext.at + "&ver=" + getVer();
  return url + appendUrl;
};
var openPopupWindow = function openPopupWindow(wnd_to, url, width, height) {
  var wnd = window.windows[wnd_to];
  try {
    if (wnd && !wnd.closed && wnd_to != "_qualityAssessmentAnalytics" && wnd_to != "_qualityAssessmentAnalyticsEM" && wnd_to != "_staffAttest") {
      wnd.forceClosing = true;
      wnd.close();
    }
  } catch (e) {
    console.log(e);
  }
  var winOptions = {
    url: makeUrlWithToken(url),
    name: wnd_to,
    specs: "status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=" + width + ",height=" + height,
    winChild: wnd
  };
  if (wnd && !wnd.closed && (wnd_to == "_qualityAssessmentAnalytics" || wnd_to == "_qualityAssessmentAnalyticsEM")) {
    wnd.focus();
    return;
  }
  windowOpen(winOptions);
  wnd = window.windows[wnd_to] = winOptions.winChild;
  center(wnd, width, height);
  wnd.focus();
};
exports.openPopupWindow = openPopupWindow;
var openTab = function openTab(url, target) {
  var link = document.createElement('a');
  link.href = makeUrlWithToken(url);
  link.target = target || "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();
};
exports.openTab = openTab;
var center = function center(wnd, width, height) {
  try {
    if (!wnd || !wnd.screen) {
      return;
    }
  } catch (e) {
    console.log(e);
  }
  if (typeof bowser !== "undefined") {
    if (bowser.webkit && parseInt(bowser.version) < 20) {
      return;
    }
  }
  var dw = (wnd.screen.availWidth - width) / 2;
  var dh = (wnd.screen.availHeight - height) / 2;
  wnd.moveTo(dw, dh);
};
exports.center = center;
var windowOpen = function windowOpen(winOptions) {
  var opener, wnd;
  var url = winOptions.url || "";
  var name = winOptions.name || "";
  var specs = winOptions.specs || "";
  wnd = winOptions.winChild;
  if (wnd && !wnd.closed) {
    wnd.close();
  }
  wnd = window.open(url, name, specs);
  winOptions.winChild = wnd;
  opener = wnd.opener;
  while (opener && !opener.closed) {
    try {
      opener.childWindows.push(wnd);
      opener = opener.opener;
    } catch (error) {
      break;
    }
  }
  var closeWindow = windowsNotCloseNames.indexOf(name) < 0;
  if (closeWindow) {
    $(window).on("unload", function (e) {
      if (wnd && !wnd.closed) {
        wnd.forceClosing = true;
        return wnd.close();
      }
    });
  }
};
exports.windowOpen = windowOpen;
var closeChildWindows = function closeChildWindows() {
  var k;
  k = window.childWindows.length;
  while (k > 0) {
    if (window.childWindows[k - 1] && !window.childWindows.closed) {
      window.childWindows[k - 1].close();
    }
    window.childWindows.pop();
    k = k - 1;
  }
};
exports.closeChildWindows = closeChildWindows;

/***/ })
/******/ ]);