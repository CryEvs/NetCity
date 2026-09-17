var adjustAssignsBlockWidth, editJournalCtrl, editjournalWrapper, scanJournalTables;

editjournalWrapper = null;

adjustAssignsBlockWidth = function() {
  var assignment_container, assignment_container_width, assignments_block, totalWidth;
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
  return assignments_block.width(totalWidth);
};

scanJournalTables = function() {
  return editjournalWrapper.filter(".assignments-block:not(.floating-scrolls)").each(function(index, element) {
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

$(document).bind('editJournalShow', function() {
  editjournalWrapper = $(".assignments-block");
  adjustAssignsBlockWidth();
  return deferredResLoader.ready(function() {
    $("#editJournal").addClass("ready");
    return $("#legend").addClass("ready");
  });
});

$(document).bind('init-floating-scroll', function() {
  return adjustAssignsBlockWidth();
});

$(document).bind('scan-wide-tables', function() {
  return scanJournalTables();
});

$(document).bind('assignmentsColsChanged', function() {
  var mCSB_container_width;
  adjustAssignsBlockWidth();
  mCSB_container_width = {
    "width": 0 + "px"
  };
  return $('.mCSB_container').css(mCSB_container_width);
});

editJournalCtrl = (function() {
  var _prepareAssign, _prepareLessons, _setAttendance, addAssignTpl, addCommonAssignTpl, addHomeAssignCmnTpl, addHomeAssignTpl, addHoverEventHandlerToRow, addNextHomeAssignTpl, assignColTpl, assignTitleTpl, attendanceColTpl, ctx, data, editJournalTpl, empty_block, getHomeAssignFromPlanTpl, homeAssignColTpl, homeAssignEmptyColTpl, messageAssignmentAdded, messageCurriculumNotFilled, setLessonTpl, settings;

  data = null;

  settings = {
    modeTKR: false,
    moduleQA: false,
    noKTP: true,
    createTestPlanAllowed: false
  };

  ctx = {
    cached_lessons: null
  };

  empty_block = '';

  assignTitleTpl = '<div class="task-header">Задание</div> <div class="assignment-title"> {{#ifCond typeId "==" @root.constants.MKRTypeId}} <input type="hidden" name="MKRAID" value="{{id}}"> {{/ifCond}} <input type="hidden" name="AID" value="{{id}}"> <div class="ctx-btns-icons ctx-btns-icons-xs"> <div class="danger delete" title="{{@root.language.Generic.Buttons.kRemove}}" onclick="controller.delete({{id}})"><span class="glyphicon glyphicon-remove"></span></div> <div class="primary edit-assign" title="{{@root.language.Generic.Grade.kEditAssignment}}"  onclick="controller.editAssign({{id}}, \'{{productId}}\')"><span class="glyphicon glyphicon-pencil"></span></div> {{#if showTestPlan}} <div title="{{@root.language.Generic.QualityAssessment.kTestPlanResults}}" class="test-plan primary " onclick="controller.goTestPlan({{id}})"><span class="glyphicon glyphicon-list-alt"></span></div> {{/if}} <input type="checkbox" name="M_All_{{id}}" value="{{id}}" onclick="controller.clickCheckAll(this);" tooltip="{{@root.language.Generic.Grade.kCheckUncheckAll}}"> </div> <span title="{{name}}" class="assignment-name"> {{name}} </span> {{#if laName}} <div class="assignment-activity"> <span>{{laName}}</span> </div> {{/if}} {{#if typeName}} <div class="assignment-type"> <span>{{typeName}}</span> </div> {{/if}} </div>';

  messageAssignmentAdded = '{{@root.language.Generic.Grade.kAssignmentAdded}} {{#if isTestPlansType}} <br>{{@root.language.Generic.Grade.kForFillingTestPlan}} <a HREF="JavaScript:controller.goTestPlan({{assignId}})" onclick="controller.goTestPlan({{assignId}})" title="{{@root.language.Generic.Grade.kTestPlan}}"> {{@root.language.Generic.Grade.kTestPlan}} </a> {{/if}}';

  messageCurriculumNotFilled = '{{@root.language.Generic.Curriculum.kCurriculumNotFilled}} <br><a HREF="JavaScript:controller.goEditPlanner()" onclick="controller.goEditPlanner()" title="{{@root.language.Generic.Curriculum.kCurriculum}}"> {{@root.language.Generic.Curriculum.kGoEdit}} </a>';

  assignColTpl = '<div class="assignment-container assignment-column" id="assignment_{{id}}"> {{> assignTitle}} <div class="results-block"> {{#each results}} <div> <span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" onclick="controller.clickCheck(this,{{@index}});" {{#if marked}}checked{{/if}}></span> <input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" onchange="dataChanged(); controller.setFlagSaveJournal()"> </div> {{/each}} </div> </div>';

  homeAssignEmptyColTpl = '<span class="home-assignments-header">{{language.Generic.Assignment.kHomeAssignment}}</span> {{#unless restrictAddHomeAssign}} <div class="add-assignments" onclick="controller.addHomeAssign()" title="{{language.Generic.Grade.kAddAssignment}}"> <span>{{language.Generic.Buttons.kAdd}}</span> <i class="icon-plus-sign"></i> </div> <div class="add-assignments-adaptive"> <i class="icon-plus-sign" onclick="controller.addHomeAssign()" title="{{language.Generic.Grade.kAddAssignment}}" ></i> </div> {{/unless}} <div class="empty-block"> {{#each students}} <div></div> {{/each}} </div>';

  homeAssignColTpl = '<span class="assignments-header">{{@root.language.Generic.Assignment.kHomeAssignment}}</span> {{> assignTitle}} <div class="results-block"> {{#each results}} <div> <span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" onclick="controller.clickCheck(this,{{@index}});" {{#if marked}}checked{{/if}}></span> <input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" onchange="dataChanged(); controller.setFlagSaveJournal()"> </div> {{/each}} </div>';

  attendanceColTpl = '<div class="attendance-block"> {{#each attendance}} <div> <select name="REASON" onchange="dataChanged(); controller.setFlagSaveJournal()"> <option value=""></option> {{#each ../attendanceReasons}} <option value="{{ReasonMark}}" {{selected ../reason ReasonMark}}>{{ReasonMark}}</option> {{/each}} </select> </div> {{/each}} </div>';

  editJournalTpl = '<div class="task-text">Задания</div> <div class="editJournal-panel"> <div class="task"> <div class="task-home active" title="Домашнее задание" > <!--<span class="task-home-text hidden" >Название д/з</span>--> <span class="task-home-text" >Название д/з</span> <span class="glyphicon glyphicon-plus-sign"></span> </div> <div class="task-new"> <span class="glyphicon glyphicon-plus-sign"></span> <span class="task-new-text">Добавить новое задание</span> </div> <div class="task-menu-left hidden "></div> <div class="task-menu-right hidden"></div> <div class="task-wraper"> <div class="task-menu"> <div class="task-1 " title="Задание">Равнобедренный Равнобедренный треугольниктреугольник</div> <div class="task-2" title="Задание">Параллелограмм</div> <div class="task-3" title="Задание" >Синус</div> </div> </div> </div> </div> <div class="editjournal-wrapper"> <div class="editjournal"> <div class="assignments-header-block"> <div id="assignments-header-many" class="assignments-header {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kAssignments}}</div> </div> <div class="editjournal-left-block task-active"> <!-- ученики --> <div class="studentlist head"> <div class="student-title">{{language.Common.kStudents}}</div> <div class="student-block"> {{#each students}} <div class="student"> <input type="hidden" name="SID" value="{{studentId}}"> <span></span> {{num}}. {{name}} </div> {{/each}} </div> </div> <!-- Домашняя работа --> <div class="home-assignment assignment-column head" id="home-assignment-column"> {{#if homeAssignment}} {{#with homeAssignment}} {{> homeAssignCol}} {{/with}} {{else}} {{> homeAssignEmptyCol}} {{/if}} </div> </div> <!-- оценки --> <div class="assignments-block-wrapper"> <div class="assignments-block head"> <div class="div-table-safari"> {{#each assignments}} {{> assignCol}} {{/each}} <div class="wrapper"> {{#each students}} <div></div> {{/each}} </div> </div> </div> </div> <div class="editjournal-right-block"> <!-- для клонирования --> <div class="new-assignment-container head"> <div class="assignment-container assignment-column head"> <div class="assignment-title"> <span id="assignments-header-new" class="new-challenge-text {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kCreateAssignmentShort}}</span> <span id="assignments-header-no" class="assignments-header {{#if assignments.length}}hidden{{/if}}">{{language.Generic.Grade.kAssignments}}</span> </div> <div class="add-assignments" onclick="controller.addAssign()" title="{{language.Generic.Grade.kAddAssignment}}"> <span>{{language.Generic.Buttons.kAdd}}</span> <i class="icon-plus-sign"></i> </div> <div class="results-block results-block-inactive"> {{#each students}} <div></div> {{/each}} </div> </div> </div> <!-- Посещаемость --> <div class="attendance head"> <!--<div class="attendance-title">{{language.Generic.Grade.kAttendanceColumn}}</div>--> <div class="attendance-title">Посеща-<br>емость</div> {{> attendanceCol}} </div> </div> </div> </div>';

  setLessonTpl = '<select class="form-control" name="LESSONID" onchange="controller.changeLesson(); dataChanged();"> {{#unless suggestedLessonId}} <option value="-1" disabled="disabled" selected="selected">{{language.Grade.kChooseLesson}}</option> {{/unless}} {{#each lessons}} <option value="{{id}}" {{selected ../suggestedLessonId id}}>{{lessonFullName}}{{#if studied}}*{{/if}}</option> {{/each}} </select>';

  addCommonAssignTpl = '<div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentTheme}} </label> <div class="col-md-9"> <input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" onchange="dataChanged(); controller.setFlagSaveJournal()" autofocus="autofocus"> </div> </div> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentType}} </label> <div class="col-md-9"> <select name="AType" class="form-control" {{#unless assignmentTypesChoise}} disabled="disabled" {{/unless}}> {{#unless typeId}} <option value="" disabled="disabled" selected="selected">{{language.Generic.Assignment.kATChooseType}}</option> {{/unless}} {{#each assignmentTypes}} <option value="{{id}}" {{#if typeId}} {{selected ../typeId id}} {{/if}}>{{name}}</option> {{/each}} </select> </div> </div>';

  getHomeAssignFromPlanTpl = '<form class="form-horizontal" onsubmit="return false;"> <div class="form-group"> <label class="control-label col-md-3"> {{language.Curriculum.kLesTheme}} </label> <div class="col-md-9"> {{#if lessons}} {{#ifCond lessons.length "==" 1}} <input type="text" class="form-control" name="LESSONFULLNAME" value="{{lessons.[0].lessonFullName}}" disabled="disabled"> <input type="hidden" name="LESSONID" value="{{lessons.[0].id}}"> {{else}} <select name="LESSONID" class="form-control"> {{#each lessons}} <option value="{{id}}">{{lessonFullName}}</option> {{/each}} </select> {{/ifCond}} {{else}} Не было уроков изученных {{/if}} </div> </div> {{#if lessons}} <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kHomeAssignmentText}} </label> <div class="col-md-9"> <input type="text" class="form-control" name="LESSONHOMEASSIGNMENT" value="" disabled="disabled"> </div> </div> </form> {{/if}}';

  addHomeAssignCmnTpl = '<div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kHomeAssignmentText}} </label> <div class="col-md-9"> {{#if fromKTP}} <div class="input-group"> {{/if}} <input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" onchange="dataChanged(); controller.setFlagSaveJournal()" autofocus="autofocus"> {{#if fromKTP}} <span class="input-group-btn"> <button class="btn btn-default" type="button" id="useLessonHomeAssignBtn" title="Использовать домашнее задание из КТП"><span class="glyphicon glyphicon-book"></span> Из КТП</button> </span> </div> {{/if}} </div> </div> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentType}} </label> <div class="col-md-9"> <span class="form-control form-control-title"><span class="text">{{language.Generic.Assignment.kATHomeWork}}</span></span> <input type="hidden" name="AType" value="{{typeId}}" /> </div> </div>';

  addHomeAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> {{> addHomeAssignCmn}} </form>';

  addNextHomeAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kNextClassmeetingDate}} </label> <div class="col-md-9"> <select name="NEXTCMID" class="form-control"> {{#each classMeetings}} <option value="{{id}}">{{name}}</option> {{/each}} </select> </div> </div> {{> addHomeAssignCmn}} </form>';

  addAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> {{> addCommonAssign}} </form>';

  _prepareLessons = function() {
    var temp;
    temp = $.Deferred();
    if (ctx.cached_lessons) {
      temp.resolve(ctx.cached_lessons);
      temp;
    }
    if (settings.subjectPlan.noSubjectPlan) {
      temp.resolve();
    } else {
      jsSubmit({
        action: "/asp/ajax/GetLessonListForSg.asp",
        showProcessing: true,
        data: {
          sgid: settings.subjectGroupId
        }
      }).then(function(response) {
        if (response.isError) {
          temp.reject();
          return;
        }
        ctx.cached_lessons = response.data.lessonList;
        _.each(ctx.cached_lessons, function(lesson) {
          if (lesson.lastStudyDay) {
            lesson.lastStudyDay = Date.parse(lesson.lastStudyDay);
          }
        });
        return temp.resolve(ctx.cached_lessons);
      });
    }
    return temp;
  };

  editJournalCtrl.prototype._setColNames = function() {
    var existNonHomeAssign;
    if (!this.assignsWitResults.length) {
      $("#assignments-header-many").addClass("hidden");
      $("#assignments-header-no").removeClass("hidden");
      return $("#assignments-header-new").addClass("hidden");
    } else {
      existNonHomeAssign = _.some(this.assignsWitResults, function(assign) {
        return assign.typeId !== settings.constants.homeWorkTypeId;
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

  _setAttendance = function(elem) {
    var grades, index, reason;
    grades = $("input[name=" + elem.name + "]", $("form[name=Gradebook]"));
    index = grades.index(elem);
    reason = $("select[name=REASON]", $("form[name=Gradebook]")).eq(index);
    return reason.val("ОТ");
  };

  editJournalCtrl.prototype._navigateInputs = function(ctx) {
    var target;
    if (ctx) {
      target = $("input[name^=G_]:enabled", ctx);
    } else {
      target = $("input[name^=G_]:enabled");
    }
    return target.navigateInputs({
      getCellInputOptions: function(elem) {
        return {
          maxMark: settings.maxMark,
          minMark: settings.minMark,
          maxLength: (settings.maxMark + "").length
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
        _setAttendance(elem);
        return true;
      }
    });
  };

  editJournalCtrl.prototype._validate = function(typeSelect, nameInput) {
    var name, typeId;
    if (typeSelect) {
      typeId = typeSelect.val();
      if (typeId <= 0) {
        alert(language.Generic.Assignment.kATPleaseSelectAssignmentType);
        typeSelect.focus();
        return false;
      }
    }
    name = nameInput.val();
    if (trimStr(name).length === 0) {
      alert(language.Generic.Assignment.kATEnterAssignmentTheme);
      nameInput.focus();
      return false;
    }
    if (trimStr(name).length > settings.constants.maxAssignTitleLength) {
      alert(language.Generic.Assignment.kATAssignmentThemeNotMayBe);
      nameInput.focus();
      return false;
    }
    return true;
  };

  _prepareAssign = function(assign) {
    if (settings.moduleQA && _.contains(settings.constants.testPlansTypes, assign.typeId)) {
      return assign.showTestPlan = true;
    }
  };

  function editJournalCtrl(container1, students, assignsWitResults, attendance, _settings) {
    this.container = container1;
    this.students = students;
    this.assignsWitResults = assignsWitResults;
    this.attendance = attendance;
    settings = $.extend({}, settings, _settings);
    settings.assignmentTypesIndex = _.indexBy(settings.assignmentTypes, "id");
    settings.la.activities = _.indexBy(settings.la.activities, "activityId");
    settings.la.coursesProducts = _.indexBy(settings.la.coursesProducts, "productId");
    if (settings.moduleQA) {
      _.each(this.assignsWitResults, function(assign) {
        return _prepareAssign(assign);
      });
    }
    Handlebars.registerPartial("assignCol", assignColTpl);
    Handlebars.registerPartial("attendanceCol", attendanceColTpl);
    Handlebars.registerPartial("addCommonAssign", addCommonAssignTpl);
    Handlebars.registerPartial("assignTitle", assignTitleTpl);
    Handlebars.registerPartial("homeAssignEmptyCol", homeAssignEmptyColTpl);
    Handlebars.registerPartial("homeAssignCol", homeAssignColTpl);
    Handlebars.registerPartial("addHomeAssignCmn", addHomeAssignCmnTpl);
    Handlebars.registerHelper('selected', function(selValue, currValue) {
      if (selValue === currValue) {
        return " selected";
      } else {
        return "";
      }
    });
  }

  editJournalCtrl.prototype.display = function() {
    var attendanceReasons, homeAssignment, model, numberedStudents, otherAssignments, template;
    numberedStudents = _.map(this.students, function(stud, index) {
      stud.num = index + 1;
      return stud;
    });
    _.each(this.assignsWitResults, function(assign) {
      var typeInfo;
      typeInfo = settings.assignmentTypesIndex[assign.typeId];
      if (typeInfo) {
        if (typeInfo.id === settings.constants.MKRTypeId) {
          assign.typeName = typeInfo.abbr;
        } else {
          assign.typeName = typeInfo.name;
        }
      } else {
        console.log("неизвестный тип задания " + assign);
      }
      if (assign.activityId) {
        if (assign.productId) {
          assign.laName = settings.la.coursesProducts[assign.productId].name;
        } else {
          assign.laName = settings.la.activities[assign.activityId].name;
        }
        if (!assign.laName) {
          return assign.laName = language.Generic.Grade.kActivityRemoved;
        }
      }
    });
    homeAssignment = _.find(this.assignsWitResults, function(assign) {
      return assign.typeId === settings.constants.homeWorkTypeId;
    });
    otherAssignments = _.without(this.assignsWitResults, homeAssignment);
    attendanceReasons = settings.attendanceReasons;
    if (!settings.allowAttendanceReleasedMark) {
      attendanceReasons = _.reject(attendanceReasons, function(reason) {
        return reason.ReasonMark === settings.attendanceReleasedReason;
      });
    }
    model = {
      language: language,
      students: numberedStudents,
      assignments: otherAssignments,
      homeAssignment: homeAssignment,
      attendance: this.attendance,
      attendanceReasons: attendanceReasons,
      restrictAddHomeAssign: settings.restrictAddHomeAssign,
      marksLength: (settings.maxMark + "").length,
      constants: settings.constants
    };
    template = Handlebars.compile(editJournalTpl);
    this.container.html(template(model));
    this._navigateInputs();
    $(document).trigger('editJournalShow');
    return addHoverEventHandlerToRow();
  };

  addHoverEventHandlerToRow = function() {
    var backlightColor, hoverHandler, setBGColorAttendance, setBGColorResults, setBGColorStudent;
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
    $('div.student').hover(function() {
      return hoverHandler(this);
    });
    $('div.results-block div, .attendance-block div').hover(function() {
      return hoverHandler(this);
    });
    return $('select[name="REASON"]').on('click', function() {
      var $block;
      $block = $(this).parent();
      return hoverHandler($block);
    });
  };

  editJournalCtrl.prototype.changeLesson = function() {
    var lessonSelect;
    lessonSelect = $('#LESTHEME .form-control');
    settings.subjectPlan.lessonId = parseInt(lessonSelect.val());
    return settings.subjectPlan.lessonName = _.findWhere(ctx.cached_lessons, {
      id: settings.subjectPlan.lessonId
    }).lessonName;
  };

  editJournalCtrl.prototype.setLesson = function() {
    var templateCompiled;
    templateCompiled = Handlebars.compile(setLessonTpl);
    return _prepareLessons().then(function(lessons) {
      var lesson, lessonId, model, modelMessage, suggestedLesson, templateCurriculumNotFilled, templateLesson;
      if (lessons.length === 0) {
        templateCurriculumNotFilled = Handlebars.compile(messageCurriculumNotFilled);
        modelMessage = {
          language: language
        };
        return $.show.alert(templateCurriculumNotFilled(modelMessage));
      } else {
        lessonId = settings.subjectPlan.lessonId;
        if (lessonId <= 0) {
          suggestedLesson = _.find(lessons, function(lesson) {
            return lesson.hours > lesson.hoursStudied;
          });
          lessonId = suggestedLesson != null ? suggestedLesson.id : void 0;
          dataChanged();
        }
        lesson = _.findWhere(ctx.cached_lessons, {
          id: lessonId
        });
        settings.subjectPlan.lessonName = lesson.lessonName;
        settings.subjectPlan.lessonId = lessonId;
        model = {
          lessons: lessons,
          language: language,
          suggestedLessonId: lessonId
        };
        templateLesson = $(templateCompiled(model));
        return $('#LESTHEME .form-control').replaceWith(templateLesson);
      }
    });
  };

  editJournalCtrl.prototype.getHomeAssignFromPlan = function(lessons) {
    var getHomeAssignTextDeffered, html, lessonHomeAssignInput, lessonHomeAssignModel, template;
    lessonHomeAssignModel = {
      lessons: lessons,
      language: language
    };
    template = Handlebars.compile(getHomeAssignFromPlanTpl);
    html = template(lessonHomeAssignModel);
    lessonHomeAssignInput = null;
    getHomeAssignTextDeffered = $.Deferred();
    $.show.dialog({
      title: language.Generic.Grade.kSubjectPlanHomeAssignmentText,
      message: html,
      size: BootstrapDialog.SIZE_WIDE,
      buttons: [
        {
          label: language.Generic.Grade.kUse,
          action: function(dialog) {
            var text;
            text = lessonHomeAssignInput.val();
            dialog.successClose();
            return getHomeAssignTextDeffered.resolve(text);
          },
          hotkey: 13,
          cssClass: 'btn-primary'
        }, {
          label: language.Generic.Buttons.kCancel,
          hotkey: 23,
          action: function(dialog) {
            dialog.close();
            return getHomeAssignTextDeffered.reject();
          }
        }
      ],
      onshow: function(dialog) {
        var lessonsCombo, syncLessonHomeAssign;
        lessonsCombo = $("*[name='LESSONID']", dialog.$modalContent);
        lessonHomeAssignInput = $("input[name='LESSONHOMEASSIGNMENT']", dialog.$modalContent);
        syncLessonHomeAssign = function() {
          var selectedLesson, selectedLessonId;
          selectedLessonId = parseInt(lessonsCombo.val());
          selectedLesson = _.find(lessons, function(lesson) {
            return lesson.id === selectedLessonId;
          });
          return lessonHomeAssignInput.val(selectedLesson.homeAssignment || selectedLesson.lessonName);
        };
        lessonsCombo.change(syncLessonHomeAssign);
        return syncLessonHomeAssign();
      }
    });
    return getHomeAssignTextDeffered.promise();
  };

  editJournalCtrl.prototype.addHomeAssign = function() {
    var ctrl, model, onShowEventHandler;
    ctrl = this;
    model = {
      assignmentName: "",
      assignmentTypes: _.filter(settings.assignmentTypes, function(type) {
        return type.id === settings.constants.homeWorkTypeId;
      }),
      assignmentTypesChoise: false,
      fromKTP: !settings.subjectPlan.noSubjectPlan,
      typeId: settings.constants.homeWorkTypeId,
      language: language
    };
    onShowEventHandler = function(dialog) {
      var homeAssignNameInput;
      homeAssignNameInput = $("input[name='AN']", dialog.$modalContent);
      return $("#useLessonHomeAssignBtn", dialog.$modalContent).click(function() {
        return _prepareLessons().then(function(lessons) {
          lessons = _.filter(lessons, function(lesson) {
            return lesson.lastStudyDay !== null && lesson.lastStudyDay < settings.classMeetingDay;
          });
          lessons = _.sortBy(lessons, function(lesson) {
            return lesson.lastStudyDay;
          }).reverse();
          if (lessons.length === 0) {
            $.show.message(language.Generic.Assignment.kUnableRetrieveHomeWorkText);
            return;
          }
          return ctrl.getHomeAssignFromPlan(lessons).then(function(planHomeAssign) {
            return homeAssignNameInput.val(planHomeAssign);
          });
        });
      });
    };
    return ctrl.createAssign(model, addHomeAssignTpl, {
      onShow: onShowEventHandler
    }).then(function(newAssign) {
      var template;
      template = Handlebars.compile(homeAssignColTpl);
      empty_block = $(".empty-block");
      $("#home-assignment-column").empty();
      $("#home-assignment-column").append(template($.extend({}, newAssign, {
        language: language
      })));
      ctrl._navigateInputs($("#home-assignment-column"));
      ctrl._setColNames();
      $("#home-assign-add-button").hide();
      addHoverEventHandlerToRow();
      return $(document).trigger('assignmentsColsChanged');
    });
  };

  editJournalCtrl.prototype.addAssign = function() {
    var assignmentsWithoutHomeWorkType, ctrl, model;
    ctrl = this;
    assignmentsWithoutHomeWorkType = _.filter(settings.assignmentTypes, function(type) {
      return type.id !== settings.constants.homeWorkTypeId;
    });
    if (!settings.moduleQA) {
      assignmentsWithoutHomeWorkType = _.filter(assignmentsWithoutHomeWorkType, function(type) {
        return type.id !== settings.constants.MKRTypeId;
      });
    }
    model = {
      assignmentName: settings.subjectPlan.lessonId ? settings.subjectPlan.lessonName : language.Generic.Grade.kNoTheme,
      assignmentTypes: assignmentsWithoutHomeWorkType,
      assignmentTypesChoise: true,
      language: language
    };
    if (!settings.moduleQA) {
      model.typeId = settings.lessonAnswerTypeId;
    }
    return this.createAssign(model, addAssignTpl).then(function(newAssign) {
      var html, template;
      template = Handlebars.compile(assignColTpl);
      html = template($.extend({}, newAssign, {
        language: language,
        constants: settings.constants
      }));
      $('.div-table-safari').append(html);
      ctrl._navigateInputs($("#assignment_" + newAssign.id));
      ctrl._setColNames();
      addHoverEventHandlerToRow();
      return $(document).trigger('assignmentsColsChanged');
    });
  };

  editJournalCtrl.prototype.addNextHomeAssign = function() {
    var ctrl;
    ctrl = this;
    return jsSubmit({
      action: "/asp/ajax/classmeetings/getnextclassmeetingsforsg.asp",
      data: {
        sgid: settings.subjectGroupId,
        cmid: settings.classMeetingId
      },
      showProcessing: true
    }).then(function(response) {
      var html, model, template;
      if (response.data.nextClassMeetings.length === 0) {
        $.show.message(language.Generic.Grade.kNoNextClassmeetings);
        return;
      }
      model = {
        assignmentTypes: _.filter(settings.assignmentTypes, function(type) {
          return type.id === settings.constants.homeWorkTypeId;
        }),
        assignmentTypesChoise: false,
        typeId: settings.constants.homeWorkTypeId,
        language: language,
        fromKTP: !settings.subjectPlan.noSubjectPlan && settings.subjectPlan.lessonId,
        classMeetings: response.data.nextClassMeetings
      };
      if (settings.subjectPlan.lessonId) {
        model.lesson = {
          id: settings.subjectPlan.lessonId,
          name: settings.subjectPlan.lessonName
        };
      }
      template = Handlebars.compile(addNextHomeAssignTpl);
      html = template(model);
      return $.show.dialog({
        title: language.Generic.Grade.kAddHomeAssignOnNextClassmeeting,
        message: html,
        size: BootstrapDialog.SIZE_WIDE,
        buttons: [
          {
            label: language.Generic.Buttons.kAdd + "/" + language.Generic.Buttons.kEdit,
            action: function(dialog) {
              var assignNameInput, cmCombo, name, nextCmId, nextCmInfo, ref;
              cmCombo = $('select[name=NEXTCMID]', dialog.$modalContent);
              assignNameInput = $('input[name=AN]', dialog.$modalContent);
              if (!ctrl._validate(null, assignNameInput)) {
                return;
              }
              name = assignNameInput.val();
              nextCmId = parseInt(cmCombo.val());
              nextCmInfo = _.find(model.classMeetings, function(cm) {
                return cm.id === nextCmId;
              });
              return jsSubmit({
                data: {
                  cmid: nextCmId,
                  sgid: settings.subjectGroupId,
                  assignmentId: (ref = nextCmInfo.homeAssignment) != null ? ref.id : void 0,
                  an: name
                },
                action: "/asp/ajax/Assignments/CreateOrEditHomeAssignment.asp",
                nocache: true,
                showSuccessMessage: true
              }).then(function() {
                return dialog.successClose();
              });
            },
            hotkey: 13,
            cssClass: 'btn-primary'
          }, {
            label: language.Generic.Buttons.kCancel,
            hotkey: 23,
            action: function(dialog) {
              return dialog.close();
            }
          }
        ],
        onshow: function(dialog) {
          var assignNameInput, cmCombo, syncNextCmHomeAssign;
          cmCombo = $('select[name=NEXTCMID]', dialog.$modalContent);
          assignNameInput = $('input[name=AN]', dialog.$modalContent);
          if (model.lesson) {
            $("#useLessonHomeAssignBtn", dialog.$modalContent).click(function() {
              return _prepareLessons().then(function(lessons) {
                lessons = _.filter(lessons, function(lesson) {
                  return lesson.id === model.lesson.id;
                });
                return ctrl.getHomeAssignFromPlan(lessons).then(function(planHomeAssign) {
                  return assignNameInput.val(planHomeAssign);
                });
              });
            });
          }
          syncNextCmHomeAssign = function() {
            var homeAssignText, nextCmId, nextCmInfo, ref, ref1;
            nextCmId = parseInt(cmCombo.val());
            nextCmInfo = _.find(model.classMeetings, function(cm) {
              return cm.id === nextCmId;
            });
            homeAssignText = (ref = (ref1 = nextCmInfo.homeAssignment) != null ? ref1.name : void 0) != null ? ref : "";
            return assignNameInput.val(homeAssignText);
          };
          syncNextCmHomeAssign();
          return cmCombo.change(syncNextCmHomeAssign);
        }
      });
    });
  };

  editJournalCtrl.prototype.editAssign = function(assignId, productId) {
    return checkForChanges().then(function() {
      return postTo("/asp/Curriculum/EditAssignment.asp", {
        AID: assignId,
        BMODULEQA: settings.moduleQA,
        LAJID: productId
      });
    });
  };

  editJournalCtrl.prototype.goTestPlan = function(assignId) {
    return checkForChanges().then(function() {
      return postTo("/asp/Grade/QA/TestPlanResults.asp", {
        AID: assignId,
        SCLID: settings.subjectGroupId
      });
    });
  };

  editJournalCtrl.prototype.goEditPlanner = function() {
    return checkForChanges().then(function() {
      return postTo("/asp/Curriculum/Planner.asp", {
        SGID: settings.subjectGroupId,
        GRADEID: settings.gradeId
      });
    });
  };

  editJournalCtrl.prototype["delete"] = function(assignId) {
    var ctrl;
    ctrl = this;
    return $.show.confirmation(language.Generic.Assignment.kSureToDeleteAssignment).then(function() {
      return jsSubmit({
        action: "/asp/ajax/assignments/deleteAssignment.asp",
        data: {
          assignmentid: assignId
        },
        showProcessing: true
      });
    }).then(function(response) {
      var deletingAssign, template;
      deletingAssign = _.find(ctrl.assignsWitResults, function(assign) {
        return assign.id === assignId;
      });
      ctrl.assignsWitResults = _.without(ctrl.assignsWitResults, deletingAssign);
      if (deletingAssign.typeId === settings.constants.homeWorkTypeId) {
        if (empty_block === '') {
          $(".home-assignment .results-block div").empty();
          empty_block = $(".home-assignment .results-block");
          empty_block.addClass("empty-block").removeClass("results-block");
        }
        $("#home-assignment-column").empty();
        template = Handlebars.compile(homeAssignEmptyColTpl);
        $("#home-assignment-column").append(template($.extend({}, {
          language: language
        })));
        $("#home-assignment-column .empty-block").replaceWith(empty_block);
        $("#home-assign-add-button").show();
      } else {
        $("#assignment_" + assignId).remove();
      }
      ctrl._setColNames();
      return $(document).trigger('assignmentsColsChanged');
    });
  };

  editJournalCtrl.prototype.save = function() {
    if (!window.dataWereChanged) {
      alert(language.Generic.SetupSchoolUI.kDataNotModified);
      return;
    }
    return jsSaveForm(document.Gradebook);
  };

  editJournalCtrl.prototype.saveAndBack = function() {
    if (!window.dataWereChanged) {
      goCommonBack();
      return;
    }
    jsSaveForm(document.Gradebook).then(goCommonBack);
  };

  editJournalCtrl.prototype.setFlagSaveJournal = function() {
    return $("input[name=bSaveJournal]").val("1");
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
    $checkM = $("input:checkbox[name=M_" + sAID + "]", $("form[name=Gradebook]"));
    nLen = $checkM.length - 1;
    for (i = j = 0, ref = nLen; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      $checkM[i].checked = true;
    }
    dataChanged();
    return controller.setFlagSaveJournal();
  };

  editJournalCtrl.prototype.uncheckAll = function(sAID) {
    var $Grades, $checkMs, i, j, nLen, ref;
    $checkMs = $("input:checkbox[name=M_" + sAID + "]", $("form[name=Gradebook]"));
    $Grades = $("input[name=G_" + sAID + "]", $("form[name=Gradebook]"));
    nLen = $checkMs.length - 1;
    for (i = j = 0, ref = nLen; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      if (trimStr($Grades[i].value === '')) {
        $checkMs[i].checked = false;
      }
    }
    dataChanged();
    return controller.setFlagSaveJournal();
  };

  editJournalCtrl.prototype.restoreCheck = function(obj) {
    if (!obj.checked) {
      alert(language.Grade.kTickMarkIsNecessary);
      return obj.checked = true;
    }
  };

  editJournalCtrl.prototype.clickCheck = function(obj, n) {
    var $Grades, sAID, sName;
    sName = obj.name;
    sAID = sName.substr(2);
    $Grades = $("input[name=G_" + sAID + "]", $("form[name=Gradebook]"));
    if (trimStr($Grades[n].value) !== '') {
      return this.restoreCheck(obj);
    } else {
      dataChanged();
      return controller.setFlagSaveJournal();
    }
  };

  editJournalCtrl.prototype.changeCm = function(step) {
    var confirmChangeCM, ctrl, initialIndex, select_cm, simpleChangeCM;
    ctrl = this;
    select_cm = $("select[name='CMID']");
    initialIndex = select_cm.find("option[value='" + settings.classMeetingId + "']").prop("index");
    simpleChangeCM = function(step) {
      var days;
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
      setDBBusy();
      $.show.processing();
      return DoSubmit(document.Gradebook, "EditJournal.asp");
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
    if (isDBBusy()) {
      return false;
    }
    if (dataWereChanged) {
      confirmChangeCM(step);
    } else {
      simpleChangeCM(step);
    }
    return true;
  };

  editJournalCtrl.prototype.createAssign = function(model, template, in_options) {
    var options, saveDeffered, templateCompiled;
    options = {
      onShow: null,
      check: null
    };
    options = $.extend(options, in_options);
    templateCompiled = Handlebars.compile(template);
    saveDeffered = $.Deferred();
    $.show.dialog({
      title: language.Generic.Grade.kCreateAssignment,
      message: templateCompiled(model),
      size: BootstrapDialog.SIZE_WIDE,
      buttons: [
        {
          label: language.Generic.Buttons.kAdd,
          hotkey: 13,
          action: (function(_this) {
            return function(dialog) {
              var name, nameInput, typeId, typeInfo, typeSelect;
              typeSelect = $("select,input", dialog.$modalContent).filter("[name=AType]");
              nameInput = $('input[name=AN]', dialog.$modalContent);
              if (!_this._validate(typeSelect, nameInput)) {
                return;
              }
              typeId = parseInt(typeSelect.val() || 0);
              typeInfo = settings.assignmentTypesIndex[typeId];
              name = nameInput.val();
              if (options.check && !options.check()) {
                return;
              }
              return jsSubmit({
                form: document.Gradebook,
                data: {
                  RegimeAddAssign: 1,
                  AN: name,
                  AType: typeId
                },
                action: "SaveJournal.asp",
                nocache: true,
                showProcessing: true
              }).then(function(response) {
                var modelMessage, newAssign, templateMessageAdd;
                window.dataWereChanged = false;
                newAssign = {
                  id: response.data.assignmentId,
                  name: response.data.assignmentName,
                  typeId: typeId,
                  typeName: typeInfo.id === settings.constants.MKRTypeId ? typeInfo.abbr : typeInfo.name,
                  results: _.map(_this.students, function(student) {
                    return {
                      studentId: student.studentId,
                      result: null
                    };
                  })
                };
                _prepareAssign(newAssign);
                _this.assignsWitResults.push(newAssign);
                dialog.successClose();
                if (settings.moduleQA && _.contains(settings.constants.testPlansTypes, newAssign.typeId)) {
                  templateMessageAdd = Handlebars.compile(messageAssignmentAdded);
                  modelMessage = {
                    assignId: newAssign.id,
                    isTestPlansType: _.contains(settings.constants.testPlansTypes, newAssign.typeId),
                    language: language
                  };
                  $.show.message(templateMessageAdd(modelMessage));
                }
                return saveDeffered.resolve(newAssign);
              });
            };
          })(this),
          cssClass: 'btn-primary'
        }, {
          label: language.Generic.Curriculum.kBtnCancel,
          hotkey: 23,
          action: function(dialog) {
            return dialog.close();
          }
        }
      ],
      onshow: function(dialog) {
        if (options.onShow) {
          return options.onShow(dialog);
        }
      }
    });
    return saveDeffered.promise();
  };

  return editJournalCtrl;

})();

$(document).ready(function() {

  /*/=======================================================================================/	
  	/=======================================================================================/
  	/======================================хак на IE=================================/
   */
  if (bowser.msie) {
    $('.editjournal-wrapper .editjournal input').css('padding-top', '1px');
    $('.editjournal-wrapper .editjournal input').focus((function() {
      return $(this).css('padding-top', '1px');
    }));
  }
  return $(document).bind('editJournalShow', function() {
    var assignmentsBlock, bWrap, editjournal_left_block, editjournal_right_block, pageHeight, pageWidth, pageWidth_px, student_block, student_block_children, student_children_length, width_date_results_block, width_date_results_block_px, width_date_results_block_test, windowHeight, windowSize, windowWidth;
    assignmentsBlock = $('.assignments-block');

    /*=======================================================================================/	
    		/=======================================================================================/
    		/=========================проверка на разрешение экрана=================================/
    		/===============чтоб не улезал за экран таблица с выставлением оценок===================
     */
    bWrap = $('.results-block > div');
    width_date_results_block = '0px';
    width_date_results_block_test = '0px';
    pageWidth = $(document).width();
    pageHeight = $(document).height();
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    width_date_results_block = assignmentsBlock.actual('innerWidth');
    pageWidth_px = 0;
    width_date_results_block_px = 0;
    windowSize = function() {
      var div_table_safari, edit_journal, edit_journal_wrapper, high_school_journal_width;
      windowWidth = $(window).width();
      pageWidth = $(document).width();
      width_date_results_block = assignmentsBlock.actual('innerWidth');
      if (Number(windowWidth) > 968) {
        div_table_safari = $('.div-table-safari').width();
        div_table_safari += 555;
        edit_journal = $('.editjournal');
        edit_journal_wrapper = $('.editjournal-wrapper');
        edit_journal.css({
          "width": div_table_safari + 'px'
        });
        if (edit_journal_wrapper.width() < edit_journal.width()) {
          edit_journal.css({
            "width": 'auto'
          });
        }
      } else {
        $('.editjournal').css({
          "width": 'auto'
        });
        div_table_safari = $('.div-table-safari').width();
        div_table_safari += 555;
        edit_journal = $('.editjournal');
        edit_journal_wrapper = $('.editjournal-wrapper');
        edit_journal.css({
          "width": div_table_safari + 'px'
        });
      }
      return high_school_journal_width = $('.editjournal').width();
    };
    $(window).on('load resize', windowSize);
    $(document).bind('assignmentsColsChanged', windowSize);
    student_block = $('.studentlist  .student-block');
    student_block_children = student_block.children();
    student_children_length = student_block_children.length;
    editjournal_left_block = $('.editjournal-left-block');
    editjournal_right_block = $('.editjournal-right-block');
    switch (student_children_length) {
      case 1:
        editjournal_left_block.addClass("editjournal-left-block-1");
        return editjournal_right_block.addClass("editjournal-right-block-1");
      case 2:
        editjournal_left_block.addClass("editjournal-left-block-2");
        return editjournal_right_block.addClass("editjournal-right-block-2");
      case 3:
        editjournal_left_block.addClass("editjournal-left-block-3");
        return editjournal_right_block.addClass("editjournal-right-block-3");
      case 4:
        editjournal_left_block.addClass("editjournal-left-block-4");
        return editjournal_right_block.addClass("editjournal-right-block-4");
      case 5:
        editjournal_left_block.addClass("editjournal-left-block-5");
        return editjournal_right_block.addClass("editjournal-right-block-5");
      case 6:
        editjournal_left_block.addClass("editjournal-left-block-6");
        return editjournal_right_block.addClass("editjournal-right-block-6");
    }

    /*/====================================================================================/
    		/====================================================================================/
    		/===============Полоса прокрутки элементов jquery-after и jquery-before==============/
     */

    /*/=======================================================================================/	
    		/=======================================================================================/
    		/======================================бесконечный цикл=================================/
     */
  });
});


/*
* jQuery liActualSize v 2.0
* http://mmmagnit.ks.ua
*
* Copyright 2012, Linnik Yura
* Free to use
* 
* Augest 2012
 */

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

//# sourceMappingURL=editJournal.js.map
