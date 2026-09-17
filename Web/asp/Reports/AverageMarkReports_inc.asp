<!-- #INCLUDE VIRTUAL="/asp/Grade/Mark_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kTotalMarksSign		= "T"
Const kSubTotalMarksSign	= "S"
Const kBothMarksTypesSign	= "B"

Dim strMarksType

Sub Main()
	bOk = False
	If bIsStaff Then
		If bAll Then 
			Call InitYearClasses() 
			If objClassesRs.EOF Then Exit Sub ' for Classes test objClassesRs.EOF but not strClassID = "0" because GetClassListForYearStudent do not set strClassID = "0" for objClassesRs.EOF. It is for using one style. 
		Else 
			strTeacherID = strUserID
			Call InitTeacherClasses(False)
			If objClassesRs.EOF Then Exit Sub
		End If
		Set rsStudents = objNSNET.GetClassStudentListForTerm(strClassID, -1, False)
		If rsStudents.EOF Then Exit Sub
	Else
		If HasUserRole(rlParent) Then
			strStudentID = GetSafeID( Request("SID"), GetSafeID(obTokenMgr.GetData(strToken,stCurrStudent),"0"))
			Set rsStudents = objNSNET.GetStudentListForParent(strUserID, strCurrYearID, false)
			If strStudentID="0" AND Not rsStudents.EOF Then strStudentID=GetSafeID(rsStudents("STUDENTID"),"0")
			If strStudentID = "0" Then Exit Sub
		Else
			strStudentID = strUserID
		End If

		'Call InitYearStudentClassesEx( strStudentID ) #27669
		Call InitYearStudentClasses( strStudentID )

		If objClassesRs.EOF Then Exit Sub
	End If
	bOk = True
	If bOk Then
		Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	End If
End Sub

Sub specialFilters( strForm )
	If HasUserRole(rlParent) Then
		DrawStudents strForm, rsStudents
		If bExit Then Exit Sub
	End If

	If bIsStaff Then
		Call DrawYearClasses( strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChiefAndHasNoSubj",strFunctionalityType)) )
		If bExit Then Exit Sub
	Else
		Call DrawYearClasses(strForm, False, obLanguage("Filter","kStudentNotInClass",strFunctionalityType))
		If bExit Then Exit Sub
	End If

	Call DrawSimpleFilterRow(obLanguage("Reports","kMarksType"), "MT", Array(kTotalMarksSign, obLanguage("Reports","kTotalMarks"), kSubTotalMarksSign, obLanguage("Reports","kSubTotalMarks"), kBothMarksTypesSign, obLanguage("Reports","kBothMarksTypes")), strMarksType, False, ";")

	If Not bOK Then
		DrawInfo obLanguage("Reports","kNoStudentsWithCondition",strFunctionalityType), False
		bExit = True : Exit Sub
	End If

	Call DrawDateRange()
	Call DrawStudentsList
End Sub

Function GetMarksTypeText(ByVal strMarksType)
	Select Case strMarksType
		Case kTotalMarksSign
			GetMarksTypeText = obLanguage("Reports","kTotalMarks")
		Case kSubTotalMarksSign
			GetMarksTypeText = obLanguage("Reports","kSubTotalMarks")
		Case kBothMarksTypesSign
			GetMarksTypeText = obLanguage("Reports","kBothMarksTypes")
	End Select
End Function
%>
