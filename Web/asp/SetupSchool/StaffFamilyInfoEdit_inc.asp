<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
Dim bCanSave, bCanAdd, bCanCreate

Dim strStaffID
Dim objFamInfo, objFamRelTypes
Dim nRelativeCnt
Dim strSaved
Dim strBackPage
Dim strRegExpFio
Dim strRegExpAlphabet

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleFamilyInfoEdit") & GreenText(DB2HTML(objNSNET.GetUserNickName(strStaffID)))
End	Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStaff
 	bTabInternalPage = True
End	Function

Function hasUserRightsOnPage()
	strStaffID = GetSafeID(Request("UID"), Null)
	hasUserRightsOnPage = checkRights(strStaffID)
End	Function

Function checkRights(strStaffID)
	Dim objInfo, strLoginName, bLoginName_ADMIN
	If Not HasUserRight(arUsersEditStaff) Then checkRights = False: Exit Function
	If strStaffID <> strUserID Then
		Set objInfo = objNSNET.GetUserInfo(strStaffID)
		If objInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		strLoginName = objInfo("LOGINNAME")
		bLoginName_ADMIN = (UCase(strLoginName)=ADMIN_NAME)
		If bLoginName_ADMIN Then
			Call InitSchoolSettings( objNSNET )
			If arrSchoolSettings(1, kSSIndex_AdminEdit) <> "1" Then
				 checkRights = False
				 Exit Function
			End If
		End If
	End If
	checkRights = True
End	Function

Sub ReadState()
	If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")
	strBackPage = Request.ServerVariables("SCRIPT_NAME")
End	Sub

Sub	Main
	strRegExpAlphabet = obContext.LocalSettings.RegExpAlphabet
	strRegExpFio = "^[\- " & strRegExpAlphabet & "]+$"
	nRelativeCnt = 0
	Set objFamInfo = objNSNET.GetStaffFamilyInfo(strStaffID)
	If Not objFamInfo.EOF Then nRelativeCnt = objFamInfo.RecordCount
	Set objFamRelTypes = objNSNET.GetRelationshipTypes()
	bCanAdd = Not objFamRelTypes.EOF
	If objFamRelTypes.EOF Then GenerateError obLanguage("SetupSchool","kNoRelationShipTypes")
End	Sub

Sub	onSpecialHead()
	Dim i, dtAid
	If bCanAdd Then Call scriptCalendar( "main", null, null )
%>
<SCRIPT><!--
function deleteRelative(){
	if( isDBBusy() ) return false;
	var form=document.forms['main'];
	var chkBox=form.elements.delRelative, chkItems=0;
	if (chkBox) {
		if (chkBox.length) {
			for (var j=0;j<chkBox.length;j++)
				if (chkBox[j].checked==true) {chkItems=1; break;}
		}
		else if (chkBox.checked==true)
			chkItems=1;
	}
	if (chkItems>0){
		$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function(){
			form.ACT.value = 'delete';
			setDBBusy();
			ok( 'main', '/asp/SetupSchool/StaffFamilyInfoSave.asp' );
		});
	}
	else {alert(language.Generic.Common.kErrMsgNoChecks); return};
}
<%If bCanAdd Then%>
function addStaffRelative(){
	if( isDBBusy() ) return false;
	var form = document.main;
	if (isNewFormValid()){
		form.ACT.value = 'add';
		setDBBusy();
		ok('main', '/asp/SetupSchool/StaffFamilyInfoSave.asp');
	}
}
function isNewFormValid(){
	var form = document.main;
	var dt;
	if(form.LastNameNew.value == ""){
		focusAlert(form.LastNameNew, language.Generic.SetupSchool.kErrRelativeLastName);
		return false;
	}
	if(form.FirstNameNew.value == ""){
		focusAlert(form.FirstNameNew, language.Generic.SetupSchool.kErrRelativeFirstName);
		return false;
	}

	if( !/<%=strRegExpFio%>/.test(form.LastNameNew.value) ) {
		focusAlert(form.LastNameNew, language.Generic.SetupSchool.kLettersSpacesDashesOnly);
		return false;
	}

	if( !/<%=strRegExpFio%>/.test(form.FirstNameNew.value) ) {
		focusAlert(form.FirstNameNew, language.Generic.SetupSchool.kLettersSpacesDashesOnly);
		return false;
	}

	if(form.MiddleNameNew.value && !/<%=strRegExpFio%>/.test(form.MiddleNameNew.value) ) {
		focusAlert(form.MiddleNameNew, language.Generic.SetupSchool.kLettersSpacesDashesOnly);
		return false;
	}


	if(form.BirthDateNew.value != "") {
		var dtNow = <%=Date2Js(NSNow())%>;

		<%Call CheckDate( "dt", "BirthDateNew", True )%>
		
		if(dt > dtNow) {
			focusAlert(form.BirthDateNew, language.Generic.SetupSchoolUI.kBirthdayLargeToday);
			return false;
		}
	}

	return true;
}
function Back(){
	goBack( document.forms.main, '/angular/school/userinfo/staff/<%=strStaffID%>');
}
<%End If%>
//--></SCRIPT>
<%End Sub

Sub DrawFilters( strForm )
End Sub

Sub DrawButtons()
	If nRelativeCnt > 0 Then ButtonDel "deleteRelative();", obLanguage("Common","kRemove")
End Sub

Function Date2Str_YYYYMMDD(dtDate)
	Dim strDate, nLen, i, str

	strDate = CStr(Year(dtDate))
	nLen = Len(strDate)
	For i = nLen + 1 To 4
		strDate = "0" & strDate
	Next
	str = CStr(Month(dtDate))
	strDate = strDate & IIf(Len(str) = 1, "0" & str, str)
	str = CStr(Day(dtDate))
	strDate = strDate & IIf(Len(str) = 1, "0" & str, str)
	Date2Str_YYYYMMDD = strDate
End Function

Sub	onDrawPage()
	Dim dtAid, strAidDate, i
	Dim strBirthDate%>
<form NAME="main" METHOD="post" ACTION="StaffFamilyInfoSave.asp" class="form-horizontal">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("UID", strStaffID, "ACT", "", "BackPage", strBackPage))%>
	<%Call DrawButtonsFilters(True, "main")%><%
	If objFamInfo.EOF Then
		DrawInfo obLanguage("SetupSchool","kNoRelativesInfo"), False
	Else%>
		<table class="table table-bordered">
			<tr><th><%=obLanguage("SetupSchool","kRelationShipType")%></th><th><%=obLanguage("Common","kLastName")%></th><th><%=obLanguage("Common","kFirstName")%></th><th><%=obLanguage("Common","kMiddleName")%></th><th><%=obLanguage("Common","kBDate")%></th><%=ShowDelCellHeader(1)%></tr><%
			i = 1
			While Not objFamInfo.EOF
				strBirthDate = objFamInfo("BIRTHDATE")%>
				<tr><td><%=WriteHiddenTags(Array("RELATIVEID", objFamInfo("RELATIVEID")))%><%=DB2HTML(objFamInfo("NAME"))%></td>
					<td><%=DB2HTML(objFamInfo("LASTNAME"))%></td>
					<td><%=DB2HTML(objFamInfo("FIRSTNAME"))%></td>
					<td><%=DB2HTML(objFamInfo("MIDDLENAME"))%></td>
					<td><%=Date2Str(objFamInfo("BIRTHDATE"))%></td>
					<td class="text-center"><input TYPE="checkbox" NAME="delRelative" VALUE="<%=i%>"></td>
				</tr><%
				i = i + 1
				objFamInfo.MoveNext
			Wend
			%>
		</table><br><%
	End If
	If Not bCanAdd Then%>
		<div class="SmallHeader">Нельзя</div><br><%
	Else
		OpenPanel obLanguage("SetupSchool","kAddRelativeInfo"), "relatives", False 
			Call DrawSelectInfoRow("*** "&obLanguage("SetupSchool","kRelationShipType") & ":", "", "RelatioshipTypeNew", objFamRelTypes, "RELATIONSHIPTYPEID", "NAME", "", 	"")
			Call DrawInputRow("*** "&obLanguage("Common","kLastName") & ":", "", "LastNameNew", "text", 30, kMaxLastname, "" )
			Call DrawInputRow("*** "&obLanguage("Common","kFirstName") & ":", "", "FirstNameNew", "text", 30, kMaxLastname, "" )
			Call DrawInputRow(obLanguage("Common","kMiddleName") & ":", "", "MiddleNameNew", "text", 30, kMaxLastname, "" )
			Call DrawDateInfoRow(obLanguage("Common","kBDate") & ":", "", "BirthDateNew", obLanguage("SetupSchool","kChooseDate"))
		ButtonAdd "addStaffRelative();", obLanguage("SetupSchool","kAddRelative")
		ClosePanel
	End If%>
</form><%
End	Sub
%>
