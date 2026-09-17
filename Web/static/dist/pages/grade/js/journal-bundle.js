var PageController =
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

var PageController;

PageController = (function() {
  var EditJournalCtrl, JournalCtrl, JournalTotalsCtrl, stateManagerModule;

  stateManagerModule = __webpack_require__(2);

  JournalCtrl = __webpack_require__(3);

  EditJournalCtrl = __webpack_require__(11);

  JournalTotalsCtrl = __webpack_require__(18);

  function PageController(journalPreparedFp, extraActivity) {
    var State, defaultState, editJournalController, editState, journalTotalsController, totalsState;
    this.extraActivity = extraActivity;
    this.sgFieldName = this.extraActivity ? "EASGID" : "SGID";
    this.journalCtrl = new JournalCtrl(journalPreparedFp, this.extraActivity);
    window.ctrl = this.journalCtrl;
    this.stateManager = new stateManagerModule.StateManager();
    State = stateManagerModule.State;
    defaultState = new State('journal', language.Common.kJournal).setOnEnter((function(_this) {
      return function() {
        window.location.hash = "";
        return _this.journalCtrl.show();
      };
    })(this)).setOnExit((function(_this) {
      return function() {
        return _this.journalCtrl.dispose();
      };
    })(this)).setHelpPage("/help/Journal.htm").setDefault();
    journalTotalsController = null;
    totalsState = new State('totals', language.Generic.Grade.kTotals).setOnEnter((function(_this) {
      return function(args) {
        var filterData, filterText, fp, journalData, journalTotalsContainer, markSettings, totalsCtx;
        fp = _this.journalCtrl.filterPanel;
        filterData = fp.getValues();
        filterText = fp.getTexts();
        journalData = _this.journalCtrl.journalData;
        markSettings = _this.journalCtrl.journalsData.markSettings;
        totalsCtx = {
          schoolYearId: appContext.yearId,
          subjectGroupId: filterData[_this.sgFieldName],
          subjectGroupName: filterText[_this.sgFieldName],
          termId: filterData.TERMID,
          termName: filterText.TERMID,
          className: filterText.PCLID_IUP,
          totals: journalData.totals,
          avgMarks: journalData.avgMarks,
          minMark: markSettings.minMark,
          maxMark: markSettings.maxMark,
          gradingSys: journalData.gradingSys
        };
        journalTotalsContainer = $("#journal-totals-container");
        journalTotalsController = new JournalTotalsCtrl(journalTotalsContainer, totalsCtx);
        return journalTotalsController.load(args.cmId).then(function() {
          return journalTotalsController.display();
        });
      };
    })(this)).setOnExit(function(args) {
      if (journalTotalsController != null) {
        journalTotalsController.close();
      }
      return journalTotalsController = null;
    });
    editJournalController = null;
    editState = new State('edit', language.Generic.Grade.kEditJournal).setOnEnter((function(_this) {
      return function(args) {
        var editCtx, editJournalContainer, filterData, filterText, fp, journalData;
        fp = _this.journalCtrl.filterPanel;
        filterData = fp.getValues();
        filterText = fp.getTexts();
        editCtx = {
          schoolYearId: appContext.yearId,
          subjectGroupId: filterData[_this.sgFieldName],
          subjectGroupName: filterText[_this.sgFieldName],
          termId: filterData.TERMID,
          termName: filterText.TERMID,
          extraActivity: _this.extraActivity
        };
        journalData = _this.journalCtrl.journalData;
        editJournalContainer = $("#edit-journal-container");
        editJournalController = new EditJournalCtrl(editJournalContainer, journalData.classMeeting, editCtx, {
          markSettings: journalData.markSettings,
          editLimit: journalData.editLimit,
          restrictAddHomeAssign: journalData.editLimit.limitPastEditHomeAssigns,
          extraActivity: _this.extraActivity
        });
        editState.container.find('.buttons-filters-panel ').removeClass("hide");
        return editJournalController.load(args.cmId).then(function() {
          editJournalController.display();
          return $("#journal-last-access-info").empty();
        });
      };
    })(this)).setOnFail(function() {
      this.container.find('.filters-panel').empty();
      return this.container.find('.buttons-filters-panel ').addClass("hide");
    }).setHelpPage("/help/EditJournal.htm").setOnExit(function() {
      if (editJournalController != null) {
        editJournalController.close();
      }
      return editJournalController = null;
    });
    this.stateManager.defineState(defaultState);
    this.stateManager.defineState(editState);
    this.stateManager.defineState(totalsState);
    this.initialRoute = window.location.hash;
    window.onhashchange = (function(_this) {
      return function() {
        var cmId, hash;
        hash = window.location.hash;
        if (!hash) {
          return;
        }
        if (hash.startsWith("#edit-")) {
          if (_this.stateManager.currentState.id === editState.id) {
            return;
          }
          cmId = parseInt(hash.replace("#edit-", ""));
          return _this.stateManager.setState(editState.id, {
            cmId: cmId
          });
        }
      };
    })(this);
    this.stateManager.setState(defaultState.id);
  }

  return PageController;

})();

module.exports = PageController;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var State, StateManager;

State = (function() {
  function State(id1, title) {
    this.id = id1;
    this.title = title;
    this.defaultState = false;
    this.container = $("#state-" + this.id);
    this.active = false;
  }

  State.prototype.setOnEnter = function(handler) {
    this.onEnter = handler;
    return this;
  };

  State.prototype.setHelpPage = function(helpPage) {
    this.helpPage = helpPage;
    return this;
  };

  State.prototype.setOnFail = function(handler) {
    this.onFail = handler;
    return this;
  };

  State.prototype.setOnExit = function(handler) {
    this.onExit = handler;
    return this;
  };

  State.prototype.setDefault = function() {
    this.defaultState = true;
    return this;
  };

  State.prototype.show = function(args) {
    var deferr, promise;
    deferr = $.Deferred();
    promise = deferr.promise();
    if (this.active) {
      return promise;
    }
    this.active = true;
    this.container.removeClass("hide");
    if (this.onEnter) {
      promise = this.onEnter(args);
    } else {
      deferr.resolve();
    }
    promise.then((function(_this) {
      return function() {
        return window.ShowHelp = function() {
          return openPopupWindow("_help", _this.helpPage, 950, 660);
        };
      };
    })(this));
    return promise;
  };

  State.prototype.hide = function() {
    if (!this.active) {
      return;
    }
    this.container.addClass("hide");
    if (this.onExit) {
      this.onExit();
    }
    setTimeout(((function(_this) {
      return function() {
        return _this.container.find('.state-content').empty();
      };
    })(this)), 200);
    return this.active = false;
  };

  return State;

})();

StateManager = (function() {
  function StateManager() {
    this.states = [];
    this.currentState = null;
    this.prevState = null;
  }

  StateManager.prototype.defineState = function(state) {
    return this.states.push(state);
  };

  StateManager.prototype.setState = function(id, args) {
    return checkForChanges().then((function(_this) {
      return function() {
        var breadCrumb, defaultState, state;
        window.dataWereChanged = false;
        state = _.findWhere(_this.states, {
          id: id
        });
        if (!state) {
          throw "unknown state";
        }
        _.each(_this.states, function(s) {
          return s.hide();
        });
        state.show(args).fail(function() {
          if (state.onFail) {
            return state.onFail();
          }
        });
        _this.prevState = _this.currentState;
        _this.currentState = state;
        if (state.defaultState) {
          $("a.back").off("click").addClass("active");
          return $("h1.title").html(state.title);
        } else {
          defaultState = _.findWhere(_this.states, {
            defaultState: true
          });
          breadCrumb = $("<a></a>").attr("href", "#").click(function() {
            return _this.setState(defaultState.id);
          }).html(defaultState.title);
          $("h1.title").empty();
          $("h1.title").append(breadCrumb).append(" / " + state.title);
          $("a.back").off("click").removeClass("active");
          return $("a.back").click(function() {
            return _this.setState(_this.prevState.id);
          });
        }
      };
    })(this));
  };

  return StateManager;

})();

module.exports = {
  State: State,
  StateManager: StateManager
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var JournalCtrl;

JournalCtrl = (function() {
  var QuickEditController, _hideInfoMessage, _showInfoMessage, layoutManagerCtr, renderCtr, renderJournal, resourceLoader;

  renderCtr = __webpack_require__(4).JournalRender;

  layoutManagerCtr = __webpack_require__(7);

  QuickEditController = __webpack_require__(8);

  resourceLoader = __webpack_require__(9);

  function JournalCtrl(preparedFp, extraActivity) {
    var controlButtons, fpContainer, fpModel, fpSources, pfUrl;
    this.preparedFp = preparedFp;
    this.extraActivity = extraActivity;
    fpModel = this.preparedFp.filterPanel;
    fpSources = this.preparedFp.filterSources;
    fpContainer = $(".filters-panel:first");
    this.sgFieldName = this.extraActivity ? "EASGID" : "SGID";
    controlButtons = $(".buttons-panel, #load-journal-btn", "#state-journal");
    this.attendanceReasonsIndex = null;
    this.loadButton = $("#load-journal-btn");
    this.journalControls = $("#quick-edit-switch-btn, .assign-themes-btn, .journal-print-btn, .journal-export-btn");
    this.journalControls.addClass("hide");
    pfUrl = "/webapi/grade/journal/filter/init";
    if (this.extraActivity) {
      pfUrl += "?extraActivity=true";
    }
    this.filterPanel = new filterPanel(fpContainer, fpModel, fpSources, pfUrl, null, null, true, true);
    this.filterPanel.ready(function() {
      return controlButtons.show();
    });
    this.filterPanel.emptyChoice((function(_this) {
      return function(emptyFilter) {
        controlButtons.hide();
        _this.journalControls.addClass("hide");
        if ((_this.extraActivity && emptyFilter.id === "EASBJID") || (!_this.extraActivity && emptyFilter.id === "PCLID_IUP")) {
          $(".filters-panel").hide();
          return _showInfoMessage(emptyFilter.model.emptyText || language.Filter.kYouNotChiefAndHasNoSubj);
        } else if (emptyFilter.id === _this.sgFieldName) {
          $("#load-journal-btn").hide();
          return _showInfoMessage(emptyFilter.model.emptyText);
        }
      };
    })(this));
    this.filterPanel.initPanel();
    this.layoutManager = null;
    this.journalsData = null;
    this.journalData = null;
    this.filterPanel.init((function(_this) {
      return function() {
        _this.journalControls.addClass("hide");
        $("#journal-container").empty();
        $("#journal-last-access-info").nextAll().remove();
        $("#journal-last-access-info").empty();
        return _this.showInfoMessage("Нажмите кнопку \"Загрузить\" для показа классного журнала");
      };
    })(this));
    $("#load-journal-btn").click((function(_this) {
      return function() {
        return _this.loadJournal();
      };
    })(this));
    $(document).off(".journal");
    $(document).on("click.journal", "button.assign-themes-btn", (function(_this) {
      return function() {
        return _this.editAssignments();
      };
    })(this));
    $(document).on("click.journal", "button.journal-print-btn", (function(_this) {
      return function() {
        return _this.printJournal();
      };
    })(this));
    $(document).on("click.journal", "button.journal-export-btn", (function(_this) {
      return function() {
        return _this.exportJournal();
      };
    })(this));
    $.ajax({
      url: '/static/dist/pages/grade/templates/attendanceLegend.html',
      cache: true,
      success: function(data) {
        return window.attendanceLegendTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
      }
    });
    $.ajax({
      url: '/static/dist/pages/grade/templates/journalLegend.html',
      cache: true,
      success: function(data) {
        return window.journalLegendTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
      }
    });
    $.ajax({
      url: '/static/dist/pages/grade/templates/journal.html',
      cache: true,
      success: function(data) {
        return window.journalTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
      }
    });
  }

  _showInfoMessage = function(text) {
    $("#process-message-journal").css({
      display: "none"
    });
    $(".info-message > .alert").html(text);
    return $(".info-message").removeClass("hide");
  };

  _hideInfoMessage = function() {
    return $(".info-message").addClass("hide");
  };

  renderJournal = function(model, ctrl) {
    var html, journalModel, journalRender, lastAccessDate, lastAccessMessage, legend, linksHeads, ref, ref1, switchBtn, tkr;
    journalModel = model.journals[0];
    journalModel.editLimit = model.editLimit;
    journalModel.markSettings = model.markSettings;
    journalModel.lastEditCmId = model.lastEditCmId;
    tkr = false;
    if (!journalModel.students.length) {
      _showInfoMessage(language.Filter.kNoStudents);
      return;
    }
    if (!journalModel.classMeeting.length) {
      _showInfoMessage(language.Generic.Grade.kScheduleUndefined_2);
      return;
    }
    journalRender = new renderCtr();
    html = journalRender.RenderJournal(journalModel, ctrl.attendanceReasonsIndex, ctrl.extraActivity);
    ctrl.journalControls.removeClass("hide");
    _hideInfoMessage();
    $("#journal-container").html(html);
    $(document).on("click.journal", "#journal-container a.edit-totals-link", function(event) {
      return ctrl.editTotals();
    });
    linksHeads = $("tr.links > th > a");
    if ((ref = ctrl.quickEditCtrl) != null) {
      ref.dispose();
    }
    if (!journalModel.editLimit.readOnly && journalModel.markSettings.maxMark === 5 && !ctrl.extraActivity) {
      $("#quick-edit-panel").removeClass("hide");
      ctrl.quickEditCtrl = new QuickEditController($("#pupilstab"), $(".journal-student"), $(".journal-marks"), linksHeads, journalModel, function() {
        return ctrl.loadJournal();
      });
      ctrl.quickEditCtrl.initCommon();
      switchBtn = $("#quick-edit-switch-btn");
      switchBtn.off("click");

      /*
      			todo. рефакторить.
      			сейчас как-то неодназночно разделена логика смены режима представления между quickEdit.coffee и journal.coffee
       */
      switchBtn.click((function(_this) {
        return function() {
          var disableQuickMode;
          if (switchBtn.attr("aria-pressed") === "false") {
            ctrl.loadButton.removeClass("btn-primary").addClass("hidden-xs").prop("disabled", true);
            ctrl.quickEditMode = true;
            ctrl.quickEditCtrl.init();
            return $(".journal-filters").addClass("hide");
          } else {
            disableQuickMode = function() {
              var ref1;
              ctrl.loadButton.addClass("btn-primary").removeClass("hidden-xs").prop("disabled", false);
              $(".journal-filters").removeClass("hide");
              ctrl.quickEditMode = false;
              if ((ref1 = ctrl.quickEditCtrl) != null) {
                ref1.dispose();
              }
              if (window.dataWereChanged) {
                window.dataWereChanged = false;
                return ctrl.loadJournal();
              }
            };
            return window.checkForChanges().then(disableQuickMode, function() {
              switchBtn.attr("aria-pressed", "true");
              return switchBtn.addClass("active");
            });
          }
        };
      })(this));
      if (ctrl.quickEditMode) {
        ctrl.quickEditCtrl.init();
      }
    } else {
      $("#quick-edit-panel").addClass("hide");
      $("#quick-edit-switch-btn").addClass("hide");
      ctrl.quickEditMode = false;
      if ((ref1 = ctrl.quickEditCtrl) != null) {
        ref1.dispose();
      }
      if (switchBtn != null) {
        switchBtn.attr("aria-pressed", "false");
      }
    }
    this.layoutManager = new layoutManagerCtr;
    this.layoutManager.init();
    this.layoutManager.show();
    if (journalModel.lastAccess) {
      lastAccessDate = dateUtils.getLocalDateTime(journalModel.lastAccess.date);
      lastAccessMessage = language.Generic.Grade.kLastChangesMade + " <i>" + dateUtils.date2str(lastAccessDate) + " " + dateUtils.time2str(lastAccessDate) + "</i>, " + language.Generic.Grade.kLastChangesUser + " <b>" + journalModel.lastAccess.nickName + "</b>";
      $("#journal-last-access-info").empty();
      $("#journal-last-access-info").append($.uicontrols.info(lastAccessMessage));
    }
    legend = journalRender.RenderJournalLegend(tkr) + journalRender.RenderAttendanceLegend();
    $("#journal-last-access-info").nextAll().remove();
    $("#edit-journal-container").nextAll().remove();
    $("#journal-last-access-info").after(legend);
    return $("#edit-journal-container").after(legend);
  };

  JournalCtrl.prototype.printJournal = function() {
    var exporter;
    exporter = __webpack_require__(10);
    return new exporter().printJournal();
  };

  JournalCtrl.prototype.exportJournal = function() {
    var exporter;
    exporter = __webpack_require__(10);
    return new exporter().exportJournal();
  };

  JournalCtrl.prototype.editAssignments = function() {
    var urlParam;
    urlParam = "";
    if (this.extraActivity) {
      urlParam += "?extraActivity=true";
    }
    return postTo("/angular/school/journal/assignments/" + urlParam, {});
  };

  JournalCtrl.prototype.editTotals = function() {
    var backParam, filterData, urlParam;
    filterData = this.filterPanel.getValues();
    backParam = "";
    urlParam = "";
    if (this.extraActivity) {
      backParam += "?extraActivity=true";
      urlParam += "&extraActivitySg=true";
    }
    return postTo("/angular/school/journal/totals/edit?termId=" + filterData.TERMID + "&sgId=" + filterData[this.sgFieldName] + urlParam + "&back=/asp/grade/Journal.asp" + backParam + "&postTo=true");
  };

  JournalCtrl.prototype.show = function() {
    if (this.filterPanel.status !== 'emptyChoice') {
      if (window.immediatelyLoad) {
        return this.loadJournal();
      }
      $("#process-message-journal").css({
        display: "none"
      });
    }
    return extDeferred.resolve();
  };

  JournalCtrl.prototype.dispose = function() {
    var ref;
    return (ref = ctrl.quickEditCtrl) != null ? ref.dispose() : void 0;
  };

  JournalCtrl.prototype.editJournal = function(cmId) {};

  JournalCtrl.prototype.editTotalsAsync = function() {
    return window.pageController.stateManager.setState("totals", {});
  };

  JournalCtrl.prototype.loadJournal = function() {
    var GetAttendanceReasonsIndex, GetJournal, classId, classIdIup, grade, isIup, rawWal, sgId, values;
    window.immediatelyLoad = true;
    values = this.filterPanel.getValues();
    classIdIup = values.PCLID_IUP;
    grade = -1;
    classId = -1;
    sgId = values[this.sgFieldName];
    if (!this.extraActivity) {
      rawWal = classIdIup.split("_")[0];
      isIup = classIdIup.split("_")[1] === "1";
      if (isIup) {
        grade = rawWal;
      } else {
        classId = rawWal;
      }
    }
    GetAttendanceReasonsIndex = resourceLoader.getAttendanceReasons().then((function(_this) {
      return function(reasons) {
        return _this.attendanceReasonsIndex = _.indexBy(reasons, "mark");
      };
    })(this));
    GetJournal = jsSubmit({
      action: "/webapi/grade/journal",
      method: "GET",
      showProcessing: true,
      data: {
        yearId: appContext.yearId,
        classId: classId,
        grade: grade,
        sgId: sgId,
        termId: values.TERMID
      }
    }).then((function(_this) {
      return function(response) {
        _this.journalsData = response;
        _this.journalData = _this.journalsData.journals[0];
        return renderJournal(response, _this);
      };
    })(this));
    return $.when(GetAttendanceReasonsIndex, GetJournal);
  };

  JournalCtrl.prototype.showInfoMessage = _showInfoMessage;

  return JournalCtrl;

})();

module.exports = JournalCtrl;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JournalRender = void 0;

var _avgMarks = _interopRequireDefault(__webpack_require__(5));

var _journalConstants = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var JournalRender = function JournalRender() {
  var getStudentRowClass = function getStudentRowClass(journalData, student) {
    var rowClass = "";

    if (journalData.studentsOnIndividualEducForm[student.id]) {
      rowClass += " individual-educ";
    }

    if (student.free) {
      rowClass += " free-student disabled";
    }

    return rowClass;
  };

  this.AttendanceReasonsIndex = null;

  this.RenderJournal = function (journalData, attendanceReasonsIndex, extraActivity) {
    var self = this;
    self.AttendanceReasonsIndex = attendanceReasonsIndex;
    self.extraActivity = extraActivity;
    self.prepareModel(journalData);

    var students = _.map(journalData.students, function (student) {
      student.rowClass = getStudentRowClass(journalData, student);
      return student;
    });

    var classMeetings = journalData.classMeeting;
    var monthsDays = self.GetMonthsDays(classMeetings);
    var studentsMarks = self.GetStudentsMarks(journalData);
    var studentsAvgWithTotalsMarks = self.GetStudentAvgWithTotalMarks(journalData);
    journalData.avgMarks = studentsAvgWithTotalsMarks;
    var context = {
      language: window.language,
      students: students,
      classMeetings: classMeetings,
      monthsDays: monthsDays,
      studentsMarks: studentsMarks,
      studentsAvgWithTotalsMarks: studentsAvgWithTotalsMarks,
      editLimit: journalData.editLimit,
      extraActivity: extraActivity
    };
    var template = Handlebars.compile(journalTemplate);
    var html = template(context);
    return html;
  };

  this.RenderJournalLegend = function (tkr) {
    var context = {
      language: window.language,
      isNotTkr: !tkr
    };
    var template = Handlebars.compile(journalLegendTemplate);
    var html = template(context);
    return html;
  };

  this.RenderAttendanceLegend = function () {
    var context = {
      language: window.language,
      preSchool: appContext.funcType === 1
    };
    var template = Handlebars.compile(attendanceLegendTemplate);
    var html = template(context);
    return html;
  }; //todo. локализовать


  this.monthNames = [];
  this.monthNames[0] = language.Generic.Common.kJanuary;
  this.monthNames[1] = language.Generic.Common.kFebruary;
  this.monthNames[2] = language.Generic.Common.kMarch;
  this.monthNames[3] = language.Generic.Common.kApril;
  this.monthNames[4] = language.Generic.Common.kMay;
  this.monthNames[5] = language.Generic.Common.kJune;
  this.monthNames[6] = language.Generic.Common.kJuly;
  this.monthNames[7] = language.Generic.Common.kAugust;
  this.monthNames[8] = language.Generic.Common.kSeptember;
  this.monthNames[9] = language.Generic.Common.kOctober;
  this.monthNames[10] = language.Generic.Common.kNovember;
  this.monthNames[11] = language.Generic.Common.kDecember;

  this.prepareModel = function (journalData) {
    journalData.classMeeting = journalData.classMeeting || [];
    journalData.attendance = journalData.attendance || [];
    journalData.marks = journalData.marks || [];
    journalData.students = journalData.students || [];
    journalData.studentsOnIndividualEducForm = _.chain(journalData.students).filter(function (st) {
      return st.individualEduc;
    }).indexBy("id").value();
    var sliceWorkTypeIds = _journalConstants["default"].highLightTypes;
    var now = moment(new Date()); //маппинг данных по занятиям

    _.each(journalData.classMeeting, function (cm) {
      cm.date = new Date(cm.date);

      if (cm.assignments) {
        _.each(cm.assignments, function (assignment) {
          if (assignment.dueDate) {
            assignment.dueDate = new Date(assignment.dueDate);
          }

          if (assignment.date) {
            assignment.date = new Date(assignment.date);
          }
        });
      }

      if (journalData.editLimit.limitPastEdit) {
        var daysInPast = now.diff(cm.date, "days");

        if (daysInPast > journalData.editLimit.limitPastDays) {
          cm.limitEdit = true;
        }
      }

      if (journalData.editLimit.limitCmAccess && journalData.editLimit.limitCmAccess.length > 0) {
        cm.readOnly = journalData.editLimit.limitCmAccess.indexOf(cm.id) === -1;
      }

      cm.strDate = dateUtils.date2str(cm.date);

      if (cm.id === journalData.lastEditCmId) {
        cm.lastEditing = true;
      }

      cm.assignments = _.filter(journalData.assignments, function (a) {
        return a.classMeetingId === cm.id;
      });
      cm.sliceWorks = _.some(cm.assignments, function (assign) {
        return _.contains(sliceWorkTypeIds, assign.typeId);
      });

      if (!cm.readOnly) {
        cm.readOnly = journalData.editLimit.readOnly || cm.limitEdit;
      }

      cm.active = cm.assignments.length;
    });
  };

  this.GetMonthsDays = function (classMeetings) {
    var self = this;

    var monthsDays = _.chain(classMeetings || []).groupBy(function (cm) {
      var monthStart = new Date(cm.date.getFullYear(), cm.date.getMonth(), 1);
      return monthStart.getTime();
    }).map(function (classMeetings, monthStart) {
      var montNum = new Date(parseInt(monthStart)).getMonth();
      var monthName = self.monthNames[montNum];

      var days = _.map(classMeetings, function (cm) {
        return cm.date.getDate();
      });

      return {
        month: monthName,
        days: days
      };
    }).value();

    return monthsDays;
  };

  this.GetStudentsMarks = function (journalData) {
    var self = this;
    var students = journalData.students || [];
    var classMeetings = journalData.classMeeting || [];
    var attendance = journalData.attendance || [];
    var marks = journalData.marks || [];
    var studentMarks = [];

    var _iterator = _createForOfIteratorHelper(students),
        _step;

    try {
      var _loop = function _loop() {
        var student = _step.value;
        var studentCmMarks = [];
        var rowClass = getStudentRowClass(journalData, student);

        for (var j = 0; j < classMeetings.length; j++) {
          classMeeting = classMeetings[j];
          assignments = _.map(classMeeting.assignments, function (assignment) {
            return assignment.id;
          });

          var _studentMarks = _.chain(marks).filter(function (mark) {
            if (mark.studentId != student.id) {
              return false;
            }

            return _.contains(assignments, mark.assignmentId);
          }).each(function (cmMark) {
            if (!cmMark) {
              return;
            }

            cmMark.spanClass = self.GetMarkSpanClass(cmMark.mark);
          }).value() || [];

          var cssClass = "";

          if (classMeeting.sliceWorks) {
            cssClass += " slice";
          }

          if (classMeeting.isTkr) {
            cssClass += " tkr";
          }

          if (classMeeting.lastEditing) {
            cssClass += " current";
          }

          if (classMeeting.readOnly) {
            cssClass += " disabled";
          }

          var studentCmAttendance = _.find(attendance, function (att) {
            return att.classmeetingId === classMeeting.id && att.studentId == student.id;
          }) || {};
          studentCmMarks.push({
            marks: _studentMarks,
            attendance: studentCmAttendance.reason,
            //attendance: studentCmAttendance.reason ? self.AttendanceReasonsIndex[studentCmAttendance.reason].localMark : "",
            cssClass: cssClass,
            noPerformance: _studentMarks.length === 0 && !studentCmAttendance.reason
          });
        }

        studentMarks.push({
          rowClass: rowClass,
          cmMarks: studentCmMarks
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var classMeeting;
        var assignments;

        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return studentMarks;
  }; //обозначение уровня оценки css классом


  this.GetMarkSpanClass = function (mark) {
    mark = Math.round(str2floatVal(mark));

    if (mark >= 5) {
      return "excelent";
    } else if (mark >= 4 && mark < 5) {
      return "good";
    } else if (mark >= 3 && mark < 4) {
      return "enough";
    } else if (mark) {
      return "poor";
    }

    return null;
  };

  this.GetStudentAvgWithTotalMarks = function (journalData) {
    var avgMarks = _.indexBy((0, _avgMarks["default"])(journalData.marks, journalData.markSettings.useWeight, journalData.markSettings.minMark, journalData.classMeeting, appContext.isTkr, journalData.studentId), "studentId");

    var totalMarks = {};

    if (journalData.totals && journalData.totals[0]) {
      totalMarks = _.indexBy(journalData.totals[0].marks, "studentId");
    }

    var students = journalData.students || [];
    var studentsAvgMarks = [];

    for (var i = 0; i < students.length; i++) {
      var student = students[i];
      var avgMark = avgMarks[student.id] || {};
      var totalMark = totalMarks[student.id] || {};
      var rowClass = getStudentRowClass(journalData, student);
      studentsAvgMarks.push({
        rowClass: rowClass,
        avgMark: {
          mark: avgMark.mark,
          spanClass: this.GetMarkSpanClass(avgMark.mark),
          studentId: avgMark.studentId
        },
        totalMark: {
          mark: totalMark.mark,
          spanClass: this.GetMarkSpanClass(totalMark.mark)
        }
      });
    }

    return studentsAvgMarks;
  };
};

exports.JournalRender = JournalRender;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getAvgMarks;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getAvgMarks(marks, useWeight, minMark, classMeetings, isTkr) {
  var assignmentsIdx = _.chain(classMeetings).each(function (classMeeting) {
    _.each(classMeeting.assignments, function (assignment) {
      if (!assignment.date) {
        assignment.date = classMeeting.date;
      }
    });
  }).pluck('assignments').flatten().unique().indexBy('id').value();

  var today = Date.now();
  minMark = parseInt(minMark);
  var aggregateFunc;

  if (useWeight) {
    aggregateFunc = function aggregateFunc(studentId, marks) {
      var sumWeightMark = _.reduce(marks, function (memo, markInfo) {
        return memo + (parseInt(markInfo.mark == null ? minMark : markInfo.mark) - minMark) * markInfo.weight;
      }, 0);

      var sumWeight = _.reduce(marks, function (memo, markInfo) {
        return memo + markInfo.weight;
      }, 0);

      return +(minMark + (sumWeight ? sumWeightMark / sumWeight : 0)).toFixed(2);
    };
  } else {
    aggregateFunc = function aggregateFunc(studentId, marks) {
      var sumMarks = _.reduce(marks, function (memo, markInfo) {
        return memo + (markInfo.mark == null ? minMark : parseInt(markInfo.mark));
      }, 0);

      var marksCount = marks.length;
      return +(sumMarks / marksCount).toFixed(2);
    };
  }

  return _.chain(marks).map(function (markInfo) {
    var assignment = assignmentsIdx[markInfo.assignmentId];

    if (assignment) {
      if (assignment.weight) {
        markInfo.weight = +assignment.weight;
      }

      markInfo.activityId = assignment.activityId;

      if (assignment.activityId && assignment.dueDate) {
        markInfo.date = assignment.dueDate;
      } else {
        markInfo.date = assignment.date;
      }

      markInfo.tkr = assignment.typeId === 15;
    }

    if (typeof markInfo.mark === "string" && markInfo.mark) {
      markInfo.mark = +markInfo.mark;
    }

    return markInfo;
  }).filter(function (markInfo) {
    if (isTkr && !markInfo.tkr) {
      return false;
    }

    var typeMark = _typeof(markInfo.mark);

    if (markInfo.mark == null || typeMark === "undefined") {
      if (!useWeight) {
        //для среднеарифметической - фильтруем все точки
        return false;
      } else if (markInfo.date && markInfo.date > today || !markInfo.date) {
        //для средневзвешенной - фильтруем точки в будущем или без даты
        return false;
      }
    }

    if (useWeight && !markInfo.weight) {
      return false;
    }

    if (typeMark === "string") {
      //фильтр точек
      return markInfo.mark.match(/^\d+$/);
    }

    return true;
  }).groupBy(function (mark) {
    return mark.studentId;
  }).map(function (studentMarks, studentId) {
    return {
      studentId: studentId,
      mark: aggregateFunc(studentId, studentMarks)
    };
  }).value();
}

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var gradeConstants = {
    activities: {
      manual: "manual"
    },
    maxLengths: {
      assignTitle: 400
    },
    attendanceReasons: {
      released: "ОСВ",
      missed: "ОТ"
    },
    assignmentTypes: {
      themeWork: 2,
      homeWork: 3,
      controlWork: 4,
      dictation: 8,
      lessonAnswer: 10,
      testing: 14,
      tkrAssignType: 15,
      DKR: 16
    },
    testPlansTypes: [2, 4, 8, 14, 16],
    highLightTypes: [2, 4, 8, 14, 15, 16]
  };

  if (typeof sys != 'undefined' && sys.constants != null) {
    sys.constants.grade = gradeConstants;
  } //для поддержки js модульности


  (function (exp, name) {
    var exported = false;

    if ( true && module.exports) {
      module.exports = exp;
      exported = true;
    }

    if (true) {
      exports = exp;
      exported = true;
    }

    if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
      window[name] = exp;
    }

    if (typeof root !== 'undefined' && typeof name !== "undefined") {
      root[name] = exp;
    }
  })(gradeConstants);
})();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var JournalLayoutManager;

JournalLayoutManager = (function() {
  var adaptJournalWidth, journalScrollDecorator, movein, moveout, scanJournalTables, selectCol, selectRow, self;

  function JournalLayoutManager() {}

  JournalLayoutManager.journal_total = null;

  JournalLayoutManager.journal_total_wrapper = null;

  JournalLayoutManager.journal_wrapper = null;

  JournalLayoutManager.journal_marks = null;

  JournalLayoutManager.journal_students = null;

  JournalLayoutManager.content_page_preloader = null;

  JournalLayoutManager.journal_total_wrapper_block = null;

  self = JournalLayoutManager;

  journalScrollDecorator = function(block_floating_scrolls) {
    var floating_wrapper_empty;
    floating_wrapper_empty = $("<div class='floating-wrapper-empty'></div>");
    return block_floating_scrolls.prepend(floating_wrapper_empty);
  };

  scanJournalTables = function() {
    return self.journal_total.filter(".journal-total:not(.floating-scrolls)").each(function(index, element) {
      var availWidth, doc_w, factWidth, parent, parent2, table;
      table = $(element);
      parent2 = table.parent();
      parent = parent2.parent();
      factWidth = table.prop("clientWidth");
      availWidth = parent.prop("clientWidth") - 4;
      doc_w = $(window).width();
      if (factWidth > availWidth || availWidth > doc_w) {
        floatingScroll.initScrollableBlock(table, journalScrollDecorator);
        return parent.css("overflow-x", "");
      }
    });
  };

  adaptJournalWidth = function() {
    var difference_right, journal_marks_right, journal_total_width;
    if (!self.journal_total) {
      return;
    }
    journal_marks_right = {
      "right": "1px"
    };
    if (self.journal_total_wrapper.width() > self.journal_total.width()) {
      journal_total_width = self.journal_students.outerWidth() + self.journal_marks.outerWidth() + self.journal_total.outerWidth() - 2;
      difference_right = self.journal_wrapper.outerWidth() - journal_total_width;
      if (difference_right > 0) {
        journal_marks_right = {
          "right": difference_right + "px"
        };
      }
    }
    return self.journal_marks.css(journal_marks_right);
  };

  selectRow = function(n, hover) {
    var elements, studentsElems, totalsElems;
    elements = self.journal_total.find("tr:eq(" + n + ")");
    studentsElems = self.journal_students.find("tr:eq(" + (n - 2) + ")");
    totalsElems = self.journal_marks.find("tr:eq(" + (n - 2) + ")");
    if (hover) {
      elements.addClass("hover");
      studentsElems.addClass("hover");
      return totalsElems.addClass("hover");
    } else {
      elements.removeClass("hover");
      studentsElems.removeClass("hover");
      return totalsElems.removeClass("hover");
    }
  };

  selectCol = function(n, hover) {
    var c;
    c = 0;
    return $('tr', self.journal_total).each(function() {
      var elements, headers, m, row, sum;
      row = $(this);
      sum = 0;
      m = 0;
      headers = row.find('th');
      headers.each(function() {
        var colspan, header, ref;
        header = $(this);
        if (sum <= n) {
          m += 1;
          colspan = (ref = header.attr("colspan")) != null ? ref : "1";
          return sum += parseInt(colspan);
        }
      });
      if (c === 0 || n <= headers.length) {
        elements = row.find("th:nth-child(" + m + ")");
        if (hover) {
          elements.addClass("hover");
        } else {
          elements.removeClass("hover");
        }
      }
      return c = 1;
    });
  };

  movein = function() {
    selectCol(this.cellIndex, true);
    return selectRow(this.parentNode.rowIndex, true);
  };

  moveout = function() {
    selectCol(this.cellIndex, false);
    return selectRow(this.parentNode.rowIndex, false);
  };

  JournalLayoutManager.prototype.init = function() {
    self.journal_total = $(".journal-total");
    self.journal_total_wrapper = $(".journal-total-wrapper");
    self.journal_wrapper = $(".journal-wrapper");
    self.journal_marks = $(".journal-marks");
    self.journal_students = $(".journal-student");
    self.journal_total_wrapper_block = $(".journal-total-wrapper-block");
    self.journal_preloader = $("#process-message-journal");
    $('td', self.journal_total).hover(movein, moveout);
    $(".icon-ok-wraper").popover({
      placement: 'bottom',
      html: 'true',
      trigger: "hover"
    });
    $(document).bind('scan-wide-tables', function() {
      return scanJournalTables();
    });
    adaptJournalWidth();
    deferredResLoader.ready(function() {
      return scanJournalTables();
    });
    $(document).bind('journal-width-changes.journal', function() {
      return adaptJournalWidth();
    });
    return $(window).resize(function() {
      return adaptJournalWidth();
    });
  };

  JournalLayoutManager.prototype.show = function() {
    var content_page_preloader_hidden, journal_total_wrapper_block_visible, journal_wrapper_max_height, setJournalVisible;
    journal_total_wrapper_block_visible = {
      visibility: "visible",
      opacity: 1
    };
    content_page_preloader_hidden = {
      display: "none",
      opacity: 0
    };
    journal_wrapper_max_height = {
      "max-height": "none"
    };
    setJournalVisible = function() {
      adaptJournalWidth();
      self.journal_preloader.css(content_page_preloader_hidden);
      self.journal_wrapper.css(journal_wrapper_max_height);
      return self.journal_total_wrapper_block.css(journal_total_wrapper_block_visible);
    };
    return deferredResLoader.ready(function() {
      return window.setTimeout(setJournalVisible, 400);
    });
  };

  return JournalLayoutManager;

})();

module.exports = JournalLayoutManager;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var QuickEditController;

QuickEditController = (function() {
  var gradeConstants, resourceLoader;

  resourceLoader = __webpack_require__(9);

  gradeConstants = __webpack_require__(6);

  function QuickEditController(journalTable, studentsTable, totalsTable, cmLinks, journalModel, onSaveHandler) {
    this.journalTable = journalTable;
    this.studentsTable = studentsTable;
    this.totalsTable = totalsTable;
    this.cmLinks = cmLinks;
    this.journalModel = journalModel;
    this.onSaveHandler = onSaveHandler;
    this.editingCell = null;
    this.quickEditAssignTypeId = 3;
    this.quickEditCmId = null;
    this.quickEditStudentId = null;
    this.quickEditPopup = null;
    this.quickEditExistsAssign = null;
    this.quickEditRow = null;
    this.quickEditCell = null;
    this.quickEditData = {
      sgId: this.journalModel.subjectGroupId,
      results: [],
      attendance: []
    };
  }

  QuickEditController.prototype.initNavigation = function() {
    var cellsCount, checkCellBounds, checkRowBounds, ctrl, moveQuickEditCell, rows;
    ctrl = this;
    rows = this.journalTable.find("tr");
    cellsCount = this.cmLinks.length;
    checkRowBounds = function(rowInd) {
      if (rowInd < 3) {
        return false;
      }
      if (rowInd >= rows.length) {
        return false;
      }
      return true;
    };
    checkCellBounds = function(cellInd) {
      if (cellInd < 0) {
        return false;
      }
      if (cellInd >= cellsCount) {
        return false;
      }
      return true;
    };
    moveQuickEditCell = function(rowDelta, cellDelta) {
      var cell, cellInd, row, rowInd;
      rowInd = ctrl.quickEditRow;
      cellInd = ctrl.quickEditCell;
      while (true) {
        rowInd += rowDelta;
        cellInd += cellDelta;
        if (rowDelta !== 0 && !checkRowBounds(rowInd)) {
          return;
        }
        if (cellDelta !== 0 && !checkCellBounds(cellInd)) {
          return;
        }
        row = rows.eq(rowInd);
        cell = row.find("td").eq(cellInd);
        if (cell.is(".disabled") || row.is(".disabled")) {
          continue;
        }
        break;
      }
      ctrl.hideQuickEdit();
      ctrl.quickEditRow = rowInd;
      ctrl.quickEditCell = cellInd;
      ctrl.initQuickEdit(cell);
      return ctrl.showQuickEditPopup();
    };
    return $(document).on("keydown.journal-quick-edit", "body", function(e) {
      if (e.keyCode === 37) {
        moveQuickEditCell(0, -1);
        return false;
      }
      if (e.keyCode === 38) {
        moveQuickEditCell(-1, 0);
        return false;
      }
      if (e.keyCode === 39) {
        moveQuickEditCell(0, +1);
        return false;
      }
      if (e.keyCode === 40) {
        moveQuickEditCell(+1, 0);
        return false;
      }
    });
  };

  QuickEditController.prototype.unhiglite = function() {
    var ref;
    return (ref = this.journalCells) != null ? ref.find("span").removeClass("mark-of-quick-edit-type") : void 0;
  };

  QuickEditController.prototype.highlite = function() {
    var ctrl, markSpans;
    ctrl = this;
    markSpans = this.journalCells.find("span");
    markSpans.removeClass("mark-of-quick-edit-type");
    return markSpans.each(function() {
      var assignId, ref;
      assignId = $(this).data("assign-id");
      if (((ref = ctrl.assignInfo[assignId]) != null ? ref.typeId : void 0) === ctrl.quickEditAssignTypeId) {
        return $(this).addClass("mark-of-quick-edit-type");
      }
    });
  };

  QuickEditController.prototype.initCommon = function() {
    var ctrl;
    ctrl = this;
    this.controlPanel = $("#quick-edit-options");
    this.buttonPanel = $("#quick-edit-controls");
    this.assignTypeControl = $("#quick-edit-assign-type-select");
    this.markControl = $("#quick-edit-mark");
    return this.markBtnGroup = $("#quick-edit-mark-btns");
  };

  QuickEditController.prototype.init = function() {
    var buttonClass, counter, ctrl, i, j, len, mark, metrikaUrl, popupButtonsHtml, ref, ref1, ref2;
    ctrl = this;
    window.dataWereChanged = false;
    if (this.journalModel.markSettings.maxMark !== 5) {
      return;
    }
    this.assignInfo = _.chain(this.journalModel.classMeeting).reduce(function(list, cm) {
      return list.concat(cm.assignments);
    }, []).indexBy("id").value();
    this.assignTypeControl.off("change");
    this.assignTypeControl.change(function() {
      var selectedType;
      selectedType = parseInt($(this).val());
      ctrl.quickEditAssignTypeId = selectedType;
      if (window.localStorage) {
        window.localStorage.setItem("quick-edit-ass-type", selectedType);
      }
      return ctrl.highlite();
    });
    $(document).on("click.journal-quick-edit", "#quick-edit-save-btn", function() {
      return ctrl.save();
    });
    $(document).on("click.journal-quick-edit", "#quick-edit-cancel-btn", function() {
      return ctrl.cancel();
    });
    metrikaUrl = window.location.href.toLowerCase();
    metrikaUrl = metrikaUrl.substring(0, metrikaUrl.indexOf("journal.asp"));
    metrikaUrl = metrikaUrl + "quick-edit";
    ref = appContext.yaCounters;
    for (i = 0, len = ref.length; i < len; i++) {
      counter = ref[i];
      counter.hit(metrikaUrl);
    }
    $(document).on("click.journal-quick-edit", "body", (function(_this) {
      return function(e) {
        var inCell, inPopover;
        if (!_this.quickEditPopup || !_this.editingCell) {
          return;
        }
        inPopover = _this.quickEditPopup.has(e.target);
        if (inPopover.length) {
          return;
        }
        if (_this.editingCell.is(e.target)) {
          return;
        }
        inCell = _this.editingCell.has(e.target);
        if (inCell.length) {
          return;
        }
        return _this.hideQuickEdit();
      };
    })(this));
    $(document).on("keydown.journal-quick-edit", "body", function(e) {
      var mark;
      mark = parseInt(e.key);
      if (!mark) {
        if (mark === 0) {
          ctrl.setMark(-1);
          return false;
        }
        if (e.key === "." || e.key === ",") {
          ctrl.setMark(0);
          return false;
        }
        return true;
      }
      if (mark > ctrl.journalModel.markSettings.maxMark) {
        return true;
      }
      if (mark < ctrl.journalModel.markSettings.minMark) {
        return true;
      }
      ctrl.setMark(mark);
      return false;
    });
    $(document).on("click.journal-quick-edit", ".quick-edit-marks-panel > button", function() {
      var mark;
      mark = parseInt($(this).data("mark"));
      ctrl.setMark(mark);
      return ctrl.hideQuickEdit();
    });
    this.journalTable.addClass("journal-quick-edit");
    this.journalCells = this.journalTable.find("tbody tr.journal-row > td");
    popupButtonsHtml = "";
    for (mark = j = ref1 = this.journalModel.markSettings.maxMark, ref2 = this.journalModel.markSettings.minMark; ref1 <= ref2 ? j <= ref2 : j >= ref2; mark = ref1 <= ref2 ? ++j : --j) {
      buttonClass = (function() {
        switch (mark) {
          case 5:
            return "btn-success";
          case 4:
            return "btn-info";
          case 3:
            return "btn-warning";
          case 2:
            return "btn-danger";
        }
      })();
      popupButtonsHtml += "<button type='button' class='btn " + buttonClass + " btn-xs btn-block btn-mark-score' data-mark='" + mark + "'>" + mark + "</button>";
    }
    popupButtonsHtml += "<button type='button' class='btn btn-xs btn-block btn-mark' data-mark='0'>" + language.Generic.Grade.kDot + "</button>";
    popupButtonsHtml += "<button type='button' class='btn btn-xs btn-block btn-mark' data-mark='-1'>" + language.Generic.Grade.kClean + "</button>";
    this.journalCells.popover({
      placement: 'bottom',
      template: '<div class="popover quick-edit-popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> </div>',
      html: true,
      trigger: 'manual',
      content: "<div class='quick-edit-marks-panel'>" + popupButtonsHtml + "</div>",
      title: '<span>Выберите оценку</span>',
      container: 'body'
    });
    $(document).on("click.journal-quick-edit", "table.journal-total tr.journal-row:not(.disabled) > td:not(.disabled)", function() {
      if (ctrl.editingCell && !ctrl.editingCell.is(this)) {
        ctrl.hideQuickEdit();
      }
      ctrl.initQuickEdit($(this));
      if (ctrl.quickmark > -100) {
        return ctrl.setMark(ctrl.quickmark);
      } else {
        return ctrl.showQuickEditPopup();
      }
    });
    this.initNavigation();
    this.initMarksInput();
    this.controlPanel.removeClass("hide");
    return resourceLoader.getAssignTypes().then((function(_this) {
      return function(assignmentTypes) {
        var item, k, lastSelected, len1, ref3, sortedTypes;
        sortedTypes = _.sortBy(assignmentTypes, function(atype) {
          if (atype.id === gradeConstants.assignmentTypes.lessonAnswer) {
            return -2;
          }
          if (atype.id === gradeConstants.assignmentTypes.homeWork) {
            return -1;
          }
          return atype.id;
        });
        _this.assignTypeControl[0].options.length = 0;
        for (k = 0, len1 = sortedTypes.length; k < len1; k++) {
          item = sortedTypes[k];
          $("<option></option>").val(item.id).append(item.name).appendTo(_this.assignTypeControl);
        }
        lastSelected = (ref3 = window.localStorage) != null ? ref3.getItem("quick-edit-ass-type") : void 0;
        if (lastSelected) {
          _this.assignTypeControl.val(lastSelected);
        }
        _this.quickEditAssignTypeId = parseInt(_this.assignTypeControl.val());
        _this.buttonPanel.removeClass("hide");
        return _this.highlite();
      };
    })(this));
  };

  QuickEditController.prototype.dispose = function() {
    this.hideQuickEdit();
    this.unhiglite();
    $(document).off(".journal-quick-edit");
    this.controlPanel.addClass("hide");
    this.buttonPanel.addClass("hide");
    return this.journalTable.removeClass("journal-quick-edit");
  };

  QuickEditController.prototype.initMarksInput = function() {
    var btn, btnGroup, buttonClass, ctrl, i, j, mark, quickMarkBtnHandler, ref, ref1, ref2, ref3, selectCtrl, selectMark;
    ctrl = this;
    this.markBtnGroup.empty();
    this.markControl[0].options.length = 0;
    $("<option></option>").val(-100).append(language.Generic.Grade.kManualInput).appendTo(this.markControl);
    for (mark = i = ref = this.journalModel.markSettings.maxMark, ref1 = this.journalModel.markSettings.minMark; ref <= ref1 ? i <= ref1 : i >= ref1; mark = ref <= ref1 ? ++i : --i) {
      $("<option></option>").val(mark).append(mark).appendTo(this.markControl);
    }
    $("<option></option>").val(0).append(language.Generic.Grade.kDot).appendTo(this.markControl);
    $("<option></option>").val(-1).append(language.Generic.Grade.kClean).appendTo(this.markControl);
    btnGroup = this.markBtnGroup;
    selectCtrl = this.markControl;
    selectMark = (function(_this) {
      return function(mark) {
        var markBtn;
        _this.quickmark = mark;
        selectCtrl.val(mark);
        btnGroup.find("button").removeClass("active");
        markBtn = btnGroup.find("button[data-mark=" + mark + "]");
        return markBtn.addClass("active");
      };
    })(this);
    this.markControl.off("change");
    this.markControl.change(function() {
      mark = parseInt($(this).val());
      return selectMark(mark);
    });
    quickMarkBtnHandler = function() {
      mark = parseInt($(this).data("mark"));
      selectMark(mark);
      return $(this).blur();
    };
    this.markBtnGroup.append($('<button type="button" class="btn btn-default" data-mark="-100">' + language.Generic.Grade.kManualInput + '</button>').click(quickMarkBtnHandler));
    for (mark = j = ref2 = this.journalModel.markSettings.maxMark, ref3 = this.journalModel.markSettings.minMark; ref2 <= ref3 ? j <= ref3 : j >= ref3; mark = ref2 <= ref3 ? ++j : --j) {
      buttonClass = (function() {
        switch (mark) {
          case 5:
            return "btn-success";
          case 4:
            return "btn-info";
          case 3:
            return "btn-warning";
          case 2:
            return "btn-danger";
          default:
            return "btn-default";
        }
      })();
      btn = $('<button type="button" class="btn ' + buttonClass + '" data-mark="' + mark + '">' + mark + '</button>').click(quickMarkBtnHandler);
      this.markBtnGroup.append(btn);
    }
    this.markBtnGroup.append($('<button type="button" class="btn btn-default" data-mark="0">' + language.Generic.Grade.kDot + '</button>').click(quickMarkBtnHandler));
    this.markBtnGroup.append($('<button type="button" class="btn btn-default" data-mark="-1">' + language.Generic.Grade.kClean + '</button>').click(quickMarkBtnHandler));
    return selectMark(-100);
  };

  QuickEditController.prototype.hideQuickEdit = function() {
    if (!this.editingCell) {
      return;
    }
    this.editingCell.popover("hide");
    this.editingCell.removeClass("quick-edit-cell");
    this.editingRow.removeClass("quick-edit-row");
    this.editingHead.removeClass("quick-edit-head");
    this.editingCell = null;
    this.editingRow = null;
    return this.editingHead = null;
  };

  QuickEditController.prototype.initQuickEdit = function(cell) {
    var cmLinksCell, dayCell, row;
    this.editingCell = cell;
    row = cell.parent();
    this.quickEditRow = row.index();
    this.quickEditCell = cell.index();
    this.editingRow = row.add(this.studentsTable[0].rows[this.quickEditRow - 2]).add(this.totalsTable[0].rows[this.quickEditRow - 2]);
    cmLinksCell = this.cmLinks.eq(this.quickEditCell).parent();
    dayCell = cmLinksCell.parent().prev().find("th").eq(this.quickEditCell);
    this.editingHead = cmLinksCell.add(dayCell);
    this.quickEditCmId = parseInt(this.cmLinks.eq(this.editingCell.index()).data("cm-id"));
    if (this.journalModel.editLimit.limitPastEditHomeAssigns) {
      this.quickEditCmInfo = _.findWhere(this.journalModel.classMeeting, {
        id: this.quickEditCmId
      });
    }
    this.quickEditStudentId = parseInt($("table.journal-student").find("tr").eq(cell.parent().index() - 2).find("td.student-name").data("student-id"));
    this.assigns = _.findWhere(this.journalModel.classMeeting, {
      id: this.quickEditCmId
    }).assignments;
    this.quickEditExistsAssign = _.findWhere(this.assigns, {
      typeId: this.quickEditAssignTypeId
    });
    if (this.quickEditExistsAssign) {
      this.markContainerId = this.quickEditExistsAssign.id;
    } else {
      this.markContainerId = "unsaved-" + this.quickEditAssignTypeId;
    }
    this.markContainer = this.editingCell.find("span[data-assign-id='" + this.markContainerId + "']");
    return this.existsMark = this.markContainer.text();
  };

  QuickEditController.prototype.showQuickEditPopup = function() {
    this.editingCell.addClass("quick-edit-cell");
    this.editingRow.addClass("quick-edit-row");
    this.editingHead.addClass("quick-edit-head");
    this.editingCell.popover("show");
    this.quickEditPopup = $(".quick-edit-marks-panel");
    if (this.existsMark) {
      return this.quickEditPopup.find("button[data-mark=" + this.existsMark + "]").addClass("active");
    }
  };

  QuickEditController.prototype.toggleQuickEditButtons = function(state) {
    return this.buttonPanel.find("button").each(function() {
      $(this).prop("disabled", state);
      if (state) {
        return $(this).removeAttr("disabled");
      } else {
        return $(this).attr("disabled", "disabled");
      }
    });
  };

  QuickEditController.prototype.setMark = function(mark) {
    var filterFunc, markView, ref, ref1, result;
    markView = mark;
    if (!this.quickEditExistsAssign && this.quickEditAssignTypeId === gradeConstants.assignmentTypes.homeWork && this.quickEditCmInfo) {
      if (this.quickEditCmInfo.date < new Date()) {
        $.show.error("Запрещено назначать домашнее задание на сегодняшний и прошедшие уроки");
        return;
      }
    }
    result = {
      cmId: this.quickEditCmId,
      assignId: (ref = this.quickEditExistsAssign) != null ? ref.id : void 0,
      assignTypeId: this.quickEditAssignTypeId,
      studentId: this.quickEditStudentId,
      mark: mark
    };
    if (mark === 0) {
      result.mark = null;
      result.dutyMark = true;
      markView = "&#183;";
    }
    if (mark === -1) {
      markView = "";
      result.mark = null;
    }
    filterFunc = function(res) {
      if (res.cmId !== result.cmId || res.studentId !== result.studentId) {
        return false;
      }
      return res.assignTypeId === result.assignTypeId || (res.assignId && res.assignId === result.assignId);
    };
    this.quickEditData.results = _.reject(this.quickEditData.results, filterFunc);
    this.quickEditData.results.push(result);
    if (!((ref1 = this.markContainer) != null ? ref1.length : void 0)) {
      if (mark === -1) {
        return;
      }
      this.markContainer = $("<span data-assign-id='" + this.markContainerId + "'></span>");
      this.markContainer.appendTo(this.editingCell);
    }
    window.dataWereChanged = true;
    this.toggleQuickEditButtons(true);
    this.markContainer.addClass("unsaved");
    this.markContainer.html(markView);
    return $(document).trigger('journal-width-changes.journal');
  };

  QuickEditController.prototype.save = function() {
    if (!window.dataWereChanged) {
      return;
    }
    if (window.isButtonsLock()) {
      return;
    }
    return jsSubmit({
      data: this.quickEditData,
      action: "/webapi/grade/journal/quickedit",
      method: "POST",
      dataType: "json",
      contentType: 'application/json',
      nocache: true,
      showProcessing: true
    }).then((function(_this) {
      return function() {
        _this.toggleQuickEditButtons(false);
        return _this.onSaveHandler();
      };
    })(this));
  };

  QuickEditController.prototype.cancel = function() {
    if (!window.dataWereChanged) {
      return;
    }
    this.toggleQuickEditButtons(false);
    return this.onSaveHandler();
  };

  return QuickEditController;

})();

module.exports = QuickEditController;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var ResourceLoader;

ResourceLoader = (function() {
  var cache;

  cache = {
    studentList: {},
    assignmentTypes: {},
    attendanceReasons: {},
    termInfo: {},
    subjectPlan: {},
    subjectPlanStudyInfo: {}
  };

  function ResourceLoader() {
    this.getCacheKey = function(filterData) {
      return JSON.stringify(filterData || "*");
    };
    this.checkCache = (function(_this) {
      return function(namespace, filterData) {
        var cachedData, key;
        key = _this.getCacheKey(filterData);
        cachedData = cache[namespace][key];
        if (cachedData) {
          return cachedData;
        }
        return null;
      };
    })(this);
    this.putCache = (function(_this) {
      return function(namespace, filterData, data) {
        var key;
        key = _this.getCacheKey(filterData);
        return cache[namespace][key] = data;
      };
    })(this);
  }

  ResourceLoader.prototype.getStudentList = function(filterData) {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('studentList', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/grade/studentList",
      method: "GET",
      showProcessing: true,
      data: filterData
    }).then((function(_this) {
      return function(response) {
        _this.putCache('studentList', filterData, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getAssignTypes = function(all) {
    var cachedData, queryData, ret;
    ret = $.Deferred();
    all = all || false;
    cachedData = this.checkCache('assignmentTypes');
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    queryData = {
      all: all
    };
    jsSubmit({
      action: "/webapi/grade/assignment/types",
      method: "GET",
      queryData: queryData
    }).then((function(_this) {
      return function(response) {
        _this.putCache('assignmentTypes', null, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getTermInfo = function(filterData) {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('termInfo', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/terms/" + filterData.termId,
      method: "GET"
    }).then((function(_this) {
      return function(response) {
        if (response) {
          _this.putCache('termInfo', filterData, response);
        }
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getAttendanceReasons = function() {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('attendanceReasons');
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/grade/attendance/reasons?lng=" + appContext.language,
      method: "GET"
    }).then((function(_this) {
      return function(response) {
        _this.putCache('attendanceReasons', null, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getSubjectPlan = function(filterData) {
    var cachedData, ref, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('subjectPlan', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/subjectplans/getForSubjectGroup",
      method: "GET",
      data: {
        sgId: (ref = filterData.sgId) != null ? ref : filterData.SGID
      }
    }).then((function(_this) {
      return function(response) {
        _.each(response.lessons, function(lesson) {
          lesson.studied = lesson.hours === lesson.hoursStudied;
          if (lesson.lastStudyDay) {
            lesson.lastStudyDay = Date.parse(lesson.lastStudyDay);
          }
        });
        _this.putCache('subjectPlan', filterData, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  ResourceLoader.prototype.getSubjectPlanStudyInfo = function(filterData) {
    var cachedData, ret;
    ret = $.Deferred();
    cachedData = this.checkCache('subjectPlanStudyInfo', filterData);
    if (cachedData) {
      ret.resolve(cachedData);
      return ret.promise();
    }
    jsSubmit({
      action: "/webapi/subjectplans/studyinfo",
      method: "GET",
      data: filterData
    }).then((function(_this) {
      return function(response) {
        _this.putCache('subjectPlanStudyInfo', filterData, response);
        return ret.resolve(response);
      };
    })(this));
    return ret.promise();
  };

  return ResourceLoader;

})();

module.exports = new ResourceLoader;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var JournalExporter;

JournalExporter = (function() {
  var printAttendanceMarks;

  function JournalExporter() {
    this.journal_students = $(".journal-student");
    this.journal_total = $(".journal-total");
    this.journal_marks = $(".journal-marks");
    this.prepareLegend = function() {
      var legends, report;
      report = $('#report');
      if (!report.length) {
        legends = $('div.legend');
        legends.each(function() {});
        if (!$(this).hasClass('print-block')) {
          return $(this).addClass('print-block');
        }
      }
    };
    this.getPreparedHtml = function() {
      var curTr, legend, paintRowCells, paintRowTotalsCells, printHtml, tableJournal, tableMarks, tableMarksTrs, tableStudents, tableStudentsTrs, tableTotals, tableTotalsTrs;
      this.prepareLegend();
      tableStudents = this.journal_students.clone();
      tableTotals = this.journal_total.clone();
      tableMarks = this.journal_marks.clone();
      tableJournal = $('<table class="table-print"/>');
      paintRowCells = function(tableSelector, tableClone) {
        var cells;
        cells = tableClone.find('td');
        return $(tableSelector).find('td').each(function(index, item) {
          var cellColor;
          cellColor = $(item).css('background-color');
          cells.eq(index).css('background-color', cellColor);
          return cells.eq(index).removeClass().addClass('cell-num');
        });
      };
      paintRowTotalsCells = function(tableSelector, tableClone) {
        var cells;
        cells = tableClone.find('td');
        return $(tableSelector).find('td').each(function(index, item) {
          var cellColor;
          cellColor = $(item).css('background-color');
          return cells.eq(index).css('background-color', cellColor);
        });
      };
      paintRowCells(this.journal_total, tableTotals);
      paintRowTotalsCells(this.journal_marks, tableMarks);
      tableStudentsTrs = tableStudents.find('tr');
      tableTotalsTrs = tableTotals.find('tr');
      tableMarksTrs = tableMarks.find('tr');
      curTr = 0;
      tableStudentsTrs.each(function(index, studTr) {
        var jrnlTr, studNameTd;
        jrnlTr = $('<tr/>');
        if (index === 0) {
          $(studTr).find('th').attr('rowspan', '2').appendTo(jrnlTr);
          tableTotalsTrs.eq(curTr).find('th').appendTo(jrnlTr);
          tableMarksTrs.eq(index).find('th').attr('rowspan', '2').appendTo(jrnlTr);
          curTr = curTr + 1;
        } else {
          studNameTd = '<td class="cell-text">' + $(studTr).find('td').text() + '</td>';
          $(jrnlTr).append(studNameTd);
          tableTotalsTrs.eq(curTr).find('td').appendTo(jrnlTr);
          tableMarksTrs.eq(index).find('td').appendTo(jrnlTr);
        }
        jrnlTr.appendTo(tableJournal);
        if (index === 0) {
          tableTotalsTrs.eq(curTr).appendTo(tableJournal);
          curTr = curTr + 1;
        }
        return curTr = curTr + 1;
      });
      legend = $('span.legend-description:contains("Срезовая работа")').parent().parent().parent().clone();
      printHtml = tableJournal.wrap('<div>').parent();
      if (legend) {
        legend.appendTo(printHtml);
      }
      return printHtml;
    };
  }

  printAttendanceMarks = function(printBlock, copyBlock) {
    return copyBlock.find('table.table-print td span.att-mark').each(function() {
      var val;
      val = $(this).text();
      val = val.replace(/(^|\s)УП(\s|$)/g, '$1Н$2').replace(/(^|\s)НП(\s|$)/g, '$1Н$2').replace(/(^|\s)ОТ(\s|$)/g, '$1Н$2').replace(/(^|\s)ОП(\s|$)/g, '$1$2').replace(/(^|\s)Б(\s|$)/g, '$1Н$2').replace(/(^|\s)ОСВ(\s|$)/g, '$1осв$2');
      return $(this).text(' ' + val);
    });
  };

  JournalExporter.prototype.printJournal = function() {
    this.getPreparedHtml().printUtils().toPrint({
      viewHeader: true,
      processingFunc: [printAttendanceMarks]
    });
  };

  JournalExporter.prototype.exportJournal = function() {
    this.getPreparedHtml().printUtils().toExcel({
      viewHeader: true,
      processingFunc: [printAttendanceMarks]
    });
  };

  return JournalExporter;

})();

module.exports = JournalExporter;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var editJournalCtrl;

editJournalCtrl = (function() {
  var _getPerformanceData, _initTopButons, _prepareAssign, _prepareLessons, _prepareRefs, _setAssignLaName, assignAnswersCtrl, assignCtrl, commentsCtrl, ctx, data, empty_block, gradeConstants, layoutManager, resourceLoader, settings, templateManager;

  data = null;

  templateManager = new (__webpack_require__(12));

  gradeConstants = __webpack_require__(6);

  layoutManager = __webpack_require__(13);

  resourceLoader = __webpack_require__(9);

  assignCtrl = __webpack_require__(14);

  commentsCtrl = __webpack_require__(16);

  assignAnswersCtrl = __webpack_require__(17);

  settings = {
    modeTKR: false,
    moduleQA: false,
    noKTP: true,
    createTestPlanAllowed: false,
    la: {
      activities: null,
      coursesProducts: null
    },
    refs: {
      assignmentTypes: [],
      assignmentTypesIndex: {},
      attendanceReasons: null,
      studentsWithIndividualEducForm: {}
    },
    subjectPlan: {
      cached: false,
      lesson: null
    }
  };

  ctx = {};

  empty_block = '';

  _prepareLessons = function() {
    var temp;
    temp = $.Deferred();
    if (settings.subjectPlan.cached && settings.subjectPlan.sgId === ctx.subjectGroupId) {
      temp.resolve(settings.subjectPlan.lessons);
      return temp.promise();
    }
    resourceLoader.getSubjectPlan({
      sgId: ctx.subjectGroupId
    }).then(function(subjectPlanInfo) {
      var ref;
      settings.subjectPlan = $.extend({
        cached: false,
        lessonId: (ref = settings.subjectPlan.lesson) != null ? ref.id : void 0
      }, {
        sgId: ctx.subjectGroupId,
        subjectPlanId: subjectPlanInfo.subjectPlanId,
        noSubjectPlan: !subjectPlanInfo.subjectPlanId,
        canAssign: subjectPlanInfo.variantsExists,
        lessons: subjectPlanInfo.lessons,
        cached: true
      });
      return temp.resolve(subjectPlanInfo.lessons);
    });
    return temp.promise();
  };

  editJournalCtrl.prototype._setColNames = function() {
    var existNonHomeAssign;
    if (!this.assignsWitResults.length) {
      $("#assignments-header-many").addClass("hidden");
      $("#assignments-header-no").removeClass("hidden");
      return $("#assignments-header-new").addClass("hidden");
    } else {
      existNonHomeAssign = _.some(this.assignsWitResults, function(assign) {
        return assign.typeId !== gradeConstants.assignmentTypes.homeWork;
      });
      if (existNonHomeAssign) {
        $("#assignments-header-many").removeClass("hidden");
        $("#assignments-header-no").addClass("hidden");
        return $("#assignments-header-new").removeClass("hidden");
      } else {
        $("#assignments-header-many").addClass("hidden");
        $("#assignments-header-no").removeClass("hidden");
        return $("#assignments-header-new").addClass("hidden");
      }
    }
  };

  editJournalCtrl.prototype._setAttendance = function(elem) {
    var grades, index, reason;
    grades = $("input[name=" + elem.name + "]", this.container);
    index = grades.index(elem);
    reason = $("select[name=REASON]", this.container).eq(index);
    return reason.val(gradeConstants.attendanceReasons.missed);
  };

  editJournalCtrl.prototype._navigateInputs = function(ctx) {
    var ctrl, target;
    ctrl = this;
    if (ctx) {
      target = $("input[name^=G_]:enabled", ctx);
    } else {
      target = $("input[name^=G_]:enabled");
    }
    return target.navigateInputs({
      getCellInputOptions: function(elem) {
        return {
          maxMark: settings.markSettings.maxMark,
          minMark: settings.markSettings.minMark,
          maxLength: (settings.markSettings.maxMark + "").length
        };
      },
      specKeys: [48, 96],
      getNextInput: function(elem, elemSelector, step, x) {
        var column, container, index, inputIndex, nextElem, nextElemContainer, nextIndex, sequence;
        column = $(elem).closest(".assignment-column");
        container = column.closest(".editjournal");
        if (x) {
          inputIndex = $(elemSelector, column).index(elem);
          sequence = $(".assignment-column", container);
          index = sequence.index(column);
          nextIndex = index + step;
          nextElemContainer = sequence.eq(nextIndex);
          if (nextElemContainer && nextElemContainer.length === 1) {
            nextElem = $(elemSelector, nextElemContainer).eq(inputIndex);
          }
        } else {
          sequence = $(elemSelector, container);
          index = sequence.index(elem);
          nextIndex = index + step;
          nextElem = sequence.eq(nextIndex);
        }
        if (nextElem) {
          return nextElem[0];
        }
      },
      specKeysHandler: function(elem, key) {
        ctrl._setAttendance(elem);
        return true;
      }
    });
  };

  _setAssignLaName = function(assign) {
    var ref, ref1;
    if (!assign.activityId || assign.activityId === gradeConstants.activities.manual) {
      return;
    }
    if (assign.productId) {
      assign.laName = (ref = settings.la.coursesProducts[assign.productId]) != null ? ref.name : void 0;
    } else {
      assign.laName = (ref1 = settings.la.activities[assign.activityId]) != null ? ref1.name : void 0;
    }
    if (!assign.laName) {
      return assign.laName = language.Generic.Grade.kActivityRemoved;
    }
  };

  _prepareRefs = function() {
    var loadActivities, loadAssignTypes, loadAttendanceReasons, loadProducts;
    loadAssignTypes = resourceLoader.getAssignTypes().then(function(assignmentTypes) {
      settings.refs.assignmentTypes = assignmentTypes;
      return settings.refs.assignmentTypesIndex = _.indexBy(settings.refs.assignmentTypes, "id");
    });
    loadAttendanceReasons = resourceLoader.getAttendanceReasons().then(function(reasons) {
      return settings.refs.attendanceReasons = reasons;
    });
    if (settings.la.activities !== null && settings.la.coursesProducts !== null) {
      return $.when(loadAssignTypes, loadAttendanceReasons);
    }
    loadActivities = jsSubmit({
      action: "/webapi/grade/activities",
      method: 'GET'
    }).then(function(activities) {
      return settings.la.activities = _.indexBy(activities, "id");
    });
    loadProducts = jsSubmit({
      action: "/webapi/grade/products",
      method: 'GET'
    }).then(function(coursesProducts) {
      return settings.la.coursesProducts = _.indexBy(coursesProducts, "id");
    });
    return $.when(loadAssignTypes, loadAttendanceReasons, loadActivities, loadProducts);
  };

  _getPerformanceData = function(container) {
    return _.chain($('input, select', container).serializeArray()).groupBy(function(item) {
      return item.name;
    }).mapObject(function(arrFormParamObj) {
      return _.map(arrFormParamObj, function(formParamObj) {
        return formParamObj.value;
      });
    }).value();
  };

  _prepareAssign = function(assign) {
    if (settings.moduleQA && _.contains(gradeConstants.testPlansTypes, assign.typeId)) {
      assign.showTestPlan = true;
    }
    return assign.results = _.map(this.students, function(student) {
      return {
        studentId: student.studentId,
        result: null,
        readonly: student.free
      };
    });
  };

  _initTopButons = function() {
    var exitHomeAssign, hideHomeAssignBtn;
    if (this.students.length > 10) {
      $(".buttons-panel-left > .add-assign-btn").addClass("hide");
      return $(".buttons-panel-left > .add-homeAssign-btn").addClass("hide");
    } else {
      $(".buttons-panel-left > .add-assign-btn").removeClass("hide");
      exitHomeAssign = _.some(this.assignsWitResults, function(assign) {
        return assign.typeId === gradeConstants.assignmentTypes.homeWork;
      });
      hideHomeAssignBtn = settings.editLimit.restrictAddHomeAssign || exitHomeAssign;
      return $(".buttons-panel-left > .add-homeAssign-btn").toggleClass("hide", hideHomeAssignBtn);
    }
  };

  function editJournalCtrl(container1, classMeetings, _ctx, _settings) {
    var assignAnswerHandler, assignCtxBtnHandler, changeHandler, clickAssignAnswer, clickComment, commentHandler, ctrl;
    this.container = container1;
    settings = $.extend({}, settings, _settings);
    ctx = $.extend({}, ctx, _ctx);
    this.classMeetings = _.chain(classMeetings).map(function(cm) {
      return {
        id: cm.id,
        name: dateUtils.date2str(cm.date),
        lessonId: cm.lessonId,
        date: cm.date,
        readOnly: cm.readOnly,
        selected: cm.id === ctx.classMeetingId
      };
    }).value();
    Handlebars.registerPartial("assignCol", templateManager.assignColTpl);
    Handlebars.registerPartial("attendanceCol", templateManager.attendanceColTpl);
    Handlebars.registerPartial("addCommonAssign", templateManager.addCommonAssignTpl);
    Handlebars.registerPartial("assignTitle", templateManager.assignTitleTpl);
    Handlebars.registerPartial("homeAssignEmptyCol", templateManager.homeAssignEmptyColTpl);
    Handlebars.registerPartial("homeAssignCol", templateManager.homeAssignColTpl);
    Handlebars.registerPartial("addHomeAssignCmn", templateManager.addHomeAssignCmnTpl);
    Handlebars.registerPartial("cmSelect", templateManager.cmSelectTpl);
    Handlebars.registerPartial("lessonSelect", templateManager.lessonSelectTpl);
    changeHandler = (function(_this) {
      return function() {
        console.log("changed");
        dataChanged();
        return _this.setFlagSaveJournal();
      };
    })(this);
    commentHandler = (function(_this) {
      return function(el) {
        var assignId, readonly, studentId;
        assignId = $(el).data("assignid");
        studentId = $(el).data("studentid");
        readonly = $(el).is(".readonly");
        if (readonly) {
          return;
        }
        return _this.setComment(studentId, assignId).then(function(comment) {
          if (comment) {
            $(el).removeClass("icon-comment-alt");
            $(el).addClass("icon-comment commented");
            return $(el).attr("title", comment);
          } else {
            $(el).removeClass("commented readed icon-comment");
            $(el).addClass("icon-comment-alt");
            return $(el).attr("title", "");
          }
        });
      };
    })(this);
    assignAnswerHandler = (function(_this) {
      return function(el) {
        var answerInfo, assignId, assignInfo, student, studentId;
        assignId = $(el).data("assignid");
        studentId = $(el).data("studentid");
        student = _.find(_this.students, function(student) {
          return student.studentId === studentId;
        });
        assignInfo = _.find(_this.assignsWitResults, function(ar) {
          return ar.id === assignId;
        });
        answerInfo = _.find(assignInfo.answers, function(a) {
          return a.studentId === studentId;
        });
        return _this.assignAnswersCtrl.displayAnswer(student, answerInfo);
      };
    })(this);
    ctrl = this;
    this.container.off(".edit-journal");
    $(document).off(".edit-journal");
    clickComment = function() {
      return commentHandler(this);
    };
    clickAssignAnswer = function() {
      return assignAnswerHandler(this);
    };
    this.container.on("change.edit-journal", "input[name^=G_]", changeHandler);
    this.container.on("click.edit-journal", "i.comment-btn:not(.readonly)", _.debounce(clickComment, 500, true));
    this.container.on("click.edit-journal", "i.answer-btn", _.debounce(clickAssignAnswer, 500, true));
    this.container.on("change.edit-journal", "input[name^=MAll_]", function() {
      return ctrl.clickCheckAll(this);
    });
    this.container.on("change.edit-journal", "input[name^=M_]", function() {
      return ctrl.clickCheck(this);
    });
    this.container.on("change.edit-journal", "select[name=REASON]", changeHandler);
    $(document).on("click.edit-journal", "a.open-testplan-link", function(evt) {
      var assignId;
      assignId = parseInt($(evt.currentTarget).data("assignid"));
      return ctrl.openPlan(assignId);
    });
    $(document).on("click.edit-journal", "a.go-edit-planner-link", function() {
      return ctrl.goEditPlanner();
    });
    assignCtxBtnHandler = function(handler) {
      var assignHandler;
      assignHandler = function(evt) {
        var assignId, ctxBtnsBlock;
        ctxBtnsBlock = $(evt.currentTarget).closest(".ctx-btns-icons");
        assignId = parseInt(ctxBtnsBlock.data("assignid"));
        handler(assignId, ctxBtnsBlock);
      };
      return _.debounce(assignHandler, 500, true);
    };
    this.container.on("click.edit-journal", "div.delete.assign-btn", assignCtxBtnHandler(function(assignId) {
      return ctrl["delete"](assignId);
    }));
    this.container.on("click.edit-journal", "div.test-plan.assign-btn", assignCtxBtnHandler(function(assignId) {
      return ctrl.goTestPlan(assignId);
    }));
    this.container.on("click.edit-journal", "div.edit-assign.assign-btn", assignCtxBtnHandler(function(assignId, ctxBtnsBlock) {
      var productId;
      productId = ctxBtnsBlock.data("productid");
      return ctrl.editAssign(assignId, productId);
    }));
    $(document.body).off(".edit-journal");
    $(document.body).on("click.edit-journal", "#set-lesson-btn", (function(_this) {
      return function() {
        return ctrl.setLesson();
      };
    })(this));
    $(document.body).on("click.edit-journal", "#assign-variant-link", function() {
      return ctrl.goAssignVariant();
    });
    $(document.body).on("change.edit-journal", "input[name=AN]", changeHandler);
    $(document.body).on("change.edit-journal", "select[name=AType]", function() {
      return ctrl.changeAssignType();
    });
    $(document.body).on("click.edit-journal", "button.save-journal-btn", function() {
      return ctrl.save();
    });
    $(document.body).on("click.edit-journal", "button.save-journal-with-return-btn", function() {
      return ctrl.saveAndBack();
    });
    $(document.body).on("click.edit-journal", ".add-assign-btn", function() {
      return ctrl.addAssign();
    });
    $(document.body).on("click.edit-journal", ".add-homeAssign-btn", function() {
      return ctrl.addHomeAssign();
    });
    $(document.body).on("click.edit-journal", "button.add-next-homeAssign-btn", function() {
      return ctrl.addNextHomeAssign();
    });
    Handlebars.registerHelper('selected', function(selValue, currValue) {
      if (selValue === currValue) {
        return " selected";
      } else {
        return "";
      }
    });
    Handlebars.registerHelper('IndividualEduc', function(studentId) {
      if (settings.refs.studentsWithIndividualEducForm[studentId]) {
        return "individual-educ";
      } else {
        return "";
      }
    });
    $(document).bind('editJournalShow', (function(_this) {
      return function() {
        var counter, err, j, len, metrikaUrl, ref, results;
        _this.ejLayoutManager = new layoutManager($(".assignments-block"));
        _this.ejLayoutManager.init();
        try {
          metrikaUrl = window.location.href.toLowerCase();
          metrikaUrl = metrikaUrl.substring(0, metrikaUrl.indexOf("journal.asp"));
          metrikaUrl = metrikaUrl + "editjournal";
          ref = appContext.yaCounters;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            counter = ref[j];
            results.push(counter.hit(metrikaUrl));
          }
          return results;
        } catch (error) {
          err = error;
          return console.log(err);
        }
      };
    })(this));
  }

  editJournalCtrl.prototype.load = function(cmid) {
    var cmInfo, ctrl, def, hoursPassed, prepareRefs, prepareStudents, prevCmId, ret;
    cmInfo = _.findWhere(this.classMeetings, {
      id: cmid
    });
    if (!cmInfo) {
      $.show.error("Ошибка доступа");
      throw "Ошибка доступа к " + cmid;
    }
    prevCmId = ctx.classMeetingId;
    ctx.classMeetingId = cmid;
    ctx.classMeetingDay = cmInfo.date;
    hoursPassed = moment(new Date()).diff(moment(ctx.classMeetingDay), 'hours');
    settings.editLimit.restrictAddHomeAssign = settings.editLimit.limitPastEditHomeAssigns && hoursPassed > 0;
    def = $.Deferred();
    ret = def.promise();
    ctrl = this;
    this.assignAnswersCtrl = new assignAnswersCtrl(cmid);
    ret.fail(function() {
      return ctx.classMeetingId = prevCmId;
    });
    prepareStudents = resourceLoader.getStudentList({
      sgid: ctx.subjectGroupId,
      termId: ctx.termId,
      extraActivity: ctx.extraActivity
    }).then((function(_this) {
      return function(students) {
        return ctrl.students = _.map(students, function(student, index) {
          student.studentId = student.id;
          student.name = student.fullName;
          if (student.free) {
            student.name += " " + language.Generic.LearnApp.kDeleted;
          }
          student.num = index + 1;
          return student;
        });
      };
    })(this));
    prepareRefs = _prepareRefs();
    $.when(prepareStudents, prepareRefs).then((function(_this) {
      return function() {
        return jsSubmit({
          action: "/webapi/grade/journal/edit",
          method: "GET",
          showProcessing: true,
          data: {
            cmid: ctx.classMeetingId,
            sgId: ctx.subjectGroupId,
            termId: ctx.termId
          }
        }).fail(function(response) {
          return def.reject();
        }).then(function(response) {
          var ref;
          data = response;
          settings.moduleQA = response.moduleQA;
          _this.attendance = _.map(ctrl.students, function(student) {
            var mapRes;
            mapRes = _.find(data.attendance, function(att) {
              return att.studentId === student.id;
            }) || {
              studentId: student.id,
              reason: null
            };
            mapRes.readonly = student.free;
            return mapRes;
          });
          _this.assignsWitResults = _.map(data.assignments, function(assign) {
            var typeInfo;
            if (assign.answers && assign.answers.length) {
              _.each(assign.answers, function(aa) {
                var answerDate;
                if (aa.text) {
                  answerDate = new Date(aa.text.answerDate);
                  aa.text.answerDate = answerDate;
                }
                if (aa.files && aa.files.length) {
                  return _.each(aa.files, function(afr) {
                    var attachmentDate;
                    attachmentDate = new Date(afr.attachmentDate);
                    return afr.attachmentDate = dateUtils.date2str(attachmentDate) + " " + dateUtils.time2str(attachmentDate);
                  });
                }
              });
            }
            assign.results = _.map(ctrl.students, function(student) {
              var mapRes;
              mapRes = _.find(assign.results, function(res) {
                return res.studentId === student.id;
              }) || {
                studentId: student.id
              };
              mapRes.result = mapRes.mark;
              mapRes.marked = mapRes.duty || (mapRes.result ? true : false);
              mapRes.comment = _.find(assign.comments, function(com) {
                return com.studentId === student.id;
              });
              mapRes.answer = _.find(assign.answers, function(a) {
                return a.studentId === student.id;
              });
              mapRes.readonly = student.free;
              return mapRes;
            });
            typeInfo = settings.refs.assignmentTypesIndex[assign.typeId];
            if (typeInfo) {
              if (typeInfo.id === gradeConstants.assignmentTypes.DKR) {
                assign.typeName = typeInfo.abbr;
              } else {
                assign.typeName = typeInfo.name;
              }
            } else {
              console.log("неизвестный тип задания " + assign);
            }
            _setAssignLaName(assign);
            if (settings.moduleQA && _.contains(gradeConstants.testPlansTypes, assign.typeId)) {
              assign.showTestPlan = true;
            }
            return assign;
          });
          settings.refs.studentsWithIndividualEducForm = _.indexBy(_.filter(ctrl.students, function(student) {
            return student.individualEduc;
          }), "id");
          settings.subjectPlan = $.extend({}, settings.subjectPlan, {
            lesson: data.lesson,
            initLessonId: ((ref = data.lesson) != null ? ref.id : void 0) || -1
          });
          if (data.lesson) {
            settings.subjectPlan.noSubjectPlan = false;
            def.resolve();
          } else {
            _prepareLessons().then(function() {
              return def.resolve();
            });
          }
        });
      };
    })(this));
    return ret;
  };

  editJournalCtrl.prototype.close = function() {
    if (this.ejLayoutManager) {
      this.ejLayoutManager.destroy();
    }
    return this.ejLayoutManager = null;
  };

  editJournalCtrl.prototype.display = function() {
    var attendanceReasons, ctrl, filterCms, filtersHtml, filtersModel, filtersTemplate, freeStudentsIdx, homeAssignment, model, otherAssignments, template;
    ctrl = this;
    homeAssignment = _.find(this.assignsWitResults, function(assign) {
      return assign.typeId === gradeConstants.assignmentTypes.homeWork;
    });
    otherAssignments = _.without(this.assignsWitResults, homeAssignment);
    attendanceReasons = settings.refs.attendanceReasons;
    if (!settings.editLimit.attendanceReleasedMarkAllowed) {
      attendanceReasons = _.reject(attendanceReasons, function(reason) {
        return reason.mark === gradeConstants.attendanceReasons.released;
      });
    }
    model = {
      language: language,
      students: this.students,
      assignments: otherAssignments,
      homeAssignment: homeAssignment,
      attendance: this.attendance,
      attendanceReasons: attendanceReasons,
      restrictAddHomeAssign: settings.editLimit.restrictAddHomeAssign,
      marksLength: (settings.markSettings.maxMark + "").length,
      constants: gradeConstants,
      extraActivity: ctx.extraActivity
    };
    _initTopButons.apply(ctrl);
    template = Handlebars.compile(templateManager.editJournalTpl);
    this.container.html(template(model));
    freeStudentsIdx = _.chain(this.students).filter(function(student) {
      return student.free;
    }).indexBy("id").value();
    _.each(this.assignsWitResults, function(assign) {
      if (_.every(assign.results, function(result) {
        return result.marked || freeStudentsIdx[result.studentId];
      })) {
        return $("input[name=MAll_" + assign.id + "]").prop('checked', true);
      }
    });
    filterCms = _.chain(this.classMeetings).filter(function(cm) {
      return !cm.readOnly;
    }).each(function(cm) {
      return cm.selected = cm.id === ctx.classMeetingId;
    }).value();
    filtersModel = {
      language: language,
      subjectGroupName: ctx.subjectGroupName,
      termName: ctx.termName,
      classMeetings: filterCms,
      subjectPlan: settings.subjectPlan
    };
    filtersTemplate = Handlebars.compile(templateManager.filterTpl);
    filtersHtml = filtersTemplate(filtersModel);
    $('#state-edit .filters-panel').html(filtersHtml);
    $('#prev-cm').click(function() {
      return ctrl.changeCm(-1);
    });
    $('#next-cm').click(function() {
      return ctrl.changeCm(1);
    });
    $('select[name="CMID"]').change(function() {
      return ctrl.changeCm(0);
    });
    this._navigateInputs();
    this.performanceChanged = false;
    return $(document).trigger('editJournalShow');
  };

  editJournalCtrl.prototype.changeAssignType = function() {
    var assignType;
    assignType = $('*[name="AType"]').val();
    if (parseInt(assignType) === gradeConstants.assignmentTypes.DKR) {
      jsSubmit({
        action: '/webapi/grade/diagnosticWorks',
        data: {
          cmid: ctx.classMeetingId
        },
        showProcessing: true,
        method: 'GET',
        onSuccess: function(response) {
          var model, template;
          template = Handlebars.compile(templateManager.diagnosticWorkTpl);
          model = {
            assignmentTypesChoise: true,
            variants: response,
            typeId: null,
            language: language
          };
          return $('#diagnosticWork').append(template(model));
        }
      });
      $('#diagnosticWork').show();
    } else {
      $('#diagnosticWork').hide();
      $('#diagnosticWork').children().detach();
    }
  };

  editJournalCtrl.prototype.setLesson = function() {
    var ctrl, templateCompiled;
    ctrl = this;
    templateCompiled = Handlebars.compile(templateManager.setLessonTpl);
    return _prepareLessons().then(function(lessons) {
      var lesson, lessonId, lessonSelect, model, modelMessage, selectLesson, suggestedLesson, templateCurriculumNotFilled, templateLesson;
      if (lessons.length === 0) {
        templateCurriculumNotFilled = Handlebars.compile(templateManager.messageCurriculumNotFilled);
        modelMessage = {
          language: language
        };
        $.show.alert(templateCurriculumNotFilled(modelMessage));
        return;
      }
      if (settings.subjectPlan.lesson) {
        lessonId = settings.subjectPlan.lesson.id;
        lesson = _.findWhere(lessons, {
          id: lessonId
        });
      } else {
        lesson = _.first(lessons);
        lessonId = lesson.id;
        suggestedLesson = _.find(lessons, function(lesson) {
          return lesson.hours > lesson.hoursStudied;
        });
      }
      model = {
        lessons: lessons,
        language: language,
        suggestedLessonId: lessonId
      };
      templateLesson = $(templateCompiled(model));
      $('#lesson-theme-filter-row .form-control').replaceWith(templateLesson);
      lessonSelect = $('#lesson-theme-filter-row select.form-control');
      selectLesson = function() {
        lessonId = parseInt(lessonSelect.val());
        lesson = _.findWhere(lessons, {
          id: lessonId
        });
        settings.subjectPlan.lesson = lesson;
        ctrl.lessonChanged = true;
        return dataChanged();
      };
      if (suggestedLesson) {
        lessonSelect.val(suggestedLesson.id);
        selectLesson();
      }
      return lessonSelect.change(selectLesson);
    });
  };

  editJournalCtrl.prototype.setComment = function(studentId, assignId) {
    var commCtrl, commentAssign, ctrl, currentComment, promise, studentAssignComment;
    ctrl = this;
    commCtrl = new commentsCtrl(ctx.classMeetingId, assignId, studentId);
    commentAssign = _.find(ctrl.assignsWitResults, function(assign) {
      return assign.id === assignId;
    });
    commentAssign.comments = commentAssign.comments || [];
    studentAssignComment = _.find(commentAssign.comments, function(c) {
      return c.studentId === studentId;
    });
    if (!studentAssignComment) {
      studentAssignComment = {
        studentId: studentId
      };
      commentAssign.comments.push(studentAssignComment);
    }
    currentComment = studentAssignComment != null ? studentAssignComment.text : void 0;
    promise = commCtrl.setComment(currentComment);
    promise.then(function(newComment) {
      return studentAssignComment.text = newComment;
    });
    return promise;
  };

  editJournalCtrl.prototype.addHomeAssign = function() {
    var createCtrl, ctrl, getPerfData;
    ctrl = this;
    getPerfData = function() {
      if (!ctrl.performanceChanged) {
        return {};
      }
      data = _getPerformanceData(ctrl.container);
      data.saveJournal = 1;
      return data;
    };
    createCtrl = new assignCtrl(ctx, null, ctrl.classMeetings, settings, getPerfData);
    return createCtrl.addHomeAssign().then(function(newAssign) {
      var ref, ref1, template;
      ctrl.reinitLesson(((ref = settings.subjectPlan) != null ? (ref1 = ref.lesson) != null ? ref1.id : void 0 : void 0) || -1);
      _prepareAssign.apply(ctrl, [newAssign]);
      ctrl.assignsWitResults.push(newAssign);
      _initTopButons.apply(ctrl);
      template = Handlebars.compile(templateManager.homeAssignColTpl);
      empty_block = $(".empty-block");
      $("#home-assignment-column").empty();
      $("#home-assignment-column").append(template($.extend({}, newAssign, {
        language: language
      })));
      ctrl._navigateInputs($("#home-assignment-column"));
      ctrl._setColNames();
      $("#home-assign-add-button").hide();
      return $(document).trigger('assignmentsColsChanged');
    });
  };

  editJournalCtrl.prototype.addAssign = function() {
    var createCtrl, ctrl, getPerfData;
    ctrl = this;
    getPerfData = function() {
      if (!ctrl.performanceChanged) {
        return {};
      }
      data = _getPerformanceData(ctrl.container);
      data.saveJournal = 1;
      return data;
    };
    createCtrl = new assignCtrl(ctx, null, ctrl.classMeetings, settings, getPerfData);
    return createCtrl.addAssign().then(function(newAssign) {
      var html, ref, ref1, template;
      ctrl.performanceChanged = false;
      ctrl.reinitLesson(((ref = settings.subjectPlan) != null ? (ref1 = ref.lesson) != null ? ref1.id : void 0 : void 0) || -1);
      _prepareAssign.apply(ctrl, [newAssign]);
      ctrl.assignsWitResults.push(newAssign);
      _initTopButons.apply(ctrl);
      template = Handlebars.compile(templateManager.assignColTpl);
      html = template($.extend({
        constants: gradeConstants
      }, newAssign, {
        language: language
      }, {
        extraActivity: ctx.extraActivity
      }));
      $('.div-table-safari').append(html);
      ctrl._navigateInputs($("#assignment_" + newAssign.id));
      ctrl._setColNames();
      return $(document).trigger('assignmentsColsChanged');
    });
  };

  editJournalCtrl.prototype.addNextHomeAssign = function() {
    var createCtrl, ctrl;
    ctrl = this;
    createCtrl = new assignCtrl(ctx, null, ctrl.classMeetings, settings);
    return createCtrl.addNextHomeAssign();
  };

  editJournalCtrl.prototype.editAssign = function(assignId, productId) {
    return checkForChanges().then(function() {
      return postTo("/asp/Curriculum/EditAssignment.asp", {
        CMID: ctx.classMeetingId,
        AID: assignId,
        BMODULEQA: settings.moduleQA,
        LAJID: productId,
        SCHOOLYEARID: ctx.schoolYearId,
        SCLID: ctx.subjectGroupId,
        extraActivity: ctx.extraActivity
      });
    });
  };

  editJournalCtrl.prototype.goTestPlan = function(assignId) {
    return checkForChanges().then(function() {
      return postTo("/angular/school/journal/assignments/" + assignId + "/testplan/results/");
    });
  };

  editJournalCtrl.prototype.openPlan = function(assignId) {
    return checkForChanges().then(function() {
      return postTo("/angular/school/journal/assignments/" + assignId + "/testplan/");
    });
  };

  editJournalCtrl.prototype.goEditPlanner = function() {
    return checkForChanges().then(function() {
      return postTo("/asp/Curriculum/Planner.asp", {
        SGID: ctx.subjectGroupId,
        GRADEID: settings.gradeId
      });
    });
  };

  editJournalCtrl.prototype.goAssignVariant = function() {
    return checkForChanges().then(function() {
      return postTo("/asp/Curriculum/VariantsCSGs.asp", {
        SGID: ctx.subjectGroupId,
        GRADEID: settings.gradeId
      });
    });
  };

  editJournalCtrl.prototype["delete"] = function(assignId) {
    var ctrl;
    ctrl = this;
    return $.show.confirmation(language.Generic.Assignment.kSureToDeleteAssignment).then(function() {
      return jsSubmit({
        action: "/webapi/grade/journal/assignments/" + assignId,
        method: "DELETE",
        showProcessing: true
      });
    }).then(function(response) {
      var deletingAssign, template;
      $.show.alert(language.Generic.Grade.kAssignDeleteSuccess);
      deletingAssign = _.find(ctrl.assignsWitResults, function(assign) {
        return assign.id === assignId;
      });
      ctrl.assignsWitResults = _.without(ctrl.assignsWitResults, deletingAssign);
      if (deletingAssign.typeId === gradeConstants.assignmentTypes.homeWork) {
        if (empty_block === '') {
          $(".home-assignment .results-block div").empty();
          empty_block = $(".home-assignment .results-block");
          empty_block.addClass("empty-block").removeClass("results-block");
        }
        $("#home-assignment-column").empty();
        template = Handlebars.compile(templateManager.homeAssignEmptyColTpl);
        $("#home-assignment-column").append(template($.extend({}, {
          language: language
        })));
        $("#home-assignment-column .empty-block").replaceWith(empty_block);
      } else {
        $("#assignment_" + assignId).remove();
      }
      _initTopButons.apply(ctrl);
      ctrl._setColNames();
      return $(document).trigger('assignmentsColsChanged');
    });
  };

  editJournalCtrl.prototype.save = function() {
    var performanceData, ref;
    if (!window.dataWereChanged) {
      alert(language.Generic.SetupSchoolUI.kDataNotModified);
      return;
    }
    if (window.isButtonsLock()) {
      return;
    }
    data = {
      lessonId: ((ref = settings.subjectPlan.lesson) != null ? ref.id : void 0) || -1,
      sgid: ctx.subjectGroupId,
      cmid: ctx.classMeetingId,
      saveJournal: this.performanceChanged ? 1 : 0
    };
    if (!this.lessonChanged) {
      data.lessonId = -2;
    }
    if (this.performanceChanged) {
      performanceData = _getPerformanceData(this.container);
      data = $.extend(data, performanceData);
    }
    return jsSubmit({
      data: data,
      action: "/webapi/grade/journal/edit",
      method: "POST",
      nocache: true,
      showProcessing: true
    }).then((function(_this) {
      return function() {
        window.dataWereChanged = false;
        _this.performanceChanged = false;
        _this.reinitLesson(data.lessonId);
      };
    })(this));
  };

  editJournalCtrl.prototype.reinitLesson = function(setLessonId) {
    var lesson, prevLesson;
    if (this.lessonChanged && settings.subjectPlan.initLessonId !== setLessonId) {
      if (settings.subjectPlan.initLessonId > 0) {
        prevLesson = _.findWhere(settings.subjectPlan.lessons, {
          id: settings.subjectPlan.initLessonId
        });
        prevLesson.hoursStudied = prevLesson.hoursStudied - 1;
        prevLesson.studied = prevLesson.hoursStudied >= prevLesson.hours;
      }
      if (setLessonId > 0) {
        lesson = _.findWhere(settings.subjectPlan.lessons, {
          id: setLessonId
        });
        lesson.hoursStudied = lesson.hoursStudied + 1;
        lesson.studied = lesson.hoursStudied >= lesson.hours;
      }
      settings.subjectPlan.initLessonId = setLessonId;
    }
    return this.lessonChanged = false;
  };

  editJournalCtrl.prototype.saveAndBack = function() {
    if (!window.dataWereChanged) {
      this.goBackToJournal();
      return;
    }
    this.save().then(this.goBackToJournal);
  };

  editJournalCtrl.prototype.goBackToJournal = function() {
    return $("a.back").click();
  };

  editJournalCtrl.prototype.setFlagSaveJournal = function() {
    return this.performanceChanged = true;
  };

  editJournalCtrl.prototype.clickCheckAll = function(checkInput) {
    var assignId;
    assignId = checkInput.value;
    if (checkInput.checked) {
      return this.checkAll(assignId);
    } else {
      return this.uncheckAll(assignId);
    }
  };

  editJournalCtrl.prototype.checkAll = function(sAID) {
    var $checkM, i, j, nLen, ref;
    $checkM = $("input:checkbox[name=M_" + sAID + "]:enabled", this.container);
    nLen = $checkM.length - 1;
    for (i = j = 0, ref = nLen; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      $checkM[i].checked = true;
    }
    dataChanged();
    return this.setFlagSaveJournal();
  };

  editJournalCtrl.prototype.uncheckAll = function(sAID) {
    var $Grades, $checkMs, i, j, nLen, ref;
    $checkMs = $("input:checkbox[name=M_" + sAID + "]:enabled", this.container);
    $Grades = $("input[name=G_" + sAID + "]", this.container);
    nLen = $checkMs.length - 1;
    for (i = j = 0, ref = nLen; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      if (trimStr($Grades[i].value === '')) {
        $checkMs[i].checked = false;
      }
    }
    dataChanged();
    return this.setFlagSaveJournal();
  };

  editJournalCtrl.prototype.restoreCheck = function(obj) {
    if (!obj.checked) {
      alert(language.Grade.kTickMarkIsNecessary);
      return obj.checked = true;
    }
  };

  editJournalCtrl.prototype.clickCheck = function(obj) {
    var $Grades, index, sAID, sName;
    sName = obj.name;
    sAID = sName.substr(2);
    index = $("input[name=M_" + sAID + "]", this.container).index(obj);
    $Grades = $("input[name=G_" + sAID + "]", this.container);
    if (trimStr($Grades[index].value) !== '') {
      return this.restoreCheck(obj);
    } else {
      dataChanged();
      return this.setFlagSaveJournal();
    }
  };

  editJournalCtrl.prototype.changeCm = function(step) {
    var confirmChangeCM, ctrl, initialIndex, select_cm, simpleChangeCM;
    ctrl = this;
    select_cm = $("select[name='CMID']");
    initialIndex = select_cm.find("option[value='" + ctx.classMeetingId + "']").prop("index");
    simpleChangeCM = function(step) {
      var cmId, days, processing;
      days = select_cm.find("option").length;
      if (step === 1 && days === initialIndex + step) {
        return;
      }
      if (step === -1 && initialIndex === 0) {
        return;
      }
      if (step !== 0) {
        select_cm.prop("selectedIndex", initialIndex + step);
      }
      cmId = parseInt($("select[name='CMID']").val());
      processing = $.show.processing();
      return ctrl.load(cmId).then(function() {
        ctrl.ejLayoutManager.destroy();
        processing.close();
        window.location.hash = "#edit-" + cmId;
        window.dataWereChanged = false;
        return ctrl.display();
      }).fail(function() {
        return select_cm.prop("selectedIndex", initialIndex);
      });
    };
    confirmChangeCM = function(step) {
      var buttons;
      buttons = [
        {
          label: $.show.defaults.yesText,
          action: function() {
            return ctrl.save().then(function() {
              return simpleChangeCM(step);
            });
          }
        }, {
          label: $.show.defaults.noText,
          action: function() {
            return simpleChangeCM(step);
          }
        }, {
          label: $.show.defaults.cancelText,
          icon: 'glyphicon glyphicon-ban-circle',
          hotkey: 27,
          action: function() {
            return select_cm.prop("selectedIndex", initialIndex);
          }
        }
      ];
      return $.show.confirmation(language.Generic.Grade.kConfirmOnChangeCM, language.Generic.SetupSchoolUI.kConfirm, buttons, true);
    };
    if (window.dataWereChanged) {
      confirmChangeCM(step);
    } else {
      simpleChangeCM(step);
    }
    return true;
  };

  return editJournalCtrl;

})();

module.exports = editJournalCtrl;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var EditJournalTemplateManager;

EditJournalTemplateManager = (function() {
  function EditJournalTemplateManager() {}

  EditJournalTemplateManager.prototype.assignTitleTpl = '<div class="task-header">{{@root.language.Generic.Assignment.kATAssignment}}</div> <div class="assignment-title"> {{#ifCond typeId "==" @root.constants.assignmentTypes.DKR}} <input type="hidden" name="DKRAID" value="{{id}}"> {{/ifCond}} <input type="hidden" name="AID" value="{{id}}"> <div class="ctx-btns-icons ctx-btns-icons-xs" data-assignid="{{id}}" data-productid="{{productId}}"> <div class="danger delete assign-btn" title="{{@root.language.Generic.Buttons.kRemove}}"><span class="glyphicon glyphicon-remove"></span></div> <div class="primary edit-assign assign-btn" title="{{@root.language.Generic.Grade.kEditAssignment}}"><span class="glyphicon glyphicon-pencil"></span></div> {{#if showTestPlan}} <div class="test-plan primary assign-btn" title="{{@root.language.Generic.QualityAssessment.kTestPlanResults}}"><span class="glyphicon glyphicon-list-alt"></span></div> {{/if}} {{#unless @root.extraActivity}} <input type="checkbox" name="MAll_{{id}}" value="{{id}}" tooltip="{{@root.language.Generic.Grade.kCheckUncheckAll}}"> {{/unless}} </div> <span title="{{name}}" class="assignment-name"> {{name}} </span> {{#if laName}} <div class="assignment-activity"> <span>{{laName}}</span> </div> {{/if}} {{#if typeName}} <div class="assignment-type"> <span>{{typeName}}</span> </div> {{/if}} </div>';

  EditJournalTemplateManager.prototype.messageAssignmentAdded = '{{@root.language.Generic.Grade.kAssignmentAdded}} {{#if isTestPlansType}} <br />{{@root.language.Generic.Grade.kForFillingTestPlan}} <a class="open-testplan-link" data-assignid="{{assignId}}" href="javascript:void(0);" title="{{@root.language.Generic.Grade.kTestPlan}}"> {{@root.language.Generic.Grade.kTestPlan}} </a> {{/if}}';

  EditJournalTemplateManager.prototype.messageCurriculumNotFilled = '{{@root.language.Generic.Curriculum.kCurriculumNotFilled}} <br /> <a class="go-edit-planner-link" href="javascript:void(0);" title="{{@root.language.Generic.Curriculum.kCurriculum}}"> {{@root.language.Generic.Curriculum.kGoEdit}} </a>';

  EditJournalTemplateManager.prototype.assignColTpl = '<div class="assignment-container assignment-column" id="assignment_{{id}}"> {{> assignTitle}} <div class="results-block"> {{#each results}} <div class="{{IndividualEduc studentId}}"> {{#unless @root.extraActivity}} <span><input type="checkbox" name="M_{{../../id}}" value="{{studentId}}" {{#if marked}}checked{{/if}} {{#if readonly}}disabled{{/if}}></span> <input name="G_{{../../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" {{#if readonly}}disabled{{/if}}> {{/unless}} <i class="comment-btn {{#if comment}}commented {{#if comment.readed}}readed icon-comment-alt{{else}}icon-comment{{/if}}{{else}}icon-comment-alt{{/if}} {{#if readonly}}readonly{{/if}}" data-studentid="{{studentId}}" data-assignid="{{../id}}" title="{{#if comment}}{{comment.text}}{{else}}{{#unless readonly}}{{@root.language.Generic.Common.kAddComment}}{{/unless}}{{/if}}"></i> </div> {{/each}} </div> </div>';

  EditJournalTemplateManager.prototype.homeAssignEmptyColTpl = '<span class="home-assignments-header">{{language.Generic.Assignment.kHomeWork}}</span> {{#unless restrictAddHomeAssign}} <div class="add-assignments add-homeAssign-btn" title="{{language.Generic.Grade.kHomeWorkIsNotSetAddIt}}"> <span style="white-space: initial; text-align: center;">{{language.Generic.Grade.kAddOnCurrentLesson}}</span> <i class="icon-plus-sign"></i> </div> <div class="add-assignments-adaptive"> <i class="icon-plus-sign add-homeAssign-btn" title="{{language.Generic.Grade.kHomeWorkIsNotSetAddIt}}"></i> </div> {{/unless}} <div class="empty-block"> {{#each students}} <div></div> {{/each}} </div>';

  EditJournalTemplateManager.prototype.homeAssignColTpl = '<span class="assignments-header">{{@root.language.Generic.Assignment.kHomeWork}}</span> {{> assignTitle}} <div class="results-block"> {{#each results}} <div class="{{IndividualEduc studentId}}"> <span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" {{#if marked}}checked{{/if}} {{#if readonly}}disabled{{/if}}></span> <input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" {{#if readonly}}disabled{{/if}}> {{#if answer}} <i class="answer-btn icon-paperclip" data-studentid="{{studentId}}" data-assignid="{{../../id}}" title="Ответ на задание"></i> {{/if}} <i class="comment-btn {{#if comment}}commented {{#if comment.readed}}readed icon-comment-alt{{else}}icon-comment{{/if}}{{else}}icon-comment-alt{{/if}} {{#if readonly}}readonly{{/if}}" data-studentid="{{studentId}}" data-assignid="{{../id}}" title="{{#if comment}}{{comment.text}}{{else}}{{#unless readonly}}{{@root.language.Generic.Common.kAddComment}}{{/unless}}{{/if}}"></i> </div> {{/each}} </div>';

  EditJournalTemplateManager.prototype.setCommentTpl = '<form class="form-horizontal" onsubmit="return false;"> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Common.kComment}} </label> <div class="col-md-9"> <textarea name="comment" class="form-control" onchange="dataChanged()" maxlength="400" rows="5">{{comment}}</textarea> </div> </div> </form>';

  EditJournalTemplateManager.prototype.assignAnswerInfoTpl = '{{#if text}} <div class="block-heading"> <h4>Текст ответа</h4> </div> <div class="block-data"> <div class="answer-text"> {{text.answer}} </div> </div> {{/if}} {{#if files}} <div class="block-heading"> <h4>Файлы</h4> </div> <div class="block-data"> <table class="table table-bordered table-hover table-condensed"> <tr> <th>{{language.Generic.Common.kFileName}}</th> <th>{{language.Generic.Curriculum.kDescription}}</th> <th>{{language.Generic.Grade.kAttachDate}}</th> </tr> {{#each files}} <tr> <td><a href="javascript:void(0)" data-attachid="{{id}}">{{fileName}}</a></td> <td>{{description}}</td> <td>{{attachmentDate}}</td> </tr> {{/each}} </table> </div> {{/if}}';

  EditJournalTemplateManager.prototype.attendanceColTpl = '<div class="attendance-block"> {{#each attendance}} <div class="{{IndividualEduc studentId}}"> <select name="REASON" {{#if readonly}}disabled{{/if}}> <option value=""></option> {{#each ../attendanceReasons}} <option value="{{mark}}" {{selected ../reason mark}}>{{mark}}</option> {{/each}} </select> </div> {{/each}} </div>';

  EditJournalTemplateManager.prototype.editJournalTpl = '<div class="form"> <div class="editjournal-wrapper"> <div class="editjournal"> <div class="assignments-header-block"> <div id="assignments-header-many" class="assignments-header {{#if extraActivity}} assignments-header-lite {{/if}} {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kAssignments}}</div> </div> <div class="editjournal-left-block task-active"> <!-- ученики --> <div class="studentlist head"> <div class="student-title">{{language.Common.kStudents}}</div> <div class="student-block"> {{#each students}} <div class="student-name student {{IndividualEduc id}}"> <input type="hidden" name="SID" value="{{id}}" {{#if free}}disabled{{/if}}> <span>{{num}}. {{name}}</span> </div> {{/each}} </div> </div> <!-- Посещаемость --> <div class="attendance head"> <!--<div class="attendance-title">{{language.Generic.Grade.kAttendanceColumn}}</div>--> <div class="attendance-title">{{@root.language.Generic.Grade.kAttendanceColumnFirstPart}}-<br>{{@root.language.Generic.Grade.kAttendanceColumnLastPart}}</div> {{> attendanceCol}} </div> <!-- Домашняя работа --> {{#unless extraActivity}} <div class="home-assignment assignment-column head" id="home-assignment-column"> {{#if homeAssignment}} {{#with homeAssignment}} {{> homeAssignCol}} {{/with}} {{else}} {{> homeAssignEmptyCol}} {{/if}} </div> {{/unless}} </div> <!-- оценки --> <div class="assignments-block-wrapper"> <div class="assignments-block head"> <div class="div-table-safari"> {{#each assignments}} {{> assignCol}} {{/each}} <div class="wrapper"> {{#each students}} <div></div> {{/each}} </div> </div> </div> </div> <div class="editjournal-right-block"> <!-- для клонирования --> <div class="new-assignment-container head"> <div class="assignment-container assignment-column head"> <div class="assignment-title"> <span id="assignments-header-new" class="assignments-header-empty {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kCreateAssignmentShort}}</span> <span id="assignments-header-no" class="assignments-header {{#if assignments.length}}hidden{{/if}}">{{language.Generic.Grade.kAssignments}}</span> </div> <div class="add-assignments add-assign-btn" title="{{language.Generic.Grade.kAddAssignment}}"> <span>{{language.Generic.Buttons.kAdd}}</span> <i class="icon-plus-sign"></i> </div> <div class="results-block results-block-inactive"> {{#each students}} <div></div> {{/each}} </div> </div> </div> </div> </div> </div> </div>';

  EditJournalTemplateManager.prototype.setLessonTpl = '<select class="form-control" name="LESSONID"> {{#unless suggestedLessonId}} <option value="-1" disabled="disabled" selected="selected">{{language.Grade.kChooseLesson}}</option> {{/unless}} {{#each lessons}} <option value="{{id}}" {{selected ../suggestedLessonId id}}>{{displayName}}{{#if studied}}*{{/if}}</option> {{/each}} </select>';

  EditJournalTemplateManager.prototype.addCommonAssignTpl = '<div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentTheme}} </label> <div class="col-md-9"> <input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" autofocus="autofocus"> </div> </div> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentType}} </label> <div class="col-md-9"> <select name="AType" class="form-control" {{#unless assignmentTypesChoise}}disabled="disabled"{{/unless}}> {{#unless typeId}} <option value="" disabled="disabled" selected="selected">{{language.Generic.Assignment.kATChooseType}}</option> {{/unless}} {{#each assignmentTypes}} <option value="{{id}}" {{#if typeId}} {{selected ../typeId id}} {{/if}}>{{name}}</option> {{/each}} </select> </div> </div> <div class="form-group" id="diagnosticWork" style="display: none"></div>';

  EditJournalTemplateManager.prototype.diagnosticWorkTpl = '<label class="control-label col-md-3"> {{language.Generic.Assignment.kDiagnosticWork}} </label> <div class="col-md-9"> <select name="DiagnosticWork" class="form-control" {{#unless assignmentTypesChoise}} disabled="disabled" {{/unless}}> {{#unless typeId}} <option value="-1_-1" selected="selected">{{language.Generic.Assignment.kChooseDiagnosticWorkVariant}}</option> {{/unless}} {{#each variants}} <option value="{{id}}_{{testPlanId}}">{{diagnosticWork.name}} ({{name}})</option> {{/each}} </select> </div>';

  EditJournalTemplateManager.prototype.getHomeAssignFromPlanTpl = '<form class="form-horizontal" onsubmit="return false;"> <div class="form-group"> <label class="control-label col-md-3"> {{language.Curriculum.kLesTheme}} </label> <div class="col-md-9"> <span class="form-control">{{lesson.displayName}}</span> </div> </div> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kHomeAssignmentText}} </label> <div class="col-md-9"> <input type="text" class="form-control" name="LESSONHOMEASSIGNMENT" value="{{homeAssign}}" disabled="disabled"> </div> </div> </form>';

  EditJournalTemplateManager.prototype.addHomeAssignCmnTpl = '{{#if issueCmId}} <input type="hidden" name="ISSUECMID" value="{{issueCmId}}" /> {{else}} <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kAssignmentIssueClassMeeting}} </label> <div class="col-md-9"> <select name="ISSUECMID" class="form-control"> {{#each prevClassmeetings}} <option value="{{id}}">{{displayName}}</option> {{/each}} </select> </div> </div> {{/if}} <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kHomeAssignmentText}} </label> <div class="col-md-9"> {{#if fromKTP}} <div class="input-group"> {{/if}} <input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" autofocus="autofocus"> {{#if fromKTP}} <span class="input-group-btn"> <button class="btn btn-default" type="button" id="useLessonHomeAssignBtn" title="{{language.Generic.Assignment.kUseHomeAssignmentFromKTP}}"><span class="glyphicon glyphicon-book"></span> {{language.Generic.Assignment.kFromKTP}}</button> </span> </div> {{/if}} </div> </div> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentType}} </label> <div class="col-md-9"> <span class="form-control form-control-title"><span class="text">{{language.Generic.Assignment.kATHomeWork}}</span></span> <input type="hidden" name="AType" value="{{typeId}}" /> </div> </div>';

  EditJournalTemplateManager.prototype.addHomeAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> {{> addHomeAssignCmn}} </form>';

  EditJournalTemplateManager.prototype.addNextHomeAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kNextClassmeetingDate}} </label> <div class="col-md-9"> <select name="NEXTCMID" class="form-control"> {{#each classMeetings}} <option value="{{id}}">{{name}}</option> {{/each}} </select> </div> </div> {{> addHomeAssignCmn}} </form>';

  EditJournalTemplateManager.prototype.addAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> {{> addCommonAssign}} </form>';

  EditJournalTemplateManager.prototype.filterTpl = '<div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">{{language.Generic.Filter.kCourseGB}}</label> <div class="col-md-8 col-lg-5 col-sm-8"> <span class="form-control form-control-title"> <span class="text">{{subjectGroupName}}</span> </span> </div> </div> <div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">{{language.Generic.Common.kPeriod}}</label> <div class="col-md-8 col-lg-5 col-sm-8"> <span class="form-control form-control-title"> <span class="text">{{termName}}</span> </span> </div> </div> {{> cmSelect}} {{> lessonSelect}}';

  EditJournalTemplateManager.prototype.cmSelectTpl = '<div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">{{language.Grade.kLessonDate}}</label> <div class="col-md-8 col-lg-5 col-sm-8"> <div class="input-group"> <select class="form-control" name="CMID"> {{#each classMeetings}} <option value="{{id}}" {{#if selected}} selected {{/if}} >{{name}}</option> {{/each}} </select> <span class="input-group-btn"> <button title="{{language.Generic.Grade.kGoPrevCM}}" type="button" class="btn btn-default" id="prev-cm"><span class="glyphicon glyphicon-circle-arrow-left"></span></button> <button title="{{language.Generic.Grade.kGoNextCM}}" type="button" class="btn btn-default" id="next-cm"><span class="glyphicon glyphicon-circle-arrow-right"></span></button> </span> </div> </div> </div>';

  EditJournalTemplateManager.prototype.lessonSelectTpl = '<div class="form-group" id="lesson-theme-filter-row"> <label class="control-label col-md-4 col-lg-3 col-sm-4">{{language.Curriculum.kLesTheme}}</label> <div class="col-md-8 col-lg-5 col-sm-8"> {{#if subjectPlan.lesson}} <div class="input-group"> <span class="form-control form-control-title"><span class="text">{{subjectPlan.lesson.displayName}}</span></span> <span class="input-group-btn"> <button id="set-lesson-btn" title="{{language.Grade.kChangeLesson}}" type="button" class="btn btn-default" > <span class="glyphicon glyphicon-pencil"></span> </button> </span> </div> {{else}} {{#if subjectPlan.subjectPlanId}} <div class="input-group"> <span class="form-control form-control-title"><span class="text">{{language.Grade.kChooseLesson}}</span></span> <span class="input-group-btn"> <button id="set-lesson-btn" title="{{language.Grade.kSelectProposedLesson}}" type="button" class="btn btn-default"> <span class="glyphicon glyphicon-pencil"></span> </button> </span> </div> {{else}} {{#if subjectPlan.canAssign}} <a id="assign-variant-link" href="#" title="{{language.Generic.Grade.kAssignVariantPlan}}"> {{language.Generic.Grade.kAssignVariantPlan}} </a> {{else}} <span class="form-control form-control-title"><span class="text">{{language.Generic.Assignment.kNoKTPVariants}}</span></span> {{/if}} {{/if}} {{/if}} </div> </div>';

  return EditJournalTemplateManager;

})();

module.exports = EditJournalTemplateManager;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var EditJournalLayoutManager,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

EditJournalLayoutManager = (function() {
  function EditJournalLayoutManager(editjournalWrapper) {
    this.editjournalWrapper = editjournalWrapper;
    this.destroy = bind(this.destroy, this);
    this.init = bind(this.init, this);
    this.handlers = {};
  }

  EditJournalLayoutManager.prototype.init = function() {
    var event, handler, ref;
    if (bowser.msie) {
      $('.editjournal-wrapper .editjournal input').css('padding-top', '1px');
      $('.editjournal-wrapper .editjournal input').focus(function() {
        return $(this).css('padding-top', '1px');
      });
    }
    this.adjustWidth();
    this.scanWideTables();
    this.adjustScroll();
    this.adjustTotalWidth();
    this.addHoverEventHandlerToRow();
    $(window).on('resize.editjournal', this.adjustTotalWidth);
    this.handlers = {
      'scan-wide-tables.editjournal': (function(_this) {
        return function() {
          return _this.scanWideTables();
        };
      })(this),
      'init-floating-scroll.editjournal': (function(_this) {
        return function() {
          return _this.adjustWidth();
        };
      })(this),
      'assignmentsColsChanged': (function(_this) {
        return function() {
          _this.adjustWidth();
          _this.adjustTotalWidth();
          return _this.adjustScroll();
        };
      })(this)
    };
    ref = this.handlers;
    for (event in ref) {
      handler = ref[event];
      $(document).on(event, handler);
    }
    return deferredResLoader.ready(function() {
      $("#editJournal").addClass("ready");
      return $("#legend").addClass("ready");
    });
  };

  EditJournalLayoutManager.prototype.destroy = function() {
    var event, handler, ref;
    $(window).off('resize', this.adjustTotalWidth);
    ref = this.handlers;
    for (event in ref) {
      handler = ref[event];
      $(document).off(event);
    }
    $(document).off("mouseenter.edit-journal-layout");
    $(document).off("focusin.edit-journal-layout");
    return $(document).off("click.edit-journal-layout");
  };

  EditJournalLayoutManager.prototype.adjustWidth = function() {
    var assignment_container, assignment_container_width, assignmentsBlock, assignments_block, totalWidth;
    assignments_block = $(".div-table-safari");
    assignment_container = $(".assignment-container");
    assignment_container_width = 0;
    $(assignment_container).each(function() {
      assignment_container_width = $(this).width();
      return false;
    });
    if (!assignment_container.length) {
      return;
    }
    totalWidth = assignment_container_width * (assignment_container.length - 1);
    assignments_block.width(totalWidth);
    return assignmentsBlock = $('.assignments-block');
  };

  EditJournalLayoutManager.prototype.adjustTotalWidth = function() {
    var assignmentsBlock, div_table_safari, edit_journal, edit_journal_wrapper, pageWidth, width_date_results_block, windowWidth;
    windowWidth = $(window).width();
    pageWidth = $(document).width();
    assignmentsBlock = $('.assignments-block');
    edit_journal = $('.editjournal');
    edit_journal_wrapper = $('.editjournal-wrapper');
    width_date_results_block = '0px';
    width_date_results_block = assignmentsBlock.actual('innerWidth');
    if (Number(windowWidth) > 968) {
      div_table_safari = $('.div-table-safari').width();
      div_table_safari += 555;
      edit_journal.css({
        "width": div_table_safari + 'px'
      });
      if (edit_journal_wrapper.width() < edit_journal.width()) {
        return edit_journal.css({
          "width": 'auto'
        });
      }
    } else {
      $('.editjournal').css({
        "width": 'auto'
      });
      div_table_safari = $('.div-table-safari').width();
      div_table_safari += 555;
      return edit_journal.css({
        "width": div_table_safari + 'px'
      });
    }
  };

  EditJournalLayoutManager.prototype.adjustScroll = function() {
    var mCSB_container_width;
    mCSB_container_width = {
      "width": 0 + "px"
    };
    return $('.mCSB_container').css(mCSB_container_width);
  };

  EditJournalLayoutManager.prototype.scanWideTables = function() {
    if (!this.editjournalWrapper) {
      return;
    }
    return this.editjournalWrapper.filter(".assignments-block:not(.floating-scrolls)").each(function(index, element) {
      var availWidth, factWidth, parent, table;
      table = $(element);
      parent = table.parent();
      factWidth = table.prop("clientWidth");
      availWidth = parent.prop("clientWidth");
      if (factWidth > availWidth) {
        floatingScroll.initScrollableBlock(table);
        return parent.css("overflow-x", "");
      }
    });
  };

  EditJournalLayoutManager.prototype.addHoverEventHandlerToRow = function() {
    var backlightColor, hoverHandler, hoverResultsBlock, setBGColorAttendance, setBGColorResults, setBGColorStudent;
    backlightColor = '#fffacd';
    setBGColorResults = function(element, color) {
      var index;
      color = color || '';
      index = $(element).index();
      return $('.results-block').each(function() {
        var $block;
        $block = $($('div', $(this)).get(index));
        return $block.find('span, input').css('background-color', color);
      });
    };
    setBGColorAttendance = function(element, color) {
      var index;
      color = color || '';
      index = $(element).index();
      return $($('.attendance-block div').get(index)).find('select[name="REASON"]').css('background-color', color);
    };
    setBGColorStudent = function(element, color) {
      var index;
      color = color || '';
      index = $(element).index();
      return $($('div.student').get(index)).css('background-color', color);
    };
    hoverHandler = function($block) {
      setBGColorStudent($block, backlightColor);
      setBGColorResults($block, backlightColor);
      setBGColorAttendance($block, backlightColor);
      return $($block).siblings().each(function() {
        setBGColorStudent(this);
        setBGColorResults(this);
        return setBGColorAttendance(this);
      });
    };
    hoverResultsBlock = function($resblock, enter) {
      if (enter) {
        return $($resblock).find(".comment-btn:not(.readonly)").addClass("visible");
      } else {
        return $($resblock).find(".comment-btn:not(.readonly)").removeClass("visible");
      }
    };
    $(document).on("mouseenter.edit-journal-layout", "div.student, div.results-block div, .attendance-block div", function() {
      return hoverHandler(this);
    });
    $(document).on("mouseenter.edit-journal-layout", "div.results-block", function() {
      return hoverResultsBlock(this, true);
    });
    $(document).on("mouseleave.edit-journal-layout", "div.results-block", function() {
      return hoverResultsBlock(this, false);
    });
    $(document).on("focusin.edit-journal-layout", "div.results-block div input", function() {
      return hoverHandler($(this).parent());
    });
    return $(document).on("click.edit-journal-layout", "select[name='REASON']", function() {
      var $block;
      $block = $(this).parent();
      return hoverHandler($block);
    });
  };

  return EditJournalLayoutManager;

})();

(function($) {
  return $.fn.actual = function() {
    var clone, dim, s;
    if (arguments.length && typeof arguments[0] === 'string') {
      dim = arguments[0];
      $(this).addClass('liActualSize');
    }
    if (this.is(':visible')) {
      return this[dim]();
    }
    clone = $('body').clone().css({
      position: 'absolute',
      top: '-99999px',
      left: '-99999px',
      visibility: 'hidden'
    }).appendTo('body');
    clone.find('*').show();
    s = clone.find('.liActualSize')[dim]();
    clone.remove();
    $(this).removeClass('liActualSize');
    return s;
  };
})($);

module.exports = EditJournalLayoutManager;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gradeConstants = __webpack_require__(6);

var templateManager = new (__webpack_require__(12))();

var resourceLoader = __webpack_require__(9);

var homeAssignSelectorCtrl = __webpack_require__(15).HomeAssignSelectorCtrl;

var CreateAssignCtrl = /*#__PURE__*/function () {
  function CreateAssignCtrl(ctx, lessonId, classMeetings, settings, extraDataProvider) {
    _classCallCheck(this, CreateAssignCtrl);

    this.ctx = ctx;
    this.sgId = ctx.subjectGroupId;
    this.cmId = ctx.classMeetingId;
    this.settings = settings;
    this.classMeetings = classMeetings;
    this.extraDataProvider = extraDataProvider;
  } //добавление задания


  _createClass(CreateAssignCtrl, [{
    key: "addAssign",
    value: function addAssign() {
      var defaultAssignName = this.settings.subjectPlan.lesson ? this.settings.subjectPlan.lesson.lessonName : language.Generic.Grade.kNoTheme;
      var model = {
        assignmentName: defaultAssignName,
        assignmentTypes: null,
        assignmentTypesChoise: true,
        typeId: null,
        language: language,
        variants: null
      };

      var types = _.filter(this.settings.refs.assignmentTypes, function (type) {
        return type.id !== gradeConstants.assignmentTypes.homeWork;
      });

      if (!this.settings.moduleQA) {
        types = _.filter(types, function (type) {
          return type.id !== gradeConstants.assignmentTypes.DKR;
        });
        model.typeId = this.settings.lessonAnswerTypeId;
      } else {
        model.variants = [];
      }

      model.assignmentTypes = types;
      return this._createAssign(model, templateManager.addAssignTpl);
    } //добавление домашнего задания

  }, {
    key: "addHomeAssign",
    value: function addHomeAssign() {
      var _this = this;

      var ctrl = this;

      var prevCms = _.chain(this.classMeetings).filter(function (cm) {
        return cm.date < _this.ctx.classMeetingDay;
      }).sortBy(function (cm) {
        return cm.date;
      }).value().reverse();

      if (!prevCms.length) {
        prevCms.push(_.findWhere(this.classMeetings, {
          id: this.cmId
        }));
      }

      var lessons;
      var lessonsReady = resourceLoader.getSubjectPlan({
        sgId: this.sgId
      }).then(function (sp) {
        lessons = sp.lessons;

        _.each(prevCms, function (cm) {
          cm.displayName = cm.name;

          var lessonInfo = _.findWhere(lessons, {
            id: cm.lessonId
          });

          if (lessonInfo) {
            cm.displayName += " - " + lessonInfo.displayName;
          }
        });
      });

      var types = _.filter(this.settings.refs.assignmentTypes, function (type) {
        return type.id === gradeConstants.assignmentTypes.homeWork;
      });

      var model = {
        assignmentName: "",
        assignmentTypes: types,
        assignmentTypesChoise: false,
        fromKTP: !this.settings.subjectPlan.noSubjectPlan,
        typeId: gradeConstants.assignmentTypes.homeWork,
        language: language,
        prevClassmeetings: prevCms
      };

      var onShowEventHandler = function onShowEventHandler(dialog) {
        var prevCmSelect = $("select[name=ISSUECMID]", dialog.$modalContent);
        var homeAssignNameInput = $("input[name='AN']", dialog.$modalContent);
        var usePlanBtn = $("#useLessonHomeAssignBtn", dialog.$modalContent);
        var lessons;
        resourceLoader.getSubjectPlan({
          sgId: _this.sgId
        }).then(function (sp) {
          lessons = sp.lessons;
        });
        var prevCmId;
        var prevCmInfo;
        prevCmSelect.change(function () {
          prevCmId = parseInt(prevCmSelect.val());
          prevCmInfo = _.findWhere(_this.classMeetings, {
            id: prevCmId
          });
        });

        if (prevCms.length) {
          prevCmSelect.val(prevCms[0].id);
        }

        prevCmSelect.trigger("change");
        usePlanBtn.click(function () {
          var getHomeAssignCtrl = new homeAssignSelectorCtrl(_this.sgId);
          getHomeAssignCtrl.execute(ctrl.cmId, prevCmInfo).then(function (result) {
            homeAssignNameInput.val(result.lessonInfo.homeAssign || result.lessonInfo.lessonName);
          });
        });
      };

      return lessonsReady.then(function () {
        return ctrl._createAssign(model, templateManager.addHomeAssignTpl, {
          onShown: onShowEventHandler
        });
      });
    } //добавление домашнего задания на будущие даты

  }, {
    key: "addNextHomeAssign",
    value: function addNextHomeAssign() {
      var _this2 = this;

      var ctrl = this;
      jsSubmit({
        action: "/asp/ajax/classmeetings/getnextclassmeetingsforsg.asp",
        data: {
          sgid: this.sgId,
          cmid: this.cmId
        },
        showProcessing: true
      }).then(function (response) {
        var nextClassMeetings = response.data.nextClassMeetings;

        if (nextClassMeetings.length === 0) {
          $.show.message(language.Generic.Grade.kNoNextClassmeetings);
          return;
        }

        if (_this2.settings.editLimit.limitPastEditHomeAssigns) {
          var now = new Date();
          nextClassMeetings = _.filter(nextClassMeetings, function (cm) {
            return new Date(cm.day) > now;
          });

          if (nextClassMeetings.length === 0) {
            $.show.message(language.Generic.Grade.kCantAssignToPastClassmeetings);
            return;
          }
        }

        var model = {
          assignmentTypes: _.filter(_this2.settings.refs.assignmentTypes, function (type) {
            return type.id === gradeConstants.assignmentTypes.homeWork;
          }),
          assignmentTypesChoise: false,
          issueCmId: _this2.cmId,
          typeId: gradeConstants.assignmentTypes.homeWork,
          language: language,
          fromKTP: !_this2.settings.subjectPlan.noSubjectPlan,
          classMeetings: nextClassMeetings
        };

        if (_this2.settings.subjectPlan.lesson) {
          model.lesson = _this2.settings.subjectPlan.lesson;
          resourceLoader.getSubjectPlan({
            sgId: _this2.sgId
          }).then(function (sp) {
            model.lesson = _.findWhere(sp.lessons, {
              id: model.lesson.id
            });
          });
        }

        var template = Handlebars.compile(templateManager.addNextHomeAssignTpl);
        var html = template(model);

        var issueCmInfo = _.findWhere(ctrl.classMeetings, {
          id: _this2.cmId
        });

        var nextCmCombo = null;
        var assignNameInput = null;
        var nextCmInfo = null;
        var nextCmId = null;
        $.show.dialog({
          title: language.Generic.Grade.kAddHomeAssignOnNextClassmeeting,
          message: html,
          size: BootstrapDialog.SIZE_WIDE,
          buttons: [{
            label: language.Generic.Buttons.kAdd + "/" + language.Generic.Buttons.kEdit,
            action: function action(dialog) {
              if (!_this2._validate(null, assignNameInput)) {
                return;
              }

              var homeAssignId = 0;

              if (nextCmInfo && nextCmInfo.homeAssignment) {
                homeAssignId = nextCmInfo.homeAssignment.id || 0;
              }

              var name = assignNameInput.val();
              jsSubmit({
                data: {
                  cmid: nextCmId,
                  sgid: _this2.sgId,
                  issuecmid: _this2.cmId,
                  assignmentId: homeAssignId,
                  an: name
                },
                action: "/asp/ajax/Assignments/CreateOrEditHomeAssignment.asp",
                nocache: true,
                showSuccessMessage: true
              }).then(function () {
                return dialog.successClose();
              });
            },
            hotkey: 13,
            cssClass: 'btn-primary'
          }, {
            label: language.Generic.Buttons.kCancel,
            hotkey: 23,
            action: function action(dialog) {
              return dialog.close();
            }
          }],
          onshow: function onshow(dialog) {
            nextCmCombo = $('select[name=NEXTCMID]', dialog.$modalContent);
            assignNameInput = $('input[name=AN]', dialog.$modalContent);
            $("#useLessonHomeAssignBtn", dialog.$modalContent).click(function () {
              var getHomeAssignCtrl = new homeAssignSelectorCtrl(_this2.sgId);
              getHomeAssignCtrl.execute(nextCmId, issueCmInfo).then(function (result) {
                assignNameInput.val(result.lessonInfo.homeAssign || result.lessonInfo.lessonName);
                result.dialog.close();
              });
            });

            var syncNextCmHomeAssign = function syncNextCmHomeAssign() {
              nextCmId = parseInt(nextCmCombo.val());
              nextCmInfo = _.findWhere(model.classMeetings, {
                id: nextCmId
              });

              if (nextCmInfo && nextCmInfo.homeAssignment) {
                assignNameInput.val(nextCmInfo.homeAssignment.name || "");
              } else {
                assignNameInput.val("");
              }
            };

            syncNextCmHomeAssign();
            nextCmCombo.change(syncNextCmHomeAssign);
          }
        });
      });
    } //метод базовой валидации формы создания заданий

  }, {
    key: "_validate",
    value: function _validate(typeSelect, nameInput) {
      var typeId;

      if (typeSelect) {
        typeId = typeSelect.val();

        if (typeId <= 0) {
          alert(language.Generic.Assignment.kATPleaseSelectAssignmentType);
          typeSelect.focus();
          return false;
        }
      }

      var name = nameInput.val();

      if (trimStr(name).length === 0) {
        alert(language.Generic.Assignment.kATEnterAssignmentTheme);
        nameInput.focus();
        return false;
      }

      if (trimStr(name).length > gradeConstants.maxLengths.assignTitle) {
        alert(language.Generic.Assignment.kATAssignmentThemeNotMayBe);
        nameInput.focus();
        return false;
      }

      return true;
    } //базовый метод создания заданий

  }, {
    key: "_createAssign",
    value: function _createAssign(model, template, options) {
      var _this3 = this;

      var defOptions = {
        //обработчик события показ модального окна
        onShow: null,
        //возможность расширения валидации
        check: null
      };
      options = $.extend({}, defOptions, options);
      var templateCompiled = Handlebars.compile(template);
      var saveDeffered = $.Deferred();
      $.show.dialog({
        title: language.Generic.Grade.kCreateAssignment,
        message: templateCompiled(model),
        size: BootstrapDialog.SIZE_WIDE,
        buttons: [{
          label: language.Generic.Buttons.kAdd,
          hotkey: 13,
          action: function action(dialog) {
            var typeSelect = $("select,input", dialog.$modalContent).filter("[name=AType]");
            var nameInput = $("input[name=AN]", dialog.$modalContent);

            if (!_this3._validate(typeSelect, nameInput)) {
              return;
            }

            var typeId = parseInt(typeSelect.val() || -1);

            if (typeId === -1) {
              $.show.message(language.Generic.Assignment.kATPleaseSelectAssignmentType);
              return;
            }

            var typeInfo = _this3.settings.refs.assignmentTypesIndex[typeId];
            var name = nameInput.val();
            var dwVariantId = null;
            var dwTestPlanId = null;

            if (_this3.settings.moduleQA && typeInfo.id === gradeConstants.assignmentTypes.DKR) {
              var diagnosticWorkData = $("*[name=DiagnosticWork]", dialog.$modalContent).val();

              if (!diagnosticWorkData) {
                alert(language.Generic.Assignment.kChooseDiagnosticWorkVariant);
                nameInput.focus();
                return false;
              }

              diagnosticWorkData = diagnosticWorkData.split("_");
              dwVariantId = diagnosticWorkData[0];
              dwTestPlanId = diagnosticWorkData[1];
            }

            if (options.check && !options.check()) {
              return;
            }

            var lessonId = _this3.settings.subjectPlan.lesson ? _this3.settings.subjectPlan.lesson.id : -1;
            var saveData = {
              sgid: _this3.sgId,
              cmid: _this3.cmId,
              lessonId: lessonId,
              RegimeAddAssign: 1,
              AN: name,
              AType: typeId,
              saveJournal: 0 //this.performanceChanged ? 1 : 0

            };

            if (typeInfo.id === gradeConstants.assignmentTypes.DKR) {
              saveData.dwVariantId = dwVariantId;
              saveData.dwTestPlanId = dwTestPlanId;
            }

            if (typeInfo.id === gradeConstants.assignmentTypes.homeWork) {
              saveData.issueCmId = $("select[name=ISSUECMID]").val();
            }

            if (_this3.extraDataProvider) {
              var extraData = _this3.extraDataProvider();

              saveData = $.extend(saveData, extraData);
            }

            jsSubmit({
              data: saveData,
              action: "/webapi/grade/journal/edit",
              method: "POST",
              nocache: true,
              showProcessing: true
            }).then(function (response) {
              window.dataWereChanged = false;
              var newAssign = {
                id: response.assignmentId,
                name: response.assignmentName,
                typeId: typeId,
                typeName: typeInfo.id === gradeConstants.assignmentTypes.DKR ? typeInfo.abbr : typeInfo.name
              };
              dialog.successClose();

              if (_this3.settings.moduleQA && _.contains(gradeConstants.testPlansTypes, newAssign.typeId)) {
                var templateMessageAdd = Handlebars.compile(templateManager.messageAssignmentAdded);
                var modelMessage = {
                  assignId: newAssign.id,
                  isTestPlansType: _.contains(gradeConstants.testPlansTypes, newAssign.typeId),
                  language: language
                };
                $.show.message(templateMessageAdd(modelMessage));
              }

              saveDeffered.resolve(newAssign);
            });
          },
          cssClass: "btn-primary"
        }, {
          label: language.Generic.Curriculum.kBtnCancel,
          hotkey: 23,
          action: function action(dialog) {
            return dialog.close();
          }
        }],
        onshow: function onshow(dialog) {
          if (options.onShow) {
            return options.onShow(dialog);
          }
        },
        onshown: function onshown(dialog) {
          if (options.onShown) {
            return options.onShown(dialog);
          }
        }
      });
      return saveDeffered.promise();
    }
  }]);

  return CreateAssignCtrl;
}();

module.exports = CreateAssignCtrl;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeAssignSelectorCtrl = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var indentString = function indentString(str, length, indent) {
  if (str.length === length) {
    return str;
  }

  return indentString(str + indent, length, indent);
};

var HomeAssignSelectorCtrl = /*#__PURE__*/function () {
  function HomeAssignSelectorCtrl(sgId, options) {
    _classCallCheck(this, HomeAssignSelectorCtrl);

    this.sgId = sgId;
    this.options = $.extend({}, {
      changePlanOption: false,
      autoClose: true,
      showAttahments: false
    }, options);
    this.result = {};
    this.homeAssigCtrl = null;
    this.attachmentsCtrl = null;
    this.fileAttachmentTemplate = '{{#each attachments}} <div class="file-attachment from-ktp multiple" onclick="FileAttachmentCtrl.openAttachment(\'/{{originalFileName}}\', {{id}});" title="{{originalFileName}} {{#if description}}{{description}}{{/if}}"> <span class="file-name">{{originalFileName}}</span> {{#if description}} <span class="file-description">{{description}}</span> {{/if}} </div> {{/each}}';
  }

  _createClass(HomeAssignSelectorCtrl, [{
    key: "initLessonInfo",
    value: function initLessonInfo(lessonId, processing) {
      var ctrl = this;
      return jsSubmit({
        action: '/webapi/subjectplans/lessons',
        method: "get",
        data: {
          lessonId: lessonId
        },
        showProcessing: processing
      }).then(function (response) {
        var lessonInfo = response;
        ctrl.homeAssigCtrl = $("#homeAssign");
        ctrl.attachmentsCtrl = $("#lessonAttachments");
        lessonInfo.displayName = lessonInfo.unitNum + "." + lessonInfo.lessonNum + " " + lessonInfo.lessonName;
        ctrl.homeAssigCtrl.text(lessonInfo.homeAssign || "");
        ctrl.attachmentsCtrl.empty();
        ctrl.result.lessonInfo = lessonInfo;

        if (ctrl.options.showAttahments && lessonInfo.attachments) {
          var template = Handlebars.compile(ctrl.fileAttachmentTemplate);
          var html = template(lessonInfo);
          ctrl.attachmentsCtrl.append(html);
        }
      });
    }
  }, {
    key: "execute",
    value: function execute(cmId, issueCmInfo) {
      var defer = $.Deferred();
      var ctrl = this;
      jsSubmit({
        action: '/webapi/subjectplans/lessons/studied',
        method: "get",
        data: {
          sgId: ctrl.sgId,
          cmId: cmId
        },
        showProcessing: true
      }).then(function (response) {
        var lessonList = response;

        if (!lessonList.length) {
          alert(language.Generic.Assignment.kUnableRetrieveHomeWorkText);
          defer.reject();
          return defer.promise();
        } //если на заполнена тема урок на занятии "выдачи" - то выбираем данную тему
        //иначе берем первую из списка - последняя ранее изучавшаяся


        var suggestLessonId = issueCmInfo.lessonId || _.first(lessonList).id;

        _.each(lessonList, function (lesson) {
          lesson.selected = lesson.lessonId === suggestLessonId;
        }); //todo. to html files


        var source = "\n\t\t\t\t<form class=\"form\" id=\"fromKTPTable\"> \n\t\t\t\t<div class=\"form-group\"> \n\t\t\t\t\t<label class=\"control-label\">".concat(language.Generic.Assignment.kLessonInKTP, "</label>\n\t\t\t\t\t<div id=\"lesson_block\"> \n\t\t\t\t\t\t<select id=\"lesson_select\" class=\"form-control\"> \n\t\t\t\t\t\t\t{{#each lessonList}} <option value=\"{{id}}\" {{#if selected}} selected {{/if}}>{{displayName}}</option> {{/each}} \n\t\t\t\t\t\t</select> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\"> \n\t\t\t\t\t<label class=\"control-label\">").concat(language.Generic.Assignment.kHomeAssignment, "</label> \n\t\t\t\t\t<div> \n\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\" id=\"homeAssign\" style=\"border: 1px solid #8baed8;\" readonly></textarea>\n\t\t\t\t\t</div> \n\t\t\t\t</div>\n\t\t\t\t{{#if options.changePlanOption}} \n\t\t\t\t<div class=\"form-group\"> \n\t\t\t\t\t<div class=\"checkbox\"> \n\t\t\t\t\t\t<label> <input type=\"checkbox\" id=\"changeKTP\"> ").concat(language.Generic.Assignment.kChangeHomeWorkInKTP, "</label> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t\t<div class=\"file-attachment-block multiple\" id=\"lessonAttachments\"></div> \n\t\t\t\t</form>");
        var template = Handlebars.compile(source.replace(/(?:\r\n|\r|\n)/g, ''));
        var templateModel = {
          lessonList: lessonList,
          options: ctrl.options
        };
        var content = template(templateModel);
        ctrl.result.dialog = $.show.dialog({
          title: language.Generic.Assignment.kHomeAssignmentFromKTP,
          message: content,
          onshown: function onshown() {
            var lessonId = issueCmInfo.lessonId || _.first(lessonList).id;

            ctrl.initLessonInfo(lessonId, false);
            $('#lesson_select').on('change', function () {
              var lessonId = parseInt($(this).val());
              ctrl.initLessonInfo(lessonId, true);
            });
          },
          buttons: [{
            label: language.Generic.Buttons.kApply,
            action: function action(dialog) {
              if (ctrl.options.changePlanOption) {
                ctrl.result.changePlan = $('#changeKTP').prop('checked');
              }

              if (ctrl.options.autoClose) {
                dialog.close();
              }

              defer.resolve(ctrl.result);
            }
          }]
        });
      });
      return defer.promise();
    }
  }]);

  return HomeAssignSelectorCtrl;
}();

exports.HomeAssignSelectorCtrl = HomeAssignSelectorCtrl;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var templateManager = new (__webpack_require__(12))();

var JournalCommentsCtrl = /*#__PURE__*/function () {
  function JournalCommentsCtrl(cmId, assignId, studentId) {
    _classCallCheck(this, JournalCommentsCtrl);

    this.cmId = cmId;
    this.assignId = assignId;
    this.studentId = studentId;
  }

  _createClass(JournalCommentsCtrl, [{
    key: "setComment",
    value: function setComment(comment) {
      var _this = this;

      var template = Handlebars.compile(templateManager.setCommentTpl);
      var saveDeffered = $.Deferred();

      var setComment = function setComment(commentText) {
        var queryData = {
          studentId: _this.studentId,
          cmId: _this.cmId,
          assignId: _this.assignId
        };
        var saveData = null;

        if (commentText) {
          saveData = "=" + commentText;
        }

        return jsSubmit({
          data: saveData,
          queryData: queryData,
          action: "/webapi/grade/journal/comments",
          method: "POST",
          nocache: true,
          showProcessing: true
        });
      };

      var saveHandler = function saveHandler(dialog) {
        var commentTextArea = $("textarea[name=comment]", dialog.$modalContent).get(0);
        var commentText = commentTextArea.value.trim();

        if (commentText) {
          setComment(encodeURIComponent(commentText)).then(function () {
            dialog.successClose();
            saveDeffered.resolve(commentText);
          });
        } else {
          commentTextArea.value = "";
          alert(language.Generic.Common.kEnterComment);
        }
      };

      $.show.dialog({
        title: comment ? language.Generic.Common.kEditComment : language.Generic.Common.kAddComment,
        message: template({
          language: language
        }),
        onshow: function onshow(dialog) {
          var commentTextArea = $("textarea[name=comment]", dialog.$modalContent).get(0);

          if (comment) {
            commentTextArea.value = comment;
          }
        },
        onshown: function onshown(dialog) {
          $("textarea[name=comment]", dialog.$modalContent).focus();
          $("textarea[name=comment]").keydown(function (e) {
            if (e.keyCode === 13 && e.shiftKey) {
              saveHandler(dialog);
            }
          });
        },
        size: BootstrapDialog.SIZE_WIDE,
        buttons: [{
          label: comment ? language.Generic.Buttons.kSave : language.Generic.Buttons.kAdd,
          action: saveHandler,
          cssClass: "btn-primary"
        }, {
          label: language.Generic.Buttons.kRemove,
          action: function action(dialog) {
            $.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function () {
              setComment(null).then(function () {
                dialog.successClose();
                saveDeffered.resolve(null);
              });
            });
          }
        }, {
          label: language.Generic.Buttons.kCancel,
          hotkey: 23,
          action: function action(dialog) {
            return dialog.close();
          }
        }]
      });
      return saveDeffered.promise();
    }
  }]);

  return JournalCommentsCtrl;
}();

module.exports = JournalCommentsCtrl;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var templateManager = new (__webpack_require__(12))();

var JournalAssignAnswersCtrl = /*#__PURE__*/function () {
  function JournalAssignAnswersCtrl(cmId) {
    _classCallCheck(this, JournalAssignAnswersCtrl);

    this.cmId = cmId;
    this.template = Handlebars.compile(templateManager.assignAnswerInfoTpl);
  }

  _createClass(JournalAssignAnswersCtrl, [{
    key: "displayAnswer",
    value: function displayAnswer(student, answer) {
      var model = {
        files: answer.files,
        text: answer.text,
        language: language
      };
      $.show.dialog({
        title: student.fullName + ": Ответ учащегося",
        message: this.template(model),
        onshown: function onshown(dialog) {
          $(".answer-text", dialog.$modalContent).linkify();
          $("a[data-attachid]", dialog.$modalContent).click(function () {
            var attachmentId = $(this).data("attachid");
            var fileAnswer = answer.files.find(function (aft) {
              return aft.id == attachmentId;
            });
            var fileName = fileAnswer.fileName;
            downloadFile("/webapi/attachments/" + attachmentId, fileName);
          });
        },
        size: BootstrapDialog.SIZE_WIDE,
        buttons: [{
          label: language.Generic.Buttons.kClose,
          hotkey: 23,
          action: function action(dialog) {
            return dialog.close();
          }
        }]
      });
    }
  }]);

  return JournalAssignAnswersCtrl;
}();

module.exports = JournalAssignAnswersCtrl;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var JournalTotalsCtrl;

JournalTotalsCtrl = (function() {
  var ctx, data, layoutManager, resourceLoader, templateManager;

  data = null;

  templateManager = new (__webpack_require__(19));

  resourceLoader = __webpack_require__(9);

  layoutManager = __webpack_require__(13);

  ctx = {};

  function JournalTotalsCtrl(container, _ctx) {
    this.container = container;
    ctx = $.extend({}, ctx, _ctx);
    $.ajax({
      url: '/static/dist/pages/grade/templates/journalTotals.html',
      cache: true,
      success: function(data) {
        return window.journalTotalsTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');
      }
    });
    Handlebars.registerHelper('ifEqual', function(nParam1, nParam2, opts) {
      if (nParam1 === nParam2) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });
    Handlebars.registerHelper('elementByIndex', function(list, index, field) {
      var ref;
      return (ref = list[index]) != null ? ref[field] : void 0;
    });
    $(document).bind('journalTotalsShow', (function(_this) {
      return function() {
        _this.ejLayoutManager = new layoutManager($(".assignments-block"));
        return _this.ejLayoutManager.init();
      };
    })(this));
    $("#totalsSaveId").click((function(_this) {
      return function() {
        return _this.save();
      };
    })(this));
    $("#totalsResetId").click((function(_this) {
      return function() {
        return _this.display();
      };
    })(this));
  }

  JournalTotalsCtrl.prototype.load = function() {
    var ctrl, prepareStudents, prepareTermInfo, ret;
    ret = $.Deferred();
    ctrl = this;
    prepareStudents = resourceLoader.getStudentList({
      sgid: ctx.subjectGroupId,
      termId: ctx.termId
    }).then((function(_this) {
      return function(students) {
        return ctrl.students = _.map(students, function(student, index) {
          var ref;
          student.studentId = student.id;
          student.name = student.fullName;
          student.num = index + 1;
          student.totalMark = (ref = _.find(ctx.totals[0].marks, function(total) {
            return total.studentId === student.studentId;
          })) != null ? ref.mark : void 0;
          return student;
        });
      };
    })(this));
    prepareTermInfo = resourceLoader.getTermInfo({
      termId: ctx.termId
    }).then(function(termInfo) {
      return ctx.termInfo = termInfo;
    });
    $.when(prepareStudents).then(function(response) {
      return ret.resolve();
    });
    return ret.promise();
  };

  JournalTotalsCtrl.prototype.save = function() {
    var defArgs, extraData, form, hasGrade, isInValidGrade, isValidMarks, strInvGrade;
    defArgs = new Array();
    if (isDBBusy()) {
      return false;
    }
    form = document.forms['Gradebook'];
    if (!form.SID) {
      return;
    }
    strInvGrade = language.Generic.Grade.kErrInvGrade1 + ctx.minMark + language.Generic.Grade.kErrInvGrade2 + ctx.maxMark + language.Generic.Grade.kErrInvGrade3;
    hasGrade = function(val, elMarkType) {
      return val.length > 0 && parseInt(getListValue(elMarkType)) > 0;
    };
    isInValidGrade = function(val) {
      var grade;
      grade = parseInt(val);
      return isNaN(grade) || grade < ctx.minMark || grade > ctx.maxMark;
    };
    isValidMarks = function(form) {
      var markElem, marks, val;
      if (form.Mark.length) {
        marks = $('input[name=Mark]:enabled').filter(function(index) {
          var elMarkType, val;
          val = this.value;
          elMarkType = form.MarkType[index];
          return hasGrade(val, elMarkType) && isInValidGrade(val);
        });
        if (marks.length > 0) {
          markElem = marks[0];
        }
      } else {
        val = form.Mark.value;
        if (hasGrade(val, form.MarkType) && isInValidGrade(val)) {
          markElem = form.Mark;
        }
      }
      if (markElem) {
        alert(strInvGrade);
        markElem.focus();
        return false;
      }
      return true;
    };
    extraData = {
      sgid: ctx.subjectGroupId,
      type: ctx.termInfo.termTypeId,
      periodId: ctx.termId
    };
    if (ctx.gradingSys !== 1) {
      if (!isValidMarks(form)) {
        return false;
      }
      if ($('input[name=Mark][value=0]').length > 0) {
        defArgs = function() {
          return $.when(!dataWereChanged || $.show.confirmation(language.Generic.Grade.kZeroMarkConfirm)).promise();
        };
      }
    }
    return extDeferred.when(defArgs).then(function() {
      if (ctx.gradingSys !== 1) {
        $('input[name=Mark]').removeAttr("disabled");
        return jsSaveForm(form, extraData, "SaveTotal.asp").then(function() {});
      }
    });
  };

  JournalTotalsCtrl.prototype.display = function() {
    var changeElem, ctrl, filtersHtml, filtersModel, filtersTemplate, markTypes, model, template;
    ctrl = this;
    markTypes = [];
    markTypes.push({
      markTypeId: 0,
      markTypeName: language.Generic.Common.kWithoutMark
    });
    if (!appContext.isTkr) {
      if (ctx.gradingSys !== 1 && ctx.gradingSys === 2) {
        markTypes.push({
          markTypeId: -5,
          markTypeName: language.Generic.Common.kNotRated
        });
      }
      if (ctx.gradingSys === 1) {
        markTypes.push({
          markTypeId: ctx.maxMark,
          markTypeName: language.Generic.Common.kPass
        });
        markTypes.push({
          markTypeId: ctx.minMark,
          markTypeName: language.Generic.Common.kNotPass
        });
      }
    }
    markTypes.push({
      markTypeId: -1,
      markTypeName: language.Generic.Common.kNonAttest
    });
    markTypes.push({
      markTypeId: -2,
      markTypeName: language.Generic.Common.kExempted
    });
    if (appContext.isTkr) {
      markTypes.push({
        markTypeId: -3,
        markTypeName: language.Generic.Common.kAccepted
      });
      markTypes.push({
        markTypeId: -4,
        markTypeName: language.Generic.Common.kStudied
      });
    }
    model = {
      language: language,
      students: this.students,
      termInfo: ctx.termInfo,
      addMarks: [
        {
          title: language.Generic.Common.kAverageMark,
          marks: _.indexBy(_.pluck(ctx.avgMarks, 'avgMark'), 'studentId')
        }
      ],
      markTypes: markTypes,
      gradingSys: ctx.gradingSys
    };
    template = Handlebars.compile(journalTotalsTemplate);
    this.container.html(template(model));
    changeElem = function(el, val) {
      var mtype;
      if (val < 0) {
        mtype = $(el).parent().find("[name=MarkType]")[0];
        val = mtype.options[mtype.selectedIndex].text;
      } else {
        if (val !== "") {
          val = parseInt(val);
          if (isNaN(val)) {
            val = "";
          }
        }
      }
      el.value = val;
      $(el).change();
      return dataChanged();
    };
    $('select[name=MarkType]').change(function() {
      var elMark, markType, nMarkType;
      markType = this;
      elMark = $(markType).parents('tr:first').find('input[name=Mark]')[0];
      nMarkType = +markType.value;
      if (nMarkType > 0) {
        changeElem(elMark, elMark.value);
        elMark.disabled = false;
        elMark.style.backgroundColor = '';
        return elMark.focus();
      } else {
        changeElem(elMark, nMarkType);
        elMark.disabled = true;
        return elMark.style.backgroundColor = 'lightgray';
      }
    });
    $("input[name=Mark]:enabled").navigateInputs({
      getCellInputOptions: function(elem) {
        return {
          maxMark: ctx.maxMark,
          minMark: ctx.minMark,
          maxLength: (ctx.maxMark + "").length
        };
      },
      getNextInput: function(elem, selector, step) {
        var elemIndex, nextRowElements, nextRowIndex, row, rowsCnt;
        row = elem.parentNode.parentNode;
        elemIndex = $(selector, row).index(elem);
        nextRowIndex = row.rowIndex + step;
        rowsCnt = row.parentNode.rows.length;
        while (nextRowIndex > 0 && nextRowIndex < rowsCnt) {
          nextRowElements = $(selector, $('tr', row.parentNode)[nextRowIndex]);
          if (nextRowElements.length > 0 && nextRowElements[elemIndex]) {
            return nextRowElements[elemIndex];
          }
          nextRowIndex = nextRowIndex + step;
        }
      }
    });
    filtersModel = {
      language: language,
      subjectGroupName: ctx.subjectGroupName,
      termName: ctx.termName,
      className: ctx.className
    };
    filtersTemplate = Handlebars.compile(templateManager.filterTpl);
    filtersHtml = filtersTemplate(filtersModel);
    $('#state-totals .filters-panel').html(filtersHtml);
    if ($('input[name=autoExpose]').length > 0) {
      $('input[name=autoExpose]').click(function() {
        var bOfferentMarkInputs, i, j, ref, results, txt, val;
        bOfferentMarkInputs = $('input[marktype=true]');
        if (bOfferentMarkInputs.length > 0) {
          results = [];
          for (i = j = 0, ref = bOfferentMarkInputs.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            if (bOfferentMarkInputs[i].value !== "") {
              bOfferentMarkInputs[i].value = "";
              results.push(bOfferentMarkInputs[i].style.backgroundColor = '');
            } else {
              txt = $(bOfferentMarkInputs[i]).parent().prev().text();
              txt = txt.replace(",", ".");
              val = parseFloat(txt);
              if (!isNaN(val)) {
                bOfferentMarkInputs[i].value = Math.round(val);
                bOfferentMarkInputs[i].style.backgroundColor = '#D4FFFF';
                results.push(bOfferentMarkInputs[i].style.color = 'blue');
              } else {
                results.push(void 0);
              }
            }
          }
          return results;
        }
      });
    }
    return $(document).trigger('journalTotalsShow');
  };

  JournalTotalsCtrl.prototype.close = function() {
    this.ejLayoutManager.destroy();
    return this.ejLayoutManager = null;
  };

  return JournalTotalsCtrl;

})();

module.exports = JournalTotalsCtrl;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var JournalTotalsTemplateManager;

JournalTotalsTemplateManager = (function() {
  function JournalTotalsTemplateManager() {}

  JournalTotalsTemplateManager.prototype.filterTpl = '<div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">' + language.Generic.Common.kSubject + '</label> <div class="col-md-8 col-lg-5 col-sm-8"> <span class="form-control form-control-title"> <span class="text">{{className}}/{{subjectGroupName}}</span> </span> </div> </div> <div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">' + language.Generic.Common.kSchoolPeriod + '</label> <div class="col-md-8 col-lg-5 col-sm-8"> <span class="form-control form-control-title"> <span class="text">{{termName}}</span> </span> </div> </div> <div class="checkbox"><label><input TYPE="checkbox" NAME="autoExpose" VALUE="1">' + language.Generic.Grade.kAutoExpose + '</label></div> <div class="legend"> <div> <p><span class="legend-label text-center" style="background-color:#D4FFFF; color:blue">4</span><span class="legend-description"> — ' + language.Generic.Grade.kOfferedMarks + '</span></p> <p><span class="legend-label text-center">4</span><span class="legend-description"> — ' + language.Generic.Grade.kFixedMarks + '</span></p> </div> </div>';

  return JournalTotalsTemplateManager;

})();

module.exports = JournalTotalsTemplateManager;


/***/ })
/******/ ]);