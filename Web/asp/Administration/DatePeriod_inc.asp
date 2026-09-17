
<% ' © 2007-2013 IRTech. All rights reserved.
Dim dtStartDate, dtEndDate
Sub ReadDatePeriod(dtToday, dtMinDate, dtMaxDate)
	dtToday = NSDate()
	If IsDull(Request("ADT")) Then
		If IsDull(obTokenMgr.GetData(strToken, stStartDate)) Then
			dtStartDate = dtToday
		Else
			dtStartDate = obTokenMgr.GetData(strToken, stStartDate)
		End If
	Else
		dtStartDate = Str2Date(Request("ADT"))
	End If
	If IsDull(Request("DDT")) Then
		If IsDull(obTokenMgr.GetData(strToken, stEndDate)) Then
			dtEndDate = dtToday
		Else
			dtEndDate = obTokenMgr.GetData(strToken, stEndDate)
		End If
	Else
		dtEndDate = Str2Date(Request("DDT"))
	End If
	If DateDiff("d",dtStartDate,dtMinDate,0,0)>0 Or DateDiff("d",dtStartDate,dtMaxDate,0,0)<0 Then dtStartDate = dtMinDate
	If DateDiff("d",dtEndDate,dtMinDate,0,0)>0 Or DateDiff("d",dtEndDate,dtMaxDate,0,0)<0 Then dtEndDate = dtMaxDate
End Sub

%>
