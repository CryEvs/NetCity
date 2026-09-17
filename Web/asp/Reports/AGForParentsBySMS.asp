<!-- #INCLUDE FILE=../headernoscreen.asp -->
<!-- #INCLUDE FILE=../SetupSchool/SchoolSettings_inc.asp -->
<!-- #INCLUDE FILE="GradingScale_inc.asp" -->
<!-- #INCLUDE FILE="MobileOperators_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/SmsAccess_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
On Error Resume Next
Const kCyrArrayL = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя"
Const kCyrArrayU = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ"
Const kSMSDelimiter1 = " "
Const kSMSDelimiter2 = " - "

Const kSMSEventType_Distribution = 1


Dim strClassID, strStudentID, nDaysCount, bNoSeparate
Dim cmdParentsSMS, rsParentsSMS
Dim strPrevStudentID, strCurrStudentID
Dim dtStart, dtEnd
Dim cmdStudentAttRes
Dim nSMSMaxLen
Dim strActivityID, strSubjClassID, nMaxMark
Dim arrSMSForStudent
Dim strCurrMobile, strCurrSMSEmail
Dim bLatin
Dim objSMTP, bCDOUsed
Dim nStudentsCnt, nParentsCnt
Dim strSchoolEmail
Dim bWebGate ' new
Dim arrWebGateSMS, nWebGateIndex
Dim bReportView, strSMSView
Dim strSMSText
Dim nStatus, dtSMS, cmdSMSLog
Dim strParentID
Dim strDatesTitle, nDatesTitleLen
Dim strMobiles, nIndStart, nIndEnd, arrMobiles, i
Dim bValidMobile
Dim strMsg

strClassID = GetSafeID(Request("PCLID"), Null)
strStudentID = GetSafeID(Request("StudentID"), Null)

bNoSeparate = CBool(GetSafeStr(Request("STDNT"), 1, Null) = "1")
Call obTokenMgr.SetData(strToken, stSeparate, IIf(bNoSeparate, "1", "0"))
	
strSMSView = GetSafeLng(Request("SMSView"), Null)
bReportView = (strSMSView = SmsType_Report) ' short condition

bLatin = GetSafeBool(Request("transliterateValue"), GetSafeBool(obTokenMgr.GetData(strToken, stbTranslit), false))

Call obTokenMgr.SetData(strToken, "SMSView", strSMSView)
Call obTokenMgr.SetData(strToken, stbTranslit, bLatin)

If bReportView Then
	nDaysCount = GetSafeLng(Request("DAYSCNT"), Null)
	Call obTokenMgr.SetData(strToken, stHistoryDaysCount, nDaysCount)
	nMaxMark = obTokenMgr.GetData( strToken, stMaxMark )
Else
	strSMSText = GetSafeStr(Request("SMSText"), kSMSTextMaxLen, Null)
	Call obTokenMgr.SetData(strToken, stUseMorePartsSMS, Request("useMorePartsValue").Item)
	Call obTokenMgr.SetData(strToken, stArbitrSMS, strSMSText)
End If

'strSchoolEmail = GetSafeStr(obTokenMgr.GetData(strToken, stSchoolEmail), -1, Null)

Call InitMobileOperators()
Call InitSchoolSettings( objNSNET )

nSMSMaxLen = kSMSMaxLen_Cyril
If bLatin Then
	nSMSMaxLen = kSMSMaxLen_Latin
End If
	
bWebGate = (arrSchoolSettings( 1, kSSIndex_SMSGate ) = "0")
If bWebGate Then
	Call obTokenMgr.SetData(strToken, stWebGateSMS, Empty)

	strMobiles = GetSafeStr(obTokenMgr.GetData(strToken, stParentMobiles), -1, "")
	If Not bNoSeparate Then
		nIndStart = GetSafeLng(Request("IndStart"), Null)
		nIndEnd = GetSafeLng(Request("IndEnd"), Null)

		arrMobiles = Split(strMobiles, ";")
		strMobiles = ""
		For i = nIndStart To nIndEnd
			strMobiles = strMobiles & arrMobiles(i) & ";"
		Next
	Else
		strMobiles = strMobiles & ";"
	End If
	strMobiles = ";" & strMobiles ' Mobiles template
	Call obTokenMgr.SetData(strToken, stParentMobiles, Empty)
End If

If bNoSeparate Then
	Set rsParentsSMS = objNSNET.GetParentsWithSMS(strClassID, False, True,SendingSchoolSmsAvailable())
Else
	Set cmdParentsSMS = objNSNET.GetParentsWithSMS(strClassID, True, True,SendingSchoolSmsAvailable())
	Set rsParentsSMS = objNSNET.GetParentsWithSMS_Execute(cmdParentsSMS, strStudentID)
	Call objNSNET.DisposeCommand(cmdParentsSMS)
End If

If bReportView Then
	dtEnd = NSNow()
	dtEnd = DateSerial(Year(dtEnd), Month(dtEnd), Day(dtEnd)) ' normalize
	dtStart = DateAdd("d", -(nDaysCount - 1), dtEnd)
	Set cmdStudentAttRes = objNSNET.GetStudentAttendanceResults_Prepare(-1, dtStart, dtEnd)

	strDatesTitle = Date2SMSWithoutYear(dtStart) & "-" & Date2SMS(dtEnd)
	If Len(strDatesTitle) > nSMSMaxLen Then
		strDatesTitle = Left(strDatesTitle, nSMSMaxLen)
	End If
	nDatesTitleLen = Len(strDatesTitle)
End If

nStudentsCnt = 0
nParentsCnt = 0
nWebGateIndex = -1

If Not rsParentsSMS.EOF Then

	If bWebGate Then
		ReDim arrWebGateSMS(2, rsParentsSMS.RecordCount)
	Else
		dtSMS = NSNow()
		Set cmdSMSLog = objNSNET.SaveSMSEvent_Prepare()
	End If

	If Not bReportView Then
		arrSMSForStudent = MakeArbitrSMSForStudent() ' Для всех учеников - одинаковое!
	End If
	
	strPrevStudentID = "0"
	Do While Not rsParentsSMS.EOF
		strParentID = GetSafeID(rsParentsSMS("PARENTID"), Null)
		strCurrMobile = GetSafeStr(rsParentsSMS("PARAMVALUE"), -1, Null)
		strCurrSMSEmail = GetSMSEmailForMobile(strCurrMobile)
		strCurrStudentID = GetSafeID(rsParentsSMS("STUDENTID"), Null)

		bValidMobile = True
		If bWebGate Then
			bValidMobile = (InStr(strMobiles, ";" & strCurrMobile & ";") > 0)
		End If

		If bValidMobile Then
			If strPrevStudentID <> strCurrStudentID Then
				strPrevStudentID = strCurrStudentID

				If bReportView Then
					arrSMSForStudent = MakeAGSMSForStudent(cmdStudentAttRes, strCurrStudentID) ' Для всех учеников - разное!
					If err.Number<>0 Then Exit Do
				End If

				If Not IsEmpty(arrSMSForStudent) Then
					nStudentsCnt = nStudentsCnt + 1

					If bWebGate Then
						nWebGateIndex = nWebGateIndex + 1
						arrWebGateSMS(1, nWebGateIndex) = arrSMSForStudent ' save message
					End If

				End If
			End If
		
			If Not IsEmpty(arrSMSForStudent) Then
				If bWebGate Then
					arrWebGateSMS(0, nWebGateIndex) = arrWebGateSMS(0, nWebGateIndex) & strCurrMobile & " "
					arrWebGateSMS(2, nWebGateIndex) = arrWebGateSMS(2, nWebGateIndex) & strParentID & " "
				Else
					nStatus = SendSMSToParent(strCurrSMSEmail, arrSMSForStudent)
					nParentsCnt = nParentsCnt + nStatus
					Call objNSNET.SaveSMSEvent_Execute(cmdSMSLog, strSchoolID, strParentID, dtSMS, kSMSEventType_Distribution, nStatus, strCurrMobile)
				End If
			End If
		End If
		If err.Number<>0 Then Exit Do
		rsParentsSMS.MoveNext
	Loop
	If Not bWebGate Then Call objNSNET.DisposeCommand(cmdSMSLog)
End If

If bReportView Then Call objNSNET.DisposeCommand(cmdStudentAttRes)
TestError obLanguage("Reports","kCantGetAttendanceResultsForStudent",strFunctionalityType)

If bWebGate Then
	If nWebGateIndex > -1 Then
		ReDim Preserve arrWebGateSMS(2, nWebGateIndex)
		Call obTokenMgr.SetData(strToken, stWebGateSMS, arrWebGateSMS)
		Server.Transfer "WebGateSMS.asp"
	End If
End If 

if (nStatus=0) Then
	Call obTokenMgr.SetData(strToken, stbTranslit, Null)
	Call obTokenMgr.SetData(strToken, stArbitrSMS, Null)
	If Not bReportView Then
		Call obTokenMgr.SetData(strToken, stUseMorePartsSMS, Null)
	Else
		Call obTokenMgr.SetData(strToken, stHistoryDaysCount, Null)
	End If
End if

If nStudentsCnt = 0 Then
	strMsg = obLanguage("Reports","kSMSWasNotSent_NoInfo")
Else
	strMsg = obLanguage("Reports","kSMSWasSent") & "\n" & obLanguage("Reports","kSMSWasSent_ParentsCnt") & ": " & nParentsCnt & ". " & obLanguage("Reports","kSMSWasSent_StudentsCnt",strFunctionalityType) & ": " & nStudentsCnt & "."
End If

Call WriteJsonResult(strMsg, False, 0)

' return 0 (success) or 1 (error)
Function SendSMSToParent(strSMSEmail, arrSMSText)
	Dim i

	For i = 0 To UBound(arrSMSText)
		Err.Clear
		On Error Resume Next
		Call objNSNET.SendEmailMessage("", strSMSEmail, null, null, "", arrSMSText(i), null, false)
		If Err.number <> 0 Then
			SendSMSToParent = SmsEventStatus_Error ' invalid Email
			Err.Clear
			Exit Function
		End If
	Next
	SendSMSToParent = SmsEventStatus_Successful
End Function

Function MakeAGSMSForStudent(cmd, strStudentID)
	Dim rsStudentAttRes
	Dim objUserInfo, strStudentName
	Dim nCnt, arrSubjects, nSubjCnt
	Dim strPrevSubjectID, strCurrSubjectID, strSubjectAbbr
	Dim i
	Dim nResultDB, nResult, strResult
	Dim nDelimLen
	Dim nSMS, arrSMS
	Dim nCurrLen, strCurrText, nTotalLen, strTotalText
	Dim nPos
	Dim strAbsenceLetterLang
	On Error Resume Next
	
	Set rsStudentAttRes = objNSNET.GetStudentAttendanceResults_ExecuteSimple(cmd, strStudentID, strClassID)

	If rsStudentAttRes.EOF Then
		MakeAGSMSForStudent = Empty
		Exit Function	
	End If

	strAbsenceLetterLang = obLanguage("Reports","kAbsenceLetter")
	If bLatin Then
		strAbsenceLetterLang = Cyrill2Latin(strAbsenceLetterLang)
	End If
	
	' Сначала формируем массив с данными по предметам и их длинами
	nCnt = rsStudentAttRes.RecordCount + 2
	ReDim arrSubjects(1, nCnt) ' 0 - Len, 1 - Text; Первый элемент - имя ученика, второй - даты отчёта

	Set objUserInfo = objNSNET.GetUserInfo(strStudentID)
	If objUserInfo.EOF Then
		GenerateError obLanguage("Common","kInvalidParameter")	
	End If
	strStudentName = GetSafeStr(objUserInfo("LASTNAME"), -1, Null)
	If Not IsDull(objUserInfo("FIRSTNAME")) Then
		strStudentName = strStudentName & " " & GetSafeStr(objUserInfo("FIRSTNAME"), -1, "")
	End If
	If bLatin Then
		strStudentName = Cyrill2Latin(strStudentName)
	End If
	If Len(strStudentName) > nSMSMaxLen Then
		strStudentName = Left(strStudentName, nSMSMaxLen)
	End If
	
	i = 0
	arrSubjects(0, i) = Len(strStudentName)
	arrSubjects(1, i) = strStudentName
	i = 1
	arrSubjects(0, i) = nDatesTitleLen
	arrSubjects(1, i) = strDatesTitle
	
	strPrevSubjectID = "0"
	While Not rsStudentAttRes.EOF
		strCurrSubjectID = GetSafeID(rsStudentAttRes("SUBJECTID"), Null)

		If strPrevSubjectID <> strCurrSubjectID Then
			strPrevSubjectID = strCurrSubjectID
			i = i + 1
			
			strSubjectAbbr = GetSafeStr(rsStudentAttRes("SUBJECTABBREV"), -1, Null)
			If bLatin Then
				strSubjectAbbr = Cyrill2Latin(strSubjectAbbr)
			End If
			If Len(strSubjectAbbr) > nSMSMaxLen Then
				strSubjectAbbr = Left(strSubjectAbbr, nSMSMaxLen)
			End If
			arrSubjects(0, i) = Len(strSubjectAbbr)
			arrSubjects(1, i) = strSubjectAbbr
		End If
		nResultDB = rsStudentAttRes("RESULT")
		If IsDull(nResultDB) Then
			strResult = strAbsenceLetterLang
		Else
			strActivityID = GetSafeStr(rsStudentAttRes("ACTIVITYID"), -1, Null)
			nResultDB = GetSafeLng(nResultDB, Null)
			If strActivityID <> kActivityID_Manual Then strSubjClassID = GetSafeID(rsStudentAttRes("ID"), Null)
			nResult = GetGradingCommon(nResultDB)
			'nResult = Round( nResult )
			strResult = CStr(nResult)
		End If
		strResult = kSMSDelimiter1 & strResult
			
		arrSubjects(0, i) = arrSubjects(0, i) + Len(strResult)
		arrSubjects(1, i) = arrSubjects(1, i) & strResult

		rsStudentAttRes.MoveNext
	WEnd
	nSubjCnt = i
	ReDim Preserve arrSubjects(1, nSubjCnt) ' 0 - Len, 1 - Text
	
	If bWebGate Then
		MakeAGSMSForStudent = arrSubjects
		Exit Function
	End If

	' Затем формируем массив отдельных SMS (с ограничениями по длинне) из предыдущего массива данных по предметам
	nDelimLen = Len(kSMSDelimiter2)	
	ReDim arrSMS(nCnt * 100) ' * 100 - на всякий случай...

	nSMS = -1
	nTotalLen = 0
	strTotalText = ""
	For i = 0 To nSubjCnt
		nCurrLen = arrSubjects(0, i)
		strCurrText = arrSubjects(1, i)

		If nTotalLen > 0 Then
			If (nTotalLen + nDelimLen + nCurrLen) > nSMSMaxLen Then
				' strTotalText содержит очередную порцию SMS подходящего размера, фиксируем её
				nSMS = nSMS + 1
				arrSMS(nSMS) = strTotalText
				' сбрасываем накапливающие переменные
				nTotalLen = 0
				strTotalText = ""
			Else
				' можно продолжать формировать текущую порцию SMS
				nTotalLen = nTotalLen + nDelimLen + nCurrLen
				strTotalText = strTotalText & kSMSDelimiter2 & strCurrText
			End If
		End If

		If nTotalLen = 0 Then
			If nCurrLen > nSMSMaxLen Then
				' Данные по этому предмету целиком не поместятся в 1 SMS. Их надо разбить.
				While nCurrLen > nSMSMaxLen
					' разбивать надо по разделителям
					nPos = InStrRev(strCurrText, kSMSDelimiter1, nSMSMaxLen)
					If nPos = 0 Then
						' it is an unknown error
						nPos = nSMSMaxLen
					End If
					nSMS = nSMS + 1
					arrSMS(nSMS) = Left(strCurrText, nPos)
					nCurrLen = nCurrLen - nPos
					strCurrText = Mid(strCurrText, nPos + 1)
				WEnd
			End If
			' начинаем формировать очередную порцию SMS
			nTotalLen = nCurrLen
			strTotalText = strCurrText
		End If
	Next
	' сохраняем последнее значение, если оно есть
	If nTotalLen > 0 Then
		nSMS = nSMS + 1
		arrSMS(nSMS) = strTotalText
	End If
	ReDim Preserve arrSMS(nSMS)

	MakeAGSMSForStudent = arrSMS
End Function

Function MakeArbitrSMSForStudent()
	Dim arrArbitrSMS
	Dim strText

	If bLatin Then
		strText = Cyrill2Latin(strSMSText)
	Else
		strText = strSMSText
	End If

	If bWebGate Then
		ReDim arrArbitrSMS(1, 0)
		arrArbitrSMS(0, 0) = Len(strText)
		arrArbitrSMS(1, 0) = strText
	Else
		ReDim arrArbitrSMS(0)
		arrArbitrSMS(0) = strText
	End If

	MakeArbitrSMSForStudent = arrArbitrSMS
End Function

Function Cyrill2Latin(strText)
	Dim arrLatinL, arrLatinU
	Dim strLatin, nLen, i, nPos
	Dim strCurr

	arrLatinL = Array( _
		"a","b","v","g","d","e","je","zh","z","i", _
		"j","k","l","m","n","o","p","r","s","t", _
		"u","f","x","c","ch","sh","shh","'","y","'", _
		"e","ju","ja")

	arrLatinU = Array( _
		"A","B","V","G","D","E","JE","ZH","Z","I", _
		"J","K","L","M","N","O","P","R","S","T", _
		"U","F","X","C","CH","SH","SHH","'","Y","'", _
		"E","JU","JA")

	strLatin = ""
	nLen = Len(strText)
	For i = 1 To nLen
		strCurr = Mid(strText, i, 1)
		nPos = InStr(kCyrArrayL, strCurr)
		If nPos > 0 Then
			strLatin = strLatin & arrLatinL(nPos - 1)
		Else
			nPos = InStr(kCyrArrayU, strCurr)
			If nPos > 0 Then
				strLatin = strLatin & arrLatinU(nPos - 1)
			Else
				strLatin = strLatin & strCurr
			End If
		End If
	Next
	Cyrill2Latin = strLatin
End Function

Function GetSMSEmailForMobile(strMobile)
	Dim strSMSEmail
	Dim strNumber, strStart, strOperator
	
	strNumber = strMobile
	If Len(strNumber) = 11 Then
		If Left(strNumber, 1) = "8" Then
			strNumber = "7" & Mid(strNumber, 2)
		End If
		strStart = Left(strNumber, 4)
		strOperator = FindOperatop(strStart)
		If strOperator <> "" Then
			strSMSEmail = strNumber & "@" & strOperator
		Else
			strSMSEmail = strMobile
		End If
	Else
		strSMSEmail = strMobile
	End If
	GetSMSEmailForMobile = strSMSEmail
End Function

Function FindOperatop(strStart)
	Dim i, j, arrStart
	For i = 0 To UBound(arrStartMobiles)
		arrStart = arrStartMobiles(i)
		For j = 0 To UBound(arrStart)
			If arrStart(j) = strStart Then
				FindOperatop = arrOperators(i)
				Exit Function
			End If
		Next
	Next
	FindOperatop = ""
End Function
%>
