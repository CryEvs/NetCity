<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FiltersCommon.asp -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objQAComponent, arrTestLevels, nSGId, strClassMeetingID, nAssignmentId, nTestPlanId, arrTaskTypeParams, rsTestTasks, bExistsTasks, bIsDkr, bIsInternalDkr
Dim isExistTestPlan, objAttendRs, termID, classMeetingID, nTestLevelId, objTestPlan, objAssignmentInfo, typeAssign, isRusDictation, bFromEm, subjectId, globalYearId, minGrade

Function GetPageTitle()
	GetPageTitle = obLanguage("QualityAssessment", "kTestPlan") 
End Function

Function hasUserRightsOnPage()
	bFromEm = HasUserRight(arEMMsoko)
	hasUserRightsOnPage = HasUserRight(arJournalEditSelf) Or HasUserRight(arJournalEditAll) or bFromEm
	If Not HasUserRight(arJournalEditAll) Then
		readonly = Not objNSNET.IsThereRightEditTestPlan(strUserID, nSGId, nAssignmentId)
	End If
End Function

Sub InitComponents()
	Set objQAComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IQualityAssessmentComponent")
End Sub

Function CanBack()
	CanBack = true
End Function

Sub ReadState()
	Call InitComponents()
	nTestPlanId = GetSafeLng(Request("TestPlanId"), 0)	
	If bFromEm Then
		readonly = GetSafeBool(Request("Published"), false)
		isRusDictation = false
		subjectId = GetSafeLng(Request("SubjectId"), -1)
		typeAssign = PreDefinedAssignmentType_DKR
		bIsDkr = True
		globalYearId =  GetSafeLng(Request("GlobalYearId"), -1)
		minGrade = GetSafeLng(Request("MinGrade"), -1)
	Else
		nSGId = GetSafeParam("SCLID", "SCLID", 0)
		strClassMeetingID = GetSafeParam("CMID", stClassMeetingID, "0")
		nAssignmentId = GetSafeParam("AID", stAssignmentId, 0)

		If nTestPlanId = 0 Then
			Set objTestPlan = objQAComponent.GetTestPlanForAssignment(nAssignmentId)
			If Not IsNothing(objTestPlan) Then nTestPlanId = objTestPlan.Id
		End If
		
		Set objAssignmentInfo = objNSNET.GetTeacherAssignmentInfo(nAssignmentId)
		typeAssign = objAssignmentInfo("TYPEID")
		bIsDkr = typeAssign = PreDefinedAssignmentType_DKR
		If bIsDkr Then
			bIsInternalDkr = objQAComponent.IsInternalDkr(nTestPlanId)
		End if
		If bIsDkr and not bIsInternalDkr Then
			readonly = true
		End If

		subjectId =  obTokenMgr.GetData(strToken, stCurrSubject)
		isRusDictation = objQAComponent.IsDictation(nAssignmentId, subjectId)
	End if

	Set rsTestTasks = objQAComponent.GetTestTasksForTestPlan(nTestPlanId)
	If nTestPlanId <> 0 Then
		nTestLevelId = objQAComponent.GetTestLevelForTestPlan(nTestPlanId)
	End If

	arrTestLevels = objQAComponent.GetTestLevels(bIsDkr, bIsInternalDkr)
	
	If isRusDictation Then
		arrTaskTypeParams = objQAComponent.GetTaskMistakeTypes
	Else
		arrTaskTypeParams = objQAComponent.GetTaskDifficults
	End If
	bExistsTasks = (Not rsTestTasks.EOF)
End Sub

Sub WriteState()
	If bFromEm Then
		Call obTokenMgr.SetData(strToken, "TestPlanId", nTestPlanId)
	Else
		Call obTokenMgr.SetData(strToken, stAssignmentId, nAssignmentId)
		Call obTokenMgr.SetData(strToken, "SCLID", nSGId)
	End If
End Sub

Sub onHead()%>
<script src="/vendor/components/jqueryui/jquery-ui.min.js" type="text/javascript"></script>
<link href="/vendor/components/jqueryui/themes/redmond/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
<script src="/vendor/components/jquery.dynatree/dist/jquery.dynatree.min.js" type="text/javascript"></script>
<link href="/vendor/components/jquery.dynatree/dist/skin-vista/ui.dynatree.css" rel="stylesheet" type="text/css"/>

<style>
	tr.removed {
		background-color: rgb(219, 219, 219);
	}

	.move {
		background-color: white;
	}

	.def-readonly-row{
		background-color:#eee; 
		border: 1px solid #888; 
		border-radius:3px; 
		padding:5px;
		min-height: 32px;
	}
</style>
<script src="/js/Tree.js" type="text/javascript"></script>
<script>
	<%If bFromEm Then%>
		var globalParams = {
			bFromEm: true,
			back: '/angular/em/diagnosticworks/',
			defTestPlanLevel: 3,
			readonly: <%=Bool2JS(readonly)%>,
			userId: <%=strUserId%>,
			assignId: null,
			typeAssign:  <%=DB2Java(typeAssign)%>,
			sgId: null,
			testPlanId: <%=nTestPlanId%>,
			lastTestTaskNumber: 0,
			strContentElementsNumbers: '',
			strContentElementsTitles: '',
			elementsTree: '',
			existsTasks: <%=Bool2JS(bExistsTasks)%>,
			isRusDictation: <%=Bool2JS(isRusDictation)%>,
			globalYearId: <%=globalYearId%>,
			subjectId: <%=subjectId %>,
			minGrade: <%=minGrade%>
		}
	<%Else%>
		var globalParams = {
			bFromEm: false,
			back: '/angular/school/journal/assignments/<%=DB2Java(nAssignmentId)%>/testplan/results/',
			defTestPlanLevel: 3,
			readonly: <%=Bool2JS(readonly)%>,
			userId: <%=strUserId%>,
			assignId: <%=DB2Java(nAssignmentId) %>,
			typeAssign: <%=DB2Java(typeAssign)%>,
			sgId: <%=DB2Java(nSGId)%>,	
			testPlanId: <%=nTestPlanId%>,
			lastTestTaskNumber: 0,
			strContentElementsNumbers: '',
			strContentElementsTitles: '',
			elementsTree: '',
			existsTasks: <%=Bool2JS(bExistsTasks)%>,
			isRusDictation: <%=Bool2JS(isRusDictation)%>
		}
	<%End If%>
	$(document).ready(function() {
		if (!appContext.yearId) {
			$("select[name='LEVELID']").prop("disabled", true);
		}
	});
</script>

<script src="<%=GetVersionedJsLink("jquery.ui.widget.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("jquery.iframe-transport.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedJsLink("jquery.fileupload.js")%>" type="text/javascript"></script>


<script language="JavaScript" src="<%=GetVersionedJsLink("contentElements.js")%>"></script>
<script src="<%=GetVersionedResLink("/static/dist/pages/grade/js/testplan.js")%>" type="text/javascript"></script>
<script> 
	function Back(){
		goBack(document.TestPlan, globalParams.back);
	}
</script>
<%End Sub

Sub Main()
End Sub

Function WordWrap(str)
	WordWrap = Replace(str, " ", "<br />")
End Function

Sub onDrawPage()
	Dim IsDrawButtons
	IsDrawButtons = True%>
	<form name="TestPlan" action="TestPlan.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%If bFromEm Then%>
			<%=WriteHiddenTags(Array("TestPlanId", nTestPlanId, "SubjectId", subjectId,"GlobalYearId", globalYearId, "MinGrade", minGrade,"Published", readonly))%>
		<%else%>
			<%=WriteHiddenTags(Array("SCLID", nSGId, "AID", nAssignmentId, "CMID", strClassMeetingID))%>
		<%end if%>
		<%Call SetFiltersWidth ("col-md-6 col-lg-6", "col-md-5 col-lg-4", "col-md-7 col-lg-8")
		Call DrawButtonsFilters(IsDrawButtons, "TestPlan")%>
	</form>
	<table id="tasks" class="table table-bordered table-condensed testPlan print-block" border="1">
		<thead>
			<tr>
				<th><%=WordWrap(obLanguage("QualityAssessment", "kTestTaskNumber"))%></th><%
				If Not isRusDictation Then%>
					<th><%=WordWrap(obLanguage("QualityAssessment", "kTaskDifficult"))%></th>
					<th><%=WordWrap(obLanguage("QualityAssessment", "kMaxScore"))%></th><%
				Else%>
					<th><%=WordWrap(obLanguage("QualityAssessment", "kTaskMistakeType"))%></th><%
				End If%>
				<th><%=obLanguage("QualityAssessment", "kContentElement")%></th>
				<th><%=obLanguage("QualityAssessment", "kCheckedContentElements")%></th>
				<%If Not readonly Then%>
					<th class="NotPrintable"><%=WordWrap(obLanguage("QualityAssessment", "kMarkForRemoval"))%></th>
					<th class="NotPrintable"><%=WordWrap(obLanguage("QualityAssessment", "kEditTestTask"))%></th>
				<%End If%>
			</tr>
		</thead>
		<tbody style="vertical-align: top;">
			<%While Not rsTestTasks.EOF%>
				<tr id="taskrow_<%=rsTestTasks("Id")%>">
					<input type="hidden" name="testTaskId" value="<%=rsTestTasks("Id")%>"/>
					<td class="number"><%=rsTestTasks("Number")%></td><%
					If Not isRusDictation Then%>
						<td><%=DB2HTML(GetTaskParamsNameById(rsTestTasks("Difficult")))%></td>
						<td><%=DB2HTML(rsTestTasks("PossiblePoints"))%></td><%
					Else%>
						<td><%=DB2HTML(GetTaskParamsNameById(rsTestTasks("MistakeType")))%></td><%
					End If%>
					<td class="contentElementCodes"><%=rsTestTasks("ContentElementsCodes")%></td>
					<td class="contentElementNames"><%=GetContentElementsNamesAdditional(rsTestTasks("ContentElementsNames"), rsTestTasks("ADDITIONAL"))%></td>
					<%If Not readonly Then%>
						<td class="text-center">
							<input type="checkbox" name="deleteTask"/>
						</td>
						<td class="text-center"><%
							Call DrawContextButtons(Array("openEditTaskWindow(" & GetSafeLng(rsTestTasks("Id"), 0) & ")", "", "primary", "glyphicon glyphicon-pencil"), , , "ctx-btns-icons-center")%></td>
					<%End If%>
				</tr><%
				rsTestTasks.MoveNext
			Wend%>
		</tbody>
	</table>
	<div id="existsTestTasks" style="display:none;">
		<%Call DrawInfo (obLanguage("QualityAssessment", "kNotExistsTestPlan"), False) %>
	</div><%
	
	If isRusDictation Then
		Call DrawAdditionDictationTaskWindow
	Else
		Call DrawAdditionTaskWindow
	End If
End Sub

Function GetContentElementsNamesAdditional(contentNames, additional)
	If isDull(contentNames) Then
		If isDull(additional) Then
			GetContentElementsNamesAdditional = ""
		Else
			GetContentElementsNamesAdditional = "<b>"& obLanguage("QualityAssessment", "kAdditional") & ": </b>" & additional
		End If
	Else
		If isDull(additional) Then
			GetContentElementsNamesAdditional = contentNames
		Else
			GetContentElementsNamesAdditional = contentNames & "</br><b>"& obLanguage("QualityAssessment", "kAdditional") & ": </b>" & additional
		End If
	End If
End Function

Sub DrawButtons()
	If Not readonly Then
		%><div class="display-inline"><%Call ButtonAddEx("openAdditionTaskWindow()", obLanguage("Common", "kAdd"), obLanguage("Common", "kAdd"))%></div><%
		%><div id="deleteTestPlanButton" class="display-inline" style="display:none;"><%
		Call ButtonDelEx("deleteTasks()", obLanguage("QualityAssessment", "kDeleteSelectedTestTask"), obLanguage("QualityAssessment", "kDeleteSelectedTestTask"))		
		if not bIsDkr or (bIsDkr and bIsInternalDkr) Then
			Call ButtonDelEx("deleteTestPlan()", obLanguage("QualityAssessment", "kDeleteTestPlanFull"), obLanguage("QualityAssessment", "kDeleteTestPlanShort"))
		end if
		%></div><%
	End If
End Sub

Sub DrawLinkButtons()
	If Not readonly Then
		%><div id="importTestPlanButton" class="display-inline" style="display:none;"><%
			Call ButtonImport("_import();", obLanguage("QualityAssessment","kImportTestPlan")) %>
		</div><%
	End If
	%><div id="exportTestPlanButton" class="display-inline" style="display:none;"><%
		Call ButtonExportCommonEx( "exportTestPlan()", "Экспорт Плана контрольной работы", "Экспорт Плана контрольной работы")%>
	</div><%
End Sub

Sub DrawFilters(strForm)
	%><div id="popUpTestLevel"><%Call DrawEnumFilterRow(strForm, obLanguage("QualityAssessment", "kSelectTestLevel"), "LEVELID", arrTestLevels, nTestLevelId, Null)%></div><%
End Sub

Sub DrawAdditionTaskWindow()%>
	<form name="AdditionTask" method="post">
		<%=WriteHiddenTags(Array("tree", "", "taskId", ""))%>
	</form>

	<script type="text/html" id="additionTask">
		<div class="form-horizontal"><%
			SetFiltersWidth "", "col-md-3", "col-md-9"

			DrawSelectNamedEntitiesArrRowAux obLanguage("QualityAssessment", "kTaskDifficult")&":", "-1", "TASKDIFFICULTID", arrTaskTypeParams, "", " ", Array("placeholder", obLanguage("QualityAssessment","kAlertTaskDifficult"))
			DrawInputRowEx obLanguage("QualityAssessment", "kMaxScore")&":", "", "possiblePoints", "text", "40", "35", "", "placeholder=""" & obLanguage("QualityAssessment","kEnterMaxScore") & """"
				
			OpenFormGroupSpan obLanguage("QualityAssessment", "kContentElement")&":", obLanguage("QualityAssessment", "kContentElementHelp")
			%><div class="def-readonly-row"><div id="tree"></div></div><%
			CloseFormGroup
			
			DrawInputRow obLanguage("QualityAssessment", "kAdditional")&":", "", "ADDITIONAL", "text", "40", "200", ""
			
			OpenFormGroup obLanguage("QualityAssessment", "kCheckedContentElements")&":"
			%><div name="selectedContentElements" class="def-readonly-row">&nbsp;</div><%
			CloseFormGroup
			
			RestoreDefFiltersWidth
				%>
		</div>
	</script><%
End Sub

Sub DrawAdditionDictationTaskWindow()%>
	<form name="AdditionTask" method="post">
		<%=WriteHiddenTags(Array("tree", "", "taskId", ""))%>
	</form>

	<script type="text/html" id="additionTask">
		<div class="form-horizontal"><%
			SetFiltersWidth "", "col-md-3", "col-md-9"
			
			DrawSelectNamedEntitiesArrRowAux obLanguage("QualityAssessment", "kTaskMistakeType")&":", "-1", "MISTAKEID", arrTaskTypeParams, "", "changeMistakeType()", Array("placeholder", obLanguage("QualityAssessment","kAlertTaskMistakeType"))
								
			OpenFormGroupSpan obLanguage("QualityAssessment", "kContentElement")&":", obLanguage("QualityAssessment", "kContentElementHelp")
			%><div class="def-readonly-row"><div id="tree"></div></div><%
			CloseFormGroup
			
			DrawInputRow obLanguage("QualityAssessment", "kAdditional")&":", "", "ADDITIONAL", "text", "40", "200", ""
						
			OpenFormGroup obLanguage("QualityAssessment", "kContentElement")&":"
			%><div name="selectedContentElements" class="def-readonly-row">&nbsp;</div><%
			CloseFormGroup
			
			RestoreDefFiltersWidth
				%>
		</div>
	</script><%
End Sub

Function GetTaskParamsNameById(taskParamId)
	Dim i

	For i = 0 To Ubound(arrTaskTypeParams)
		If DB2Value(arrTaskTypeParams(i).Id) = CStr(taskParamId) Then 
			GetTaskParamsNameById = DB2Value(arrTaskTypeParams(i).Name)
			Exit Function
		End If
	Next
End Function

Function IsNothing(obj)
	IsNothing = False
	If IsObject(obj) Then
		IsNothing = (obj Is Nothing)
	End If
End Function
%>
