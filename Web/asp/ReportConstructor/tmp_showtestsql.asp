<!-- #INCLUDE FILE=../headerprint.asp -->
<!-- #INCLUDE FILE="SqlBuilder.asp" -->
<!-- #INCLUDE FILE="GetParameters_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim nQueryId, nReportId

Sub ReadState()
	nQueryId = GetSafeLng( obTokenMgr.GetData( strToken, stQueryID ), Null )
	nReportId = GetSafeLng( obTokenMgr.GetData( strToken, stReportID ), Null )
End Sub

Sub onDrawPage()
	Dim i
	Dim strParam, strTest, strResultSql
	Dim objParametersNames, objTest, objParam, objReportInfo, objParamSql
	Dim arrParametersNames
	
	strResultSql = BuildSql( nQueryId )
	strTest = strResultSql

	Set objReportInfo = objNSNET.GetReportInfo(nReportId )
	If objReportInfo("REPTYPE") = "S" Then
		strTest = Replace( strTest, "?", strSchoolId, 1, 1 )
	End If

	Set objParametersNames = objNSNET.GetObjParameterIdsFromQueryParams(nQueryId )
	If Not objParametersNames.EOF Then
		arrParametersNames = objParametersNames.GetRows(,,Array("OBJPARAMETERID"))
		For i = 0 To Ubound(arrParametersNames, 2)
			Set objParamSql = objNSNET.GetObjectParameters(Clng (arrParametersNames (0,i)) )
			If Not IsNull(objParamSql("PARAMSQLEXPR")) Then
				strParam = objParamSql("PARAMSQLEXPR")
				If objReportInfo("REPTYPE") = "S" Then
					strParam = Replace( strParam, "ORDER BY", "WHERE SCHOOLID=" & strSchoolId & " ORDER BY" )
				End If
'				Set objParam = objCon.Execute( strParam )
				Set objParam = objNSNET.ExecuteSql( strParam )
			Else
				Set objParam = GetParamData ( arrParametersNames (0,i), nQueryId )
			End If
			If Not objParam.EOF Then
				strParam = objParam.GetString( 2, 1 )
				strParam = Left(strParam,Len(strParam)-1)
				strTest = Replace(strTest,"?","'" & strParam & "'",1,1)
			End If
		Next
	End If
	strTest = Replace(strTest,"JOIN","<font color=""red""><b>JOIN</b></font>")
	strTest = Replace(strTest,"ON","<font color=""blue""><b>ON</b></font>")
	strTest = Replace(strTest,"WHERE","<font color=""green""><b>WHERE</b></font>")
	%><font size="-1"><%=strTest%></font><%
End Sub
%>
