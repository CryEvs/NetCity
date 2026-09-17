function showMergeClassSubjects(){
	//depend on global variables: teacherId, schoolYearId
	
	$('#mergeClassSubjects').dialog({
		title: language.Generic.ClassManagement.kUnionSubjectGroups,
		modal: true,
		resizable: false,
		width: '520px'
	});

	$('#mergeClassSubjects').jtable({
		jqueryuiTheme: true,
		actions: {
			listAction: '/asp/ajax/ClassSubjectsAjax.asp?AT=' + strATTok + '&Action=LoadSubjects&teacherId=' + teacherId + '&schoolYearId=' + schoolYearId
		},
		openChildAsAccordion : true,
		columnResizable : false,
		columnSelectable: false,
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
				display: function (subjectData) 
				{							
					var $img = $('<button title="' + language.Generic.ClassManagement.kChooseSubjectGroups + '">' + language.Generic.Common.kChoose + '</button>').button({icons: {primary: "ui-icon-note"}});
					$img.click(function()
					{
						$('#mergeClassSubjects').jtable('openChildTable',
								$img.closest('tr'),
								{
									title : language.Generic.ClassManagement.kSubjectGroups,
									actions: {
										listAction: '/asp/ajax/ClassSubjectsAjax.asp?AT=' + strATTok + '&Action=LoadSubjectGroups&teacherId=' + teacherId + '&schoolYearId=' + schoolYearId
									},
									selecting: true,
									selectingCheckboxes: true,
									multiselect : true,
									toolbar : {
										items: [{
											text: language.Generic.ClassManagement.kMerge,
											click: function()
											{
												var $selectedRows = $('#mergeClassSubjects').find('tr.jtable-row-selected');
																
												if($selectedRows.length < 2)
												{
													alert(language.Generic.ClassManagement.kCountCheckSubjectGroups);
												}
												else
												{
													if(confirm(language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep1))
													{	
														if(confirm(language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep2))
														{
															$('#NameForMergedSubjectGroup').dialog({
																title: language.Generic.ClassManagement.kEnterNewNameSG,
																modal:true,
																resizable: false,
																width: '330px',
																height: '135',
																buttons: [{
																	text: language.Generic.Buttons.kRecruit,
																	click: function () {
																		var NameSG = $.trim($("#NameSG").val());
																		if(NameSG == '')
																		{
																			alert(language.Generic.ClassManagement.kEnterNewNameSG);
																		}
																		else
																		{
																			checkAvailableName(subjectData.record.SubjectId, NameSG, $selectedRows);
																		}
																	}},
																		{
																			text: language.Generic.Common.kCancel_2,
																			click: function() {$( this ).dialog("close");}
																		}]
															});
														}
													}
												}
											}
										}]
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
											title:  language.Generic.ClassManagement.kGrade,
											edit: false
										},
										Grades: {
											list: false,
											edit: false
										}
									}
								}
						, function (data) {
							data.childTable.jtable('load', {termTypeId: subjectData.record.TermTypeId, subjectId: subjectData.record.SubjectId, iupLevelId:subjectData.record.LevelId});
						});
					});
					return $img;
				}
			},
			SubjectName: {
				title: language.Generic.ClassManagement.kSubjectName,
				width: 'auto',
				edit: false
			},
			LevelName: {
				width: 'auto',
				title: language.Generic.ClassManagement.kLevelName,
				edit: false
			},
			TermTypeName: {
				width: 'auto',
				title: language.Generic.SetupSchoolCalendar.kTermType_,
				edit: false
			},
		}
	});
	$('#mergeClassSubjects').jtable('load');
}

function GetSelectedRowsInfo($selectedRows)
{
	var ids = new Array();
	var grades = new Array();

	$selectedRows.each(function () {
		var record = $(this).data('record');
		ids.push(record.SubjectGroupId);
		grades = $.merge(grades, record.Grades);
	});

	return {
		ids: ids.join(),
		grades: grades.join()
	};
}

function checkAvailableName(subjectId, newNameSG, $selectedRows)
{
	var selRowsInfo = GetSelectedRowsInfo($selectedRows);

	var params = {
		action: '/asp/ajax/ClassSubjectsAjax.asp',
		auth: true,
		data: {
			Action: 'Check',
			NewNameSG : newNameSG,
			schoolYearId : schoolYearId,
			subjectId: subjectId,
			MergeIds : selRowsInfo.ids,
			Grades: selRowsInfo.grades
		},
		showProcessing: true,
		onSuccess: function (response) {
			if(!response.data.bCheckAvailableName)
			{
				alert(language.Generic.ClassManagement.kExistSubjectGroupName);
				return;
			}
			Merge(newNameSG, selRowsInfo.ids);
		}
	};
	jsSubmit(params);
}

function Merge(newNameSG, MergeIds)
{
	var params = {
		action: '/asp/ajax/ClassSubjectsAjax.asp',
		auth: true,
		data: {
			Action: 'Merge',
			MergeIds : MergeIds,
			NewNameSG : newNameSG
		},
		showProcessing: true,
		onSuccess: function () {
			$('#NameForMergedSubjectGroup').dialog('close');
			$('#mergeClassSubjects').dialog('close');
			var $dialog = $('#mergeClassSubjects').dialog({
				title: language.Generic.Common.kAttention,
				modal:true,
				resizable: false,
				width: '270px',
				buttons: [{text: 'Ok',
					click: function() {
						DoSubmit(document.forms['MenuForm'], "ClassSubjects.asp");
					}}]
			});
			$dialog.html(language.Generic.ClassManagement.kUnionOperationSuccess);
		}
	};
	jsSubmit(params);
}