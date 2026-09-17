<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Seniorities_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strStaffID, arrSenior

Sub ReadState()
	strStaffID = obTokenMgr.GetData(strToken, stUsersStaffUserID)
	If IsDull(strStaffID) Then GenerateError obLanguage("Common","kInvalidParameter")
End Sub

Sub Main
	Dim objCmd, objRs

	Set objCmd = objNSNET.GetStaffSeniorities_Prepare()
	Set objRs = objNSNET.GetStaffSeniorities_Execute(objCmd, strStaffID)
	Call objNSNET.DisposeCommand(objCmd)
	If objRs.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
	arrSenior = GetSenArray(objRs)
End Sub

Sub DrawTable()
	Dim arrSenForType, arrTotals
	Dim strSenName, dtStart, dtEnd, strEnd
	Dim i, j%>

	<table class="ThinTable" border="1" cellspacing="0" cellpadding="1">
		<tr nowrap bgcolor="#e7eff7"><th><%=obLanguage("SetupSchool","kSenType")%></th><th><%=obLanguage("SetupSchool","kSenStartDate")%>&nbsp;-&nbsp;<%=obLanguage("SetupSchool","kSenEndDate")%></th><th><%=obLanguage("SetupSchool","kSeniorities")%></th></tr><%
		For i = 0 To Ubound(arrSenior, 2)
			strSenName = arrSenior(1, i)
			arrSenForType = arrSenior(2, i)
			arrTotals = arrSenior(3, i)%>
			<tr><td valign="top"><%=DB2HTML(strSenName)%></td><%
			If IsArray(arrTotals) Then%>
				<td><%
				dtEnd = Null
				For j = 0 To Ubound(arrSenForType, 2)
					dtStart = arrSenForType(1, j)
					dtEnd = arrSenForType(2, j)
					If j <> 0 Then%><br><%End If%>
					<%=Date2Str(dtStart)%>&nbsp;<%If Not IsNull(dtEnd) Then%>-&nbsp;<%=Date2Str(dtEnd)%><%End If
				Next%>
				</td><td valign="top"><%=(arrTotals(0) & " " & obLanguage("SetupSchool","kYears") & ", " & arrTotals(1) & " " & obLanguage("SetupSchool","kMonthsS") & ", " & arrTotals(2) & " " & obLanguage("SetupSchool","kDaysS"))%></td><%			
			Else%>
				<td>&nbsp;</td><td>&nbsp;</td><%			
			End If%>
			</tr><%			
		Next%>
	</table><%		
End Sub
%>
