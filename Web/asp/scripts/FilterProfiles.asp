<% ' © 2007-2015 IRTech. All rights reserved.
Dim strProfileID, arrProfilesRs

Sub InitProfiles( )
	'InitProfiles ни разу не вызывается
	If IsDull( Request("PROFILEID") ) Then
		strProfileID = GetSafeID(obTokenMgr.GetData(strToken, stCurrProfile), "0")
	Else
		strProfileID = GetSafeID( Request("PROFILEID"), "0") 
	End If
	arrProfilesRs = objNSNET.GetGradeProfileList(-1, strSchoolID)
	If Not IsArray(arrProfilesRs) Then GenerateError obLanguage("SetupSchoolCalendar","kErrEmptyProfileList")
	
	Dim bAvailableProfileId
	bAvailableProfileId = True
	If strProfileID <> "0" Then
		Set bAvailableProfileId = arrProfilesRs.ExistsByField("PROFILEID", strProfileID)
	End If
	If strProfileID = "0" or not bAvailableProfileId Then strProfileID = arrProfilesRs(0,0)
End Sub

Sub DrawProfiles( theStrForm, bCanSelectAll )
	DrawFilterRow theStrForm, obLanguage("Common","kProfile", strFunctionalityType), "PROFILEID", arrProfilesRs, "PROFILEID", "PROFILENAME", strProfileID, bCanSelectAll
End Sub

Sub WriteProfile
	Call obTokenMgr.SetData(strToken, stCurrProfile, strProfileID)
End Sub

Function InitCuriculumProfiles(strTermID, minGrade, maxGrade)
	If IsDull( Request("PROFILEID") ) Then
		strProfileID = GetSafeID(obTokenMgr.GetData(strToken, stCurrProfile), "-1")
	Else
		strProfileID = GetSafeID( Request("PROFILEID"), "-1")
	End If
	arrProfilesRs = objNSNET.GetCuriculumProfiles(strTermID, minGrade, maxGrade)
	If Not IsArray(arrProfilesRs) Then
		' Для данных условий нет профилей. Для функционала, использующего эту ф-цию, это не очень критично, здесь генерировать ошибку не надо.
		'GenerateError obLanguage("SetupSchoolCalendar","kErrEmptyProfileList")
		strProfileID = "-1"
		InitCuriculumProfiles = False
		Exit Function
	End If

	If strProfileID <> "-1" Then
		strProfileID = GetSafeIDForArr(strProfileID, arrProfilesRs)
	End If
	If strProfileID = "0" Then strProfileID = "-1"
	InitCuriculumProfiles = True
End Function
%>
