<!-- #INCLUDE FILE="../../headernoscreen_YearNo.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim strYearName, strYearID
Dim bOrphanage

on error resume next

If Not HasUserRight(arCreateCloseEditYear) Then GenerateError obLanguage("Common","kErrPageAccess")
SetScriptTimeOut 900

Dim objTemp, SchoolYearComponent, result, ContextComponent
Set SchoolYearComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.ISchoolYearComponent")

bOrphanage = (CLng(strFunctionalityType) = kFuncType_Orphanage)

If bOrphanage Then
	Set result = SchoolYearComponent.CreateFutureYearForOrphanage(strSchoolID)
Else
	Set result = SchoolYearComponent.OpenFutureYear(strSchoolID)
End If
TestError obLanguage("SetupSchoolCalendar","kErrCreateYear")
If Not result.IsSuccess Then GenerateError result.Message
strYearID = result.Data
Set ContextComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IContextComponent")
Set result = ContextComponent.ChangeYear(strYearID, "")
If Not result.IsSuccess Then GenerateError result.Message

Set objTemp = objNSNET.GetYearInfo(strYearID)
strYearName = objTemp("SCHOOLYEARNAME")
Set objTemp = Nothing

strSchoolYearID = strYearID
Call obTokenMgr.SetData(strToken, "SCHOOLYEARID", strSchoolYearID)
Call obTokenMgr.SetData(strToken, "SCHOOLYEARNAME", strYearName )

RedirectTo "Years.asp", null
%>
