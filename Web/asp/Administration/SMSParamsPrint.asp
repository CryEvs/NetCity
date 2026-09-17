<!-- #INCLUDE FILE="../headerprint.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kEONameMaxLen = 50
Const kCityNameMaxLen = 30

Dim objSMSParams

Sub Main
    Set objSMSParams = objNSNET.GetSMSParams()
	TestError obLanguage("ServAdmin","kErrCantGetSMSParams")
End Sub

Sub DrawTable()
	Dim nEONameLen, nCityNameLen
	Dim nEONameCurrLen, nCityNameCurrLen

	If objSMSParams.EOF Then%>
		<h3 align="left"><%=obLanguage("ServAdmin","kNoSchoolsOnServer")%></h3><%
	Else
		nEONameLen = 0
		nCityNameLen = 0
		While Not objSMSParams.EOF
			nEONameCurrLen = Len(GetSafeStr(objSMSParams("EONAME"), -1, ""))
			nCityNameCurrLen = Len(GetSafeStr(objSMSParams("CITYNAME"), -1, ""))

			If nEONameLen < nEONameCurrLen Then
				nEONameLen = nEONameCurrLen
			End If
			If nCityNameLen < nCityNameCurrLen Then
				nCityNameLen = nCityNameCurrLen
			End If

			objSMSParams.MoveNext
		WEnd
		objSMSParams.MoveFirst

		If nEONameLen > kEONameMaxLen Then
			nEONameLen = kEONameMaxLen
		End If
		If nCityNameLen > kCityNameMaxLen Then
			nCityNameLen = kCityNameMaxLen
		End If%>

		<table class="table-print-text table-condensed table-bright-striped">
			<tr>
				<th><b><%=obLanguage("ServAdmin","kSchools")%></b></th>
				<th><b><%=obLanguage("ServAdmin","kCity2")%></b></th>
				<th><b><%=obLanguage("ServAdmin","kGUID")%></b></th>
				<th><b><%=obLanguage("ServAdmin","kSchoolServerID")%></b></th>
			</tr><%
			While Not objSMSParams.EOF%>
				<tr>
					<td class="text-nowrap"><%=SetStrLen(objSMSParams("EONAME"), nEONameLen)%></td>
					<td class="text-nowrap"><%=SetStrLen(objSMSParams("CITYNAME"), nCityNameLen)%></td>
					<td ><%=DB2HTML(objSMSParams("UNISCHOOLID"))%></td>
					<td ><%=DB2HTML(objSMSParams("SERVERID"))%></td>
				</tr><%
				objSMSParams.MoveNext
			WEnd%>
		</table><%
	End If
End Sub

Function SetStrLen(strIn, nLenIn)
	Dim str, nLen
	Dim nCnt, i
	Dim strNBSP

	strNBSP = ""
	nLen = Len(strIn)
	If nLen < nLenIn Then
		nCnt = nLenIn - nLen
		str = strIn
		For i = 1 To nCnt
			strNBSP = strNBSP & "&nbsp;"
		Next
	ElseIf nLen > nLenIn Then
		str = Left(strIn, nLenIn)
	Else ' =
		str = strIn
	End If
	SetStrLen = DB2HTML(str) & strNBSP
End Function

Sub onDrawPage()
	Response.Write GetPageTitlePrint(obLanguage("ServAdmin","kTitleSMSParams"), Null)
	Call DrawTable()
	Response.Write GetPageVerPrint()
End Sub
%>
