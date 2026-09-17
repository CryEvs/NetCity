<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Const kSTVariantNameLen = 100

Dim i, j, arrVarDels
Dim arrVarNames, strVariantID, strVariantName
Dim strNewVariantName
Dim objCMComponent, objResult
Dim strAction, result

If Not HasUserRight(arCalendarCreateCalendar) Then GenerateError obLanguage("Common","kErrPageAccess")

strAction = GetSafeStr(Request("ACT"), kSTVariantNameLen, "edit")

arrVarDels = Empty
arrVarNames = Empty

Select case strAction
Case "delete"
	' delete variants
	If Request("DEL").Count > 0 Then
		ReDim arrVarDels(Request("DEL").Count-1)
		j = 0
		For i = 0 To UBound(arrVarDels)
			strVariantID = GetSafeID(Request("DEL")(i+1), NULL)
			arrVarDels(j) = strVariantID
			j = j + 1
		Next
	End If
Case "edit"
	' edit variants names
	If Request("VariantID").Count > 0 Then
		ReDim arrVarNames(Request("VariantID").Count-1, 1)
		For i = 0 To UBound(arrVarNames)
			strVariantID = GetSafeID(Request("VariantID")(i+1), NULL)
			strVariantName = GetSafeStr(Request("VariantName")(i+1), kSTVariantNameLen, NULL)
			arrVarNames(i, 0) = strVariantID
			arrVarNames(i, 1) = strVariantName
		Next
	End If
Case "create"
	' create a new variant
	strNewVariantName = GetSafeStr(Request("VAR_NEW"), kSTVariantNameLen, null)
End Select

Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
TestError obLanguage("ServAdmin", "kCantCreateObj")

Set objResult = objCMComponent.SaveScheduleTimeVariants(strCurrYearID, arrVarDels, arrVarNames, strNewVariantName)
TestResult objResult, obLanguage("Calendar", "kCantSaveScheduleTimeVariants")

If strAction = "edit" Then
	Call WriteJsonResult(obLanguage("Common","kDataSaved"), False, 0)
End If
RedirectTo "STVariants.asp", null
%>
