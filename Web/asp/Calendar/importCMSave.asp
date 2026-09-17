<%@ Language=VBScript %>
<% ' © 2007-2011 IRTech. All rights reserved.

Option Explicit
Response.Buffer = TRUE

On Error Resume Next

Const kWeekLen=7

Const NODE_ELEMENT = 1
Const NODE_ATTRIBUTE = 2
Const NODE_TEXT = 3
Const NODE_CDATA_SECTION = 4

Dim objUploadComponent, resRequestParsing, requestData
Dim strXML, xmlDoc, aNode
Dim CSGid, wd, stid, roomid, fixed, objCmdTemplate, objCmdFindRoom, objCmdFindScheduleTime, nTermId
Dim dctSubjectGroupVariants
Dim lesson
Dim dtStart, dtEnd
Dim strReportDays
Dim arrTimes
Dim Time1, bTimeTable

Dim bRector, nPos, nLen
Dim nodeLessons, nodeLessonTimes, nLessonTimeIdMax, nID
Dim nodeList
Dim nDay, nWD, nLesson
Dim nodeTimeTable, nodeWeek
Dim nodeDayTempl, nodeLessonTempl, nodeCSGTempl
Dim nodeAttr
Dim nodeDay, nodeLesson, nodeCSG
Dim nodeVal, strID
Dim i
Dim bRoom, bFixed
Dim nPattern, oneWeekPattern
Dim objCmdSave
Dim strErr

SetScriptTimeOut 900

%>
<!-- #INCLUDE FILE=../scripts/common.asp -->
<%
Set objUploadComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IUploadComponent")
Set resRequestParsing = objUploadComponent.ParseRequest()
If Not resRequestParsing.IsSuccess Then
	GenerateError obLanguage("Common","kUnexpErr")
End If
Set requestData = resRequestParsing.Data

strToken = requestData("AT")
Call GetTokenParams()
%>
<!-- #INCLUDE FILE=../scripts/Popup.asp -->
<!-- #INCLUDE FILE=../scripts/stdhead.asp -->
<!-- #INCLUDE FILE=../scripts/PageStates.asp -->
<!-- #INCLUDE FILE=../scripts/SecurityRoles.asp -->
<!-- #INCLUDE FILE=../scripts/FilterWeeks.asp -->
<!-- #INCLUDE FILE=../scripts/Calendar_inc.asp -->
<%If Not HasUserRight(arCalendarCreateCalendar) Then GenerateError obLanguage("Common","kErrPageAccess")%>

<html lang="<%=strCurrLng%>"><head><title><%=NETSCHOOL_PRODUCT_NAME & " -  " &obLanguage("Calendar","kTitle2")%></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
<body style="font-family: verdana, arial, helvetica; font-size:8pt">
<script>window.focus()</script>
<H2 align="center"><%=obLanguage("Calendar","kTitle2")%></H2>
<H3 align="center"><%=obLanguage("Calendar","kTitle3")%>.<br><%=obLanguage("Curriculum","kPleaseWait")%>...</H3>
<%
dtStart				= Str2Date(requestData("ImportStart"))
dtEnd				= Str2Date(requestData("ImportEnd"))
nPattern			= Clng(requestData("ImportPattern"))
oneWeekPattern		= nPattern * kWeekLen
Time1				= Timer
strXML				= requestData("file")
Set xmlDoc			= CreateObject("msxml2.DOMDocument")
xmlDoc.async		= False
xmlDoc.loadXML(Mid(strXML, InStr(strXML, "<?")))

With xmlDoc.parseError
    If .errorCode <> 0 Then
        strErr = obLanguage("Calendar","kErrReadXML") & vbLf & _
            obLanguage("Calendar","kXMLErrCode") & ": " & .errorCode & vbLf & _
            obLanguage("Calendar","kXMLErrReason") & ": " & .reason & vbLf & _
            obLanguage("Calendar","kXMLErrSrcText") & ": " & .srcText & vbLf & _
            obLanguage("Calendar","kXMLErrLine") & ": " & .line

        GenerateError strErr
    End If
End With

'*****************************************************************************
' Rector begin

bRector = False
If UCase(xmlDoc.documentElement.nodeName) = "TIMETABLE" Then
	bRector = True
	
	nPos = InStr(UCase(strXML), "<TIMETABLE")
	If nPos > 0 Then
		nLen = Len("<TIMETABLE")
		strXML = Left(strXML, nPos - 1) & "<TimeTableExchange" & Mid(strXML, nPos + nLen)
	
		nPos = InStr(UCase(strXML), "</TIMETABLE")
		If nPos > 0 Then
			nLen = Len("</TIMETABLE")
			strXML = Left(strXML, nPos - 1) & "</TimeTableExchange" & Mid(strXML, nPos + nLen)
		End If
	End If
	xmlDoc.loadXML(strXML)
	
	Set nodeLessons = xmlDoc.documentElement.selectSingleNode("//lessons")
	If nodeLessons is Nothing Then
		GenerateError obLanguage("Calendar","kErrPrompt") & NETSCHOOL_PRODUCT_NAME & obLanguage("Calendar","kErrPrompt2") & obLanguage("Calendar","kNoTeg")&": LESSONS"	
	End If

	' find max LessonTime id
	Set nodeLessonTimes = xmlDoc.documentElement.selectSingleNode("//LessonTimes")
	If nodeLessonTimes is Nothing Then
		GenerateError obLanguage("Calendar","kErrPrompt") & NETSCHOOL_PRODUCT_NAME & obLanguage("Calendar","kErrPrompt2") & obLanguage("Calendar","kNoTeg")&": LESSONTIMES"	
	End If

	nLessonTimeIdMax = 0
	For Each aNode In nodeLessonTimes.childNodes
		nID = GetSafeLng(aNode.getAttribute("id"), Null)
		If nID > nLessonTimeIdMax Then
			nLessonTimeIdMax = nID
		End If
	Next

	' core nodes and node templates
	Set nodeTimeTable = xmlDoc.createNode(NODE_ELEMENT, "TimeTable", "")

	Set nodeWeek = xmlDoc.createNode(NODE_ELEMENT, "Week", "")
	Set nodeAttr = xmlDoc.createAttribute("id")
	nodeWeek.attributes.setNamedItem(nodeAttr)
	Call nodeWeek.setAttribute("id", 1)

	Set nodeDayTempl = xmlDoc.createNode(NODE_ELEMENT, "Day", "")
	Set nodeAttr = xmlDoc.createAttribute("wd")
	nodeDayTempl.attributes.setNamedItem(nodeAttr)

	Set nodeLessonTempl = xmlDoc.createNode(NODE_ELEMENT, "Lesson", "")
	Set nodeAttr = xmlDoc.createAttribute("timeId")
	nodeLessonTempl.attributes.setNamedItem(nodeAttr)

	Set nodeCSGTempl = xmlDoc.createNode(NODE_ELEMENT, "csg", "")
	Set nodeAttr = xmlDoc.createAttribute("id")
	nodeCSGTempl.attributes.setNamedItem(nodeAttr)
	Set nodeAttr = xmlDoc.createAttribute("roomid")
	nodeCSGTempl.attributes.setNamedItem(nodeAttr)
	Set nodeAttr = xmlDoc.createAttribute("fixed")
	nodeCSGTempl.attributes.setNamedItem(nodeAttr)

	For nWD = 1 To 7 ' надо просортировать по-англ. (см. Sub SaveCMs)

		nDay = nWD - 1 ' nDay в Ректоре - по-русски
		If nDay = 0 Then nDay = 7

		Set nodeDay = nodeDayTempl.cloneNode(false)
		Call nodeDay.setAttribute("wd", nWD)
	
		For nLesson = 1 To nLessonTimeIdMax
			Set nodeList = nodeLessons.selectNodes("lesson[day=" & nDay & " and hour=" & nLesson & "]")
			If nodeList.length > 0 Then
				Set nodeLesson = nodeLessonTempl.cloneNode(false)
				Call nodeLesson.setAttribute("timeId", nLesson)

				For i = 0 To (nodeList.length - 1)
					Set aNode = nodeList.Item(i)
					Set nodeCSG = nodeCSGTempl.cloneNode(false)

					' groupId
					Set nodeVal = aNode.selectSingleNode("groupId")
					If nodeVal is Nothing Then
						GenerateError obLanguage("Calendar","kErrPrompt") & NETSCHOOL_PRODUCT_NAME & obLanguage("Calendar","kErrPrompt2") & obLanguage("Calendar","kNoTeg")&": groupId"	
					End If
					strID = GetSafeID(nodeVal.text, Null)
					Call nodeCSG.setAttribute("id", strID)

					' roomId
					bRoom = False
					Set nodeVal = aNode.selectSingleNode("roomId")
					If Not (nodeVal is Nothing) Then
						If CStr(nodeVal.text) <> "-1" Then
							strID = GetSafeID(nodeVal.text, Null)
							Call nodeCSG.setAttribute("roomid", strID)
							bRoom = True
						End If
					End If
					If Not bRoom Then
						Set nodeAttr = nodeCSG.getAttributeNode("roomid")
						If Not (nodeAttr is Nothing) Then
							nodeCSG.removeAttributeNode(nodeAttr)
						End If
					End If

					' fixed
					bFixed = False
					Set nodeVal = aNode.selectSingleNode("fixed")
					If Not (nodeVal is Nothing) Then
						If CStr(nodeVal.text) <> "0" Then
							Call nodeCSG.setAttribute("fixed", nodeVal.text)
							bFixed = True
						End If
					End If
					If Not bFixed Then
						Set nodeAttr = nodeCSG.getAttributeNode("fixed")
						If Not (nodeAttr is Nothing) Then
							nodeCSG.removeAttributeNode(nodeAttr)
						End If
					End If

					Call nodeLesson.appendChild(nodeCSG)
				Next

				Call nodeDay.appendChild(nodeLesson)
			End If

		Next

		If nodeDay.hasChildNodes() Then
			Call nodeWeek.appendChild(nodeDay)
		End If
	Next

	If nodeWeek.hasChildNodes() Then
		Call nodeTimeTable.appendChild(nodeWeek)
		Call xmlDoc.documentElement.appendChild(nodeTimeTable)
	Else
		GenerateError obLanguage("Calendar","kTimeTableNotFountInFile")
	End If
End If

'xmlDoc.save(Server.MapPath("CMSample.xml"))
'Response.End

' Rector end
'*****************************************************************************


If IsNull(xmlDoc.documentElement ) Or xmlDoc.xml="" Then GenerateError obLanguage("Calendar","kErrReadXML")
Response.Flush
bTimeTable=False 
strReportDays = ""

If xmlDoc.documentElement.childNodes.length > 0 Then
	For Each aNode In xmlDoc.documentElement.childNodes
		If UCase(aNode.nodeName) = "TIMETABLE" Then bTimeTable=True : Call ProcessTimeTable( aNode.childNodes )
	Next
End If
If bTimeTable Then Call DrawReport() Else GenerateError obLanguage("Calendar","kErrPrompt") & NETSCHOOL_PRODUCT_NAME & obLanguage("Calendar","kErrPrompt2") & obLanguage("Calendar","kNoTeg")&": TIMETABLE"
If bIsDebug Then Response.Write "<br>"&obLanguage("Calendar","kExecTime")& " " & Timer-Time1 & obLanguage("Calendar","kSecondsS")
%><br><br>
<script>if ( opener && !opener.closed && opener.ChangeTermForm && opener.ChangeTermForm.submit ) opener.DoSubmit(opener.ChangeTermForm, "");</script>
<input type="button" value="<%=obLanguage("Calendar","kClose")%>" onclick="window.close();">
</body></html>

<%
Sub ProcessTimeTable( theNodeList )
	Dim aNode
	Dim rsTimes
	Dim transaction
	On Error Resume Next

	strCurrYearID = GetSafeLng( obTokenMgr.GetData(strToken,stCurrYear), strSchoolYearId )

	If DoAttendancesExist(dtStart, dtEnd, strCurrYearID) Or DoAssignmentsExist(dtStart, dtEnd, strCurrYearID) Then Response.End ' Error will be generated
	Response.Write "<br>"& obLanguage("Calendar","kClearSchedule")&": " &Date2Str(dtStart) &" -  "&Date2Str(dtEnd) 
	If nPattern = 2 Then
		Response.Write "&nbsp;(" & Trim(obLanguage("Calendar","kBoth")) &")"
	End If
	Response.Flush

	Set dctSubjectGroupVariants = objNSNET.GetSubjectGroupVariantsDictionary(strCurrYearID)

'FedorovSY	objCon.BeginTrans()

	transaction = objNSNET.GetTransaction()

	If nPattern = 1 Then
		Call objNSNET.ClearYearPeriodSchedule_WT(transaction, strCurrYearID, dtStart, dtEnd)
	Else
 		Call ClearScheduleByPattern(transaction)
	End If

	Call objNSNET.ClearYearScheduleTemplate_WT(transaction, strCurrYearID)
	
	arrHoliDays = InitDays(kHoliday, dtStart, dtEnd)
	arrVacations = InitDays( kVacation, dtStart, dtEnd)
	
	Set rsTimes = objNSNET.GetCmnScheduleTimeList_WT(transaction, strCurrYearID)
	
	If rsTimes.EOF Then
		GenerateErrorWithTransaction transaction,obLanguage("Calendar","kScheduleTimesEmpty")
	End If
	
	arrTimes = rsTimes.GetRows(,,Array("RELAY", "SCHEDULETIMENUMBER"))

	Response.Write "<br>"& obLanguage("Calendar","kImportSchedule")&": " &Date2Str(dtStart) &" -  "&Date2Str(dtEnd)
	If nPattern = 2 Then
		Response.Write "&nbsp;(" & Trim(obLanguage("Calendar","kBoth")) &")"
	End If
	Response.Write "<br>"
	Response.Flush

	If theNodeList.length > 0 Then
		
		Set objCmdTemplate = objNSNET.CreateScheduleTemplate_Prepare_WT(transaction)
		
		Set objCmdFindRoom = objNSNET.FindRoom_Prepare_WT(transaction, strSchoolID)
		
		'Set objCmdFindScheduleTime = objNSNET.FindScheduleTime_Prepare_WT(transaction, strCurrYearID)
		Set objCmdFindScheduleTime = objNSNET.FindScheduleTime2_Prepare_WT(transaction)
		
		For Each aNode In theNodeList
			If UCase(aNode.nodeName) = "WEEK" Then Call ProcessWeekNode(transaction, aNode )
		Next
	End If
	TestErrorWithTransaction transaction, obLanguage("Common","kErrorMsg")
'FedorovSY	objCon.CommitTrans()
	objNSNET.CommitTransaction(transaction)
'DisposeCommand Необходимо делать после CommitTransaction, иначе она откатывается...
	Call objNSNET.DisposeCommand(objCmdTemplate)
	Call objNSNET.DisposeCommand(objCmdFindRoom)
	Call objNSNET.DisposeCommand(objCmdFindScheduleTime)
	Call objNSNET.DisposeCommand(objCmdSave)
End Sub

Sub ProcessWeekNode(transaction, theNode )
	Dim aNodeAttributes, aAttrib

	If Not IsObject(theNode) Then Exit Sub
	If theNode.nodeType <> NODE_ELEMENT Then Exit Sub

	Call ProcessDays(transaction, theNode.childNodes )
End Sub

Sub ProcessDays(transaction, theNodeList )
	Dim aNode
	If theNodeList.length > 0 Then
		For Each aNode In theNodeList
			If UCase(aNode.nodeName) = "DAY" Then Call ProcessDayNode(transaction, aNode )
		Next
	End If
End Sub

Sub ProcessDayNode( transaction, theNode )
	Dim aAttrib
	If Not IsObject(theNode) Then Exit Sub
	If theNode.nodeType <> NODE_ELEMENT Then Exit Sub
	wd = null
	If theNode.nodeType=NODE_ELEMENT And Not IsNull(theNode.Attributes) And Not IsEmpty(theNode.Attributes) And IsObject(theNode.Attributes) Then
		For Each aAttrib In theNode.Attributes
			If UCase(aAttrib.nodeName) = "WD" Then wd = aAttrib.nodeValue
		Next
	End If
	
	If IsNull(wd) Then
        GenerateErrorWithTransaction transaction,obLanguage("Calendar","kErrPrompt") & NETSCHOOL_PRODUCT_NAME & obLanguage("Calendar","kErrPrompt2") & obLanguage("Calendar","kErrWD") : Exit Sub
    End If
	    
	Response.Write "<br>"&WeekDayName(wd)
	
	Call ProcessLessons( transaction,theNode.childNodes )
	
	If wd > 1 Then
		If 7*(Timer-Time1)/(wd-1) > Server.ScriptTimeOut Then Server.ScriptTimeOut = Server.ScriptTimeOut * 2
	End If
End Sub

Sub ProcessLessons( transaction, theNodeList )
	Dim aNode
	If theNodeList.length > 0 Then
		For Each aNode In theNodeList
			If UCase(aNode.nodeName) = "LESSON" Then Call ProcessLessonNode( transaction,aNode )
		Next
	End If
End Sub

Sub ProcessLessonNode( transaction,theNode )
	Dim aAttrib

	If Not IsObject(theNode) Then Exit Sub
	If theNode.nodeType <> NODE_ELEMENT Then Exit Sub

	If theNode.nodeType=NODE_ELEMENT And Not IsNull(theNode.Attributes) And Not IsEmpty(theNode.Attributes) And IsObject(theNode.Attributes) Then
		For Each aAttrib In theNode.Attributes
			If UCase(aAttrib.nodeName) = "TIMEID" Then lesson = aAttrib.nodeValue
		Next
	End If
	'stid = FindTimeID(transaction, lesson, wd)
	Response.Write "<br>"&lesson
	
	Call ProcessCSGs( transaction,theNode.childNodes )
End Sub

Sub ProcessCSGs( transaction, theNodeList )
	Dim aNode
	If theNodeList.length > 0 Then
		For Each aNode In theNodeList
			If UCase(aNode.nodeName) = "CSG" Then Call ProcessCSGNode( transaction,aNode )
		Next
	End If
End Sub

Sub ProcessCSGNode( transaction,theNode )
	Dim aAttrib

	If Not IsObject(theNode) Then Exit Sub
	If theNode.nodeType <> NODE_ELEMENT Then Exit Sub
	fixed=null
	roomid=null
	If theNode.nodeType=NODE_ELEMENT And Not IsNull(theNode.Attributes) And Not IsEmpty(theNode.Attributes) And IsObject(theNode.Attributes) Then
		For Each aAttrib In theNode.Attributes
			If UCase(aAttrib.nodeName) = "ID" Then CSGid = aAttrib.nodeValue
			If UCase(aAttrib.nodeName) = "ROOMID" Then roomid = aAttrib.nodeValue
			If UCase(aAttrib.nodeName) = "ROOMNAME" Then roomid = FindRoomID( aAttrib.nodeValue )
			If UCase(aAttrib.nodeName) = "FIXED" Then fixed = aAttrib.nodeValue
		Next
	End If
	stid = FindTimeID(transaction, lesson, wd)

	Call SaveCMs(transaction)
End Sub

Sub SaveCMs(transaction)
	on error resume next
	Dim dtDay, objCmdSave, objCmdTeacherSave, rsCSGInfo
	Dim nStartWeekDay
	Dim bTemplateSaved
	Dim sgTeachers, arrTeachers

	Set rsCSGInfo = objNSNET.GetSubjectGroupInfo_WT(transaction,CSGid)

	Set sgTeachers = objNSNET.GetSubjectGroupTeachers(CSGid)
	arrTeachers = List2Array(sgTeachers)

	arrVacations = InitSgVacations( CSGid, dtStart, dtEnd)

	If CLng(rsCSGInfo ("SCHOOLYEARID")) <> CLng(strCurrYearID) Then 
		GenerateErrorWithTransaction transaction, obLanguage("Calendar","kErrPrompt") & NETSCHOOL_PRODUCT_NAME & obLanguage("Calendar","kErrPrompt2") & obLanguage("Calendar","kErrCSG",strFunctionalityType)
	End If
' допущение - в XML упорядочено по дням недели (для wd по англ., т.е. 1 - воскр, 2 - понед, ..., 7 - суббота)

	nStartWeekDay = WeekDay(dtStart, GetFirstDayOfWeek) ' запоминаем с учётом настроек(!) - для корректного сравнения далее для определения, перескочили ли на следующую неделю
	dtDay = dtStart
	While WeekDay(dtDay) <> CLng(wd)
		dtDay = DateAdd("d", 1, dtDay)
	Wend
'	oneWeekPattern= 1*7

	If nStartWeekDay > WeekDay(dtDay, GetFirstDayOfWeek) Then
		dtDay = DateAdd("d", (nPattern - 1) * kWeekLen, dtDay)
	End If

	Set objCmdSave = objNSNET.CreateClassMeeting_Prepare_WT(transaction)
	Set objCmdTeacherSave = objNSNET.CreateClassMeetingTeacher_Prepare_WT(transaction)

	bTemplateSaved = False
	While DateDiff("d", dtDay, dtEnd, 0, 0) >= 0
		'If Not IsReported( dtDay ) Then   #22693
			If DayIsLearning(dtDay) Then
				nTermId = objNSNET.GetSubjectGroupTermId(CSGid, strCurrYearID, dtDay)

				If nTermId <> 0 Then
					'Call objNSNET.CreateClassMeeting_ExecuteAsp(objCmdSave, objCmdTeacherSave, dtDay, CSGid, stid, nTermId, roomid, sgTeachers)
					Call objNSNET.CreateClassMeeting_ExecuteAsp(objCmdSave, objCmdTeacherSave, dtDay, CSGid, stid, nTermId, roomid, arrTeachers)
					TestErrorWithTransaction transaction, obLanguage("Calendar","kCantSaveClassMeeting")
					'If Not bTemplateSaved Then
					'	Call objNSNET.CreateScheduleTemplate_Execute(objCmdTemplate,CSGid,wd,stid,roomid,fixed)
					'	TestErrorWithTransaction transaction, obLanguage("Calendar","kCantSaveScheduleTemplate")
					'	bTemplateSaved = True
					'End If
					Response.Write "."
				Else
					' Здесь nTermId = 0, скорее всего для дня dtDay нет связи CSGid с уч. периодом. Возможно, это надо как-то отметить?
				End If

			Else
				Report( dtDay )
			End If
		'End If
		dtDay = DateAdd("d", oneWeekPattern, dtDay)
	Wend
	Response.Flush
End Sub


Function List2Array(list)
	Dim i, el
	Redim arr(list.Count - 1)

	i = 0
	For Each el In list
		arr(i) = CLng(el)
		i = i + 1
	Next

	List2Array = arr
End Function


Sub ClearScheduleByPattern(transaction)
	Dim dtCurrStart, dtCurrEnd

	dtCurrStart = dtStart
	dtCurrEnd = DateAdd("d", 7 - WeekDay(dtStart, GetFirstDayOfWeek), dtStart)

	If DateDiff("d", dtCurrEnd, dtEnd, 0, 0) < 0 Then
		dtCurrEnd = dtEnd
	End If

	While DateDiff("d", dtCurrStart, dtEnd, 0, 0) >= 0

		Call objNSNET.ClearYearPeriodSchedule_WT(transaction, strCurrYearID, dtCurrStart, dtCurrEnd)
    	TestErrorWithTransaction transaction, obLanguage("Calendar","kCantClearSchedule")

		dtCurrEnd = DateAdd( "d", oneWeekPattern, dtCurrEnd)
		dtCurrStart = DateAdd( "d", -(kWeekLen - 1), dtCurrEnd)

		If DateDiff("d", dtCurrEnd, dtEnd, 0, 0) < 0 Then
			dtCurrEnd = dtEnd
		End If
	Wend
End Sub

Sub ProcessNode( theNode )
	Dim aNodeAttributes, aAttrib

	If Not IsObject(theNode) Then Exit Sub
	If theNode.nodeType <> NODE_ELEMENT Then Exit Sub

	aNodeAttributes = ""
	If theNode.nodeType=NODE_ELEMENT And Not IsNull(theNode.Attributes) And Not IsEmpty(theNode.Attributes) And IsObject(theNode.Attributes) Then
		For Each aAttrib In theNode.Attributes
			aNodeAttributes = aNodeAttributes & " " & aAttrib.nodeName & "=""" & aAttrib.nodeValue & """"
		Next
	End If

	Response.Write DB2HTML("<" &  theNode.nodeName & aNodeAttributes & ">")
	Call ProcessTimeTable( theNode.childNodes )
	Response.Write DB2HTML("</" & theNode.nodeName & ">")
	Response.Write "<br>"
End Sub

Sub GenerateError(strText)
	Call DrawRedText(strText)
	Response.End
End Sub

Sub GenerateErrorWithTransaction(transaction,  strText)
	objNSNET.RollbackTransaction(transaction)
	Call GenerateError(strText)
End Sub

Sub DrawRedText(strText)
	Response.Write "<br /><br /><font color=""red"">" & DB2HTML_BR(strText) & "</font><br /><br />"
End Sub

'-======================

Function DoAttendancesExist(ByVal dtStartPeriod, ByVal dtEndPeriod, ByVal strYearID)
	Dim objRs
	Response.Write "<br>"& obLanguage("Calendar","kCheckAttendance")&": " &Date2Str(dtStartPeriod) &" -  "&Date2Str(dtEndPeriod) 
	Response.Flush
	Set objRs = objNSNET.GetAttendanceListForYearPeriod(strYearID, dtStartPeriod, dtEndPeriod)
	If objRs.EOF Then
		DoAttendancesExist = False
	Else
		GenerateError vbLf & obLanguage("Calendar","kConflictAttendance") & objRs("NAME") & " " & Date2Str(objRs("DAY"))
		DoAttendancesExist = objRs("CLASSMEETINGID")
	End If
	objRs.Close
End Function

Function DoAssignmentsExist(ByVal dtStartPeriod, ByVal dtEndPeriod, ByVal strYearID)
	Dim objRs
	Response.Write "<br>"& obLanguage("Calendar","kCheckAssignments")&": " &Date2Str(dtStartPeriod) &" -  "&Date2Str(dtEndPeriod) 
	Response.Flush
	Set objRs = objNSNET.GetAssignmentListForYearPeriod(strYearID, dtStartPeriod, dtEndPeriod)
	If objRs.EOF Then
		DoAssignmentsExist = False
	Else
		GenerateError vbLf & obLanguage("Calendar","kConflictAssignments") & objRs("NAME") & " " & Date2Str(objRs("DAY"))
		DoAssignmentsExist = objRs("CLASSMEETINGID")
	End If
	objRs.Close
End Function

Function Report( theDate )
	Dim strDate

	strDate = Date2Str(theDate)
	If InStr(strReportDays, strDate) = 0 Then
		strReportDays = strReportDays & ", " & Date2Str(theDate)
	End If
End Function

Sub DrawReport()
	Dim i

	If Not IsDull(strReportDays) Then
		strReportDays = Mid(strReportDays, 3)
		Response.Write "<br><br>"&obLanguage("Calendar","kSomeLessonsInHolydays")&". "&obLanguage("Calendar","kTheyNotSaved")&":<br>"
		Response.Write strReportDays
	End If
	Call DrawCMViolations()
End Sub

Sub DrawCMViolations()
	Dim objCMComponent, objResult
	Dim isViolation, strViolationMessage

	Set objCMComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.IClassMeetingComponent")
	TestError obLanguage("ServAdmin", "kCantCreateObj")

	Set objResult = objCMComponent.GetClassmeetingsViolationForDates(strCurrYearID, dtStart, dtEnd)
	TestError obLanguage("Calendar", "kErrGetClassmeetingsViolation")

	If Not objResult.IsSuccess Then
		Call DrawRedText(strText)
		Exit Sub
	End If

	isViolation = CBool(objResult.Data)
	If isViolation Then
		strViolationMessage = objResult.Message
		If Not IsDull(strViolationMessage) Then
			Call DrawRedText(strViolationMessage)
		End If
	End If
End Sub

Function FindRoomID( theName )
	FindRoomID = objNSNET.FindRoom_Execute(objCmdFindRoom, theName)
End Function

Function FindTimeID( transaction, theNum, theWD )
	Dim nRelay, nSchedTimeNum
	Dim nIndex, nSchedTimeID, nWD
	Dim strError, strInvalidSGName
	Dim nVariantId
	
	nWD = CLng(theWD)
	nIndex = CLng(theNum) - 1
	If UBound(arrTimes, 2) < nIndex Then GenerateErrorWithTransaction transaction, obLanguage("Calendar","kInvalidScheduleTimes")
	
	nRelay = arrTimes(0, nIndex)
	nSchedTimeNum = arrTimes(1, nIndex)

	nVariantId = dctSubjectGroupVariants(CLng(CSGid))
	If IsEmpty(nVariantId) Then
		nVariantId = 0
	End If
	
	on error resume next
	'nSchedTimeID = objNSNET.FindScheduleTime_Execute(objCmdFindScheduleTime, nRelay, nSchedTimeNum, nWD, CSGid)
	nSchedTimeID = objNSNET.FindScheduleTime2_Execute(objCmdFindScheduleTime, nRelay, nSchedTimeNum, nWD, nVariantId)
	TestErrorWithTransaction transaction, obLanguage("Calendar","kErrNLesson")

	If nSchedTimeID = 0 Then
		strInvalidSGName = objNSNET.GetSubjectClassName(CSGid)
		strError = obLanguage("Calendar","kScheduleTimeNotDefined") & ": " & WeekDayName(nWD) & ", " & obLanguage("Calendar","kRelay") & " " & nRelay & ", " & obLanguage("Calendar","kNLesson", strFunctionalityType) & " " & nSchedTimeNum & "." & vbLf
		strError = strError & obLanguage("ClassManagement","kSubjectGroupName") & ": " & strInvalidSGName & "." & vbLf & obLanguage("Calendar","kCantImportCM")
		GenerateErrorWithTransaction transaction, strError
	End If
	FindTimeID = nSchedTimeID
End Function
%>
