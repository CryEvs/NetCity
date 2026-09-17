<!-- #INCLUDE FILE="YearDates_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim strGlobalYearID
Dim objSchoolFormComponent
Dim arrStatForms, nStatFormId
Dim objSubEMs, nSubEMID
Dim arrMNSStatForms

Sub ReadState()
	SpecialRead
End Sub

Sub SpecialRead()
	'Подсовываем strFilterEMID из Report_inc.asp
	strFilterEMID = ReadEMRegionFilter(False)
	Set objCommonYears = objNSNET.GetEMGlobalYearsList(strFilterEMID, -1, True)
	nGlobalYearId = GetSafeGlobalYearID(objCommonYears)
	If objCommonYears.EOF Then Exit Sub

	nStatFormId = GetSafeLng(Request("STATFORM"), StatForm_Osh1)
	nSubEMID = GetSafeLng(Request("SUBEMID"), GetSafeID(obTokenMgr.GetData(strToken, stEMStateID), -1))
	'Подсовываем strFilterEMID из Report_inc.asp
	Set objSubEMs = objNSNET.GetChildList_EM(strFilterEMID)

	Set objSchoolFormComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IStatFormComponent")
	TestError obLanguage("EMReports","kCantCreateMorfComponent")
	If objSchoolFormComponent Is Nothing Then
		GenerateError obLanguage("EMReports","kCantCreateMorfComponent")
	End If

	Set arrStatForms = objSchoolFormComponent.GetRelevanceStatFormList(nGlobalYearId)
	arrMNSStatForms = objSchoolFormComponent.GetMnsStatFormList(arrStatForms).ToArray()
End Sub

Function GetSafeGlobalYearID(objCommonYears)
	GetSafeGlobalYearID = CLng( GetSafeParam("CMNYEAR", "stCommYearID", 0))
	If GetSafeGlobalYearID <> 0 Then GetSafeGlobalYearID = GetSafeIDForParent(GetSafeGlobalYearID, objCommonYears, "GLOBALYEARID")
	If GetSafeGlobalYearID = 0 Then GetSafeGlobalYearID = objCommonYears("GLOBALYEARID")
End Function

Sub SpecialWrite()
	Call obTokenMgr.SetData(strToken, "stCommYearID", nGlobalYearId)
End Sub

Sub onHeadReport()
%>
<script>
<!--
function openExcel()
{
	var form = document.forms['Reports'];
	var formExport = document.forms['ExportForm'];
	var filterEmID=GetLocalEmId(<%=strEMID%>);
	var yearId = $(':input[name=CMNYEAR]', form).val();
	var statFormId = $(':input[name=STATFORM]', form).val();
	var subEmId = $(':input[name=SUBEMID]', form).val();
	DoSubmit(formExport, 'OSHExport.asp?VER=' + getVer() + '&AT=<%=strToken%>&CMNYEAR=' + yearId + '&STATFORM=' + statFormId + '&SUBEMID=' + subEmId+'&FilterEMID='+filterEmID);
}
//-->
</script><%
End Sub

Sub SpecialFilters( strForm )
	FilterGlobalYear
	If bExit Then Exit Sub
	DrawSelectNamedEntitiesArrRow obLanguage("EMReportNames","kStatForm"), nStatFormId, "STATFORM", arrStatForms.ToArray(), Null, "changeSelectedElement();"
	If obContext.ServerSettings.SystemSettings.ShowMNSForms Then
	%><div id="MNSCheckBox"><%
		DrawCheckBox obLanguage("EMReportNames","kMns"), "MNS", 1, False, "changeChecked();"
	%></div><%
	End If
End Sub

Sub FilterGlobalYear()
	If objCommonYears.EOF Then
		Call DrawInfo(obLanguage("EMReports","kNoSchoolYearsInDB"), False)
		bExit = True
		Exit Sub
	End If
	DrawFilterRow "Reports", obLanguage("Common","kSchoolYear"), "CMNYEAR", objCommonYears, "GLOBALYEARID", "SCHOOLYEARNAME", nGlobalYearId, False
End Sub
%>
