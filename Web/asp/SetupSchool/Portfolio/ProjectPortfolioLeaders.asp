<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim strPortfolioID
Dim bCanEditProjectlPortfolio

Dim bListSet, sAllName
Dim objRS, rsStudents, rsParents, adoDSConn
Dim strFilter, objSchoolRS, bOwnSchool
Dim arrGroups
Dim strPortfSchoolID, strPortfSYID, bSchoolValid

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleProjectPortfolioLeaders")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbProjectPortfolios
 End Function

Function onLoad()
	Dim blnWasSaved

	blnWasSaved = GetSafeStr(Request("SV"), 1, "N" ) = "Y"
	If blnWasSaved Then
		onLoad = "WasSaved('" & obLanguage("SetupSchoolPortfolio","kProjectLeadersWasSaved") & "');"
	End If
End Function

Sub ReadState()
	strPortfolioID = GetSafeID(Request("PFID"), GetSafeID(obTokenMgr.GetData(strToken, stProjPortfolioID), "0"))
End Sub

Sub Main
	If Not bIsDebug Then On Error Resume Next
	Dim cAction, objSYRS, strOldSchoolID

	bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bCanEditProjectlPortfolio Then
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
			strFilter = GetSafeStr(obTokenMgr.GetData(strToken, "PORTFOLIO_LEADER_FILTER"), 10, "")
			If strFilter = "" Then
				strFilter = "G"
			End If
		End If
		Call obTokenMgr.SetData(strToken, "PORTFOLIO_LEADER_FILTER", strFilter)
		Call obTokenMgr.SetData(strToken, "PORTFOLIO_SCHOOL", strPortfSchoolID)

		Set objRS = objNSNET.GetProjectPortfolioLeadersList(strFilter, strPortfolioID, strPortfSYID)
		bListSet = Not objRS Is Nothing
		If bListSet Then bListSet = Not objRS.EOF

		sAllName = GetGlbName(strFilter)

		arrGroups = Array(_
			obLanguage("SetupSchoolPortfolio","kProjectLeaders"), "G",_
			obLanguage("Common","kTeachers",strFunctionalityType), "T",_
			obLanguage("Common","kPrincipals",strFunctionalityType), "P",_
			obLanguage("Common","kAdmins"), "A"_
		)
	Else
		GenerateError obLanguage("SetupSchoolPortfolio","kPortfolioNotExists")
	End If
End Sub

Sub onHead()
%><SCRIPT><!--
function ChangeFilter(){
	DoSubmit(document.LeaderEdit,"");
}

function Back() {
	goBack(document.LeaderEdit, 'ProjectPortfolioEdit.asp');
}

function onBoxClick( nID )
{	var i;
	var form = document.forms['LeaderEdit'];
	var el = form.elements['LST'+ nID];

	dataChanged();
	el.value = ( el.value == 0 ? 1 : 0 );
}

function saveChanges(){
	var form = document.forms['LeaderEdit'];
	var arrChanged = form.elements['CHNGARR'];
	var i;

	arrChanged.value = '';
	for ( i = 0; i < form.elements.length; i++)
	{
		var el = form.elements[i];
		if ( el.name.indexOf('chkL') == 0 ) {
			if ( form.elements['LST'+ el.value].value == 1 ) {
				arrChanged.value += el.value + ':' + Number(el.checked) + ':';
			}
		}
	}
	ok_check_db('LeaderEdit', 'ProjectPortfolioLeadersSave.asp');
}
//--></SCRIPT><%
End Sub

Sub DrawButtons()
	Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
	Call ButtonReset("resetScreen('LeaderEdit')", obLanguage("Common","kCancel"))
End Sub

Sub DrawUserLeaderBox(objRS)
	Dim bIsLeader

	bIsLeader = (GetSafeLng(objRS("ISLEADER"), 0) = 1)%>

	<td><%=DB2HTML(objRS("NICKNAME"))%></td>
	<td align="center">
		<input name="chkL<%=objRS("USERID")%>" value="<%=objRS("USERID")%>" type="checkbox" OnChange="Javascript:onBoxClick(<%=objRS("USERID")%>);" <%If bIsLeader Then%>checked<%End If%>>
		<input name="LST<%=objRS("USERID")%>" value="0" type="hidden">
	</td> <%
End Sub

Sub DrawFilters(strForm)
	Dim i, str, strID

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
End Sub

Sub onDrawPage()
	Dim sStudentID%>

	<FORM NAME="LeaderEdit" METHOD="POST" ACTION="ProjectPortfolioLeaders.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PFID",strPortfolioID,"A","", "CHNGARR", ""))%><%

		Call DrawButtonsFilters(bListSet, "LeaderEdit")%>

		<div class="row">
			<div class="col-md-7"><%
				If bListSet Then%>
					<table class="table"> <%
						While not objRS.EOF
							rw "<tr>"
							DrawUserLeaderBox(objRS)
							rw "</tr>"
							objRS.MoveNext
						Wend%>
					</table><%
				Else
					rw "<H3>" & obLanguage("SetupSchoolPortfolio","kNoUsersAvailable") & "</H3>"
				End If%>
			</div>
		</div>
	</FORM><%
End Sub%>