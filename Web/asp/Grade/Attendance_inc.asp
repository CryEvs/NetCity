<% ' © 2007-2013 IRTech. All rights reserved.

Sub DrawLegend()
	DrawInfo obLanguage("Grade","kLegendAttendance",strFunctionalityType), False
    If strFunctionalityType <> 1 Then
	    %><div class="legend print-block">
		    <div>
			    <p><span class="legend-label individual-educ"></span><span class="legend-description"> — <%=DB2Html(obLanguage("Common","kIndividualEduc"))%></span></p>
		    </div>
	    </div><%
    End If
End Sub

Function GetAttendanceTable( bLink, bReport)
	Dim arrDays, i, nDays, strReport, nRow
	Dim strName, nStudID
	Dim nStudentTotalAttendance
	Dim bDeletedStudent
	Dim arrStudentOnIndividualEducForm
	Dim objStudentAttendance, nStudAttDay

	Set arrStudentOnIndividualEducForm = obTokenMgr.GetData( strToken, stStudentsOnIndividualEducForm )
	arrDays = rsDays.GetRows()
	nDays = UBound( arrDays, 2 )
	If bReport Then
		strReport = "<table class=""table-print-num"" >"
	Else
		strReport = "<table class=""table table-bordered table-hover table-striped table-xs table-thin print-block"" >"
	End If
	strReport = strReport & "<tr><th rowspan=""2"">"& obLanguage("Common","kStudents",strFunctionalityType) & _
		"</th><th colspan="""& nDays+1&""">"& obLanguage.GetMonthName(lngCurrMonth) & _
		"</th><th rowspan=""2"">" & obLanguage("Reports","kTotal2") & "</th></tr>"
	strReport = strReport & "<tr>"
	For i=0 To nDays
		strReport = strReport & "<th width=""18"" class=""cell-num-center"">"& Day(arrDays(0,i) )&"</th>"
	Next
	strReport = strReport & "</tr>"
	nRow = 0

	While Not rsStudents.EOF
		nRow = nRow + 1
'		strName = "<span>" & nRow & ". " & DB2HTML(MakeShortNickName(rsStudents)) & "</span>"
		strName = "<span>" & nRow & ". " & DB2HTML(rsStudents("NICKNAME")) & "</span>"
		nStudID = CLng(rsStudents("STUDENTID"))
        bDeletedStudent = Not IsDull(rsStudents("FREEID"))
		nStudentTotalAttendance = 0
		strReport = strReport & "<tr"
		If bReport Then
			strReport = strReport & ">"
			strReport = strReport & "<td class=""cell-text""><nobr>"
		Else
			strReport = strReport & " class=""text-center" & IIF(arrStudentOnIndividualEducForm.Contains(nStudID), " individual-educ", "") & """>"
			strReport = strReport & "<td align=""left"" class=""student-name text-nowrap""><nobr>"
		End If
		If bLink And Not bDeletedStudent Then 
			strReport = strReport & ShowAnchor( "EditStudent('EditAttendance.asp', '" & nStudID & "')" , obLanguage("Grade","kEditReasons"), strName, "")
		Else 
			strReport = strReport & strName
		End If
		strReport = strReport &"</nobr></td>"

		If Not dctAttendances.Contains(nStudID) Then
			For i=0 To nDays
				strReport = strReport & "<td>&nbsp;</td>"
			Next	
		Else
			Set objStudentAttendance = dctAttendances(nStudID)
			i = 0
			Do While Not objStudentAttendance.EOF
				nStudAttDay =  Day( objStudentAttendance("DAY") )
				While Day(arrDays(0,i) ) < nStudAttDay
					strReport = strReport & "<td>&nbsp;</td>"
					i=i+1
				Wend
				If Day(arrDays(0,i) ) = nStudAttDay Then
					strReport = strReport & "<td>" & objStudentAttendance("CNT") & "</td>"
					nStudentTotalAttendance = nStudentTotalAttendance + CLng(objStudentAttendance("CNT"))
					i=i+1
				Else
					strReport = strReport & "<td>&nbsp;</td>"
				End If
				objStudentAttendance.MoveNext
			Loop
			For i=i To nDays
				strReport = strReport & "<td>&nbsp;</td>"
			Next	
		End If
		strReport = strReport & "<td class=""totals"">" & IIF(nStudentTotalAttendance>0,nStudentTotalAttendance,"&nbsp;") & "</td>"
		strReport = strReport & "</tr>"
		rsStudents.MoveNext
	Wend
	GetAttendanceTable = strReport & "</table><br>"
End Function
%>
