var JournalCtrl;

JournalCtrl = (function() {
  var QuickEditController, _hideInfoMessage, _showInfoMessage, layoutManagerCtr, renderCtr, renderJournal, resourceLoader;

  renderCtr = require("./journal-render.js").JournalRender;

  layoutManagerCtr = require("./journal-layout.coffee");

  QuickEditController = require("./journal-quickedit.coffee");

  resourceLoader = require("./resourceLoader.coffee");

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
    exporter = require("./journal-print.coffee");
    return new exporter().printJournal();
  };

  JournalCtrl.prototype.exportJournal = function() {
    var exporter;
    exporter = require("./journal-print.coffee");
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
