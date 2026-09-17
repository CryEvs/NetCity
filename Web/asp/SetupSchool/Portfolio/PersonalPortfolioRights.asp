<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strPortfolioID
Dim bListSet, sAllName, sClassID
Dim objRS, rsStudents, rsParents'FedorovSY, adoDSConn
Dim strFilter, objSchoolRS, bOwnSchool
Dim arrGroups
Dim strJavaArr
Dim strPortfSchoolID, strPortfSYID, bSchoolValid

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitlePersonalPortfolioRights")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbPersonalPortfolios
 End Function

Function onLoad()
	Dim blnWasSaved, strOnLoad

	blnWasSaved = GetSafeStr( Request("SV"), 1, "N" ) = "Y"
	strOnLoad = "SetLoadFlag();"
	If blnWasSaved Then
		strOnLoad = strOnLoad & "WasSaved('" & obLanguage("SetupSchoolPortfolio","kPortfolioRightsWasSaved") & "');"
	End If
	onLoad = strOnLoad
End Function

Sub Main
	If Not bIsDebug Then On Error Resume Next

	Dim cAction, objSYRS
	Dim bIsPortfolioExists

	bIsPortfolioExists = objNSNET.IsPersonalPortfolioExists(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bIsPortfolioExists Then
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
			strFilter = GetSafeStr(obTokenMgr.GetData(strToken, "PORTFOLIO_AUTH_FILTER"), 10, "")
			If strFilter = "" Then
				If HasUserRole(rlTeacher) Then strFilter = "H" Else strFilter = "S"
			End If
		End If

		arrGroups = Array(_
			obLanguage("SetupSchoolPortfolio","kAllGranted"), "G",_
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

		Set objRS = objNSNET.GetPersonalPortfolioRightsList(strFilter, strUserID, strPortfSYID)
		bListSet = Not objRS Is Nothing
		If bListSet Then bListSet = Not objRS.EOF

		sAllName = GetGlbName(strFilter)
		sClassID = ""
		If bListSet AND (strFilter = "H" OR strFilter = "C") Then
			cAction = GetSafeStr(Request("A"), 1, "")
			If cAction = "" Then sClassID = CStr(objRs("CLASSID")) Else sClassID = CStr(Request("CLASSES"))
			Set rsStudents = objNSNET.GetPersonalPortfolioClassStudentsRightsList(strUserID, sClassID)
		End If

		Call obTokenMgr.SetData(strToken, "PORTFOLIO_AUTH_FILTER", strFilter)
		Call obTokenMgr.SetData(strToken, "PORTFOLIO_SCHOOL", strPortfSchoolID)
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kPortfolioNotExists")
	End If
End Sub

Sub onHead()
%><SCRIPT><!--
var bLoad = false;
function SetLoadFlag(){bLoad = true;}

function ChangeFilter(){
	DoSubmit(document.RightsEdit,"");
}

function ChangeClass(){
	var form = document.forms['RightsEdit'];
	form.elements['A'].value = 'C';
	DoSubmit(form,"");
}

function Back(){
	goBack(document.RightsEdit, 'PersonalPortfolioEdit.asp');
}

function saveChanges(){
	var form = document.forms['RightsEdit'];
	var arrChanged = form.elements['CHNGARR'];
	var elChkUR = form.elements['chkUR'];
	var nCheck;

	if ( !bLoad ) {
		alert(language.Generic.SetupSchoolPortfolio.kWaitPageLoading);
		return;
	}
	if ( id.length == 0 ) return;
	arrChanged.value = '';
	if ( elChkUR.length )
		for ( var i = 0; i < elChkUR.length; i++ ) {
			nCheck = Number(elChkUR[i].checked);
			if ( nCheck != iv[i] ) {
				arrChanged.value += id[i] + ':' + nCheck + ':';
			}
		}
	else {
		nCheck = Number(elChkUR.checked);
		if ( nCheck != iv[0] ) {
			arrChanged.value += id[0] + ':' + nCheck + ':';
		}
	}
	ok_check_db('RightsEdit', 'PersonalPortfolioRightsSave.asp');
}

function CheckAll( bChecked ) {
	var form = document.forms['RightsEdit'];
	var elChkUR = form.elements['chkUR'];

	if ( !bLoad ) {
		alert(language.Generic.SetupSchoolPortfolio.kWaitPageLoading);
		return;
	}
	if ( id.length == 0 ) return;
	dataChanged();
	if ( elChkUR.length )
		for ( var i = 0; i < elChkUR.length; i++ )
			elChkUR[i].checked = bChecked;
	else
		elChkUR.checked = bChecked;
}
//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
	Call ButtonReset("resetScreen('RightsEdit')", obLanguage("Common","kCancel"))%>
	<%=ShowButton("CheckAll", "markall", "JavaScript:CheckAll(true)", obLanguage("SetupSchoolPortfolio","kCheckAll"), obLanguage("SetupSchoolPortfolio","kCheckAll"))%>
	<%=ShowButton("UncheckAll", "clearall", "JavaScript:CheckAll(false)", obLanguage("SetupSchoolPortfolio","kUncheckAll"), obLanguage("Buttons","kClearAll"))%><%
End Sub

Sub DrawUserRightsBox_(objRS) ' the lable samples. При сложной логике, к-рая на этой стр., лучше не связываться, т.к. IE, Netscape вызывают OnChange при нажатии на имя пользователя, а Opera - нет!
	Dim bIsGranted

	bIsGranted = (GetSafeLng(objRS("ACCESSTYPE"), 0) = 1)%>

	<td>
		<label for="chkUR<%=objRS("USERID")%>"><%=DB2HTML(objRS("NICKNAME"))%></label>
	</td>
	<td>
		<input id="chkUR<%=objRS("USERID")%>" name="chkUR<%=objRS("USERID")%>" value="<%=objRS("USERID")%>" type="checkbox" OnChange="Javascript:onBoxClick(<%=objRS("USERID")%>);" <%If bIsGranted Then%>checked<%End If%>>
		<input name="URST<%=objRS("USERID")%>" value="0" type="hidden">
	</td><%
End Sub

Sub DrawUserRightsBox(objRS)
	Dim bIsGranted, strCurrUserID

	strCurrUserID = GetSafeID(objRS("USERID"), Null)
	bIsGranted = (GetSafeLng( objRS("ACCESSTYPE"), 0) = 1)%>

	<td><%=DB2HTML(objRS("NICKNAME"))%></td>
	<td><%
		If strCurrUserID = strUserID Then%>
			<b>X</b><%
		Else%>
			<input name="chkUR" value="1" type="checkbox" OnClick="dataChanged();" <%If bIsGranted Then%>checked<%End If%>><%
			strJavaArr = strJavaArr & CHR(10) & "id[nI]=" & objRS("USERID") & ";iv[nI++]=" & IIf(bIsGranted, 1, 0) & ";"
		End If%>
	</td><%
End Sub

Sub DrawFilters(strForm)
	Dim i, str
	
	Call DrawSelectInfoRow(obLanguage("Common","kSchool",strFunctionalityType), strPortfSchoolID, "SCHOOL", objSchoolRS, "SCHOOLID", "SCHOOLNAME", Null, "ChangeFilter()")

	OpenFormGroup obLanguage("Common","kGroupA")%>
	<select NAME="FL" OnChange="ChangeFilter();" class="form-control">
		<%For i = 0 To UBound(arrGroups) - 1 Step 2
			str = "<OPTION VALUE=""" & arrGroups(i + 1) & """"
			If strFilter = arrGroups(i+1) Then str = str & " SELECTED"
			str = str & ">" & arrGroups(i) & "</OPTION>"
			Response.Write str
		Next%>
	</select><%
	CloseFormGroup

	If bListSet Then
		Select Case strFilter
			Case "H", "C"	'class
				Call DrawSelectInfoRow(obLanguage("Common","kClass",strFunctionalityType), sClassID, "CLASSES", objRs, "CLASSID", "CLASSNAME", Null, "ChangeClass()")
		End Select
	End If
End Sub

Sub onDrawPage()
	Dim sStudentID%>

	<FORM NAME="RightsEdit" METHOD="POST" ACTION="PersonalPortfolioRights.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="A" value="">
		<input type="hidden" name="CHNGARR" value=""><%

		Call DrawButtonsFilters(bListSet, "RightsEdit")%>

		<div class="row">
			<div class="col-md-6"><%
				If bListSet Then
					strJavaArr = "var id=new Array(), iv=new Array(), nI=0;"

					Select Case strFilter
						Case "H", "C"	'class
							If rsStudents.EOF Then
								Response.Write "<h3>"&obLanguage("MenuFolders","kNoStudentsInThisClass",strFunctionalityType)&"</h3>"
							Else%>
								<table class="table table-thin table-xs table-bright table-bright-striped table-bright-hover">
									<tr>
										<th colspan="2"><%=obLanguage("Common","kStudents",strFunctionalityType)%></th>
										<th><%=obLanguage("Common","kParents")%></th>
									</tr><%
									Set rsParents = rsStudents("chaptParents").Value
									While Not rsStudents.EOF
										Response.Write "<tr>"
										DrawUserRightsBox(rsStudents)

										If Not rsParents.EOF Then %>
											<td>
												<table><%
													Do While Not rsParents.EOF
														Response.Write "<tr>"
														DrawUserRightsBox(rsParents)
														Response.Write "</tr>"
														rsParents.MoveNext
													Loop%>
												</table>
											</td> <%
										Else%>
											<td>&nbsp;&nbsp;<%=obLanguage("Messages","kNoParents")%></td> <%
										End If

										Response.Write "</tr>"
										rsStudents.MoveNext
									Wend %>
								</table><%
							End If
						case Else	'user %>
							<table class="table table-thin table-xs table-bright table-bright-striped table-bright-hover">
								<tr>
									<th><%=obLanguage("Common","kDisplayName")%></th>
									<th>&nbsp;</th>
								</tr>
								<%
								While not objRS.EOF
									Response.Write "<tr>"
									DrawUserRightsBox(objRS)
									Response.Write "</tr>"
									objRS.MoveNext
								Wend%>
							</table><%
					End Select
				Else
					Response.Write "<H3>" & obLanguage("SetupSchoolPortfolio","kNoUsersAvailable") & "</H3>"
				End If%>
			</div>
		</div>
	</FORM><%

	Response.Write "<SCRIPT>" & CHR(10) & strJavaArr & CHR(10) & "</SCRIPT>"
End Sub%>