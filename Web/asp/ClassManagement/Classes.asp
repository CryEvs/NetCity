<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/ClassManagement/Classes_inc.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kFilterForm = "FilterForm"
Const kForClasses = True

Dim nMaster
Dim bOk, bNoTeachers, bNoHours

Function GetPageTitle()
	GetPageTitle = obLanguage("ClassManagement","kTitleClasses",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningGroups
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbCrtClass
 End Function

Function hasUserRightsOnPage()
	If HasUserRight( arClassMgmCreateClass ) Then bAll=True :  hasUserRightsOnPage = True: Exit Function
	If HasUserRight( arClassMgmViewClassSubjAll ) Then bAll=False : hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub SpecialMain()
	bOk = True
	bNoTeachers = False
	bNoHours = False

	If objTeachersRs.EOF Then
		bNoTeachers = True
		bOk = False
	End If
	strEditSubjectTeachersScriptName = "/asp/SetupSchool/Calendar/EditSubjectTeachers.asp"
	If objGrades.EOF Then
		bNoHours = True
		bOk = False
	End If
	strClassesRelaysScriptName = "/asp/ClassManagement/ClassesRelays.asp"
End Sub

Sub onHead()
	onSpecialHead
End Sub

Sub DrawFilters( strForm )
End Sub

Sub DrawButtons()
	DrawSpecialButtons
End Sub

Sub DrawNoAssocClassesRooms
	Dim strClassName, strCurId
	
	OpenPanelEx "", "", "", False, "panel-info"
		rw "Внимание! Для корректной выгрузки данных по контингенту в ФСПЭО необходимо указание для всех групп помещения проведения занятий."
		rw "<br>"
		rw "Список групп с неуказанным помещением:"
		rw "<br>"

		While Not objNoAssocClassesRooms.EOF
			strClassName = DB2HTML( objNoAssocClassesRooms("CLASSNAME") )
			strCurId = CStr(objNoAssocClassesRooms("CLASSID"))
			%>

			<div>
				<%Call DrawCell( ShowAnchor( "editClassProfile('" & strCurId & "')", obLanguage("Common","kChange"), strClassName, "" ))%>
			</div>

			<%objNoAssocClassesRooms.MoveNext
		Wend

	ClosePanel
End Sub

Sub DrawDefineTermsTypesMessage
	%><div>
		<%=obLanguage("Common","kNoTermsInYear")%>
		<br><%=obLanguage("Common","kDefineTermsTypes_1")%>
		<a style="cursor: pointer;" onclick="editTermTypes()"><%=obLanguage("SetupSchoolCalendar","kTermTypes")%></a><%=obLanguage("Common","kDefineTermsTypes_2")%>
	</div><%
End Sub

Sub DrawClassesInfo()
	If bOk Then
		Call DrawButtonPanel()
		DrawTable
	ElseIf bNoTeachers Then
		DrawInfo obLanguage("Filter","kNoTeachersGB",strFunctionalityType), False
	ElseIf bNoHours Then
		DrawInfo obLanguage("ClassManagement","kNoHours"), False
	Else
		GenerateError obLanguage("Common","kUnexpErr")
	End If
End Sub

Sub onDrawPage()
	If bIsAnyGradeEmptyTermTypes Then
		DrawWarning GetNoTermsInYearDefineTermsTypes("MainForm", False)
	End If
	If bPreSchool And Not objNoAssocClassesRooms.EOF And Not objNSNET.IsYearClosed(strCurrYearID) Then
		DrawNoAssocClassesRooms
	End If
	DrawClassesInfo
End Sub
%>
