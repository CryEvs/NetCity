
<% ' © 2007-2015 IRTech. All rights reserved.

Const kTypeAll = -1

Dim objSchoolRS, objStat, strViewSchoolID
Dim objTypesRS, strTypeID

Sub ReadState()
	Dim dtToday
	Set objSchoolRS = objNSNET.GetSchools()
	If objSchoolRS.EOF Then GenerateError obLanguage("ServAdmin","kErrSchoolsNotExist")
	strViewSchoolID = GetSafeID(Request("SCHOOL"), GetSafeID( obTokenMgr.GetData(strToken, "ViewSchoolID"), "0") )
	If strViewSchoolID="0" Or CLng(strViewSchoolID)<0 Then strViewSchoolID = CStr(objSchoolRS("SCHOOLID"))

	Set objTypesRS = objNSNET.GetSMSEventTypes()
	If objTypesRS.EOF Then GenerateError obLanguage("ServAdmin","kErrSMSTypesNotExist")
	strTypeID = GetSafeID(Request("SMSEVENTTYPE"), GetSafeID( obTokenMgr.GetData(strToken, "SMSEventType"), "-1") )

	' dtMinDate = 1.1.2005
	' dtMaxDate = dtToday + 1 Year
	dtToday = NSDate()
	dtMinDate = DateSerial(2005, 1, 1)
	dtMaxDate = DateAdd("yyyy", 1, dtToday)

	Call ReadDatePeriod(dtToday, dtMinDate, dtMaxDate)
End Sub

Sub Main
	Set objStat = objNSNET.GetSMSEventsStat(strViewSchoolID, strTypeID, Year(dtStartDate), Month(dtStartDate), Day(dtStartDate), Year(dtEndDate), Month(dtEndDate), Day(dtEndDate))
	TestError obLanguage("ServAdmin","kErrCantGetSMSStatistics")
End Sub

Sub DrawTable()
	Dim nCnt, bShowType

	If objStat.EOF Then
		DrawInfo obLanguage("ServAdmin","kNoSMSStatistics"), True
	Else 
		bShowType = (strTypeID = "-1")
		nCnt = 0%>
		<table class="table table-bordered table-condensed table-thin print-block">
			<tr>
				<th><%=obLanguage("Common","kUserName")%></th>
				<th><%=obLanguage("ServAdmin","kSMSDate")%></th>
				<%If bShowType Then%><th><%=obLanguage("ServAdmin","kType")%></th><%End If%>
				<th><%=obLanguage("ServAdmin","kStatus")%></th>
				<th><%=obLanguage("ServAdmin","kMobile")%></th>
			</tr><%
			While Not objStat.EOF%>
				<tr>
					<td><%=DB2HTML(objStat("NICKNAME"))%></td>
					<td><%=Date2Str(objStat("SMSTIME"))%>&nbsp;<%=Time2Str_h_mm_ss(objStat("SMSTIME"))%></td>
					<%If bShowType Then%><td><%=DB2HTML(objStat("TYPENAME"))%></td><%End If%>
					<td class="text-center"><%=DB2HTML(objStat("STATUS"))%></td>
					<td><%=DB2HTML(objStat("MOBILE"))%></td><%
				nCnt = nCnt + 1
				objStat.MoveNext
			WEnd%>
		</table>
		<div class="span4">
			<ul class="site-stats">
				<li>
					<small><%=obLanguage("ServAdmin","kTotalSMS") & ": "%></small>
					<strong><%=GreenText(CStr(nCnt))%></strong>
				</li>
			</ul>
		</div><%
	End If
End Sub

Function GetSMSTypeName()
	Dim strTypeName
	strTypeName = ""
	If strTypeID = "-1" Then
		strTypeName = obLanguage("Common","kAll")
	Else
		Do While Not objTypesRS.EOF
			If strTypeID = GetSafeID(objTypesRS("EVENTTYPEID"), Null) Then
				strTypeName = GetSafeStr(objTypesRS("TYPENAME"), -1, Null)
				Exit Do
			End If
			objTypesRS.MoveNext
		Loop
	End If
	If strTypeName = "" Then GenerateError obLanguage("Common","kInvalidParameter")
	GetSMSTypeName = strTypeName
End Function
%>
