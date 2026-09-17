<!-- #INCLUDE FILE=../header1.asp -->
<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterTerms.asp" -->
<!-- #INCLUDE FILE="../scripts/DateInput.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dtCalendar

Function GetPageTitle()
	GetPageTitle = obLanguage("Calendar","kTitleDelLessons")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbClassMeets
 End Function

Sub onHead()
	Call scriptCalendar("frmDeleteLessons", dtYearStart, dtYearEnd)%>

	<script src="/js/libs/jquery.multiple.select/jquery.multiple.select.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="/js/libs/jquery.multiple.select/multiple-select.css"/>

<script>
	function dataChanged() {
		dataWereChanged = false;
	}

	$(document).ready(function () {
		$('select').multipleSelect({
			width: '100%',
			multiple: true,

			multipleWidth: 'auto',
			isOpen: true,
			keeyOpen: true,
			selectAllText: language.Generic.Common.kCheckAll,
			allSelected: language.Generic.Common.kAll,
			countSelected: language.Generic.Calendar.kSelected + " # " + language.Generic.Calendar.kOf + " %"
		});
	});

	function DelLessons() {
		if (isDBBusy()) return false;

		var dtLess = document.frmDeleteLessons.dtLesson.value;
		var dtStart = '<%=Date2Str(dtYearStart)%>';
		var dtEnd = '<%=Date2Str(dtYearEnd)%>';

		var classes = [];
		var grades = [];

		$("select[name=bxClasses] option:selected").each(function () {
			var iupId = $(this).val();
			var split = iupId.split("_");
			var isIup = split[1] == "1";
			if (isIup) {
				grades.push(parseInt(split[0]));
			}
			else {
				classes.push(parseInt(split[0]));
			}
		});



		if (str2date(dtLess) < str2date(dtStart) || str2date(dtLess) > str2date(dtEnd)) {
			alert(language.Generic.Calendar.kLessonWrongDatePeriod);
			return;
		};

		var hasAssignmentAnswers = false;

		var makeDataMessage = function (sg) {
			var s = "";

			if (sg.hasAttendance) { s = s + language.Generic.Calendar.kAttendance + "/" };
			if (sg.hasAssignmenents) { s = s + language.Generic.Calendar.kAssignments + "/" };
			if (sg.hasAssignmenentsWithAnswers) {
				s = s + "<u>" + language.Generic.Calendar.kAssignmentAnswers + "</u>" + "/";
				hasAssignmentAnswers = true;
			};
			if (sg.hasResults) { s = s + language.Generic.Calendar.kResults + "/" };
			if (sg.hasLessons) { s = s + language.Generic.Calendar.kLinkLesson + "/" };
			s = s.substr(0, s.length - 1);

			return s;
		}

		//'обработчик результатов проверки
		var onCheckSuccess = function (delCmInfo) {
			if (delCmInfo == null) {
				alert(language.Generic.Calendar.kLessonNotFound);
				return;
			};

			var oldClassId = 0;
			var strClassWarning, strSgWarning;
			strClassWarning = "";

			var confirms = new Array();

			let addConfirm = function(){
				if (strClassWarning != "") {
					let completeConfirmText = strClassWarning + "\r\n" + language.Generic.Calendar.kMsgConfirmDelLesson;
					if (hasAssignmentAnswers) {
						completeConfirmText += "\r\n" + "<b>" + language.Generic.Common.kImportantMsg  + "</b> " + language.Generic.Calendar.kMsgAssignmentsWithAnswersWillBeSkipped;
					}
					confirms.push(extDeferred.wrapPromise($.show.getConfirmation(completeConfirmText), function () { }, function () { alert(language.Generic.Calendar.kMsgNotDeleted); }));
					hasAssignmentAnswers = false;
				}
			}

			for (var j = 0; j < delCmInfo.length; j++) {
				var sg = delCmInfo[j];

				var classId = sg.classId;
				var className = sg.className;

				var isNewClass = oldClassId != classId;
				var isIupClass = classId < 0;

				var strDataWarning = makeDataMessage(sg);
				strSgWarning = className + "/" + sg.subjectGroupName + " - " + strDataWarning;

				if (!isNewClass) {
					strClassWarning += "\r\n" + strSgWarning;
					continue;
				}

				addConfirm();

				strClassWarning = (isIupClass ? language.Generic.Calendar.kFoundInfoIUP : language.Generic.Calendar.kFoundInfoClass).replace("{0}", className);
				strClassWarning += "\r\n" + strSgWarning;
				oldClassId = classId;
			}

			addConfirm();

			extDeferred.when(confirms).then(function () {
				jsSubmit({
					action: "/webapi/schedule/delete/day",
					method: "delete",
					showProcessing: true,
					contentType: "application/json",
					data: {
						day: str2date(dtLess),
						classId: classes,
						gradeId: grades
					},
					onSuccess: function (response) {
						alert(language.Generic.Calendar.kMsgDeletedSuccess);
					}
				});
			});
		};

		if ($(":checkbox:checked").length == 0) {
			alert(language.Generic.Common.kErrMsgNoChecks);
			return
		}

		extDeferred.when($.show.getConfirmation("<%=obLanguage("Calendar","kWarningConfirmDelMsg", strFunctionalityType)%>".replace("{0}", dtLess))).then(function () {
			jsSubmit({
				action: "/webapi/schedule/delete/day",
				method: "post",
				showProcessing: true,
				contentType: "application/json",
				data: {
					day: str2date(dtLess),
					classId: classes,
					gradeId: grades
				},
				onSuccess: onCheckSuccess
			});
		});
	}

	function Back() {
		goBack(document.frmDeleteLessons, "/angular/school/schedule/edit/");
	}
</script><%
End Sub

Sub Main()
	Call InitYearInfo()
	Call InitYearClasses_IUP

	dtYearEnd = GetLastTermDate(strSchoolYearID)
	dtCalendar = NSNow()
	If dtCalendar > dtYearEnd Then
		dtCalendar = dtYearEnd
	End If
End Sub

Sub DrawClasses()
	Dim OldGrade, flgIUP

	OldGrade = -12345
	flgIUP = False%>

	<select name="bxClasses" multiple="multiple">
		<%While Not objClasses_IUP_rs.EOF
			If OldGrade <> objClasses_IUP_rs("GRADE") And Not flgIUP Then
				If OldGrade <> -12345 Then
					%></optgroup><%
				End If

				OldGrade = objClasses_IUP_rs("GRADE")
				If objClasses_IUP_rs("IS_IUP") = 0 Then
					%><optgroup label="<%=DB2Value(objClasses_IUP_rs("GRADE"))%>"><%
				ElseIf Not flgIUP Then
					flgIUP = true
					%><optgroup label="<%=obLanguage("Calendar", "kIUPMsg")%>"><%
				End If
			End If

			%><option value="<%=DB2Value(objClasses_IUP_rs("ID"))%>"><%=DB2HTML(objClasses_IUP_rs("NAME"))%></option><%

			objClasses_IUP_rs.MoveNext
		Wend%>
		</optgroup>
	</select><%
End Sub

Sub DrawButtons()
	Call ButtonDelEx("DelLessons();", obLanguage("Calendar","kBtnDelLessons"), obLanguage("Calendar","kBtnDelLessons"))%><BR><%
End Sub

Sub onDrawPage()%>
	<FORM NAME="frmDeleteLessons" class="form-horizontal">
		<%=WriteObligatoryTags()%><%

		OpenBtnGroup
		Call DrawButtons()
		CloseBtnGroup%>

		<div class="row">
			<div class="col-md-4"><%
				Call DrawMessage(obLanguage("Calendar", "kWarningMsgDelLessons", strFunctionalityType), "danger", False)%>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4" style="margin-top: 10px;">
				<%Call DrawDateInput( "dtLesson", dtCalendar, obLanguage("Common","kCalendar") )%>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4" style="margin-top: 10px;">
				<%Call DrawClasses%>
			</div>
		</div>
	</FORM><%
End Sub%>