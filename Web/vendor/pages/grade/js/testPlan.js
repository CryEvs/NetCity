var OnChangeSelect, _import, buildTaskRow, changeMistakeType, deleteTasks, deleteTestPlan, drawContentElementsTree, editTask, exportTestPlan, firstDrawContentElementsTree, getMistakeTree, getStrContent, hasTasks, importTestPlan, openAdditionTaskWindow, openEditTaskWindow, renumberTasks, saveTestPlan, updateGlobalParamsAndWindowElements, validationAdditionTaskForm, validationTaskParams;

$(document).ready(function() {
  var fixHelperModified, updateIndex;
  if (!globalParams.readonly) {
    fixHelperModified = function(e, tr) {
      var $helper, $originals;
      $originals = tr.children();
      $helper = tr.clone();
      $helper.children().each(function(index) {
        $(this).width($originals.eq(index).width());
      });
      return $helper;
    };
    updateIndex = function(e, ui) {
      $('td.number', ui.item.parent()).each(function(i) {
        $(this).html(i + 1);
      });
      saveTestPlan();
    };
    $("#tasks tbody").sortable({
      helper: fixHelperModified,
      stop: updateIndex,
      start: function(event, ui) {
        $(ui.helper).addClass('move');
      },
      distance: 3
    }).disableSelection();
  } else {
    $('select[name=LEVELID]').prop('disabled', true);
  }
  if (!globalParams.existsTasks) {
    $("#tasks").hide();
  }
  if (hasTasks()) {
    $('#exportTestPlanButton').show();
    $('#importTestPlanButton').hide();
  } else {
    $('#importTestPlanButton').show();
    $('#exportTestPlanButton').hide();
  }
  if (globalParams.testPlanId === 0) {
    $("#popUpTestLevel").hide();
    $("#existsTestTasks").show();
    $('select[name=LEVELID]').find('option[value=' + globalParams.defTestPlanLevel + ']').prop('selected', true);
  }
  if ($("#tasks tr:last td.number").text() !== '') {
    globalParams.lastTestTaskNumber = parseInt($("#tasks tr:last td.number").text());
  }
  if (globalParams.testPlanId !== 0) {
    return $('#deleteTestPlanButton').show();
  }
});

hasTasks = function() {
  return $('[name=testTaskId]').length > 0;
};

_import = function() {
  var params;
  if (globalParams.testPlanId === 0 || (globalParams.bFromEm && !globalParams.existsTasks)) {
    params = {
      "USERID": globalParams.userId,
      "ASSIGNMENTID": globalParams.assignId,
      "TESTPLANID": globalParams.testPlanId,
      "SGID": globalParams.sgId,
      "SID": globalParams.subjectId,
      "GRADE": globalParams.minGrade,
      "GLOBALYEARID": globalParams.globalYearId
    };
    importTestPlan(params);
  } else {
    alert(language.Generic.QualityAssessment.kForImportSelectEmptyTestPlan);
  }
};

exportTestPlan = function() {
  if (globalParams.testPlanId !== 0) {
    return $.show.confirmation(language.Generic.QualityAssessment.kExportTestPlanConfirm).then(function() {
      var params;
      params = {
        "SGID": globalParams.sgId,
        "TESTPLANID": globalParams.testPlanId,
        "ASSIGNMENTID": globalParams.assignId,
        "SID": globalParams.subjectId,
        "GRADE": globalParams.minGrade,
        "GLOBALYEARID": globalParams.globalYearId
      };
      postTo('ExportTestPlan.asp', params);
    });
  } else {
    alert(language.Generic.QualityAssessment.kNotExistsTestPlan);
  }
};

saveTestPlan = function(onSuccess, onError) {
  var i, params, taskIds, taskIdsTemp, taskNumbers, taskNumbersTemp;
  taskIds = $('#tasks tbody tr:not(.removed) input[name=testTaskId]');
  taskNumbers = $('#tasks tbody tr:not(.removed) td.number');
  taskIdsTemp = new Array(taskIds.length);
  taskNumbersTemp = new Array(taskNumbers.length);
  if (taskIds.length !== taskNumbers.length) {
    alert(language.Generic.QualityAssessment.kErrTestPlanSaving);
    return;
  }
  i = 0;
  while (i < taskIds.length) {
    taskIdsTemp[i] = taskIds[i].value;
    taskNumbersTemp[i] = i + 1;
    i++;
  }
  params = {
    "TASKIDS": taskIdsTemp,
    "TASKNUMBERS": taskNumbersTemp,
    "TESTPLANID": globalParams.testPlanId
  };
  jsSubmit({
    action: '/asp/ajax/SaveTestPlan.asp',
    data: params,
    onSuccess: onSuccess,
    onError: onError,
    showProcessing: true
  });
};

editTask = function(testTaskId, dialog) {
  var additional, contentElements, mistakeId, mistakeName, number, params, possiblePoints, resValid, strContent, taskDifficultId, taskDifficultName;
  if (!validationAdditionTaskForm()) {
    return;
  }
  GetSchoolArray("tree");
  contentElements = $('input[name="tree"]').val();
  taskDifficultId = $('select[name=TASKDIFFICULTID]').val();
  taskDifficultName = $('select[name=TASKDIFFICULTID] option:selected').text();
  number = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.number').text();
  additional = $('input[name=ADDITIONAL]').val();
  mistakeName = $('select[name=MISTAKEID] option:selected').text();
  mistakeId = $('select[name=MISTAKEID]').val();
  possiblePoints;
  if (mistakeId === "" || mistakeId === void 0) {
    possiblePoints = $('input[name=possiblePoints]').val();
  } else {
    possiblePoints = 100;
  }
  strContent = getStrContent(globalParams.strContentElementsTitles.replace(/(?:<br>)?<b>.*<\/b>.*/, ''), additional);
  params = {
    "CE": contentElements,
    "TASKDIFFICULT": taskDifficultId,
    "POSSIBLEPOINTS": possiblePoints,
    "TESTTASKID": testTaskId,
    "ADDITIONAL": additional,
    "MISTAKE": mistakeId
  };
  resValid = validationTaskParams(taskDifficultId, possiblePoints, mistakeId);
  if (resValid !== "") {
    $.show.alert(resValid);
    return;
  }
  jsSubmit({
    action: '/asp/ajax/EditTestTask.asp',
    data: params,
    showProcessing: true,
    onSuccess: function() {
      var newRow, oldRow;
      if (!possiblePoints || possiblePoints === "0") {
        focusAlert($('input[name=possiblePoints]'), language.Generic.QualityAssessment.kAlertMaxScore);
        return;
      }
      oldRow = $('#taskrow_' + testTaskId);
      newRow = buildTaskRow(testTaskId, number, taskDifficultName, possiblePoints, globalParams.strContentElementsNumbers, strContent, mistakeName);
      oldRow.replaceWith(newRow);
      alert(language.Generic.QualityAssessment.kTestTaskSuccessEdition);
      return dialog.successClose();
    }
  });
};

deleteTestPlan = function() {
  return $.show.confirmation(language.Generic.QualityAssessment.kAreYouSureDeleteTestPlan).then(function() {
    var params;
    params = {
      TestPlanId: globalParams.testPlanId
    };
    jsSubmit({
      action: '/asp/ajax/DeleteTestPlan.asp',
      data: params,
      showProcessing: true,
      onSuccess: function(response) {
        updateGlobalParamsAndWindowElements();
        alert(language.Generic.QualityAssessment.kSuccessDeleteTestPlan);
      }
    });
  });
};

openAdditionTaskWindow = function() {
  var addTask, defMaxScore;
  defMaxScore = 1;
  addTask = function(dialog) {
    var additional, contentElements, mistakeId, mistakeName, number, params, possiblePoints, resValid, strContent, taskDifficultId, taskDifficultName, testLevelId;
    if (!validationAdditionTaskForm()) {
      return;
    }
    GetSchoolArray("tree");
    contentElements = $('input[name="tree"]').val();
    testLevelId = $('select[name=LEVELID]').val();
    taskDifficultId = $('select[name=TASKDIFFICULTID]').val();
    taskDifficultName = $('select[name=TASKDIFFICULTID] option:selected').text();
    possiblePoints = $('input[name=possiblePoints]').val();
    additional = $('input[name=ADDITIONAL]').val();
    mistakeId = $('select[name=MISTAKEID]').val();
    mistakeName = $('select[name=MISTAKEID] option:selected').text();
    strContent = getStrContent(globalParams.strContentElementsTitles, additional);
    resValid = validationTaskParams(taskDifficultId, possiblePoints, mistakeId);
    if (resValid !== "") {
      $.show.alert(resValid);
      return;
    }
    globalParams.lastTestTaskNumber++;
    number = globalParams.lastTestTaskNumber;
    params = {
      "CE": contentElements,
      "LEVELID": testLevelId,
      "TASKDIFFICULT": taskDifficultId,
      "POSSIBLEPOINTS": possiblePoints,
      "TESTPLANID": globalParams.testPlanId,
      "NUMBER": number,
      "ADDITIONAL": additional,
      "MISTAKE": mistakeId
    };
    if (globalParams.testPlanId === 0) {
      params.CREATETESTPLAN = 1;
      params.USERID = globalParams.userId;
      params.AID = globalParams.assignId;
    } else {
      params.CREATETESTPLAN = 0;
    }
    jsSubmit({
      action: '/asp/ajax/AddNewTestTask.asp',
      data: params,
      showProcessing: true,
      onSuccess: function(response) {
        if (globalParams.testPlanId === 0) {
          globalParams.testPlanId = response.data.testPlanId;
          $('#deleteTestPlanButton').show();
          $('#exportTestPlanButton').show();
        }
        $("#tasks tbody").append(buildTaskRow(response.data.testTaskId, number, taskDifficultName, possiblePoints, globalParams.strContentElementsNumbers, strContent, mistakeName));
        if (!globalParams.existsTasks) {
          globalParams.existsTasks = true;
          $("#tasks").show();
          $("#popUpTestLevel").show();
          $("#existsTestTasks").hide();
          $('#importTestPlanButton').hide();
          $('#exportTestPlanButton').show();
        }
        dialog.successClose();
      }
    });
  };
  $('input[name=possiblePoints]').val(defMaxScore);
  $.show.dialog({
    title: language.Generic.QualityAssessment.kAdditionTask,
    size: BootstrapDialog.SIZE_WIDE,
    message: $('#additionTask'),
    buttons: [
      {
        label: language.Generic.Buttons.kSave,
        action: addTask,
        cssClass: 'btn-primary'
      }
    ],
    onshown: function() {
      firstDrawContentElementsTree(0);
      $('div[name=selectedContentElements]').val("&nbsp;");
      globalParams.strContentElementsNumbers = '';
      globalParams.strContentElementsTitles = '';
    }
  });
};

openEditTaskWindow = function(testTaskId) {
  var params;
  globalParams.strContentElementsNumbers = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.contentElementCodes').html();
  globalParams.strContentElementsTitles = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.contentElementNames').html();
  params = {
    "TESTTASKID": testTaskId
  };
  $.show.dialog({
    title: language.Generic.QualityAssessment.kEditionTask,
    size: BootstrapDialog.SIZE_WIDE,
    message: $('#additionTask'),
    buttons: [
      {
        label: language.Generic.Buttons.kSave,
        action: function(dialog) {
          editTask(testTaskId, dialog);
        },
        cssClass: 'btn-primary'
      }
    ],
    onshown: function() {
      jsSubmit({
        action: '/asp/ajax/GetTestTask.asp',
        data: params,
        showProcessing: true,
        onSuccess: function(response) {
          var additional, content, difficult, mistakeType, possiblePoints;
          difficult = response.Difficult;
          possiblePoints = response.PossiblePoints;
          additional = response.Additional;
          mistakeType = response.MistakeType;
          $('select[name=MISTAKEID] option[value=' + mistakeType + ']').prop('selected', true);
          $('select[name=TASKDIFFICULTID] option[value=' + difficult + ']').prop('selected', true);
          $('input[name=possiblePoints]').val(possiblePoints);
          $('input[name=ADDITIONAL]').val(additional);
          firstDrawContentElementsTree(testTaskId);
          content = $('<div></div>').html(globalParams.strContentElementsTitles).css('overflow', 'auto').css('max-height', '100px').css('min-height', '20px').css('font-size', '11px').css('margin-left', '8px');
          $('div[name=selectedContentElements]').html(content);
        }
      });
    }
  });
};

firstDrawContentElementsTree = function(testTaskId) {
  if (globalParams.bFromEm) {
    jsSubmit({
      action: '/asp/ajax/GetContentElements.asp',
      data: {
        mode: "all",
        SECTIONSYSTEM: 'TESTPLANFORDIAGNOSTICWORK',
        TESTTASKID: testTaskId,
        SUBJECTID: globalParams.subjectId,
        GLOBALYEARID: globalParams.globalYearId,
        MINGRADE: globalParams.minGrade
      },
      showProcessing: true,
      onSuccess: function(response) {
        var mistake, tree;
        globalParams.elementsTree = response;
        if (globalParams.isRusDictation) {
          mistake = $('*[name=MISTAKEID]').val();
          if (mistake !== null) {
            tree = getMistakeTree(mistake);
          }
        } else {
          tree = globalParams.elementsTree;
        }
        drawContentElementsTree(tree);
      }
    });
  } else {
    jsSubmit({
      action: '/asp/ajax/GetContentElements.asp',
      data: {
        mode: "all",
        SECTIONSYSTEM: 'TESTPLAN',
        TESTTASKID: testTaskId,
        SGID: globalParams.sgId
      },
      showProcessing: true,
      onSuccess: function(response) {
        var hasOrphElements, hasPunktElements, mistake, orph, punkt, tree;
        globalParams.elementsTree = response;
        if (globalParams.isRusDictation) {
          mistake = $('*[name=MISTAKEID]').val();
          orph = 'Орфография';
          punkt = 'Пунктуация';
          hasOrphElements = false;
          hasPunktElements = false;
          _.each(globalParams.elementsTree, function(obj) {
            if (obj.title.indexOf(orph) > -1) {
              hasOrphElements = true;
            }
            if (obj.title.indexOf(punkt) > -1) {
              return hasPunktElements = true;
            }
          });
          globalParams.hasMistakeElements = hasPunktElements && hasOrphElements;
          if (globalParams.hasMistakeElements) {
            globalParams.orphElements = _.find(globalParams.elementsTree, function(obj) {
              return obj.title.indexOf(orph) > -1;
            });
            globalParams.punktElements = _.find(globalParams.elementsTree, function(obj) {
              return obj.title.indexOf(punkt) > -1;
            });
          }
          if (mistake !== null) {
            tree = getMistakeTree(mistake);
          }
        } else {
          tree = globalParams.elementsTree;
        }
        drawContentElementsTree(tree);
      }
    });
  }
};

drawContentElementsTree = function(tree) {
  $("#tree").replaceWith($('<div></div>').attr("id", "tree").css('font-size', '11px').css('overflow', 'auto').css('margin-left', '8px').css('margin-bottom', '3px'));
  $("#tree").contentElementsTree({
    children: tree,
    onPostInit: function(isReloading, isError) {
      var treeElements;
      treeElements = this.$tree.contents().children();
      if (globalParams.elementsTree.length === 0) {
        return this.$tree.append(language.Generic.Curriculum.kSubjectNotHaveContentElementsInCurrYear);
      }
      if (treeElements.length === 0) {
        if (globalParams.isRusDictation) {
          return this.$tree.append(language.Generic.QualityAssessment.kAlertTaskMistakeType);
        } else {
          return this.$tree.append(language.Generic.Curriculum.kSubjectNotHaveContentElementsInCurrYear);
        }
      }
    },
    onSelect: function(select, node) {
      var Nodes, content, i, nodeNames, str, strContent;
      nodeNames = null;
      Nodes = node.tree.getSelectedNodes();
      nodeNames = $.map(Nodes, function(node) {
        if (node.data.children.length === 0) {
          return node.data.title;
        }
      });
      globalParams.strContentElementsNumbers = '';
      globalParams.strContentElementsTitles = '';
      i = 0;
      while (i < nodeNames.length) {
        str = nodeNames[i];
        globalParams.strContentElementsNumbers = globalParams.strContentElementsNumbers + ',<br/>' + str.substr(0, str.indexOf(' '));
        globalParams.strContentElementsTitles = globalParams.strContentElementsTitles + ',<br/>' + str.substr(str.indexOf(' ') + 1);
        i++;
      }
      globalParams.strContentElementsNumbers = globalParams.strContentElementsNumbers.substring(6, globalParams.strContentElementsNumbers.length);
      globalParams.strContentElementsTitles = globalParams.strContentElementsTitles.substring(6, globalParams.strContentElementsTitles.length);
      strContent = getStrContent(globalParams.strContentElementsTitles, $("input[name=ADDITIONAL]").val());
      content = $('<div></div>').html(strContent).css('overflow', 'auto').css('max-height', '100px').css('min-height', '20px').css('font-size', '11px').css('margin-left', '8px');
      $('div[name=selectedContentElements]').html(content);
    }
  });
};

changeMistakeType = function() {
  var mistake, tree;
  mistake = $('*[name=MISTAKEID]').val();
  tree = getMistakeTree(mistake);
  $("#tree").reloadElementsTree(tree);
};

getMistakeTree = function(newMistake) {
  if (globalParams.hasMistakeElements) {
    switch (newMistake) {
      case '0':
        return globalParams.orphElements.children;
      case '1':
        return globalParams.punktElements.children;
      case '2':
        return globalParams.elementsTree;
    }
  } else {
    return globalParams.elementsTree;
  }
};

getStrContent = function(content, additional) {
  var strContent;
  if (content === null || content === "") {
    if (additional === null || additional === "") {
      strContent = "";
    } else {
      strContent = "<b>" + language.Generic.QualityAssessment.kAdditional + ": </b>" + additional;
    }
  } else {
    if (additional === null || additional === "") {
      strContent = content;
    } else {
      strContent = content + "</br><b>" + language.Generic.QualityAssessment.kAdditional + ": </b>" + additional;
    }
  }
  return strContent;
};

renumberTasks = function() {
  var i, taskNumbers;
  taskNumbers = $('#tasks tbody td.number');
  i = 0;
  while (i < taskNumbers.length) {
    taskNumbers[i].textContent = i + 1;
    i++;
  }
  if ($("#tasks tr:last td.number").text() === '') {
    globalParams.lastTestTaskNumber = 0;
  } else {
    globalParams.lastTestTaskNumber = parseInt($("#tasks tr:last td.number").text());
  }
};

deleteTasks = function() {
  var deletingRows;
  deletingRows = $('input[name=deleteTask]:checked').parent().parent();
  if (deletingRows.length === 0) {
    alert(language.Generic.QualityAssessment.kTestTaskNotSelected);
    return;
  }
  $.show.confirmation(language.Generic.QualityAssessment.kAreYouSureDeleteTestTask).then(function() {
    var deleteOnError, deleteSucess;
    deletingRows.addClass('removed');
    deleteOnError = function() {
      deletingRows.removeClass('removed');
    };
    deleteSucess = function() {
      var taskIds;
      deletingRows.remove();
      renumberTasks();
      taskIds = $('#tasks tbody tr:not(.removed) input[name=testTaskId]');
      if (taskIds.length === 0) {
        updateGlobalParamsAndWindowElements();
      }
      alert(language.Generic.QualityAssessment.kSelectedTasksSuccessDeleted);
    };
    saveTestPlan(deleteSucess, deleteOnError);
  });
};

validationTaskParams = function(taskDifficultId, possiblePoints, mistakeId) {
  var message;
  message = "";
  if (globalParams.isRusDictation) {
    if (mistakeId === "" || mistakeId === null) {
      message += language.Generic.QualityAssessment.kAlertTaskMistakeType + ".</br>";
    }
  } else {
    if (taskDifficultId === "" || taskDifficultId === null) {
      message += language.Generic.QualityAssessment.kAlertTaskDifficult + ".</br>";
    }
    if (possiblePoints === "" || possiblePoints === null || !possiblePoints || possiblePoints === "0") {
      message += language.Generic.QualityAssessment.kAlertMaxScore;
    }
  }
  return message;
};

validationAdditionTaskForm = function() {
  var find, strPossiblePoints;
  strPossiblePoints = $('input[name=possiblePoints]').val();
  if (typeof strPossiblePoints !== 'undefined') {
    if (strPossiblePoints.length === 0) {
      alert(language.Generic.QualityAssessment.kEnterMaxScore);
      return false;
    }
    find = strPossiblePoints.match(/[^0-9]/g);
    if (find !== null) {
      alert(language.Generic.QualityAssessment.kMaxScoreFieldOnlyNumbers);
      return false;
    }
  }
  return true;
};

OnChangeSelect = function(sFormName, sAction) {
  var params, testLevelId;
  if (globalParams.testPlanId === 0) {
    return;
  }
  testLevelId = $('select[name=LEVELID]').val();
  params = {
    "TESTLEVELID": testLevelId,
    "TESTPLANID": globalParams.testPlanId,
    "UPDATELEVEL": 1
  };
  jsSubmit({
    action: '/asp/ajax/SaveTestPlan.asp',
    data: params,
    showProcessing: true,
    onSuccess: function(response) {
      alert(language.Generic.QualityAssessment.kTestLevelEditionSuccess);
    }
  });
};

buildTaskRow = function(taskId, number, difficultName, possiblePoints, ceNumbers, ceTitles, mistakeName) {
  var arr, button, delCell, id, row;
  row = $('<tr></tr>').attr('id', 'taskrow_' + taskId).css('vertical-align', 'top');
  id = $('<input />').attr('type', 'hidden').val(taskId).attr('name', 'testTaskId');
  row.append(id);
  row.append($('<td></td>').text(number).addClass('number'));
  if (globalParams.isRusDictation) {
    row.append($('<td></td>').text(mistakeName));
  } else {
    row.append($('<td></td>').text(difficultName));
    row.append($('<td></td>').text(possiblePoints));
  }
  row.append($('<td></td>').html(ceNumbers).addClass('contentElementCodes'));
  row.append($('<td></td>').html(ceTitles).addClass('contentElementNames'));
  delCell = $('<td></td>').attr('text-valign', 'top').css('text-align', 'center');
  delCell.html('<input type="checkbox" name="deleteTask"/>');
  row.append(delCell);
  arr = [
    {
      classButton: 'editing',
      title: 'Редактировать',
      icon: 'glyphicon glyphicon-pencil',
      click: 'javascript:openEditTaskWindow(' + taskId + ')'
    }
  ];
  button = $.uicontrols.linkButton(arr);
  row.append($('<td></td>').addClass('text-center').append(button));
  return row;
};

updateGlobalParamsAndWindowElements = function() {
  $("#tasks").hide();
  $('#tasks tbody').empty();
  globalParams.existsTasks = false;
  if (!globalParams.bFromEm) {
    globalParams.testPlanId = 0;
  }
  globalParams.lastTestTaskNumber = 0;
  $('#deleteTestPlanButton').hide();
  $('#exportTestPlanButton').hide();
  $('#importTestPlanButton').show();
  $('#popUpTestLevel').hide();
  $("#existsTestTasks").show();
};

importTestPlan = function(params) {

  /*
  	todo 
  		валидация расширения файла
   */
  var _datasubmit, attachBtn, dialog, fileDialogContent;
  fileDialogContent = '<form name="form" method="POST" enctype="multipart/form-data"> <div class="form-group"> <div class="input-group"> <span class="btn btn-primary btn-file input-group-addon">' + language.Generic.Common.kImportFile + '<input type="file" id="fileupload" name="file"> </span> <input type="text" class="form-control" disabled id="fileName"> </div> </div> </form>';
  _datasubmit = null;
  attachBtn = function(dialog) {
    var ext, fileName;
    if (!$('#fileName').val()) {
      alert('Необходимо выбрать файл');
      return;
    }
    if ($('#fileName').val()) {
      fileName = $('#fileName').val();
      ext = fileName.split('.');
      if (ext[ext.length - 1] !== "xls") {
        alert('Необходимо выбрать файл импорта формата "xls".');
        return false;
      }
    }
    $(document).trigger('showProcessing');
    _datasubmit.submit();
  };
  dialog = $.show.dialog({
    title: 'Импорт плана контрольной работы',
    onshown: function(dialog) {
      $('input[name="file"]').on('change', function() {
        var elements;
        elements = this.value.split('\\');
        $('#fileName').val(elements[elements.length - 1]);
        return $(this).attr('title', elements[elements.length - 1]);
      });
      $('#fileupload').bind('fileuploadsubmit', function(e, data) {
        data.formData = params;
      });
      $('#fileupload').fileupload({
        url: urlHelper.makeUrl("/asp/Grade/QA/CheckExcelTestPlan.asp", {
          "_AJAXCALL_": 1
        }),
        dataType: 'json',
        add: function(e, data) {
          _datasubmit = data;
        },
        done: function(e, response) {
          var confirm, j, k, len, len1, messages, ref, ref1, warning;
          if (!response.result) {
            $.show.error(language.Generic.Common.kUnexpErr);
            return;
          }
          if (response.result.isError) {
            $.show.error(response.result.message);
            return;
          }
          if (response.result.data.showWarnings) {
            dialog.close();
            messages = [];
            ref = response.result.data.warnings;
            for (j = 0, len = ref.length; j < len; j++) {
              warning = ref[j];
              if (warning && warning !== "") {
                messages.push($.show.getConfirmation(warning));
              }
            }
            ref1 = response.result.data.confirms;
            for (k = 0, len1 = ref1.length; k < len1; k++) {
              confirm = ref1[k];
              if (confirm && confirm !== "") {
                messages.push($.show.getConfirmation(confirm));
              }
            }
            return extDeferred.when(messages).then(function() {
              return jsSubmit({
                action: urlHelper.makeUrl("/asp/Grade/QA/ImportTestPlan.asp", {
                  "_AJAXCALL_": 1,
                  "USERID": globalParams.userId,
                  "ASSIGNMENTID": globalParams.assignId,
                  "TESTPLANID": globalParams.testPlanId,
                  "SGID": globalParams.sgId,
                  "SID": globalParams.subjectId,
                  "GRADE": globalParams.minGrade,
                  "GLOBALYEARID": globalParams.globalYearId,
                  "TESTPLANID": globalParams.testPlanId
                }),
                showProcessing: true
              }).then(function() {
                return DoSubmit(document.TestPlan);
              });
            });
          } else {
            return DoSubmit(document.TestPlan);
          }
        },
        fail: function(e, response) {
          if (response.jqXHR.responseJSON.isError) {
            return $.show.error(response.jqXHR.responseJSON.message);
          }
        },
        always: function(e, data) {
          $(document).trigger('closeProcessing');
          return dialog.close();
        }
      });
    },
    message: fileDialogContent,
    buttons: [
      {
        label: 'Импорт',
        action: attachBtn,
        cssClass: 'btn-primary'
      }
    ]
  });
};
