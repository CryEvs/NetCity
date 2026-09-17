<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

If Not HasUserRight(arSchoolSubjects) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim i, j, k, arrLimits, strInvalidComponentName, nInvalidGrade, bOk
Dim dHours
Dim nSchoolMaxGrade

If Request("COMPID").Count > 0 Then
	nSchoolMaxGrade = GetSafeLng(Request("MAX_GRADE"), Null)
	ReDim arrLimits(Request("COMPID").Count, nSchoolMaxGrade - kMinGrade + 1)

	For j = kMinGrade To nSchoolMaxGrade
	arrLimits(0, 1+j-kMinGrade) = CLng(j)
	Next
	k = 1
	For i = 1 To UBound(arrLimits)
		arrLimits(i,0) = GetSafeID(Request("COMPID")(i), NULL)
		For j = kMinGrade To nSchoolMaxGrade
			dHours = -1
			If Not IsDull(Request("HOURS")(k)) Then
				dHours = CDbl(Request("HOURS")(k))
			End If
			arrLimits(i, 1+j-kMinGrade) = dHours
			k = k + 1
		Next
	Next

	bOk = CBool( objNSNET.SaveLimits(strCurrYearID, arrLimits, strInvalidComponentName, nInvalidGrade) )
	TestError(obLanguage("SetupSchoolCalendar","kCantSaveCurriculumLimits"))
	If Not bOk Then
		Call obTokenMgr.SetData( strToken, stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kCantRemoveLimit_1")) & strInvalidComponentName & obLanguage("SetupSchoolCalendar","kCantRemoveLimit_2") & CStr(nInvalidGrade) & obLanguage("SetupSchoolCalendar","kCantRemoveLimit_3",strFunctionalityType))
	End If
End If

RedirectTo GetSafeStr( obTokenMgr.GetData(strToken,stBackPage), -1, "CuriculumLimits.asp"), null
%>
