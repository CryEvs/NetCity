<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClassSubjects.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterTerms.asp" -->
<!-- #INCLUDE FILE="Total_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Grade/JournalSecurity.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim bNoStudents, arrTerms, objStudentMarksRs
Dim bAll, bEditSelfViewAll, nSgTeacherId, strTeacherID
Dim bIsClassChief
Dim bEditConditional ' Флаг определяет, можно ли редактировать Условников в уже закрытом году
Dim nNextYearID ' ид. следующего года, нужен для Условников

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miJournal
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbTotals
End Function

Function hasUserRightsOnPage()
	bAll = True
	If HasUserRight(arTotalsEditAll) Then hasUserRightsOnPage =true :Exit Function
	If HasUserRight(arTotalsViewAll) Then hasUserRightsOnPage =true :Exit Function
	bAll = False
	If HasUserRight(arTotalsEditSelf) Then hasUserRightsOnPage =true :Exit Function
	hasUserRightsOnPage = HasUserRight(arTotalsViewSelf)
End Function

Sub GetRightsOnPage()
	bEditSelfViewAll = False
'	If readonly Then Exit Sub - #12279
	If HasUserRight(arTotalsEditAll) Then Exit Sub
	If HasUserRight(arTotalsEditSelf) Then
		If HasUserRight(arTotalsViewAll) Then bEditSelfViewAll = True
	Else
		readonly = True
	End If
End Sub

Sub ReadState()
	Dim bIsYearClosed, bCommonSchool
	Dim objYearInfo, nGlobalYearID
	Dim bCheckConditional
	' #12279. В этом месте readonly = True - означает, что год закрыт. Пока на это не смотрим,
	' т.е. далее нам надо определить, будет ли readonly = True - по другим причинам, поэтому считаем пока,
	' что здесь readonly = False. К факту закрытого года вернёмся ниже.
	readonly = False

	strTeacherID = strUserID
	strSubjClassID="0"
	Call GetRightsOnPage()
	If bAll Then
		Call InitYearClasses_IUP()
	Else
		Call InitTeacherClasses_IUP(False)
	End If
	'If objClassesRs.EOF Then strSubjClassID="0" : Exit Sub
	If objClasses_IUP_rs.EOF Then strSubjClassID="0" : Exit Sub
	Call CheckIsClassChief_IUP()
	If bAll Then
		Call InitSubjectGroupsBySubject_IUP()
	ElseIf bIsClassChief Then
		Call InitClassChiefSubjectGroups_IUP(strUserID)
	Else
		Call InitTeacherSubjectGroups_Ex_IUP(strUserID)
	End If

	If strSubjClassID = "0" Then Exit Sub
	nSgTeacherId = objNSNET.GetSubjectGroupTeacher(strSubjClassID)

	If Not readonly Then
		readonly = Not HasUserRightJournalEditAccess( arTotalsEditAll, arTotalsViewAll, arTotalsEditSelf, nSgTeacherId, Empty)
	End If

	Call InitTermsForSubjectGroup( False )
	arrTerms = objTerms.GetRows(,,Array("TERMID", "TERMNAME", "STARTDATE"))

	' #12279. Возвращаемся к уточнению readonly. Здесь также определяем - надо ли проверять наличие условников.
	bCheckConditional = False
	nNextYearID = 0
	If Not readonly Then
		bCommonSchool = (CLng(strFunctionalityType) = kFuncType_Common)
		bIsYearClosed = objNSNET.IsYearClosed(strCurrYearID)

		If bIsYearClosed Then
			readonly = True
			If bCommonSchool Then
				' Только в этом случае возможны условники
				Set objYearInfo = objNSNET.GetYearInfo(strCurrYearID)
				If Not objYearInfo.EOF Then
					nGlobalYearID = objYearInfo("GLOBALYEARID")
					Set objYearInfo = objNSNET.GetSchoolYearForGlobalYear(strSchoolID, nGlobalYearID + 1)
					If Not objYearInfo.EOF Then
						nNextYearID = GetSafeLng(objYearInfo("SCHOOLYEARID"), Null) ' раз текущий год закрыт, то следующий год должен быть обязательно.

						Set objYearInfo = objNSNET.GetSchoolYearForGlobalYear(strSchoolID, nGlobalYearID + 2)
						' Условников проверяем, только пока нет года, на 2 больше, или он Future (CLOSED = 'F'). Дальше уже не смотрим.
						If objYearInfo.EOF Then
							bCheckConditional = True
						Else
							If GetSafeStr(objYearInfo("CLOSED"), 1, "") = "F" Then
								bCheckConditional = True
							End If
						End If
					End If
				End If
			End If
		End If
	End If

	bEditConditional = False
	If bCheckConditional Then
		' Для проверки используем запрос из EditTotal.asp с типом "Итог"
		Set objStudentMarksRs = objNSNET.GetPeriodStudentsMarksList(strSubjClassID, kTotalType, strCurrYearID, True, nNextYearID)
		bEditConditional = Not objStudentMarksRs.EOF
	End If
End Sub

Sub Main
	If Not bIsDebug Then On Error Resume Next
	If strSubjClassID = "0" Then Exit Sub
	Set objStudentMarksRs = objNSNET.GetStudentsMarksList(strSubjClassID)
	TestError obLanguage("Grade","kCannotGetTotals")

	bNoStudents = objStudentMarksRs.EOF
	strTeacherID = nSgTeacherId
End Sub

Sub WriteState()
	WriteClass
	WriteClass_IUP

	Call obTokenMgr.SetData(strToken,stCurrSubjClass, strSubjClassID)
	Call obTokenMgr.SetData(strToken, stCurrTerm, strTermID)
End Sub

Sub onHead()
%>
<link rel="stylesheet" type="text/css" href="<%=GetVersionedResLink("/static/dist/pages/grade/css/totals.css")%>">
<script><!--
<%If Not bNoStudents Then%>
	function GradeEdit( type )
	{
		var form = document.forms['Total'];
		form.elements['TYPE'].value = type;
		ok('Total','EditTotal.asp');
	}
	function TermEdit( termID )
	{
		var form = document.forms['Total'];
		form.elements['TYPE'].value = <%=kTermType%>;
		form.elements['TERM'].value = termID;
		ok('Total','EditTotal.asp');
	}
<%End If%>
//--></script>
<%
End Sub

Function GetFiltersPanelWidth
	GetFiltersPanelWidth = "col-md-12 filters-panel-compact"
End Function

Sub DrawFilters( strForm )
	Call DrawYearClasses_IUP( strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)) ) : If bExit Then Exit Sub
	Call DrawSubjectGroups_IUP( strForm, False, (bAll Or bIsClassChief) ) : If bExit Then Exit Sub
	Call DrawReadonlyRow(obLanguage("Filter","kTeacherGB",strFunctionalityType), DB2HTML(objNSNET.GetUserNickName(strTeacherID)))
	If bNoStudents Then 
		Call DrawInfo(obLanguage("Filter","kNoStudents",strFunctionalityType), False)
		bExit = True
	End If
End Sub

Sub DrawButtons()
End Sub

Sub DrawLinkButtons
	If strSubjClassID <> "0" Then Call DrawPrintButtons()
End Sub

Sub onDrawPage()
	%><form name="Total" action="EditTotal.asp" method="post">
		<%Call DrawButtonsFiltersSingleRow("Total")%>
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("TYPE", "0", "TERM", "0", "EditConditional", IIf(bEditConditional, "1", "0"), "NextYearID", nNextYearID))%>
	</form><%
		
	If bExit Then Exit Sub

	%><div class="row">
			<div class="col-lg-6 col-md-9">
				<%Call DrawTotalTable(objStudentMarksRs)%>
			</div>
	</div><%
End Sub

Function GetGradeLink_( aType, nType )
	GetGradeLink = "<th rowspan=""2"">"& ShowAnchor( "GradeEdit('"& nType&"')", obLanguage("Grade","kEditTotals"), aType , "") &"</th>"
End Function

Function GetGradeLink( aType, nType, nRowSpan, nColSpan )
	GetGradeLink = "<th rowspan=" & nRowSpan & " colspan=" & nColSpan & ">" & ShowAnchor( "GradeEdit('"& nType&"')", obLanguage("Grade","kEditTotals"), aType , "") &"</th>"
End Function

Function GetTermLink( termID )
	GetTermLink = "<th>"& ShowAnchor( "TermEdit('"&  arrTerms(ind_TermID, termID) &"')", obLanguage("Grade","kEditTotals"), DB2HTML(arrTerms(ind_TermName, termID)), "") &"</th>"
End Function

Sub DrawTableHeader
	Dim i
	Dim nExamRowSpan, nExamColSpan, strExamTitle
	Dim strExamTypeID
	Dim readonlyExams

	Call PrepareExamColumn(nExamRowSpan, nExamColSpan, strExamTitle)

	Response.Write "<tr><th rowspan=""2"">"& obLanguage("Grade","kStudentsColumn",strFunctionalityType) &"</th><th colspan="&Ubound(arrTerms, 2)+1&">"& obLanguage("Grade","kPeriodsColumn") &"</th>"

	' #12279. Здесь должно быть обработано сочетание readonly и bEditConditional, т.е. должно быть обеспечено редактирование для Условников, несмотря на readonly.
	' Здесь особенность для типа Экзамены. Если bEditConditional = True (а это возможно только для readonly = True), и при этом типы экзаменов не были назначены
	' (bEmptyExamTypes = True), то их назначить в данном случае уже нельзя, и вся колонка Экзамены получается readonly, без линка.
	' Далее обрабатываем отдельно по типам, т.к. для разных типов надо проверять разные условия для режима "только для чтения".
	readonlyExams = readonly And (Not bEditConditional Or (bEditConditional And bEmptyExamTypes))

	If readonly Then
		Response.write "<th rowspan=""2"">" & obLanguage("Grade","kYearTitle") & "</th>"
	Else
		Response.write GetGradeLink( obLanguage("Grade","kYearTitle"), kYearType, 2, 1 )
	End If
		
	If readonlyExams Then
		Response.write "<th rowspan=" & nExamRowSpan & " colspan=" & nExamColSpan & ">" & DB2HTML(strExamTitle) & "</th>"
	Else
		If nExamTypesCnt < 2 Then
			If nExamTypesCnt = 0 Then
				strExamTypeID = kExamType
			Else
				strExamTypeID = GetSafeID(arrExamTypes(indExamTypeID, 0), Null)
			End If
			Response.write GetGradeLink( strExamTitle, strExamTypeID, nExamRowSpan, nExamColSpan )
		Else
			Response.write "<th rowspan=""" & nExamRowSpan & """ colspan=""" & nExamColSpan & """>" & DB2HTML(strExamTitle) & "</th>"
		End If
	End If

	If readonly And (Not bEditConditional) Then
		Response.write "<th rowspan=2>" & obLanguage("Grade","kTotalTitle") & "</th>"
	Else
		Response.write GetGradeLink( obLanguage("Grade","kTotalTitle"), kTotalType, 2, 1 )
	End If
	Response.write "</tr><tr>"

	If readonly Then
		For i=0 To UBound(arrTerms, 2)
			Response.write "<th>" &  DB2HTML(arrTerms(ind_TermName, i )) & "</th>"
		Next
	Else
		For i=0 To UBound(arrTerms, 2)
			Response.write GetTermLink( i )
		Next
	End If

	Call DrawExamSubColumn(nExamColSpan, Not readonlyExams)

	Response.write "</tr>"
End Sub
%>
