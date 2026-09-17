$(document).ready(function () {
	if (!globalParams.readonly) {
		var fixHelperModified = function(e, tr) {
			var $originals = tr.children();
			var $helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});
			return $helper;
		},
			updateIndex = function(e, ui) {
				$('td.number', ui.item.parent()).each(function(i) {
					$(this).html(i + 1);
				});
				saveTestPlan();
			};

		$("#tasks tbody").sortable({
			helper: fixHelperModified,
			stop: updateIndex
		}).disableSelection();
	}
	else {
		$('select[name=LEVELID]').prop('disabled', true);
	}
		
	if (!globalParams.existsTasks) {
		$("#tasks").hide();
	}
	
	if (globalParams.testPlanId == 0) {
		$("#existsTestTasks").show();
		$('select[name=LEVELID]').find('option[value=' + globalParams.defTestPlanLevel + ']').prop('selected', true);
	}

	if ($("#tasks tr:last td.number").text() != '') {
		globalParams.lastTestTaskNumber = parseInt($("#tasks tr:last td.number").text());
	}
	
	if (globalParams.testPlanId != 0) {
		$('#deleteTestPlanButton').show();
	}

	if (globalParams.testPlanId == 0) {
		$('#importTestPlanButton').show();
	}
});

function _import() {
	if (globalParams.testPlanId != 0) {
		alert(language.Generic.QualityAssessment.kForImportSelectEmptyTestPlan);
	} 
	else {
		var params = { "USERID": globalParams.userId, "ASSIGNMENTID": globalParams.assignId, "TESTPLANID": globalParams.testPlanId, "SGID": globalParams.sgId };
		importTestPlan(params);
	}
}

function saveTestPlan(onSuccess, onError) {
	var taskIds = $('#tasks tbody tr:not(.removed) input[name=testTaskId]');
	var taskNumbers = $('#tasks tbody tr:not(.removed) td.number');
	var taskIdsTemp = new Array(taskIds.length);
	var taskNumbersTemp = new Array(taskNumbers.length);

	if (taskIds.length != taskNumbers.length) {
		alert(language.Generic.QualityAssessment.kErrTestPlanSaving);
		return;
	}

	for (var i = 0; i < taskIds.length; i++) {
		taskIdsTemp[i] = taskIds[i].value;
		taskNumbersTemp[i] = i + 1;
	}

	var params = { "TASKIDS": taskIdsTemp, "TASKNUMBERS": taskNumbersTemp, "TESTPLANID": globalParams.testPlanId };

	jsSubmit({
		action: '/asp/ajax/SaveTestPlan.asp',
		data: params,
		onSuccess: onSuccess,
		onError: onError,
		showProcessing: true
	});
}

function buildTaskRow(taskId, number, difficultName, possiblePoints, ceNumbers, ceTitles) {
	var row = $('<tr></tr>').attr('id', 'taskrow_' + taskId).css('vertical-align','top');

	var id = $('<input />').attr('type', 'hidden').val(taskId).attr('name', 'testTaskId');
	row.append(id);
	row.append($('<td></td>').text(number).addClass('number'));
	row.append($('<td></td>').text(difficultName));
	row.append($('<td></td>').text(possiblePoints));
	row.append($('<td></td>').html(ceNumbers).addClass('contentElementCodes'));
	row.append($('<td></td>').html(ceTitles).addClass('contentElementNames'));

	var delCell = $('<td></td>').attr('text-valign', 'top').css('text-align', 'center');
	delCell.html('<input type="checkbox" name="deleteTask"/>');
	row.append(delCell);

	var button = $('<button type="button" name="editTask" title="' + language.Generic.QualityAssessment.kEditTestTask + '"/>').click(function () { openEditTaskWindow(taskId); }).html('&nbsp;')
		.button({ icons: { primary: "ui-icon-pencil" }, text: false });

	row.append($('<td></td>').append(button));
	return row;
}

function editTask(testTaskId) {
	//TODO. избавиться от этого
	if (!validationAdditionTaskForm()) return;
	GetSchoolArray("tree");
	var contentElements = $('input[name="tree"]').val();
	var taskDifficultId = $('select[name=TASKDIFFICULTID]').val();
	var taskDifficultName = $('select[name=TASKDIFFICULTID] option:selected').text();
	var possiblePoints = $('input[name=possiblePoints]').val();
	var number = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.number').text();

	var params = { "CE": contentElements, "TASKDIFFICULT": taskDifficultId, "POSSIBLEPOINTS": possiblePoints, "TESTTASKID": testTaskId };

	jsSubmit({
		action: '/asp/ajax/EditTestTask.asp',
		data: params,
		showProcessing: true,
		onSuccess: function (response) {
			var oldRow = $('#taskrow_' + testTaskId);
			var newRow = buildTaskRow(testTaskId, number, taskDifficultName, possiblePoints, globalParams.strContentElementsNumbers, globalParams.strContentElementsTitles);
			oldRow.replaceWith(newRow);
			$('#additionTask').dialog("close");
			alert(language.Generic.QualityAssessment.kTestTaskSuccessEdition);
		}
	});
}

function drawContentElementsTree(testTaskId) {
	$("#tree").replaceWith($('<div></div>').attr("id", "tree"));
	$("#tree").contentElementsTree({
		initAjax: {
			url: urlHelper.makeUrl('/asp/ajax/GetContentElements.asp', { SECTIONSYSTEM: 'TESTPLAN', TESTTASKID: testTaskId, SGID: globalParams.sgId }),
			data: { mode: "all" },
			cache: false
		},
		onSelect: function (select, node) {
			var nodeNames = null;

			var Nodes = node.tree.getSelectedNodes();
			nodeNames = $.map(Nodes, function (node) {
				if (node.data.children.length == 0) {
					return node.data.title;
				}
			});
			globalParams.strContentElementsNumbers = '';
			globalParams.strContentElementsTitles = '';
			for (var i = 0; i < nodeNames.length; i++) {
				var str = nodeNames[i];
				globalParams.strContentElementsNumbers = globalParams.strContentElementsNumbers + ',<br/>' + str.substr(0, str.indexOf(' '));
				globalParams.strContentElementsTitles = globalParams.strContentElementsTitles + ',<br/>' + str.substr(str.indexOf(' ') + 1);
			}

			globalParams.strContentElementsNumbers = globalParams.strContentElementsNumbers.substring(6, globalParams.strContentElementsNumbers.length);
			globalParams.strContentElementsTitles = globalParams.strContentElementsTitles.substring(6, globalParams.strContentElementsTitles.length);

			var content = $('<div></div>')
				.html(globalParams.strContentElementsTitles)
				.css('overflow', 'auto')
				.css('height', 200)
				.css('width', $('#tree').width());
			
			$('td[name=selectedContentElements]').html(content);
		}
	});
}

function openAdditionTaskWindow() {
	var defMaxScore = 1;
	var addTask = function() {
		if (!validationAdditionTaskForm()) return;

		GetSchoolArray("tree");
		var contentElements = $('input[name="tree"]').val();
		var testLevelId = $('select[name=LEVELID]').val();
		var taskDifficultId = $('select[name=TASKDIFFICULTID]').val();
		var taskDifficultName = $('select[name=TASKDIFFICULTID] option:selected').text();
		var possiblePoints = $('input[name=possiblePoints]').val();
		globalParams.lastTestTaskNumber++;
		var number = globalParams.lastTestTaskNumber;

		var params = { "CE": contentElements, "LEVELID": testLevelId, "TASKDIFFICULT": taskDifficultId, "POSSIBLEPOINTS": possiblePoints, "TESTPLANID": globalParams.testPlanId, "NUMBER": number };

		if (globalParams.testPlanId == 0) {
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
				if (globalParams.testPlanId == 0) {
					globalParams.testPlanId = response.data.testPlanId;

					$('#deleteTestPlanButton').show();
				}
				else {
					$('#importTestPlanButton').show();
				}

				$("#tasks tbody").append(buildTaskRow(response.data.testTaskId, number, taskDifficultName, possiblePoints, globalParams.strContentElementsNumbers, globalParams.strContentElementsTitles));

				if (!globalParams.existsTasks) {
					globalParams.existsTasks = true;
					$("#tasks").show();
					$("#existsTestTasks").hide();
				}

				$('#additionTask').dialog("close");
			}
		});
	};
	
	$('input[name=possiblePoints]').val(defMaxScore);

	$('#additionTask').dialog({
		title: language.Generic.QualityAssessment.kAdditionTask,
		modal: true,
		resizable: false,
		width: 'auto',
		buttons: [{ text: language.Generic.Buttons.kSave, click: addTask }, { text: language.Generic.Buttons.kBack, click: function () { $('#additionTask').dialog('close'); } }]
	});

	drawContentElementsTree(0);
	
	$('td[name=selectedContentElements]').empty();
	globalParams.strContentElementsNumbers = '';
	globalParams.strContentElementsTitles = '';
}

function openEditTaskWindow(testTaskId) {
	globalParams.strContentElementsNumbers = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.contentElementCodes').html();
	globalParams.strContentElementsTitles = $('input[name=testTaskId][value=' + testTaskId + ']').parent().find('td.contentElementNames').html();

	var params = { "TESTTASKID": testTaskId };
	var $dialog = $('#additionTask').dialog({
		title: language.Generic.QualityAssessment.kEditionTask,
		modal: true,
		resizable: false,
		width: 'auto',
		buttons: [{ text: language.Generic.Buttons.kSave, click: function () { editTask(testTaskId); } }, { text: language.Generic.Buttons.kBack, click: function () { $('#additionTask').dialog('close'); } }]
	});
	
	drawContentElementsTree(testTaskId);

	jsSubmit({
		action: '/asp/ajax/GetTestTask.asp',
		data: params,
		showProcessing: true,
		onSuccess: function (response) {
			var difficult = response.Difficult;
			var possiblePoints = response.PossiblePoints;

			$('select[name=TASKDIFFICULTID] option[value=' + difficult + ']').prop('selected', true);
			$('input[name=possiblePoints]').val(possiblePoints);
			var content = $('<div></div>')
				.html(globalParams.strContentElementsTitles)
				.css('overflow', 'auto')
				.css('height', 200)
				.css('width', $('#tree').width());

			$('td[name=selectedContentElements]').html(content);
		}
	});
}

function renumberTasks() {
	var taskNumbers = $('#tasks tbody td.number');
	for (var i = 0; i < taskNumbers.length; i++) {
		taskNumbers[i].textContent = i + 1;
	}
	if ($("#tasks tr:last td.number").text() == '') {
		globalParams.lastTestTaskNumber = 0;
	}
	else {
		globalParams.lastTestTaskNumber = parseInt($("#tasks tr:last td.number").text());
	}
}

function deleteTasks() {
	var deletingRows = $('input[name=deleteTask]:checked').parent().parent();

	if (deletingRows.length == 0) {
		alert(language.Generic.QualityAssessment.kTestTaskNotSelected);
		return;
	}
	$.show.confirmation(language.Generic.QualityAssessment.kAreYouSureDeleteTestTask).then(function() {
		deletingRows.addClass('removed');

		var deleteOnError = function() {
			deletingRows.removeClass('removed');
		};

		var deleteSucess = function() {
			deletingRows.remove();
			renumberTasks();

			var taskIds = $('#tasks tbody tr:not(.removed) input[name=testTaskId]');
			if (taskIds.length == 0) {
				updateGlobalParamsAndWindowElements();
			}
			alert(language.Generic.QualityAssessment.kSelectedTasksSuccessDeleted);
		};

		saveTestPlan(deleteSucess, deleteOnError);
	});
}


function validationAdditionTaskForm() {
	var strPossiblePoints = $('input[name=possiblePoints]').val();
	var find = strPossiblePoints.match(/[^0-9]/g);
	if (find != null) {
		alert(language.Generic.QualityAssessment.kMaxScoreFieldOnlyNumbers);
		return false;
	}
	return true;
}

function OnChangeSelect(sFormName, sAction) {
	if (globalParams.testPlanId == 0) return;
	
	var testLevelId = $('select[name=LEVELID]').val();
	var params = { "TESTLEVELID": testLevelId, "TESTPLANID": globalParams.testPlanId, "UPDATELEVEL": 1 };

	jsSubmit({
		action: '/asp/ajax/SaveTestPlan.asp',
		data: params,
		showProcessing: true,
		onSuccess: function (response) {
			alert(language.Generic.QualityAssessment.kTestLevelEditionSuccess);
		}
	});
}

function deleteTestPlan() {
	$.show.confirmation(language.Generic.QualityAssessment.kAreYouSureDeleteTestPlan).
	then(function() {
		var params = { TestPlanId: globalParams.testPlanId };

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
}

function updateGlobalParamsAndWindowElements() {
	$("#tasks").hide();
	$('#tasks tbody').empty(); //очищаем содержимое таблицы, потому что если пользователь за один заход
	//удалит полностью план и опять добавит задание, то предыдущие задания тоже отобразаться

	globalParams.existsTasks = false;
	globalParams.testPlanId = 0;
	globalParams.lastTestTaskNumber = 0;
	
	$('#deleteTestPlanButton').hide();
	$("#existsTestTasks").show();
	$('#importTestPlanButton').show();
}