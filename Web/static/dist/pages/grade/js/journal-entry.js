var PageController;

PageController = (function() {
  var EditJournalCtrl, JournalCtrl, JournalTotalsCtrl, renderCtr, stateManagerModule;

  stateManagerModule = require("./../../common/js/stateManager.coffee");

  JournalCtrl = require("./journal.coffee");

  EditJournalCtrl = require("./editjournal.coffee");

  JournalTotalsCtrl = require("./journalTotalsCtrl.coffee");

  renderCtr = require("./journal-render.js").JournalRender;

  function PageController(journalPreparedFp, extraActivity, extStateId) {
    var State, assignmentsState, cmId, defaultState, editAssignmentState, editJournalController, editState, forceDrawLegend, journalTotalsController, prepareJournalData, totalsState;
    this.extraActivity = extraActivity;
    this.extStateId = extStateId;
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
    prepareJournalData = (function(_this) {
      return function(journalsData) {
        var journalData;
        journalData = journalsData.journals[0];
        journalData.editLimit = journalsData.editLimit;
        journalData.markSettings = journalsData.markSettings;
        journalData.classMeeting = journalData.classMeeting || [];
        _.each(journalData.classMeeting, function(cm) {
          return cm.date = new Date(cm.date);
        });
        return journalData.forceLoad = true;
      };
    })(this);
    forceDrawLegend = (function(_this) {
      return function() {
        var journalRender, legend, tkr;
        tkr = false;
        journalRender = new renderCtr();
        legend = journalRender.RenderJournalLegend(tkr) + journalRender.RenderAttendanceLegend();
        $("#edit-journal-container").nextAll().remove();
        return $("#edit-journal-container").after(legend);
      };
    })(this);
    editJournalController = null;
    editState = new State('edit', language.Generic.Grade.kEditJournal).setOnEnter((function(_this) {
      return function(args) {
        var editCtx, filterData, filterText, fp, loadJournalData;
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
        loadJournalData = $.Deferred().resolve(_this.journalCtrl.journalData);
        if (!_this.journalCtrl.journalData) {
          loadJournalData = jsSubmit({
            action: "/webapi/grade/journal/short",
            method: "GET",
            data: {
              cmid: args.cmId
            }
          }).then(function(response) {
            prepareJournalData(response);
            return response.journals[0];
          });
        }
        return $.when(loadJournalData).then(function(journalData) {
          var editJournalContainer;
          editJournalContainer = $("#edit-journal-container");
          if (journalData.forceLoad) {
            forceDrawLegend();
          }
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
    editAssignmentState = new State("edit-assignment", language.Generic.Curriculum.kEditAssignment).setOnEnter((function(_this) {
      return function() {
        return _this.stateManager.setState(defaultState.id);
      };
    })(this));
    assignmentsState = new State("assignments", language.Grade.kEditJournalAssignments).setOnEnter((function(_this) {
      return function() {
        var urlParam;
        urlParam = "";
        if (_this.extraActivity) {
          urlParam += "?extraActivity=true";
        }
        return $.Deferred().resolve(postTo("/angular/school/journal/assignments/" + urlParam)).promise();
      };
    })(this));
    this.stateManager.defineState(defaultState);
    this.stateManager.defineState(editState);
    this.stateManager.defineState(totalsState);
    this.stateManager.defineState(editAssignmentState);
    this.stateManager.defineState(assignmentsState);
    this.initialRoute = window.location.hash;
    if (this.initialRoute.startsWith("#edit-")) {
      cmId = parseInt(this.initialRoute.replace("#edit-", ""));
      this.stateManager.setState(editState.id, {
        cmId: cmId
      });
    }
    if (this.extStateId) {
      this.stateManager.setPrevState(this.extStateId);
    }
    window.onhashchange = (function(_this) {
      return function() {
        var hash;
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
    if (!this.stateManager.currentState) {
      this.stateManager.setState(defaultState.id);
    }
    if (!this.stateManager.prevState) {
      this.stateManager.setPrevState(defaultState.id);
    }
  }

  return PageController;

})();

module.exports = PageController;
