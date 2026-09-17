<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE virtual="/asp/scripts/Messaging.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim objRsGroups
Dim strPortfolioID, strGroupID
Dim bCanEditProjectlPortfolio, bIsGroupsExists

Dim bListSet, sAllName, sClassID
Dim objRS, rsStudents, rsParents'FedorovSY, adoDSConn
Dim strFilter, objSchoolRS, bOwnSchool
Dim arrGroups
Dim strJavaArr, nUserIndex, nParentIndex
Dim strPortfSchoolID, strPortfSYID, bSchoolValid

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolPortfolio","kTitleProjectPortfolioRights")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbProjectPortfolios
 End Function

Function onLoad()
	Dim blnWasSaved, strOnLoad

	blnWasSaved = GetSafeStr( Request("SV"), 1, "N" ) = "Y"
	strOnLoad = "SetLoadFlag();"

	If blnWasSaved Then
		strOnLoad = strOnLoad & "WasSaved('" & obLanguage("SetupSchoolPortfolio","kProjectRightsWasSaved") & "');"
	End If
	onLoad = strOnLoad
End Function

Sub ReadState()
	strPortfolioID = GetSafeID(Request("PFID"), "0")
	strGroupID = GetSafeID(Request("PGRID"), "0")
End Sub

Sub Main
	If Not bIsDebug Then On Error Resume Next
	Dim cAction, objSYRS, strOldSchoolID

	bCanEditProjectlPortfolio = objNSNET.CanEditProjectlPortfolio(strUserID, strPortfolioID )
	TestError obLanguage("SetupSchoolPortfolio","kCantGetPortfolioInfo")

	If bCanEditProjectlPortfolio Then
		Set objRsGroups = objNSNET.GetProjectPortfolioGroupTree(strUserID, strPortfolioID, 0 )
		
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
			strFilter = GetSafeStr(obTokenMgr.GetData(strToken, "PORTFOLIO_AUTH_FILTER"), 10, "")
			If strFilter = "" Then
				If HasUserRole(rlTeacher) Then strFilter = "H" Else strFilter = "S"
			End If
		End If

		arrGroups = Array(_
			obLanguage("SetupSchoolPortfolio","kAllAccessGranted"), "G",_
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

			arrGroups(16)= obLanguage("SchoolSettings", "kClasses", strFunctionalityType)
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

		Set objRS = objNSNET.GetProjectPortfolioRightsList(strFilter, strUserID, strPortfolioID, strGroupID, strPortfSYID)
		bListSet = Not objRS Is Nothing
		If bListSet Then bListSet = Not objRS.EOF

		sAllName = GetGlbName(strFilter)
		sClassID = ""

		If bListSet AND (strFilter = "H" OR strFilter = "C") Then
			cAction = GetSafeStr(Request("A"), 1, "")
			If cAction = "" Then sClassID = CStr(objRs("CLASSID")) Else sClassID = CStr(Request("CLASSES"))
			Set rsStudents = objNSNET.GetProjectPortfolioClassStudentsRightsList(strPortfolioID, strGroupID, sClassID)
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
function SetLoadFlag()
	{bLoad = true;}

function ChangeFilter(){
	DoSubmit(document.RightsEdit,"");
}

function ChangeClass(){
	var form = document.forms['RightsEdit'];
	form.elements['A'].value = 'C';
	DoSubmit(form,"");
}

function Back(){
	goBack(document.RightsEdit, 'ProjectPortfolioEdit.asp');
}
function onBoxClick( nInd, nChangeRight, bParents ) {
	var form = document.forms['RightsEdit'];
	var el_chkURR;
	var el_chkURW;

	dataChanged();
	if ( bParents == 'True' ){
		if ( form.elements['chkPURR'].length ) {
			el_chkURR = form.elements['chkPURR'][nInd];
			el_chkURW = form.elements['chkPURW'][nInd];
		}
		else {
			el_chkURR = form.elements['chkPURR'];
			el_chkURW = form.elements['chkPURW'];
		}
	}else{
		if ( form.elements['chkURR'].length ) {
			el_chkURR = form.elements['chkURR'][nInd];
			el_chkURW = form.elements['chkURW'][nInd];
		}
		else {
			el_chkURR = form.elements['chkURR'];
			el_chkURW = form.elements['chkURW'];
		}
	}
	if( nChangeRight == 1 ) { // change chkURR
		if( el_chkURR.checked){
			if( el_chkURW.checked ){
				el_chkURW.checked = false;
				if ( bParents == 'True' ){
					if ( form.markallwp.checked)
					form.markallwp.checked = false;
				}else{
					if ( form.markallw.checked)
					form.markallw.checked = false;
				}
			}
		}else{
			if ( bParents == 'True' ){
				if ( form.markallrp.checked)
					form.markallrp.checked = false;
			}else{
				if ( form.markallr.checked)
					form.markallr.checked = false;
			}
		}
	}else { // change chkURW
		if( el_chkURW.checked){
			if( el_chkURR.checked ){
				el_chkURR.checked = false;
				if ( bParents == 'True' ){
					if ( form.markallrp.checked)
						form.markallrp.checked = false;
				}else{
					if ( form.markallr.checked)
						form.markallr.checked = false;
				}
			}
		}else{
			if ( bParents == 'True' ){
				if ( form.markallwp.checked)
					form.markallwp.checked = false;
			}else{
				if ( form.markallw.checked)
					form.markallw.checked = false;
			}
		}
	}
}
function checkallr( bForParents ){
	var i;
	var form = document.forms['RightsEdit'];
	if (bForParents){
		if ( form.elements['chkPURR'].length ) {
			for (i = 0; i < form.elements['chkPURR'].length; i++){
				form.elements['chkPURR'][i].checked = form.markallrp.checked;
				form.elements['chkPURW'][i].checked = false;
			}
		}else{
			form.elements['chkPURR'].checked = true;
		}
		if ( form.markallwp.checked ) {form.markallwp.checked = false;}
	}else{
		if ( form.elements['chkURR'].length ) {
			for (i = 0; i < form.elements['chkURR'].length; i++){
				form.elements['chkURR'][i].checked = form.markallr.checked;
				form.elements['chkURW'][i].checked = false;
			}
		}else{
			form.elements['chkURR'].checked = true;
		}
		if ( form.markallw.checked ) {form.markallw.checked = false;}
	}
}
function checkallw( bForParents ){
	var i;
	var j = 0;
	var form = document.forms['RightsEdit'];
	if (bForParents){
		if ( form.elements['chkPURW'].length ) {
			for (i = 0; i < form.elements['chkPURW'].length; i++){
				form.elements['chkPURW'][i].checked = form.markallwp.checked;
				if ( form.elements['chkPURR'][i].checked ) {form.elements['chkPURR'][i].checked = false;}
			}
		}else{
			form.elements['chkPURW'].checked = true;
			if ( form.elements['chkPURR'].checked ) {form.elements['chkPURR'].checked = false;}
		}
		if ( form.markallrp.checked ) {form.markallrp.checked = false;}
	}else{
		if ( form.elements['chkURW'].length ) {
			for (i = 0; i < form.elements['chkURW'].length; i++){
				form.elements['chkURW'][i].checked = form.markallw.checked;
				if ( form.elements['chkURR'][i].checked ) {form.elements['chkURR'][i].checked = false;}
			}
		}else{
			if ( form.elements['chkURR'].checked ) {form.elements['chkURR'].checked = false;}
		}
		if ( form.markallr.checked ) {form.markallr.checked = false;}
	}
}
function saveChanges(){
	var form = document.forms['RightsEdit'];
	var arrChanged = form.elements['CHNGARR'];
	var elChkURR = form.elements['chkURR'];
	var elChkURW = form.elements['chkURW'];
	<%IF strFilter = "C" OR strFilter = "H" Then%>
		var elChkPURR = form.elements['chkPURR'];
		var elChkPURW = form.elements['chkPURW'];
	<%End IF%>
	var nCheck;
	var nRight;

	if ( !bLoad ) {
		alert(language.Generic.SetupSchoolPortfolio.kWaitPageLoading);
		return;
	}
	arrChanged.value = '';
	if ( elChkURR.length )
		for ( var i = 0; i < elChkURR.length; i++ ) {
			nRight = 0;
			if ( elChkURR[i].checked )
				nRight = 1;
			else if ( elChkURW[i].checked )
				nRight = 2;

			if ( nRight != iv[i] )
				arrChanged.value += id[i] + ':' + nRight + ':';
		}
	else {
		nRight = 0;
		if ( elChkURR.checked )
			nRight = 1;
		else if ( elChkURW.checked )
			nRight = 2;

		if ( nRight != iv[0] )
			arrChanged.value += id[0] + ':' + nRight + ':';
	}
	<%IF strFilter = "C" OR strFilter = "H" Then%>
		if (typeof(elChkPURR) != 'undefined')
		if (elChkPURR.length)
			for ( var i = 0; i < elChkPURR.length; i++ ) {
				nRight = 0;
				if ( elChkPURR[i].checked )
					nRight = 1;
				else if ( elChkPURW[i].checked )
					nRight = 2;

				if ( nRight != ivP[i] )
					arrChanged.value += idP[i] + ':' + nRight + ':';
			}
		else {
			nRight = 0;
			if (elChkPURR.checked)
				nRight = 1;
			else if (elChkPURW.checked)
				nRight = 2;

			if (nRight != ivP[0])
				arrChanged.value += idP[0] + ':' + nRight + ':';
		}
	<%End IF%>
	ok_check_db('RightsEdit', 'ProjectPortfolioRightsSave.asp');
}
//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	Call ButtonReset("resetScreen('RightsEdit')", obLanguage("Common","kCancel"))
	Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
End Sub

Sub DrawUserRightsBox(objRS, nRowSpan, bParents)
	Dim nRight, bIsLeader

	bIsLeader = objRS("IS_LEADER")
	nRight = GetSafeLng(objRS("ACCESSTYPE"), 0)

	If bParents Then
		nParentIndex = nParentIndex + 1
	Else
		nUserIndex = nUserIndex + 1
	End If%>

	<td rowspan=<%=nRowSpan%>><%=DB2HTML(objRS("NICKNAME"))%></td>
	<td rowspan=<%=nRowSpan%>>
		<input name="<%=IIF(bParents,"chkPURR","chkURR")%>" value="1" type="checkbox" OnClick="Javascript:onBoxClick(<%=IIF(bParents,nParentIndex,nUserIndex)%>,1,'<%=IIF(bParents,"True","False")%>');" <%If nRight = 1 Then%>checked<%End If%><%If bIsLeader Then%> disabled title="<%=obLanguage("SetupSchoolPortfolio","kIsLeader")%>"<%End If%>>
	</td>
	<td rowspan=<%=nRowSpan%>>
		<input name="<%=IIF(bParents,"chkPURW","chkURW")%>" value="2" type="checkbox" OnClick="Javascript:onBoxClick(<%=IIF(bParents,nParentIndex,nUserIndex)%>,2,'<%=IIF(bParents,"True","False")%>');" <%If nRight = 2 Then%>checked<%End If%><%If bIsLeader Then%> disabled title="<%=obLanguage("SetupSchoolPortfolio","kIsLeader")%>"<%End If%>>
	</td><%

	strJavaArr = strJavaArr & CHR(10) & IIF(bParents,"idP[nIP]=","id[nI]=") & objRS("USERID") & IIF(bParents,";ivP[nIP++]=",";iv[nI++]=") & nRight & ";"
End Sub

Sub DrawFilters(strForm)
	Dim i, str, strID
	
	If bIsGroupsExists Then
		OpenFormGroup obLanguage("SetupSchoolPortfolio","kPrtfolioGroup")%>
			<SELECT NAME="PGRID" CLASS="form-control" onChange="JavaScript:ok_check_db('RightsEdit','ProjectPortfolioRights.asp')">
				<OPTION VALUE="0"<%If strGroupID = "0" Then Response.Write " SELECTED "%>><%=obLanguage("SetupSchoolPortfolio","kAllPrtfolioGroups")%></OPTION><%
				While Not objRsGroups.EOF
					strID = CStr(objRsGroups("GROUPID"))
					Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
					If strID = strGroupID Then Response.Write " SELECTED "
					Response.Write ">"
					For i = 0 To CLng(objRsGroups("GROUPLEVEL")) : Response.Write "&nbsp;&nbsp;" : Next
					Response.Write DB2HTML(objRsGroups("GROUPNAME"))
					Response.Write "</OPTION>"
					objRsGroups.MoveNext
				WEnd%>
			</SELECT><%
		CloseFormGroup
	End If
	
	Call DrawSelectInfoRow(obLanguage("Common","kSchool",strFunctionalityType), strPortfSchoolID, "SCHOOL", objSchoolRS, "SCHOOLID", "SCHOOLNAME", Null, "ChangeFilter()")
	
	OpenFormGroup obLanguage("Common","kGroupA")%>
		<SELECT NAME="FL" CLASS="form-control" OnChange="ChangeFilter();">
			<%For i = 0 To UBound(arrGroups) - 1 Step 2
				str = "<OPTION VALUE=""" & arrGroups(i + 1) & """"
				If strFilter = arrGroups(i + 1) Then str = str & " SELECTED"
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

		Call DrawCheckBox(obLanguage("SetupSchoolPortfolio","kApplyToAllSubGroups"), "RECS", "1", False, "")
	End If
End Sub

Sub onDrawPage()
	Dim sStudentID, nRowSpan, nCnt%>

	<FORM NAME="RightsEdit" METHOD="POST" ACTION="ProjectPortfolioRights.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PFID", strPortfolioID, "A", "", "CHNGARR", ""))%><%

		Call DrawButtonsFilters(bListSet, "RightsEdit")%>

		<div class="row">
			<div class="col-md-7"><%
				If bListSet Then
					nUserIndex		= -1
					nParentIndex	= -1
					strJavaArr		= "var id=new Array(), iv=new Array(), idP=new Array(), ivP=new Array(), nI=0, nIP=0;"

					Select Case strFilter
						Case "H", "C"	'class
							If rsStudents.EOF Then
								rw "<h3>" & obLanguage("SetupSchoolPortfolio","kNoStudentsHavingRights",strFunctionalityType) & "</h3>"
							Else%>
								<table class="table">
									<tr>
										<th><%=obLanguage("Common","kStudents",strFunctionalityType)%></th>
										<th><%=obLanguage("SetupSchoolPortfolio","kReview")%></th>
										<th><%=obLanguage("SetupSchoolPortfolio","kEditing")%></th>
										<th><%=obLanguage("Common","kParents")%></th>
										<th><%=obLanguage("SetupSchoolPortfolio","kReviewS")%></th>
										<th><%=obLanguage("SetupSchoolPortfolio","kEditingS")%></th>
									</tr>
									<tr>
										<td>&nbsp;</td>
										<td>
											<input type="checkbox" name="markallr" onclick="Javascript:checkallr(false);">
										</td>
										<td>
											<input type="checkbox" name="markallw" onclick="Javascript:checkallw(false);">
										</td>
										<td>&nbsp;</td>
										<td>
											<input type="checkbox" name="markallrp" onclick="Javascript:checkallr(true);">
										</td>
										<td>
											<input type="checkbox" name="markallwp" onclick="Javascript:checkallw(true);">
										</td>
									</tr><%
									Set rsParents = rsStudents("chaptParents").Value

									While Not rsStudents.EOF
										Response.Write "<tr>"
										nRowSpan = 1
										If Not rsParents.EOF Then nRowSpan = rsParents.RecordCount
										Call DrawUserRightsBox(rsStudents, nRowSpan, False)

										If Not rsParents.EOF Then
											nCnt = 0
											Do While Not rsParents.EOF
												nCnt = nCnt + 1
												If nCnt > 1 Then Response.Write "<tr>"
												Call DrawUserRightsBox(rsParents, 1, True)
												Response.Write "</tr>"
												rsParents.MoveNext
											Loop
										Else%>
											<td colspan="3"><%=obLanguage("SetupSchoolPortfolio","kNoParentsHavingRights")%></td></tr> <%
										End If

										rsStudents.MoveNext
									Wend%>
								</table><%
							End If
						case Else	'user %>
							<table class="table">
								<tr>
									<th>&nbsp;</th>
									<th><%=obLanguage("SetupSchoolPortfolio","kReview")%></th>
									<th><%=obLanguage("SetupSchoolPortfolio","kEditing")%></th>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td>
										<input type="checkbox" name="markallr" onclick="Javascript:checkallr();">
									</td>
									<td>
										<input type="checkbox" name="markallw" onclick="Javascript:checkallw();">
									</td>
								</tr><%
								While not objRS.EOF
									Response.Write "<tr>"
									Call DrawUserRightsBox(objRS, 1, False)
									Response.Write "</tr>"
									objRS.MoveNext
								Wend%>
							</table><%
					End Select
				Else
					rw "</table><H3>" & obLanguage("SetupSchoolPortfolio","kNoUsersHavingRights") & "</H3>"
				End If%>
			</div>
		</div>
	</FORM><%

	Response.Write "<SCRIPT>" & CHR(10) & strJavaArr & CHR(10) & "</SCRIPT>"
End Sub%>