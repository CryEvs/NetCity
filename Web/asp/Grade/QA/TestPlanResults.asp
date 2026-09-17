<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/SchoolSettings_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.
Dim objQAComponent, isExistTestPlan, nAssignmentId, strBackPage
Dim nSGId, strSgName, nTestPlanId
Dim objTestPlan, objResultsPivot
Dim bTestPlanCreated
Dim objCmdAssResults, strSubjClassID, nTermID, strClassMeetingID
Dim nMaxMark, nMinMark
Dim strAssignName, dtCmDay
Dim objHelper, objTestLevelItem, sumPossiblePoints, objAssignments, studenResult, typeAssign, attendanceReasons
Dim bLimitedJournalEditing, nJournalEditingDayLimit, isRusDictation, isRussian_Lng, isDictation, subjectId

Function IsNothing(obj)
	IsNothing = False
	If IsObject(obj) Then
		IsNothing = (obj Is Nothing)
	End If
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("QualityAssessment", "kTestPlanResults") 
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arJournalEditSelf) Or HasUserRight(arJournalEditAll)
End Function

Sub InitComponents()
	Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
	Set objHelper = comHelper.AspHelper
End Sub

Sub ReadState()
	Call InitComponents()
	Call InitSchoolSettings( objNSNET )
	nMaxMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
	nMinMark = arrSchoolSettings( 1, kSSIndex_MinMark )

	nAssignmentId = GetSafeParam("AID", stAssignmentId, 0)
	nSGId = GetSafeLng(Request("SCLID"), 0)
	strBackPage = obTokenMgr.GetData(strToken, stBackPage)
	If Request.Item("BACK").Count > 0 Then
		strBackPage = Request.Item("BACK")
	End If
	
	strSubjClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubjClass), Null)
	nTermID = CLng(GetSafeParam("TERMID", stCurrTerm, Null))	

	strClassMeetingID = GetSafeParam("CMID", stClassMeetingID, "0")

	Set objTestPlan = objQAComponent.GetTestPlanForAssignment(nAssignmentId)
	bTestPlanCreated = Not IsNothing(objTestPlan)

	If bTestPlanCreated Then 
		nTestPlanId = objTestPlan.Id
		Set objTestLevelItem = objHelper.GetEnumItem(objHelper.Enums.TestLevel, objTestPlan.TestLevel)
	Else
		nTestPlanId = 0
	End If

	bLimitedJournalEditing = objNSNETWork.IsLimitedEditingJournalMode(strSchoolID, strUserID)

	If bLimitedJournalEditing Then nJournalEditingDayLimit = objNSNETWork.GetJournalEditTimeLimit(strSchoolID)
	
	readonly = False
	If Not HasUserRight(arJournalEditAll) Then
		readonly = Not objNSNET.IsThereRightEditTestPlan(strUserID, nSGId, nAssignmentId)
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stAssignmentId, nAssignmentId)
End Sub

Sub onHead()
	
%>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/grade/css/test-plan-results.min.css")%>">
<script language="JavaScript" src="<%=GetVersionedJsLink("tableExt.js")%>"></script>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/vendor/pages/css/print-tables.min.css")%>"/>
<script>
	function save() {
		jsSubmit({form: document.TestPlan
			, showProcessing: true
			, action: 'SaveTestPlanResults.asp'
			, onSuccess: function(){
				dataWereChanged = false;
				alert(language.Generic.QualityAssessment.kResultsWasSaved);
			}
		});
	};
	function openPlan() {
		checkForChanges().then(function(){
			ok("TestPlan", "TestPlan.asp");
		});
	};

	function openFNQAReport() {
		checkForChanges().then(function(){
			winOptions =  {
				name: "QAReport",
				specs: "status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=790,height=590",
				winChild: null,
				url: "<%=MakeAbsoluteUrl(obContext.ServerSettings.IntegrationSettings.MsokoUrl) & "/Reports/RenderReport?ReportId=" &IIF(isRusDictation, 101, 100) & "&UserId=" & strUserID & "&Assignmentid=" & nAssignmentId%>"
			};
			windowOpen(winOptions);
		});
	};

	<%If bTestPlanCreated Then 
		%>$(document).ready(function(){<%
		
		If isRusDictation Then%>
			$("input[name^=SCORE_]").navigateInputs({
				getCellInputOptions: function(elem) {
					return {
						maxMark: 100,
						minMark: 0,
						maxLength: 3
					};
				},
				defaultVertical: false
			});

			var sum = function(e){
				if(e.tagName == "TR"){
					var row = e;
				}
				else{
					var row = e.target.parentNode.parentNode;
				}
				var inputs = $("input[name^=SCORE_]", row);
				var sumScore = 0;
				var sumIndex = inputs.length + 3;
				$.each(inputs, function(index,input){
					var value = parseInt(input.value);
					if(isNaN(value))
						return;
					sumScore += value;
				});
				$("td[id^=SumScore_]", row).text(sumScore);
					
				var inCredit = 10;
				if (sumScore < 10)
					inCredit = sumScore;
					
				$("td[id^=in_credit_]", row).text(inCredit);	
			};

			var sumMistake = function(e){
				if(e.tagName == "TR"){
					var row = e;
				}
				else{
					var row = e.target.parentNode.parentNode;
				}
				var inputs = $("input[name^=SCORE_]", row);
				var sumOrth = 0;
				var sumPunk = 0;
				var sumOther = 0;
				var sumIndex = inputs.length + 3;
				$.each(inputs, function(index,input){ 
					var mistakeId = $(input).siblings("input[name=MISTAKEID]").val();
					var value = parseInt(input.value);
					if(isNaN(value))
						return;
					else{
						switch (mistakeId) {
							case "0":
								sumOrth += value;
								break
							case "1":
								sumPunk += value;
								break
							case "2":
								sumOther += value;
								break
						};
					};
				});
				$("td[id^=orthographic_]", row).text(sumOrth);
				$("td[id^=punktogramma_]", row).text(sumPunk);
				$("td[id^=other_]", row).text(sumOther);
			};

			var getRecomResult = function(row){
				var sumMistake = parseInt($("td[id^=SumScore_]", row).text());
				var sumMistakePunk = parseInt($("td[id^=punktogramma_]", row).text());
				var sumMistakeOrth = parseInt($("td[id^=orthographic_]", row).text());
				var sumMistakeOther = parseInt($("td[id^=other_]", row).text());
				var sumOrthAndOtrer = sumMistakeOrth + sumMistakeOther/2;
				
				var sum = sumOrthAndOtrer + sumMistakePunk;
				if(sum <= 1 ){
					return 5;
				}

				if(sum <= 4 && sumOrthAndOtrer <= 3){
					return 4;
				}

				if(sum <= 8 && sumOrthAndOtrer <= 4){
					return 3;
				}

				if(sum <= 14 && sumOrthAndOtrer <= 8){
					return 2;
				}
				
				return 1;
			}

			var calcRec = function(ss){
				var tr = ss.find("tr");
				for (var i = 3; i < tr.length; i++){
					sumMistake(tr[i]);
					sum(tr[i]);
					calcRecommended(tr[i]);
				};
			};

			$("input[name^=SCORE_]").bind("change", sumMistake);

		<%Else%>

			$("input[name^=SCORE_]").navigateInputs({
				getCellInputOptions: function(elem) {
					var cellIndex = $("td", elem.parentNode.parentNode).index(elem.parentNode);
					var maxScoreRow = $(elem.parentNode.parentNode.parentNode.rows[2]);
					var maxMark = parseInt($("th:eq(" + (cellIndex - 1) + ")", maxScoreRow).text());
					return {
						maxMark: maxMark,
						minMark: 0,
						maxLength: (maxMark + "").length
					};
				},
				defaultVertical: false
			});
	
			var sum = function(e){
				var row = e.target.parentNode.parentNode;
				var inputs = $("input[name^=SCORE_]", row);
				var sumScore = 0;
				var sumIndex = inputs.length + 2;
				$.each(inputs, function(index,input){
					var value = parseInt(input.value);
					if(isNaN(value))
						return;
					sumScore += value;
				});
				$("td:eq(" + sumIndex + ")", row).text(sumScore);
			};
		
			var getRecomResult = function(row){
				var sumScore = parseInt($("td[id^=SumScore_]", row).text());
				var rec = parseInt(sumScore) / <%=sumPossiblePoints%>;
		
					if (rec < 0.5){
						return 2;
					}
					if (rec < 0.705){
						return 3;
					}
					if (rec < 0.905){
						return 4;
					}
					if (rec >= 0.905){
						return 5;
					}
			}
			
			var calcRec = function(ss){
				var tr = ss.find("tr");
				for (var i = 4; i < tr.length; i++){
					calcRecommended(tr[i]);
				};
			};
			
	<%End If%>

		var calcRecommended = function(e){
			if(e.tagName == "TR"){
				var row = e;
			}
			else{
				var row = e.target.parentNode.parentNode;
			}

			var filled = true;
			var recomResult;
					
			if(!$(row).hasClass("readonly-row")){
				$.each($("*[name^=SCORE_]", row), function(index, score){
					if ($(score).val() == ""){
						filled = false;
					}
				});
			}
			else{
				filled = false;
			}

			if (filled){
				recomResult = getRecomResult(row);
			}
			else{
				recomResult = "-";
			};
			
			return $("td[id^=recommended_]", row).text(recomResult);
		};

		$("input[name^=RESULT_]").navigateInputs({
			getCellInputOptions: function(elem) {
				return {
					maxMark: <%=nMaxMark%>,
					minMark: <%=nMinMark%>,
					maxLength: (<%=nMaxMark%> + "").length
				};
			},
			defaultVertical: false
		});

		$("input[name^=SCORE_]").bind("change", sum);
		$("input[name^=SCORE_]").bind("keyup", sum);
		$("input[name^=SCORE_]").bind("change", calcRecommended);
		calcRec($("table"));
	});
	<%End If %>

	function Back(){
		goBack(document.TestPlan,"<%=strBackPage%>");
	}
</script>
<%
End Sub

Sub Main()
	Dim objAssignmentInfo, objGradingComponent, arrForSum, objForSum
	
	strSgName = GetSafeStrParam(objNSNET.GetSubjectClassName(nSGId), Null)
	isRussian_Lng = CBool(InStr(strSgName, obLanguage("Common", "kEGESubjRUSSIAN_LNG")))
	
	Set objAssignmentInfo = objNSNET.GetTeacherAssignmentInfo(nAssignmentId)
	If objAssignmentInfo.EOF Then
		GenerateError obLanguage("Common", "kUnexpErr")
	End If
	strAssignName = objAssignmentInfo("ASSIGNMENTNAME")
	dtCmDay = CDate(objAssignmentInfo("CM_DAY"))
	typeAssign = objAssignmentInfo("TYPEID")
	
	isDictation = typeAssign = PreDefinedAssignmentType_Dictation
	subjectId =  obTokenMgr.GetData(strToken, stCurrSubject)
	isRusDictation = objQAComponent.IsDictation(nAssignmentId, subjectId)

	readonly = IsLimited(dtCmDay)

	If Not bTestPlanCreated Then Exit Sub

	Set objResultsPivot = objQAComponent.GetTestPlanResultsPivot(nSGId, nAssignmentId, nTestPlanId, strCurrYearId, nTermID, studenResult, attendanceReasons)
	TestError obLanguage("QualityAssessment", "kErrGettingTestPlanResults")
	
	Set arrForSum = objResultsPivot.X_Axis

	For Each objForSum In arrForSum
		sumPossiblePoints = sumPossiblePoints + objForSum.PossiblePoints
	Next

End Sub

Sub DrawResults
	Dim nTaskId, i, j
	Dim objStudent, nStudentId, bFree
	Dim objCross, strCrossValue
	Dim arrCrossTable
	Dim nSumScore
	Dim objStudResRs, strRes, recommendedAssessment, X_Axis, Y_Axis, mistakeType
	Dim arrStudentOnIndividualEducForm
	Dim bIndividualEducForm
	Dim strTableRowClass

	If Not bTestPlanCreated Then
		DrawInfo obLanguage("Assignment", "kNotSpecifiedTestPlan"), False
		Exit Sub
	End If

	Set arrStudentOnIndividualEducForm = obTokenMgr.GetData( strToken, stStudentsOnIndividualEducForm )
	If isDictation Then
		DrawInfo obLanguage("Assignment", "kRecomDictationPlan"), False
	Else
		DrawInfo obLanguage("Assignment", "kRecomTestPlan"), False
	End If
	
	arrCrossTable = objResultsPivot.ToArrayWithCustomLabels("Number", "Name", True)
	Set X_Axis = objResultsPivot.X_Axis
	Set Y_Axis = objResultsPivot.Y_Axis%>

	<table class="table table-bordered table-condensed table-thin table-xs table-print"><%
		DrawHeaderTable arrCrossTable, X_Axis
		
		For i = 1 To UBound(arrCrossTable, 1)
			nStudentId = Y_Axis(i-1).Id
			bFree = CBool(instr(Y_Axis(i-1).Name, obLanguage("Common", "kRemoved")))
			bIndividualEducForm = arrStudentOnIndividualEducForm.Contains(nStudentId)

			strTableRowClass = ""
			If bFree Then
				strTableRowClass = "readonly-row"
			End If
			If bIndividualEducForm Then
				strTableRowClass = strTableRowClass & " individual-educ"
			End If

			%><tr class="<%=strTableRowClass%>">
				<td class="student-name text-nowrap cell-text">
					<span><%=i%>. <%=arrCrossTable(i,0)%></span>
				</td>
				
				<td>
					<input type="hidden" name="STUDENT" value="<%=nStudentId%>" />
					<input type="hidden" name="MARKED_<%=nStudentId%>" value="<%=IIF(studenResult.Exists(nStudentId), 1, 0)%>" />
				</td>
				<%
				nSumScore = 0

				For j =1 To UBound(arrCrossTable, 2)
					nTaskId = X_Axis(j-1).Id
					nSumScore = nSumScore + arrCrossTable(i,j)
					mistakeType = X_Axis(j-1).MistakeType
					If readonly or bFree Then
						%><td>
							<%If isRusDictation Then%>
								<input type="hidden" name="MISTAKEID" value="<%=mistakeType%>" />
							<%End If %>
							<%=DB2Value(arrCrossTable(i,j))%>
						</td>
					<%Else%>
						<td class="input-cell input-cell-xs">
							<%If isRusDictation Then%>
								<input type="hidden" name="MISTAKEID" value="<%=mistakeType%>" />
							<%End If %>
							<input type="text" name="SCORE_<%=nStudentId%>_<%=nTaskId%>" value="<%=DB2Value(arrCrossTable(i,j))%>" maxlength="2" size="4" />
						</td>
					<%End If%>
				<%Next

				If isRusDictation Then
					%><td id="orthographic_<%=nStudentId%>"></td>
					<td id="punktogramma_<%=nStudentId%>"></td>
					<td id="other_<%=nStudentId%>"></td><%
				End If%>

					<td id="SumScore_<%=nStudentId%>_<%=nTaskId%>"><%=nSumScore %></td><%

				If isRusDictation Then
					%><td id="in_credit_<%=nStudentId%>"></td><%
				End If

				If readonly or bFree Then
					%><td>
						<%=DB2HTML(studenResult.Item(nStudentId))%>
					</td>
				<%Else%>
					<td class="input-cell input-cell-xs">
						<input type="text" name="RESULT_<%=nStudentId%>_<%=nTaskId%>" value="<%=DB2Value(studenResult.Item(nStudentId))%>" maxlength="2" size="4" />
					</td>
				<%End If

				If isRusDictation Or (Not isRusDictation And Not isDictation) Then
					%><td id="recommended_<%=nStudentId%>"></td><%
				End If %>

				<td id="REASON_<%=nStudentId%>" class="cell-text-center"><%=DB2HTML(attendanceReasons.Item(nStudentId))%></td>
			</tr><%
		Next
		%>
	</table><%
End Sub

Sub onDrawPage()
	Call SetFiltersWidth ("col-md-6 col-lg-5", "col-md-5 col-lg-4", "col-md-7 col-lg-8")
	Call DrawButtonsFilters(True, "TestPlan")%>

	<form name="TestPlan" method="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("SCLID",nSGId, "AID", nAssignmentId, "TESTPLANID", nTestPlanId, "CMID", strClassMeetingID, "ATYPE", typeAssign)) %>
		<br>
		<%Call DrawResults()%>
	</form><%
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	DrawReadonlyRow obLanguage("Filter","kCourseGB"), DB2HTML(strSgName) 
	DrawReadonlyRow obLanguage("Grade","kLessonDate", strFunctionalityType), DB2HTML(dtCmDay)
	DrawReadonlyRow obLanguage("Assignment","kATAssignmentTheme"), strAssignName
	If Not bTestPlanCreated Then Exit Sub
	DrawReadonlyRow obLanguage("QualityAssessment", "kTestLevel"), objTestLevelItem.Name
End Sub

Sub DrawButtons()
	If Not readonly And bTestPlanCreated Then ButtonSave "save();", obLanguage("Common","kSave")
End Sub

Sub DrawLinkButtons()
	If Not bTestPlanCreated And readonly Then Exit Sub
	Button "openPlan();", obLanguage("QualityAssessment", "kTest"), obLanguage("QualityAssessment", "kTestPlan"), "fa icon-list-ol"
End Sub

Function IsLimited( dtDate )
	IsLimited = bLimitedJournalEditing And (NSNow()-dtDate > nJournalEditingDayLimit)
End Function

Sub DrawHeaderTable(arrCrossTable, X_Axis)
	Dim objTask, objTestTaskMistakeType, objTestTaskDiffItem

	If isRusDictation Then
		'построение шапки таблицы для протокола КР по русскому языку и диктанту
		%><tr>
			<th colspan="1" rowspan="3"><%=obLanguage("Grade", "kStudentsColumn", strFunctionalityType)%></th>
			<th></th>
			<th colspan="<%=UBound(arrCrossTable, 2)%>" ><%=obLanguage("QualityAssessment", "kNumberOfErrors")%></th>			
			<th colspan="5"><%=obLanguage("ClassManagement", "kSumm")%></th>
			<th rowspan="3"><%=obLanguage("Common", "kMark")%></th>
			<th rowspan="3"><%=DB2HTML_BR(obLanguage("QualityAssessment", "kRecommendedAssessment"))%></th>
			<th rowspan="3"><%=obLanguage("Grade", "kAttendanceColumn")%></th>
		</tr>
		<tr>
			<th>№</th><%
			For Each objTask In X_Axis
				%><th><%=objTask.Number%></th><%
			Next%>
			<th rowspan="2">О</th>
			<th rowspan="2">П</th>
			<th rowspan="2">Д</th>
			<th rowspan="2"><%=DB2HTML_BR(obLanguage("QualityAssessment", "kSumTaskMistake"))%></th>
			<th rowspan="2"><%=obLanguage("QualityAssessment", "kTaskMistakeInCredit")%></th>
		</tr>
		<tr>
			<th><%=DB2HTML_BR(obLanguage("QualityAssessment", "kTaskMistakeTypeFull"))%></th><%
			For Each objTask In X_Axis
				Set objTestTaskMistakeType = objHelper.GetEnumItem(objHelper.Enums.TaskMistakeType, objTask.MistakeType)
				%><th class="text-vmiddle"><%=objTestTaskMistakeType.Abbrev%></th><%
			Next%>
		</tr><%
	Else
		'построение шапки таблицы для протокола КР общего типа
		%><tr>
			<th colspan="1" rowspan="4"><%=obLanguage("Grade", "kStudentsColumn", strFunctionalityType)%></th>
			<th colspan="<%=UBound(arrCrossTable, 2) + 1%>" ><%=obLanguage("QualityAssessment", "kTestTaskScore")%></th>
			<th rowspan="4"><%=obLanguage("QualityAssessment", "kTotalPoints")%></th>
			<th rowspan="4"><%=obLanguage("Common", "kMark")%></th><%
			If Not isDictation Then
				%><th rowspan="4"><%=DB2HTML_BR(obLanguage("QualityAssessment", "kRecommendedAssessment"))%></th><%
			End If %>
			<th rowspan="4"><%=obLanguage("Grade", "kAttendanceColumn")%></th>
		</tr>
		<tr>
			<th>№</th><%
			For Each objTask In X_Axis
				%><th><%=objTask.Number%></th><%
			Next%>
		</tr>
		<tr>
			<th><%=obLanguage("QualityAssessment", "kMaxScore")%></th><%
				For Each objTask In X_Axis
					%><th><%=objTask.PossiblePoints%></th><%
				Next%>
		</tr>
		<tr>
			<th><%=obLanguage("QualityAssessment", "kTaskDifficult")%></th><%
				For Each objTask In X_Axis
					Set objTestTaskDiffItem = objHelper.GetEnumItem(objHelper.Enums.TaskDifficult, objTask.Difficult)
					%><th><%=objTestTaskDiffItem.Abbrev%></th><%
				Next%>
		</tr><%
	End If

End Sub
%>
