<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE FILE="STVariants_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strVariantID
Dim objCMComponent, objResult
Dim nUsageLevel, arrVals

If Not HasUserRight(arCalendarCreateCalendar) Then GenerateError obLanguage("Common","kErrPageAccess")

nUsageLevel = GetSafeLng(obTokenMgr.GetData(strToken, stSTVarsUsageLevel), Null)

Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
TestError obLanguage("ServAdmin", "kCantCreateObj")

Select Case nUsageLevel
Case kVarUsageLevel_School
	strVariantID = GetSafeLng(Request("VariantID"), Null)
	Set objResult = objCMComponent.AssignScheduleTimeVariantToSchool(strCurrYearID, strVariantID)
Case kVarUsageLevel_Grade
	Call MakeArray()
	Set objResult = objCMComponent.AssignScheduleTimeVariantsToGrades(strCurrYearID, arrVals)
Case kVarUsageLevel_Class
	Call MakeArray()
	Set objResult = objCMComponent.AssignScheduleTimeVariantsToClasses(strCurrYearID, arrVals)
Case kVarUsageLevel_IupGrade
	Call MakeArray()
	Set objResult = objCMComponent.AssignScheduleTimeVariantsToIupGrades(strCurrYearID, arrVals)
Case Else
	GenerateError obLanguage("Common","kInvalidParameter")
End Select
TestResult objResult, obLanguage("Calendar", "kCantSaveScheduleTimeVariantsUsage")

Call WriteJsonResult(obLanguage("Common","kDataSaved"), False, 0 )

Sub MakeArray()
	Dim i
	Dim nCount, nObjID, nVariantID

	arrVals = Empty
	nCount = Request("ObjID").Count
	If nCount > 0 Then
		ReDim arrVals(nCount-1, 1)
		For i = 0 To UBound(arrVals)
			nObjID = GetSafeLng(Request("ObjID")(i+1), Null)
			nVariantID = GetSafeLng(Request("VariantID")(i+1), Null)
			arrVals(i, 0) = nObjID
			arrVals(i, 1) = nVariantID
		Next
	End If
End Sub
%>
