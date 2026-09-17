<%@ Language=VBScript %>
<% ' © 2007-2008 IRTech. All rights reserved.
Option Explicit
Response.Buffer = TRUE
Session.CodePage = 1251
Response.Charset = "windows-1251"
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
%>
<!-- #INCLUDE FILE=scripts/common.asp -->
<!-- #INCLUDE FILE=scripts/stdhead.asp -->
<!-- #INCLUDE FILE="Reports/GradingScale_inc.asp" -->
<!-- #INCLUDE FILE="SetupSchool/SchoolSettings_inc.asp" -->
<!-- #INCLUDE File="SMS_inc.asp" -->
<!-- #INCLUDE FILE="scripts/assignment.asp" -->
<!-- #INCLUDE FILE="Grade/Mark_inc.asp" -->
<!-- #INCLUDE FILE="Grade/MarkTKR_inc.asp" -->
<%

Const RT_INVALID = -1
Const RT_DATE = 1
Const RT_NAME = 2
Const RT_PROGNOZ = 3
Const RT_ITOG = 4
Const ForReading = 1, ForWriting = 2, ForAppending = 8

Const kInvalidRequest = "Некорректный запрос. Укажите одно из слов Дневник, Балл, Итог"
Const kInvalidAbonent = "Не указан абонент."
Const kNoNumberOrNoStudents = "Ваш номер не зарегистрирован в базе данных родителей, либо Ваши дети не учатся в этой школе."

Const kAbsenceLetter = "н"

Const kLocalHost = "LOCALHOST:" ' используются для определения пути на диске к папке с базой данных
Const kDBFolder = "\DB\"


Dim strHelpLink
Dim strErrorValue, strMessageText, strResponseText, bErrorExit

Dim bDebugVersion
Dim nCount
Dim dtReqDate, strReqDate

Dim strReqText, strAbonent, strReqSubjectName
Dim nRequestType

Dim fso, f, bLogFile
Dim dtToday
Dim strResText
Dim strClassID, strStudentID, strStudentName
Dim strActivityID, strSubjClassID, nMaxMark, nMinMark
Dim objStudents
'Dim strUniSchoolID, strServerID
Dim objRS
Dim strID
Dim strSMSSchoolID, strParentID
Dim dtSMSEvent, cmdSMSLog
Dim strDBFolder, nLen, nPos
Dim bWeight
Dim cmdStudentAttRes, cmdStudentRes
Dim strSubjID, strErr


nRequestType = RT_INVALID
bErrorExit = False
'strErrorValue  = "NOERROR"
strErrorValue  = "" '"NOERROR"
bDebugVersion = (Request("IsDebug") = "true")
strMessageText = "Неизвестная ошибка контент-провайдера"

bLogFile = False
Set fso = CreateObject("Scripting.FileSystemObject")

' get path to log file
'strErrorValue = "Невозможно определить путь к log файлу."
'strDBFolder = UCase(CStr(Application("DB_STRING")))
'nLen = Len(strDBFolder)
'If nLen = 0 Then
'	bErrorExit = True
'Else
'	nPos = InStr(strDBFolder, kLocalHost)
'	If nPos = 0 Then
'		bErrorExit = True
'	Else
'		strDBFolder = Mid(strDBFolder, nPos + Len(kLocalHost))
'		nPos = InStrRev(strDBFolder, kDBFolder)
'		If nPos = 0 Then
'			bErrorExit = True
'		Else
'			strDBFolder = Left(strDBFolder, nPos - 1 + Len(kDBFolder))
'			If Len(strDBFolder) = 0 Then
'				bErrorExit = True
'			Else
'				Err.Clear
'				On Error Resume Next
'				Set f = fso.OpenTextFile(strDBFolder & kSMSLogFileName, ForAppending, True)
'				Err.Clear
'				On Error Goto 0
'				If Not IsObject(f) Then
'				   strErrorValue = "Невозможно открыть log файл."
'				   bErrorExit = True
'				   bLogFile = False
'				Else
'				   bLogFile = True
'				End If
'			End If
'		End If
'	End If
'End If
strDBFolder = UCase(CStr(Application("NS_FILES_PATH")))
Err.Clear
On Error Resume Next
Set f = fso.OpenTextFile(strDBFolder & "\" & kSMSLogFileName, ForAppending, True)
Err.Clear
On Error Goto 0
If Not IsObject(f) Then
   strErrorValue = "Невозможно открыть log файл."
   bErrorExit = True
   bLogFile = False
Else
   bLogFile = True
End If

If Not bErrorExit Then strErrorValue = ""

If Not bErrorExit Then
	If Not objNSNET.IsCanConnect(TRUE, strErr) Then
	   strErrorValue = "Ошибка подключение к базе данных школы " & strErr
	   bErrorExit = True
	End If
End If

strReqText = CStr(DB2HTML(Request("TEXT")))
strAbonent = CStr(DB2HTML(Request("ABONENT")))
strID = CStr(DB2HTML(Request("ID")))
strSMSSchoolID = ""

If kIsTKR Then
    Call GetMarkTypes_TKR()
End If

If bDebugVersion Then
	Response.Write "Request(Text) = " & strReqText & chr(13)
	strReqText = Trim(strReqText)
Else
	strReqText = Trim(hex2str(UCase(Trim(strReqText))))
'	strReqText = UCase(Trim(strReqText))
End If

If Not bErrorExit then
	If strReqText = "" Then
		strMessageText = kInvalidRequest
		bErrorExit = True
	End If
	If strAbonent = "" Then
		strMessageText = kInvalidAbonent
		bErrorExit = True
	End If
End if

'''''''''''''''' ANALYZE REQUEST TEXT
If Not bErrorExit then
	nRequestType = GetRequestType()
	If nRequestType = RT_INVALID Then
		strMessageText = kInvalidRequest
		bErrorExit = True
	End If

	If bDebugVersion Then
   		Response.Write "RT_TYPE = " & nRequestType & chr(13)
	End If
End If

''''''''''''''' GET StudentList
If Not bErrorExit Then
    Set objStudents = objNSNET.GetStudentsListForParentMobile(strAbonent)

	If objStudents.EOF Then
		strMessageText = kNoNumberOrNoStudents
		bErrorExit = True
	End If
End If

''''''''''''''' GET PWD for 1-st StudentID
strTimeOffset = "4" ' default
If Not bErrorExit Then
	strCurrYearID = GetSafeID(objStudents("SCHOOLYEARID"), Null)
	strParentID = GetSafeID(objStudents("PARENTID"), Null)

	strUniSchoolID = ""
	strServerID = ""
	Set objRS = objNSNET.GetYearInfo(strCurrYearID)
	If Not objRS.EOF Then
		strSMSSchoolID = GetSafeID(objRS("SCHOOLID"), Null)

		Set objRS = objNSNET.GetSchoolInfo(strSMSSchoolID)
		If Not objRS.EOF Then
			strUniSchoolID = GetSafeStr(objRS("UNISCHOOLID"), -1, "")
			strServerID = GetSafeStr(objRS("SERVERID"), -1, "")
			strTimeOffset = GetSafeStr(objRS("TIMEOFFSET"), -1, strTimeOffset)
		End If
	End If
	If strUniSchoolID = "" Then
		strMessageText = "Невозможно определить пароль"
		bErrorExit = True
	End If
	If strServerID = "" Then
		strMessageText = "Невозможно определить идентификатор сервера школы"
		bErrorExit = True
	End If
End If

dtToday = NSNow() ' call after strTimeOffset is determined
dtSMSEvent = dtToday
dtToday = DateSerial(Year(dtToday), Month(dtToday), Day(dtToday))

If bLogFile Then
	f.Write "[" & dtToday & "]: " & strAbonent & "#" & strReqText & "#" & vbCrLf
	If bErrorExit And strErrorValue <> "" Then
		f.Write strErrorValue & "#" & vbCrLf
	End If
End If

If strErrorValue = ""  Then
	strErrorValue = "NOERROR"
End If

Dim objHelper
Set objHelper = comHelper.AspHelper

strResponseText = "" & _
	"<?xml version=""1.0"" encoding=""windows-1251""?>" & _
	"<root>" & _
		"<metadata>" & _
			"<id>" & strID & "</id>" & _
			"<sending>0</sending>" & _
			"<serverid>" & strServerID & "</serverid>"

If strUniSchoolID <> "" Then
	strResponseText = strResponseText & _
			"<password>" & objHelper.MD5(CStr(strUniSchoolID) & strID) & "</password>"
Else
	strResponseText = strResponseText & _
			"<password></password>"
End If

strResponseText = strResponseText & _
			"<service>NetSchool</service>" & _
			"<error>" & strErrorValue & "</error>" & _
			"<type>SMS</type>" & _
		"</metadata>" & _
		"<content>"

If Not bErrorExit Then
	Select Case nRequestType
	Case RT_DATE' GET MARKS FOR REQESTED DAY
		Set cmdStudentAttRes = objNSNET.GetStudentAttendanceResults_Prepare(-1, dtReqDate, dtReqDate)
	Case RT_NAME' GET MARK FOR LAST WEEK
		Set cmdStudentAttRes = objNSNET.GetStudentAttendanceResults_Prepare(0, dtReqDate, dtReqDate)
	Case RT_PROGNOZ ' GET MARKS FORECAST FOR TERM
		Set cmdStudentRes = objNSNET.GetStudentResultsForSG_PrepareSimple(IIf(kIsTKR, 1, 0))
	End Select

	While Not objStudents.EOF
''''''''''''''' GET StudentID and ClassID
		strCurrYearID = GetSafeID(objStudents("SCHOOLYEARID"), Null)
		Call InitSchoolSettings( objNSNET )
		nMaxMark = arrSchoolSettings( 1, kSSIndex_MaxMark )
		nMinMark = arrSchoolSettings( 1, kSSIndex_MinMark )
		bWeight = (arrSchoolSettings(1, kSSIndex_MarksAveraging) = "1")

		strClassID = GetSafeID(objStudents("CLASSID"), Null)
		strStudentID =  GetSafeID(objStudents("STUDENTID"), Null)
		strStudentName = GetSafeStr(objStudents("LASTNAME"), -1, Null)
		If Not IsDull(objStudents("FIRSTNAME")) Then
			strStudentName = strStudentName & " " & GetSafeStr(objStudents("FIRSTNAME"), -1, "")
		End If
		If bDebugVersion Then
			Response.Write "Name:" & DB2HTML(strStudentName) & "ClassID: " & strClassID & " StudentID:" & strStudentID & chr(13)
		End If

		' Формируем сообщение для текущего ученика
		bErrorExit = False ' для текущего ученика может выставиться
		If Not bErrorExit then
			Select Case nRequestType
			Case RT_DATE' GET MARKS FOR REQESTED DAY
				strResText = GetMarksForDate()
			Case RT_NAME' GET MARK FOR LAST WEEK
				strResText = GetMarksForWeek()
			Case RT_PROGNOZ ' GET MARKS FORECAST FOR TERM
				strResText = GetMarkForecastForAllSubjects()
			Case RT_ITOG ' GET TOTAL MARKS FOR SUBJECT
				strResText = GetTotalMarks()
			End Select
			If nRequestType = RT_DATE Then
			    If (strResText = "") then
			       strMessageText = "Дневник не содержит записей на " & strReqDate
			    Else
			       strMessageText = strReqDate & Chr(13) & strResText
			    End If
			Else
			    If (strResText = "") then
			       strMessageText = "Дневник не содержит записей удовлетворяющих запросу"
			    Else
			       strMessageText = strResText
			    End If
		    End If
		End If
		strMessageText = strStudentName & Chr(13) & strMessageText

		strResponseText = strResponseText & _
			"<sms>" & _
				"<smstype>1</smstype>" & _
				"<abonent>" & strAbonent & "</abonent>" & _
				"<message>" & str2hex(strMessageText) & "</message>" & _
			"</sms>"

		objStudents.MoveNext
	WEnd

	objStudents.Close()
	Call objNSNET.DisposeCommand(cmdStudentRes)
    Call objNSNET.DisposeCommand(cmdStudentAttRes)
Else
	strResponseText = strResponseText & _
		"<sms>" & _
			"<smstype>1</smstype>" & _
			"<abonent>" & strAbonent & "</abonent>" & _
			"<message>" & str2hex(strMessageText) & "</message>" & _
		"</sms>"
	If bLogFile then f.Write strMessageText & "##" & vbCrLf
End If

strResponseText = strResponseText & _
		"</content>" & _
	"</root>"

If bDebugVersion Then
	Response.Write "<br><br>" & Replace(strMessageText, chr(13), "<br>")
Else
	If strSMSSchoolID <> "" Then
		Set cmdSMSLog = objNSNET.SaveSMSEvent_Prepare()
		Call objNSNET.SaveSMSEvent_Execute(cmdSMSLog, strSMSSchoolID, strParentID, dtSMSEvent, kSMSEventType_Request, 0, strAbonent)
		Call objNSNET.SaveSMSEvent_Execute(cmdSMSLog, strSMSSchoolID, strParentID, dtSMSEvent, kSMSEventType_Response, 0, strAbonent)
		Call objNSNET.DisposeCommand(cmdSMSLog)
	End If

	Response.Write strResponseText
End If

If bLogFile Then
	f.Close
End If

'*********************************************************************************************
'*********************************************************************************************

Function TestSubjectName(sname)
	Dim s
	s = Replace(sname, "'", " ")
	s = Replace(s, """", " ")
	s = Replace(s, "%", " ")
	s = Replace(s, "*", " ")
	s = Replace(s, chr(10), " ")
	s = Replace(s, chr(13), " ")
	TestSubjectName = Trim(s)
End Function

Function GetRequestType()
	Dim nType
	Dim arrText, nDay, nMonth, nYear
    Dim strSubjName, strTypeName, bItog

	nType = RT_INVALID
	If (Ucase(strReqText) = "ПРОГНОЗ") Or (Ucase(strReqText) = "PROGNOZ") Or (Ucase(strReqText) = "PROGNOS") Then
		nType = RT_PROGNOZ
	Else
		arrText = Split(strReqText, ".")
		If UBound(arrText) = 2 Then
			nDay = GetSafeLng(arrText(0), 0)
			nMonth = GetSafeLng(arrText(1), 0)
			nYear = GetSafeLng(arrText(2), 0)
			If (nDay > 0 And nDay < 32) And (nMonth > 0 And nMonth < 13) And (nYear > 2000 And nYear < 2100) Then
				dtReqDate = DateSerial(nYear, nMonth, nDay)
				strReqDate = Date2SMS(dtReqDate)
				nType = RT_DATE
			End If
		Else
            bItog = False
            If Len(strReqText) > 5 Then
                strTypeName = Left(strReqText, 5)
	            If (Ucase(strTypeName) = "ИТОГ ") Or (Ucase(strTypeName) = "ITOG ") Then
                    strSubjName = Mid(strReqText, 6)
		            strReqSubjectName = TestSubjectName(strSubjName)
		            If strReqSubjectName <> "" Then
    		            nType = RT_ITOG
                    End If
                    bItog = True
	            End If
            End If
                
            If Not bItog Then
			    strReqSubjectName = TestSubjectName(strReqText)
			    If strReqSubjectName <> "" Then
				    nType = RT_NAME
			    End If
		    End If
		End If
	End If

	GetRequestType = nType
End Function


Function GetResultFromDBFormat(adoRS, ByRef nRes)
	Dim strResult
	Dim nResultDB, nResult

	If IsDull(adoRS("RESULT")) Then
		strResult = kAbsenceLetter
		nRes = 0
	Else
		strActivityID = GetSafeStr(adoRS("ACTIVITYID"), -1, Null)
		nResultDB = GetSafeLng(adoRS("RESULT"), Null)

		If nResultDB < 0 Then
			' now for TKR possible only
			If kIsTKR Then
				strResult = GetMark_TKR(nResultDB)
			Else
				strResult = "?"
			End If
    		nRes = 0
		Else
			If strActivityID <> kActivityID_Manual Then strSubjClassID = GetSafeID(adoRS("ID"), Null)
			nResult = GetGradingCommon(nResultDB)
			strResult = CStr(nResult)
			nRes = nResult
		End If
	End If
	GetResultFromDBFormat = strResult
End Function


Function GetMarksForDate()
	Dim adoRS
	Dim strSubjAbbr
	Dim strResText, strResult, nRes

	Set adoRS = objNSNET.GetStudentAttendanceResults_ExecuteSimple(cmdStudentAttRes, strStudentID, strClassID)

	If adoRS.EOF Then
		GetMarksForDate = ""
		Exit Function
	End If
	nCount = 0
	strResText = ""
	While Not adoRS.EOF
		nCount = nCount + 1
		strSubjAbbr = GetSafeStr(adoRS("SUBJECTABBREV"), -1, Null)
		strResult = GetResultFromDBFormat(adoRS, nRes)
		strResText = strResText & strSubjAbbr & " " & strResult & chr(13)

		If bDebugVersion Then Response.Write strSubjAbbr & ": " & strResult & chr(13)
		adoRS.MoveNext
	Wend
	GetMarksForDate = strResText
	adoRS.Close()
End Function

Function RoundMark( nMarkIn )
	Dim nMark, nRoundMark, RATIO_20
	RATIO_20 = RESULT_RATIO / k_5
	nMark = Round( nMarkIn * RATIO_20 )
	If nMark < 54 Then
		nRoundMark = nMarkIn
	ElseIf nMark <= 66 Then
		nRoundMark = 60 / RATIO_20 '=3
	ElseIf nMark <= 86 Then
		nRoundMark = 80 / RATIO_20 '=4
	Else
		nRoundMark =  100 / RATIO_20 '=5
	End If
	RoundMark = Round( nRoundMark )
End Function

Function GetAVGMark(rsResult)
	Dim nMarkSum, nMark, nMarkCount, nRes
	Dim nAVGMark
	Dim bActualMark, bShowWeightedAvg, nTotalWeight, nWeight
	Dim strAType, strCMID, nMarkCorrect

	If rsResult.EOF Then
		GetAVGMark = 0
		Exit Function
	End If

	bShowWeightedAvg = False
	nTotalWeight = 0
	nMarkCount = 0
	nMarkSum = 0

	While Not rsResult.EOF
		nMark = GetResultFromDBFormat(rsResult, nRes)
		nMark = IIf(nRes = 0, nRes, nMark)
		nWeight = GetSafeLng(rsResult("WEIGHT"), 0)

		bActualMark = True
		If kIsTKR Then
' 9.04.2009. Сейчас только одна оценка по ТКР - "за тему".
			strAType = GetSafeStr(rsResult("TYPE"), kLengthAssignmentType, "")
			If strAType = obLanguage("Assignment","kATTKRThemeS") Then
'				strCMID = GetSafeID(rsResult("CLASSMEETINGID"), "0")
'
'				rsResult.MoveNext ' Благодаря фильтрации по типам в GetStudentResultsForSG_Prepare, коррекц. оценка, если она есть, - может быть только следующей.
'				If Not rsResult.EOF Then
'					If strCMID = GetSafeID(rsResult("CLASSMEETINGID"), "0") Then
'						strAType = GetSafeStr(rsResult("TYPE"), -1, "")
'						If strAType = kATTKRCorrectS Then
'							nMarkCorrect = GetResultFromDBFormat(rsResult, nRes)
'							nMarkCorrect = IIf(nRes = 0, nRes, nMarkCorrect)
'							nMark = IIf(nMarkCorrect > nMark, nMarkCorrect, nMark)
'						End If
'					End If
'				End If
'				rsResult.MovePrevious ' Возвращаем на место...
			Else
				nMark = 0
				bActualMark = False
			End If
		End If

		If bWeight And bActualMark And (nMark = 0) Then
			' Не учитываем "весовые" оценки, дата сдачи которых ещё не прошла
			If IsNull(rsResult("DUEDATE")) Then
				bActualMark = False
			ElseIf DateDiff( "d", dtToday, rsResult("DUEDATE"), 0, 0 ) >= 0 Then
				bActualMark = False
			End If
		End If

		If bActualMark Then
			If Not bWeight Then
				If nMark <> 0 Then
					nMarkCount = nMarkCount + 1
'					nMark = CDbl(GetResultFromDBFormat(rsResult, nRes))
					nMarkSum = nMarkSum + nMark
				End If
			Else
				nTotalWeight = nTotalWeight + nWeight
				If nMark <> 0 Then
					nMarkSum = nMarkSum + (nMark - nMinMark) * nWeight
				End If
				bShowWeightedAvg = True
			End If
		End If
		rsResult.MoveNext
	Wend

'	While Not rsResult.EOF ' old simple (without TKR and Weight) version
'		nMarkCount = nMarkCount + 1
'		nMark = CDbl(GetResultFromDBFormat(rsResult, nRes))
'		nMarkSum = nMarkSum + nMark
'		rsResult.MoveNext
'	Wend

	If Not bWeight Then
		If nMarkCount > 0 Then
			nAVGMark = nMarkSum/CDbl(nMarkCount)
		Else
			nAVGMark = 0
		End If
	Else
		If Not bShowWeightedAvg Then
			nAVGMark = 0
		Else
			If nTotalWeight = 0 Then nTotalWeight = 1
			nAVGMark = (nMarkSum/CDbl(nTotalWeight)) + nMinMark
		End If
	End If

	If nAVGMark > 0 Then
		If nMaxMark = k_5 Then
			nAVGMark = RoundMark(nAVGMark)
		Else
			nAVGMark = Round(nAVGMark)
		End If
	End If

	GetAVGMark = nAVGMark
End Function

Function GetMarkForecastForAllSubjects_old()
	Dim strSGID, strPrevSGID,strSubjAbbr
	Dim strCurrTermID
	Dim strTermID, dtTermBegin, dtTermEnd
	Dim nTermCnt, nTotalMarks, nTotalCnt
	Dim rsRes, adoRS
	Dim strResText, strResult, nResult

	strTermID = GetLastTermForDate(dtToday, dtTermBegin, dtTermEnd)
	If strTermID = "" Then
'		GetMarkForecastForAllSubjects_old = "Сегодняшняя дата вне учебных периодов"
		GetMarkForecastForAllSubjects_old = "Для сегодняшней даты нет запрашиваемых данных"
        bErrorExit = True
		Exit Function
	End If

'	Set adoRS = objNSNET.GetStudentTotals(strClassID, strStudentID, dtTermBegin)
	Set adoRS = objNSNET.GetStudentTotalsForTerm(strClassID, strStudentID, strTermID)

	If adoRS.EOF Then
		GetMarkForecastForAllSubjects_old = ""
		Exit Function
	End If

	strResText = ""
	nCount = 0
	strPrevSGID = "0"
	While Not adoRS.EOF
		nCount = nCount + 1
		strCurrTermID = GetSafeID(adoRS("TERMID"), Null)
		strSGID = GetSafeID(adoRS("ID"), Null)
		If strPrevSGID <> strSGID Then

			strSubjAbbr = GetSafeStr(adoRS("SUBJECTABBREV"), -1, Null)
			strResText = strResText & strSubjAbbr & chr(13)
			nTermCnt = 0
			nTotalMarks = 0
			nTotalCnt = 0

			strPrevSGID = strSGID
		End If

		If strCurrTermID = "0" Then
			If Not IsDull(adoRS("MARK")) Then
				nResult = GetSafeLng(adoRS("MARK"), Null)
				If nResult > 0 Then
					strResult = CStr(nResult)
				Else
					strResult = IIf(nResult = -1, obLanguage("Common","kNonAttest"), obLanguage("Common","kExempted")) ' неаттестованный ученик: -1, освобождённый ученик: -2
				End If
				strResText = strResText & "Г " & strResult
			Else
				If nTotalCnt > 0 Then
					If nMaxMark = k_5 Then
						nResult = RoundMark(nTotalMarks/CDbl(nTotalCnt))
					Else
						nResult = Round(nTotalMarks/CDbl(nTotalCnt))
					End If

					strResText = strResText & "СГ " & nResult
				End If
			End If
			strResText = strResText & chr(13)
		Else
			nTermCnt = nTermCnt + 1
			If Not IsDull(adoRS("MARK")) Then
				nResult = GetSafeLng(adoRS("MARK"), Null)
				If nResult > 0 Then
					nTotalCnt = nTotalCnt + 1
					nTotalMarks = nTotalMarks + nResult
					strResult = CStr(nResult)
				Else
					strResult = IIf(nResult = -1, obLanguage("Common","kNonAttest"), obLanguage("Common","kExempted")) ' неаттестованный ученик: -1, освобождённый ученик: -2
				End If
				strResText = strResText & "Ч" & nTermCnt & " " & strResult & ";"
			Else
				If strCurrTermID = strTermID Then

					Set rsRes = objNSNET.GetStudentResultsForSG_Execute(cmdStudentRes, strStudentID, strSGID, dtTermBegin, dtTermEnd)
					nResult = GetAVGMark(rsRes)
					If nResult > 0 Then
						nTotalCnt = nTotalCnt + 1
						nTotalMarks = nTotalMarks + nResult
						strResText = strResText & "СЧ" & nTermCnt & " " & nResult & ";"
					End If
				End If
			End If
		End If

		adoRS.MoveNext
	Wend
	GetMarkForecastForAllSubjects_old = strResText
End Function


Function GetMarkForecastForAllSubjects()
	Dim strSGID, strPrevSGID,strSubjAbbr
	Dim strCurrTermID
	Dim strTermID, dtTermBegin, dtTermEnd
	Dim nTotalMarks, nTotalCnt
	Dim rsRes, adoRS
	Dim strResText, strResult, nResult
	Dim objTermInfo, strTermNum, strTermName
	Dim bIsGradeSystemPass

	strTermID = GetLastTermForDate(dtToday, dtTermBegin, dtTermEnd)
	If strTermID = "" Then
'		GetMarkForecastForAllSubjects = "Сегодняшняя дата вне учебных периодов"
		GetMarkForecastForAllSubjects = "Для сегодняшней даты нет запрашиваемых данных"
        bErrorExit = True
		Exit Function
	End If

    Set objTermInfo = objNSNET.GetTermInfo(strTermID)
	If objTermInfo.EOF Then
		GetMarkForecastForAllSubjects = "Невозможно показать отчёт"
        bErrorExit = True
		Exit Function
	End If
    strTermName = GetSafeStr(objTermInfo("TERMNAME"), -1, "")
    nPos = InStr(strTermName, " ")
    If nPos > 0 Then
        strTermNum = Left(strTermName, nPos - 1)
    ElseIf strTermName <> "" Then
        strTermNum = Left(strTermName, 1)
    Else
        strTermNum = "1"
    End If

'	Set adoRS = objNSNET.GetStudentTotals(strClassID, strStudentID, dtTermBegin)
	Set adoRS = objNSNET.GetStudentTotalsForTerm(strClassID, strStudentID, strTermID)

	If adoRS.EOF Then
		GetMarkForecastForAllSubjects = ""
		Exit Function
	End If
	
	' Для SMS нужны сокращённые фразы, поэтому последний параметр False
	Call GetMarkTypesInfoEx(True, nMinMark, nMaxMark, False) ' Если не известно точно значение bIsGradeSystemPass, то передаём True и получаем полный список

	strResText = ""
	nCount = 0
	strPrevSGID = "0"
	While Not adoRS.EOF
		nCount = nCount + 1
		strCurrTermID = GetSafeID(adoRS("TERMID"), Null)
		strSGID = GetSafeID(adoRS("ID"), Null)
		bIsGradeSystemPass = (GetSafeLng(adoRS("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)
		If strPrevSGID <> strSGID Then

			strSubjAbbr = GetSafeStr(adoRS("SUBJECTABBREV"), -1, Null)
			strResText = strResText & IIf(strPrevSGID <> "0", chr(13), "") & strSubjAbbr
			nTotalMarks = 0
			nTotalCnt = 0

			strPrevSGID = strSGID
		End If

		If strCurrTermID = "0" Then ' not actual now
			If Not IsDull(adoRS("MARK")) Then
				nResult = GetSafeLng(adoRS("MARK"), Null)
				nResult = GetMark(nResult, bIsGradeSystemPass)
				strResult = CStr(nResult)

				strResText = strResText & "Г " & strResult
			Else
				If nTotalCnt > 0 Then
					If nMaxMark = k_5 Then
						nResult = RoundMark(nTotalMarks/CDbl(nTotalCnt))
					Else
						nResult = Round(nTotalMarks/CDbl(nTotalCnt))
					End If

					strResText = strResText & "СГ " & nResult
				End If
			End If
			strResText = strResText & chr(13)
		Else
			If Not IsDull(adoRS("MARK")) Then
				nResult = GetSafeLng(adoRS("MARK"), Null)
				If nResult > 0 Then
					nTotalCnt = nTotalCnt + 1
					nTotalMarks = nTotalMarks + nResult
				End If
				nResult = GetMark(nResult, bIsGradeSystemPass)
				strResult = CStr(nResult)

				strResText = strResText & " " & "Ч" & strTermNum & " " & strResult
			Else
				If strCurrTermID = strTermID Then

					Set rsRes = objNSNET.GetStudentResultsForSG_Execute(cmdStudentRes, strStudentID, strSGID, dtTermBegin, dtTermEnd)
					nResult = GetAVGMark(rsRes)
					If nResult > 0 Then
						nTotalCnt = nTotalCnt + 1
						nTotalMarks = nTotalMarks + nResult
						strResText = strResText & " " & "СЧ" & strTermNum & " " & nResult
					End If
				End If
			End If
		End If

		adoRS.MoveNext
	Wend
	GetMarkForecastForAllSubjects = strResText
End Function


Function GetSubjectIDForNameAndClass(strSubjName)
	Dim adoRS, strSubjID

	Set adoRS = objNSNET.GetSubjectIDForNameAndClass(strSubjName, strClassID)
	If Not adoRS.EOF Then
		strSubjID = GetSafeID(adoRS("SUBJECTID"), -1)
		If bDebugVersion Then
			Response.Write " SubjectID:" & strSubjID & chr(13)
		End If
	Else
		strSubjID = ""
        bErrorExit = True
	End if

	GetSubjectIDForNameAndClass = strSubjID
	adoRS.Close()
End Function

Function GetTermByDate(curDate, ByRef dTermBegin, ByRef dTermEnd)
	Dim adoRS, strTermID

	Set adoRS = objNSNET.GetClassTermInfoForDate(strClassID, curDate)
	If Not adoRS.EOF Then
		strTermID = GetSafeID(adoRS("TERMID"), Null)
		dTermBegin = CDate(adoRS("StartDate"))
		dTermEnd = CDate(adoRS("EndDate"))

		If bDebugVersion Then
			Response.Write "GetTermByDate = " &  strTermID & " (" &  dTermBegin & "," & dTermEnd & ")" & chr(13)
		End If
	Else
		strTermID = ""
        bErrorExit = True
	End If

	GetTermByDate = strTermID
	adoRS.Close()
End Function

Function GetLastTermForDate(curDate, ByRef dTermBegin, ByRef dTermEnd)
	Dim adoRS, strTermID

	Set adoRS = objNSNET.GetLastTermForClassDate(strClassID, curDate)
	If Not adoRS.EOF Then
		strTermID = GetSafeID(adoRS("TERMID"), Null)
		dTermBegin = CDate(adoRS("StartDate"))
		dTermEnd = CDate(adoRS("EndDate"))

		If bDebugVersion Then
			Response.Write "GetLastTermForDate = " &  strTermID & " (" &  dTermBegin & "," & dTermEnd & ")" & chr(13)
		End If
	Else
		strTermID = ""
        bErrorExit = True
	End If

	GetLastTermForDate = strTermID
	adoRS.Close()
End Function

Function GetMarksForWeek()
	Dim strTermID, dtTermBegin, dtTermEnd
	Dim dtDueDate, strDueDate, dtRangeBegin, dtRangeEnd
	Dim dtFirstDay
	Dim adoRS
	Dim strResult, strResText, nRes

	strSubjID = GetSubjectIDForNameAndClass(strReqSubjectName)
	If strSubjID = "" Then
		GetMarksForWeek = "Ученик не учится по указанному предмету"
        bErrorExit = True
		Exit Function
	End IF

	dtFirstDay = DateAdd("d", -7, dtToday)
	strTermID = GetTermByDate(dtToday, dtTermBegin, dtTermEnd)
	If strTermID = "" Then
		strTermID = GetTermByDate(dtFirstDay, dtTermBegin, dtTermEnd)
		If strTermID = "" Then
			GetMarksForWeek = "Неделя вне учебных периодов"
	        bErrorExit = True
			Exit Function
		End If
	End If

	dtRangeBegin = dtFirstDay
	dtRangeEnd = dtToday
	If dtRangeBegin < dtTermBegin Then dtRangeBegin = dtTermBegin
	If dtRangeEnd > dtTermEnd Then dtRangeEnd = dtTermEnd

	Set adoRS = objNSNET.GetStudentAttendanceResults_Execute(cmdStudentAttRes, strStudentID, strClassID, strSubjID, dtRangeBegin, dtRangeEnd)

	If adoRS.EOF Then
		GetMarksForWeek = ""
		Exit Function
	End If

	nCount = 0
	strResText = ""
	While Not adoRS.EOF
		nCount = nCount + 1
		dtDueDate = CDate(adoRS("DUEDATE"))
		strDueDate = Date2SMS(dtDueDate)
		strResult = GetResultFromDBFormat(adoRS, nRes)
		strResText = strResText & strDueDate & " " & strResult & chr(13)

		If bDebugVersion Then
			Response.Write strDueDate & ": " & strResult & chr(13)
		End If

		adoRS.MoveNext
	Wend
	GetMarksForWeek = strResText
	adoRS.Close()
End Function

Function GetTotalMarks()
	Dim adoRS
	Dim strResult, strResText
	Dim strPeriodName
	Dim objSubjectInfo, strSubjAbbr
	Dim bIsGradeSystemPass, bIsExamType

	strSubjID = GetSubjectIDForNameAndClass(strReqSubjectName)
	If strSubjID = "" Then
		GetTotalMarks = "Ученик не учится по указанному предмету '" & strReqSubjectName & "'"
        bErrorExit = True
		Exit Function
	End IF

	Set adoRS = objNSNET.GetStudentSubjectTotals(strStudentID, strClassID, strSubjID)

	If adoRS.EOF Then
		GetTotalMarks = "Нет итоговых оценок по предмету '" & strReqSubjectName & "'"
		Exit Function
	End If

	' Для SMS нужны сокращённые фразы, поэтому последний параметр False
	Call GetMarkTypesInfoEx(True, nMinMark, nMaxMark, False) ' Если не известно точно значение bIsGradeSystemPass, то передаём True и получаем полный список

    strSubjAbbr = ""
    Set objSubjectInfo = objNSNET.GetSubjectInfo(strSubjID)
	If Not objSubjectInfo.EOF Then
		strSubjAbbr = GetSafeStr(objSubjectInfo("SUBJECTABBREV"), -1, "")
	End If
    If IsDull(strSubjAbbr) Then
		strSubjAbbr = strReqSubjectName
    End If

	strResText = strSubjAbbr & chr(13)
	While Not adoRS.EOF
		strPeriodName = GetPeriodName(adoRS)
		bIsExamType = (GetSafeStr(adoRS("ISEXAM"), -1, "N") = "Y")
		If bIsExamType Then
			bIsGradeSystemPass = False
		Else
			bIsGradeSystemPass = (GetSafeLng(adoRS("GRADINGSYS"), kGradingSystem_Mark) = kGradingSystem_Pass)
		End If
		strResult = GetMark(adoRS("MARK"), bIsGradeSystemPass)
		strResText = strResText & strPeriodName & " " & strResult & chr(13)

		If bDebugVersion Then
			Response.Write strPeriodName & ": " & strResult & chr(13)
		End If

		adoRS.MoveNext
	Wend
	adoRS.Close()

	GetTotalMarks = strResText
End Function

Function GetPeriodName(objRs)
	Dim strName, nPeriodTypeID
	Dim nTermTypeID, strTermName, strTermNum, strTermAbbr

	nPeriodTypeID = GetSafeLng(objRs("PERIODTYPEID"), 0)
	If nPeriodTypeID = kTermType then
		nTermTypeID = GetSafeLng(objRs("TERMTYPEID"), 0)
		strTermName = GetSafeStr(objRs("TERMNAME"), -1, "")
		nPos = InStr(strTermName, " ")
		If nPos > 0 Then
			strTermNum = Left(strTermName, nPos - 1)
			strTermAbbr = Mid(strTermName, nPos + 1)
			If nTermTypeID = 1 Then
				strTermAbbr = "Ч"
			ElseIf nTermTypeID = 2 Then
				strTermAbbr = "Тр"
			ElseIf nTermTypeID = 3 Then
				strTermAbbr = "П"
			End If
			strTermName = strTermNum & strTermAbbr
		End If
		strName = strTermName
	ElseIf nPeriodTypeID = kYearType Then
		strName = "Год"
	ElseIf nPeriodTypeID = kTotalType Then
		strName = "Итог"
	Else
		' Exam type
		strName = "Экз"
		If Not IsDull(objRs("ABBR")) Then
			strName = strName & " " & GetSafeStr(objRs("ABBR"), -1, "")
		End If
	End If
	GetPeriodName = strName
End Function
%>
