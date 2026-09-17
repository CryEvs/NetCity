class EditJournalTemplateManager

	assignTitleTpl: '
		<div class="task-header">Задание</div>
		<div class="assignment-title">
			{{#ifCond typeId "==" @root.constants.assignmentTypes.DKR}}
				<input type="hidden" name="DKRAID" value="{{id}}">
			{{/ifCond}}
			<input type="hidden" name="AID" value="{{id}}">
			<div class="ctx-btns-icons ctx-btns-icons-xs" data-assignid="{{id}}" data-productid="{{productId}}">
				<div class="danger delete assign-btn" title="{{@root.language.Generic.Buttons.kRemove}}"><span class="glyphicon glyphicon-remove"></span></div>
				<div class="primary edit-assign assign-btn" title="{{@root.language.Generic.Grade.kEditAssignment}}"><span class="glyphicon glyphicon-pencil"></span></div>

				{{#if showTestPlan}}
				<div class="test-plan primary assign-btn" title="{{@root.language.Generic.QualityAssessment.kTestPlanResults}}"><span class="glyphicon glyphicon-list-alt"></span></div>
				{{/if}}
				<input type="checkbox" name="MAll_{{id}}" value="{{id}}" tooltip="{{@root.language.Generic.Grade.kCheckUncheckAll}}">
			</div>
			<span title="{{name}}" class="assignment-name">
				{{name}}
			</span>
		
			{{#if laName}}
			<div class="assignment-activity">
				<span>{{laName}}</span>
			</div>
			{{/if}}

			{{#if typeName}}
			<div class="assignment-type">
				<span>{{typeName}}</span>
			</div>
			{{/if}}
		</div>'

	messageAssignmentAdded : '
		{{@root.language.Generic.Grade.kAssignmentAdded}}
		{{#if isTestPlansType}}
			<br />{{@root.language.Generic.Grade.kForFillingTestPlan}}
			<a class="open-testplan-link" data-assignid="{{assignId}}" href="javascript:void(0);" title="{{@root.language.Generic.Grade.kTestPlan}}">
				{{@root.language.Generic.Grade.kTestPlan}}
			</a>
		{{/if}}'

	messageCurriculumNotFilled : '
		{{@root.language.Generic.Curriculum.kCurriculumNotFilled}}
		<br />
		<a class="go-edit-planner-link" href="javascript:void(0);" title="{{@root.language.Generic.Curriculum.kCurriculum}}">
			{{@root.language.Generic.Curriculum.kGoEdit}}
		</a>'

	assignColTpl : '
		<div class="assignment-container assignment-column" id="assignment_{{id}}">
			{{> assignTitle}}

			<div class="results-block">
				{{#each results}}
					<div class="{{IndividualEduc studentId}}">
						<span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" {{#if marked}}checked{{/if}} {{#if readonly}}disabled{{/if}}></span>
						<input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" {{#if readonly}}disabled{{/if}}>
					</div>
				{{/each}}
			</div>
		</div>'

	homeAssignEmptyColTpl : '
		<span class="home-assignments-header">{{language.Generic.Assignment.kHomeAssignment}}</span>
		{{#unless restrictAddHomeAssign}}
			<div class="add-assignments add-homeAssign-btn" title="{{language.Generic.Grade.kAddAssignment}}">
				<span>{{language.Generic.Buttons.kAdd}}</span>
				<i class="icon-plus-sign"></i>
			</div>
			<div class="add-assignments-adaptive">
				<i class="icon-plus-sign add-homeAssign-btn" title="{{language.Generic.Grade.kAddAssignment}}" ></i>
			</div>
		{{/unless}}

		<div class="empty-block">
			{{#each students}}
				<div></div>
			{{/each}}
		</div>'

	homeAssignColTpl : '
		<span class="assignments-header">{{@root.language.Generic.Assignment.kHomeAssignment}}</span>
			{{> assignTitle}}
		<div class="results-block">
			{{#each results}}
				<div class="{{IndividualEduc studentId}}">
					<span><input type="checkbox" name="M_{{../id}}" value="{{studentId}}" {{#if marked}}checked{{/if}} {{#if readonly}}disabled{{/if}}></span>
					<input name="G_{{../id}}" maxlength="{{@root.marksLength}}" size="2" type="text" value="{{result}}" {{#if readonly}}disabled{{/if}}>
				</div>
			{{/each}}
		</div>'

	attendanceColTpl : '
		<div class="attendance-block">
			{{#each attendance}}
				<div class="{{IndividualEduc studentId}}">
					<select name="REASON" {{#if readonly}}disabled{{/if}}>
						<option value=""></option>
						{{#each ../attendanceReasons}}
							<option value="{{mark}}" {{selected ../reason mark}}>{{mark}}</option>
						{{/each}}
					</select>
				</div>
			{{/each}}
		</div>'

	editJournalTpl : '
		<div class="form">
		<div class="editjournal-wrapper">
			<div class="editjournal">



				<div class="assignments-header-block">
					<div id="assignments-header-many" class="assignments-header {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kAssignments}}</div>
				</div>

				<div class="editjournal-left-block task-active">
					<!-- ученики -->
					<div class="studentlist head">
						<div class="student-title">{{language.Common.kStudents}}</div>
						<div class="student-block">
							{{#each students}}
								<div class="student-name student {{IndividualEduc id}}">
									<input type="hidden" name="SID" value="{{id}}" {{#if free}}disabled{{/if}}>
									<span>{{num}}. {{name}}</span>
								</div>
							{{/each}}
						</div>
					</div>

					<!-- Посещаемость -->
					<div class="attendance head">
						<!--<div class="attendance-title">{{language.Generic.Grade.kAttendanceColumn}}</div>-->
						<div class="attendance-title">Посеща-<br>емость</div>
						{{> attendanceCol}}
					</div>

					<!-- Домашняя работа -->
					<div class="home-assignment assignment-column head" id="home-assignment-column">
						{{#if homeAssignment}}
							{{#with homeAssignment}}
							{{> homeAssignCol}}
							{{/with}}
						{{else}}
							{{> homeAssignEmptyCol}}
						{{/if}}

					</div>

				</div>
				<!-- оценки -->
				<div class="assignments-block-wrapper">

					<div class="assignments-block head">


						<div class="div-table-safari">

							{{#each assignments}}
								{{> assignCol}}
							{{/each}}

							<div class="wrapper">
								{{#each students}}
									<div></div>
								{{/each}}
							</div>

						</div>


					</div>


				</div>

				<div class="editjournal-right-block">

					<!-- для клонирования -->
					<div class="new-assignment-container head">

						<div class="assignment-container assignment-column head">

							<div class="assignment-title">
								<span id="assignments-header-new" class="assignments-header-empty {{#unless assignments.length}}hidden{{/unless}}">{{language.Generic.Grade.kCreateAssignmentShort}}</span>
								<span id="assignments-header-no" class="assignments-header {{#if assignments.length}}hidden{{/if}}">{{language.Generic.Grade.kAssignments}}</span>
							</div>

							<div class="add-assignments add-assign-btn" title="{{language.Generic.Grade.kAddAssignment}}">
								<span>{{language.Generic.Buttons.kAdd}}</span>
								<i class="icon-plus-sign"></i>
							</div>

							<div class="results-block results-block-inactive">
								{{#each students}}
									<div></div>
								{{/each}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>'

	setLessonTpl :
		'<select class="form-control" name="LESSONID">
			{{#unless suggestedLessonId}}
				<option value="-1" disabled="disabled" selected="selected">{{language.Grade.kChooseLesson}}</option>
			{{/unless}}
			{{#each lessons}}
				<option value="{{id}}" {{selected ../suggestedLessonId id}}>{{displayName}}{{#if studied}}*{{/if}}</option>
			{{/each}}
		</select>'


	addCommonAssignTpl : '
		<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Assignment.kATAssignmentTheme}}
			</label>
			<div class="col-md-9">
				<input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" autofocus="autofocus">
			</div>
		</div>

		<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Assignment.kATAssignmentType}}
			</label>
			<div class="col-md-9">
				<select name="AType" class="form-control" {{#unless assignmentTypesChoise}}disabled="disabled"{{/unless}}>
					{{#unless typeId}}
					<option value="" disabled="disabled" selected="selected">{{language.Generic.Assignment.kATChooseType}}</option>
					{{/unless}}
					{{#each assignmentTypes}}
						<option value="{{id}}" {{#if typeId}} {{selected ../typeId id}} {{/if}}>{{name}}</option>
					{{/each}}
				</select>
			</div>
		</div>

		<div class="form-group" id="diagnosticWork" style="display: none"></div>'

	diagnosticWorkTpl : '
			<label class="control-label col-md-3">
				Диагностическая работа
			</label>
			<div class="col-md-9">
				<select name="DiagnosticWork" class="form-control" {{#unless assignmentTypesChoise}} disabled="disabled" {{/unless}}>
					{{#unless typeId}}
					<option value="-1_-1" selected="selected">Выберите вариант диагностической работы</option>
					{{/unless}}
					{{#each variants}}
						<option value="{{id}}_{{testPlanId}}">{{diagnosticWork.name}} ({{name}})</option>
					{{/each}}
				</select>
			</div>'

	getHomeAssignFromPlanTpl :
		'<form class="form-horizontal" onsubmit="return false;">
			<div class="form-group">
				<label class="control-label col-md-3">
					{{language.Curriculum.kLesTheme}}
				</label>
				<div class="col-md-9">
					{{#if lessons}}
						{{#ifCond lessons.length "==" 1}}
							<input type="text" class="form-control" name="LESSONFULLNAME" value="{{lessons.[0].displayName}}" disabled="disabled">
							<input type="hidden" name="LESSONID" value="{{lessons.[0].id}}">
						{{else}}
							<select name="LESSONID" class="form-control">
								{{#each lessons}}
									<option value="{{id}}">{{displayName}}</option>
								{{/each}}
							</select>
						{{/ifCond}}
					{{else}}
						Не было уроков изученных
					{{/if}}
				</div>
			</div>
			{{#if lessons}}
			<div class="form-group">
				<label class="control-label col-md-3">
					{{language.Generic.Grade.kHomeAssignmentText}}
				</label>
				<div class="col-md-9">
					<input type="text" class="form-control" name="LESSONHOMEASSIGNMENT" value="" disabled="disabled">
				</div>
			</div>
		</form>
		{{/if}}'

	addHomeAssignCmnTpl :
		'<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Grade.kHomeAssignmentText}}
			</label>
			<div class="col-md-9">
				{{#if fromKTP}}
				<div class="input-group">
				{{/if}}
					<input type="text" class="form-control" name="AN" size="50" maxlength="400" value="{{assignmentName}}" autofocus="autofocus">
				{{#if fromKTP}}
					<span class="input-group-btn">
						<button class="btn btn-default" type="button" id="useLessonHomeAssignBtn" title="Использовать домашнее задание из КТП"><span class="glyphicon glyphicon-book"></span> Из КТП</button>
					</span>
				</div>
				{{/if}}
			</div>
		</div>

		<div class="form-group">
			<label class="control-label col-md-3">
				{{language.Generic.Assignment.kATAssignmentType}}
			</label>
			<div class="col-md-9">
				<span class="form-control form-control-title"><span class="text">{{language.Generic.Assignment.kATHomeWork}}</span></span>
				<input type="hidden" name="AType" value="{{typeId}}" />
			</div>
		</div>'

	addHomeAssignTpl :
		'<form class="form-horizontal" onsubmit="return false;">
			{{> addHomeAssignCmn}}
		</form>'

	addNextHomeAssignTpl : '
		<form class="form-horizontal" onsubmit="return false;">
			<div class="form-group">
				<label class="control-label col-md-3">
					{{language.Generic.Grade.kNextClassmeetingDate}}
				</label>
				<div class="col-md-9">
					<select name="NEXTCMID" class="form-control">
						{{#each classMeetings}}
							<option value="{{id}}">{{name}}</option>
						{{/each}}
					</select>
				</div>
			</div>

			{{> addHomeAssignCmn}}
		</form>'

	addAssignTpl :
		'<form class="form-horizontal" onsubmit="return false;">
			{{> addCommonAssign}}
		</form>'

	filterTpl : 
		'
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4">Предмет</label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<span class="form-control form-control-title">
					<span class="text">{{subjectGroupName}}</span>
				</span>
			</div>
		</div>
		<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4">Учебный период</label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<span class="form-control form-control-title">
					<span class="text">{{termName}}</span>
				</span>
			</div>
		</div>
		{{> cmSelect}}
		{{> lessonSelect}}
		'

	cmSelectTpl :
		'<div class="form-group">
			<label class="control-label col-md-4 col-lg-3 col-sm-4">Занятие</label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				<div class="input-group">
					<select class="form-control" name="CMID">
						{{#each classMeetings}}
							<option value="{{id}}" {{#if selected}} selected {{/if}} >{{name}}</option>
						{{/each}}
					</select>
					<span class="input-group-btn">
						<button title="Следующее занятие" type="button" class="btn btn-default" id="prev-cm"><span class="glyphicon glyphicon-circle-arrow-left"></span></button>
						<button title="Предыдущее занятие" type="button" class="btn btn-default" id="next-cm"><span class="glyphicon glyphicon-circle-arrow-right"></span></button>
					</span>
				</div>
			</div>
		</div>'

	lessonSelectTpl :
		'<div class="form-group" id="lesson-theme-filter-row">
			<label class="control-label col-md-4 col-lg-3 col-sm-4">Тема урока</label>
			<div class="col-md-8 col-lg-5 col-sm-8">
				{{#if subjectPlan.lessonId}}
					<div class="input-group">
						<span class="form-control form-control-title"><span class="text">{{subjectPlan.lessonName}}</span></span>
						<span class="input-group-btn">
							<button id="set-lesson-btn" title="Сменить тему урока" type="button" class="btn btn-default" >
								<span class="glyphicon glyphicon-pencil"></span>
							</button>
						</span> 
					</div>
				{{else}}
					{{#if subjectPlan.subjectPlanId}}
						<div class="input-group">
							<span class="form-control form-control-title"><span class="text">Выберите тему урока</span></span>
							<span class="input-group-btn">
								<button id="set-lesson-btn" title="Выбрать тему урока" type="button" class="btn btn-default">
									<span class="glyphicon glyphicon-pencil"></span>
								</button>
							</span> 
						</div>
					{{else}}
						{{#if subjectPlan.canAssign}}
							<a id="assign-variant-link" href="#" title="Выберите вариант КТП">
								Выберите вариант КТП
							</a>
						{{else}}
							<span class="form-control form-control-title"><span class="text"><нет вариантов КТП></span></span>
						{{/if}}
					{{/if}}
				{{/if}}
				
			</div>
		</div>'

#для поддержки js модульности
module.exports = EditJournalTemplateManager
