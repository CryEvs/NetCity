<!-- #INCLUDE VIRTUAL="/asp/headerprint_s.asp" -->
<!-- #INCLUDE FILE=ScreenNonPrint.asp -->
<!-- #INCLUDE FILE="Messaging.asp" -->
<!-- #INCLUDE FILE="YearIndependent_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

'	recipients:
'U	all Users of School
'T	all Teachers
'A	all Admins
'P	all Principals
'S	all Staff
'R	all Parents
'D	all Students
'H	Teacher's Classes
'C	Class + CLASSID
'	User - USERID

Const kEMForStudentsParents = False 'True

Function getBGColor()
	getBGColor = "#EEEEEE"
End Function

Dim bListSet, sAllName, sClassID, bCanSelAll
Dim objRS, rsStudents, rsParents'FedorovSY, adoDSConn
Dim strFilter, objSchoolRS, bOwnSchool
Dim bEMPermit, bStudentsParentsPermit
Dim bStudent
Dim rsEMs, bIsEM
Dim bNoSchoolFilter

Sub ReadState()
	Dim strOldSchoolID
	bNoSchoolFilter = (Request("SF") <> 1)
	bEMPermit = bIsStaff Or kEMForStudentsParents
	bStudentsParentsPermit = Not bIsEMForSchool Or kEMForStudentsParents
	bStudent = HasUserRole(rlStudent)
	bCanSelAll = (GetSafeStr(Request("CSA"), 1, "N") = "Y")

	strSchoolID = GetSafeStr(Request("SCHOOL"), -1, strSchoolID)
	strOldSchoolID = strSchoolID

	bIsEM = False
	If bEMPermit And (strSchoolID = "-1") Then
		bIsEM = True
	Else
		strSchoolID = GetSafeID(strSchoolID, Null)
		bOwnSchool = (strSchoolID=strOldSchoolID)

		'read or set default filter
		strFilter = GetSafeStr(Request("FL"), 10, "")
		If GetSafeID(obTokenMgr.GetData(strToken, "MSG_SCHOOL"), "")<>strSchoolID Then
			' school was changed
			If bStudentsParentsPermit Then
				If bStudent Then
					strFilter = "C"    
				Else
					strFilter = "U" ' All Users
				End If
			Else
				strFilter = "S" ' All Stafs
			End If
		End If
		If strFilter = "" Then
			strFilter = GetSafeStr(obTokenMgr.Getdata(strToken, "MSG_FILTER"), 10, "")
			If strFilter = "" Then
				If HasUserRole(rlTeacher) And bOwnSchool Then
					strFilter = "H"
				ElseIf bStudent Then
					strFilter = "C"
				Else
					strFilter = "S"
				End If
			End If
		End If
	End If
End Sub

Sub Main
	Dim cAction, objSYRS
	Set objSchoolRS = objNSNET.GetSchools()
	'в фильтре выбрано управление образованием
	If bIsEM Then
		Set objRS = objNSNET.GetEMAdminList()
		bListSet = Not objRS.EOF
	Else
		Set objSYRS = objNSNET.GetSchoolYearList(strSchoolID, 1)
		If objSYRS.EOF Then
			bListSet = False
		Else
			' Attention. Use strSchoolYearID but not strCurrYearID here!
			strSchoolYearID = GetSafeID(objSYRS(0), strSchoolYearID)
			Set objRS = objNSNET.GetListForAddressBook(strFilter, strUserID, strSchoolYearID)
			bListSet = Not objRS Is Nothing
			If bListSet Then bListSet = Not objRS.EOF
		End If

		sAllName = GetGlbName(strFilter)
		sClassID = ""
		If bListSet AND (strFilter = "H" OR strFilter = "C") Then
			cAction = GetSafeStr(Request("A"), 1, "")
			If cAction = "" Then 
				If bStudent Then 
					sClassID = objNSNET.GetClassID(Empty, strSchoolYearID, objNSNET.GetClassNameForStudent(strUserID, strSchoolYearID))
				Else
					sClassID = CStr(objRs("CLASSID"))
				End IF
			Else
				sClassID = CStr(Request("CLASSES"))
			End IF
			Set rsStudents = objNSNET.GetClassStudentsWithParentsList(sClassID)
		End If
	End If
End Sub

Sub WriteState()
	If Not bIsEM Then
		Call obTokenMgr.SetData(strToken, "MSG_FILTER", strFilter)
	End If
	Call obTokenMgr.SetData(strToken, "MSG_SCHOOL", strSchoolID)
End Sub

Sub onHead()
%><SCRIPT><!--
function ChangeFilter()
	{var form = document.forms['UsersSelector']; form.submit();}
function ChangeClass()
	{var form = document.forms['UsersSelector'];
	form.elements['A'].value = 'C'; form.submit();}
function AddBk(userID)
{var rightframe = parent.frames['usersselectorright']; rightframe.AddRcpt(userID);}
function AddBkAll(userID, aSchoolYearID ){
	var rightframe = parent.frames['usersselectorright'];
	rightframe.AddRcptAll(userID, aSchoolYearID);
}
//--></SCRIPT>
<%
End Sub

Sub onDrawPage()
	Dim i, arrGroups, str, sStudentID

	If Not bIsEM Then
		If bStudentsParentsPermit Then
			arrGroups = Array(_
				obLanguage("Messages","kAllUsers"), "U",_
				obLanguage("Common","kTeachers",strFunctionalityType), "T",_
				obLanguage("Common","kAdmins"), "A", _
				obLanguage("Common","kPrincipals",strFunctionalityType), "P",_
				obLanguage("Messages","kAllStaffs"), "S",_
				obLanguage("Common","kParents"), "R",_
				obLanguage("Common","kStudents",strFunctionalityType), "D"_
			)
			If bOwnSchool Then
				Redim Preserve arrGroups(15)
				arrGroups(14)= obLanguage("SchoolSettings","kClasses",strFunctionalityType)
				arrGroups(15) = "C"
				If HasUserRole(rlTeacher) Then
					Redim Preserve arrGroups(17)
					arrGroups(16)= obLanguage("MenuFolders","kClassesOfThisTeacher",strFunctionalityType)
					arrGroups(17) = "H"
				End If
			End If
			If bStudent Then 
			    i = 0
			    For i = 2 to UBound(arrGroups,1)-1 Step 2
			        arrGroups(i-2) = arrGroups(i)
			        arrGroups(i-1) = arrGroups(i+1)    
			    Next
			    Redim Preserve arrGroups(UBound(arrGroups,1)-1)    
			End If
		Else
			arrGroups = Array(_
				obLanguage("Common","kTeachers",strFunctionalityType), "T",_
				obLanguage("Common","kAdmins"), "A", _
				obLanguage("Common","kPrincipals",strFunctionalityType), "P",_
				obLanguage("Messages","kAllStaffs"), "S"_
			)
		End If
		If Not bOwnSchool Then
			strSchoolName = objNSNET.GetSchoolName(strSchoolID )
		End If
	End If
	
%><center>
<FORM NAME="UsersSelector" METHOD="POST" ACTION="usersSelectorLeft.asp">
	<%=WriteObligatoryTags()%>
	<input type="hidden" name="CANSELECTALL" value="<%=IIF(bCanSelAll,"Y","N")%>" />
	<%=Hint(IIf(bIsEM, obLanguage("Messages","kDoChooseRecipient"), obLanguage("Messages", "kDoChooseRecipientFromGroup"))) %>
	<input type="hidden" name="A" value="">
	<table><%
	If Not bNoSchoolFilter Then%>
		<tr><th nowrap><%=obLanguage("Common","kSchool",strFunctionalityType)%>:</th><td><SELECT NAME="SCHOOL" OnChange="ChangeFilter()"><%
		If bEMPermit Then%>
			<OPTION VALUE="-1" <%If bIsEM Then%>SELECTED<%End If%>><%=obLanguage("Common","kEMName")%></OPTION><%
		End If
		PopulateSelect objSchoolRS, "SCHOOLID", "SCHOOLNAME", strSchoolID%>
		</SELECT></td></tr><%
	Else
		%><input type="hidden" name="SCHOOL" value="<%=strSchoolID%>" /><%
	End If
	If Not bIsEM Then%>
		<tr><th nowrap><%= obLanguage("Common","kGroupA")%>:</th><td><SELECT NAME="FL" OnChange="ChangeFilter();">
		<%For i = 0 To UBound(arrGroups)-1 Step 2
			str = "<OPTION VALUE=""" & arrGroups(i+1) & """"
			If strFilter = arrGroups(i+1) Then str = str & " SELECTED"
			str = str & ">" & arrGroups(i) & "</OPTION>"
			Response.Write str
		Next%>
		</select></td></tr>
		<%
	End If
	If bListSet Then
		Select Case strFilter
			Case "H", "C"	'class
				Response.Write "<tr><th nowrap>" & obLanguage("Common","kClass",strFunctionalityType) & ":</th><td><select name=""CLASSES"" OnChange=""ChangeClass()"">"
				PopulateSelect objRs, "CLASSID", "CLASSNAME", sClassID
				Response.Write "</select></td></tr></table>"
				If rsStudents.EOF Then
					Response.Write "<h3>"&obLanguage("MenuFolders","kNoStudentsInThisClass",strFunctionalityType)&"</h3>"
				Else
					Response.Write "<table align=center width=""75%"" border=0 cellpadding=5><tr align=center>"
					Response.Write "<td nowrap align=center>"
					If bCanSelAll Then Reponse.write ShowAnchor( "AddBk('C" & sClassID & "')"  , obLanguage("Messages","kSendAll") & " " & obLanguage("Common","kStudents_d",strFunctionalityType), obLanguage("Messages","kSendAll") & " " & obLanguage("Common","kStudents_d",strFunctionalityType), "")
					Response.Write "<div class=""body"">"& obLanguage("Common","kStudents",strFunctionalityType)&"</div></th>"
					Response.Write "<td nowrap >"
					If bCanSelAll Then Reponse.write ShowAnchor( "AddBk('E" & sClassID & "')", obLanguage("Messages","kSendAllParents"), obLanguage("Messages","kSendAllParents"), "")
					Response.Write "<div class=""body"">"& obLanguage("Common","kParents")&"</div></th>"
					Response.Write "</tr>"
					Set rsParents = rsStudents("chaptParents").Value
					While Not rsStudents.EOF
						Response.Write "<tr valign='top' nowrap><td nowrap>"
						sStudentID = CStr(rsStudents("STUDENTID"))
						Response.Write ShowAnchor( "AddBk('" & sStudentID & "')"  , obLanguage("Messages","kAddToRecipients"), DB2HTML(rsStudents("NICKNAME")) , "")
						Response.Write "</td><td nowrap>"
						If Not rsParents.EOF Then
							Do
								Response.Write ShowAnchor( "AddBk('" &  rsParents("USERID")  & "')"  , obLanguage("Messages","kAddToRecipients"), DB2HTML(rsParents("NICKNAME")) , "") 
								rsParents.MoveNext
								If rsParents.EOF Then Exit Do
								Response.Write ",<br>"
							Loop
						Else
							Response.Write "&nbsp;" & obLanguage("Messages","kNoParents")
						End If
						Response.Write "</td></tr>"
						rsStudents.MoveNext
					Wend
					Response.Write "</table>"
				End If
			case Else	'user
				Response.Write "</table><table height=""80%"" align=""left""><tr valign=""left""><td>"
				If Not bIsEM And bCanSelAll Then
					If HasUserRole(rlAdmin) Or HasUserRole(rlPrincipal) Then Response.Write ShowAnchor( "AddBkAll('" & strFilter & "','"& strCurrYearID&"')"  , obLanguage("Messages","kSendAll") & " " & sAllName, obLanguage("Messages","kSendAll") & " " & sAllName & " " & obLanguage("Common","kOfSchool",strFunctionalityType) & " '" &strSchoolName& "'" , "") & "<p>"
				End If
				While Not objRS.EOF
					Response.Write ShowAnchor( "AddBk('" & objRS("USERID") & "')", obLanguage("Messages","kAddToRecipients"), DB2HTML(objRS("NICKNAME")), "")&"<BR>"
					objRS.MoveNext
				Wend
				Response.Write "</td></tr></table>"
		End Select
	Else
		Response.Write "</table><H3>" & obLanguage("Messages","kNoRecipients") & "</H3>"
	End If
	Response.Write "</FORM></center>"
End Sub

Function Hint(strText)
	Hint = "<P><TABLE ALIGN=""CENTER"" "&STRSTDTABLEPARAM& " CELLPADDING=""5"" CELLSPACING=""0"" ><TR><TD><DIV class=""body"">" & strText & "</DIV></TD></TR></TABLE></P>"
End Function
%>
