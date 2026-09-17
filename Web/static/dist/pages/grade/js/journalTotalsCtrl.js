var JournalTotalsCtrl;

JournalTotalsCtrl = (function() {
  var ctx, data, layoutManager, resourceLoader, templateManager;

  data = null;

  templateManager = new (require("./journalTotals-templates.coffee"));

  resourceLoader = require("./resourceLoader.coffee");

  layoutManager = require("./editJournal-layout.coffee");

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
