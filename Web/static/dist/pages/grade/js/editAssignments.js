var controlEditAssignments, homeAssignSelectorCtrl;

homeAssignSelectorCtrl = require("./planHomeAssignSelector.js").HomeAssignSelectorCtrl;

controlEditAssignments = (function() {
  var _selectionStudents, indentString;
  _selectionStudents = {
    _canSaveSelection: function() {
      var form, hasSel, i, j, ref;
      form = document.forms['ChooseForm'];
      if (!form) {
        return true;
      }
      if (typeof form.elements['CHK_ST'].length === 'undefined') {
        if (!form.elements['CHK_ST'].checked) {
          alert(language.Generic.Curriculum.kAtLeastOneStudentMustBeSelected + language.Common.kStudent.toLowerCase());
          return false;
        }
      } else {
        hasSel = false;
        for (i = j = 0, ref = form.elements['CHK_ST'].length - 1; j <= ref; i = j += 1) {
          if (form.elements['CHK_ST'][i].checked) {
            hasSel = true;
          }
        }
        if (!hasSel) {
          alert(language.Generic.Curriculum.kAtLeastOneStudentMustBeSelected + language.Common.kStudent.toLowerCase());
          return false;
        }
      }
      return true;
    },
    _allSelected: function() {
      var allSel, form, i, j, ref;
      form = document.forms['ChooseForm'];
      if (!form) {
        return;
      }
      if (typeof form.elements['CHK_ST'].length === 'undefined') {
        return form.elements['CHK_ST'].checked;
      } else {
        allSel = true;
        for (i = j = 0, ref = form.elements['CHK_ST'].length - 1; j <= ref; i = j += 1) {
          if (!form.elements['CHK_ST'][i].checked) {
            allSel = false;
          }
        }
        return allSel;
      }
    },
    _apply: function(dialog) {
      var checkedStudentIdList, checkedStudentNameList;
      if (!_selectionStudents._canSaveSelection()) {
        return;
      }
      if (_selectionStudents._allSelected()) {
        $('#studentList').text(language.Generic.Curriculum.kToAll);
        $('input[name="all_students"]').val(1);
      } else {
        checkedStudentNameList = '';
        checkedStudentIdList = '';
        $('input[name="CHK_ST"]:checked').each(function() {
          var _row;
          _row = $(this).closest("tr");
          checkedStudentNameList += _row.find('.student_name').text() + '<br />';
          return checkedStudentIdList += $(this).val() + ',';
        });
        checkedStudentNameList = checkedStudentNameList.substring(0, checkedStudentNameList.length - 6);
        checkedStudentIdList = checkedStudentIdList.substring(0, checkedStudentIdList.length - 1);
        $('#studentList').html(checkedStudentNameList);
        $('input[name="all_students"]').val(0);
        $('input[name="students"]').val(checkedStudentIdList);
      }
      window.dataWereChanged = true;
      return dialog.successClose();
    },
    _select: function() {
      var element, form, j, len, ref;
      form = document.forms['ChooseForm'];
      if (!form) {
        return;
      }
      if (!form.elements['CHK_ST'].length) {
        form.elements['CHK_ST'].checked = true;
      } else {
        ref = form.elements['CHK_ST'];
        for (j = 0, len = ref.length; j < len; j++) {
          element = ref[j];
          element.checked = true;
        }
      }
    },
    _clear: function() {
      var form, i, j, ref;
      form = document.forms['ChooseForm'];
      if (!form) {
        return;
      }
      if (!form.elements['CHK_ST'].length) {
        if (form.elements['RES_ST'].value === '0') {
          form.elements['CHK_ST'].checked = false;
        }
      } else {
        for (i = j = 0, ref = form.elements['CHK_ST'].length - 1; j <= ref; i = j += 1) {
          if (form.elements['RES_ST'][i].value === '0') {
            form.elements['CHK_ST'][i].checked = false;
          }
        }
      }
    }
  };
  indentString = function(str, length, indent) {
    if (str.length === length) {
      return str;
    }
    return indentString(str + indent, length, indent);
  };
  return {
    handlerSelectStudents: function() {
      var aType, endDate, startDate;
      startDate = $('input[name="ADT"]').val();
      endDate = $('input[name="DDT"]').val();
      aType = $('*[name="ATypeOld"]').val();
      jsSubmit({
        action: '/asp/ajax/GetStudentListForAssignment.asp',
        data: {
          SGID: controlEditAssignments.sgId,
          STARTDATE: startDate,
          ENDDATE: endDate,
          ASSIGNMENTID: controlEditAssignments.assignmentId,
          ATYPE: aType
        },
        showProcessing: true,
        onSuccess: function(response) {
          var content, source, studentList, template;
          studentList = response.data.studentList;
          if (!studentList.length) {
            return alert(language.Curriculum.kNoStudentsInClass2 + language.Common.kStudents_r);
          }
          source = '	<form name="ChooseForm"> <div style="max-height: 500px; overflow: auto;"> <table class="table table-bordered table-xs table-hover table-striped"> <tr> <th style="width: 1%;"></th> <th>' + language.Common.kStudents + '</th> </tr> {{#each studentList}} <tr> <td> {{#if Free}} <input type="checkbox" disabled {{#if HasResult}}checked{{/if }} /> {{/if}} {{#unless Free}} <input type="checkbox" id="CHK_ST_{{Id}}" name="CHK_ST" value="{{Id}}" {{#if HasResult}}checked{{/if }} onclick={{#unless result}}"dataChanged();"{{else}}"controlEditAssignments.restoreCheck(this);"{{/unless}} /> <input	type="hidden" name="RES_ST" value="{{#unless result}}0{{else}}{{result}}{{/unless}}" /> {{/unless}} </td> <td> <label for="CHK_ST_{{Id}}" class="light student_name"> {{FullName}} </label> </td> </tr> {{/each}} </table> </div> </form>';
          template = Handlebars.compile(source);
          content = template(response.data);
          $.show.dialog({
            title: language.Curriculum.kChooseStudents,
            onshown: function(dialog) {
              var arrStudentList, i, j, ref;
              if ($('input[name="all_students"]').val() === '1') {
                $('input[name="CHK_ST"]').prop('checked', true);
                return;
              } else if ($('input[name="all_students"]').val() === '0' && $('input[name="students"]').val().length) {
                $('input[name="CHK_ST"]').prop('checked', false);
                arrStudentList = $('input[name="students"]').val().split(',');
                for (i = j = 0, ref = arrStudentList.length - 1; j <= ref; i = j += 1) {
                  $('input[value="' + arrStudentList[i] + '"]').prop('checked', true);
                }
                return;
              }
            },
            message: content,
            buttons: [
              {
                label: language.Generic.Buttons.kApply,
                action: _selectionStudents._apply,
                cssClass: 'btn-primary'
              }, {
                label: language.Generic.Common.kCheckAll,
                action: _selectionStudents._select,
                cssClass: 'btn-primary'
              }, {
                label: language.Generic.Common.kUnCheckAll,
                action: _selectionStudents._clear,
                cssClass: 'btn-primary'
              }
            ]
          });
        }
      });
    },
    restoreCheck: function(obj) {
      alert(language.Curriculum.kStudentHaveMarkForAssignment);
      if (!obj.checked) {
        return obj.checked = true;
      }
    },
    changeReqMarkHandler: function(event, isExternal) {
      var i, studentIds, studentList, value;
      value = $('select[name="ReqMark"]').find('option:selected').val();
      if (value === '0') {
        $('#selectStudents').hide();
        $('input[name="all_students"]').val(1);
        return $('#studentList').text(language.Generic.Curriculum.kToAll);
      } else {
        if (!controlEditAssignments.studentList.length) {
          $('input[name="all_students"]').val(0);
          $('input[name="students"]').val('');
          $('#studentList').text('');
        } else {
          i = 0;
          studentList = '';
          studentIds = '';
          $(controlEditAssignments.studentList).each(function(index, value) {
            if (value.HasResult) {
              studentList += value.FullName + '<br />';
              studentIds += value.Id + ',';
              return i++;
            }
          });
          if (!controlEditAssignments.classAssignment) {
            studentList = studentList.substring(0, studentList.length - 6);
            studentIds = studentIds.substring(0, studentIds.length - 1);
            $('input[name="students"]').val(studentIds);
          }
          $('#studentList').html(controlEditAssignments.classAssignment ? language.Generic.Curriculum.kToAll : studentList);
          $('input[name="all_students"]').val(controlEditAssignments.classAssignment ? "1" : "0");
        }
        $('#selectStudents').show();
        if (!isExternal) {
          return controlEditAssignments.handlerSelectStudents();
        }
      }
    },
    fromKTP: function() {
      var cmId, ctrl, issueCmId, issueCmInfo;
      cmId = parseInt($('[name=CMID]').val());
      issueCmId = parseInt($('[name=ISSUECMID]').val());
      issueCmInfo = _.findWhere(this.cms, {
        cmid: issueCmId
      });
      ctrl = new homeAssignSelectorCtrl(controlEditAssignments.sgId, {
        changePlanOption: true,
        autoClose: false,
        showAttahments: true
      });
      return ctrl.execute(cmId, issueCmInfo).then(function(result) {
        var applyChanges, bChangeKTP, lessonInfo;
        controlEditAssignments.lessonInfo = result.lessonInfo;
        lessonInfo = controlEditAssignments.lessonInfo;
        bChangeKTP = result.changePlan;
        controlEditAssignments.bChangeKTP = bChangeKTP;
        applyChanges = function() {
          $('input[name="AN"]').val(lessonInfo.homeAssign || lessonInfo.lessonName);
          $('input[name="changeKTP"]').remove();
          $('form[name="AssignmentEdit"]').append($('<input type="hidden" name="changeKTP" value="' + (bChangeKTP ? '1' : '0') + '" />'));
          $('input[name="HALESSON"]').remove();
          if (bChangeKTP) {
            $('form[name="AssignmentEdit"]').append($('<input type="hidden" name="HALESSON" value="' + lessonInfo.id + '" />'));
          }
          if (lessonInfo.attachments) {
            $('input[name="ktpAttachment"]').remove();
            lessonInfo.attachments.forEach(function(item) {
              $('form[name="AssignmentEdit"]').append($('<input type="hidden" name="ktpAttachment" value="' + item.id + '" />'));
              return fileAttachmentCtrl.addFile({
                Id: item.id,
                Name: item.originalFileName,
                Description: item.description,
                isNew: true,
                isCanDeleteFromDb: bChangeKTP
              });
            });
          }
          window.dataWereChanged = true;
          return result.dialog.close();
        };
        if (controlEditAssignments.isHomeAssignment && controlEditAssignments.bChangeKTP) {
          jsSubmit({
            action: "/webapi/subjectplans/getUsingsCount",
            data: {
              lessonId: lessonInfo.id
            },
            showProcessing: true,
            method: "get"
          }).then(function(response) {
            var usingsCount;
            usingsCount = response;
            if (usingsCount > 1) {
              return $.show.confirmation(language.Generic.Assignment.KHomeAssignmentWillBeSave4AllClasses.replace('{0}', usingsCount)).then(applyChanges);
            } else {
              return applyChanges();
            }
          });
          return;
        }
        return applyChanges();
      });
    },
    diagnosticControlWork: {
      template: '<label class="control-label col-md-4 col-lg-3 col-sm-4">Диагностическая работа</label> <div class="col-md-8 col-lg-5 col-sm-8"> <select name="DiagnosticWork" class="form-control" onchange="checkConsidersDkr(this)"> {{#unless typeId}}<option value="-1_-1" selected="selected">Выберите вариант диагностической работы</option>{{/unless}} {{#each variants}}<option value="{{id}}_{{testPlanId}}">{{diagnosticWork.name}} ({{name}})</option>{{/each}} </select> </div>',
      setVariant: function(element) {
        return jsSubmit({
          action: "/webapi/grade/variant",
          data: {
            aid: $("[name='AID']").val()
          },
          method: 'GET',
          onSuccess: function(response) {
            var variant;
            variant = response.id + "_" + response.testPlanId;
            element.val(variant);
            checkConsidersDkr(element[0]);
          }
        });
      },
      show: function() {
        jsSubmit({
          action: "/webapi/grade/diagnosticWorks",
          data: {
            aid: $("[name='AID']").val(),
            cmid: $("[name='CMID']").val()
          },
          showProcessing: true,
          method: 'GET',
          onSuccess: function(response) {
            var model, selectElement, template;
            template = Handlebars.compile(controlEditAssignments.diagnosticControlWork.template);
            model = {
              variants: response,
              typeId: null
            };
            $("#diagnosticWork").append(template(model));
            selectElement = $("[name='DiagnosticWork']");
            if (response.length === 0 || controlEditAssignments.hasTestResults) {
              Disable(selectElement);
            }
            controlEditAssignments.diagnosticControlWork.setVariant(selectElement);
          }
        });
        return $(this).show();
      },
      hide: function() {
        $(this).hide();
        return $('#diagnosticWork').children().detach();
      },
      events: function() {
        $("#blockConiderDKR").on("show", controlEditAssignments.diagnosticControlWork.show);
        $("#blockConiderDKR").on("hide", controlEditAssignments.diagnosticControlWork.hide);
        return showConsiderDKR($("[name='AType']")[0]);
      }
    }
  };
})();

$(function() {
  var selectStudents;
  $('select[name="ReqMark"]').on('change', controlEditAssignments.changeReqMarkHandler);
  if (!controlEditAssignments.readonly) {
    selectStudents = $.uicontrols.button({
      id: 'selectStudents',
      label: language.Curriculum.kChooseStudents,
      click: controlEditAssignments.handlerSelectStudents,
      size: 'btn-sm'
    });
    $('#studentList').before(selectStudents);
  }
  controlEditAssignments.changeReqMarkHandler(null, true);
  $('select[name="RIJ"]').trigger('change');
  controlEditAssignments.diagnosticControlWork.events();
});

(function(exp, name) {
  var exported, exports;
  exported = false;
  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = exp;
    exported = true;
  }
  if (!(exports === void 0)) {
    exports = exp;
    exported = true;
  }
  if (!exported && typeof window !== 'undefined' && typeof name !== "undefined") {
    window[name] = exp;
  }
  if (typeof root !== 'undefined' && typeof name !== "undefined") {
    return root[name] = exp;
  }
})(controlEditAssignments);
