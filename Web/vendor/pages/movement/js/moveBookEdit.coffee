# CoffeeScript

sys =
	const:
		functype:
			preschool: 1
			addschool: 3
		docType:
			out: 1
			enroll: 2
			"move": 3
			year: 4
			stay: 5
			graduate: 6
		docSubType:
			simple: 1
			NotEnrolled: 0
			classesStay: 4 # Несдача задолженности после условного перевода, при этом перевод из класса в класс на параллель ниже
			adapted: 5

class moveBookEditCtrl
	moveconst = 
		actions:
			create: "create"
		source:

			quickadd: "quickadd"
			import: "import"
			attached: "attached"

	swithMoveDirection = (directionType, enable) ->
		$("#move-direction select[name*=_" + directionType + "]")
			.closest(".form-group")
			.css("display", if enable then "" else "none")
			.find("select").prop("disabled", !enable)

	showMoveInDirection = () ->	swithMoveDirection "TO", true
	hideMoveInDirection = () -> swithMoveDirection "TO", false
	showMoveOutDirection = () -> swithMoveDirection "FROM", true
	hideMoveOutDirection = () -> swithMoveDirection "FROM", false
	
	syncMoveDoc = ->
		@moveDoc.docDate = dateUtils.str2date $('input[name=DOCDATE]').val()
		qAdminDate = $('input[name=ADMINDATE]')
		@moveDoc.adminDate = if qAdminDate.length then dateUtils.str2date qAdminDate.val() else @moveDoc.docDate
		@moveDoc.docName = $('input[name=DOCNUMBER]').val()

	constructor: (@moveDoc, @readOnly, @summerMove, @termTypeId, @docDateRange, @sources, @terms, @noMoveDirection, classesFrom, classesTo, @editPage, @adminDateStart) ->
		@newDoc = not @moveDoc.id
		@source = null
		@sourceId = null
		
		@addSchool = appContext.funcType == sys.const.functype.addschool
		@preSchool = appContext.funcType == sys.const.functype.preschool
		self = this
		
		if @sources.length == 1 
			@source = @sources[0]
			@sourceId = @source.Id
		
		@directionSelected = true
		
		@directionRouter = null 
		routerCtr = null
		
		if @moveDoc.docType == sys.const.docType.move
			routerCtr = if @addSchool then addSchoolClassesMoveDirectionRouter else if @moveDoc.docSubType == sys.const.docSubType.classesStay then classesStay2YearMoveDirectionRouter else classesMoveDirectionRouter
		else if @moveDoc.docType == sys.const.docType.year
			if @addSchool
				routerCtr = addSchoolYearMoveDirectionRouter
			else if @preSchool
				routerCtr = preSchoolYearMoveDirectionRouter
			else if @moveDoc.docSubType == sys.const.docSubType.adapted
				routerCtr = yearAdaptedMoveDirectionRouter
			else
				routerCtr = yearMoveDirectionRouter
		else if @moveDoc.docType == sys.const.docType.stay 
			routerCtr = repeateYearMoveDirectionRouter
		else
			routerCtr = moveDirectionRouter
			
		if routerCtr 	
			@directionRouter = new routerCtr(classesFrom, classesTo)
		
		if @termTypeId
			@minEndTerm = _.chain @terms
				.filter (term) -> term.typeId
				.groupBy (term) -> term.typeId
				.map (typeGroup) -> _.max(typeGroup, (term) -> term.termEnd)
				.min (term) -> term.termEnd
				.value()

			$(document).ready () => do @setDocTermName
		
			if not @readOnly
				dateInput.onChange () =>
					do @setDocTermName
					do dataChanged

		$(".modal-body").on "click", "input[name=ENROLLFROM][type=radio]", () -> 
			self.sourcesChangeHandler(this)
			
	toggleSubDocChecks: (check) ->
		subDocId = $(check).val()
		status = $(check).prop("checked")
		$("input[type=checkbox][name=DELSTUDENTS][subdocid=" + subDocId + "]").prop("checked", status)

	onChangeDocType: (selectCtrl) ->
		setDocType = parseInt $(selectCtrl).val()
		url = "MoveBookEdit.asp"
		
		if setDocType == sys.const.docType.year or setDocType == sys.const.docType.stay or setDocType == sys.const.docType.graduate
			url = "YearMoveBookEdit.asp"
		else if setDocType == sys.const.docType.move
			url = "ClassesMoveBookEdit.asp"

		OnChangeSelect "MainForm", url

	#обработчик смены выбора источника учащихся
	sourcesChangeHandler: (sourceRadio) ->
		sourceRadio = sourceRadio or $('input[name=ENROLLFROM]:checked')[0]
		@sourceId = sourceRadio.value
		
		@source = _.find @sources, (source) => source.Id == @sourceId
		
		if not @source
			throw "Неизвестный список учащихся для движения"
		
		if @source.DirectedEnrollMovements
			do hideMoveInDirection
		else
			do showMoveInDirection
				
		if @source.DirectedDepartMovements
			do hideMoveOutDirection
		else
			do showMoveOutDirection
	
	#восстановить
	reset: () ->
		resetScreen('MainForm')
		do @setDocTermName

	setDocTermName: () ->
		form = document.MainForm;
		el = form.elements["DOCDATE"]
		elTermName = form.elements["TermName"]

		currentDate = null
		if @readOnly
			currentDate = @moveDoc.docDate
		else
			currentDate = dateUtils.str2date el.value
		
		termsNames = ""
		if currentDate and elTermName
			_.each @terms, (termInfo) ->
				if currentDate >= termInfo.termStart and currentDate <= termInfo.termEnd
					termsNames += ", " + termInfo.termName
						
			elTermName.value = termsNames.substring(2, termsNames.length)
			
	getClassGrade: (classId) ->
		cls = _.find @classes, (cls) -> cls.classId == classId
		return cls?.grade 
		
	onChangeClassFrom: () ->
		from = $('[name="CLASSID_FROM"]')
		to = $('[name="CLASSID_TO"]')
		
		if !from.length or !to.length
			return
		
		classIdFrom = parseInt from.val()
		if $(from).is(':disabled')
			classesTo = @directionRouter.educGroupsTo
		else
			classesTo = @directionRouter.getEducGroupsTo classIdFrom
		
		to[0].options.length = 0
		
		if classesTo.length > 0
			@directionSelected = true
			to.prop('disabled', false)
			preselected = @directionRouter.getEducGroupToPreselection classesTo
			newOptions = _.map classesTo, (classinfo) -> new Option(classinfo.name, classinfo.id, false, preselected?.id == classinfo.id)
			_.each newOptions, (option) -> to[0].options.add option
		else
			to[0].options.add new Option("Нет подходящих классов/групп зачисления", -2, false, true)
			to.prop('disabled', 'disabled')
			@directionSelected = false
		
		return 

	onChangeClassTo: (select) ->
		classIdTo = $(select).val();
		classIdFrom = $('[name="CLASSID_FROM"]').val()

		if classIdFrom == classIdTo
			alert(language.Movement.kCantMoveToSameClass)
			return

	#проверка даты документа на валидность
	checkDocDate: () ->
		docDateFilter = getDateFilterInfo("DOCDATE")

		docDateChanged = !(@moveDoc.docDate and @moveDoc.docDate - docDateFilter.date() == 0)

		if docDateChanged
			validateMsg = language.Generic.Movement.kErrDocDateRange1 + dateUtils.date2str(docDateRange.start) + language.Generic.Movement.kErrDocDateRange2 + dateUtils.date2str(docDateRange.end);
			if !docDateFilter.checkDateInterval(docDateRange.start, docDateRange.end, validateMsg)
				return false

			if @moveDoc.docType == sys.const.docType.enroll and @termTypeId
				if !@summerMove and docDateFilter.date() > @minEndTerm.termEnd
					focusAlert "el", language.Generic.Movement.kErrDocDateAfterLastPeriod

		adminDateFilter = getDateFilterInfo("ADMINDATE")

		if adminDateFilter and @adminDateStart
			validateMsg = language.Generic.Movement.kErrAdminDateRange1 + dateUtils.date2str(@adminDateStart) + language.Generic.Movement.kErrDocDateRange2 + dateUtils.date2str(docDateFilter.date());
			if !adminDateFilter.checkDateInterval(@adminDateStart, docDateFilter.date(), validateMsg)
				return false

		return true
		
	editSubDoc: (nSubDocID) ->
		form = document.MainForm

		form.SUBDOCID.value = nSubDocID
		setDBBusy()
		DoSubmit(form,"/asp/setupschool/movement/MoveSubDocEdit.asp")
		
	#удаление документа
	deleteDoc: () ->
		if isDBBusy()
			return false

		$.show.confirmation(language.Generic.Movement.kConfirmDeleteDoc)
			.then () =>
				jsSubmit
					action: "/webapi/movement/documents/#{@moveDoc.id}"
					method: "DELETE",
					showProcessing: true,
					onSuccess: () -> Back()

	#удаление учащихся из приказа
	deleteStudents: () ->
		form = document.MainForm;
		deleteInputs = $("input[name='DELSTUDENTS']:checked")
		delCnt = deleteInputs.length

		if !delCnt
			alert(language.Movement.kSelectStudentsToDeleteFromDoc)
			return false

		$.show.confirmation(language.Generic.Movement.kConfirmDeleteUsersFromDoc.replace('{0}', delCnt))
			.then () =>
				removeStudentsDto =
					docStudentId: _.map deleteInputs, (checkBox) -> checkBox.value

				jsSubmit
					action: "/webapi/movement/documents/#{@moveDoc.id}/students"
					method: "DELETE"
					queryData: removeStudentsDto
					contentType: "application/json"
					showProcessing: true
					onSuccess: (retDocId) =>
						if !retDocId
							form.elements["OUTERMESSAGE"].value = language.Generic.Movement.kMoveDocSuccessfulDeleted
							DoSubmit(form, "MoveBook.asp")
						else
							form.elements["OUTERMESSAGE"].value = language.Generic.Movement.kMoveDocSuccessfulSaved
							DoSubmit(form, @editPage)

	onChangeDocDate: () ->
		form = document.MainForm
		form.elements["Delete"].value = ""
		ok("MainForm", "")

	educContractBlanks: () -> 
		jsSubmit
			action: "/webapi/integration/pfdo/educContracts/blanks"
			method: "GET"
			showProcessing: true
		.then (blanksInfo) -> 

			rmcBlank = blanksInfo.rmcBlank
			pfdoBlank = blanksInfo.pfdoBlank
			
			dialogButtons = [
				{
					label: "Закрыть"
					action: () => blanksDialog.close()
				}
			]

			blanksDialog = $.show.dialog
				title: "Бланки договоров"
				message: "
					<div>
						<a href=\"javascript:void(0)\" id=\"rmc-educcontract-blank\">
							Бланк договора, рекомендованный РМЦ</a>
						</div>
					<div>
						<a href=\"javascript:void(0)\" id=\"pfdo-educcontract-blank\">
							Бланк договора об обучении на основе сертификата персонифицированного финансирования дополнительного образования
						</a>
					</div>"
				buttons: dialogButtons 
				onshown: () ->
					$("#rmc-educcontract-blank").on "click", () -> 
						if !rmcBlank or !rmcBlank.id
							alert "Бланк не загружен в систему"
							return

						downloadFile("/webapi/attachments/" + rmcBlank.id);

					$("#pfdo-educcontract-blank").on "click", () -> 
						if !pfdoBlank or !pfdoBlank.id
							alert "Бланк не загружен в систему.\nЗагрузка бланка выполняется на экране \"Настройки ОДО\""
							return

						downloadFile("/webapi/attachments/" + pfdoBlank.id);


	addStudentsToDoc: () ->
		form = document.MainForm
				
		canAddStudents = =>
			docNumber = trimStr(form.elements['DOCNUMBER'].value)
			if not docNumber
				focusAlert form.DOCNUMBER, language.Generic.Movement.kErrEmptyDocNumber
				return false
			
			if not @checkDocDate()
				return false

			if @newDoc
				return true
			
			if window.dataWereChanged or bEOOrReasonChanged
				return $.show.confirmation kDataWereChanged
					.then => 
						$(form).resetState()
						window.dataWereChanged = false
						do @setDocTermName

			return true
			
		extDeferred.when(canAddStudents).then () =>
			#получение dom-объекта формы добавления из script
			addForm = $($('#addStudentsToDocTempl').html())
			radio = addForm.find(':radio')
			direction = addForm.find('#move-direction').children()
			#проверка на отсутствие содержисодержимо формы
			isEmptyFormContent = $.isEmptyObject(radio.html()) and $.isEmptyObject(direction.html())
			self = this

			# костыль: прячет список классов
			sourceRadio = addForm.find('input[name="ENROLLFROM"]:checked').get(0)
			moveInDirection = addForm.find("#move-direction select[name*=_TO]").closest(".form-group")
			moveOutDirection = addForm.find("#move-direction select[name*=_FROM]").closest(".form-group")
			
			if sourceRadio
				sourceId = sourceRadio.value
				source = _.find self.sources, (source) => source.Id == sourceId

				if not source
					throw "Неизвестный список учащихся для движения"

				if source.DirectedEnrollMovements
					moveInDirection.hide()
				else
					moveInDirection.show()
				
				if source.DirectedDepartMovements
					moveOutDirection.hide()
				else
					moveOutDirection.show()

				# установка источника
				if source
					self.sourceId = source.Id
					self.source = source

			if isEmptyFormContent
				#если нет элементов на форме (например, при добавлении учеников в приказ о выбытии)
				#то без диалогового окна
				do @addStudents
			else
				dialogButtons = [
					{
						label: language.Generic.Buttons.kAdd
						action: () => do @addStudents
						cssClass: 'btn-primary'
					}
				]
				
				if @noMoveDirection
					dialogButtons = []

				$.show.dialog
					title: language.Movement.kAddStudentsToDoc
					message: addForm
					buttons: dialogButtons
					onshown: () ->
						$("body").on "click", "input[name=ENROLLFROM][type=radio]", () -> 
							self.sourcesChangeHandler(this)
							self.onChangeClassFrom(this)
						$("body").on "change", "select[name=CLASSID_TO]", () -> self.onChangeClassTo(this)
						$("body").on "change", "select[name=CLASSID_FROM]", () -> self.onChangeClassFrom(this)
						do self.onChangeClassFrom


	addStudents: () ->
		if not @directionSelected
			$.show.message "Не выбран класс зачисления или выбытия"
			return
	
		form = document.MainForm;

		classIdFrom = $('[name="CLASSID_FROM"]').val()
		classIdTo = $('[name="CLASSID_TO"]').val()
		
		addAction = () =>
			action = () =>
				form = document.MainForm.elements["SAVEMODE"].value = moveconst.actions.create
				$(document).trigger('showProcessing')
						
				arrFormsParams = getFormsParams([document.MainForm, document.addStudentsToDoc])

				postTo 
					path:'SaveDocParam.asp'
					params: arrFormsParams
					
			if !@source
				alert language.Generic.Movement.kMustSelectEnrollSource
				return
					
			if @moveDoc.docType == sys.const.docType.move and @getClassGrade(parseInt classIdFrom) < @getClassGrade(parseInt classIdTo)
				$.show.confirmation(language.Movement.kMoveToNextGrade).then(action)
				return

			do action
					
		if not @sourceId
			alert(language.Movement.kMustSelectMovementSource)
			return false

		if @moveDoc.docType == sys.const.docType.out
			if not classIdFrom and not @source.DirectedDepartMovements
				alert(language.Movement.kNoStudentsForOut)
				return false
						
		if @moveDoc.docType == sys.const.docType.move
			if classIdFrom == classIdTo and @moveDoc.docType is not sys.const.docType.attached
				alert language.Movement.kCantMoveToSameClass
				return

		if @moveDoc.docType == sys.const.docType.enroll
			if @moveDoc.docSubType is not sys.const.docSubType.NotEnrolled and not classIdTo and not @source.DirectedEnrollMovements
				alert language.Filter.kNoYearClasses
				return false
					
			#if  @sourceId == moveconst.source.import_ext
			if  @sourceId == moveconst.source.import
				#импорт учащихся - показываем диалог для загрузки файла
				$.show.fileDialog
					title: language.Generic.Common.kSelectFile
					fileExts: ['.xls', '.xlsx']
					invalidFileExtMsg: language.Generic.Curriculum.kInvalidImportFileFormat
					isAjax: true
					url: "/webapi/movement/import/parsefile"
					queryStringParams: 
						docSubType: @moveDoc.docSubType
				.then (data) =>
					if not data.isSuccess
						if(data.status == "Failure")
							#показать модальное окно с ошибками (выброшенным Exception)
							$.show.error(data.message.replace(/\\n/g, ' \n'))
							return
						else
							#показать таблицу с ошибками валидации
							impValidErrors = new importValidation()
							impValidErrors.showModalValidationError(data, addAction, @moveDoc.docSubType);
							return
					do addAction

				return

		do addAction

	savedoc: () ->
		if !window.dataWereChanged
			alert language.Generic.Common.kNoChangesData
			return false
		form = document.MainForm
		
		extDeferred.when(@canSaveDoc()).then () =>
			do syncMoveDoc
		
			students = _.map $("input[type=hidden][name=STUDENTS]"), (el) -> el.value
			
			studentsSaveData = null
			if @moveDoc.docType != sys.const.docType.graduate
				studentsSaveData = _.map students, (studentId) ->
					studentId: studentId
					eoId: $("input[type=hidden][name=EOS_#{studentId}]").val()
					reason: $("input[type=hidden][name=REASON_#{studentId}]").val()
					outsidetype: $("input[type=hidden][name=OST_#{studentId}]").val()
			
			jsSubmit
				action: "/webapi/movement/documents/#{@moveDoc.id}"
				method: "POST"
				data: 
					movedoc: @moveDoc
					studentData: studentsSaveData
				contentType: "application/json"
				showProcessing: true
			.then -> 
				window.dataWereChanged = false
				alert language.Generic.Movement.kMoveDocSuccessfulSaved or "Документ успешно сохранен"

	canSaveDoc: () ->
		form = document.MainForm
		docNumber = trimStr(form.elements['DOCNUMBER'].value)

		if not docNumber
			focusAlert form.DOCNUMBER, language.Generic.Movement.kErrEmptyDocNumber
			return false

		if not @checkDocDate()
			return false

		#todo. получить признак empty
		if @newDoc and @emptyStudents
			if @moveDoc.docType == sys.const.docType.enroll
				return $.show.getConfirmation language.Generic.Movement.kConfirmCreateEmptyDoc
			else
				alert language.Movement.kAddStudentsPrompt
				return false

		if @moveDoc.docType == sys.const.docType.out and not @addSchool
			elSubDocs = form.elements["SubDoc"]
			
			isValidReason = (sStudentID) ->
				elReason = form.elements['REASON_' + sStudentID]
				value = null

				if typeof elReason.options != 'undefined' or typeof elReason.value != 'undefined'
					elReason = elReason
				else
					elReason = elReason[0]

				if typeof elReason.value != 'undefined'
					value = elReason.value
				else
					value = getListValue elReason

				if value == -1
					focusAlert(elReason, language.Generic.Movement.kErrSelectDepartReason)
					return false
				return true

			checkSubDocElement = (subDocElement) ->
				sStudentSubDoc = "Student_" + subDocElement.value
				elStudents = form.elements[sStudentSubDoc]
						
				if elStudents.length
					return _.some elStudents, (elStudent) -> !isValidReason(elStudent.value)
				else
					return !isValidReason(elStudents.value)
				
			if elSubDocs.length
				if _.some elSubDocs, checkSubDocElement
					return false
			else
				if checkSubDocElement elSubDocs
					return false

		else if @moveDoc.docType == sys.const.docType.enroll
			moveFromInputs = $("input[type=hidden][name*=EOS_]")
			confirms = []
			self = @

			moveFromInputs.each () ->
				studID = $(this).attr("studentid")
				
				departEoInput = document.getElementById("DEPARTEOID_" + studID)
				if !departEoInput
					return

				departEOID = parseInt(departEoInput.value)
				fromMoveEOID = parseInt this.value

				if departEOID = -1
					return

				if self.eoId != departEOID and departEOID != fromMoveEOID
					departEOName = $("#DEPARTEONAME_" + studID).text()
					studName = $("input[name*=Student_][value=" + studID + "]").parent().text()

					message = studName + " выбыл(а) в '" + departEOName + "'\nДля корректного движения укажите 'Откуда прибыл' как '" + departEOName + "'!\n" + language.Generic.Common.kContinue;
					confirms.push $.show.getConfirmation(message)

			if !confirms.length
				return true

			return extDeferred.when(confirms)
			
		return true

#обработчики смены выбранных классов в фильтрах
class moveDirectionRouter
	constructor: (@educGroupsFrom, @educGroupsTo) ->
	
	getEducGroupsTo: (educGroupIdFrom) ->
		@groupFrom = _.find @educGroupsFrom, (group) -> group.id == educGroupIdFrom
		return @filterEducGroupsTo()
		
	getEducGroupToPreselection: (groupFrom, groupsTo) ->
		return _.first(groupsTo)
		
	filterEducGroupsTo: () ->
		return @educGroupsTo
		
class yearMoveDirectionRouter extends moveDirectionRouter
	filterEducGroupsTo: () ->
		_.filter @educGroupsTo, (groupTo) => groupTo.grade > @groupFrom.grade

	getEducGroupToPreselection: (groupsTo) ->
		sameLetterGroup = _.find groupsTo, (group) => group.letter == @groupFrom?.letter
		
		if sameLetterGroup and sameLetterGroup.grade - @groupFrom.grade <= 2
			return sameLetterGroup

		return super @groupFrom, groupsTo
		
class yearAdaptedMoveDirectionRouter extends yearMoveDirectionRouter
	filterEducGroupsTo: () ->
		_.filter @educGroupsTo, (groupTo) => groupTo.grade >= @groupFrom.grade

class repeateYearMoveDirectionRouter extends moveDirectionRouter
	filterEducGroupsTo: () ->
		_.filter @educGroupsTo, (groupTo) => 
			dif = @groupFrom.grade - groupTo.grade
			return dif >= 0 and dif < 2

	getEducGroupToPreselection: (groupsTo) ->
		preselected = _.chain(groupsTo)
			.sortBy (groupTo) -> if groupTo.letter == @groupFrom?.letter then "" else groupTo.letter
			.max (groupTo) -> groupTo.grade
			.value()
			
		if preselected
			return preselected

		return super @groupFrom, groupsTo
		
class classesMoveDirectionRouter extends moveDirectionRouter
	getEducGroupToPreselection: (groupsTo) ->
		preselected = _.chain(groupsTo)
			#.filter (groupTo) => groupTo.grade >= @groupFrom.grade
			.min (groupTo) -> groupTo.grade
			.value()
			
		if preselected
			return preselected

		return super @groupFrom, groupsTo
	filterEducGroupsTo: () ->
		_.filter @educGroupsTo, (groupTo) => groupTo.id != @groupFrom.id

class classesStay2YearMoveDirectionRouter extends classesMoveDirectionRouter
	filterEducGroupsTo: () ->
		_.filter super, (groupTo) => groupTo.grade == (@groupFrom.grade - 1)

class preSchoolYearMoveDirectionRouter extends moveDirectionRouter

class addSchoolYearMoveDirectionRouter extends yearMoveDirectionRouter
	filterEducGroupsTo: () ->
		_.filter super, (groupTo) => groupTo.progid == @groupFrom.progid

class addSchoolClassesMoveDirectionRouter extends classesMoveDirectionRouter
	filterEducGroupsTo: () ->
		_.filter super, (groupTo) => groupTo.progid == @groupFrom.progid