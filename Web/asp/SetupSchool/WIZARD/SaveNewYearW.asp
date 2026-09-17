<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Const minGrade = 0
Const maxGrade = 12

If Not HasUserRight(arCreateCloseEditYear) Then GenerateError obLanguage("Common","kErrPageAccess")

Dim Item, nItem, nWeekEndSet
nWeekEndSet = 0
For Each Item In Request.Form("WeekEndDays")
	nItem = CLng(Item)
	If nItem > 0 Then nWeekEndSet = nWeekEndSet + nItem
Next

If strSchoolYearID = "0" Then
	Dim SchoolYearComponent
	Set SchoolYearComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.ISchoolYearComponent")
	strSchoolYearID = SchoolYearComponent.CreateWizardYear( strSchoolID, Request("Year"), nWeekEndSet, strUserID)
	TestError obLanguage("SetupSchoolCalendar","kErrCreateYear")
	if strSchoolYearID <=0 Then GenerateError obLanguage("SetupSchoolCalendar","kErrCreateYear")

	Call obTokenMgr.SetData(strToken, "SCHOOLYEARID", strSchoolYearID)
	Call obTokenMgr.SetData(strToken, stCurrYear, strSchoolYearID)
	Call obTokenMgr.SetData(strToken, stFRightsUpdated, 1)

	Call CreateSchoolBaseStVariant()
Else
	Call objNSNET.EditSchoolYear(strSchoolYearID, nWeekEndSet)
	TestError obLanguage("SetupSchoolCalendar","kErrEditYear")
End If

Call obTokenMgr.SetData(strToken, "SCHOOLYEARNAME", objNSNET.GetSchoolYearName(strSchoolYearID))
Call obTokenMgr.SetData(strToken,stWasSaved, CStr(obLanguage("SetupSchoolCalendar","kYearSaved")) )
RedirectTo "CreateNewYear.asp?", null

Sub CreateSchoolBaseStVariant()
	Dim objCMComponent, objResult, objAllVariants, nVariantId

	Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")

	Set objResult = objCMComponent.SaveScheduleTimeVariants(strSchoolYearID, Empty, Empty, CStr(obLanguage("Calendar","kBaseSTVariantName")) )
	Call TestResult (objResult, obLanguage("Calendar","kCantSaveScheduleTimeVariants"))

	Set objResult = objCMComponent.GetScheduleTimeVariants(strSchoolYearID)
	Call TestResult (objResult, obLanguage("Calendar","kErrGetInfoForSTVariants"))

	Set objAllVariants = objResult.Data
	If objAllVariants.Count = 1 Then
		nVariantId = objAllVariants(0).Id
		Set objResult = objCMComponent.AssignScheduleTimeVariantToSchool(strSchoolYearID, nVariantId)
		Call TestResult (objResult, obLanguage("Calendar","kCantSaveScheduleTimeVariantsUsage"))
	End If
End Sub

Sub TestResult (objRes, strErrorMessage)
	TestError strErrorMessage
	If Not objRes.IsSuccess Then
		GenerateError strErrorMessage & IIf(bIsDebug, vbCrLf & "(" & DB2HTML_BR(objRes.Message) & ")", "")
	End If
End Sub
%>
