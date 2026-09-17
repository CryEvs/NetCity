<!-- #INCLUDE FILE ="ExportCM_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kEpselon = 0.00001

Dim rsClasses, dtCMStartDate

Sub onDrawPage()
	Response.AddHeader "Content-Disposition", "attachment; filename=ExportCM_R.nsxml"%>
<TimeTableExchange xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="TimeTable.xsd">
<format name="NetSchool" version="3"/>
<%
	dtCMStartDate = GetSafeDate(Request("startDate"), obTokenMgr.GetData(strToken, stCMStartDate))
	Set rsClasses = objNSNET.GetYearClassesForExport(strCurrYearID, dtCMStartDate)
	If rsClasses.EOF Then
		GenerateError(obLanguage("Calendar","kClassesListEmpty",strFunctionalityType))
	End If

	DrawWeekEndDays
	DrawSubjectsAndAreas
	DrawRooms
	DrawScheduleTimes
	DrawTeachers
	DrawClasses
	DrawLoads
'	DrawClassMeetings
%>
</TimeTableExchange>
<%
End Sub

Sub	DrawWeekEndDays
	Dim objRs, nWeekEndSet
	Dim i, nPower2
	
	Set objRs = objNSNET.GetYearInfo(strCurrYearID)
	nWeekEndSet = CLng(objRs("WEEKENDSET")) ' хранятся степени 2, по-англ., от 0 (0 - воскр., 1 - понед., ..., 6 - суббота)

	Response.Write "<WeekEnds>" & vbLf
	For i = 1 To 7
		nPower2 = 2^(i - 1)
		If (nWeekEndSet And nPower2) <> 0 Then
			Response.Write "<WeekEnd wd=""" & i & """/>" & vbLf
		End If
	Next
	Response.Write "</WeekEnds>" & vbLf
End Sub

Sub DrawTeachers
	Dim rsTeachers

	Set rsTeachers = objNSNET.GetTeacherList(strCurrYearID)
	If rsTeachers.EOF Then
		GenerateError(kTeachersListEmpty)
	End If
	Call DrawTable("teachers", "teacher", rsTeachers, _
		Array("TEACHERID", "LASTNAME", "FIRSTNAME", "MIDDLENAME"), _
		Array("id", "surname", "first_name", "second_name"))
End Sub

Sub DrawRooms
	Dim rsRooms

	Set rsRooms = objNSNET.GetRoomsForExport(strSchoolID)
	Call DrawTable("rooms", "room", rsRooms, _
		Array("id", "name", "SEATS"), _
		Array("id", "name", "capacity"))
End Sub

Sub DrawSubjectsAndAreas
	Dim adoHConn
	Dim objSubjectList, rsSubjField, rsFields, i
	Dim bIsSubjFieldsExists, bField
	Dim strSubjectsXML, strFieldsXML
	Dim strFieldID, strFieldName, strSubjID, strSubjName

	Set objSubjectList = objNSNET.GetSubjectList(strSchoolID, strCurrYearID, True)

	If objSubjectList.EOF Then
		GenerateError(kSubjectsListEmpty)
	Else
		bIsSubjFieldsExists = objSubjectList("FIELDID")<>0
	End If
	strSubjectsXML = "<subjects>" & vbLf
	If bIsSubjFieldsExists Then
		strFieldsXML = "<areas>" & vbLf
	End If
	Set rsFields = objSubjectList("chapFields").Value
	Do
		bField = False
		If bIsSubjFieldsExists Then
			strFieldID = objSubjectList("FIELDID")
			If strFieldID<>0 Then
				bField = True
				strFieldName = CStr(objSubjectList("FIELDNAME"))
				strFieldsXML = strFieldsXML & "<area><id>" & strFieldID & "</id><name>" & strFieldName & "</name></area>" & vbLf
			End If
		End If
		For i = 1 To rsFields("cnt")
			strSubjID = CStr(objSubjectList("SUBJECTID"))
			strSubjName=CStr(objSubjectList("SUBJECTNAME"))
			strSubjectsXML = strSubjectsXML & "<subject><id>" & strSubjID & "</id><name>" & strSubjName & "</name>"
			If bField Then
				strSubjectsXML = strSubjectsXML & "<areaId>" & strFieldID & "</areaId>"
			End If
			strSubjectsXML = strSubjectsXML & "</subject>" & vbLf

			objSubjectList.MoveNext
		Next
	Loop Until objSubjectList.EOF
	objSubjectList.Close
	strSubjectsXML = strSubjectsXML & "</subjects>" & vbLf
	If bIsSubjFieldsExists Then
		strFieldsXML = strFieldsXML & "</areas>" & vbLf
	End If

	If bIsSubjFieldsExists Then
		Response.Write strFieldsXML
	End If
	Response.Write strSubjectsXML
End Sub

Sub DrawClasses
	Call DrawTable("classes", "class", rsClasses, _
		Array("CLASSID", "CLASSNAME", "STUDCNT"), _
		Array("id", "name", "student"))
End Sub

Sub DrawLoads
	Dim strClassID, rsSubjClasses
	Dim strLoadXML, strSubjectID, strOldSubjectID
	Dim nLoadID, strCSGID, strName, strTeacherID
	Dim strGroupStudentsCnt
	Dim dHours, nHours, strHours
	Dim strParentSubjID, strOldParentSubjID
	
	rsClasses.MoveFirst

	strLoadXML = ""
	nLoadID = 0
	While Not rsClasses.EOF
		strClassID = CStr(rsClasses("CLASSID"))
		Set rsSubjClasses = objNSNET.GetExportSubjectsListForClass(strClassID, dtCMStartDate)
		If Not rsSubjClasses.EOF Then

			strOldParentSubjID = ""
			strOldSubjectID = ""
			While Not rsSubjClasses.EOF
				strParentSubjID = GetSafeID(rsSubjClasses("PARENTSUBJECTID"), "0")
				
				strSubjectID = CStr(rsSubjClasses("sid"))
				strCSGID = CStr(rsSubjClasses("id"))
				strName = CStr(rsSubjClasses("Name"))
				strTeacherID = CStr(rsSubjClasses("tid"))
				strGroupStudentsCnt = CStr(rsSubjClasses("studcnt"))
				
				If strSubjectID <> strOldSubjectID Then
					
					If strOldSubjectID <> "" Then
						strLoadXML = strLoadXML & "</load>" & vbLf
					End If

					strOldParentSubjID = strParentSubjID
					strOldSubjectID = strSubjectID
					nLoadID = nLoadID + 1
					
					If Not IsDull(rsSubjClasses("hrsweek")) Then
						dHours = CDbl(rsSubjClasses("hrsweek"))
						nHours = Int(dHours)
						If Abs(dHours - nHours) > kEpselon Then
							nHours = nHours + 1 ' если дробное число, то округл. в большую сторону
						End If
						strHours = CStr(nHours)
						
						strLoadXML = strLoadXML & "<load>" & vbLf & _
							"<id>" & nLoadID & "</id><hour_count>" & strHours & "</hour_count>" & vbLf & _
							"<flow><classId>" & strClassID & "</classId></flow>" & vbLf
					End If
				End If

				strLoadXML = strLoadXML & "<group>" & vbLf & _
					"<id>" & strCSGID & "</id><name>" & strName & "</name>" & vbLf
				If strGroupStudentsCnt <> "0" Then
					strLoadXML = strLoadXML & "<student>" & strGroupStudentsCnt & "</student>"
				End If
				strLoadXML = strLoadXML & _
					"<teacherId>" & strTeacherID & "</teacherId><subjectId>" & strSubjectID & "</subjectId>" & vbLf & _
					"</group>" & vbLf
				
				rsSubjClasses.MoveNext
			WEnd
			
			strLoadXML = strLoadXML & "</load>" & vbLf
			
		End If
		
		rsClasses.MoveNext
	WEnd

	If strLoadXML = "" Then
		GenerateError(kPlanEmpty)
	End If
	strLoadXML = "<loads>" & vbLf & strLoadXML & "</loads>" & vbLf

	Response.Write strLoadXML
End Sub

Sub DrawTable( theGroupTag, theItemTag, rsObj, arrNamesRs, arrNamesXML )
	Dim i
	Dim strXML

	strXML = ""
	strXML = strXML & "<" & theGroupTag & ">" & vbLf
	While Not rsObj.EOF
		strXML = strXML & "<" & theItemTag & ">" & vbLf
		For i = 0 To Ubound(arrNamesRs)
			strXML = strXML & "<" & arrNamesXML(i) & ">" & rsObj(arrNamesRs(i)) & "</" & arrNamesXML(i) & ">" & vbLf
		Next
		strXML = strXML & "</" & theItemTag & ">" & vbLf
		rsObj.MoveNext
	WEnd
	strXML = strXML & "</" & theGroupTag & ">" & vbLf
	Response.Write strXML
End Sub
%>
