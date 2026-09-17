<!-- #INCLUDE FILE ="ExportCM_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim dtCMStartDate

Sub onDrawPage()
	Dim rsObj
	Response.AddHeader "Content-Disposition", "attachment; filename=ExportCM.nsxml"
	
	%>
	<TimeTableExchange xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="TimeTableWeek.xsd">
	<%
	dtCMStartDate = GetSafeDate(Request("startDate"), obTokenMgr.GetData(strToken, stCMStartDate))
	DrawScheduleTimes

	Set rsObj = objNSNET.GetTeacherListForExport(strCurrYearID)
	Call DrawTable("teachers", "teacher", rsObj)

	DrawSubjects
	DrawRooms
	DrawPlan
	DrawClassMeetings
	%>
</TimeTableExchange><%
End Sub

Sub DrawSubjects
	Dim rsSubjects, strSubjID, strOldSubjID
	
	Set rsSubjects = objNSNET.GetSubjectsWithTeachersForExport(strSchoolID, dtCMStartDate)
	If rsSubjects.EOF Then Exit Sub%>
	<subjects><%strOldSubjID= -1
	While Not rsSubjects.EOF
		strSubjID = rsSubjects("SID")
		If strSubjID <> strOldSubjID Then
			If strOldSubjID<> -1 Then%></subject><%End If%>
		<subject sid="<%=strSubjID%>" name="<%=DB2XML_Value(rsSubjects("NAME"))%>" abbr="<%=DB2XML_Value(rsSubjects("ABBR"))%>"<%=IIF(rsSubjects("foreign")<>"0", " foreign="""&rsSubjects("foreign")&"""", "")%>><%
			strOldSubjID = strSubjID 
		End If%>
			<teacher tid="<%=rsSubjects("TID")%>" /><%
		rsSubjects.MoveNext
	WEnd%>
			</subject>
	</subjects><%
End Sub

Sub DrawRooms
	Dim rsRooms

	Set rsRooms = objNSNET.GetRoomsForExport(strSchoolID)
	Call DrawTable("Rooms", "room", rsRooms)
End Sub

Sub DrawPlan
	Dim rsClasses, rsSubjClasses, strClassID, strSubjClassID
	Dim strCurSubjID, dctSubjects, nSubjGroupNum

	Set rsClasses = objNSNET.GetYearClassesForExport(strCurrYearID, dtCMStartDate)
	Dim Item%>
	<Plan><%
		While Not rsClasses.EOF
			strClassID = rsClasses("CLASSID")%>
			<class id="<%=strClassID%>" name="<%=DB2XML_Value(rsClasses("CLASSNAME"))%>" grade="<%=rsClasses("GRADE")%>" studcnt="<%=rsClasses("studcnt")%>" boys="<%=rsClasses("boys")%>" girls="<%=rsClasses("girls")%>"> <%
			Set rsSubjClasses = objNSNET.GetExportSubjectsListForClass(strClassID, dtCMStartDate)
			Call DrawTable("", "csg", rsSubjClasses)%>
			</class><%
			rsClasses.MoveNext
		WEnd

		' #13557 Подготовка импорта/экспорта расписания для ИУП классов (точнее - предмето-групп).
		If bExistsIupClasses Then
			Set dctSubjects = Server.CreateObject("NetCity.Storage")
			Set rsClasses = objNSNET.GetYearIupClassesWithSubjGroupsForExport(strCurrYearID, dtCMStartDate)
			While Not rsClasses.EOF
				strClassID = rsClasses("CLASSID")%>
				<class id="<%=strClassID%>" name="<%=DB2XML_Value(rsClasses("CLASSNAME"))%>" grade="<%=rsClasses("GRADE")%>" studcnt="<%=rsClasses("cls_studcnt")%>" boys="<%=rsClasses("boys")%>" girls="<%=rsClasses("girls")%>"> <%
				
				Set rsSubjClasses = rsClasses("subjgroups").Value
				'Call DrawTable("", "csg", rsSubjClasses)
					
				dctSubjects.RemoveAll()
				While Not rsSubjClasses.EOF
					strCurSubjID = GetSafeID(rsSubjClasses("sid"), Null)
					If dctSubjects.Contains(strCurSubjID) Then
						nSubjGroupNum = dctSubjects(strCurSubjID) + 1
					Else
						nSubjGroupNum = 1
					End If
					dctSubjects(strCurSubjID) = nSubjGroupNum%>

					<csg id="<%=rsSubjClasses("id")%>" tid="<%=rsSubjClasses("tid")%>" name="<%=DB2XML_Value(rsSubjClasses("name"))%>" sid="<%=strCurSubjID%>" studcnt="<%=rsSubjClasses("studcnt")%>" hrsweek="<%=rsSubjClasses("hrsweek")%>" parentsubjectid="1" groupid="<%=nSubjGroupNum%>" /> <%
					
					rsSubjClasses.MoveNext
				WEnd%>
				</class><%
				rsClasses.MoveNext
			WEnd
		End If%>
	</Plan><%
End Sub

Sub DrawTable( theGroupTag, theItemTag, rsObj )
	Dim i
	'Open Grouping Tag
	If theGroupTag <> "" Then%>
		<<%=theGroupTag%>>
	<%End If
	While Not rsObj.EOF%>
		<<%Response.Write theItemTag
		For i = 0 To rsObj.Fields.Count - 1
			Response.Write " "&LCase(rsObj(i).Name) &"="&""""&DB2XML_Value(rsObj(i).Value)&""""
		Next%>/><%
		rsObj.MoveNext
	WEnd
	'Close Grouping Tag
	If theGroupTag <> "" Then%>
		</<%=theGroupTag%>>
	<%End If
End Sub
%>
