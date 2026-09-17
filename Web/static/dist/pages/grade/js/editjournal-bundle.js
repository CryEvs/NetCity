var editJournalCtrl =
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

var editJournalCtrl;

editJournalCtrl = (function() {
  var _getPerformanceData, _initTopButons, _prepareAssign, _prepareLessons, _prepareRefs, _setAssignLaName, assignAnswersCtrl, assignCtrl, commentsCtrl, ctx, data, empty_block, gradeConstants, layoutManager, resourceLoader, settings, templateManager;

  data = null;

  templateManager = new (__webpack_require__(2));

  gradeConstants = __webpack_require__(3);

  layoutManager = __webpack_require__(4);

  resourceLoader = __webpack_require__(5);

  assignCtrl = __webpack_require__(6);

  commentsCtrl = __webpack_require__(8);

  assignAnswersCtrl = __webpack_require__(9);

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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gradeConstants = __webpack_require__(3);

var templateManager = new (__webpack_require__(2))();

var resourceLoader = __webpack_require__(5);

var homeAssignSelectorCtrl = __webpack_require__(7).HomeAssignSelectorCtrl;

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var templateManager = new (__webpack_require__(2))();

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var templateManager = new (__webpack_require__(2))();

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

/***/ })
/******/ ]);