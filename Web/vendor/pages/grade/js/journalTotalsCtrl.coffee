# CoffeeScript
class JournalTotalsCtrl
	data = null
	templateManager = new (require "./journalTotals-templates.coffee")
	resourceLoader = require "./resourceLoader.coffee"
	layoutManager = require "./editJournal-layout.coffee"
	ctx = {}

	constructor: (@container, _ctx) ->
		ctx = $.extend {}, ctx, _ctx
		$.ajax
			url: '/vendor/pages/grade/templates/journalTotals.html'
			cache: true
			success: (data) ->
				window.journalTotalsTemplate = data.replace(/(?:\r\n|\r|\n)/g, '');

		Handlebars.registerHelper 'ifEqual', (nParam1, nParam2, opts) ->
			if nParam1 == nParam2
				opts.fn(this)
			else
				opts.inverse(this);

		Handlebars.registerHelper 'elementByIndex', (list, index, field) ->
			list[index]?[field];

		$(document).bind 'journalTotalsShow', () =>
			@ejLayoutManager = new layoutManager($(".assignments-block"))
			do @ejLayoutManager.init

		$("#totalsSaveId").click () => @save()
		$("#totalsResetId").click () => @display()

	#загрузка данных для редактирования оценок указанного занятия в расписании
	load: () ->
		ret = $.Deferred()
		ctrl = this

		prepareStudents = resourceLoader.getStudentList({sgid: ctx.subjectGroupId, termId: ctx.termId})
			.then (students) =>
				ctrl.students = _.map students, (student, index) ->
					student.studentId = student.id
					student.name = student.fullName
					student.num = index + 1
					student.totalMark = _.find(ctx.totals[0].marks, (total) -> total.studentId == student.studentId)?.mark
					return student


		prepareTermInfo = resourceLoader.getTermInfo({termId: ctx.termId})
			.then (termInfo) ->
				ctx.termInfo = termInfo


		$.when(prepareStudents)
			.then (response) ->
				ret.resolve()

		return ret.promise()

	#сохранение#
	save: () ->
		defArgs = new Array()

		if isDBBusy() 
			return false

		form = document.forms['Gradebook']
		if !form.SID 
			return

		strInvGrade =  language.Generic.Grade.kErrInvGrade1 + ctx.minMark + language.Generic.Grade.kErrInvGrade2 + ctx.maxMark + language.Generic.Grade.kErrInvGrade3

		hasGrade = (val, elMarkType) ->
			return val.length > 0 && parseInt(getListValue(elMarkType)) > 0

		isInValidGrade = (val) ->
			grade = parseInt(val)
			return isNaN(grade) || grade < ctx.minMark || grade > ctx.maxMark

		isValidMarks = (form) ->
			if form.Mark.length
				marks = $('input[name=Mark]:enabled').filter (index) ->
					val = this.value
					elMarkType = form.MarkType[index]
					return hasGrade(val, elMarkType) && isInValidGrade(val)

				if marks.length > 0 
					markElem = marks[0]
			else
				val = form.Mark.value
				if hasGrade(val, form.MarkType) && isInValidGrade(val) 
					markElem = form.Mark #в этом поле ошибочное значение
		
			if markElem
				alert(strInvGrade)
				markElem.focus()
				return false
			return true

		extraData =
			sgid: ctx.subjectGroupId
			type: ctx.termInfo.termTypeId
			periodId: ctx.termId

		if ctx.gradingSys != 1
			if !isValidMarks(form)
				return false
			if $('input[name=Mark][value=0]').length > 0
				defArgs = () -> 
					$.when(!dataWereChanged || $.show.confirmation(language.Generic.Grade.kZeroMarkConfirm)).promise()

		extDeferred.when(defArgs).then () ->
			if ctx.gradingSys != 1
				$('input[name=Mark]').removeAttr("disabled")
				jsSaveForm form, extraData, "SaveTotal.asp"
					.then () -> 

	display: () ->
		ctrl = this

		markTypes = []
		markTypes.push {markTypeId: 0, markTypeName: language.Generic.Common.kWithoutMark}
		if !appContext.isTkr
			if ctx.gradingSys != 1 && ctx.gradingSys == 2
				markTypes.push {markTypeId: -5, markTypeName: language.Generic.Common.kNotRated}
			if ctx.gradingSys == 1
				markTypes.push {markTypeId: ctx.maxMark, markTypeName: language.Generic.Common.kPass}
				markTypes.push {markTypeId: ctx.minMark, markTypeName: language.Generic.Common.kNotPass}
		markTypes.push {markTypeId: -1, markTypeName: language.Generic.Common.kNonAttest}
		markTypes.push {markTypeId: -2, markTypeName: language.Generic.Common.kExempted}
		if appContext.isTkr
			markTypes.push {markTypeId: -3, markTypeName: language.Generic.Common.kAccepted}
			markTypes.push {markTypeId: -4, markTypeName: language.Generic.Common.kStudied}

		#рендеринг основной формы экрана
		model =
			language: language
			students: @students
			termInfo: ctx.termInfo
			addMarks: [ {title: language.Generic.Common.kAverageMark, marks: _.indexBy(_.pluck(ctx.avgMarks, 'avgMark'), 'studentId')} ]
			markTypes: markTypes
			gradingSys: ctx.gradingSys
		template = Handlebars.compile journalTotalsTemplate
		@container.html template model

		changeElem = (el, val) ->
			if val < 0
				mtype = $(el).parent().find("[name=MarkType]")[0]
				val = mtype.options[mtype.selectedIndex].text
			else 
				if val != ""
					val = parseInt(val)
					if isNaN(val)
						val=""
			el.value = val
			$(el).change()
			dataChanged()

		$('select[name=MarkType]').change () -> 
			markType = this
			elMark = $(markType).parents('tr:first').find('input[name=Mark]')[0]
			nMarkType = +markType.value
			if nMarkType > 0
				changeElem(elMark, elMark.value)
				elMark.disabled = false
				elMark.style.backgroundColor = ''
				elMark.focus()
			else
				changeElem(elMark, nMarkType)
				elMark.disabled = true
				elMark.style.backgroundColor = 'lightgray'

		$("input[name=Mark]:enabled").navigateInputs(
			getCellInputOptions: (elem) ->
				maxMark: ctx.maxMark,
				minMark: ctx.minMark,
				maxLength: (ctx.maxMark + "").length
			getNextInput: (elem, selector, step) ->
				row = elem.parentNode.parentNode
				elemIndex = $(selector, row).index(elem)
				nextRowIndex = row.rowIndex + step
				rowsCnt = row.parentNode.rows.length
				while( nextRowIndex > 0 && nextRowIndex < rowsCnt )
					nextRowElements = $(selector, $('tr', row.parentNode)[nextRowIndex])
					if nextRowElements.length > 0 && nextRowElements[elemIndex]
						return nextRowElements[elemIndex]
					nextRowIndex = nextRowIndex + step
		)


		#рендеринг фильтр-панели
		filtersModel =
			language: language
			subjectGroupName: ctx.subjectGroupName
			termName: ctx.termName
			className: ctx.className

		filtersTemplate = Handlebars.compile templateManager.filterTpl
		filtersHtml = filtersTemplate filtersModel
		$('#state-totals .filters-panel').html filtersHtml 

		if $('input[name=autoExpose]').length > 0
			$('input[name=autoExpose]').click () ->
				bOfferentMarkInputs = $('input[marktype=true]')
				if bOfferentMarkInputs.length > 0
					for i in [0..bOfferentMarkInputs.length - 1]
						if bOfferentMarkInputs[i].value != ""
							bOfferentMarkInputs[i].value = ""
							bOfferentMarkInputs[i].style.backgroundColor = ''
						else
							txt = $(bOfferentMarkInputs[i]).parent().prev().text()
							txt = txt.replace(",", ".")
							val = parseFloat(txt)
							if !isNaN(val)
								bOfferentMarkInputs[i].value = Math.round(val)
								bOfferentMarkInputs[i].style.backgroundColor = '#D4FFFF'
								bOfferentMarkInputs[i].style.color = 'blue'

		$(document).trigger('journalTotalsShow')

	close: () ->
		do @ejLayoutManager.destroy
		@ejLayoutManager = null


#для поддержки js модульности
module.exports = JournalTotalsCtrl