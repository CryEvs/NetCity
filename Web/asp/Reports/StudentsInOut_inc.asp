<!-- #INCLUDE FILE="../Grade/Mark_inc.asp" -->

<% ' � 2007-2013 IRTech. All rights reserved.
'--------- Page Parameters -------
' AT=<Access Token>
' CLID=<Class ID>
' SID=<Student ID>
' RP="R" - send report

Dim strClassID, strStudentID, strStudentName, strClassName
Dim objStudentMarksRs, objTermsRs, arrTerms
Dim strSIDArray, bNoMarks, objDSCon
Dim arrExamTypes, nExamTypesCnt, arrDrawExams
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim rec, tmpDate
Dim resCache1(), resCache2(), resCount

Sub specialRead()
	strClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrClass), "0")
	strStudentID = GetSafeID(Request("SID"), "0")
	strSIDArray = obTokenMgr.GetData(strToken, stAvailableSID)
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then GenerateError obLanguage("Common","kNoAccess")

	strEndDate = GetSafe("DDT", "")
	strStartDate = GetSafe("ADT", "")
	dtEndDate = GetSafeDate(strEndDate, Null)
	dtStartDate = GetSafeDate(strStartDate, Null)
End Sub

Sub specialMain()
	Dim objExamTypes
	If IsDull(strSIDArray) Or InStr(strSIDArray, "|" &strStudentID& "|")=0 Then
		GenerateError kNoAccess
	End If
	strStudentName = objNSNET.GetUserNickName(strStudentID)
	strClassName = objNSNET.GetClassName(strClassID)

	Dim conn, ccstr
	ccstr = "Provider=SQLOLEDB;Data Source=localhost\SQLSERVER;User ID=Rash96;Password=111111111;Initial Catalog=SchoolWindow;Persist Security Info=True;Min Pool Size=5; "
	Set conn = Server.CreateObject("ADODB.Connection")
	conn.Open ccstr


	Dim cmd
	Set cmd = Server.CreateObject("ADODB.Command")
	cmd.ActiveConnection = conn

	cmd.CommandText = "" &_
		"select rmin.reg_time as [Enter], rmax.reg_time as [Exit] " &_
		"from " &_
		"( " &_
		" select min(j.attemptdate) as reg_time " &_
		" from journal j " &_
		"   inner join client c on c.id = j.clientid " &_
		"   inner join door d on d.id = j.numdoor " &_
		" where c.externalid=? " &_
		"   and d.direction = 1 " &_
		"   and j.attemptdate > ? " &_
		"   and dateadd(day, -1, j.attemptdate) < ? " &_
		" group by datepart(dayofyear, j.attemptdate), " &_
		"   datepart(day, j.attemptdate) " &_
		") rmin " &_
		" full join " &_
		" ( " &_
		"   select max(j.attemptdate) as reg_time " &_
		"   from journal j " &_
		"     inner join client c on c.id = j.clientid " &_
		"     inner join door d on d.id = j.numdoor " &_
		"   where c.externalid=? " &_
		"     and d.direction = 0 " &_
		"     and j.attemptdate > ? " &_
		"     and dateadd(day, -1, j.attemptdate) < ? " &_
		"   group by datepart(dayofyear, j.attemptdate), " &_
		"     datepart(day, j.attemptdate) " &_
		" ) rmax" &_
		" on datepart(dayofyear, rmax.reg_time) = datepart(dayofyear, rmin.reg_time) " &_
		"   and datepart(year, rmax.reg_time) = datepart(year, rmin.reg_time)"

	cmd.Parameters.Append cmd.CreateParameter ("student_id", 3, &H0001, 0, strStudentID)
	cmd.Parameters.Append cmd.CreateParameter ("student_id", 7, &H0001, 0, dtStartDate)
	cmd.Parameters.Append cmd.CreateParameter ("student_id", 7, &H0001, 0, dtEndDate)
	cmd.Parameters.Append cmd.CreateParameter ("student_id", 3, &H0001, 0, strStudentID)
	cmd.Parameters.Append cmd.CreateParameter ("student_id", 7, &H0001, 0, dtStartDate)
	cmd.Parameters.Append cmd.CreateParameter ("student_id", 7, &H0001, 0, dtEndDate)

	Set rec = cmd.Execute() 

	'response.write strStudentID & "*"
	'response.write dtStartDate & "*"
	'response.write dtEndDate & "*"

	'response.write rec.BOF & "*"
	'response.write rec.EOF & "*"


	if datediff("d", dtStartDate, dtEndDate) < 0 then
		tmpDate = dtStartDate
		dtStartDate = dtEndDate
		dtEndDate = dtStartDate
	end if

	resCount = datediff("d", dtStartDate, dtEndDate)
	redim resCache1(resCount)
	redim resCache2(resCount)

	while not (rec.BOF OR rec.EOF)
		'response.write rec("Enter") & "-" & rec("Exit") & "; "
		if (len(rec("Enter")) > 0) then 
			resCache1(datediff("d", dtStartDate, rec("Enter"))) = FormatDateTime(rec("Enter"), 3)
		end if
		if (len(rec("Exit")) > 0) then 
			resCache2(datediff("d", dtStartDate, rec("Exit"))) = FormatDateTime(rec("Exit"), 3)
		end if

		rec.MoveNext
	wend

	conn.Close

	strReport = GetReport()
End Sub

Function GetTableHeader()
End Function

Function GetTableHeaderString()
End Function

Function GetReportTable()
	Dim strReport, i, months(12)

	months(1) = obLanguage("Common", "kJanuary")
	months(2) = obLanguage("Common", "kFebruary")
	months(3) = obLanguage("Common", "kMarch")
	months(4) = obLanguage("Common", "kApril")
	months(5) = obLanguage("Common", "kMay")
	months(6) = obLanguage("Common", "kJune")
	months(7) = obLanguage("Common", "kJuly")
	months(8) = obLanguage("Common", "kAugust")
	months(9) = obLanguage("Common", "kSeptember")
	months(10) = obLanguage("Common", "kOctober")
	months(11) = obLanguage("Common", "kNovember")
	months(12) = obLanguage("Common", "kDecember")

	strReport = GetTableHeader() & "<th>" & obLanguage("Common", "kDate") & "</th><th>" & obLanguage("Common", "kEntry") & "</th><th>" & obLanguage("Common", "kExit") & "</th></tr>"
	Dim lastMonth, curDate, curMonth
	lastMonth = 0

	For i = 0 To resCount
	curDate = dateadd("d", i, dtStartDate)
	curMonth = datepart("m", curDate)

	if lastMonth <> curMonth then
		lastMonth = curMonth
		strReport = strReport & GetTableHeaderString() & "<th colspan=""3"">" & months(curMonth) & "</th></tr>"
	end if

	strReport = strReport & "<tr><td>" & DB2HTML(curDate) & "</td>"

	strReport = strReport & "<td>" & IIF(len(resCache1(i)) = 0, "-", resCache1(i)) & "</td>"
	strReport = strReport & "<td>" & IIF(len(resCache2(i)) = 0, "-", resCache2(i)) & "</td>"

	strReport = strReport & "</tr>"
	Next

	strReport = strReport & "</table>"
	GetReportTable = strReport
End Function
%>
