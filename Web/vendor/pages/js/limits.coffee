class limitsController
	settings = 
		noLimits: false
		valEps: 0.000001
		componentList: null
		iupComponentList: null
		grades: null
		gradeLabels: null
		minGrade: null
		maxGrade: null
		
		
	constructor: (_settings) ->
		settings = $.extend {}, settings, _settings

	addLimitsTpl = '
			<div class="row">
				<div class="col-md-12">
					<div class="form-group">
						<label class="control-label col-md-3">{{language.Generic.SetupSchoolCalendar.kComponent}}</label>
						<div class="col-md-9">
							<select name="COMPID" class="form-control">
								{{#each components}}
									<option value="{{this.id}}">{{this.name}}</option>
								{{/each}}
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="padding-top: 15px">
				<div class="col-md-12">
					<table class="table table-bordered table-compact table-condensed scrollable">
						<tr>
							<th colspan="{{count}}">{{language.SetupSchoolCalendar.kGradesHours}}</th>
						</tr>
						<tr>
							{{#each grades}}
								<th>{{this}}</th>
							{{/each}}
						</tr>
						<tr>
							{{#each grades}}
								<td class="input-cell"><input name="Hours" type="text" value="" maxlength="5" size="{{../textInputSize}}" OnChange="dataChanged()"></td>
							{{/each}}
						</tr>
					</table>
				</div>
			</div>';
	
	#валидация перед сохранением
	canSubmit : (formName, isIup, addDialog) ->
		getMergedArray = (query) ->
			formInputs = $(query, $("[name="+formName+"]"))
			
			if not addDialog
				return formInputs

			$.merge formInputs, $(query, addDialog.$modalBody)
		
		if isDBBusy() 
			return false
		
		form = document.forms[formName]
		list = getMergedArray('[name=COMPID]')

		if settings.noLimits
			if !isIup
				if list.length != 0
					if parseInt($('*[name="COMPID"]').val()) != 0
						list.trigger("focus");
						alert(language.Generic.SetupSchoolCalendar.kEnterLimitFirst )
						return false

		el = getMergedArray('[name=Hours]')
		errCnt = -1
		
		if el.length > 0
			for i in [0..el.length-1]
				valParse = str2floatEx el[i]
				if valParse != '' 
					if isNaN(valParse) or (valParse < settings.valEps)
						errCnt = i;
						break

			if errCnt != -1
				el[errCnt].trigger("focus")
				alert(language.Generic.SetupSchoolCurPlan.kEnterNumberGreater_0)
				return false

		if !isIup
			lim = new Array(settings.grades)
			n0summ = 0
			
			if el.length <= settings.grades
				return true

			#проверка на заполнение
			for i in [0..settings.grades-1]
				lim[i] = 0
				k = 1
				while k * settings.grades < el.length
					n0 = str2floatEx(el[i])
					n0summ = n0summ + n0
					n1 = str2floatEx(el[i+k*settings.grades])
					if !isNaN(n1) and (n1 != '')
						if isNaN(n0) or (n0 == '')
							el[i].trigger("focus")
							alert language.Generic.SetupSchoolCalendar.kUndefinedLimit + " " + i % settings.grades + " " + language.SetupSchoolCalendar.kForLimit
							return false
					k++

			if n0summ == 0
				alert language.Generic.SetupSchoolCalendar.kLimitMustBe
				return false
		
			#проверка на непревышение предела нагрузками по отдельным компонентам
			for i in [settings.grades..el.length-1]
				totalLimit = str2floatEx(el[i % settings.grades])
				compLimit = str2floatEx(el[i])
				
				if !isNaN(compLimit) and (compLimit != '') 
					if compLimit > (totalLimit + settings.valEps)
						el[i].trigger("focus")
						alert language.Generic.SetupSchoolCalendar.kOverflowLimit
						return false
						
					lim[i % settings.grades] = lim[i % settings.grades] + compLimit;
			
			#проверка на непревышение предела суммарной нагрузкой по компонетам
			for i in [0..settings.grades]
				if (lim[i] > settings.valEps) and (lim[i] > (str2floatEx(el[i]) + settings.valEps))
					el[i].trigger("focus")
					alert(language.Generic.SetupSchoolCalendar.kSumLimit1 + " " + i + " " + language.SetupSchoolCalendar.kSumLimit2)
					return false
					
		return true

	#сохранение нагрузок
	doSave : (formName, isIup, addDialog) ->
		if !this.canSubmit(formName, isIup, addDialog)
			return false

		if addDialog
			data = $("[name=MAX_GRADE], [name=IUP], [name=COMPID], [name=Hours]", $("form[name=" + formName + "]"))
			if addDialog
				data = $.merge data, $("input, select", addDialog.$modalContent)
			data = data.serializeArray()
			$.show.processing()
			postTo "/asp/SetupSchool/Calendar/Curriculum/CuriculumLimitsSave.asp", data
		else
			jsSaveForm document.forms[formName]

	#добавление нагрузок по компоненте
	addLimits: (formName, IUP) ->
		#прежде валидируем нагрузки в форме
		if !this.canSubmit(formName, IUP)
			return false
			
		ctrl = this
		model =
			textInputSize: 2
			language: language
			count: settings.grades

		if IUP
			model.components = settings.iupComponentList
		else
			model.components = settings.componentList
			
		if model.components.length == 0 
			$.show.message language.Generic.SetupSchoolCalendar.kAllCurriculumLimitsDefined
			return

		model.grades = do ->
			minGrade = settings.minGrade
			maxGrade = settings.maxGrade
				
			gradeLabels = settings.gradeLabels
				
			if not gradeLabels
				gradeLabels = [minGrade..maxGrade]
				
			gradeLabels

		$.show.modelDialog
			title: language.Generic.SetupSchoolCalendar.kAddComponentLimit
			model: model
			template: addLimitsTpl
			size: BootstrapDialog.SIZE_WIDE
		.then (dialog) ->
			ctrl.doSave formName, IUP, dialog
