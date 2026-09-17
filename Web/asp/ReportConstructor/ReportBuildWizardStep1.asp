<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="ShowReportInfo_inc.asp" -->
<!-- #INCLUDE FILE="ReportGroups_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName			= "ReportBuild1"
Const kBackScript		= "ReportConstructor.asp"
Const kFuncTypeAll = -1

Dim bNew
Dim nStatus
Dim strDescription, strReportName, strReportType, strFuncType, strIsPublished
Dim strGroupID, objRepGroups, objFuncTypes

Sub ReadState()
	Call ReadStepState()
End Sub

Sub Main
	Dim objReport, objQueryId
	bNew = Cbool( GetSafeStr( Request("NEW"), -1, "" ) = "Y" )
	If Not bNew Then
		strReportID = GetSafeReportID( GetSafeID( Request("RPTID"), GetSafeID( obTokenMgr.GetData( strToken, stReportID ), "0" ) ) )
		Set objReport = objNSNETWork.GetReportInfo(Clng( strReportID ) )
		Call InitReportInfo(objReport)
		'strReportName = GetSafeStr( objReport("DISPLAYNAME"), -1, "" )
		strIsPublished = GetSafeStr( objReport("ISPUBLISHED"), 1, "" )
		strGroupID = GetSafeID( objReport("GROUPID"), "-1" )
		Set objQueryId = objNSNETWork.GetReportQueriesList(Clng( strReportId ) )
		strQueryId = GetSafeLng(objQueryId("QUERYID"), Null)
		nStatus = GetLngQueryBuildStatus( strQueryId )
	Else
		obTokenMgr.SetData strToken, stReportID, ""
		obTokenMgr.SetData strToken, stQueryID, ""

		If bIsEducManager Then
			strReportType = GetSafeStr( Request("REPTYPE"), 1, "A" )
		Else
			strReportType = "S"
		End If
	End If

	Set objRepGroups = GetReportGroups()
	Set objFuncTypes = objNSNETWork.GetAvailableFucTypesForReport(strReportId)
End Sub

Function GetLngQueryBuildStatus( strQueryID )
	Dim objRs
	Set objRs = objNSNETWork.GetQueryData(Clng( strQueryId ) )
	If objRs.EOF Then GetQueryBuildStatus = 0 : Exit Function
	GetLngQueryBuildStatus = CLng( objRs("BUILDSTATUS") )
End Function

Sub InitReportInfo(objRs)
	If strReportID = "0" Then strReportName = "" : strDescription = "" : Exit Sub
	strReportName = GetSafeStr( Request("DISPLAYNAME"), -1, GetSafeStr( objRs("DISPLAYNAME" ), -1, "") )
	strDescription = GetSafeStr( Request("DESCRIPTION"), -1, GetSafeStr( objRs("DESCRIPTION" ), -1, "") )
	strReportType = GetSafeStr( Request("ReportType"), 1, GetSafeStr( objRs("REPTYPE"), 1, "S" ) )
	strFuncType = GetSafeLng( objRs("FuncType"), kFuncTypeAll )
End Sub

Function CheckQueryFields( nQueryId )
	Dim nNum
	nNum = objNSNETWork.GetQueryFieldsCount(nQueryId )
	CheckQueryFields = (nNum > 0)
End Function

Sub onHeadSpecial()
%><script><!--
$(function()
{
return;
	$selectFuncType = $('select[name=ReportFuncType]');
<%If bIsEducManager Then%>
	if ($('#ReportType').val() != "S")
<%End If%>
	$('*[name=ReportFuncType]').parent().parent().hide();
	$('#ReportType').on("change", 
		function()
		{
			$self = $(this);
			if ($self.val() == "S")
			{
				$selectFuncType
					.parent().parent().fadeIn();
			}
			else
			{
				$selectFuncType.val(<%=kFuncTypeAll%>)
					.parent().parent().fadeOut('fast');
			}
		}
	);
});

function createReport ( ) {
	if( isDBBusy() ) return false;
	var elems = document.forms['<%=kFormName%>'].elements;
	var rptname = elems['RPTNAME'].value.trim();
	if (elems['RPTDESC'].value.length > 1000) {
		alert(language.Generic.Constructor.kDescrTooLong); elems['RPTDESC'].focus()
	} 
	else {
		var rptdesc = elems['RPTDESC'].value;
		
		elems['STEPDIR'].value = 2;
		if (rptname != ''){
			setDBBusy();
			ok( '<%=kFormName%>', '<%=kSaveScriptName%>' );
		} else {
			alert(language.Generic.Constructor.kEnterReportName);
		}
	}
}
//-->
</script><%
End Sub

Sub DrawButtons()
	Button "createReport()", obLanguage("SetupSchoolCalendar","kNext"), obLanguage("SetupSchoolCalendar","kNext"), "glyphicon glyphicon-circle-arrow-right"
End Sub

Function IsShowReportInfo()
	If bNew Then
		IsShowReportInfo = False
	Else
		IsShowReportInfo = True
	End If
End Function

Sub onDrawStepContent()
	Dim arrReportTypes
	Call DrawInputTextRow( obLanguage("Constructor","kReportName"), strReportName, "RPTNAME", 90, 100, "", "" )
	Call DrawInputRow( obLanguage("Constructor","kDescription"), DB2TextArea(strDescription), "RPTDESC", "area", 70, 5, "" )

	If bIsEducManager Then
		arrReportTypes = Array("R", obLanguage("Constructor","kAdminReport"), "A", obLanguage("Constructor","kSystemReport"), "S", obLanguage("Constructor","kSchoolReport", strFunctionalityType))
		If obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
			arrReportTypes = Array("R", obLanguage("Constructor","kAdminReport"), "A", obLanguage("Constructor","kSystemReport"))
		End If
		DrawSimpleFilterRow obLanguage("Constructor","kReportType"), "ReportType", arrReportTypes, strReportType, False, "_"
		Call DrawSelectInfoRow( obLanguage("Constructor","kFuncType"), strFuncType, "ReportFuncType", objFuncTypes, "FUNCTIONALITYTYPEID", "NAME", Null, "" )
	End If

	Call DrawSelectInfoRow( obLanguage("Constructor","kReportsGroup"), strGroupID, "GroupID", objRepGroups, "GROUPID", "GROUPNAME", obLanguage("Constructor","kNoReportGroup"), "_")
End Sub
%>
