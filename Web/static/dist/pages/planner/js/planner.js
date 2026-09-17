var PlannerCtrl =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Rights = _interopRequireWildcard(__webpack_require__(2));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var nodeType = {
  plan: "plan",
  unit: "unit",
  lesson: "lesson"
};

var PlannerCtrl = /*#__PURE__*/function () {
  function PlannerCtrl(options) {
    _classCallCheck(this, PlannerCtrl);

    var defOptions = {
      container: null,
      readOnly: false,
      immediatelyLoad: true,
      ctx: null
    };
    this.options = $.extend({}, defOptions, options);
    this.planTree = null;
    this.ctx = options.ctx;

    if (!appContext.hasAnyRight([Rights.arCurrMgmCreateAll, Rights.arCurrMgmCreate])) {
      this.options.readOnly = true;
    }

    this.planNoteRow = $("#plan-note-row");
  }

  _createClass(PlannerCtrl, [{
    key: "getPlan",
    value: function getPlan() {
      var planId = this.ctx.planId;

      if (planId) {
        return _.findWhere(this.planTree, {
          key: planId
        });
      }

      return null;
    }
  }, {
    key: "processButtons",
    value: function processButtons() {
      var emptyPlan = this.planTree.length === 0;

      if (emptyPlan) {
        //если план пуст - прячем все кнопки кроме "Варианты"
        $(".action-panel").find("button").addClass("hide");
        $("#variants-btn").removeClass("hide");
      } else {
        //иначе показываем все
        $(".action-panel").find("button").removeClass("hide");
      }

      if (this.options.readOnly) {
        $("#copy-btn").addClass("hide");
        $("#variants-btn").addClass("hide");
      }

      if (emptyPlan) {
        return;
      }

      if (this.ctx.readOnly || this.options.readOnly) {
        $(".btn-write-access").addClass("hide");
        $(".btn-readonly-access").removeClass("hide");
      } else {
        $(".btn-write-access").removeClass("hide");
        $(".btn-readonly-access").addClass("hide");
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.attachEvents();
      this.initTree();
      jsSubmit({
        action: "/webapi/subjectplans/filter",
        method: "GET",
        showProcessing: true
      }).then(function (response) {
        var model = response.filterPanel;
        var sources = response.filterSources;
        var fpContainer = $(".filters-panel");
        _this.fp = new filterPanel(fpContainer, model, sources, "/webapi/subjectplans/filter/init");
        _this.planNoteRow = $("<div class=\"form-group\" id=\"plan-note-row\"><label class=\"control-label\">Пояснительная записка</label><div><div id=\"attachFiles\" style='max-width: 500px'></div></div></div>");

        _this.planNoteRow.insertAfter(fpContainer.find(".form-group:last"));

        if (_this.ctx.elementType != "pl") {
          _this.planNoteRow.hide();
        }

        _this.fp.emptyChoice(function () {
          $("#load-plan-btn").attr("disabled", "disabled");
        });

        _this.fp.ready(function () {
          $("#load-plan-btn").removeAttr("disabled");
        });

        if (_this.options.immediatelyLoad) {
          _this.load();
        }
      });
    }
  }, {
    key: "load",
    value: function load(extFilter) {
      var _this2 = this;

      var fpVals = this.fp.getValues();
      var fpFilter = {
        yearId: appContext.yearId,
        subjectId: fpVals.SBJID,
        grade: fpVals.GRADEID,
        variantId: fpVals.VARIANTID || -1
      };
      var filter = $.extend({}, fpFilter, extFilter);

      var initNodeTypes = function initNodeTypes(treeModel) {
        var activated = false;

        _.each(treeModel, function (plan) {
          plan.nodeType = nodeType.plan;

          if (_this2.ctx.elementType === "pl" && _this2.ctx.elementId == plan.key) {
            plan.activate = true;
            plan.focus = true;
            activated = true;
            _this2.ctx.readOnly = plan.readOnly || false;
          }

          if (!plan.children) {
            return;
          }

          _.each(plan.children, function (unit) {
            unit.nodeType = nodeType.unit;

            if (_this2.ctx.elementType === "un" && _this2.ctx.elementId == unit.key) {
              unit.activate = true;
              unit.focus = true;
              activated = true;
              _this2.ctx.readOnly = plan.readOnly || false;
            }

            if (!unit.children) {
              return;
            }

            _.each(unit.children, function (lesson) {
              lesson.nodeType = nodeType.lesson;

              if (_this2.ctx.elementType === "ls" && _this2.ctx.elementId == lesson.key) {
                lesson.activate = true;
                lesson.focus = true;
                activated = true;
                _this2.ctx.readOnly = plan.readOnly || false;
              }
            });
          });
        });

        if (!activated) {
          //сброс контекста выбора
          _this2.ctx.elementType = null;
        }

        return treeModel;
      };

      var setTreeData = function setTreeData(treeModel) {
        _this2.planTree = treeModel;
        var rootNode = $(_this2.options.container).dynatree("getRoot");
        rootNode.removeChildren();
        rootNode.addChild(_this2.planTree);

        _this2.initPlanAttachments();

        _this2.processButtons();
      };

      jsSubmit({
        method: "GET",
        action: "/webapi/subjectplans/tree",
        data: filter,
        rawSettings: {
          withCredentials: true
        }
      }).then(initNodeTypes).then(setTreeData).then(function () {
        if (!_this2.planTree.length) {
          $("#empty-plan-panel").removeClass("hide");
          $("#plan-container").addClass("hide");
        } else {
          $("#plan-container").removeClass("hide");
          $("#empty-plan-panel").addClass("hide");
        }

        $(".action-panel").removeClass("hide");
        var node = $("#tree").dynatree("getTree").getActiveNode();

        if (!node) {
          return;
        }

        var nodeTopOffset = $(node.li).offset().top;
        var clientHeight = document.documentElement.clientHeight;

        if (clientHeight > nodeTopOffset + 10) {
          //элемент на странице виден - скролл не требуется
          return;
        }

        var scrollSize = nodeTopOffset - clientHeight + 100;
        $('html, body').animate({
          scrollTop: scrollSize
        }, 20);
      });
    } //инциализация файловых вложений

  }, {
    key: "initPlanAttachments",
    value: function initPlanAttachments() {
      var plan = this.getPlan();

      if (!plan) {
        this.planNoteRow.hide();
        return;
      }

      var readOnly = this.options.readOnly || plan.readOnly || false;
      var block = $('#attachFiles');
      var faSettings = {
        multiple: false,
        showDescription: true,
        readonly: readOnly,
        onSuccessAttach: function onSuccessAttach(file) {
          //добавляем файл в "дерево"
          plan.attach = {
            id: file.Id,
            originalFileName: file.Name,
            description: file.Description
          };
        },
        onSuccessDetach: function onSuccessDetach() {
          return plan.attach = null;
        },
        block: block
      };
      var data = {
        wasChanged: false,
        context: {
          PlanId: plan.key
        }
      };

      if (plan.attach) {
        block.closest(".form-group").show();
        var file = {
          FileAttachmentId: plan.attach.id,
          FileName: plan.attach.originalFileName,
          Description: plan.attach.description
        };
        data.files = [file];
      } //todo избавиться от глобального контекста


      window.fileAttachmentCtrl = new FileAttachmentCtrl(faSettings, data);
      this.planNoteRow.show();

      if (!plan.attach && readOnly) {
        this.planNoteRow.hide();
      }
    } //инициализации дерева

  }, {
    key: "initTree",
    value: function initTree() {
      var _this3 = this;

      var cookiePersist = function cookiePersist(flag, node) {
        //сохраняем состояние в куках
        var expandInfo = $.cookie("PL_EXP_".concat(node.data.nodeType)) || "";
        var expandNodes = expandInfo.split("|");

        if (flag) {
          expandNodes.push(node.data.key);
        } else {
          expandNodes = _.without(expandNodes, node.data.key);
        }

        expandInfo = expandNodes.join("|");
        $.cookie("PL_EXP_".concat(node.data.nodeType), expandInfo, {
          path: "/"
        });
      };

      $(this.options.container).dynatree({
        title: "КТП",
        fx: {
          height: "toggle",
          duration: 200
        },
        autoFocus: false,
        onExpand: cookiePersist,
        onQueryExpand: cookiePersist,
        onActivate: function onActivate(node) {
          if (node.data.nodeType === nodeType.plan) {
            _this3.ctx.elementType = "pl";
            _this3.ctx.planId = node.data.key;
            _this3.ctx.unitId = null;
            _this3.ctx.lessonId = null;

            _this3.initPlanAttachments();
          } else if (node.data.nodeType === nodeType.unit) {
            _this3.ctx.elementType = "un";
            _this3.ctx.unitId = node.data.key;
            _this3.ctx.planId = node.parent.data.key;
            _this3.ctx.lessonId = null;

            _this3.planNoteRow.hide();
          } else if (node.data.nodeType === nodeType.lesson) {
            _this3.ctx.elementType = "ls";
            _this3.ctx.lessonId = node.data.key;
            _this3.ctx.unitId = node.parent.data.key;
            _this3.ctx.planId = node.parent.parent.data.key;

            _this3.planNoteRow.hide();
          }

          _this3.ctx.currElementName = node.data.title;
          _this3.ctx.elementId = node.data.key;
          _this3.ctx.readOnly = true;
          var plan = _this3.getPlan() || {};
          _this3.ctx.readOnly = plan.readOnly || false;

          _this3.processButtons();
        },
        onLazyRead: function onLazyRead(node) {
          var action = "";
          var data = {};
          var loadNodeType = "";

          if (node.data.nodeType === nodeType.plan) {
            action = "/webapi/subjectplans/tree/units";
            data.planId = node.data.key;
            loadNodeType = "unit";
          } else if (node.data.nodeType === nodeType.unit) {
            action = "/webapi/subjectplans/tree/lessons";
            data.unitId = node.data.key;
            loadNodeType = "lesson";
          }

          jsSubmit({
            method: "GET",
            action: action,
            data: data
          }).then(function (response) {
            var items = response;

            if (items.length) {
              _.each(items, function (item) {
                item.nodeType = loadNodeType;
              });

              node.addChild(items);
            } else {
              node.data.isFolder = false;
            }
          });
        }
      });
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this4 = this;

      $("#edit-btn").click(function () {
        _this4.editItem();
      });
      $("#copy-btn").click(function () {
        _this4.copyItem();
      });
      $("#view-btn").click(function () {
        _this4.editItem();
      });
      $("#create-btn").click(function () {
        _this4.createItem();
      });
      $("#del-btn").click(function () {
        _this4.deleteItem();
      });
      $("#import-btn").click(function () {
        _this4.importKTP();
      });
      $("#export-btn").click(function () {
        _this4.exportKTP();
      });
      $("#load-plan-btn").click(function () {
        _this4.load();
      });
      $("#expand-btn").click(function () {
        _this4.expandAll();
      });
      $("#collapse-btn").click(function () {
        _this4.collapseAll();
      });
      $("#report-btn").click(function () {
        _this4.openReport();
      });
      $("#variants-btn").click(function () {
        _this4.goVariants();
      });
    }
  }, {
    key: "editItem",
    value: function editItem() {
      if (this.ctx.elementType == "un") {
        this.editUnit();
      } else if (this.ctx.elementType == "ls") {
        this.editLesson();
      } else if (this.ctx.elementType == "pl") {
        if (this.options.readOnly || this.ctx.readOnly) {
          alert(language.Generic.Curriculum.kErrMsgCantViewPlan);
        } else {
          alert(language.Generic.Curriculum.kErrMsgCantEditPlan);
        }
      } else {
        alert(language.Generic.Curriculum.kErrMsgYouNeedSelectUnitOrLessonFirst);
      }
    }
  }, {
    key: "editUnit",
    value: function editUnit() {
      var form = document.Planner;
      form.PLANID.value = this.ctx.planId;
      form.UNID.value = this.ctx.elementId;
      form.RO.value = this.ctx.readOnly ? "1" : "0";
      DoSubmit(form, 'EditUnit.asp');
    }
  }, {
    key: "editLesson",
    value: function editLesson() {
      var currGrade = $("[name='GRADEID']").val();
      var form = document.Planner;
      form.LSID.value = this.ctx.elementId;
      form.UNID.value = this.ctx.unitId;
      form.PLANID.value = this.ctx.planId;
      form.GRADEID.value = currGrade;
      form.RO.value = this.ctx.readOnly ? "1" : "0";
      DoSubmit(form, 'EditLesson.asp');
    }
  }, {
    key: "copyItem",
    value: function copyItem() {
      if (this.ctx.elementType == "un") this.copyUnit();else if (this.ctx.elementType == "ls") this.copyLesson();else if (this.ctx.elementType == "pl") alert(language.Generic.Curriculum.kErrMsgCantCopyPlan);else alert(language.Generic.Curriculum.kErrMsgYouNeedSelectUnitOrLessonFirst);
    }
  }, {
    key: "copyUnit",
    value: function copyUnit() {
      var form = document.Planner;
      form.PLANID.value = this.ctx.planId;
      form.UNID.value = this.ctx.elementId;
      DoSubmit(form, 'CopyUnit.asp');
    }
  }, {
    key: "copyLesson",
    value: function copyLesson() {
      var form = document.Planner;
      form.LSID.value = this.ctx.elementId;
      form.UNID.value = this.ctx.unitId;
      form.PLANID.value = this.ctx.planId;
      DoSubmit(form, 'CopyLesson.asp');
    }
  }, {
    key: "createItem",
    value: function createItem() {
      if (this.ctx.elementType == "pl") this.createUnit();else if (this.ctx.elementType == "un") this.createLesson();else alert(language.Generic.Curriculum.kErrMsgYouNeedSelectPlanOrUnitFirst);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      if (this.ctx.elementType == "un") this.deleteUnit();else if (this.ctx.elementType == "ls") this.deleteLesson();else if (this.ctx.elementType == "pl") alert(language.Generic.Curriculum.kErrMsgCantDeletePlan);else alert(language.Generic.Curriculum.kErrMsgYouNeedSelectUnitOrLessonFirst);
    }
  }, {
    key: "createUnit",
    value: function createUnit() {
      var form = document.Planner;
      form.PLANID.value = this.ctx.elementId;
      form.UNID.value = -1;
      form.RO.value = this.ctx.readOnly ? "1" : "0";
      DoSubmit(form, 'EditUnit.asp');
    }
  }, {
    key: "createLesson",
    value: function createLesson() {
      var currGrade = $("[name='GRADEID']").val();
      var form = document.Planner;
      form.LSID.value = -1;
      form.UNID.value = this.ctx.elementId;
      form.PLANID.value = this.ctx.planId;
      form.GRADEID.value = currGrade;
      form.RO.value = this.ctx.readOnly ? "1" : "0";
      DoSubmit(form, 'EditLesson.asp');
    }
  }, {
    key: "deleteUnit",
    value: function deleteUnit() {
      var _this5 = this;

      $.show.confirmation(language.Generic.Curriculum.kMsgDeletingUnit).then(function () {
        var url = urlHelper.makeUrl('/webapi/subjectplans/units', {
          unitId: _this5.ctx.elementId,
          planId: _this5.ctx.planId
        });
        jsSubmit({
          method: "DELETE",
          action: url,
          showProcessing: true,
          auth: false
        }).then(function () {
          return _this5.load();
        });
      });
    }
  }, {
    key: "deleteLesson",
    value: function deleteLesson() {
      var _this6 = this;

      $.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function () {
        var url = urlHelper.makeUrl('/webapi/subjectplans/lessons', {
          lessonId: _this6.ctx.elementId,
          unitId: _this6.ctx.unitId,
          planId: _this6.ctx.planId
        });
        jsSubmit({
          method: "DELETE",
          action: url,
          showProcessing: true,
          auth: false
        }).then(function () {
          return _this6.load();
        });
      });
    }
  }, {
    key: "exportKTP",
    value: function exportKTP() {
      var _this7 = this;

      if (this.ctx.elementType != "pl") {
        alert(language.Generic.Curriculum.kForExportSelectVariantWithUnit);
        return;
      }

      $.show.confirmation(language.Generic.Curriculum.kExportVariantConfirm.replace("%", "<b>" + this.ctx.currElementName + "</b>")).then(function () {
        postTo({
          path: "/webapi/subjectplans/export",
          formParams: {
            method: "GET"
          },
          params: {
            PLANID: _this7.ctx.elementId
          }
        });
      });
    }
  }, {
    key: "importKTP",
    value: function importKTP() {
      if (this.ctx.elementType != "pl" || this.ctx.elementId == "0") {
        alert(language.Generic.Curriculum.kForImportSelectEmptyVariant);
        return;
      }

      var plan = this.getPlan();

      if (plan.isFolder) {
        alert(language.Generic.Curriculum.kForImportSelectEmptyVariant);
        return;
      }

      var fpVals = this.fp.getValues();
      $.show.fileDialog({
        title: language.Generic.Curriculum.kImportVariant,
        fileExts: ['.xls'],
        submitParams: {
          SJID: fpVals.SBJID,
          GRADEID: fpVals.GRADEID,
          PlanID: this.ctx.elementId
        },
        url: '/asp/Curriculum/PlannerImportSave.asp'
      });
    }
  }, {
    key: "openReport",
    value: function openReport() {
      var _this8 = this;

      if (!this.ctx.planId) {
        alert(language.Generic.Curriculum.kErrMsgYouNeedSelectPlanFirst);
        return;
      }

      var plan = this.getPlan();

      if (!plan.isFolder) {
        alert(language.Generic.Curriculum.kEmptyPlanUnits);
        return;
      }

      var reportTypes = [{
        id: 0,
        name: language.Generic.Curriculum.kReducedPlan
      }, {
        id: 1,
        name: language.Generic.Curriculum.kReducedPlan_withHA
      }, {
        id: 2,
        name: language.Generic.Curriculum.kFullPlan
      }];

      if (this.options.moduleQa) {
        reportTypes.push({
          id: 3,
          name: language.Generic.Curriculum.kFullPlan_withDecKES
        });
      }

      var dialogContent = "<form name=\"form\">" + "<div class=\"form-group\">" + "<select class=\"form-control\" name=\"reportType\"></select>" + "</div>" + "</form>";
      var selectRepType;
      $.show.dialog({
        title: "Выберите вид отчета",
        message: dialogContent,
        onshow: function onshow(dialog) {
          selectRepType = $(dialog.$modalBody).find("select");

          _.each(reportTypes, function (reportType) {
            selectRepType.append($("<option></option>").attr("value", reportType.id).text(reportType.name));
          });
        },
        buttons: [{
          label: language.Generic.Buttons.kPrint,
          action: function action() {
            var reportType = selectRepType.val();
            window.schowParams = getReportParams("Print");
            schowParams.additionalParams = {
              'PLANID': _this8.ctx.planId,
              'kViewReport': reportType
            };
            window.ShowReport(schowParams);
          },
          cssClass: 'btn-primary'
        }, {
          label: language.Generic.Buttons.kExport,
          action: function action() {
            var reportType = selectRepType.val();
            window.schowParams = getReportParams("Excel");
            schowParams.additionalParams = {
              'PLANID': _this8.ctx.planId,
              'kViewReport': reportType
            };
            window.ShowReport(schowParams);
          },
          cssClass: 'btn-primary'
        }]
      });
    }
  }, {
    key: "goVariants",
    value: function goVariants() {
      DoSubmit(document.FilterForm, 'VariantsEdit.asp');
    }
  }, {
    key: "expandAll",
    value: function expandAll() {
      this.load({
        expandAll: true
      });
    }
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      var recFunc = function recFunc(node) {
        node.expand(false);
        node.visit(recFunc);
      };

      this.options.container.dynatree("getRoot").visit(recFunc);
    }
  }]);

  return PlannerCtrl;
}();

module.exports = PlannerCtrl;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arEMDouPayNormView = exports.arEMMsoko = exports.arEMEgeImport = exports.arEMEgeView = exports.arEMStats = exports.arEMMovement = exports.arEMAddReportsEdit = exports.arEMAddReportsView = exports.arEMPersonDataReports = exports.arEMReports = exports.arEMEventsEdit = exports.arEMEventsView = exports.arEMUsersEdit = exports.arEMUsersView = exports.arReportsViewSpecialEducNeeds = exports.arIndividualSupportMeasuresEditSelf = exports.arIndividualSupportMeasuresEditAll = exports.arAddIndividualSupportStudents = exports.arIndividualSupportStudentsReestrView = exports.arUserStat = exports.arBrowseAccessJournal = exports.arFillStatReports = exports.arBrowseStatReports = exports.arSchoolPublicDocsView = exports.arBrowseResultsEGEHisClassesOrSubjects = exports.arBrowseResultsEGEAllClasses = exports.arSetPhoto = exports.arEditSchoolResources = exports.arDeleteUsers = exports.arEnrollSelf = exports.arEditInfoSelf = exports.arShortInfoStudents = exports.arShortInfoStaff = exports.arAssignmentsViewComplete = exports.arForumEdit = exports.arForumSendReceive = exports.arMessagesSendReceive = exports.arAnnouncementPost = exports.arAnnouncementView = exports.arReportsViewAdministrativeReports = exports.arReportsUseReportConstructor = exports.arReportsViewAdditionalReports = exports.arReportsViewForAssignedClass = exports.arReportsForAllClasses = exports.arReportsForAssignedClass = exports.arLAViewAll = exports.arLAViewSelf = exports.arLAEditSelf = exports.arLAViewMaterials = exports.arLACreateGradingScales = exports.arLASetPolicies = exports.arTotalsEditAll = exports.arTotalsEditSelf = exports.arTotalsViewAll = exports.arTotalsViewSelf = exports.arJournalEditHAOnlyOnFuture = exports.arJournalEditLimitedTime = exports.arJournalEditAll = exports.arJournalEditSelf = exports.arJournalViewAll = exports.arJournalViewSelf = exports.arPostSchoolEvent = exports.arCalendarCreateCalendar = exports.arCalendarViewAll = exports.arCalendarViewSelf = exports.arAddLA = exports.arCurrMgmCreateAll = exports.arCurrMgmCreate = exports.arCurrMgmViewAll = exports.arCurrMgmViewSelf = exports.arClassMgmPostClassEventAll = exports.arClassMgmPostClassEventSelf = exports.arClassMgmEnrollClass = exports.arClassMgmEditSubjects = exports.arClassMgmCreateClass = exports.arClassMgmViewClassSubjAll = exports.arSchoolDocsEdit = exports.arSchoolDocsView = exports.arMovePoolStaff = exports.arMovePoolStudents = exports.arMoveBookEdit = exports.arMoveBookView = exports.arEditSchoolTermTypes = exports.arCreateEditTerm = exports.arSchoolSubjects = exports.arCreateCloseEditYear = exports.arUsersEditAccountStudentsParentsInClass = exports.arUsersEditAccountStudentsParents = exports.arUsersEditAccountStaff = exports.arUsersEditStudentsPsyInfo = exports.arUsersEditStudentsMedInfo = exports.arUsersEditStudents = exports.arUsersEditStaffMedInfo = exports.arUsersEditStaff = exports.arEditSchoolSettings = exports.arEditReferenceBook = exports.arProfileDefineSecurityRoles = exports.arProfileEditRegionalSettings = exports.arProfileViewSchoolInfo = exports.arProfileEditSchoolInfo = void 0;
exports.arEMEventsMembersEdit = exports.arEMEventsMembersView = exports.arEMODEdit = exports.arEMODView = exports.arEMCuratorsODEdit = exports.arEMCuratorsODView = exports.arEMDouPayNormEdit = void 0;
//todo. написать gulp плагин для автоматической генерации по файлу Right.cs
var arProfileEditSchoolInfo = 1;
exports.arProfileEditSchoolInfo = arProfileEditSchoolInfo;
var arProfileViewSchoolInfo = 65;
exports.arProfileViewSchoolInfo = arProfileViewSchoolInfo;
var arProfileEditRegionalSettings = 2;
exports.arProfileEditRegionalSettings = arProfileEditRegionalSettings;
var arProfileDefineSecurityRoles = 3;
exports.arProfileDefineSecurityRoles = arProfileDefineSecurityRoles;
var arEditReferenceBook = 45;
exports.arEditReferenceBook = arEditReferenceBook;
var arEditSchoolSettings = 58;
exports.arEditSchoolSettings = arEditSchoolSettings;
var arUsersEditStaff = 5;
exports.arUsersEditStaff = arUsersEditStaff;
var arUsersEditStaffMedInfo = 66;
exports.arUsersEditStaffMedInfo = arUsersEditStaffMedInfo;
var arUsersEditStudents = 6;
exports.arUsersEditStudents = arUsersEditStudents;
var arUsersEditStudentsMedInfo = 67;
exports.arUsersEditStudentsMedInfo = arUsersEditStudentsMedInfo;
var arUsersEditStudentsPsyInfo = 68;
exports.arUsersEditStudentsPsyInfo = arUsersEditStudentsPsyInfo;
var arUsersEditAccountStaff = 73;
exports.arUsersEditAccountStaff = arUsersEditAccountStaff;
var arUsersEditAccountStudentsParents = 74;
exports.arUsersEditAccountStudentsParents = arUsersEditAccountStudentsParents;
var arUsersEditAccountStudentsParentsInClass = 75;
exports.arUsersEditAccountStudentsParentsInClass = arUsersEditAccountStudentsParentsInClass;
var arCreateCloseEditYear = 29;
exports.arCreateCloseEditYear = arCreateCloseEditYear;
var arSchoolSubjects = 37;
exports.arSchoolSubjects = arSchoolSubjects;
var arCreateEditTerm = 30;
exports.arCreateEditTerm = arCreateEditTerm;
var arEditSchoolTermTypes = 44;
exports.arEditSchoolTermTypes = arEditSchoolTermTypes;
var arMoveBookView = 50;
exports.arMoveBookView = arMoveBookView;
var arMoveBookEdit = 51;
exports.arMoveBookEdit = arMoveBookEdit;
var arMovePoolStudents = 52;
exports.arMovePoolStudents = arMovePoolStudents;
var arMovePoolStaff = 53;
exports.arMovePoolStaff = arMovePoolStaff;
var arSchoolDocsView = 61;
exports.arSchoolDocsView = arSchoolDocsView;
var arSchoolDocsEdit = 62;
exports.arSchoolDocsEdit = arSchoolDocsEdit;
var arClassMgmViewClassSubjAll = 36;
exports.arClassMgmViewClassSubjAll = arClassMgmViewClassSubjAll;
var arClassMgmCreateClass = 7;
exports.arClassMgmCreateClass = arClassMgmCreateClass;
var arClassMgmEditSubjects = 38;
exports.arClassMgmEditSubjects = arClassMgmEditSubjects;
var arClassMgmEnrollClass = 8;
exports.arClassMgmEnrollClass = arClassMgmEnrollClass;
var arClassMgmPostClassEventSelf = 11;
exports.arClassMgmPostClassEventSelf = arClassMgmPostClassEventSelf;
var arClassMgmPostClassEventAll = 14;
exports.arClassMgmPostClassEventAll = arClassMgmPostClassEventAll;
var arCurrMgmViewSelf = 40;
exports.arCurrMgmViewSelf = arCurrMgmViewSelf;
var arCurrMgmViewAll = 39;
exports.arCurrMgmViewAll = arCurrMgmViewAll;
var arCurrMgmCreate = 12;
exports.arCurrMgmCreate = arCurrMgmCreate;
var arCurrMgmCreateAll = 13;
exports.arCurrMgmCreateAll = arCurrMgmCreateAll;
var arAddLA = 60;
exports.arAddLA = arAddLA;
var arCalendarViewSelf = 15;
exports.arCalendarViewSelf = arCalendarViewSelf;
var arCalendarViewAll = 16;
exports.arCalendarViewAll = arCalendarViewAll;
var arCalendarCreateCalendar = 19;
exports.arCalendarCreateCalendar = arCalendarCreateCalendar;
var arPostSchoolEvent = 33;
exports.arPostSchoolEvent = arPostSchoolEvent;
var arJournalViewSelf = 20;
exports.arJournalViewSelf = arJournalViewSelf;
var arJournalViewAll = 18;
exports.arJournalViewAll = arJournalViewAll;
var arJournalEditSelf = 17;
exports.arJournalEditSelf = arJournalEditSelf;
var arJournalEditAll = 23;
exports.arJournalEditAll = arJournalEditAll;
var arJournalEditLimitedTime = 70;
exports.arJournalEditLimitedTime = arJournalEditLimitedTime;
var arJournalEditHAOnlyOnFuture = 59;
exports.arJournalEditHAOnlyOnFuture = arJournalEditHAOnlyOnFuture;
var arTotalsViewSelf = 34;
exports.arTotalsViewSelf = arTotalsViewSelf;
var arTotalsViewAll = 31;
exports.arTotalsViewAll = arTotalsViewAll;
var arTotalsEditSelf = 41;
exports.arTotalsEditSelf = arTotalsEditSelf;
var arTotalsEditAll = 32;
exports.arTotalsEditAll = arTotalsEditAll;
var arLASetPolicies = 9;
exports.arLASetPolicies = arLASetPolicies;
var arLACreateGradingScales = 10;
exports.arLACreateGradingScales = arLACreateGradingScales;
var arLAViewMaterials = 35;
exports.arLAViewMaterials = arLAViewMaterials;
var arLAEditSelf = 4;
exports.arLAEditSelf = arLAEditSelf;
var arLAViewSelf = 42;
exports.arLAViewSelf = arLAViewSelf;
var arLAViewAll = 43;
exports.arLAViewAll = arLAViewAll;
var arReportsForAssignedClass = 21;
exports.arReportsForAssignedClass = arReportsForAssignedClass;
var arReportsForAllClasses = 22;
exports.arReportsForAllClasses = arReportsForAllClasses;
var arReportsViewForAssignedClass = 24;
exports.arReportsViewForAssignedClass = arReportsViewForAssignedClass;
var arReportsViewAdditionalReports = 54;
exports.arReportsViewAdditionalReports = arReportsViewAdditionalReports;
var arReportsUseReportConstructor = 55;
exports.arReportsUseReportConstructor = arReportsUseReportConstructor;
var arReportsViewAdministrativeReports = 64;
exports.arReportsViewAdministrativeReports = arReportsViewAdministrativeReports;
var arAnnouncementView = 25;
exports.arAnnouncementView = arAnnouncementView;
var arAnnouncementPost = 26;
exports.arAnnouncementPost = arAnnouncementPost;
var arMessagesSendReceive = 27;
exports.arMessagesSendReceive = arMessagesSendReceive;
var arForumSendReceive = 56;
exports.arForumSendReceive = arForumSendReceive;
var arForumEdit = 57;
exports.arForumEdit = arForumEdit;
var arAssignmentsViewComplete = 28;
exports.arAssignmentsViewComplete = arAssignmentsViewComplete;
var arShortInfoStaff = 46;
exports.arShortInfoStaff = arShortInfoStaff;
var arShortInfoStudents = 47;
exports.arShortInfoStudents = arShortInfoStudents;
var arEditInfoSelf = 48;
exports.arEditInfoSelf = arEditInfoSelf;
var arEnrollSelf = 49;
exports.arEnrollSelf = arEnrollSelf;
var arDeleteUsers = 63;
exports.arDeleteUsers = arDeleteUsers;
var arEditSchoolResources = 69;
exports.arEditSchoolResources = arEditSchoolResources;
var arSetPhoto = 72;
exports.arSetPhoto = arSetPhoto;
var arBrowseResultsEGEAllClasses = 76;
exports.arBrowseResultsEGEAllClasses = arBrowseResultsEGEAllClasses;
var arBrowseResultsEGEHisClassesOrSubjects = 77;
exports.arBrowseResultsEGEHisClassesOrSubjects = arBrowseResultsEGEHisClassesOrSubjects;
var arSchoolPublicDocsView = 78;
exports.arSchoolPublicDocsView = arSchoolPublicDocsView;
var arBrowseStatReports = 79;
exports.arBrowseStatReports = arBrowseStatReports;
var arFillStatReports = 80;
exports.arFillStatReports = arFillStatReports;
var arBrowseAccessJournal = 81;
exports.arBrowseAccessJournal = arBrowseAccessJournal;
var arUserStat = 82;
/* Индивидуальная поддержка обучающихся */

exports.arUserStat = arUserStat;
var arIndividualSupportStudentsReestrView = 91; // Просмотр реестра учащихся индивидуальной поддержки

exports.arIndividualSupportStudentsReestrView = arIndividualSupportStudentsReestrView;
var arAddIndividualSupportStudents = 92; // Добавление учащихся в систему индивидуальной поддержки

exports.arAddIndividualSupportStudents = arAddIndividualSupportStudents;
var arIndividualSupportMeasuresEditAll = 93; // Редактирование мероприятий индивидуальной поддержки.Всех мероприятий

exports.arIndividualSupportMeasuresEditAll = arIndividualSupportMeasuresEditAll;
var arIndividualSupportMeasuresEditSelf = 94; // Редактирование мероприятий индивидуальной поддержки.Своих мероприятий

exports.arIndividualSupportMeasuresEditSelf = arIndividualSupportMeasuresEditSelf;
var arReportsViewSpecialEducNeeds = 100;
exports.arReportsViewSpecialEducNeeds = arReportsViewSpecialEducNeeds;
var arEMUsersView = 1001;
exports.arEMUsersView = arEMUsersView;
var arEMUsersEdit = 1002;
exports.arEMUsersEdit = arEMUsersEdit;
var arEMEventsView = 1003;
exports.arEMEventsView = arEMEventsView;
var arEMEventsEdit = 1004;
exports.arEMEventsEdit = arEMEventsEdit;
var arEMReports = 1005;
exports.arEMReports = arEMReports;
var arEMPersonDataReports = 1006;
exports.arEMPersonDataReports = arEMPersonDataReports;
var arEMAddReportsView = 1007;
exports.arEMAddReportsView = arEMAddReportsView;
var arEMAddReportsEdit = 1008;
exports.arEMAddReportsEdit = arEMAddReportsEdit;
var arEMMovement = 1009;
exports.arEMMovement = arEMMovement;
var arEMStats = 1010;
exports.arEMStats = arEMStats;
var arEMEgeView = 1011;
exports.arEMEgeView = arEMEgeView;
var arEMEgeImport = 1012;
exports.arEMEgeImport = arEMEgeImport;
var arEMMsoko = 1013;
exports.arEMMsoko = arEMMsoko;
var arEMDouPayNormView = 1014;
exports.arEMDouPayNormView = arEMDouPayNormView;
var arEMDouPayNormEdit = 1015;
exports.arEMDouPayNormEdit = arEMDouPayNormEdit;
var arEMCuratorsODView = 1016;
exports.arEMCuratorsODView = arEMCuratorsODView;
var arEMCuratorsODEdit = 1017;
exports.arEMCuratorsODEdit = arEMCuratorsODEdit;
var arEMODView = 1018;
exports.arEMODView = arEMODView;
var arEMODEdit = 1019;
exports.arEMODEdit = arEMODEdit;
var arEMEventsMembersView = 1020;
exports.arEMEventsMembersView = arEMEventsMembersView;
var arEMEventsMembersEdit = 1021;
exports.arEMEventsMembersEdit = arEMEventsMembersEdit;

/***/ })
/******/ ]);