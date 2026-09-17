<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objParams, strParamID, objItems

Dim strSubjectID, strGradeID, strBackPage, arrPreGrades, bPreSchool, strGradeName, nSubjectGroupId
Dim rsSGs, rsVariantsSGs, objSG

Function GetPageTitle()
	GetPageTitle = obLanguage("Curriculum","kTitleVariantsCSGs",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLessonPlanning
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbLessonsPlans
 End Function

Function hasUserRightsOnPage()
	If HasUserRight(arCurrMgmCreate) Then hasUserRightsOnPage = True : Exit Function
	hasUserRightsOnPage = HasUserRight(arCurrMgmCreateAll)
End Function

Sub ReadState()

	nSubjectGroupId = GetSafeLng(Request("SGID"), 0)
	If nSubjectGroupId <> 0 Then
		Set objSG = objNSNET.GetSubjectGroupInfo(nSubjectGroupId)

		strSubjectID = GetSafeID(objSG("SUBJECTID"), Null)
		strGradeID = GetSafeID(objSG("GRADE"), Null)

		Call obTokenMgr.SetData(strToken, stCurrGrade, strGradeID)
	Else
		strSubjectID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubject), Null)
		strGradeID = GetSafeID(obTokenMgr.GetData( strToken, stCurrGrade), Null)
	End If

	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
	If bPreSchool Then
			arrPreGrades = GetArrGrades(strFunctionalityType,1,0,0)
			strGradeName = arrPreGrades (1,Clng(strGradeID))
	End If
	strBackPage = GetSafeStr( obTokenMgr.GetData(strToken,stBackPage), -1, "VariantsEdit.asp")
End Sub

Sub Main()
	Dim nTeacherID
	nTeacherID=IIf( HasUserRight(arCurrMgmCreateAll) ,-1, strUserID)
	Set rsSGs = objNSNET.GetSGsUseLessons(strCurrYearID, strSubjectID, strGradeID, nTeacherID)
	Set rsVariantsSGs = objNSNET.GetAssignedVariants2SGs(strCurrYearID, strSubjectID, strGradeID, nTeacherID)
End Sub

Sub onHead()%>
<SCRIPT><!--
	function SaveChanges() {
		var form=document.forms['MainForm'];
		form.ACT.value = 'edit';
		ok_check_db( 'MainForm', '' );
	}

	function Back() {
		goBack(document.MainForm, '<%=strBackPage%>');
	}
//--></SCRIPT><%
End Sub

Sub DrawFilters( strForm )
	Dim strCurrYearName

	strCurrYearName = obTokenMgr.GetData(strToken, "CurrYearName")
	DrawTitleRow obLanguage("Common","kSchoolYear"), strCurrYearName
	DrawTitleRow obLanguage("Filter","kCourseGB"), objNSNET.GetSubjectName(strSubjectID)
	DrawTitleRow obLanguage("Filter","kClassGB", strFunctionalityType), IIF(bPreSchool, strGradeName, strGradeID)
End Sub

Sub DrawButtons()
	ButtonSave "SaveChanges()", obLanguage("Common","kSave")
	ButtonReset "resetScreen('MainForm');", obLanguage("Common","kReset")
End Sub

Sub onDrawPage()
	%><form NAME="MainForm" action="VariantsCSGsSave.asp" METHOD="POST">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("ACT", "") )%><%

		Call DrawButtonsFilters( True, "View" )%>
		<div class="row">
			<div class="col-md-8">
				<%Call DrawVariantsTable() %>
			</div>
		</div>
	</form><%
End Sub

Sub DrawVariantsTable()
	Dim nPlanID, nSgPlanId, nLessonCnt
	Dim bAssignedSgVariant, nSgUsedLessonsCnt, nSgId
	Dim bVariantMissing
	If rsSGs.EOF Then
		DrawInfo obLanguage("Curriculum","kEmptyClassSubjectGroupList",strFunctionalityType), False
		Exit Sub
	End If

	%>
	<table class="table table-bordered">
		<tr>
			<th><%=obLanguage("Curriculum","kVariant")%></th>
			<%While Not rsSGs.EOF
				%>
				<input type="hidden" name="SGID" value="<%=rsSGs("ID")%>">
				<th><%=DB2HTML(rsSGs("NAME"))%></th>
				<%
				rsSGs.MoveNext
			Wend%>
		</tr>
		<%

		While Not rsVariantsSGs.EOF
			%><tr><td><%=DB2HTML(rsVariantsSGs("VARIANTNAME"))%></td><%
			nPlanID = CLng(rsVariantsSGs("PLANID"))
			rsSGs.MoveFirst
			While Not rsSGs.EOF
				nSgId = rsSGs("ID")
				nSgPlanId = GetSafeLng(rsSGs("PLANID"), -1)

				bAssignedSgVariant = (nPlanID = nSgPlanId)
				nSgUsedLessonsCnt = GetSafeLng(rsSGs("usedLessonsCnt"), 0)

				If bAssignedSgVariant Then
					'если данный вариант назначен данной ПГ
					If nSgUsedLessonsCnt > 0 Then
						%>
						<td class="text-center">
							(<%=(nSgUsedLessonsCnt & " " & obLanguage("Curriculum","kHoursS"))%>) <input type="hidden" name="SGID_<%=nSgId%>" value="<%=nPlanID%>" />
						</td>
						<%
					Else
						%>
						<td class="text-center" bgcolor="#fff7da">
							<input type="radio" name="SGID_<%=nSgId%>" value="<%=nPlanID%>" checked onclick="dataChanged()">
						</td>
						<%
					End If
				Else
					bVariantMissing = False
					If nSgPlanId > 0 Then
						bVariantMissing = Not rsVariantsSGs.ExistsByField("PLANID", nSgPlanId)
					Else
						bVariantMissing = nSgUsedLessonsCnt > 0
					End If

					If bVariantMissing Then
						'назначенного варианта ПГ нет в списке - нужно дать возможность выбрать - чтобы исправить эту коллизию в интерфейсе
						%>
						<td class="text-center" style="background-color: silver;">
							<input type="radio" name="SGID_<%=nSgId%>" value="<%=nPlanID%>" onclick="dataChanged()">
						</td>
						<%
					ElseIf nSgUsedLessonsCnt > 0 Then
						'у ПГ есть используемые уроки и назначенный вариант есть в списке
						%><td>&nbsp;</td><%
					Else
						'у ПГ нет использованных уроков - можно менять
						%>
						<td class="text-center" bgcolor="#fff7da">
							<input type="radio" name="SGID_<%=nSgId%>" value="<%=nPlanID%>" onclick="dataChanged()">
						</td>
						<%
					End If
				End If
				rsSGs.MoveNext
			Wend
			%></tr><%
			rsVariantsSGs.MoveNext
		WEnd
		rsSGs.MoveFirst
		%>
		<tr>
			<th><%=obLanguage("Common","kNotChoosen")%></th><%
			While Not rsSGs.EOF
				nSgUsedLessonsCnt = GetSafeLng(rsSGs("usedLessonsCnt"), 0)
				bAssignedSgVariant = (-1 = GetSafeLng(rsSGs("PLANID"), -1))
				nSgId = rsSGs("ID")
				If nSgUsedLessonsCnt > 0 Then
					%><th>&nbsp;</th><%
				Else
					%>
					<th>
						<input type="radio" name="SGID_<%=nSgId%>" value="0" <%If bAssignedSgVariant Then%>checked<%End If%> onclick="dataChanged()">
					</th>
					<%
				End If
				rsSGs.MoveNext
			Wend%>
		</tr>
	</table>
	<%
End Sub
%>

