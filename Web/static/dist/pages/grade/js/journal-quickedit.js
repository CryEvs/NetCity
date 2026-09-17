var QuickEditController;

QuickEditController = (function() {
  var gradeConstants, resourceLoader;

  resourceLoader = require("./resourceLoader.coffee");

  gradeConstants = require("./journal-constants.js");

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
