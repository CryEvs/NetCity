<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/teacher.asp-->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngFilter.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterGrades.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/curriculum.asp" -->

<%	'©2001 ROOS. All rights reserved.

If Not bIsDebug Then On Error Resume Next

Dim objClassesRs, objTeachersRs, dictNonAdvanceList, strClassID, dictClassNames, Item, arrSortedClasses

Function hasPageQHelp()
	hasPageQHelp = True
End Function

Sub onHelpContent()
%><p>Назначте классного руководителя и профиль каждому классу и и нажмите 'След.>>'.</p><%
End Sub

Function GetPageTitle()
	GetPageTitle = "Список выпускников года"
End Function

Sub ReadState()
	Dim lngProfile, arrKeys, lngTID
	Set objClassesRs = obNS2.GetYearClasses(objCon, strCurrYearID)
'	Set objTeachersRs = obNS2.GetTeacherList(objCon, strCurrYearID)
'	Set dictClassNames = Server.CreateObject( "Scripting.Dictionary" )
'	If IsObject(obTokenMgr.GetData(strToken,"NonAdvanceList") ) Then
'		Set dictNonAdvanceList = obTokenMgr.GetData(strToken,"NonAdvanceList")
'		Call CalcClassNames( "-1", Null, Null )
'		While Not objClassesRs.EOF
'			strClassID = CStr( objClassesRs( "CLASSID") )
'			lngTID = CLng(objClassesRs( "TEACHERID"))
'			lngProfile = CLng(objClassesRs( "PROFILEID")) 
'			Call CalcClassNames( strClassID, lngTID, lngProfile )
'			objClassesRs.MoveNext
'		Wend
'	End If
'	arrKeys = dictClassNames.Keys
'	Set arrSortedClasses = sortArray( arrKeys )
End Sub

Sub CalcClassNames( strClassID, lngTID, lngProfile )
	Dim lngGrade, strLetter, arrStudents(), ii
	Dim oGrades, oLetters, oStudents, i, strClassName, strOldClassName, strStudentID
	If Not dictNonAdvanceList.Exists( strClassID ) Then Exit sub
	oStudents = dictNonAdvanceList( strClassID )(0)
	oGrades = dictNonAdvanceList( strClassID )(1)
	oLetters = dictNonAdvanceList( strClassID )(2)
	For i = 0 To Ubound(oStudents)
		strStudentID = oStudents(i)
		lngGrade = CLng( oGrades(i) )
		If lngGrade >= kLastGrade Then
			strClassName = "  " & GetGradeByNum( lngGrade -1)
			strLetter =  oLetters(i)
			strClassName = strClassName & strLetter
			Response.Write i&" " &obNS2.GetUserNickName(objCon, strStudentID) & " " & strClassName &"<br>"
		End If
	Next
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,"NewYearClasses", dictClassNames )
End Sub

Sub Main()
	If Not HasUserRight(arCreateCloseEditYear) Then GenerateError kErrPageAccess
End Sub

Sub onHead()
%>
<SCRIPT><!--

//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
	Dim i, oStudents, strStudentID%>
<FORM name="Advancement" action="CreateNewYear.asp" method="POST">
<%=WriteObligatoryTags()%>
<input type="hidden" name="NA" value="N">
<table border=0 cellspacing=10 cellpadding=3>
<tr><td valign="top">
		<%=ShowButton("Next","Next","JavaScript:DoSubmit(document.Advancement, 'Years.asp' )","Далее","Далее")%><br>
		<%=ShowButton("Prev","Prev","JavaScript:DoSubmit(document.Advancement,'AdvanceStudentGrade.asp')","Назад","Назад")%><br>
		<br><br>
		<%=ShowButton("Cancel","Cancel","JavaScript:goBack(document.Advancement, 'Years.asp');","Возврат в учебные периоды","Отмена")%>
	</td>
	<td>
		<table class="ThinTable" border=1 cellspacing=0>
	<%
	If IsObject(obTokenMgr.GetData(strToken,"NonAdvanceList") ) Then
		Set dictNonAdvanceList = obTokenMgr.GetData(strToken,"NonAdvanceList")
			While Not objClassesRs.EOF
			strClassID = CStr( objClassesRs( "CLASSID") )
			If Clng(objClassesRs( "GRADE")) >=kLastGrade-2 Then
				If dictNonAdvanceList.Exists( strClassID ) Then
					Response.Write "<tr><th>"&objClassesRs("CLASSNAME")
					Response.Write " - "&NSDate
					Response.Write " № "&strClassID&"</th><th>Награда</th></tr>"
					oStudents = dictNonAdvanceList( strClassID )(0)
					For i = 0 To Ubound(oStudents)
						strStudentID = oStudents(i)
						Response.Write "<tr><td>" &obNS2.GetUserNickName(objCon, strStudentID) & "</td><td>Орден</td></tr>"
					Next
				End If
			End If
			objClassesRs.MoveNext
		Wend
	End If%>
		</table>
	</td>
</tr></table></form>
<%
End Sub

Function LocationPath()
	LocationPath = GetSystemLocationPath() & "/Создание года/Классы"
End Function

Sub DrawClassRow( theClassName )
	Dim classInfo
	classInfo = dictClassNames(theClassName)%>
	<tr><td class="body" align="center"><%=theClassName%><input type="hidden" name="CLASSNAME" value="<%=theClassName%>"></td>
		<td class="body"align="center"><%=1+UBound( classInfo(0) )%></td><%
	If Left( theClassName, 2) = "  " Then%><td>&nbsp;</td><td>&nbsp;</td><%
	Else%>
		<td><select name="TIDS"><%PopulateSelect objTeachersRs, "TEACHERID", "NICKNAME", classInfo(1) %></select></td>
		<td class="select"><%DrawSelectArr obNS2.GetGradeProfileList(objCon, classInfo(2), strSchoolID), "PROFID", classInfo(3), null, ""%></td>
</tr><%
	End If
End Sub

%>
<SCRIPT Language="Jscript" RUNAT="SERVER">
	function sortArray( arr )
	{
		var arrSort = arr.toArray();
		return arrSort.sort();
	}
</SCRIPT>
