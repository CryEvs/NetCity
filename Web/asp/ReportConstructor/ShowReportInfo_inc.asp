<!-- #INCLUDE FILE="PrintExpression_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Const kMaxVisibleExpLen = 78

Sub ShowReportInfo( nAvailSteps )
	Dim i
	Dim objQueryObjects, objGroupings, objReturnedFields, objSortings, objParams, objFilters
	Dim arrQueryObjects, arrGroupings, arrReturnedFields, arrSortings, arrParams, arrFilters

	Set objQueryObjects = objNSNETWork.GetQueryPublicObjectsList(strQueryId )
	Set objGroupings = objNSNETWork.GetQueryGroupingsProps(Clng( strQueryId ) )
	Set objReturnedFields = objNSNETWork.GetReturnedFieldsForInfo(Clng( strQueryId ) )
	Set objSortings = objNSNETWork.GetSortingsList(Clng( strQueryId ) )
	Set objParams = objNSNETWork.GetQueryParametersListForInfo(Clng( strQueryId ) )
	Set objFilters = objNSNETWork.GetExpressionIdForInfo(Clng( strQueryId ) )

	%><div class="step-node">
	<div><%=obLanguage("Constructor","kSummaryInfo2")%></div>
	<%
	' title
	%><ul class="nav nav-list active">
		<li class="nav-header"><%=ShowAnchor("onStepTo('1')", "->...", obLanguage("Constructor","kReportName"), "")%></li>
		<li><%
			If strReportName <> "" Then
				If Len( strReportName )> kMaxVisibleExpLen Then%><%=DB2HTML(Left(strReportName, kMaxVisibleExpLen - 3))%>...<%
				Else%><%=DB2HTML(strReportName)%><%
				End If
			Else%><%=obLanguage("Common","kNo")%><%
			End If%>
		</li>
	</ul><%
	' objects 2
	%><ul class="nav nav-list active">
		<li class="nav-header"><%=ShowAnchor("onStepTo('2')", "->...", obLanguage("Constructor","kDataObjects"), "")%></li><%
		If Not objQueryObjects.EOF Then
			arrQueryObjects = objQueryObjects.GetRows(,,Array("DISPLAYNAME", "QUERYOBJECTID"))
			For i = 0 To Ubound(arrQueryObjects,2)%>
				<li><%=DB2HTML(arrQueryObjects(0,i))%></li><%
			Next
		Else%>
			<li><%=obLanguage("Common","kNo")%></li><%
		End If%>
	</ul><%
	' groupings 4
	%><ul class="nav nav-list <%If nAvailSteps >= 4 Then %>active<%End If%>">
		<li class="nav-header"><%
			If nAvailSteps >= 4 Then%><%=ShowAnchor("onStepTo('4')", "->...", obLanguage("Constructor","kGroupings"), "")%><%
			Else%><%=obLanguage("Constructor","kGroupings")%><%
			End If
			%></li><%
			If Not objGroupings.EOF And nAvailSteps >= 4 Then
				arrGroupings = objGroupings.GetRows(,,Array("DISPLAYNAME"))
				For i = 0 To Ubound(arrGroupings,2)
					%><li><%=DB2HTML(arrGroupings(0,i))%></li><%
				Next
			Else%><li><%=obLanguage("Common","kNo")%></li><%
			End If
	%></ul><%
	' returned fields 5
	%><ul class="nav nav-list <%If nAvailSteps >= 5 Then %>active<%End If%>"><li class="nav-header"><%
	If nAvailSteps >= 5 Then%><%=ShowAnchor("onStepTo('5')", "->...", obLanguage("Constructor","kReturnedFields"), "")%><%
	Else%><%=obLanguage("Constructor","kReturnedFields")%><%
	End If
	%></li><%
	If Not objReturnedFields.EOF And nAvailSteps >= 5 Then
		arrReturnedFields = objReturnedFields.GetRows(,,Array("DNAME1","DNAME2","EXPRESSIONID"))
		For i = 0 To Ubound(arrReturnedFields,2)
			If arrReturnedFields(0,i) <> "" Then%><li><%=DB2HTML(arrReturnedFields(0,i))%></li><%
			ElseIf arrReturnedFields(1,i) <> "" Then%><li><%=DB2HTML(arrReturnedFields(1,i))%></li><%
			Else%><li><%=PrintExpression ( arrReturnedFields(2,i) )%></li><%
			End If
		Next
	Else%><li><%=obLanguage("Common","kNo")%></li><%
	End If
	%></ul><%
	' filters 6
	%><ul class="nav nav-list <%If nAvailSteps >= 6 Then %>active<%End If%>"><li class="nav-header"><%
	If nAvailSteps >= 6 Then%><%=ShowAnchor("onStepTo('6')", "->...", obLanguage("Constructor","kFilters"), "")%><%
	Else%><%=obLanguage("Constructor","kFilters")%><%
	End If
	%></li><%
	If Not objFilters.EOF Then
		arrFilters = objFilters.GetRows(,,Array("EXPRESSIONID"))
		For i = 0 To Ubound(arrFilters,2)
			%><li><%=PrintExpression( arrFilters(0,i) )%></li><%
		Next
	Else%><li><%=obLanguage("Common","kNo")%></li><%
	End If
	%></ul><%
	' sortings 7
	%><ul class="nav nav-list <%If nAvailSteps >= 7 Then %>active<%End If%>"><li class="nav-header"><%
	If nAvailSteps >= 7 Then%><%=ShowAnchor("onStepTo('7')", "->...", obLanguage("Constructor","kSortings"), "")%><%
	Else%><%=obLanguage("Constructor","kSortings")%><%
	End If
	%></li><%
	If Not objSortings.EOF Then
		arrSortings = objSortings.GetRows(,,Array("DISPLAYNAME","DIRECTION"))
		For i = 0 To Ubound(arrSortings,2)
			%><li><%=DB2HTML(arrSortings(0,i))%><%=(" - " & IIf( arrSortings(1,i) = "A", obLanguage("Constructor","kSortAsc"), obLanguage("Constructor","kSortDesc")))%></li><%
		Next
	Else%><li><%=obLanguage("Common","kNo")%></li><%
	End If
	%></ul><%
	' params 8
	%><ul class="nav nav-list <%If nAvailSteps >= 8 Then %>active<%End If%>"><li class="nav-header"><%
	If nAvailSteps >= 8 Then%><%=ShowAnchor("onStepTo('8')", "->...", obLanguage("Constructor","kUserFilters"), "")%><%
	Else%><%=obLanguage("Constructor","kUserFilters")%><%
	End If
	%></li><%
	If Not objParams.EOF Then
		arrParams = objParams.GetRows(,,Array("DISPLAYNAME"))
		For i = 0 To Ubound(arrParams,2)
			%><li><%=DB2HTML(arrParams(0,i))%></li><%
		Next
	Else%><li><%=obLanguage("Common","kNo")%></li><%
	End If
	%></ul><%
	' status 9
	%><ul class="nav nav-list <%If nAvailSteps >= 9 Then %>active<%End If%>"><li class="nav-header"><%
	If nAvailSteps >= 9 Then%><%=ShowAnchor("onStepTo('9')", "->...", obLanguage("Constructor","kStatus"), "")%><%
	Else%><%=obLanguage("Constructor","kStatus")%><%
	End If
	%></li><li>
	<strong><%=IIf( strIsPublished = "N", obLanguage("Constructor","kNotPublished"), obLanguage("Constructor","kPublished"))%></strong></li>
	</ul></div><%
End Sub

Function ShowAnchor( jsCall, sStatus, aBody, Attr )
	ShowAnchor = "<a href=""JavaScript:"&jsCall&""" onclick="""&jsCall&";return false;"" title='"&sStatus&"' "& Attr &">"&aBody&"</a>"
End Function
%>
