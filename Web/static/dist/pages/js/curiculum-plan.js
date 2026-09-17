var addLimitsToPlanCtrl, curiculumPlanCtrl, floatToPlan;

_.mixin({
  'findByValues': function(collection, property, values) {
    return _.filter(collection, function(item) {
      return _.contains(values, item[property]);
    });
  }
});

floatToPlan = function(val) {
  if (val === 0) {
    return "";
  } else {
    if (val % 1 > 0) {
      val = parseFloat(val.toFixed(2));
    }
    return float2str(val);
  }
};

addLimitsToPlanCtrl = (function() {
  var _addLimitsTemplate, _classesHoursPartial, _gradeHoursPartial, _helpers, _subjectFilterPartial;

  function addLimitsToPlanCtrl(params1) {
    this.params = params1;
    this.data = {};
  }

  _addLimitsTemplate = '	<form name="addLimits" class="form-horizontal"> <div class="form-group component-filter"> <label class="control-label col-md-4">' + language.Generic.SetupSchoolCalendar.kComponent + '</label> <div class="col-md-8"> <select name="COMPID" class="form-control"> {{#each componentList}} <option value="{{id}}">{{name}}</option> {{/each}} </select> </div> </div> {{> subjectFilterPartial}} {{> hoursPartial}} </form>';

  _subjectFilterPartial = '{{#if subjects.length}} <div class="form-group subject-filter"> <label class="control-label col-md-4">' + language.Generic.Common.kSubject + '</label> <div class="col-md-8"> <select name="SUBJID" class="form-control"> {{#each subjects}}cur <option value="{{id}}">{{name}}</option> {{/each}} </select> </div> </div> {{/if}} {{#unless subjects.length}} <div class="alert alert-danger subject-filter" role="alert">' + language.Generic.SetupSchoolCalendar.kAllSubjectsAddedToSubjectPlan + '</div> {{/unless}}';

  _classesHoursPartial = '{{#if subjects.length}} <div class="classes"> {{#each profileClasses}} <div class="panel panel-default"> <div class="panel-heading" role="tab" id="heading{{profileId}}" style="cursor: pointer"> <h4 class="panel-title"> <a data-toggle="collapse" class="collapsed" data-target="#{{profileId}}" aria-expanded="true" aria-controls="{{profileId}}">{{profileName}}</a> </h4> </div> <div id="{{profileId}}" class="panel-collapse collapse in" aria-labelledby="heading{{profileId}}" role="tabpanel"> <div class="panel-body"> <div class="table-responsive"> <table class="table table-xs table-bordered table-thin"> <tr> {{#each gradeClasses}} <th colspan="{{classList.length}}"> {{grade}} </th> {{/each}} </tr> <tr> {{#each gradeClasses}} {{#each classList}} <th> {{className}} </th> {{/each}} {{/each}} </tr> <tr> {{#each gradeClasses}} {{#each classList}} <td class="input-cell"> <input name="Hours" id="{{classId}}" type="text" value="" maxlength="4" size="2" onchange="dataChanged()" autocomplete="off"> </td> {{/each}} {{/each}} </tr> </table> </div> </div> </div> </div> {{/each}} </div> {{/if}}';

  _gradeHoursPartial = '	{{#if subjects.length}} <div class="grades"> <table class="table table-xs table-bordered table-thin"> <tr> {{#each iupClasses}} <th colspan="{{classIds.length}}"> {{grade}} </th> {{/each}} </tr> <tr> {{#each iupClasses}} {{#each classIds}} <th> {{name}} </th> {{/each}} {{/each}} </tr> <tr> {{#each iupClasses}} {{#each classIds}} <td class="input-cell"> <input name="Hours" id="{{id}}" type="text" value="" maxlength="4" size="2" onchange="dataChanged()" autocomplete="off"> </td> {{/each}} {{/each}} </tr> </table> </div> {{/if}}';

  _helpers = {
    hoursKeyPress: function() {
      return $('input[name="Hours"]').on("keypress", function(e) {
        var chr, key;
        e = e || window.event;
        key = e.keyCode || e.which || e.charCode;
        if (key === 8 || key === 9 || key === 46) {
          return;
        }
        chr = String.fromCharCode(key);
        return "1234567890,.".indexOf(chr) > -1;
      });
    },
    onChangeHours: function() {
      return $('input[name="Hours"]').on("change", function(e) {
        var elem, setLoad;
        elem = $(e.target);
        dataChanged();
        setLoad = str2floatVal(elem.val());
        return elem.val(floatToPlan(setLoad));
      });
    },
    getSubjects: function(params) {
      var subjectIds, subjects;
      subjectIds = _.map(params.componentSubjectsList[params.currComponentId], function(obj) {
        return obj.subjectId;
      });
      subjects = _.findByValues(params.subjectData, "id", subjectIds);
      return subjects;
    },
    convertGradeSet2GradeList: function(params) {
      var i, j, ref, ref1, results;
      results = [];
      for (i = j = ref = params.minGrade, ref1 = params.maxGrade; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
        if ((Math.pow(2, i) & params.gradeSet) !== 0) {
          results.push(i);
        }
      }
      return results;
    },
    prepareIupClasses: function(params) {
      var gradeList;
      gradeList = [];
      _.each(params.gradeList, function(grade) {
        var _classIds;
        if (grade < params.minGrade || grade > params.maxGrade) {
          return;
        }
        _classIds = [];
        _.each(params.iupLevelData, function(value) {
          var _res;
          _res = {
            id: grade + '_' + value.levelId,
            name: value.shortName
          };
          return _classIds.push(_res);
        });
        return gradeList.push({
          grade: grade,
          classIds: _classIds
        });
      });
      return gradeList;
    },
    prepareClassesProfiles: function(params) {
      var _results;
      _results = [];
      _.each(params.profileGradesData, function(value) {
        var _temp, classList, gradeClasses, profileGrades;
        profileGrades = _.filter(value.gradeList, function(item) {
          return _.contains(params.componentGradeList[params.currComponentId], item);
        });
        if (!profileGrades.length) {
          return;
        }
        classList = _.filter(params.gradeClassesData, function(item) {
          return item.profileId === value.profileId;
        });
        if (!classList.length) {
          return;
        }
        classList = _.filter(classList, function(item) {
          return _.contains(profileGrades, item.grade);
        });
        if (!classList.length) {
          return;
        }
        gradeClasses = _.groupBy(classList, 'grade');
        _temp = [];
        _.each(gradeClasses, function(value, key) {
          return _temp.push({
            grade: key,
            classList: value
          });
        });
        gradeClasses = _temp;
        return _results.push({
          profileId: value.profileId,
          profileName: value.profileName,
          gradeClasses: gradeClasses
        });
      });
      return _results;
    }
  };

  addLimitsToPlanCtrl.prototype.addLimits = function() {
    return jsSubmit({
      action: '/asp/ajax/Curiculum.asp',
      showProcessing: true,
      form: document.forms.Filter,
      data: this.params,
      onSuccess: (function(_this) {
        return function(response) {
          var _data, _iupClasses, _profileClasses, _subjects, addBtn, fullTemplate, hoursTemplate, html, model, subjectFilterTemplate;
          _data = response.data;
          _this.data['componentList'] = _data.componentData;
          _this.data['subjectComponentData'] = _data.subjectComponentData;
          _this.data['subjectData'] = _data.subjectData;
          _this.data['curriculumLimitsData'] = _data.curriculumLimitsData;
          if (!_this.params.isIUP) {
            _this.data['profileGradesData'] = _data.profileGradesData;
            _this.data['gradeClassesData'] = _data.gradeClassesData;
          } else {
            _this.data['iupLevelData'] = _data.iupLevelData;
          }
          if (!_this.data.componentList.length) {
            return alert(language.Generic.SetupSchoolCalendar.kCurriculumLimitsNotDefined);
          }
          _this.params['currComponentId'] = _.first(_this.data.componentList).id;
          _this.params['componentIds'] = _.map(_this.data.componentList, function(obj) {
            return obj.id;
          });
          _this.params['componentSubjectsList'] = _.groupBy(_this.data.subjectComponentData, 'componentId');
          _this.params['componentGradeList'] = _.groupBy(_.findByValues(_this.data.curriculumLimitsData, 'componentId', _this.params.componentIds), 'componentId');
          _subjects = _helpers.getSubjects({
            currComponentId: _this.params.currComponentId,
            componentSubjectsList: _this.params.componentSubjectsList,
            subjectData: _this.data.subjectData
          });
          _this.params.componentGradeList = (function() {

            /* приведение к виду:
            							{
            								componentId: [1, 2, 3] - список параллелей,
            								componentId2: [10, 11]
            							}
             */
            var _result;
            _result = {};
            _.each(_this.params.componentGradeList, function(value, key) {
              return _result[key] = _.map(value, function(obj) {
                return obj.gradeId;
              });
            });
            return _result;
          })();
          if (!_this.params.isIUP) {
            _.map(_this.data.profileGradesData, function(_element) {
              _element['gradeList'] = _helpers.convertGradeSet2GradeList({
                gradeSet: _element.gradeSet,
                minGrade: _this.params.minGrade,
                maxGrade: _this.params.maxGrade
              });
              return _element;
            });
            _profileClasses = _helpers.prepareClassesProfiles({
              currComponentId: _this.params.currComponentId,
              componentGradeList: _this.params.componentGradeList,
              gradeClassesData: _this.data.gradeClassesData,
              profileGradesData: _this.data.profileGradesData
            });
          } else {
            _iupClasses = _helpers.prepareIupClasses({
              gradeList: _this.params.componentGradeList[_this.params.currComponentId],
              iupLevelData: _this.data.iupLevelData,
              minGrade: _this.params.minGrade,
              maxGrade: _this.params.maxGrade
            });
          }
          fullTemplate = Handlebars.compile(_addLimitsTemplate);
          subjectFilterTemplate = Handlebars.compile(_subjectFilterPartial);
          hoursTemplate = _this.params.isIUP ? Handlebars.compile(_gradeHoursPartial) : Handlebars.compile(_classesHoursPartial);
          Handlebars.registerPartial("subjectFilterPartial", subjectFilterTemplate);
          Handlebars.registerPartial("hoursPartial", hoursTemplate);
          model = {
            componentList: _this.data.componentList,
            subjects: _subjects
          };
          if (_this.params.isIUP) {
            model['iupClasses'] = _iupClasses;
          } else {
            model['profileClasses'] = _profileClasses;
          }
          html = fullTemplate(model);
          addBtn = function(dialog) {
            var _hoursNotFilled, _result;
            if (!_subjects.length) {
              return;
            }
            _hoursNotFilled = true;
            $.each($('form[name="addLimits"] input[name="Hours"]'), function(index, value) {
              if ($(value).val()) {
                _hoursNotFilled = false;
                return false;
              }
            });
            if (_hoursNotFilled) {
              return alert(language.Generic.SetupSchoolCalendar.kNecessarySetHours);
            }
            _result = {
              componentId: _this.params.currComponentId,
              subjectId: parseInt($('form[name="addLimits"] select[name="SUBJID"] option:selected').val(), 10),
              classesHours: {}
            };
            $.each($('form[name="addLimits"] input[name="Hours"]'), function(index, value) {
              var $value, _classId, _hours;
              $value = $(value);
              if ($value.val()) {
                _classId = $value.attr('id');
                _hours = str2floatVal($value.val());
                return _result.classesHours[_classId] = _hours;
              }
            });
            return controller.save(_result);
          };
          return $.show.dialog({
            title: language.Generic.SetupSchoolCalendar.kAddComponentLimit,
            message: html,
            size: BootstrapDialog.SIZE_WIDE,
            buttons: [
              {
                label: language.Generic.Buttons.kAdd,
                action: addBtn,
                cssClass: 'btn-primary'
              }
            ],
            onshown: function(dialog) {
              _helpers.hoursKeyPress();
              _helpers.onChangeHours();
              $('select[name="COMPID"] option').first().prop('selected', true);
              return $('select[name="COMPID"]').on('change', function() {
                var hoursHtml, subjectsHtml, subjectsTemplate;
                $('.subject-filter').remove();
                if (_this.params.isIUP) {
                  $('.grades').remove();
                } else {
                  $('.classes').remove();
                }
                _this.params.currComponentId = $('form[name="addLimits"] select[name="COMPID"] option:selected').val();
                subjectsTemplate = Handlebars.compile(_subjectFilterPartial);
                hoursTemplate = _this.params.isIUP ? Handlebars.compile(_gradeHoursPartial) : Handlebars.compile(_classesHoursPartial);
                _subjects = _helpers.getSubjects({
                  currComponentId: _this.params.currComponentId,
                  componentSubjectsList: _this.params.componentSubjectsList,
                  subjectData: _this.data.subjectData
                });
                subjectsHtml = subjectsTemplate({
                  subjects: _subjects
                });
                if (_this.params.isIUP) {
                  model = {
                    subjects: _subjects,
                    iupClasses: _helpers.prepareIupClasses({
                      gradeList: _this.params.componentGradeList[_this.params.currComponentId],
                      iupLevelData: _this.data.iupLevelData,
                      minGrade: _this.params.minGrade,
                      maxGrade: _this.params.maxGrade
                    })
                  };
                } else {
                  model = {
                    subjects: _subjects,
                    profileClasses: _helpers.prepareClassesProfiles({
                      currComponentId: _this.params.currComponentId,
                      componentGradeList: _this.params.componentGradeList,
                      gradeClassesData: _this.data.gradeClassesData,
                      profileGradesData: _this.data.profileGradesData
                    })
                  };
                }
                hoursHtml = hoursTemplate(model);
                $('.component-filter').after(subjectsHtml);
                $('.subject-filter').after(hoursHtml);
                _helpers.hoursKeyPress();
                return _helpers.onChangeHours();
              });
            }
          });
        };
      })(this)
    });
  };

  return addLimitsToPlanCtrl;

})();

curiculumPlanCtrl = (function() {
  var _copyButton, _getCuriculumPlan, _prepareClassId;

  curiculumPlanCtrl.prototype.model = null;

  curiculumPlanCtrl.prototype.options = null;

  _copyButton = null;

  _prepareClassId = function(rawClassId) {
    return parseInt(rawClassId);
  };

  function curiculumPlanCtrl() {}

  curiculumPlanCtrl.prototype.initPlan = function(options, modelExt) {
    this.options = options;
    _copyButton = $("#copy-btn-block");
    if (options.prepareClassId) {
      _prepareClassId = options.prepareClassId;
    }
    if (options.canCopy) {
      _copyButton.removeClass("hidden");
    }
    return jsSubmit({
      action: "CuriculumPlan_Frame.asp",
      dataType: "HTML",
      onSuccess: (function(_this) {
        return function(response) {
          var curiculumStat, limitPredicate, limits, toGradeLimits, totalLimitComponent, totalLimits;
          $("#plan-body").html(response);
          if (typeof window.hideAddLimitsButton !== "undefined") {
            $('.add-limits-button').hide();
          }
          curiculumStat = window.curiculumStat;
          if (!curiculumStat) {
            $.show.error("Неожиданная ошибка. Ошибка загрузки УП");
            return;
          }
          limitPredicate = function(classLoad) {
            return classLoad.classId === 0 || classLoad.classId === "0";
          };
          toGradeLimits = function(classesLoads) {
            return _.indexBy(_.map(_.filter(classesLoads, limitPredicate), function(obj) {
              return {
                gradeId: obj.gradeId,
                limit: obj.subjectsLoad[0].hours
              };
            }), "gradeId");
          };
          totalLimitComponent = _.findWhere(curiculumStat, {
            componentId: 0
          });
          if (totalLimitComponent) {
            totalLimits = toGradeLimits(totalLimitComponent.classesLoad);
          }
          curiculumStat = _.filter(curiculumStat, function(componentLoad) {
            return componentLoad.componentId > 0;
          });
          limits = _.map(curiculumStat, function(componentLoad) {
            return {
              componentId: componentLoad.componentId,
              gradesLimits: toGradeLimits(componentLoad.classesLoad)
            };
          });
          _.each(curiculumStat, function(componentLoad) {
            return componentLoad.classesLoad = _.indexBy(_.reject(componentLoad.classesLoad, limitPredicate), "classId");
          });
          _this.model = {
            totalLimits: totalLimits,
            limits: _.indexBy(limits, "componentId"),
            hours: curiculumStat,
            subjects: {}
          };
          if (modelExt) {
            _this.model = $.extend(_this.model, modelExt);
          }
          return _this.showPlan(options);
        };
      })(this)
    });
  };

  curiculumPlanCtrl.prototype.showPlan = function(options) {
    var adjustHeaderCells, adjustPlanWidth, classRow, convertInput, frame, framedoc, getFirstRowForTable, getLastRowForTable, getWidth, headerWidth, helpRow, infoMessage, legend, maxWidth, msie, planBody, planContainer, planHeader, planTable, planTableHeader, scroll_correction, setMaxWidth, syncAllColumns, syncBaseColumns, syncClassColumns, totalLoadRow, totalTeachersLoadRow;
    msie = bowser.msie;
    framedoc = document;
    planBody = $("#plan-body");
    planHeader = $("#plan-header");
    planBody.on("scroll", function() {
      return planHeader.scrollLeft(planBody.scrollLeft());
    });
    planTableHeader = document.getElementById('plan-table-header');
    planTable = document.getElementById('plan-table');
    planContainer = $("#plan-container");
    frame = document.getElementById('plan-body');
    legend = $('div.legend');
    infoMessage = $("#process-message");
    helpRow = $(planTable).find("tr#help-row");
    totalLoadRow = $(planTable).find("tr.total-fact-load-row");
    totalTeachersLoadRow = $(planTable).find("tr.total-teacher-load-row");
    classRow = planHeader.find("tr.class-row");
    convertInput = (function(_this) {
      return function(e) {
        var cell, cellWidth, classCell, classid, componentCellIndex, componentId, componentLoadCell, gradeid, helpCell, input, onChangeHours, preColspan, preLoad, preValue, span, subjectCell, subjectRow, subjectid, totalCellIndex, totalLoadCell, totalTeacherLoadCell;
        span = $(e.target);
        cell = span.parent();
        if (span.text()) {
          preValue = span.text().trim();
        } else {
          preValue = "";
        }
        preLoad = 0;
        if (preValue !== "") {
          preLoad = str2floatVal(preValue);
        }
        subjectRow = cell.closest("tr");
        preColspan = 0;
        componentCellIndex = cell.prop("cellIndex");
        subjectRow.find("td").lt(componentCellIndex).gt(0)[colspan].each(function() {
          return preColspan = preColspan += -1 + parseInt($(this).prop("colspan"));
        });
        totalCellIndex = componentCellIndex + preColspan;
        cellWidth = cell.prop("clientWidth");
        totalTeacherLoadCell = null;
        totalLoadCell = null;
        componentLoadCell = null;
        setTimeout(function() {
          totalTeacherLoadCell = totalTeachersLoadRow.find("td").eq(totalCellIndex);
          totalLoadCell = totalLoadRow.find("td").eq(totalCellIndex);
          return componentLoadCell = subjectRow.prevAll("tr.component-fact-load-row").first().find("td").eq(componentCellIndex);
        }, 0);
        helpCell = helpRow.find("th").eq(totalCellIndex);
        classCell = classRow.find("th").eq(totalCellIndex - 1);
        subjectCell = subjectRow.first("td");
        classid = _prepareClassId(helpCell.find("input[name=classid]").val());
        gradeid = parseInt(helpCell.find("input[name=gradeid]").val());
        subjectid = parseInt(subjectCell.find("input[name=SUBJID]").val());
        componentId = parseInt(subjectCell.find("input[name=COMPID]").val());
        input = $("<input />").attr("type", "text").attr("maxlength", 4).val(preValue);
        span.replaceWith(input);
        classCell.addClass("hover");
        input.on("keypress", function(e) {
          var chr, key;
          e = e || window.event;
          key = e.keyCode || e.which || e.charCode;
          if (key === 8 || key === 9 || key === 46) {
            return;
          }
          if (key === 13) {
            input.trigger("blur");
            return false;
          }
          chr = String.fromCharCode(key);
          return "1234567890,.".indexOf(chr) > -1;
        });
        onChangeHours = function(e) {
          var elem, hoursDelta, setLoad;
          elem = $(e.target);
          dataChanged();
          setLoad = str2floatVal(elem.val());
          elem.val(floatToPlan(setLoad));
          hoursDelta = setLoad - preLoad;
          _this.setLoad(componentId, classid, gradeid, subjectid, setLoad);
          cell.addClass("waschanged");
          return setTimeout(function() {
            var componentLimit, newComponentLoad, prevComponentLoad, sgCount, sgCountInfo, totalLimit, totalLoad, totalLoadDelta, totalTeacherLoad;
            if (totalTeacherLoadCell.length === 1) {
              totalTeacherLoad = str2floatVal(totalTeacherLoadCell.text());
              sgCount = 1;
              if (_this.model.sgClassesCnt) {
                sgCountInfo = _.findWhere(_this.model.sgClassesCnt, {
                  classid: _prepareClassId(classid, {
                    subjectid: subjectid
                  })
                });
                if (sgCountInfo) {
                  sgCount = sgCountInfo.cnt;
                }
              }
              totalTeacherLoad = (totalTeacherLoad - preLoad * sgCount) + setLoad * sgCount;
              totalTeacherLoadCell.html(floatToPlan(totalTeacherLoad));
            }
            totalLoadDelta = 0;
            if (componentLoadCell.length === 1) {
              prevComponentLoad = str2floatVal(componentLoadCell.text());
              newComponentLoad = _this.getClassComponentHours(_this.model, classid, componentId);
              totalLoadDelta = newComponentLoad - prevComponentLoad;
              componentLimit = _this.getLimit(componentId, gradeid);
              componentLoadCell.html(floatToPlan(newComponentLoad));
              if (newComponentLoad > componentLimit) {
                componentLoadCell.addClass("overflow");
              } else {
                componentLoadCell.removeClass("overflow");
              }
            }
            if (totalLoadCell.length === 1) {
              totalLoad = str2floatVal(totalLoadCell.text());
              totalLoad = totalLoad + totalLoadDelta;
              totalLimit = _this.getLimit(0, gradeid);
              totalLoadCell.html(floatToPlan(totalLoad));
              if (totalLoad > totalLimit) {
                totalLoadCell.addClass("overflow");
              } else {
                totalLoadCell.removeClass("overflow");
              }
            }
            preLoad = setLoad;
            syncAllColumns();
            setMaxWidth();
            return adjustPlanWidth();
          }, 0);
        };
        input.on("blur", function(e) {
          var lastValue, load, wasChanged;
          lastValue = trimStr(input.val());
          load = 0;
          if (lastValue === "") {
            lastValue = "&nbsp;";
          } else {
            load = str2floatVal(lastValue);
            if (load === 0) {
              lastValue = "&nbsp;";
            } else {
              lastValue = floatToPlan(load);
            }
          }
          wasChanged = preLoad !== load;
          if (wasChanged) {
            onChangeHours(e);
          }
          span = $("<span></span>").append(lastValue);
          input.remove();
          cell.append(span);
          span.on("click", convertInput);
          return classCell.removeClass("hover");
        });
        return input.select();
      };
    })(this);
    $("td.input-cell > span").on("click", convertInput);
    getLastRowForTable = function(container, id) {
      return $(container).find('#' + id + ' tr:last-child')[0];
    };
    getFirstRowForTable = function(container, id) {
      return $(container).find('#' + id + ' tr:first-child')[0];
    };
    syncBaseColumns = function() {
      var subjectBodyColWidth, subjectHeaderCol;
      subjectBodyColWidth = getWidth(getFirstRowForTable(document, 'plan-table').firstChild);
      subjectHeaderCol = document.getElementById('secol');
      subjectHeaderCol.width = subjectBodyColWidth;
      return $(subjectHeaderCol).css("min-width", subjectBodyColWidth);
    };
    getWidth = function(elem) {
      return elem.offsetWidth;
    };
    syncClassColumns = function() {
      var cell, cellsize, header, headersize, i, j, ref, results;
      header = getLastRowForTable(document, 'plan-table-header').lastChild;
      cell = getFirstRowForTable(document, 'plan-table').lastChild;
      results = [];
      for (i = j = ref = options.colsCount - 2; ref <= 1 ? j <= 1 : j >= 1; i = ref <= 1 ? ++j : --j) {
        headersize = getWidth(header);
        cellsize = getWidth(cell);
        header.width = cellsize;
        header.style.width = cellsize;
        header = header.previousSibling;
        results.push(cell = cell.previousSibling);
      }
      return results;
    };
    syncAllColumns = function() {
      syncBaseColumns();
      syncClassColumns();
    };
    adjustPlanWidth = function() {
      var delta, headerWidth, planBodyTotalWidth;
      delta = planTable.offsetWidth - planBody.prop("clientWidth");
      if (delta > 0) {
        planBodyTotalWidth = planBody.prop("offsetWidth");
        if (planBodyTotalWidth + delta < maxWidth) {
          planBody.width(planBodyTotalWidth + delta);
        }
      }
      headerWidth = getWidth(planTableHeader);
      frame.width = headerWidth + scroll_correction;
      planTable.width = headerWidth;
      headerWidth = getWidth(planTable);
      if (planTableHeader.width < headerWidth) {
        planTableHeader.width = headerWidth;
      } else {
        planTable.width = getWidth(planTableHeader);
      }
      frame.width = headerWidth + scroll_correction + 3;
      return planHeader.css("max-width", planBody.prop("clientWidth"));
    };
    adjustHeaderCells = function() {
      return $("tr.header-row > th").each(function(i, th) {
        var headerText;
        th = $(th);
        headerText = th.text();
        if (th.width() < 100) {
          th.empty();
          th.append($("<small></small>").addClass("text-vertical text-compact").append($("<i></i>").append(headerText)));
          return th.addClass("vertical");
        }
      });
    };
    setMaxWidth = function() {
      var maxWidth;
      maxWidth = planContainer.prop("clientWidth");
      planBody.css("max-width", maxWidth);
      planHeader.css("max-width", planBody.prop("clientWidth"));
      return maxWidth;
    };
    maxWidth = setMaxWidth();
    $(window).on("resize", setMaxWidth);
    scroll_correction = 0;
    if (frame.height < planTable.clientHeight) {
      scroll_correction = options.scrollBarWidth;
    } else {
      frame.height = planTable.clientHeight + options.scrollBarWidth;
    }
    if (msie || bowser.firefox && options.readonly) {
      frame.width = 6000;
      syncBaseColumns();
      headerWidth = getWidth(planTableHeader);
      if (getWidth(planTableHeader) + scroll_correction < headerWidth) {
        planTable.width = headerWidth;
      }
    }
    syncAllColumns();
    headerWidth = getWidth(planTableHeader);
    frame.width = headerWidth + scroll_correction;
    planTable.width = headerWidth;
    headerWidth = getWidth(planTable);
    if (planTableHeader.width < headerWidth) {
      planTableHeader.width = headerWidth;
    } else {
      planTable.width = getWidth(planTableHeader);
    }
    frame.width = headerWidth + scroll_correction + 3;
    adjustPlanWidth();
    adjustHeaderCells();
    this.highlightOverflows();
    infoMessage.css("visibility", "hidden");
    infoMessage.css("display", "none");
    planContainer.css("visibility", "visible");
    return legend.removeClass("hidden");
  };

  curiculumPlanCtrl.prototype.getClassSubjectsLoad = function(subjectsLoad) {
    return _.chain(subjectsLoad).groupBy((function(_this) {
      return function(subjectLoad) {
        var ref, subjectInfo;
        if (!_this.options.parentSubjectsView) {
          subjectInfo = _this.model.subjects[subjectLoad.subjectId];
          return (ref = subjectInfo.parentSubjectId) != null ? ref : -subjectLoad.subjectId;
        } else {
          return subjectLoad.subjectId;
        }
      };
    })(this)).map(function(subjectHoursGroup, key) {
      if (subjectHoursGroup.length > 1) {
        return _.max(subjectHoursGroup, function(subjectHours) {
          return subjectHours.hours;
        }).hours;
      } else {
        return subjectHoursGroup[0].hours;
      }
    }).reduce(function(memo, hours) {
      return memo + hours;
    }, 0).value();
  };

  curiculumPlanCtrl.prototype.getClassComponentHours = function(model, classId, componentId) {
    var classHours, componentHours;
    componentHours = _.findWhere(model.hours, {
      componentId: componentId
    });
    if (!componentHours) {
      return 0;
    }
    classHours = _.findWhere(componentHours.classesLoad, {
      classId: classId
    });
    if (!classHours) {
      return 0;
    }
    return this.getClassSubjectsLoad(classHours.subjectsLoad);
  };

  curiculumPlanCtrl.prototype.getClassesTotalHours = function(model) {
    var classComponentHours, classHours, classId, classTotalHours, classesHours, classesTotalHours, componentHours, componentId, componentInd, gradeId, j, ref;
    classesTotalHours = {};
    for (componentInd = j = 0, ref = model.hours.length - 1; 0 <= ref ? j <= ref : j >= ref; componentInd = 0 <= ref ? ++j : --j) {
      componentHours = model.hours[componentInd];
      componentId = componentHours.componentId;
      classesHours = componentHours.classesLoad;
      for (classId in classesHours) {
        classHours = classesHours[classId];
        classId = _prepareClassId(classId);
        gradeId = parseInt(classHours.gradeId);
        classComponentHours = this.getClassSubjectsLoad(classHours.subjectsLoad);
        classTotalHours = classesTotalHours[classId];
        if (!classTotalHours) {
          classTotalHours = {
            gradeId: gradeId,
            totalHours: 0,
            componentsHours: {}
          };
          classesTotalHours[classId] = classTotalHours;
        }
        classTotalHours.componentsHours[componentId] = classComponentHours;
        classTotalHours.totalHours += classComponentHours;
      }
    }
    return classesTotalHours;
  };

  curiculumPlanCtrl.prototype.getPlanOverflows = function() {
    var classId, classesTotalHours, componentGradeLimit, componentId, ctrl, gradeId, gradesLimits, hours, planOverflows, ref, totalGradeLimit, totalHours;
    ctrl = this;
    planOverflows = [];
    classesTotalHours = this.getClassesTotalHours(this.model);
    for (classId in classesTotalHours) {
      totalHours = classesTotalHours[classId];
      classId = _prepareClassId(classId);
      gradeId = totalHours.gradeId;
      ref = totalHours.componentsHours;
      for (componentId in ref) {
        hours = ref[componentId];
        componentId = parseInt(componentId);
        gradesLimits = ctrl.model.limits[componentId].gradesLimits;
        componentGradeLimit = gradesLimits[gradeId].limit;
        if (hours > gradesLimits[gradeId].limit) {
          planOverflows.push({
            classId: classId,
            hours: hours,
            componentId: componentId,
            limit: componentGradeLimit
          });
        }
      }
      if (this.model.totalLimits) {
        totalGradeLimit = ctrl.model.totalLimits[gradeId];
        if (!totalGradeLimit) {
          totalGradeLimit = {
            limit: 0
          };
        }
        if (totalHours.totalHours > totalGradeLimit.limit) {
          planOverflows.push({
            classId: classId,
            hours: totalHours.totalHours,
            componentId: 0,
            limit: totalGradeLimit.limit
          });
        }
      }
    }
    return planOverflows;
  };

  curiculumPlanCtrl.prototype.highlightOverflows = function() {
    var classCellIndex, componentRow, getClassCellIndex, helpRow, j, len, limitCell, overflow, overflows, results;
    overflows = this.getPlanOverflows();
    helpRow = $("#help-row");
    getClassCellIndex = function(classId) {
      return helpRow.find("th > input[name=classid][value=" + classId + "]").parent().prop("cellIndex");
    };
    results = [];
    for (j = 0, len = overflows.length; j < len; j++) {
      overflow = overflows[j];
      componentRow = $("tr#componnent-" + overflow.componentId + "-fact-load-row");
      classCellIndex = getClassCellIndex(overflow.classId);
      limitCell = componentRow.find("td").eq(classCellIndex);
      results.push(limitCell.addClass("overflow"));
    }
    return results;
  };

  curiculumPlanCtrl.prototype.validate = function(model) {
    var classesTotalHours;
    classesTotalHours = this.getClassesTotalHours(model);
    return {
      overflows: this.getPlanOverflows()
    };
  };

  curiculumPlanCtrl.prototype.getClassGrade = function(classId) {
    return this.model.classes[classId].grade;
  };

  curiculumPlanCtrl.prototype.save = function(modelAdd) {
    var bolder, classHours, classId, componentHours, componentName, confirmText, confirms, hours, j, len, overflow, planObjectName, ref, ref1, saveData, savingModel, validateResult;
    if (!window.dataWereChanged && !modelAdd) {
      return;
    }
    savingModel = $.extend(true, {}, this.model);
    if (modelAdd) {
      componentHours = _.findWhere(savingModel.hours, {
        componentId: modelAdd.componentId
      });
      if (!componentHours) {
        componentHours = {
          componentId: modelAdd.componentId,
          classesLoad: {}
        };
        savingModel.hours.push(componentHours);
      }
      ref = modelAdd.classesHours;
      for (classId in ref) {
        hours = ref[classId];
        classId = _prepareClassId(classId);
        classHours = componentHours.classesLoad[classId];
        if (!classHours) {
          classHours = {
            classId: classId,
            gradeId: this.getClassGrade(classId),
            subjectsLoad: []
          };
          componentHours.classesLoad[classId] = classHours;
        }
        classHours.subjectsLoad.push({
          hours: hours,
          subjectId: modelAdd.subjectId
        });
      }
    }
    validateResult = this.validate(savingModel);
    if (validateResult.overflows.length > 0) {
      confirms = [];
      bolder = function(str) {
        return "<b>" + str + "</b>";
      };
      ref1 = validateResult.overflows;
      for (j = 0, len = ref1.length; j < len; j++) {
        overflow = ref1[j];
        if (overflow.componentId === 0) {
          continue;
        }
        planObjectName = this.options.getPlanObjectName(this.model.classes[overflow.classId]);
        componentName = _.findWhere(this.model.components, {
          componentId: overflow.componentId
        }).componentName;
        confirmText = language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_1 + bolder(floatToPlan(overflow.hours)) + language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_2 + bolder(floatToPlan(overflow.limit)) + language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_3 + bolder(componentName) + planObjectName + '\n' + language.Generic.SetupSchoolCurPlan.kConf_PlanGreaterLimit_5;
        confirms.push($.show.getConfirmation(confirmText));
      }
    }
    saveData = {
      compId: [],
      subjId: [],
      classId: [],
      hours: [],
      gradeMin: this.options.minGrade,
      gradeMax: this.options.maxGrade,
      yearId: this.options.yearId,
      termId: this.options.termId,
      profileId: this.options.profileId,
      directionId: this.options.directionId,
      isIup: this.options.isIup,
      addToPlan: modelAdd ? 1 : 0
    };
    _.each(savingModel.hours, function(componentHours) {
      return _.each(_.keys(componentHours.classesLoad), function(classId) {
        classHours = componentHours.classesLoad[classId];
        return _.each(classHours.subjectsLoad, function(subjectHours) {
          if (subjectHours.hours > 0.0) {
            saveData.compId.push(componentHours.componentId);
            saveData.classId.push(classHours.classId);
            saveData.subjId.push(subjectHours.subjectId);
            return saveData.hours.push(subjectHours.hours);
          }
        });
      });
    });
    return extDeferred.when(validateResult.overflows.length === 0 || confirms).then((function(_this) {
      return function() {
        return jsSubmit({
          action: "/webapi/curriculum/edit",
          method: "POST",
          data: saveData,
          showProcessing: true,
          onSuccess: function(response) {
            var resultMsg;
            if (_this.options.isIup) {
              if (response.savingSuccess) {
                resultMsg = language.Generic.Common.kDataSaved;
                if (response.sgCreated > 0) {
                  resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasCreated + response.sgCreated;
                }
                if (response.sgFailed > 0) {
                  resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasNotCreated_1 + response.sgFailed + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasNotCreated_2;
                }
                if (response.sgDeleted > 0) {
                  resultMsg += "\r\n" + language.Generic.SetupSchoolCurPlan.kNumberSubjectGroupsWasDeleted + response.sgDeleted;
                }
              } else {
                resultMsg = language.Generic.SetupSchoolCurPlan.kErrCantSaveCurriculumPlan;
                resultMsg += "\r\n\r\n" + language.SetupSchoolCurPlan.kNoCurrForSubjectWithClass;
                resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kMsgExample;
                resultMsg += "\r\n" + language.SetupSchoolCalendar.kGrade + ": " + response.curriculumViolation.grade;
                resultMsg += "\r\n" + language.Generic.Curriculum.kIupLevel + ": " + response.curriculumViolation.level;
                resultMsg += "\r\n" + language.Generic.Curriculum.kSubjectGroup + ": " + response.curriculumViolation.subjectGroup;
                resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kCurriculumNotChanged;
              }
            } else {
              if (response.savingSuccess) {
                resultMsg = language.Generic.Common.kDataSaved;
                if (response.sgCreated > 0) {
                  resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasCreated + response.sgCreated;
                }
                if (response.sgFailed > 0) {
                  resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasNotCreated_1 + response.sgFailed + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasNotCreated_2;
                }
                if (response.sgDeleted > 0) {
                  resultMsg += "\r\n" + language.SetupSchoolCurPlan.kNumberPairClassSubjectWasDeleted + response.sgDeleted;
                }
              } else {
                resultMsg = language.Generic.SetupSchoolCurPlan.kErrCantSaveCurriculumPlan;
                resultMsg += "\r\n\r\n" + language.SetupSchoolCurPlan.kNoCurrForSubjectWithClass;
                resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kMsgExample;
                resultMsg += "\r\n" + language.Common.kClass + ": " + response.curriculumViolation["class"];
                resultMsg += "\r\n" + language.Generic.Common.kSubject + ": " + response.curriculumViolation.subject;
                resultMsg += "\r\n" + language.Common.kProfile + ": " + response.curriculumViolation.profile;
                resultMsg += "\r\n\r\n" + language.Generic.SetupSchoolCurPlan.kCurriculumNotChanged;
              }
            }
            $.show.message(resultMsg).then(function() {
              if (modelAdd) {
                DoSubmit(document.forms["Filter"], "CuriculumPlan.asp");
                $.show.processing();
              }
              if (response.canCopyCuriculum) {
                return _copyButton.removeClass("hidden");
              } else {
                return _copyButton.addClass("hidden");
              }
            });
            $("td.waschanged").removeClass("waschanged");
            return window.dataWereChanged = false;
          }
        });
      };
    })(this));
  };

  curiculumPlanCtrl.prototype.clearPlan = function() {
    $("td.input-cell > span").html("&nbsp");
    $('input[name=HOURS]', document.forms['List']).val('');
    $("tr.total-fact-load-row").find("td").not($("tr.total-fact-load-row").find("td").first()).html("");
    $("tr.component-fact-load-row").find("td").not($("tr.component-fact-load-row").find("td").first()).html("");
    $("tr.total-teacher-load-row").find("td").not($("tr.total-teacher-load-row").find("td").first()).html("");
    $("td.waschanged").removeClass("waschanged");
    $("td.overflow").removeClass("overflow");
    _.each(this.model.hours, function(componentHours) {
      var classHours, classId, ref, results;
      ref = componentHours.classesLoad;
      results = [];
      for (classId in ref) {
        classHours = ref[classId];
        results.push(_.each(classHours.subjectsLoad, function(subjectHours) {
          return subjectHours.hours = 0;
        }));
      }
      return results;
    });
    return dataChanged();
  };

  curiculumPlanCtrl.prototype.copy = function() {
    var copyData;
    if (isDBBusy()) {
      return;
    }
    copyData = {
      gradeMin: this.options.minGrade,
      gradeMax: this.options.maxGrade,
      yearId: this.options.yearId,
      termId: this.options.termId,
      profileId: this.options.profileId,
      directionId: this.options.directionId,
      isIup: this.options.isIup
    };
    return $.show.confirmation(language.Generic.Curriculum.kConfirmCopyCurriculum).then(function() {
      return jsSubmit({
        action: "/webapi/curriculum/copy",
        method: "POST",
        data: copyData,
        showProcessing: true,
        onSuccess: function(response) {
          return $.show.message(language.Generic.Curriculum.kCopyCurriculumSuccess).then(function() {
            DoSubmit(document.forms["Filter"], "CuriculumPlan.asp");
            return $.show.processing();
          });
        }
      });
    });
  };

  curiculumPlanCtrl.prototype.getLimit = function(componentId, gradeId) {
    var componentLimits, limitInfo;
    if (componentId === 0) {
      limitInfo = this.model.totalLimits[gradeId];
    } else {
      componentLimits = _.findWhere(this.model.limits, {
        componentId: componentId
      });
      limitInfo = componentLimits.gradesLimits[gradeId];
    }
    if (limitInfo) {
      return limitInfo.limit;
    } else {
      return 0;
    }
  };

  curiculumPlanCtrl.prototype.getLoad = function(componentId, classId, gradeId, subjectId) {
    var classLoad, classSubjectLoad, componentLoad;
    componentLoad = _.findWhere(this.model.hours, {
      componentId: componentId
    });
    classLoad = componentLoad.classesLoad[classId];
    if (!classLoad) {
      classLoad = {
        classId: classId,
        gradeId: gradeId,
        subjectsLoad: []
      };
      componentLoad.classesLoad[classId] = classLoad;
    }
    classSubjectLoad = _.findWhere(classLoad.subjectsLoad, {
      subjectId: subjectId
    });
    if (!classSubjectLoad) {
      classSubjectLoad = {
        subjectId: subjectId,
        hours: 0.0
      };
      classLoad.subjectsLoad.push(classSubjectLoad);
    }
    return classSubjectLoad;
  };

  curiculumPlanCtrl.prototype.setLoad = function(componentId, classId, gradeId, subjectId, setLoad) {
    var classSubjectLoad;
    classSubjectLoad = this.getLoad(componentId, classId, gradeId, subjectId);
    return classSubjectLoad.hours = setLoad;
  };

  _getCuriculumPlan = function() {
    var cloneHeaders, cloneRows, headerCloneRows, planTable, planTableClone, planTableHeader, planTableHeaderClone;
    planTable = $('#plan-table');
    planTableHeader = $('#plan-table-header');
    planTableClone = planTable.clone();
    planTableHeaderClone = planTableHeader.clone();
    cloneHeaders = planTableHeaderClone.find('th');
    planTableHeader.find('th').each(function(index, col) {
      var cloneHeader;
      cloneHeader = cloneHeaders.eq(index);
      return cloneHeader.css('background-color', $(col).css('background-color'));
    });
    cloneRows = planTableClone.find('tr');
    planTable.find('tr').each(function(index, row) {
      var cloneCells, cloneRow;
      cloneRow = cloneRows.eq(index);
      cloneCells = cloneRow.find('td');
      cloneRow.css('background-color', $(row).css('background-color'));
      return $('td', row).each(function(index, cell) {
        var cloneCell;
        cloneCell = cloneCells.eq(index);
        if (cloneCell.css('background-color') !== $(cell).css('background-color')) {
          cloneCell.css('background-color', $(cell).css('background-color'));
        }
        if (cloneCell.hasClass('text-left') || cloneRow.hasClass('subject-field-row')) {
          return cloneCell.css('text-align', 'left');
        }
      });
    });
    headerCloneRows = planTableHeaderClone.find('tr');
    headerCloneRows.first().find('th').eq(0).prop("colspan", 2).addClass('text-center');
    planTableHeader.find('tr').each(function(index, item) {
      return headerCloneRows.eq(index).css('background-color', $(item).css('background-color'));
    });
    $.each(headerCloneRows.get().reverse(), function() {
      return $(this).prependTo(planTableClone);
    });
    planTableClone.find('#help-row').remove();
    return planTableClone.add($('div.legend').clone());
  };

  curiculumPlanCtrl.prototype.printPlan = function() {
    return _getCuriculumPlan().removeClass('table-hover').addClass('table-print').printUtils().toPrint({
      viewHeader: true
    });
  };

  curiculumPlanCtrl.prototype.exportPlan = function() {
    return _getCuriculumPlan().printUtils().toExcel({
      viewHeader: true
    });
  };

  return curiculumPlanCtrl;

})();
