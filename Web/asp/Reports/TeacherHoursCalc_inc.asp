<!-- #INCLUDE FILE="DrawReports_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
Const kInd_NAME = 0
Const kInd_SUBJECTNAME = 1
Const kInd_CM_CNT = 2
Const kInd_CM_CNT2 = 3
Const kInd_ID = 4
'Const kInd_GROUPABBREV = 5


Dim strTeacherID, strTeacher
Dim dtStartDate, dtEndDate, strStartDate, strEndDate
Dim bEmpty, dct, id, bEmpty2, bEmpty3
Dim objTeacherHours, objCsgCurHours
Dim objTeacherHours2, objCsgCurHours2
Dim objTeacherHours3, objCsgCurHours3


Function GetPageTitle()
	GetPageTitle = obLanguage("ReportNames","kRNTeacherHoursCalc",strFunctionalityType)
End Function
Function GetPageParams()
	GetPageParams = _
		Array(obLanguage("Common","kSchoolYear"), obTokenMgr.GetData(strToken, "CurrYearName"), _
		obLanguage("Filter","kTeacherGB",strFunctionalityType), strTeacher, _
		obLanguage("Common","kStartDate"), strStartDate, _
		obLanguage("Common","kEndDate"), strEndDate)
End Function

Sub specialRead()
	strTeacherID = GetSafeID(GetSafe("TID",Null), Null)

	SetScriptTimeOut 900
	ReadDateRange
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCurrTeacher, strTeacherID)
	Call obTokenMgr.SetData(strToken, stStartDate, dtStartDate)
	Call obTokenMgr.SetData(strToken, stEndDate, dtEndDate)
End Sub

Sub specialMain()
	strTeacher = objNSNET.GetUserNickName(strTeacherID)
	Set dct=CreateObject("NetCity.DictionaryStorage")

	Set objTeacherHours = objNSNET.GetTeacherSgCMHours(CurricularType_Cup, strTeacherID, dtStartDate, dtEndDate, strCurrYearID)
	bEmpty = objTeacherHours.EOF

	Set objTeacherHours2 = objNSNET.GetTeacherSgCMHours(CurricularType_Iup, strTeacherID, dtStartDate, dtEndDate, strCurrYearID)
	bEmpty2 = objTeacherHours2.EOF

	Set objTeacherHours3 = objNSNET.GetTeacherSgCMHours(CurricularType_Ea, strTeacherID, dtStartDate, dtEndDate, strCurrYearID)
	bEmpty3 = objTeacherHours3.EOF

	If bEmpty And bEmpty2 And bEmpty3 Then
		strErrMsg = obLanguage("Reports","kTeacherHasNoCMInTime",strFunctionalityType)
	Else
		If Not bEmpty Then
			Set objCsgCurHours = objNSNET.GetCSgCuriculumHours(strCurrYearID, strTeacherID, dtStartDate, dtEndDate)
		End If

		If Not bEmpty2 Then
			Set objCsgCurHours2 = objNSNET.GetISgCuriculumHours(strCurrYearID, strTeacherID, dtStartDate, dtEndDate)
		End If

		If Not bEmpty3 Then
			Set objCsgCurHours3 = objNSNET.GetEaSgCuriculumHours(strCurrYearID, strTeacherID, dtStartDate, dtEndDate)
		End If
	End If
End Sub


Sub ProcessCsg(objCsgCurHours)
	Dim idnew, workdays, week_workdays, sumHours, term, sum, weeks, h
	Dim isEOF, strTotal, precise, rounded
	strTotal = td(obLanguage("Reports","kTotal_2") & ":")
	id = 0
	precise = 2
	week_workdays = objNSNET.Weekworkdays(strCurrYearID)
	Do
		isEOF = objCsgCurHours.EOF
		If Not isEOF Then idnew=GetSafeLng(objCsgCurHours("sgid"),NULL)

		if idnew<>id Or isEOF Then
			rounded = Round(sum, 0)
			If rounded = 0 Then rounded = 1
			term =  vbCRLF & "<table class='NullTable'><tr>" & term & strTotal
			If sum=rounded Then
				term = term & "<td colspan='4'>&nbsp</td>"
			Else
				term = term & "<td colspan='3'>" & sum &"</td><td>~</td>"
			End If
			term = term & td(rounded)& "</tr></table>"
			dct(id)=Array( term , rounded )
			If isEOF Then Exit Do
			id=idnew
			sum=CDbl(0)
			term="<tr>"
		End If
		term=term & td(objCsgCurHours("TERMNAME") & ":")
		workdays = objCsgCurHours("workdays")

		' #21506 - пришло значение NULL
		'sumHours=CDbl(objCsgCurHours("sumHours"))
		sumHours = GetSafeDbl(objCsgCurHours("WeekHours"), 0)

		weeks = GetSafeDbl(objCsgCurHours("WorkWeeks"), 0)
		h = CDbl(weeks) * sumHours
		term = term & td(weeks) & td("*") & td(sumHours) & td("=") & td( Round(h,precise) )
		sum= sum+h
		term= term  & "</tr>"
		objCsgCurHours.MoveNext 
	Loop
End Sub


Function GetTableHeader()
	GetTableHeader = vbCRLF & "<table class='table-print-num'>"
End Function

Function GetCell(teg, style, nColSpan, nRowSpan, txt)
	Dim strSpan
	strSpan=""
	If nColSpan > 1 Then strSpan = " colspan='" & nColSpan & "'"
	If nRowSpan > 1 Then strSpan = strSpan & " rowspan='" & nRowSpan & "'"
	GetCell = "<"&teg&strSpan & style&">" &txt& "</"&teg&">"
End Function

Function th( txt)
	th =  GetCell("th","", 1, 1, txt)
End Function
Function td( txt)
	td =  GetCell("td","", 1, 1, txt)
End Function


Function GetReportTable()
	GetReportTable = ""
	If Not bEmpty Then
		Call ProcessCsg(objCsgCurHours)
		GetReportTable = GetReportTableCsg(objTeacherHours)
	End If
	If Not bEmpty2 Then
		GetReportTable = GetReportTable & "<br>"
		Call ProcessCsg(objCsgCurHours2)
		GetReportTable = GetReportTable & GetReportTableCsg(objTeacherHours2)
	End If
	If Not bEmpty3 Then
		GetReportTable = GetReportTable & "<br>"
		Call ProcessCsg(objCsgCurHours3)
		GetReportTable = GetReportTable & GetReportTableCsg(objTeacherHours3)
	End If
End Function


Function GetReportTableCsg(objTeacherHours)
	Dim arrTeacherHours, strReport, i, strSubjGroup
	Dim dCurHours, dPastHours, dRemainder, dSum
	Dim strClasses, strLessons, strByTeacher, strOther, strDiff, strPercent, strByCurriculum
	
	strClasses = "<tr>" & th( obLanguage("Common","kClass",strFunctionalityType) )
	strLessons = "<tr>" & th( obLanguage("Reports","k_MeetingsCount") )
	strByTeacher = "<tr>" & GetCell("td"," class='cell-text'", 1, 1, obLanguage("Reports","k_FromThem_") &":<br>"& DB2HTML(strTeacher) )
	strOther = "<tr>" & GetCell("td"," class=""cell-text""", 1, 1, obLanguage("Reports","kOthers"))
	strDiff = "<tr>" & th( DB2HTML_BR(obLanguage("Reports","kRemainder")) )
	strPercent = "<tr class='cell-percent'>" & th( obLanguage("Reports","kPercentMeetingsByCuriculum"))
	strByCurriculum = "<tr class='text-nowrap'>" & th( DB2HTML_BR(obLanguage("Reports","kHoursCntByCuriculum")) )

	arrTeacherHours = objTeacherHours.GetRows(,,Array("CLASSNAME", "NAME", "CM_CNT", "CM_CNT2", "SGID"))', "ALLTERMSHOURS", "GROUPABBREV"

	strReport = GetTableHeader()

	strReport = strReport & "<tr>"& th( obLanguage("Common","kSubject"))
	For i = 0 To UBound(arrTeacherHours, 2)
		strSubjGroup = arrTeacherHours(kInd_SUBJECTNAME, i)
		' If Not IsDull(arrTeacherHours(kInd_GROUPABBREV, i)) Then
			' strSubjGroup = strSubjGroup & "/" & arrTeacherHours(kInd_GROUPABBREV, i)
		' End If
		dCurHours = CLng(arrTeacherHours(kInd_CM_CNT, i))
		dPastHours = CLng(arrTeacherHours(kInd_CM_CNT2, i))

		strReport = strReport & th( DB2HTML(strSubjGroup) )
		strClasses = strClasses & th( DB2HTML(arrTeacherHours(kInd_NAME, i)) )
		strLessons = strLessons & td( dPastHours )
		strByTeacher =  strByTeacher & td( dCurHours )
		strOther =  strOther & td( dPastHours - dCurHours )
		id = CLng(arrTeacherHours(kInd_ID, i))
		If IsArray(dct(id)) Then
			dSum = CDbl(dct(id)(1))
			dRemainder = Round(dSum-dPastHours, 0)
			strDiff =  strDiff & td( dRemainder )
			strPercent = strPercent & td(Round( 100.0 * (1-(dRemainder / dSum )), 0) )
			strByCurriculum = strByCurriculum & GetCell("td"," style='vertical-align:bottom'", 1, 1, dct(id)(0))
		Else 
			strDiff = strDiff & td("&nbsp")
			strPercent = strPercent & td("&nbsp")
			strByCurriculum = strByCurriculum & td("&nbsp")
		End If
	Next
	strReport = strReport & "</tr>"
	strReport = strReport &vbCRLF & strClasses & "</tr>"
	strReport = strReport &vbCRLF & strLessons & "</tr>"
	strReport = strReport &vbCRLF & strByTeacher & "</tr>"
	strReport = strReport &vbCRLF & strOther & "</tr>"
	strReport = strReport &vbCRLF & strByCurriculum & "</tr>"
	strReport = strReport &vbCRLF & strDiff & "</tr>"
	strReport = strReport &vbCRLF & strPercent & "</tr>"

	GetReportTableCsg = strReport & "</table>"
End Function
%>
