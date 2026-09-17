showMergeClassSubjects = ->
	mergeDialog = null;
	setNameDialog = null
	
	#depend on global variables: teacherId, schoolYearId

	checkAvailableName = (subjectId, newNameSG, $selectedRows) ->
		selRowsInfo = GetSelectedRowsInfo($selectedRows);

		params = 
			action: '/asp/ajax/ClassSubjectsAjax.asp'
			data:
				Action: 'Check'
				NewNameSG: newNameSG
				schoolYearId: schoolYearId
				subjectId: subjectId
				MergeIds: selRowsInfo.ids
				Grades: selRowsInfo.grades
			showProcessing: true
			onSuccess: (response) ->
				if !response.data.bCheckAvailableName
					alert(language.Generic.ClassManagement.kExistSubjectGroupName)
					return;
				mergeSubjectGroups(newNameSG, selRowsInfo.ids)
		jsSubmit params
	
	mergeSubjectGroups = (newNameSG, MergeIds) ->
		jsSubmit
			action: '/asp/ajax/ClassSubjectsAjax.asp'
			auth: true
			data:
				Action: 'Merge'
				MergeIds: MergeIds
				NewNameSG: newNameSG
			showProcessing: true
			onSuccess: () ->
				setNameDialog.close()
				mergeDialog.close()

				alert(language.Generic.ClassManagement.kUnionOperationSuccess).then () ->
					DoSubmit(document.forms['MenuForm'], "ClassSubjects.asp")

	jtableConteiner = $("<div></div>");
	
	buildMergeButton = (subjectData) ->
		chooseBtn = $.uicontrols.button
			id: 'attach',
			size: 'btn-sm',
			label: language.Generic.Common.kChoose,
			icon: 'ok',
			click: () ->
				jtableConteiner.jtable(
					'openChildTable',
					chooseBtn.closest('tr'),
						title : language.Generic.ClassManagement.kSubjectGroups
						actions:
							listAction: urlHelper.makeUrl('/asp/ajax/ClassSubjectsAjax.asp', {action: "LoadSubjectGroups", teacherId: teacherId, schoolYearId: schoolYearId})
						selecting: true
						selectingCheckboxes: true
						multiselect : true
						toolbar:
							items: 
								[
									text: language.Generic.ClassManagement.kMerge
									click: () ->
										$selectedRows = jtableConteiner.find('tr.jtable-row-selected')

										if $selectedRows.length < 2
											alert language.Generic.ClassManagement.kCountCheckSubjectGroups
											return

										$.show.confirmation(language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep1)
										.then(() -> $.show.confirmation(language.Generic.ClassManagement.kAreYouSureSelectSubjectGroupsStep2))
										.then(() ->
											setNameDialog = $.show.dialog
												title: language.Generic.ClassManagement.kEnterNewNameSG
												message: $("#NameForMergedSubjectGroup")
												buttons: [
													{
														label: language.Generic.Buttons.kRecruit,
														action: (dialog) ->
															if $("input[name='NameSG']").val() != null
																nameMergedSg = $("input[name='NameSG']").val().toString().trim()
															else 
																nameMergedSg = ''
															if nameMergedSg == ''
																alert language.Generic.ClassManagement.kEnterNewNameSG
																return;

															dialog.getModal().prop("dataWereChanged", false) if dialog isnt null

															checkAvailableName(subjectData.record.SubjectId, nameMergedSg, $selectedRows)
													},
													{
														label: language.Generic.Common.kCancel_2
														action: (dialog) -> dialog.close()
													}
												]
										)
								]
						fields:
							SubjectGroupId: key: true, create: false, edit: false, list: false
							SubjectName: title: language.Generic.ClassManagement.kSubjectGroupName, edit: false
							Grade: title:  language.Generic.ClassManagement.kGrade, edit: false
							Grades: list: false, edit: false
					, (data) -> data.childTable.jtable('load', {termTypeId: subjectData.record.TermTypeId, subjectId: subjectData.record.SubjectId, iupLevelId:subjectData.record.LevelId});
				)
		return chooseBtn

	jtableConteiner.jtable
		actions:
			listAction: urlHelper.makeUrl('/asp/ajax/ClassSubjectsAjax.asp', {action: 'LoadSubjects', teacherId: teacherId, schoolYearId: schoolYearId})
		openChildAsAccordion : true
		columnResizable : false
		columnSelectable: false
		useBootstrap: true
		fields:
			SubjectId: key: true, create: false, edit: false, list: false
			SubjectGroups: title: '', width: 'auto', edit: false, display: (subjectData) ->
				buildMergeButton(subjectData)
			SubjectName: title: language.Generic.ClassManagement.kSubjectName, width: 'auto', edit: false
			LevelName: title: language.Generic.ClassManagement.kLevelName, width: 'auto', edit: false
			TermTypeName: title: language.Generic.SetupSchoolCalendar.kTermType_, width: 'auto', edit: false

	jtableConteiner.jtable('load');

	mergeDialog = $.show.dialog
		title: language.Generic.ClassManagement.kUnionSubjectGroups
		size: BootstrapDialog.SIZE_WIDE
		message: jtableConteiner

GetSelectedRowsInfo = ($selectedRows) ->
	ids = new Array();
	grades = new Array();

	$selectedRows.each(()->
		record = $(this).data('record')
		ids.push(record.SubjectGroupId)
		grades = $.merge(grades, record.Grades)
	);

	return{
		ids: ids.join()
		grades: grades.join()
	}
