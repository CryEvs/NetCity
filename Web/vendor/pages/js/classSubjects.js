var GetSelectedRowsInfo, showMergeClassSubjects;

showMergeClassSubjects = function() {
  var buildMergeButton, checkAvailableName, jtableConteiner, mergeDialog, mergeSubjectGroups, setNameDialog;
  mergeDialog = null;
  setNameDialog = null;
  checkAvailableName = function(subjectId, newNameSG, $selectedRows) {
    var params, selRowsInfo;
    selRowsInfo = GetSelectedRowsInfo($selectedRows);
    params = {
      action: '/asp/ajax/ClassSubjectsAjax.asp',
      data: {
        Action: 'Check',
        NewNameSG: newNameSG,
        schoolYearId: schoolYearId,
        subjectId: subjectId,
        MergeIds: selRowsInfo.ids,
        Grades: selRowsInfo.grades
      },
      showProcessing: true,
      onSuccess: function(response) {
        if (!response.data.bCheckAvailableName) {
          alert(language.Generic.ClassManagement.kExistSubjectGroupName);
          return;
        }
        return mergeSubjectGroups(newNameSG, selRowsInfo.ids);
      }
    };
    return jsSubmit(params);
  };
  mergeSubjectGroups = function(newNameSG, MergeIds) {
    return jsSubmit({
      action: '/asp/ajax/ClassSubjectsAjax.asp',
      auth: true,
      data: {
        Action: 'Merge',
        MergeIds: MergeIds,
        NewNameSG: newNameSG
      },
      showProcessing: true,
      onSuccess: function() {
        setNameDialog.close();
        mergeDialog.close();
        return alert(language.Generic.ClassManagement.kUnionOperationSuccess).then(function() {
          return DoSubmit(document.forms['MenuForm'], "ClassSubjects.asp");
        });
      }
    });
  };
  jtableConteiner = $("<div></div>");
  buildMergeButton = function(subjectData) {
    var chooseBtn;
    chooseBtn = $.uicontrols.button({
      id: 'attach',
      size: 'btn-sm',
      label: language.Generic.Common.kChoose,
      icon: 'ok',
      click: function() {
        return jtableConteiner.jtable('openChildTable', chooseBtn.closest('tr'), {
          title: language.Generic.ClassManagement.kSubjectGroups,
          actions: {
            listAction: urlHelper.makeUrl('/asp/ajax/ClassSubjectsAjax.asp', {
              action: "LoadSubjectGroups",
              teacherId: teacherId,
              schoolYearId: schoolYearId
            })
          },
          selecting: true,
          selectingCheckboxes: true,
          multiselect: true,
          toolbar: {
            items: [
              {
                text: language.Generic.ClassManagement.kMerge,
                click: function() {
                  var $selectedRows;
                  $selectedRows = jtableConteiner.find('tr.jtable-row-selected');
                  if ($selectedRows.length < 2) {
                    alert(language.Generic.ClassManagement.kCountCheckSubjectGroups);
                    return;
                  }
                  return $.show.confirmation(language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep1).then(function() {
                    return $.show.confirmation(language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep2);
                  }).then(function() {
                    return setNameDialog = $.show.dialog({
                      title: language.Generic.ClassManagement.kEnterNewNameSG,
                      message: $("#NameForMergedSubjectGroup"),
                      buttons: [
                        {
                          label: language.Generic.Buttons.kRecruit,
                          action: function(dialog) {
                            var nameMergedSg;
                            if ($("input[name='NameSG']").val() !== null) {
                              nameMergedSg = $("input[name='NameSG']").val().toString().trim();
                            } else {
                              nameMergedSg = '';
                            }
                            if (nameMergedSg === '') {
                              alert(language.Generic.ClassManagement.kEnterNewNameSG);
                              return;
                            }
                            if (dialog !== null) {
                              dialog.getModal().prop("dataWereChanged", false);
                            }
                            return checkAvailableName(subjectData.record.SubjectId, nameMergedSg, $selectedRows);
                          }
                        }, {
                          label: language.Generic.Common.kCancel_2,
                          action: function(dialog) {
                            return dialog.close();
                          }
                        }
                      ]
                    });
                  });
                }
              }
            ]
          },
          fields: {
            SubjectGroupId: {
              key: true,
              create: false,
              edit: false,
              list: false
            },
            SubjectName: {
              title: language.Generic.ClassManagement.kSubjectGroupName,
              edit: false
            },
            Grade: {
              title: language.Generic.ClassManagement.kGrade,
              edit: false
            },
            Grades: {
              list: false,
              edit: false
            }
          }
        }, function(data) {
          return data.childTable.jtable('load', {
            termTypeId: subjectData.record.TermTypeId,
            subjectId: subjectData.record.SubjectId,
            iupLevelId: subjectData.record.LevelId
          });
        });
      }
    });
    return chooseBtn;
  };
  jtableConteiner.jtable({
    actions: {
      listAction: urlHelper.makeUrl('/asp/ajax/ClassSubjectsAjax.asp', {
        action: 'LoadSubjects',
        teacherId: teacherId,
        schoolYearId: schoolYearId
      })
    },
    openChildAsAccordion: true,
    columnResizable: false,
    columnSelectable: false,
    useBootstrap: true,
    fields: {
      SubjectId: {
        key: true,
        create: false,
        edit: false,
        list: false
      },
      SubjectGroups: {
        title: '',
        width: 'auto',
        edit: false,
        display: function(subjectData) {
          return buildMergeButton(subjectData);
        }
      },
      SubjectName: {
        title: language.Generic.ClassManagement.kSubjectName,
        width: 'auto',
        edit: false
      },
      LevelName: {
        title: language.Generic.ClassManagement.kLevelName,
        width: 'auto',
        edit: false
      },
      TermTypeName: {
        title: language.Generic.SetupSchoolCalendar.kTermType_,
        width: 'auto',
        edit: false
      }
    }
  });
  jtableConteiner.jtable('load');
  return mergeDialog = $.show.dialog({
    title: language.Generic.ClassManagement.kUnionSubjectGroups,
    size: BootstrapDialog.SIZE_WIDE,
    message: jtableConteiner
  });
};

GetSelectedRowsInfo = function($selectedRows) {
  var grades, ids;
  ids = new Array();
  grades = new Array();
  $selectedRows.each(function() {
    var record;
    record = $(this).data('record');
    ids.push(record.SubjectGroupId);
    return grades = $.merge(grades, record.Grades);
  });
  return {
    ids: ids.join(),
    grades: grades.join()
  };
};
