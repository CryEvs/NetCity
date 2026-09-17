<% ' © 2007-2013 IRTech. All rights reserved.

Dim objGroupsRs, arrGroups
Dim strCSGID
Dim bGroupEmpty

Dim strIupLevelID, objIupLevelsRs
Dim strIupClassId, objIupClassesRs

' *************************************************************************
' Init ...
Sub InitIupLevels()
	strIupLevelID = GetSafeID( Request("LEVELID"), GetSafeID(obTokenMgr.GetData( strToken, stIupLevel), "1"))
	Set objIupLevelsRs = objNSNET.GetIupLevels()
	If objIupLevelsRs.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
		Exit Sub
	End If
	strIupLevelID = GetSafeIDForRs(strIupLevelID, objIupLevelsRs, "LEVELID")
	If strIupLevelID = "0" Then
		strIupLevelID = GetSafeID(objIupLevelsRs("LEVELID"), Null)
	End If
End Sub

Sub InitIupLevelsForTermGradeSubj(nTermID, nGrade, nSubjectID, bAllowAll)
	strIupLevelID = GetSafeID( Request("LEVELID"), GetSafeID(obTokenMgr.GetData( strToken, stIupLevel), "1"))
	Set objIupLevelsRs = objNSNET.GetIupLevelsForTermGradeSubj(nTermID, nGrade, nSubjectID)
	If objIupLevelsRs.EOF Then
		GenerateError obLanguage("Common","kUnexpErr")
		Exit Sub
	End If

	If Not (bAllowAll And strIupLevelID = "-1") Then
		strIupLevelID = GetSafeIDForRs(strIupLevelID, objIupLevelsRs, "LEVELID")
	End If
	If strIupLevelID = "0" Then
		strIupLevelID = GetSafeID(objIupLevelsRs("LEVELID"), Null)
	End If
End Sub

Sub InitIupClassesForTermAndGrade(nTermID, nGrade)
	strIupClassId = GetSafeID( Request("IUPCLASSID"), GetSafeID(obTokenMgr.GetData(strToken, stIupClass), "-1"))
	Set objIupClassesRs = objNSNET.GetIupClassesForTermAndGrade(nTermID, nGrade)
	If objIupClassesRs.EOF Then
		strIupClassId = "0"
		Exit Sub
	End If
	If strIupClassId <> "-1" Then
		strIupClassId = GetSafeIDForRs(strIupClassId, objIupClassesRs, "CLASSID")
	End If
	If strIupClassId = "0" Then
		strIupClassId = GetSafeID(objIupClassesRs("CLASSID"), Null)
	End If
End Sub

Sub WriteIupLevel
	Call obTokenMgr.SetData(strToken, stIupLevel, strIupLevelID)
End Sub

Sub WriteIupClass
	Call obTokenMgr.SetData(strToken, stIupClass, strIupClassId)
End Sub

'Инициализация списка подгрупп класса и/или индивидуальных групп
Sub InitClassSubjectsGroups_IUP()
	Dim nUBound, bCheckRs

	strCSGID = GetSafeID(Request("ID"), "0")
	bCheckRs = True
	If bIsIupGrade Then
		If strIupLevelID = "-1" And strCSGID = "-1" Then
			bCheckRs = False
		Else
			Set objGroupsRs = objNSNET.GetGradeGroups_IUP(strIupGrade, strIupLevelID, strTermID, strSubjectID, -1)
		End If
	Else
		Set objGroupsRs = objNSNET.GetClassSubjectGroupList2(strClassID, strSubjectID, strTermID)
	End If

	If bCheckRs Then
		If objGroupsRs.EOF Then strCSGID = "0" : Exit Sub

		If strCSGID <> "0" And strCSGID <> "-1" Then strCSGID = GetSafeIDForRs(strCSGID, objGroupsRs, "ID")
		If strCSGID = "0" Then strCSGID = GetSafeID(objGroupsRs("ID"), NULL)

		arrGroups= objGroupsRs.GetRows(,,Array("ID", "NAME"))

		nUBound = UBound(arrGroups, 2)
		ReDim Preserve arrGroups(1, nUBound + 1)
	Else
		nUBound = -1
		ReDim arrGroups(1, nUBound + 1)
	End If

	arrGroups(0, nUBound + 1) = -1
	arrGroups(1, nUBound + 1) = "<" & obLanguage("ClassManagement","kHeaderFree") & ">"
End Sub


' *************************************************************************
' Draw ...
Sub DrawClassSubjectGroups(theStrForm)
	If strCSGID = "0" Then
		DrawInfo obLanguage("Filter","kNoGroupsForFilter"), False
		bExit = True
	Else
		DrawFilterRow theStrForm, obLanguage("Common","kGroup"), "ID", arrGroups, "ID", "NAME", strCSGID, False 
	End If
End Sub

Sub DrawIupLevels(theStrForm, bAllowAll)
	DrawFilterRow theStrForm, obLanguage("Curriculum","kIupLevel"), "LEVELID", objIupLevelsRs, "LEVELID", "LEVELNAME", strIupLevelID, bAllowAll
End Sub

Sub DrawIupClasses(theStrForm)
	If strIupClassId = "0" Then
		DrawInfo obLanguage("Filter","kNoClassesForFilter",strFunctionalityType), False
		bExit = True
		Exit Sub
	End If
	DrawFilterRow theStrForm, obLanguage("Filter","kClassGB",strFunctionalityType), "IUPCLASSID", objIupClassesRs, "CLASSID", "CLASSNAME", strIupClassId, True
End Sub

%>
