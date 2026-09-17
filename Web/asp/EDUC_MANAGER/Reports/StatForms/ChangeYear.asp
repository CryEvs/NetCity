<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Dim objSchoolFormComponent, objHelper
Dim backPage, nFormId, nGlobalYearId
Dim strRevPath, statFromEnumItem, statFormName
Dim strFormPath
Dim bFormSpec
	
nGlobalYearId = GetSafeLng(Request("CMNYEARID"),Null)
nFormId = GetSafeLng(Request("FORMID"),Null)
bFormSpec = GetSafeLng(Request("FS"),0)

Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
If objSchoolFormComponent Is Nothing Then GenerateError obLanguage("EMReports","kCantCreateMorfComponent")
Set objHelper = comHelper.AspHelper
Call obTokenMgr.SetData(strToken, "stCommYearID", nGlobalYearId)
Set statFromEnumItem = objHelper.GetEnum(objHelper.Enums.SchoolForm, nFormId)
strRevPath = objSchoolFormComponent.GetSafeRevisionPathByGYear(nGlobalYearId, nFormId, -1, -1)
statFormName = statFromEnumItem.ToString()
If statFormName = "Do1Em" Then statFormName = "DO1"
If statFormName = "Rik103" And nGlobalYearId >= 21 Then
	strFormPath = "/angular/em/statforms/forms/rik103"
Else
	strFormPath = "/asp/EDUC_MANAGER/Reports/StatForms/" & statFormName & "/" & strRevPath & "/Page1.asp"
End If
Response.Redirect strFormPath & "?" & Ver() & "&FS=" & bFormSpec & "&AT=" & strToken
%>
