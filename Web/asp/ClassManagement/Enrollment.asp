<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterTeachers.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjGroups.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const clrSelected = " bgcolor=""#FEE6C"""
Const clrConflicted = " bgcolor=""#FE9595"""

Dim bEmpty, bClassesExist
Dim objStudsRs
Dim bClassHasGroups
Dim bCanEditAll, bCanEditPart
Dim arrGroupAccess, strGroupAccess
Dim objClassGroups
Dim bSubjectFiltered
Dim bManyGroups, nStudCount
Dim bIsAnyEdit
Dim bCanExpandToNextPeriods
Dim bInitailRO, bOfferCopyStudentsGroup

Function GetPageTitle()
	GetPageTitle = obLanguage("Common","kClass",strFunctionalityType) & obLanguage("ClassManagement","kTitleEnrollment")
End Function

Function hasUserRightsOnPage()
	If HasUserRight( arClassMgmViewClassSubjAll ) Then hasUserRightsOnPage = True : Exit Function
	hasUserRightsOnPage = HasUserRight(arClassMgmEnrollClass) Or HasUserRight(arEnrollSelf)
' для arEnrollSelf - ниже подробнее рассматривается, есть ли у пользователя право; если нет, то он не допустится, вернее будет режим readonly.
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbEnrlClass
 End Function

Sub ReadState()
	bInitailRO = readonly ' Ниже readonly может переопределяться, а важно знать именно первоначальное значение

	Call InitYearClasses_IUP()
	bClassesExist = (strClassID_IUP <> "0")
	If Not bClassesExist Then Exit Sub

	Call InitTermsForClass_IUP( False )
	If strTermID = "0" Then Exit Sub

	Call InitSubjectsWithGroups_IUP(Not bIsIupGrade, strTermID)
	If strSubjectID = "0" Then Exit Sub

	bCanExpandToNextPeriods = False
	If Not readonly Then
		If Not objNSNET.IsLastTerm(strTermID) Then
			bCanExpandToNextPeriods = True
		End If
	End If

	If bIsIupGrade Then
		Call InitIupLevelsForTermGradeSubj(strTermID, strIupGrade, strSubjectID, False)
		' Здесь должен быть strIupLevelID <> "0", иначе InitSubjectsWithGroups_IUP вернул бы strSubjectID = "0"

		Call InitIupClassesForTermAndGrade(strTermID, strIupGrade)
		If strIupClassId = "-1" Then
			readonly = True
		Else
			bCanExpandToNextPeriods = False ' Для ИУП можно распространять состав подгрупп на следующие периоды - только для всех классов сразу.
		End If
	End If

	bSubjectFiltered = (strSubjectID <> "-1")
	If Not bSubjectFiltered Then
		readonly = True
	End If
End Sub

Sub WriteState()
	WriteClass_IUP
	WriteTerm
	If bIsIupGrade Then
		WriteIupLevel
		WriteIupClass
	End If
	Call obTokenMgr.SetData(strToken, stCurrSubject, strSubjectID)
End Sub

Sub Main
	Dim strCSGID_1, strSubjectID_1, strTeacherID
	Dim ind, bGroupAccess, bGroupAccessNo
	Dim objRsGroups
	Dim bIsFirstTermSelected, bIsStudentsInGroups
	Dim bModular

	bEmpty = True ' Students in class
	bClassHasGroups = False
	bManyGroups = False
	nStudCount = 0

	If (Not bClassesExist) Or (strTermID = "0") Or (strSubjectID = "0") Then
		readonly = True
		Exit Sub
	End If

	If bIsIupGrade Then
		Set objStudsRs = objNSNET.GetStudentsGroups_IUP(strIupGrade, strIupLevelID, strTermID, strSubjectID, strIupClassId, Not readonly)
		bEmpty = objStudsRs.EOF
		If Not bEmpty Then
			Set objClassGroups = objNSNET.GetGradeGroups_IUP(strIupGrade, strIupLevelID, strTermID, strSubjectID, strIupClassId)
		End If
	Else
		Set objStudsRs = objNSNET.GetStudentsGroups(strClassID, strTermID, strSubjectID, Not readonly)
		bEmpty = objStudsRs.EOF
		If Not bEmpty Then
			Set objClassGroups = objNSNET.GetClassGroups(strClassID, strSubjectID)
		End If
	End If

	If Not bEmpty Then
		bClassHasGroups = Not objClassGroups.EOF
		If Not bIsIupGrade Then ' Для ИУП следующий флаг не нужен
			bManyGroups = objClassGroups.RecordCount > 1
		End If
		nStudCount = objStudsRs.RecordCount
	End If

	bCanEditAll = False
	bCanEditPart = False
	bIsAnyEdit = False

	If (Not bClassesExist Or bEmpty Or Not bClassHasGroups) Then
		readonly = true
		bCanExpandToNextPeriods = False
	End If

	'********************************************************************************************************************
	' Здесь определяется подробно, набор в какие подгруппы можно редактировать.
	' Для копирования состава учеников в последующие периоды - упрощение: право частичного редактирования состава подгрупп -
	' даёт право полного копирования состава выведенных подгрупп на следующие периоды.
	If Not readonly Or bCanExpandToNextPeriods Then
		If HasUserRight(arClassMgmEnrollClass) Then
			bCanEditAll = True
		ElseIf HasUserRight(arEnrollSelf) Then
			If objNSNET.IsClassChief(IIf(bIsIupGrade, strIupClassId, strClassID), strUserID) Then
				bCanEditAll = True
			Else
				ReDim arrGroupAccess(objClassGroups.RecordCount - 1)
				bGroupAccess = False
				bGroupAccessNo = False
				ind = 0
				strUserID = GetSafeID(strUserID, "0")
				While Not objClassGroups.EOF
					strCSGID_1 = GetSafeID(objClassGroups("ID"), Null)
					strSubjectID_1 = GetSafeID(objClassGroups("SUBJECTID"), Null)
					strTeacherID = GetSafeID(objClassGroups("TEACHERID"), Null)
					bModular = GetSafeBool(objClassGroups("ISMODULAR"), False)
					If strTeacherID = strUserID And Not bModular Then
						arrGroupAccess(ind) = strCSGID_1
						bGroupAccess = True
					Else
						arrGroupAccess(ind) = "0"
						bGroupAccessNo = True
					End If
					ind = ind + 1
					objClassGroups.MoveNext
				WEnd
				objClassGroups.MoveFirst

				If Not bGroupAccess Then
					readonly = True
					bCanExpandToNextPeriods = False
				ElseIf Not bGroupAccessNo And Not bSubjectFiltered Then
					bCanEditAll = True
				Else
					bCanEditPart = True
				End If
			End If
		Else ' HasUserRight( arClassMgmViewClassSubjAll )
			readonly = True
			bCanExpandToNextPeriods = False
		End If
	End If

	If (bCanEditAll And bSubjectFiltered) Or bCanExpandToNextPeriods Then ' для bSubjectFiltered возможно только частичное редактирование (bCanEditPart = True)
		ReDim arrGroupAccess(objClassGroups.RecordCount - 1)
		ind = 0
		While Not objClassGroups.EOF
			strCSGID_1 = GetSafeID(objClassGroups("ID"), Null)
			bModular = GetSafeBool(objClassGroups("ISMODULAR"), False)

			If bModular Then
				arrGroupAccess(ind) = "0"
			Else
				arrGroupAccess(ind) = strCSGID_1
			End If
			ind = ind + 1

			objClassGroups.MoveNext
		WEnd
		objClassGroups.MoveFirst

		If bCanEditAll And bSubjectFiltered Then ' для bSubjectFiltered возможно только частичное редактирование (bCanEditPart = True)
			bCanEditPart = True
		End If

		If bCanExpandToNextPeriods Then
			' Надо уточнить, а есть ли реально кого и куда копировать. В последующих периодах должна быть хотя бы одна незаполненная учениками подгруппа
			' из списка представленных и заполненных подгрупп. Если условие не выполняется, то и саму кнопку не показываем.
			strGroupAccess = Join(arrGroupAccess, ",")
			bCanExpandToNextPeriods = objNSNET.CanExpandStudentsGroupsToNextPeriods(strCurrYearID, strTermID, strGroupAccess)
		End If
	End If
	
	'********************************************************************************************************************
	' #13538
	' Определяем, надо ли предложить копирование состава из предыдущего периода.
	' Главные условия для "не надо" - глобальный флаг ReadOnly, либо сейчас выбран "первый" период из возможных, либо уже кто-то выбран.
	' Для ИУП-параллели речь о копировании можно вести, только если выбраны "Все" ИУП-классы, а не конкретный ИУП-класс.
	' Также учитываем bCanExpandToNextPeriods, в смысле, если он True, то значит, что кто-то выбран.

	bOfferCopyStudentsGroup = False
	If Not bInitailRO Then
		If Not objTerms.EOF Then

			' Определяем, выбран ли сейчас первый период из списка возможных, до этого должны быть корректно определены objTerms, strTermID
			bIsFirstTermSelected = (GetSafeID(objTerms("TERMID"), "0") = CStr(strTermID))
			If Not bIsFirstTermSelected Then

				' Для ИУП-параллели речь должны быть выбраны "Все" ИУП-классы
				If Not (bIsIupGrade And strIupClassId <> "-1") Then

					If bCanExpandToNextPeriods Then
						bIsStudentsInGroups = True
					Else
						bIsStudentsInGroups = False
						If Not bEmpty Then
							If Not objStudsRs.EOF Then
								Do While Not objStudsRs.EOF

									Set objRsGroups = objStudsRs.Fields()("rsStudGroups").Value
									If Not objStudsRs.EOF Then
										bIsStudentsInGroups = objRsGroups.Exists("GROUP_STUDID is not null")
										If bIsStudentsInGroups Then
											Exit Do
										End If
									End If

									objStudsRs.MoveNext
								Loop
								objStudsRs.MoveFirst
							End If
						End If
					End If

					bOfferCopyStudentsGroup = Not bIsStudentsInGroups
				End If

			End If

		End If
	End If

End Sub

Sub onHead()
	If Not (readonly Or bEmpty) Then
	%><script language="JavaScript" src="<%=GetVersionedJsLink("tableExt.js")%>"></script><%
	End If
%>
<script>
<!--
<%If bClassHasGroups Then%>
function onGroups(){
	var form = document.forms['Enrollment'];
	goBack(form, 'EnrollmentGroup.asp');
}
<%End If%>

<%If bCanExpandToNextPeriods Then%>
function copyStudGroupsToNextPeriods(){
	if (dataWereChanged){
		alert(language.Generic.ClassManagement.kCantCopyUnsavedData);
		return;
	}
	$.show.confirmation(language.Generic.ClassManagement.kConfirmCopyStudGroupsToNextPeriods).then(function(){
		$("input:hidden[name=ACT]", $("form[name=Enrollment]")).val("copy");
		ok_check_db('Enrollment', 'SaveStudentGroup.asp');
	});
}
<%End If%>

<%If Not readonly Then%>

$(document).ready(function() {
	var form = document.forms.Enrollment;
	if ($("input:checkbox[name=STUD_CSG]", form).length == 0) {
		if ($("input:hidden[name=Conflicts]", form).length == 0) {
			$("#edit_buttons", form).addClass("hidden");
		}
	}
	<%If Not bEmpty Then%>
	$("#StudentsTable").addCheckAllRow();
	<%End If%>


	// отдельно запоминаются чекбоксы выделить все, так как текущий ready вызывается позже ready, в котором запоминаются значения элементов на странице
	$(document.Enrollment).rememberState();
});


function saveEnrollment(){
	extDeferred.when (isValidSelection).then(function(){
		$("input:hidden[name=ACT]", $("form[name=Enrollment]")).val("save");
		var saveForm = document.forms['Enrollment'];
		saveForm.action = 'SaveStudentGroup.asp';
		jsSaveForm(saveForm);
	});
}

function isValidSelection()
{
	<%If bManyGroups Then%>
		var form = document.forms.Enrollment;
		for (var i=1; i<=<%=nStudCount%>; i++){
			var studTR = $("#STD_" + i, form);
			if (($("input:hidden[name=STUD_CSG]", studTR).length == 0) && ($("input:checkbox[name=STUD_CSG]:checked", studTR).length == 0)) {
				return $.show.confirmation(language.ClassManagement.kConfirmNoGroupsForStudent);
			}
		}
	<%End If%>
	return true;
}
<%End If%>
//-->
</script>
<%
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	Call DrawYearClasses_IUP( strForm, False, obLanguage("Filter","kNoYearClasses",strFunctionalityType) ) : If bExit Then Exit Sub
	If bIsIupGrade And objTerms.EOF Then
		Call DrawInfo(obLanguage("ClassManagement","kNoSubjectGroupsForGrade",strFunctionalityType), False)
		bExit = True
		Exit Sub
	End If
	Call DrawTerms( strForm ) : If bExit Then Exit Sub
	Call DrawSubjects_Ex( strForm, obLanguage("Filter","kNoClassSubjectsWithGroups",strFunctionalityType), Not bIsIupGrade ) ': If bExit Then Exit Sub
	If bIsIupGrade Then
		Call DrawIupLevels( strForm, False )
		Call DrawIupClasses( strForm )
	End If
End Sub

Sub DrawButtons()
	If Not readonly Or bCanExpandToNextPeriods Then
		%><div id="edit_buttons" style="display: inline;"><%
		If Not readonly Then
			ButtonSave "saveEnrollment();", obLanguage("Common","kSave")
			ButtonReset "resetScreen('Enrollment');", obLanguage("Common","kReset")
		End If
		If bCanExpandToNextPeriods Then
			ButtonCopy "copyStudGroupsToNextPeriods()", obLanguage("ClassManagement","kCopyStudGroupsToNextPeriods")
		End If
		%></div><%
	End If
End Sub

Sub DrawLinkButtons
	If bClassHasGroups Then
		ButtonView "onGroups()", obLanguage("ClassManagement","kBtnGroups",strFunctionalityType)
	End If
End Sub

Sub onDrawPage()
	Dim i
	Dim strOfferCopyMessage, strTermName
	%><form NAME="Enrollment" METHOD="post" ACTION="Enrollment.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("ACT", "", "CLASSNAME", "") )%><%
	If bCanEditPart Or bCanExpandToNextPeriods Then
		For i = 0 To UBound(arrGroupAccess)
			If arrGroupAccess(i) <> "0" Then%>
				<%=WriteHiddenTags( Array("AccessCSG", arrGroupAccess(i)) )%><%
			End If
		Next
	End If

	Call DrawButtonsFilters(bClassesExist And (Not readonly Or bCanExpandToNextPeriods), "Enrollment")
	If bEmpty Then
		Call DrawInfo(IIf(bIsIupGrade, obLanguage("Filter","kNoStudentsInGroupsForFilter"), obLanguage("Filter","kNoStudents",strFunctionalityType)), False)
	End If

	If bOfferCopyStudentsGroup Then
		strTermName = objNSNET.GetTermName(strTermID)
		strOfferCopyMessage = Replace(obLanguage("ClassManagement","kOfferCopyStudentsGroup"), "%", strTermName)
		Call DrawInfo(strOfferCopyMessage, False)
	End If

	If Not bEmpty Then
		Call DrawStudents()
	End If
	%></form><%
End Sub

Sub DrawStudents()
	Dim objCmdGroups, objRsGroups, strStudentID
	Dim bStudInGroup, bInUse
	Dim ind, nPP
	Dim bRO ' local readonly, распространяется на весь столбец
	Dim strVal, strCSGID_2
	Dim bSGTerm
	Dim bConflicts
	Dim bModular

	%>
	<table class="table table-bright-striped table-xs table-thin table-bright-hover" id="StudentsTable">
		<tr>
			<th><%=obLanguage("Filter","kN_PP")%></th><th><%=obLanguage("Common","kDisplayName")%></th><%
			While Not objClassGroups.EOF%>
				<th class="small"><%=DB2HTML(objClassGroups("NAME"))%><br>(<%=DB2HTML(objClassGroups("NICKNAME"))%>)</th><%
				objClassGroups.MoveNext
			WEnd%>
		</tr><%

		bConflicts = False
		nPP = 0
		Set objRsGroups = objStudsRs.Fields()("rsStudGroups").Value
		While Not objStudsRs.EOF
			nPP = nPP + 1
			strStudentID = GetSafeID(objStudsRs("STUDENTID"), Null)%>
			<tr id=STD_<%=nPP%>>
			<td><%=nPP%></td>
			<td><%=DB2HTML(objStudsRs("NAME"))%></td><%
			ind = 0
			While Not objRsGroups.EOF
				bStudInGroup = Not IsDull(objRsGroups("GROUP_STUDID"))
				bModular = GetSafeBool(objRsGroups("ISMODULAR"), False)
				bInUse = Not IsDull(objRsGroups("INUSE"))
				strCSGID_2 = GetSafeID(objRsGroups("ID"), Null)
				strVal = strStudentID & "_" & strCSGID_2
				bSGTerm = Not IsDull(objRsGroups("SG_TERM")) ' True - данная предмето-группа связана с данным учебным периодом

				If Not bConflicts Then
					bConflicts = (Not bStudInGroup And bInUse)
				End If

				If readonly Or bModular Then
					bRO = True
				ElseIf Not bSGTerm Then
					bRO = True
				ElseIf bCanEditPart Then
					bRO = (arrGroupAccess(ind) = "0")
				Else
					bRO = False
				End If

				If bRO Then%>
					<td class="text-center"><%If bStudInGroup Then%>X<%Else%>&nbsp;<%End If%></td><%
				Else
					If bInUse Then%>
						<td class="text-center" <%If bStudInGroup Then%><%=clrSelected%><%Else%><%=clrConflicted%><%End If%> >
							<INPUT TYPE="hidden" NAME="STUD_CSG" VALUE="<%=strVal%>"><INPUT TYPE="hidden" NAME="STUD_CSG_RO" VALUE="<%=strVal%>">X
						</td><%
					Else%>
						<td class="text-center" <%If bStudInGroup Or bInUse Then%><%=clrSelected%><%End If%>>
							<INPUT TYPE="CHECKBOX" NAME="STUD_CSG" VALUE="<%=strVal%>" OnClick="dataChanged();" <%If bStudInGroup Then%>checked<%End If%>>
						</td><%
						bIsAnyEdit = True
					End If
				End If

				ind = ind + 1
				objRsGroups.MoveNext
			Wend%>
			</tr><%
			objStudsRs.MoveNext
		Wend%>
	</table>
	<%
	If bConflicts Then%>
		<%=WriteHiddenTags(Array("Conflicts", "1"))%><%
		Call DrawLegend()
	End If
End Sub

Sub DrawLegend()
%><br>
<table class="NullTable">
	<tr>
		<td valign="top"><table border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td "<%=clrConflicted%>"><img src="<%=strCommonImgFolder%>/transp.gif" width="10" height="10"></td>
			</tr>
		</table></td>
		<td>&nbsp;<%=DB2HTML_BR(obLanguage("ClassManagement","kConflictForStudentGroup"))%></td>
	</tr>
</table><%
End Sub
%>
