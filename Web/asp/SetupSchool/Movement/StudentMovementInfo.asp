<!-- #INCLUDE Virtual="/asp/headersimple.asp" -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->

<% ' © 2007-2017 IRTech. All rights reserved.

Dim strEditUserID, nPoolSchoolID
Dim strFirstName, strLastName, strMiddleName, strDisplayName
Dim strDate, bMale
Dim objInfo, bParents, parents
Dim strBackPage
Dim bIsAdmin

Function hasUserRightsOnPage()
	bIsAdmin = True
	If bIsEducManager Then
		hasUserRightsOnPage = true
		Exit Function
	ElseIf objNSNET.IsAdminOfServer(strUserID) Then
		hasUserRightsOnPage = True : Exit Function
	Else
		hasUserRightsOnPage = HasUserRight(arMovePoolStudents)
		bIsAdmin = False
	End If
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleStudentInfo",strFunctionalityType)& ": " & objInfo("NickName") & ", " & _
		objInfo("GENDER")  & ", " & strDate
End Function

Sub ReadState()
	bParents=True
	strEditUserID = GetSafeID( Request("UID"), Null)
	strBackPage = GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER" ))
	If strFunctionalityType = kFuncType_Add Then readonly =True Else readonly = bIsEMForSchool
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stBackPage, strScriptName)
End Sub

Sub MainUserInfo()
	on error resume next
	nPoolSchoolID = GetSafeLng(Request("POOLSCHOOL"), -1)
	Set objInfo = objNSNET.GetStudentMovmentInfo(strEditUserID)
	If objInfo.EOF Then GenerateError obLanguage("Movement","kMsgEmptyMovement")
	If bParents Then
		Set parents = objNSNET.GetStudentParents(strEditUserID)
		bParents = Not parents.EOF
	End If

	bMale = (objInfo("GENDER") = obLanguage("Common","kMaleLet"))
	strFirstName = objInfo("FIRSTNAME")
	strMiddleName = objInfo("MIDDLENAME")
	strLastName = objInfo("LASTNAME")
	strDate = objInfo("BIRTHDATE")
	If IsDull(strDate) Then strDate = "" Else strDate = Date2Str(strDate)
End Sub

Sub Main()
	Dim objSchoolInfo
	Dim nFromSchoolID
	Dim nFromGrade, nPoolSYID, strTmpSYID, nGradeJunior_Max, nGradeMiddle_Max
	Dim nTmpFuncType
	Call MainUserInfo()
	'Set objInfo = objNSNET.GetStudentMovementInfo(strEditUserID)
	'If objInfo.EOF Then GenerateError obLanguage("SetupSchoolUI","kNoAddedInfoAcces")

	'Set objPar = objInfo("chaptParents").Value
	'bParents = Not objPar.EOF

	readonly = False
%>
	<script><!--
	var control;
	//--></SCRIPT><%
End Sub

Sub onHead()
%>
<script>
	isHaveToLogout = true;
	bNewWindow = true;
	function cancelChanges(obj) {
		$(obj).parents().find('.openedDialog').last().dialog('close');
	}

</SCRIPT>
<%
End Sub
Sub DrawButtons()
End Sub

Sub onDrawPage()
%>
<form NAME="MainForm" METHOD="POST" ACTION="<%=strBackPage%>">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("UID", strEditUserID, "BackPage", strBackPage) )%>
	<table CELLPADDING="3">
	<tr><td valign="top"><%Call DrawButtons()%></td></tr>
	<tr><td>
	<table id="NS_MOVDOC_EDITING_ROW" class="able table-bordered table-condensed" align="center"><%
		IF bParents Then DrawParentsTable()
		Call DrawSpecialTable()
	%>
	</table>
	</td>
</tr></table></form><%
End Sub

Sub DrawParentsTable()
%>
<tr><th><%=obLanguage("Common","kParents")%></th>
	<td nowrap><%
	DrawTable parents
	%></td></tr><%
End Sub
Sub DrawTable(dr)
'on error resume next
	If dr Is Nothing Then Exit Sub
	If  dr.EOF Then Exit Sub
	Dim i, n,fieldName, id, val, i0, jn, j, old
	rw "<br />"
	i0=0
	n = dr.Fields.Count-1'Ubound(arr,1)'
	rw "<table class='table table-bordered table-condensed' width='1%'>"
		' rw "<tr>"
		' For i=i0 To n
			' rw "<th>"
			' fieldName = dr.Fields()(i).Name
			' rw  fieldName&" "
			' rw "&nbsp;" &" "
			' rw "</th>"
		' Next
		' rw "</tr>"
	While Not dr.EOF
		rw "<tr>"
		For i=i0 To n
			val= DB2HTML(dr(i))
			rw "<td>"
			rw  val&" "
			rw "</td>"
		Next
		rw "</tr>"
		dr.MoveNext
	WEnd
	rw "</table>"
'	err.clear
End Sub
Sub DrawSpecialTable()
%>
<tr><th><%=obLanguage("MenuFolders","kMovement")%></th>
	<td ><%
	DrawTable1 objInfo
	%></td></tr><%
End Sub
Sub DrawTable1(dr)
'on error resume next
	If dr Is Nothing Then Exit Sub
	If  dr.EOF Then Exit Sub
	Dim i, n,fieldName, id, val, i0, jn, j, old
	rw "<br />"
	n = dr.Fields.Count-1'Ubound(arr,1)'
	' id=-1
	i0=6
	' jn=17
	rw "<table class='table table-bordered table-condensed' width='1%'><tr>"
	rw "<th>&nbsp;</th><th>OO</th><th>тип</th><th>№</th><th>дата</th><th>из</th><th>в</th>"
		' For i=i0 To n
			' fieldName = dr.Fields()(i).Name
			' select case fieldName
			' case "N": fieldName = "&nbsp;"
			' case "EONAME": fieldName = "OO"
			' case "DOCTYPE": fieldName = "тип"
			' case "DOCNUMBER": fieldName = "№"
			' case "DOCDATE": fieldName = "дата"
			' case "CLASSFROM": fieldName = "из"
			' case "CLASSTO": fieldName = "в"
			' case else
				' fieldName=""
			' 'rw "&nbsp;" &" "
			' end select
			' if  fieldName > "" Then rw "<th>" & fieldName & "</th>"
			' ' if  fieldName = "DOCTYPE" Then id=i
			' ' rw  fieldName&" "
		' Next
		rw "</tr>"
	jn=22
	old = ""

	While Not dr.EOF
		rw "<tr>"
		For i=i0 To n
			fieldName = dr.Fields()(i).Name
			val= dr(i)
			if len(val) >  jn Then
				j = 1'len(val) \  jn
				val = Left(val,jn-1)&replace(val," ", "<br>", jn, j)
			End If
			if  fieldName <> "FUNCTYPEID"  _
			And fieldName <> "OUDOD"  _
			And fieldName <> "CLASSFROM"  _
			And fieldName <> "CLASSTO" Then
			rw "<td>"
			If fieldName = "DOCTYPE" Then val=GetDocTypeName(Clng(val), Clng(dr("FUNCTYPEID")))
			val = DB2HTML(val)
			if  fieldName = "mdcFrom" and val<>old _
			Or fieldName = "mdcTo" and val<>old Then
				rw old&"<br>"&GreenText(val)
			Else
				rw  val&" "
			End If
			rw "</td>"
			End If
			old=val
		Next
		rw "</tr>"
		dr.MoveNext
	WEnd
	rw "</table>"
'	err.clear
End Sub

Function GetDocTypeName(nDocType,strFuncType)
	Select Case nDocType
	Case kDocType_OUT		GetDocTypeName = obLanguage("Movement","kDocName_OUT",strFuncType)
	Case kDocType_ENROLL	GetDocTypeName = obLanguage("Movement","kDocName_ENROLL",strFuncType)
	Case kDocType_MOVE		GetDocTypeName = obLanguage("Movement","kDocName_MOVE",strFuncType)
	Case kDocType_YEAR		GetDocTypeName = obLanguage("Movement","kDocName_YEAR")
	Case kDocType_STAY		GetDocTypeName = obLanguage("Movement","kDocName_STAY")
	Case kDocType_GRADUATE		GetDocTypeName = obLanguage("Movement","kDocName_GRADUATE")
	Case Else		GetDocTypeName = nDocType
	End Select
End Function%>
