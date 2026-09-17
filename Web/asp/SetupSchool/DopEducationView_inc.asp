
<% ' © 2007-2008 IRTech. All rights reserved.

Const MaxDescriptionSize = 2000
Const kAddSchoolReason_Cirtif = "1"

Dim strStudentID, objReasons, objDopEducation
Dim bEmpty, bMaySave
Dim arrNumYears
Dim bAddSchool
Dim strClassName

Function GetPageTitle()
End	Function

Function GetPageTabItem()
End	Function

Function hasUserRightsOnPage()
	Dim strClassID

	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	strStudentID = GetSafeID(Request("UID"), GetSafeID(obTokenMgr.GetData(strToken,stUsersStaffUserID), "-1"))
	strCurrYearID = GetSafeLng(Request("CURRYEAR"),obTokenMgr.GetData(strToken,stCurrYear))

	If bIsEMForSchool Then
		hasUserRightsOnPage = True
		readonly = True
		Exit Function
	ElseIf bAddSchool Then
		hasUserRightsOnPage = True
		Exit Function
	End If

	' common school entry
	If HasUserRight(arUsersEditStudents) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then 
		strClassName = objNSNET.GetClassNameForStudent(strStudentID, strCurrYearID)
		If Not isDull(strClassName) Then 
			strClassID = objNSNET.GetClassID(Empty, strCurrYearID, strClassName)
			If objNSNET.IsClassChief(strClassID, strUserID) Then hasUserRightsOnPage = True: Exit Function
		End If
	End If

	hasUserRightsOnPage = False
End Function

Sub ReadState()
	specialRead
	If Not readonly Then
		If bAddSchool Then
			readonly = Not HasUserRight(arUsersEditStudents)
		Else
			readonly = True
		End If
	End If

	If Not readonly Then
		arrNumYears = MakeNumYearsArray()
	End If
End	Sub

Sub	specialMain
End Sub

Sub	specialRead
End Sub

Sub	Main
	specialMain
	If Not readonly Then
		Set objReasons = objNSNET.GetAddSchoolReasons()
		If objReasons.EOF Then GenerateError obLanguage("SetupSchool","kErrNoAddSchoolReasons")
	End If

	Set objDopEducation = objNSNET.GetStudentDopEducation(-1, strStudentID, strCurrYearID, Empty)
	bEmpty = objDopEducation.EOF

	bMaySave = False
	If Not readonly And Not bEmpty Then
		Do While Not objDopEducation.EOF
			If CLng(strSchoolID) = GetSafeLng(objDopEducation("SCHOOLID"), Null) Then
				bMaySave = True
				Exit Do
			End If
			objDopEducation.MoveNext
		Loop
		objDopEducation.MoveFirst
	End If
End	Sub


Sub	onHead()
%>
<SCRIPT><!--

function saveInfo(){
	if( isDBBusy() ) return false;
	var form=document.forms['main'];
	var arDESCR=form.elements.DESCR;
	if (arDESCR) {
		if (arDESCR.length) {
			for (var j=0;j<arDESCR.length;j++)
            {
            	if(!(checkAreaLength(arDESCR[j], <%=MaxDescriptionSize%>, '<%=obLanguage("SetupSchool","kAddInfo")%>'))) return;
			}
		}
		else
        {
        	if(!(checkAreaLength(arDESCR, <%=MaxDescriptionSize%>, '<%=obLanguage("SetupSchool","kAddInfo")%>'))) return;
        }
	    setDBBusy();
	    DoSubmit( form, "" );
	}
}
function addCreative(){
	if( isDBBusy() ) return false;
	var form = document.main;
	form.ACT.value = 'add';
	setDBBusy();
	ok('main', 'AddEducationSave.asp');
}
//--></SCRIPT>
<%
End	Sub

Sub	DrawFilters( strForm )
End	Sub

Sub	DrawButtons()
End	Sub

Sub	specialDraw()
End	Sub

Sub specialHeaderDraw()
End	Sub

Sub specialBottomDraw()
End	Sub

Sub	onDrawPage()
	specialHeaderDraw
	Dim dtAid, strAidDate, i
	Dim bRO, nCurrAddSchoolID, bOtherSchool
	Dim strCurrSubDocID, strReasonID
	If bEmpty Then
		%><h2 class="text-center"><%=obLanguage("SetupSchool","kEmptyStudentAddEducation")%></h2><%
	Else
	%><FORM NAME="main" METHOD="post" ACTION="DopEducationSave.asp">
		<%specialDraw %>
		<table class="table table-sm table-bordered table-print-text">
			<tr><th rowspan="2"><%=obLanguage("SetupSchool","kUDODName")%></th><th rowspan="2"><%=obLanguage("SetupSchool","kOtrasl")%></th>
				<th rowspan="2"><%=obLanguage("SetupSchool","kUDODReason")%></th><th rowspan="2"><%=obLanguage("SetupSchool","kProgramDirection")%></th><th rowspan="2"><%=obLanguage("SetupSchool","kProgramName")%></th>
				<th rowspan="2"><%=obLanguage("SetupSchool","kProgramDescr")%></th><th rowspan="2"><%=obLanguage("SetupSchool","kYearNum")%></th><th colspan="2"><%=obLanguage("SetupSchool","kProgramHours")%></th><th rowspan="2"><%=obLanguage("SetupSchool","kCombining")%></th>
				<th rowspan="2"><%=obLanguage("SetupSchool","kEnrollDate")%></th><th rowspan="2"><%=obLanguage("SetupSchool","kDepartDate")%></th><%If bAddSchool Then%><th rowspan="2"><%=obLanguage("SetupSchool","kAddInfo")%></th><%End If%></tr>
				<tr><th><%=obLanguage("SetupSchool","kForYear")%></th><th><%=obLanguage("SetupSchool","kForWeek")%></th>
			</tr><%
			While Not objDopEducation.EOF
				nCurrAddSchoolID = GetSafeLng(objDopEducation("SCHOOLID"), Null)
				bOtherSchool = (CLng(strSchoolID) <> nCurrAddSchoolID)
				bRO = readonly Or bOtherSchool%>
				<tr>
					<td><%
					If Not bRO And IsDull(objDopEducation("DOCDATE2")) then
						strCurrSubDocID = GetSafeID(objDopEducation("SUBDOCID1"), Null)
						Response.Write WriteHiddenTags(Array("SUBDOCID", strCurrSubDocID))
					End If%>
					<%=DB2HTML(objDopEducation("EONAME"))%></td>
					<td><%=DB2HTML(objDopEducation("OTRASL"))%></td><%

					strReasonID = GetSafeID(objDopEducation("REASONID"), Null)
'					If bRO Or strReasonID = kAddSchoolReason_Cirtif Then
					If bRO Or Not IsDull(objDopEducation("DOCDATE2")) Then%>
					    <td><%=DB2HTML(objDopEducation("REASONNAME"))%><%'If Not bRO Then%><%'=WriteHiddenTags(Array("REASONID", strReasonID))%><%'End If%></td><%
					Else%>
						<td><%Call DrawSelectRs(objReasons, "REASONID", "REASONID", "REASONNAME", GetSafeID(objDopEducation("REASONID"), Null), Null, "")%></td><%
						objReasons.MoveFirst
					End If%>
					<td><%=DB2HTML(objDopEducation("DIRECTIONNAME"))%></td>
					<td><%=DB2HTML(objDopEducation("PROGRAMNAME"))%></td>
					<td><%=DB2HTML_BR(objDopEducation("PROG_DESCR"))%></td>
					<td class="cell-num"><%=DB2HTML(objDopEducation("GRADE"))%></td>
					<td class="cell-num"><%=DB2HTML(objDopEducation("YEARHOURS"))%></td>
					<td class="cell-num"><%=DB2HTML(objDopEducation("WEEKHOURS"))%></td>
					<td><%=DB2HTML(objDopEducation("CLASSNAME"))%></td>
					<td><%=(obLanguage("SetupSchool","kDocNumber2") & " " & DB2HTML(objDopEducation("DOCNUMBER1")) & " " & obLanguage("SetupSchool","kFrom2") & " " & Date2Str(objDopEducation("DOCDATE1")))%></td><%
					If Not IsDull(objDopEducation("DOCDATE2")) Then%>
						<td><%=(obLanguage("SetupSchool","kDocNumber2") & " " & DB2HTML(objDopEducation("DOCNUMBER2")) & " " & obLanguage("SetupSchool","kFrom2") & " " & Date2Str(objDopEducation("DOCDATE2")))%></td><%
					Else%>
						<td>&nbsp;</td><%
					End If
					If bAddSchool Then
						If bRO Or Not IsDull(objDopEducation("DOCDATE2")) Then%>
							<td><%=DB2HTML_BR(IIf(bOtherSchool, "", objDopEducation("DESCRIPTION")))%></td><%
						Else%>
							<td class="select text-nowrap"><%=ShowTextArea("DESCR", 2, 30, "", GetSafeStr(objDopEducation("DESCRIPTION"), -1, ""))%></td><%
						End If
					End If%>
				</tr><%
				objDopEducation.MoveNext
			Wend%>
		</table><br><%
	End If%>
</FORM><%
	specialBottomDraw
End	Sub

Function MakeNumYearsArray()
	Dim arr

	ReDim arr(1, 7)
	arr(0, 0) = 1
	arr(1, 0) = 1
	arr(0, 1) = 2
	arr(1, 1) = 2
	arr(0, 2) = 3
	arr(1, 2) = 3
	arr(0, 3) = 4
	arr(1, 3) = 4
	arr(0, 4) = 5
	arr(1, 4) = 5
	arr(0, 5) = 6
	arr(1, 5) = 6
	arr(0, 6) = 7
	arr(1, 6) = 7
	arr(0, 7) = 8
	arr(1, 7) = obLanguage("SetupSchool","kGrater7")

	MakeNumYearsArray = arr
End Function
%>
