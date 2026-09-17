<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim objRsGroups
Dim strPortfolioID, strGroupID
Dim bCanEditProjectlPortfolio, bIsGroupsExists

Dim bListSet, sAllName, sClassID
Dim objRS, rsStudents, rsParents, adoDSConn
Dim strFilter, objSchoolRS, bOwnSchool
Dim arrGroups
Dim strPortfSchoolID, strPortfSYID, bSchoolValid

Function GetPageTitle()
  GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleProjectPortfolioMembers")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbProjectPortfolios
 End Function

Function onLoad()
	Dim blnWasSaved

	blnWasSaved = GetSafeStr( Request("SV"), 1, "N" ) = "Y"
	If blnWasSaved Then
		onLoad = "WasSaved('" & obLanguage("SetupSchoolPortfolio","kProjectMembersWasSaved") & "');"
	End If
End Function

Sub ReadState()
	strPortfolioID = GetSafeID( Request("PFID"), "0" )
	strGroupID = GetSafeID( Request("PGRID"), "0" )
End Sub

Sub Main
	If Not bIsDebug Then On Error Resume Next
	Dim cAction, objSYRS, strOldSchoolID

	bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bCanEditProjectlPortfolio Then
		Set objRsGroups = objNSNET.GetPortfolioGroupTree(strPortfolioID, strGroupID )
		TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioTree")

		bIsGroupsExists = Not objRsGroups.EoF

		strPortfSchoolID = GetSafeID(Request("SCHOOL"), GetSafeID(obTokenMgr.GetData(strToken, "PORTFOLIO_SCHOOL"), strSchoolID))
		bOwnSchool = (CStr(strSchoolID) = CStr(strPortfSchoolID))
		Set objSchoolRS = objNSNET.GetSchoolsWithSchoolYears()
		If objSchoolRS.EOF Then GenerateError obLanguage("Common","kUnexpErr")
		bSchoolValid = False
		Do While Not objSchoolRS.EOF
			If strPortfSchoolID = GetSafeID(objSchoolRS("SCHOOLID"), Null) Then
				bSchoolValid = True
				Exit Do			
			End If
			objSchoolRS.MoveNext
		Loop
		objSchoolRS.MoveFirst
		If Not bSchoolValid Then strPortfSchoolID = strSchoolID

		Set objSYRS = objNSNET.GetSchoolYearList(strPortfSchoolID, 1)
		If objSYRS.EOF Then GenerateError obLanguage("Common","kUnexpErr")
		strPortfSYID = GetSafeID(objSYRS(0), Null)
		
		'read or set default filter
		strFilter = GetSafeStr(Request("FL"), 10, "")
		If strFilter = "" Then
			strFilter = GetSafeStr(obTokenMgr.GetData(strToken, "PORTFOLIO_MEMBER_FILTER"), 10, "")
			If strFilter = "" Then
				strFilter = "G"
			End If
		End If

		arrGroups = Array(_
			obLanguage("SetupSchoolPortfolio","kProjectMembers"), "G",_
			obLanguage("Messages","kAllUsers"), "U",_
			obLanguage("Common","kTeachers",strFunctionalityType), "T",_
			obLanguage("Common","kAdmins"), "A", _
			obLanguage("Common","kPrincipals",strFunctionalityType), "P",_
			obLanguage("Messages","kAllStaffs"), "S",_
			obLanguage("Common","kParents"), "R",_
			obLanguage("Common","kStudents",strFunctionalityType), "D"_
		)
		If bOwnSchool Then
			Redim Preserve arrGroups(17)
			arrGroups(16)= obLanguage("SchoolSettings","kClasses",strFunctionalityType)
			arrGroups(17) = "C"
			If HasUserRole(rlTeacher) Then
				Redim Preserve arrGroups(19)
				arrGroups(18)= obLanguage("MenuFolders","kClassesOfThisTeacher",strFunctionalityType)
				arrGroups(19) = "H"
			End If
		Else
			If strFilter = "H" OR strFilter = "C" Then
				strFilter = "G" ' reset
			End If
		End If

		Set objRS = objNSNET.GetProjectPortfolioMembersList(strFilter, strUserID, strPortfolioID, strGroupID, strPortfSYID)
		bListSet = Not objRS Is Nothing
		If bListSet Then bListSet = Not objRS.EOF

		sAllName = GetGlbName(strFilter)
		sClassID = ""
		If bListSet AND (strFilter = "H" OR strFilter = "C") Then
			cAction = GetSafeStr(Request("A"), 1, "")
			If cAction = "" Then sClassID = CStr(objRs("CLASSID")) Else sClassID = CStr(Request("CLASSES"))
			Set rsStudents = objNSNET.GetProjectPortfolioClassStudentsMembersList(strPortfolioID, strGroupID, sClassID)
		End If

		Call obTokenMgr.SetData(strToken, "PORTFOLIO_MEMBER_FILTER", strFilter)
		Call obTokenMgr.SetData(strToken, "PORTFOLIO_SCHOOL", strPortfSchoolID)
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kPortfolioNotExists")
	End If
End Sub

Sub onHead()
%><SCRIPT><!--
function ChangeFilter() {
	DoSubmit(document.MemberEdit,"");
}

function ChangeClass() {
	var form = document.MemberEdit;
	form.elements['A'].value = 'C';
	DoSubmit(form,"");
}

function Back() {
	goBack(document.MemberEdit, 'ProjectPortfolioEdit.asp');
}
//--></SCRIPT>
<%
End Sub

Sub DrawUserMemberBox(objRS)
	Dim strRight

	Select Case CLng(GetSafeLng(objRS("ACCESSTYPE"), 0))
		Case kAccessTypeNone
			strRight = obLanguage("SetupSchoolPortfolio","kAccessTypeNameNone")
		Case kAccessTypeRead
			strRight = obLanguage("SetupSchoolPortfolio","kAccessTypeNameView")
		Case kAccessTypeWrite
			strRight = obLanguage("SetupSchoolPortfolio","kAccessTypeNameFull")
		Case Else
			strRight = obLanguage("SetupSchoolPortfolio","kAccessTypeNameNone")
	End Select %>

	<td><%=DB2HTML(objRS("NICKNAME"))%></td>
	<td>&nbsp;&nbsp;&nbsp;<%=strRight%></td><%
End Sub

Sub DrawFilters(strForm)
	Dim i, str, strID

	If bIsGroupsExists Then
		OpenFormGroup obLanguage("SetupSchoolPortfolio","kPrtfolioGroup")%>
			<SELECT NAME="PGRID" CLASS="form-control" onChange="JavaScript:ok_check_db('MemberEdit','ProjectPortfolioMembers.asp')">
				<OPTION VALUE="0"<%If strGroupID = "0" Then Response.Write " SELECTED "%>><%=obLanguage("SetupSchoolPortfolio","kAllPrtfolioGroups")%></OPTION><%
				While Not objRsGroups.EOF
					strID = CStr(objRsGroups("GROUPID"))

					Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
					If strID = strGroupID Then Response.Write " SELECTED "
					Response.Write ">"
					For i = 0 To CLng(objRsGroups("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
					Response.Write Server.HTMLEncode(objRsGroups("GROUPNAME"))
					Response.Write "</OPTION>"

					objRsGroups.MoveNext
				WEnd%>
			</SELECT><%
		CloseFormGroup
	End If
	
	Call DrawSelectInfoRow(obLanguage("Common", "kSchool", strFunctionalityType), strPortfSchoolID, "SCHOOL", objSchoolRS, "SCHOOLID", "SCHOOLNAME", Null, "ChangeFilter()")
	
	OpenFormGroup obLanguage("Common","kGroupA")%>
		<SELECT NAME="FL" OnChange="ChangeFilter();" class="form-control">
			<%For i = 0 To UBound(arrGroups) - 1 Step 2
				str = "<OPTION VALUE=""" & arrGroups(i + 1) & """"
				If strFilter = arrGroups(i + 1) Then str = str & " SELECTED"
				str = str & ">" & arrGroups(i) & "</OPTION>"

				rw str
			Next%>
		</select><%
	CloseFormGroup

	If bListSet Then
		Select Case strFilter
			Case "H", "C"	'class
				Call DrawSelectInfoRow(obLanguage("Common", "kClass", strFunctionalityType), sClassID, "CLASSES", objRs, "CLASSID", "CLASSNAME", Null, "ChangeClass()")
		End Select
	End If
End Sub

Sub onDrawPage()
	Dim sStudentID%>

	<FORM NAME="MemberEdit" METHOD="POST" ACTION="ProjectPortfolioMembers.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PFID",strPortfolioID,"A",""))%><%
		
		Call DrawButtonsFilters(False, "MemberEdit")%>

		<div class="row">
			<div class="col-md-6"><%
				If bListSet Then
					Select Case strFilter
						Case "H", "C"	'class
							If rsStudents.EOF Then
								Response.Write "<h3>" & obLanguage("SetupSchoolPortfolio", "kNoStudentsInProject", strFunctionalityType) & "</h3>"
							Else%>
								<table class="table"> <%
									Set rsParents = rsStudents("chaptParents").Value
									
									While Not rsStudents.EOF
										rw "<tr>"
										DrawUserMemberBox(rsStudents)

										If Not rsParents.EOF Then %>
											<td>
												<table class="table table-nobordered"><%
													Do While Not rsParents.EOF
														rw "<tr>"
														DrawUserMemberBox(rsParents)
														rw "</tr>"

														rsParents.MoveNext
													Loop%>
												</table>
											</td> <%
										Else %>
											<td><%=obLanguage("SetupSchoolPortfolio","kNoParentsInProject")%></td> <%
										End If

										rw "</tr>"
										rsStudents.MoveNext
									Wend %>
								</table> <%
							End If
						case Else	'user %>
							<table class="table"><%
								While Not objRS.EOF
									rw "<tr>"
									DrawUserMemberBox(objRS)
									rw "</tr>"
									objRS.MoveNext
								Wend%>
							</table><%
					End Select
				Else
					Response.Write "<H3>" & obLanguage("SetupSchoolPortfolio","kNoUsersInProject") & "</H3>"
				End If%>
			</div>
		</div>
	</FORM><%
End Sub
%>
