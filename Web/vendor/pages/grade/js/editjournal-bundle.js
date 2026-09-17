var editJournalCtrl =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var editJournalCtrl;
	
	editJournalCtrl = (function() {
	  var _getPerformanceData, _prepareAssign, _prepareLessons, _prepareRefs, _setAssignLaName, ctx, data, empty_block, gradeConstants, layoutManager, prepareAssignModel, resourceLoader, settings, templateManager;
	
	  data = null;
	
	  templateManager = new (__webpack_require__(2));
	
	  gradeConstants = __webpack_require__(3);
	
	  layoutManager = __webpack_require__(4);
	
	  resourceLoader = __webpack_require__(5);
	
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
	      lessonId: null
	    }
	  };
	
	  ctx = {};
	
	  empty_block = '';
	
	  _prepareLessons = function() {
	    var temp;
	    temp = $.Deferred();
	    if (settings.subjectPlan.cached) {
	      temp.resolve(settings.subjectPlan.lessons);
	      return temp.promise();
	    }
	    if (settings.subjectPlan.noSubjectPlan) {
	      temp.resolve();
	      return temp.promise();
	    }
	    jsSubmit({
	      action: "/webapi/subjectplans/getForSubjectGroup",
	      method: "GET",
	      data: {
	        sgId: ctx.subjectGroupId
	      }
	    }).then(function(response) {
	      _.each(response.lessons, function(lesson) {
	        lesson.studied = lesson.hours === lesson.hoursStudied;
	        if (lesson.lastStudyDay) {
	          lesson.lastStudyDay = Date.parse(lesson.lastStudyDay);
	        }
	      });
	      settings.subjectPlan = $.extend({}, settings.subjectPlan, {
	        subjectPlanId: response.subjectPlanId,
	        noSubjectPlan: !response.subjectPlanId,
	        canAssign: response.variantsExists,
	        lessons: response.lessons,
	        cached: true
	      });
	      return temp.resolve(response.lessons);
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
	    if (trimStr(name).length > gradeConstants.maxLengths.assignTitle) {
	      alert(language.Generic.Assignment.kATAssignmentThemeNotMayBe);
	      nameInput.focus();
	      return false;
	    }
	    return true;
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
	      return assign.showTestPlan = true;
	    }
	  };
	
	  function editJournalCtrl(container1, classMeetings, _ctx, _settings) {
	    var assignCtxBtnHandler, changeHandler, ctrl;
	    this.container = container1;
	    settings = $.extend({}, settings, _settings);
	    ctx = $.extend({}, ctx, _ctx);
	    this.classMeetings = _.chain(classMeetings).filter(function(cm) {
	      return !cm.readOnly;
	    }).map(function(cm) {
	      return {
	        id: cm.id,
	        name: dateUtils.date2str(cm.date),
	        date: cm.date,
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
	    ctrl = this;
	    this.container.off(".edit-journal");
	    $(document).off(".edit-journal");
	    this.container.on("change.edit-journal", "input[name^=G_]", changeHandler);
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
	      return function(evt) {
	        var assignId, ctxBtnsBlock;
	        ctxBtnsBlock = $(evt.currentTarget).closest(".ctx-btns-icons");
	        assignId = parseInt(ctxBtnsBlock.data("assignid"));
	        handler(assignId, ctxBtnsBlock);
	      };
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
	        _this.ejLayoutManager = new layoutManager($(".assignments-block"));
	        return _this.ejLayoutManager.init();
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
	    ret.fail(function() {
	      return ctx.classMeetingId = prevCmId;
	    });
	    prepareStudents = resourceLoader.getStudentList({
	      sgid: ctx.subjectGroupId,
	      termId: ctx.termId
	    }).then((function(_this) {
	      return function(students) {
	        ctrl.students = _.map(students, function(student, index) {
	          student.studentId = student.id;
	          student.name = student.fullName;
	          if (student.free) {
	            student.name += " " + language.Generic.LearnApp.kDeleted;
	          }
	          student.num = index + 1;
	          return student;
	        });
	        if (ctrl.students.length > 10) {
	          $("#add-assign-top-btn").addClass("hide");
	          return $("#add-homeAssign-top-btn").addClass("hide");
	        } else {
	          $("#add-assign-top-btn").removeClass("hide");
	          if (!settings.editLimit.restrictAddHomeAssign) {
	            return $("#add-homeAssign-top-btn").removeClass("hide");
	          }
	        }
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
	            assign.results = _.map(ctrl.students, function(student) {
	              var mapRes;
	              mapRes = _.find(assign.results, function(res) {
	                return res.studentId === student.id;
	              }) || {
	                studentId: student.id
	              };
	              mapRes.result = mapRes.mark;
	              mapRes.marked = mapRes.duty || (mapRes.result ? true : false);
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
	            lessonId: data.lessonId,
	            lessonName: data.lessonName,
	            initLessonId: data.lessonId || -1
	          });
	          if (data.lessonId) {
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
	    var attendanceReasons, ctrl, filtersHtml, filtersModel, filtersTemplate, freeStudentsIdx, homeAssignment, model, otherAssignments, template;
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
	      constants: gradeConstants
	    };
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
	    _.each(this.classMeetings, function(cm) {
	      return cm.selected = cm.id === ctx.classMeetingId;
	    });
	    filtersModel = {
	      language: language,
	      subjectGroupName: ctx.subjectGroupName,
	      termName: ctx.termName,
	      classMeetings: this.classMeetings,
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
	            typeId: null
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
	      lessonId = settings.subjectPlan.lessonId;
	      if (lessonId <= 0) {
	        suggestedLesson = _.find(lessons, function(lesson) {
	          return lesson.hours > lesson.hoursStudied;
	        });
	      }
	      if (lessonId) {
	        lesson = _.findWhere(lessons, {
	          id: lessonId
	        });
	      } else {
	        lesson = _.first(lessons);
	      }
	      settings.subjectPlan.lessonName = lesson.lessonName;
	      settings.subjectPlan.lessonId = lessonId;
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
	        settings.subjectPlan.lessonId = lessonId;
	        settings.subjectPlan.lessonName = lesson.lessonName;
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
	
	  editJournalCtrl.prototype.getHomeAssignFromPlan = function(lessons) {
	    var getHomeAssignTextDeffered, html, lessonHomeAssignInput, lessonHomeAssignModel, template;
	    lessonHomeAssignModel = {
	      lessons: lessons,
	      language: language
	    };
	    template = Handlebars.compile(templateManager.getHomeAssignFromPlanTpl);
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
	        lessonsCombo.val(_.last(lessons).id);
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
	      assignmentTypes: _.filter(settings.refs.assignmentTypes, function(type) {
	        return type.id === gradeConstants.assignmentTypes.homeWork;
	      }),
	      assignmentTypesChoise: false,
	      fromKTP: !settings.subjectPlan.noSubjectPlan,
	      typeId: gradeConstants.assignmentTypes.homeWork,
	      language: language
	    };
	    onShowEventHandler = function(dialog) {
	      var homeAssignNameInput;
	      homeAssignNameInput = $("input[name='AN']", dialog.$modalContent);
	      return $("#useLessonHomeAssignBtn", dialog.$modalContent).click(function() {
	        return _prepareLessons().then(function(lessons) {
	          lessons = _.filter(lessons, function(lesson) {
	            return lesson.lastStudyDay !== null && lesson.lastStudyDay < ctx.classMeetingDay;
	          });
	          lessons = _.sortBy(lessons, function(lesson) {
	            return lesson.lastStudyDay;
	          });
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
	    return ctrl.createAssign(model, templateManager.addHomeAssignTpl, {
	      onShow: onShowEventHandler
	    }).then(function(newAssign) {
	      var template;
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
	
	  prepareAssignModel = function() {
	    var assignTypesWothoutHomeWork, defaultAssignName, model, temp;
	    temp = $.Deferred();
	    defaultAssignName = settings.subjectPlan.lessonId ? settings.subjectPlan.lessonName : language.Generic.Grade.kNoTheme;
	    model = {
	      assignmentName: defaultAssignName,
	      assignmentTypes: null,
	      assignmentTypesChoise: true,
	      typeId: null,
	      language: language,
	      variants: null
	    };
	    assignTypesWothoutHomeWork = _.filter(settings.refs.assignmentTypes, function(type) {
	      return type.id !== gradeConstants.assignmentTypes.homeWork;
	    });
	    if (!settings.moduleQA) {
	      assignTypesWothoutHomeWork = _.filter(assignTypesWothoutHomeWork, function(type) {
	        return type.id !== gradeConstants.assignmentTypes.DKR;
	      });
	      model.assignmentTypes = assignTypesWothoutHomeWork;
	      model.typeId = settings.lessonAnswerTypeId;
	      temp.resolve(model);
	    } else {
	      model.assignmentTypes = assignTypesWothoutHomeWork;
	      model.variants = [];
	      temp.resolve(model);
	    }
	    return temp.promise();
	  };
	
	  editJournalCtrl.prototype.addAssign = function() {
	    var ctrl;
	    ctrl = this;
	    return prepareAssignModel().then(function(model) {
	      return ctrl.createAssign(model, templateManager.addAssignTpl);
	    }).then(function(newAssign) {
	      var html, template;
	      template = Handlebars.compile(templateManager.assignColTpl);
	      html = template($.extend({}, newAssign, {
	        language: language
	      }));
	      $('.div-table-safari').append(html);
	      ctrl._navigateInputs($("#assignment_" + newAssign.id));
	      ctrl._setColNames();
	      return $(document).trigger('assignmentsColsChanged');
	    });
	  };
	
	  editJournalCtrl.prototype.addNextHomeAssign = function() {
	    var ctrl;
	    ctrl = this;
	    return jsSubmit({
	      action: "/asp/ajax/classmeetings/getnextclassmeetingsforsg.asp",
	      data: {
	        sgid: ctx.subjectGroupId,
	        cmid: ctx.classMeetingId
	      },
	      showProcessing: true
	    }).then(function(response) {
	      var html, model, nextClassMeetings, now, template;
	      nextClassMeetings = response.data.nextClassMeetings;
	      if (settings.editLimit.limitPastEditHomeAssigns) {
	        now = new Date();
	        nextClassMeetings = _.filter(nextClassMeetings, function(cm) {
	          return new Date(cm.day) > now;
	        });
	      }
	      if (nextClassMeetings.length === 0) {
	        $.show.message(language.Generic.Grade.kNoNextClassmeetings);
	        return;
	      }
	      model = {
	        assignmentTypes: _.filter(settings.refs.assignmentTypes, function(type) {
	          return type.id === gradeConstants.assignmentTypes.homeWork;
	        }),
	        assignmentTypesChoise: false,
	        typeId: gradeConstants.assignmentTypes.homeWork,
	        language: language,
	        fromKTP: !settings.subjectPlan.noSubjectPlan && settings.subjectPlan.lessonId,
	        classMeetings: nextClassMeetings
	      };
	      if (settings.subjectPlan.lessonId) {
	        model.lesson = {
	          id: settings.subjectPlan.lessonId,
	          name: settings.subjectPlan.lessonName
	        };
	      }
	      template = Handlebars.compile(templateManager.addNextHomeAssignTpl);
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
	                  sgid: ctx.subjectGroupId,
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
	        CMID: ctx.classMeetingId,
	        AID: assignId,
	        BMODULEQA: settings.moduleQA,
	        LAJID: productId,
	        SCHOOLYEARID: ctx.schoolYearId
	      });
	    });
	  };
	
	  editJournalCtrl.prototype.goTestPlan = function(assignId) {
	    return checkForChanges().then(function() {
	      return postTo("/asp/Grade/QA/TestPlanResults.asp", {
	        CMID: ctx.classMeetingId,
	        AID: assignId,
	        SCLID: ctx.subjectGroupId
	      });
	    });
	  };
	
	  editJournalCtrl.prototype.openPlan = function(assignId) {
	    return checkForChanges().then(function() {
	      return postTo("/asp/Grade/QA/TestPlan.asp", {
	        CMID: ctx.classMeetingId,
	        AID: assignId,
	        SCLID: ctx.subjectGroupId
	      });
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
	        $("#home-assign-add-button").show();
	      } else {
	        $("#assignment_" + assignId).remove();
	      }
	      ctrl._setColNames();
	      return $(document).trigger('assignmentsColsChanged');
	    });
	  };
	
	  editJournalCtrl.prototype.save = function() {
	    var performanceData;
	    if (!window.dataWereChanged) {
	      alert(language.Generic.SetupSchoolUI.kDataNotModified);
	      return;
	    }
	    data = {
	      lessonId: settings.subjectPlan.lessonId || -1,
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
	        var lesson, prevLesson;
	        window.dataWereChanged = false;
	        _this.performanceChanged = false;
	        if (_this.lessonChanged && settings.subjectPlan.initLessonId !== data.lessonId) {
	          if (settings.subjectPlan.initLessonId > 0) {
	            prevLesson = _.findWhere(settings.subjectPlan.lessons, {
	              id: settings.subjectPlan.initLessonId
	            });
	            prevLesson.hoursStudied = prevLesson.hoursStudied - 1;
	            prevLesson.studied = prevLesson.hoursStudied >= prevLesson.hours;
	          }
	          if (data.lessonId > 0) {
	            lesson = _.findWhere(settings.subjectPlan.lessons, {
	              id: data.lessonId
	            });
	            lesson.hoursStudied = lesson.hoursStudied + 1;
	            lesson.studied = lesson.hoursStudied >= lesson.hours;
	          }
	        }
	        _this.lessonChanged = false;
	        return settings.subjectPlan.initLessonId = data.lessonId;
	      };
	    })(this));
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
	              var diagnosticWorkData, dwTestPlanId, dwVariantId, name, nameInput, performanceData, saveExtraData, typeId, typeInfo, typeSelect;
	              typeSelect = $("select,input", dialog.$modalContent).filter("[name=AType]");
	              nameInput = $('input[name=AN]', dialog.$modalContent);
	              if (!_this._validate(typeSelect, nameInput)) {
	                return;
	              }
	              typeId = parseInt(typeSelect.val() || -1);
	              if (typeId === -1) {
	                $.show.message("Выберите тип задания");
	                return;
	              }
	              typeInfo = settings.refs.assignmentTypesIndex[typeId];
	              name = nameInput.val();
	              if (settings.moduleQA && typeInfo.id === gradeConstants.assignmentTypes.DKR) {
	                diagnosticWorkData = $('*[name=DiagnosticWork]', dialog.$modalContent).val();
	                if (!diagnosticWorkData) {
	                  alert("Выберите вариант диагностической работы");
	                  nameInput.focus();
	                  return false;
	                }
	                diagnosticWorkData = diagnosticWorkData.split('_');
	                dwVariantId = diagnosticWorkData[0];
	                dwTestPlanId = diagnosticWorkData[1];
	              }
	              if (options.check && !options.check()) {
	                return;
	              }
	              saveExtraData = {
	                lessonId: settings.subjectPlan.lessonId || -1,
	                sgid: ctx.subjectGroupId,
	                cmid: ctx.classMeetingId,
	                RegimeAddAssign: 1,
	                AN: name,
	                AType: typeId,
	                saveJournal: _this.performanceChanged ? 1 : 0
	              };
	              if (typeInfo.id === gradeConstants.assignmentTypes.DKR) {
	                saveExtraData.dwVariantId = dwVariantId;
	                saveExtraData.dwTestPlanId = dwTestPlanId;
	              }
	              if (_this.performanceChanged) {
	                performanceData = _getPerformanceData(_this.container);
	                saveExtraData = $.extend(saveExtraData, performanceData);
	              }
	              return jsSubmit({
	                data: saveExtraData,
	                action: "/webapi/grade/journal/edit",
	                method: "POST",
	                nocache: true,
	                showProcessing: true
	              }).then(function(response) {
	                var modelMessage, newAssign, templateMessageAdd;
	                window.dataWereChanged = false;
	                _this.performanceChanged = false;
	                newAssign = {
	                  id: response.assignmentId,
	                  name: response.assignmentName,
	                  typeId: typeId,
	                  typeName: typeInfo.id === gradeConstants.assignmentTypes.DKR ? typeInfo.abbr : typeInfo.name,
	                  results: _.map(_this.students, function(student) {
	                    return {
	                      studentId: student.studentId,
	                      result: null,
	                      readonly: student.free
	                    };
	                  })
	                };
	                _prepareAssign(newAssign);
	                _this.assignsWitResults.push(newAssign);
	                dialog.successClose();
	                if (settings.moduleQA && _.contains(gradeConstants.testPlansTypes, newAssign.typeId)) {
	                  templateMessageAdd = Handlebars.compile(templateManager.messageAssignmentAdded);
	                  modelMessage = {
	                    assignId: newAssign.id,
	                    isTestPlansType: _.contains(gradeConstants.testPlansTypes, newAssign.typeId),
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
	
	module.exports = editJournalCtrl;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var EditJournalTemplateManager;
	
	EditJournalTemplateManager = (function() {
	  function EditJournalTemplateManager() {}
	
	  EditJournalTemplateManager.prototype.assignTitleTpl = '<div class="task-header">Задание</div> <div class="assignment-title"> {{#ifCond typeId "==" @root.constants.assignmentTypes.DKR}} <input type="hidden" name="DKRAID" value="{{id}}"> {{/ifCond}} <input type="hidden" name="AID" value="{{id}}"> <div class="ctx-btns-icons ctx-btns-icons-xs" data-assignid="{{id}}" data-productid="{{productId}}"> <div class="danger delete assign-btn" title="{{@root.language.Generic.Buttons.kRemove}}"><span class="glyphicon glyphicon-remove"></span></div> <div class="primary edit-assign assign-btn" title="{{@root.language.Generic.Grade.kEditAssignment}}"><span class="glyphicon glyphicon-pencil"></span></div> {{#if showTestPlan}} <div class="test-plan primary assign-btn" title="{{@root.language.Generic.QualityAssessment.kTestPlanResults}}"><span class="glyphicon glyphicon-list-alt"></span></div> {{/if}} <input type="checkbox" name="MAll_{{id}}" value="{{id}}" tooltip="{{@root.language.Generic.Grade.kCheckUncheckAll}}"> </div> <span title="{{name}}" class="assignment-name"> {{name}} </span> {{#if laName}} <div class="assignment-activity"> <span>{{laName}}</span> </div> {{/if}} {{#if typeName}} <div class="assignment-type"> <span>{{typeName}}</span> </div> {{/if}} </div>';
	
	  EditJournalTemplateManager.prototype.messageAssignmentAdded = '{{@root.language.Generic.Grade.kAssignmentAdded}} {{#if isTestPlansType}} <br />{{@root.language.Generic.Grade.kForFillingTestPlan}} <a class="open-testplan-link" data-assignid="{{assignId}}" href="javascript:void(0);" title="{{@root.language.Generic.Grade.kTestPlan}}"> {{@root.language.Generic.Grade.kTestPlan}} </a> {{/if}}';
	
	  EditJournalTemplateManager.prototype.messageCurriculumNotFilled = '{{@root.language.Generic.Curriculum.kCurriculumNotFilled}} <br /> <a class="go-edit-planner-link" href="javascript:void(0);" title="{{@root.language.Generic.Curriculum.kCurriculum}}"> {{@root.language.Generic.Curriculum.kGoEdit}} </a>';
	
	  EditJournalTemplateManager.prototype.assignColTpl = '<div class="assignment-container assignment-column" id="assignment_{{id}}"> {{> assignTitle}} <div class="results-block"> {{#each results}} <div class="{{IndividualEduc studentId}}"> <span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" {{#if marked}}checked{{/if}} {{#if readonly}}disabled{{/if}}></span> <input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" {{#if readonly}}disabled{{/if}}> </div> {{/each}} </div> </div>';
	
	  EditJournalTemplateManager.prototype.homeAssignEmptyColTpl = '<span class="home-assignments-header">{{language.Generic.Assignment.kHomeAssignment}}</span> {{#unless restrictAddHomeAssign}} <div class="add-assignments add-homeAssign-btn" title="{{language.Generic.Grade.kAddAssignment}}"> <span>{{language.Generic.Buttons.kAdd}}</span> <i class="icon-plus-sign"></i> </div> <div class="add-assignments-adaptive"> <i class="icon-plus-sign add-homeAssign-btn" title="{{language.Generic.Grade.kAddAssignment}}" ></i> </div> {{/unless}} <div class="empty-block"> {{#each students}} <div></div> {{/each}} </div>';
	
	  EditJournalTemplateManager.prototype.homeAssignColTpl = '<span class="assignments-header">{{@root.language.Generic.Assignment.kHomeAssignment}}</span> {{> assignTitle}} <div class="results-block"> {{#each results}} <div class="{{IndividualEduc studentId}}"> <span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" {{#if marked}}checked{{/if}} {{#if readonly}}disabled{{/if}}></span> <input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" {{#if readonly}}disabled{{/if}}> </div> {{/each}} </div>';
	
	  EditJournalTemplateManager.prototype.attendanceColTpl = '<div class="attendance-block"> {{#each attendance}} <div class="{{IndividualEduc studentId}}"> <select name="REASON" {{#if readonly}}disabled{{/if}}> <option value=""></option> {{#each ../attendanceReasons}} <option value="{{mark}}" {{selected ../reason mark}}>{{mark}}</option> {{/each}} </select> </div> {{/each}} </div>';
	
	  EditJournalTemplateManager.prototype.editJournalTpl = '<div class="form"> <div class="editjournal-wrapper"> <div class="editjournal"> <div class="assignments-header-block"> <div id="assignments-header-many" class="assignments-header {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kAssignments}}</div> </div> <div class="editjournal-left-block task-active"> <!-- ученики --> <div class="studentlist head"> <div class="student-title">{{language.Common.kStudents}}</div> <div class="student-block"> {{#each students}} <div class="student-name student {{IndividualEduc id}}"> <input type="hidden" name="SID" value="{{id}}" {{#if free}}disabled{{/if}}> <span>{{num}}. {{name}}</span> </div> {{/each}} </div> </div> <!-- Посещаемость --> <div class="attendance head"> <!--<div class="attendance-title">{{language.Generic.Grade.kAttendanceColumn}}</div>--> <div class="attendance-title">Посеща-<br>емость</div> {{> attendanceCol}} </div> <!-- Домашняя работа --> <div class="home-assignment assignment-column head" id="home-assignment-column"> {{#if homeAssignment}} {{#with homeAssignment}} {{> homeAssignCol}} {{/with}} {{else}} {{> homeAssignEmptyCol}} {{/if}} </div> </div> <!-- оценки --> <div class="assignments-block-wrapper"> <div class="assignments-block head"> <div class="div-table-safari"> {{#each assignments}} {{> assignCol}} {{/each}} <div class="wrapper"> {{#each students}} <div></div> {{/each}} </div> </div> </div> </div> <div class="editjournal-right-block"> <!-- для клонирования --> <div class="new-assignment-container head"> <div class="assignment-container assignment-column head"> <div class="assignment-title"> <span id="assignments-header-new" class="assignments-header-empty {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kCreateAssignmentShort}}</span> <span id="assignments-header-no" class="assignments-header {{#if assignments.length}}hidden{{/if}}">{{language.Generic.Grade.kAssignments}}</span> </div> <div class="add-assignments add-assign-btn" title="{{language.Generic.Grade.kAddAssignment}}"> <span>{{language.Generic.Buttons.kAdd}}</span> <i class="icon-plus-sign"></i> </div> <div class="results-block results-block-inactive"> {{#each students}} <div></div> {{/each}} </div> </div> </div> </div> </div> </div> </div>';
	
	  EditJournalTemplateManager.prototype.setLessonTpl = '<select class="form-control" name="LESSONID"> {{#unless suggestedLessonId}} <option value="-1" disabled="disabled" selected="selected">{{language.Grade.kChooseLesson}}</option> {{/unless}} {{#each lessons}} <option value="{{id}}" {{selected ../suggestedLessonId id}}>{{displayName}}{{#if studied}}*{{/if}}</option> {{/each}} </select>';
	
	  EditJournalTemplateManager.prototype.addCommonAssignTpl = '<div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentTheme}} </label> <div class="col-md-9"> <input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" autofocus="autofocus"> </div> </div> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentType}} </label> <div class="col-md-9"> <select name="AType" class="form-control" {{#unless assignmentTypesChoise}}disabled="disabled"{{/unless}}> {{#unless typeId}} <option value="" disabled="disabled" selected="selected">{{language.Generic.Assignment.kATChooseType}}</option> {{/unless}} {{#each assignmentTypes}} <option value="{{id}}" {{#if typeId}} {{selected ../typeId id}} {{/if}}>{{name}}</option> {{/each}} </select> </div> </div> <div class="form-group" id="diagnosticWork" style="display: none"></div>';
	
	  EditJournalTemplateManager.prototype.diagnosticWorkTpl = '<label class="control-label col-md-3"> Диагностическая работа </label> <div class="col-md-9"> <select name="DiagnosticWork" class="form-control" {{#unless assignmentTypesChoise}} disabled="disabled" {{/unless}}> {{#unless typeId}} <option value="-1_-1" selected="selected">Выберите вариант диагностической работы</option> {{/unless}} {{#each variants}} <option value="{{id}}_{{testPlanId}}">{{diagnosticWork.name}} ({{name}})</option> {{/each}} </select> </div>';
	
	  EditJournalTemplateManager.prototype.getHomeAssignFromPlanTpl = '<form class="form-horizontal" onsubmit="return false;"> <div class="form-group"> <label class="control-label col-md-3"> {{language.Curriculum.kLesTheme}} </label> <div class="col-md-9"> {{#if lessons}} {{#ifCond lessons.length "==" 1}} <input type="text" class="form-control" name="LESSONFULLNAME" value="{{lessons.[0].displayName}}" disabled="disabled"> <input type="hidden" name="LESSONID" value="{{lessons.[0].id}}"> {{else}} <select name="LESSONID" class="form-control"> {{#each lessons}} <option value="{{id}}">{{displayName}}</option> {{/each}} </select> {{/ifCond}} {{else}} Не было уроков изученных {{/if}} </div> </div> {{#if lessons}} <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kHomeAssignmentText}} </label> <div class="col-md-9"> <input type="text" class="form-control" name="LESSONHOMEASSIGNMENT" value="" disabled="disabled"> </div> </div> </form> {{/if}}';
	
	  EditJournalTemplateManager.prototype.addHomeAssignCmnTpl = '<div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kHomeAssignmentText}} </label> <div class="col-md-9"> {{#if fromKTP}} <div class="input-group"> {{/if}} <input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" autofocus="autofocus"> {{#if fromKTP}} <span class="input-group-btn"> <button class="btn btn-default" type="button" id="useLessonHomeAssignBtn" title="Использовать домашнее задание из КТП"><span class="glyphicon glyphicon-book"></span> Из КТП</button> </span> </div> {{/if}} </div> </div> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Assignment.kATAssignmentType}} </label> <div class="col-md-9"> <span class="form-control form-control-title"><span class="text">{{language.Generic.Assignment.kATHomeWork}}</span></span> <input type="hidden" name="AType" value="{{typeId}}" /> </div> </div>';
	
	  EditJournalTemplateManager.prototype.addHomeAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> {{> addHomeAssignCmn}} </form>';
	
	  EditJournalTemplateManager.prototype.addNextHomeAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> <div class="form-group"> <label class="control-label col-md-3"> {{language.Generic.Grade.kNextClassmeetingDate}} </label> <div class="col-md-9"> <select name="NEXTCMID" class="form-control"> {{#each classMeetings}} <option value="{{id}}">{{name}}</option> {{/each}} </select> </div> </div> {{> addHomeAssignCmn}} </form>';
	
	  EditJournalTemplateManager.prototype.addAssignTpl = '<form class="form-horizontal" onsubmit="return false;"> {{> addCommonAssign}} </form>';
	
	  EditJournalTemplateManager.prototype.filterTpl = '<div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">Предмет</label> <div class="col-md-8 col-lg-5 col-sm-8"> <span class="form-control form-control-title"> <span class="text">{{subjectGroupName}}</span> </span> </div> </div> <div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">Учебный период</label> <div class="col-md-8 col-lg-5 col-sm-8"> <span class="form-control form-control-title"> <span class="text">{{termName}}</span> </span> </div> </div> {{> cmSelect}} {{> lessonSelect}}';
	
	  EditJournalTemplateManager.prototype.cmSelectTpl = '<div class="form-group"> <label class="control-label col-md-4 col-lg-3 col-sm-4">Занятие</label> <div class="col-md-8 col-lg-5 col-sm-8"> <div class="input-group"> <select class="form-control" name="CMID"> {{#each classMeetings}} <option value="{{id}}" {{#if selected}} selected {{/if}} >{{name}}</option> {{/each}} </select> <span class="input-group-btn"> <button title="Следующее занятие" type="button" class="btn btn-default" id="prev-cm"><span class="glyphicon glyphicon-circle-arrow-left"></span></button> <button title="Предыдущее занятие" type="button" class="btn btn-default" id="next-cm"><span class="glyphicon glyphicon-circle-arrow-right"></span></button> </span> </div> </div> </div>';
	
	  EditJournalTemplateManager.prototype.lessonSelectTpl = '<div class="form-group" id="lesson-theme-filter-row"> <label class="control-label col-md-4 col-lg-3 col-sm-4">Тема урока</label> <div class="col-md-8 col-lg-5 col-sm-8"> {{#if subjectPlan.lessonId}} <div class="input-group"> <span class="form-control form-control-title"><span class="text">{{subjectPlan.lessonName}}</span></span> <span class="input-group-btn"> <button id="set-lesson-btn" title="Сменить тему урока" type="button" class="btn btn-default" > <span class="glyphicon glyphicon-pencil"></span> </button> </span> </div> {{else}} {{#if subjectPlan.subjectPlanId}} <div class="input-group"> <span class="form-control form-control-title"><span class="text">Выберите тему урока</span></span> <span class="input-group-btn"> <button id="set-lesson-btn" title="Выбрать тему урока" type="button" class="btn btn-default"> <span class="glyphicon glyphicon-pencil"></span> </button> </span> </div> {{else}} {{#if subjectPlan.canAssign}} <a id="assign-variant-link" href="#" title="Выберите вариант КТП"> Выберите вариант КТП </a> {{else}} <span class="form-control form-control-title"><span class="text"><нет вариантов КТП></span></span> {{/if}} {{/if}} {{/if}} </div> </div>';
	
	  return EditJournalTemplateManager;
	
	})();
	
	module.exports = EditJournalTemplateManager;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
				homeWork: 3,
				lessonAnswer: 10,
				homework: 4,
				DKR: 16,
				tkrAssignType: 99
			},
			testPlansTypes: [16, 2, 4, 8, 14]
		};
	
		if (typeof sys != 'undefined' && sys.constants != null) {
			sys.constants.grade = gradeConstants;
		}
	
		//для поддержки js модульности
		(function (exp, name) {
			var exported = false;
			if (typeof module !== 'undefined' && module.exports) {
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

/***/ },
/* 4 */
/***/ function(module, exports) {

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
	          return _this.adjustTotalWidth();
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
	    $(document).on("mouseenter.edit-journal-layout", "div.student, div.results-block div, .attendance-block div", function() {
	      return hoverHandler(this);
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


/***/ },
/* 5 */
/***/ function(module, exports) {

	var ResourceLoader;
	
	ResourceLoader = (function() {
	  var cache;
	
	  cache = {
	    studentList: {},
	    assignmentTypes: {},
	    attendanceReasons: {},
	    termInfo: {}
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
	
	  ResourceLoader.prototype.getAssignTypes = function() {
	    var cachedData, ret;
	    ret = $.Deferred();
	    cachedData = this.checkCache('assignmentTypes');
	    if (cachedData) {
	      ret.resolve(cachedData);
	      return ret.promise();
	    }
	    jsSubmit({
	      action: "/webapi/grade/assignment/types",
	      method: "GET"
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
	      action: "/webapi/grade/attendance/reasons",
	      method: "GET"
	    }).then((function(_this) {
	      return function(response) {
	        _this.putCache('attendanceReasons', null, response);
	        return ret.resolve(response);
	      };
	    })(this));
	    return ret.promise();
	  };
	
	  return ResourceLoader;
	
	})();
	
	module.exports = new ResourceLoader;


/***/ }
/******/ ]);
//# sourceMappingURL=editjournal-bundle.js.map