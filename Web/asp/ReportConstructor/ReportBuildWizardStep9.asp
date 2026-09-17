<!-- #INCLUDE FILE="ReportBuildWizard_inc.asp" -->
<!-- #INCLUDE FILE="ReportBuildConstants_inc.asp" -->
<!-- #INCLUDE FILE="PrintExpression_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kFormName		= "ReportBuild9"
Const kBackScript	= "ReportBuildWizardStep8.asp"
Const kPublisher	= "PublishReport.asp"

Const kMaxVisibleExpLen = 248
Const kSplitter = "|"

Dim bAdminReport
Dim nErr
Dim strReportName, strIsPublished, strParamsNotPresent
Dim arrParamsNotPresent, arrParamsNames

Sub onSpecialReadState()
	nErr = GetSafeLng( obTokenMgr.GetData(strToken, stPublishError), 0 )
	strParamsNotPresent = GetSafeStr( obTokenMgr.GetData(strToken, stInvParams), -1, "" )
End Sub

Sub WriteState()
	Call obTokenMgr.SetData ( strToken, stPublishError, 0 )
	Call obTokenMgr.SetData ( strToken, stInvParams, "" )
End Sub

Function onLoad()
	Dim i
	Dim stronLoad
	If nErr <> 0 Then
		onLoad = "alert('" & obLanguage("Constructor","kErrInvalidQuery") & "');"
	ElseIf strParamsNotPresent <> "" Then
		stronLoad = "alert('" & obLanguage("Constructor","kErrNoParams") & "'"
		For i = 0 To Ubound( arrParamsNames, 1)
			stronLoad = stronLoad + "+'\n- " & arrParamsNames(i) & "'"
			If i = Ubound( arrParamsNames, 1) Then stronLoad = stronLoad + ")"
		Next
		onLoad = stronLoad
	End If
End Function

Sub onHeadSpecial()
%><script><!--
	function PrevStep()
	{ 
		ok('<%=kFormName%>','<%=kBackScript%>'); 
	}

	function onPublish()
	{
		if( isDBBusy() ) return false;
		$.show.confirmation(language.Generic.Constructor.kMsgTest).then(function()
		{
			var publishRep = function(){
				setDBBusy();
				$(document).trigger('showProcessing');
				ok('<%=kFormName%>','<%=kPublisher%>');
			}
		<%If bAdminReport Then%>
			alert(language.Generic.Constructor.kAlertSystemReport, ({close: publishRep }));
		<%Else %>
			publishRep();
		<%End If%>
		});
	}

	function onStepTo ( nStep )
	{ ok('<%=kFormName%>','ReportBuildWizardStep'+nStep+'.asp'); }
<%If bIsDebug Then%>
	function viewAssembly( nQueryId )
	{	ok('<%=kFormName%>','RBuilder.asp?QID='+nQueryId); }
<%End If%>

function Back(){
	goBack(document.forms['<%=kFormName%>'], 'ReportConstructor.asp');
}
//-->
</script><%
End Sub

Sub Main()
	Dim i
	Dim objReport, objParamsNames
	Set objReport = objNSNETWork.GetReportInfo(Clng( strReportId ) )
	strIsPublished = objReport("ISPUBLISHED")
	bAdminReport = Cbool( objReport("REPTYPE")<> "S" )
	strReportName = DB2HTML(objReport("DISPLAYNAME"))
	If strParamsNotPresent <> "" Then
		arrParamsNotPresent = Split( strParamsNotPresent, kSplitter )
		Redim Preserve arrParamsNotPresent( Ubound(arrParamsNotPresent,1) - 1 )
		Redim arrParamsNames( Ubound(arrParamsNotPresent,1) )
		For i = 0 To Ubound( arrParamsNames,1 )
			Set objParamsNames = objNSNETWork.GetParameterNotPresentName(arrParamsNotPresent(i) )
			arrParamsNames(i) = DB2HTML(Cstr(objParamsNames("DISPLAYNAME")))
		Next
	End If
End Sub

Sub DrawButtons()
	Button "PrevStep()", obLanguage("SetupSchoolCalendar","kPrev"), obLanguage("SetupSchoolCalendar","kPrev"), "glyphicon glyphicon-circle-arrow-left"

	If strIsPublished = "N" Then
		Button "onPublish()", obLanguage("Constructor","kBtnPublish"), obLanguage("Constructor","kBtnPublish"), ""
	End If

	If bIsDebug Then 
		Call ButtonView("viewAssembly(" & strQueryId & ")", obLanguage("Buttons", "kView"))
	End If
End Sub

Function IsShowReportInfo()
	IsShowReportInfo = False
End Function

Sub onDrawStepContent()
	Dim i
	Dim objQueryObjects, objGroupings, objReturnedFields, objSortings, objParams, objFilters
	Dim arrQueryObjects, arrGroupings, arrReturnedFields, arrSortings, arrParams, arrFilters

	Set objQueryObjects = objNSNETWork.GetQueryPublicObjectsList(strQueryId )
	arrQueryObjects = objQueryObjects.GetRows(,,Array("DISPLAYNAME","ISPUBLIC"))
	Set objGroupings = objNSNETWork.GetQueryGroupingsProps(Clng( strQueryId ) )
	Set objReturnedFields = objNSNETWork.GetReturnedFieldsForInfo(Clng( strQueryId ) )
	arrReturnedFields = objReturnedFields.GetRows(,,Array("DNAME1","DNAME2","EXPRESSIONID"))
	Set objSortings = objNSNETWork.GetSortingsList(Clng( strQueryId ) )
	Set objParams = objNSNETWork.GetQueryParametersListForInfo(Clng( strQueryId ) )
	Set objFilters = objNSNETWork.GetExpressionIdForInfo(Clng( strQueryId ) )

	%><h2><%=obLanguage("Constructor","kSummaryInfo")%></h2>
	<table class="table table-bordered table-condensed table-left-header table-thin"><%

	' title
	%><tr><th><font class="SmallHeader"><a href="Javascript:onStepTo('1')"><%=obLanguage("Constructor","kReportName")%></a></font></th>
	<td><table><tr><td><%=strReportName%></td></tr></table></td></tr><%
	' objects
	%><tr><th><font class="SmallHeader"><a href="Javascript:onStepTo('2')"><%=obLanguage("Constructor","kDataObjects")%></a></font></th>
	<td><table border="0"><%
	For i = 0 To Ubound(arrQueryObjects,2)
		%><tr><td><%=DB2HTML(arrQueryObjects(0,i))%></td></tr><%
	Next
	%></table></td></tr><%
	' groupings
	%><tr><th><font class="SmallHeader"><a href="Javascript:onStepTo('4')"><%=obLanguage("Constructor","kGroupings")%></a></font></th>
	<td><table border="0"><%
	If Not objGroupings.EOF Then
		arrGroupings = objGroupings.GetRows(,,Array("DISPLAYNAME"))
		For i = 0 To Ubound(arrGroupings,2)
			%><tr><td><%=DB2HTML(arrGroupings(0,i))%></td></tr><%
		Next
	Else
		%><tr><td><%=obLanguage("Common","kNo")%></td></tr><%
	End If
	%></table></td></tr><%

	' returned fields
	%><tr><th><font class="SmallHeader"><a href="Javascript:onStepTo('5')"><%=obLanguage("Constructor","kReturnedFields")%></a></font></th>
	<td><table border="0"><%
	For i = 0 To Ubound(arrReturnedFields,2)
		If arrReturnedFields(0,i) <> "" Then
			%><tr><td><%=DB2HTML(arrReturnedFields(0,i))%></td></tr><%
		ElseIf arrReturnedFields(1,i) <> "" Then
			%><tr><td><%=DB2HTML(arrReturnedFields(1,i))%></td></tr><%
		Else
			%><tr><td><%=PrintExpression ( arrReturnedFields(2,i) )%></td></tr><%
		End If
	Next
	%></table></td></tr><%

	' filters
	%><tr><th><font class="SmallHeader"><a href="Javascript:onStepTo('6')"><%=obLanguage("Constructor","kFilters")%></a></font></th>
	<td><table border="0"><%
	If Not objFilters.EOF Then
		arrFilters = objFilters.GetRows(,,Array("EXPRESSIONID"))
		For i = 0 To Ubound(arrFilters,2)
			%><tr><td><%=PrintExpression (arrFilters(0,i))%></td></tr><%
		Next
	Else
		%><tr><td><%=obLanguage("Common","kNo")%></td></tr><%
	End If
	%></table></td></tr><%

	' sortings
	%><tr><th><font class="SmallHeader"><a href="Javascript:onStepTo('7')"><%=obLanguage("Constructor","kSortings")%></a></font></th>
	<td><table border="0"><%
	If Not objSortings.EOF Then
		arrSortings = objSortings.GetRows(,,Array("DISPLAYNAME","DIRECTION"))
		For i = 0 To Ubound(arrSortings,2)
			%><tr><td><%=DB2HTML(arrSortings(0,i))%><%
			If arrSortings(1,i) = "A" Then%><%=(" - " & obLanguage("Constructor","kSortAsc"))%></td></tr><%Else%><%=(" - " & obLanguage("Constructor","kSortDesc"))%></td></tr><%End If
		Next
	Else
		%><tr><td><%=obLanguage("Common","kNo")%></td></tr><%
	End If
	%></table></td></tr><%

	' params
	%><tr><th><font class="SmallHeader"><a href="Javascript:onStepTo('8')"><%=obLanguage("Constructor","kUserFilters")%></a></font></th>
	<td><table border="0"><%

	If Not objParams.EOF Then
		arrParams = objParams.GetRows(,,Array("DISPLAYNAME"))
		For i = 0 To Ubound(arrParams,2)
			%><tr><td><%=DB2HTML(arrParams(0,i))%></td></tr><%
		Next
	Else
		%><tr><td><%=obLanguage("Common","kNo")%></td></tr><%
	End If
	%></table></td></tr><%

	' status
	%><tr><th><font class="SmallHeader"><%=obLanguage("Constructor","kStatus")%></font></th><td><table border="0">
		<tr><td><strong><%=IIf(strIsPublished = "N",obLanguage("Constructor","kNotPublished"), obLanguage("Constructor","kPublished"))%></strong></td></tr>
	</table></td></tr></table><%
End Sub
%>
