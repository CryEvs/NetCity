<!-- #INCLUDE FILE=../headerprint.asp -->
<!-- #INCLUDE FILE="../scripts/YearIndependent_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.

Const kGetMasterInfo	= 0
Const kGetDetailInfo	= 1

Dim bMaster, bDetail
Dim nObjectId
Dim strDescription, strDisplayName
Dim objProps, objMaster, objDetail
Dim arrProps, arrMaster, arrDetail

Sub ReadState()
	nObjectId = GetSafeID( Request("ID"), Null )
End Sub

Sub Main()
	Dim objInfo

	Set objInfo = objNSNETWork.GetDataObjectNameAndDescription(nObjectId )
	strDisplayName = GetSafeStr( objInfo("DISPLAYNAME"), -1, "" )
	strDescription = GetSafeStr( objInfo("DESCRIPTION"), -1, "" )

	Set objProps = objNSNETWork.GetPropsNameAndDescription(nObjectId )

	Set objMaster = objNSNETWork.GetMasterDetailObjectRelationships(nObjectId, kGetMasterInfo )
	If Not objMaster.EOF Then
		arrMaster = objMaster.GetRows(,, Array("DISPLAYNAME", "OBJECTID"))
		bMaster = True
	Else
		bMaster = False
	End If
	Set objDetail = objNSNETWork.GetMasterDetailObjectRelationships(nObjectId, kGetDetailInfo )
	If Not objDetail.EOF Then
		arrDetail = objDetail.GetRows(,, Array("DISPLAYNAME", "OBJECTID"))
		bDetail = True
	Else
		bDetail = False
	End If
End Sub

Sub onDrawPage()
	Dim i
	Dim strTypeStr, strComments%>
	<h3><%=obLanguage("Constructor","kObjInfo")%> "<%=strDisplayName%>"</h3>
	<p><%=GetSafeStr(strDescription,-1,obLanguage("Constructor","kNoDescription"))%></p>
	<hr />
	<h3><%=obLanguage("Constructor","kObjProperties")%></h3><%
	If Not objProps.EOF Then
		Response.Write "<table class=""table table-thin table-xs table-bordered"" width=""620""><tr><th>" & obLanguage("Constructor","kField") & "</th><th>" & obLanguage("Constructor","kType") & "</th><th>" & obLanguage("Constructor","kComments") & "</th></tr>"
		arrProps = objProps.GetRows(,,Array( "DISPLAYNAME", "CODE", "DESCRIPTION" ))
		For i = 0 To Ubound( arrProps, 2 )
			Select Case arrProps(1,i)
			Case "S"		strTypeStr = obLanguage("Constructor","kTypeString")
			Case "D"		strTypeStr = obLanguage("Constructor","kTypeDate")
			Case "N"		strTypeStr = obLanguage("Constructor","kTypeInteger")
			Case "M"		strTypeStr = obLanguage("Constructor","kTypeMultiString")
			Case Else		strTypeStr = obLanguage("Constructor","kTypeUndefined")
			End Select
			If IsNull(arrProps(2,i)) Then strComments = obLanguage("Common","kNo") Else strComments = arrProps(2,i)
			Response.Write "<tr><td>" & DB2HTML(arrProps(0,i)) & "</td><td>" & strTypeStr & "</td><td>" & strComments & "</td></tr>"
		Next
		Response.Write "</table>"
	End If
	%>
	<hr />
	<h3><%=obLanguage("Constructor","kRelationsTitle")%></h3><%
	%><table class="table table-thin table-xs table-bordered table-left-header">
		<tr><th>&nbsp;<%=obLanguage("Constructor","kParentObjects")%>:&nbsp;</th><%
			If bDetail Then
				%><td><table border="0"><%
				For i = 0 To Ubound( arrDetail, 2 )
					%><tr><td><%=ShowAnchor( "location.href = 'popupObjInfo.asp?AT="&strToken&"&ID="&arrDetail(1,i)&"';", obLanguage("Constructor","kObjHelp"),DB2HTML(arrDetail(0,i)), "" )%></td></tr><%
				Next
				%></table></td><%
			Else
			%><td><%=obLanguage("Common","kNo")%></td><%
			End If
		%></tr><tr>
			<th>&nbsp;<%=obLanguage("Constructor","kChildObjects")%>:&nbsp;</th><%
			If bMaster Then
				%><td><table border="0"><%
				For i = 0 To Ubound( arrMaster, 2 )
					%><tr><td><%=ShowAnchor( "location.href = 'popupObjInfo.asp?AT="&strToken&"&ID="&arrMaster(1,i)&"';", obLanguage("Constructor","kObjHelp"),DB2HTML(arrMaster(0,i)), "" )%></td></tr><%
				Next
				%></table></td><%
			Else
			%><td><%=obLanguage("Common","kNo")%></td><%
			End If
		%></tr>
	</table><%
End Sub


Function ShowAnchor( jsCall, sStatus, aBody, Attr )
	ShowAnchor = "<a HREF=""JavaScript:"&jsCall&""" title='"&sStatus&"' "& Attr &">"&aBody&"</a>"
End Function
%>
