
<% ' © 2007-2015 IRTech. All rights reserved.

Const kErrorType = 1
Const kWarningType = 2
Const kReplConflictsType = 100

Dim objSchoolRS, objStat, nErrorType, nViewSchoolID

Sub ReadState()
	Dim dtToday
	SetScriptTimeOut 900
	Set objSchoolRS = objNSNET.GetSchools()
	If objSchoolRS.EOF Then GenerateError obLanguage("ServAdmin","kErrSchoolsNotExist")
	nViewSchoolID = GetSafeLng(Request("SCHOOL"), GetSafeLng( obTokenMgr.GetData(strToken, "ViewSchoolID"), -3) )
	If nViewSchoolID=0 Then nViewSchoolID = CLng(objSchoolRS("SCHOOLID"))
	nErrorType = CLng(GetSafeID(Request("ErrorType"), GetSafeID( obTokenMgr.GetData(strToken, "StatErrorType"), 1)))

	' possible dates are within the current school year + summer time
	dtToday = NSDate()
	If Month(dtToday)>=9 Then
		dtMinDate = DateSerial( Year(dtToday)  , 6, 1 )
		dtMaxDate = DateSerial( Year(dtToday)+1, 8, 31 )
	Else
		dtMinDate = DateSerial( Year(dtToday)-1, 6, 1 )
		dtMaxDate = DateSerial( Year(dtToday)  , 8, 31 )
	End If
	Call ReadDatePeriod(dtToday, dtMinDate, dtMaxDate)

End Sub

Sub Main
	Set objStat = objNSNET.GetErrorStats(nViewSchoolID, nErrorType, dtStartDate, dtEndDate)
	TestError obLanguage("ServAdmin","kErrCantGetUserStatistics")
End Sub

Sub DrawTable()
	Dim bShowDate, n, i
	If objStat.EOF Then
		DrawInfo obLanguage("ServAdmin","kNoErrorStatistics"), True
	Else
		n = 0 
		bShowDate = DateDiff("d", dtStartDate, dtEndDate, 0, 0) <> 0%>
		<table class="table table-bordered table-condensed print-block">
		<tr><%
		If nViewSchoolID=-3 Then
			%><th><%=obLanguage("Common","kSchool",strFunctionalityType)%></th><%
		End IF
		%><th><%=obLanguage("ServAdmin","kErrorTime")%></th>
		<th><%=obLanguage("Common","kDisplayName")%></th>
		<th><%=obLanguage("ServAdmin","kErrorInfo")%></th>
		<th><%=obLanguage("ServAdmin","kIPAddress")%></th>
		</tr><%
		Do While Not objStat.EOF
			Response.Write "<tr>"
			If nViewSchoolID=-3 Then Response.Write "<td class=""text-nowrap"">" & DB2HTML(objStat("SCHOOLNAME")) & "</td>"
			Response.Write "<td class=""text-nowrap"">"
			If bShowDate Then Response.Write Date2Str(objStat("EVENTTIME")) & "&nbsp;"
			Response.Write Time2Str_h_mm_ss(objStat("EVENTTIME")) & "</td>"

			Response.Write "<td class=""text-nowrap"">" & DB2HTML(objStat("NICKNAME")) & "</td>"
			Response.Write "<td>" & DB2HTML(objStat("INFO")) & "</td>"
			Response.Write "<td class=""text-center"">" & DB2HTML(objStat("REMOTEADDR")) & "</td></tr>"
			n = n + 1
			objStat.MoveNext
		Loop
		%></table>
		<div class="span4 print-block">
			<ul class="site-stats">
				<li>
					<small><%= obLanguage("ServAdmin","kErrorsCount")%></small>
					<strong><%= CStr(n)%></strong>
				</li>
			</ul>
		</div><%
	End If
End Sub%>
