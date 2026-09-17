<!-- #INCLUDE file="UserInfoEdit_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE file="Seniorities_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const kMaxRating=18
Dim blnCanEditRights, bTeacher, bSubjects, bPrincipal, bPsychologist
Dim objStaffAssignedRoles
Dim objSubjects, strRating
Dim strCategoryName
Dim strCategory2Name
Dim bTeacherHasClass
Dim arrR, arrCategList, arrPosList
Dim arrStaffRoles, arrTemp
Dim arrRoles, objSecurityComponent
Dim nWorkStatus
Dim bMayMoveStaff
Dim bIsStaffDismissed
Dim isDontDelMobPhone, objSmsComponent, mobilePhoneForSchoolSms

Function GetPageTitle()
	If bIsEMForSchool Then
		GetPageTitle = obLanguage("SetupSchoolUI","kTitleStaffInfo") & ": " & GreenText(DB2HTML(strLastName) & " " & DB2HTML(strFirstName) & " " & DB2HTML(strMiddleName))
	Else
		GetPageTitle = obLanguage("SetupSchoolUI","kTitleStaffInfo") & ": " & GreenText(DB2HTML(objNSNET.GetUserNickName(strEditUserID)))
	End If
End Function

Sub SpecialWriteState()
	Call obTokenMgr.SetData(strToken, stSavePage, "/asp/SetupSchool/SaveStaffInfo.asp")
End Sub

Sub InitStaffRoles()
	Set objSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	arrRoles = objSecurityComponent.GetStaffRoles()
End Sub

Sub Main()
	Dim i
	Dim rsUserRoles
	Dim strNotInParams
	Dim futureYear
	Dim objYearComponent, getYearResult
	If bNewAttrParams Then
		Exit Sub
	End If
	nWorkStatus = GetSafeLng(obTokenMgr.GetData(strToken, stWorkStatus), kWorkStatus_All)
	bIsStaffDismissed = objNSNET.IsStaffDismissed(strEditUserID, strSchoolID)
	If bIsStaffDismissed Then
		readonly = True
	End If

	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")	
	mobilePhoneForSchoolSms = GetSafeStrParam(objSmsComponent.GetParentMobPhoneForSchoolSms(strEditUserID),"")
	isDontDelMobPhone = (NOT IsDull(mobilePhoneForSchoolSms))

	Call MainUserInfo()
	bShowMPhone = True
	InitStaffRoles
	If Not readonly Then
		If (strEditUserID<>strUserID) And bLoginName_ADMIN Then
			Call InitSchoolSettings(objNSNET)
			If arrSchoolSettings(1, kSSIndex_AdminEdit) <> "1" Then
				readonly = True
			End If
		End If
	End If
	bRightOnDelete = Not readonly And HasUserRight(arDeleteUsers)

	strNotInParams = ""
	If Not bShowMNSForms Then
		strNotInParams = strNotInParams & "'MNS'"
	End If
	If Not bModuleTalentStudents Then
		strNotInParams = strNotInParams & IIf(strNotInParams = "", "", ", ") & "'CURATOR_OD'"
	End If

	Set objInfo = objNSNET.GetUserInfoForRole(strSchoolID, strCurrYearID, 1, strEditUserID, "", strNotInParams)
	objInfo.Sort = "ORDERNO"

	ReDim arrStaffRoles(lastRole)
	Set rsUserRoles = objNSNET.GetStaffUserRoles(strEditUserID, strSchoolID)
	While Not rsUserRoles.EOF
		arrStaffRoles(CInt(rsUserRoles("ROLEID"))) = True
		rsUserRoles.MoveNext
	Wend

	bTeacher = arrStaffRoles(rlTeacher)
	bPsychologist = arrStaffRoles(rlPsychologist)
	bPrincipal = arrStaffRoles(rlPrincipal)
	blnCanEditRights = HasUserRight(arProfileDefineSecurityRoles)

	Set objSubjects = objNSNET.GetTeacherSubjects(strEditUserID, strSchoolID)

	strCategoryName = ""
	strCategory2Name = ""
	bStaff = True

	bTeacherHasClass = objNSNET.DoesTeacherHaveAnyClass(strEditUserID, strSchoolID, 0)
	ReDim arrR(1,kMaxRating)
	For i = 1 To kMaxRating
		arrR(0,i)=i: arrR(1,i)=i
	Next
	arrR(1,0) = "" : arrR(0,0) = ""

	If Not bWizard Then
		If bECardAuthentication And (Not ReadOnly) And bFullAccessEditing Then
			bShowECardAuth = True
			strECardID = objNSNET.GetStaffECard(strEditUserID)
		End If
	End If

	' bMayMoveStaff - moved from Staff.asp
	bMayMoveStaff = False
	Set objYearComponent = obComponentMgr.Resolve("NetCity.Components.Abstraction.ISchoolYearComponent")
	Set getYearResult = objYearComponent.GetFutureYear(strSchoolId)
	If Not getYearResult.IsSuccess Then GenereateError getYearResult.Message
	If IsDull(getYearResult.Data) Then
		bMayMoveStaff = (CLng(strCurrYearID) = CLng(strSchoolYearID))
	Else
		Set futureYear = getYearResult.Data
		bMayMoveStaff = (CLng(strCurrYearID) = CLng(futureYear.Id))
	End If

	If Not bIsEMForSchool Then
		If Not bMayMoveStaff Then
			nWorkStatus = kWorkStatus_All
		End If
	End If
End Sub

Sub OnScanParams(strParamName, strUniqueParamName)
	If Not bNeedScanParams Then Exit Sub

	If strParamName = "CATEGORY" Then
		strCategoryName = strUniqueParamName
	ElseIf strParamName = "RATING2" Then
		strRating2Name = strUniqueParamName
	ElseIf strParamName = "CATEGORY2" Then
		strCategory2Name = strUniqueParamName
	End If

	If strCategoryName <> "" And strRating2Name <> "" And strCategory2Name <> "" Then bNeedScanParams = False
End Sub

Sub DrawPrintOnlyScripts( strPrintFile )
%>	var wndPrint=null;

	function getCurrPage() {
		var form = document.UserInfo;
		var el = form.elements['cp'];
		return el.options[el.selectedIndex].value;
	}

	function openPrintUserCard(page) {
		var url = urlHelper.makeUrl("<%=strPrintFile%>", {cp: page, uid: <%=strEditUserID%>});
		var winOptions = { url: url, name: 'prnt', specs: 'status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=550', winChild: wndPrint };
		windowOpen( winOptions );
		wndPrint = winOptions.winChild;
		center(wndPrint, 750,550);
	}<%
End Sub

Function GetUserListPage()
	GetUserListPage = "/angular/school/users/staff/"
End Function

Sub SpecialHead()

If bWizard Then%>
	<script type="text/javascript">
		(function() {
			appContext.userId = <%=GetSafeLng(strUserId, 0)%>;
		})();
	</script><%
End If

If bNewAttrParams Then Exit Sub

%><SCRIPT><!--
<%If bFullAccessEditing Then Call DrawPrintOnlyScripts( "StaffFormT2.asp" ) %>


<%If Not readonly Then%>
	function editSubjects(){
		<%If bTeacher Then%>
			userInfoEdit.navigateToPage(document.UserInfo, "EditTeachersSubjects.asp?UID=<%=strEditUserID%>" );
		<%Else%>
			alert(language.SetupSchoolUI.kErrEditSubjects);
		<%End If%>
	}
	function editFamilyInfo()
	{
		userInfoEdit.navigateToPage( document.UserInfo, "StaffFamilyInfoEdit.asp?UID=<%=strEditUserID%>" );
	}

<%If blnCanEditRights Then%>
	function checkRights()
	{
		var frmElements = document.forms.UserInfo.elements;
		var minorStaffShortName = "<%=objSecurityComponent.GetRole(Role_MinorStaff).ShortName%>";
		var TeacherShortName = "<%=objSecurityComponent.GetRole(Role_Teacher).ShortName%>";
		var checkedCnt = $(':checkbox:checked','#roles_table').length
		var ischeckedTCS = $(':checkbox:checked[name="' + minorStaffShortName + '"]','#roles_table')
			if( checkedCnt == 0)
			{
				alert(language.Generic.SetupSchoolUI.kErrorURightCannotBeEmpty);
				frmElements[TeacherShortName].focus();
				return false;
			}
			if( ischeckedTCS.length > 0 && checkedCnt > 1){
				alert(language.Generic.SetupSchoolUI.kErrorURightCannotBeChecked);
				frmElements[minorStaffShortName].focus();
				return false;
			}
			return true;
	}
<%End If%>

	function viewPortfolio()
	{
		DoSubmit(document.UserInfo, '/angular/school/attestation/portfolio/' + "<%=strEditUserID%>");
	}



	function saveChanges()
	{
		var frmElements = document.forms.UserInfo.elements;
		var minorStaffShortName = "<%=objSecurityComponent.GetRole(Role_MinorStaff).ShortName%>";
		var teacherShortName = "<%=objSecurityComponent.GetRole(Role_Teacher).ShortName%>";
		var checkedCnt = $(':checkbox:checked','#roles_table').length
		var ischeckedTCS = $(':checkbox:checked[name="' + minorStaffShortName + '"]','#roles_table')
		
		<%If bShowMPhone Then%>
			var mobphone = $("[name='MT']").val();
			if(mobphone.length == 0){
				<%If isDontDelMobPhone Then%>
						alert('<%=obLanguage("MySettings","kOnlyChangeMobPhone") %>' + ' ' + '<%=obLanguage("MySettings","kUserHasSmsAgreement") %>')
						return false;
				<%End If%>
			}
		<%End If %>

		var curator = frmElements.P_60_B_CURATOR_OD;
		if (curator) {
			if (curator.disabled) curator.value = "-1";
			curator.disabled = false;
		}

		if( isDBBusy() ) return false;
		var form = document.UserInfo;
		extDeferred.when( canSubmit ).then(function()
		{
			if (dataWereChanged) {
				<%If blnCanEditRights Then%>
					if (!checkRights()){
						return false;
					}
				<%End If%>
				userInfoEdit.save("<%=kSaveUserFormScript%>");
			}
		});
	}
	function hasClasses(){
		$.show.confirmation(language.SetupSchoolUI.kMsgClassChiefUsed).then(function()
		{
			checkForChanges().then(function(){
				DoSubmit( document.MenuForm, <%If bWizard Then %> "ClassesW.asp?UID=<%=strEditUserID%>" <%Else%> "/asp/ClassManagement/Classes.asp?UID=<%=strEditUserID%>" <%End If%>);
			});
		});
	}
	function hasSubjects(){
		$.show.confirmation(language.SetupSchoolUI.kMsgTeacherUsed).then(function()
		{
			checkForChanges().then(function(){
				editSubjects();
			});
		});
	}
	function ChangeFamilyInfo(bMale){
		var form = document.forms['UserInfo'];
		var name = form.elements['F_INFO_NAME'].value;
		var i;
		var strArrayID = form.elements['F_INFO'].value;
		var arrID = strArrayID.split("|");
		var strArrayName = form.elements['F_INFO_TEXT'].value;
		var arrName = strArrayName.split("|");
		var len = arrID.length/2;
		for (i = 0; i < len; i++)
			if (!bMale){
				form.elements[name].options[i+1].value = arrID[i];
				form.elements[name].options[i+1].text = arrName[i];
			}else{
				form.elements[name].options[i+1].value = arrID[len+i];
				form.elements[name].options[i+1].text = arrName[len+i];
			}
	}
	function editSeniorities()
	{
		userInfoEdit.navigateToPage( document.MenuForm, "/asp/SetupSchool/SenioritiesEdit.asp?UID=<%=strEditUserID%>");
	}
<%End If%>

//--></SCRIPT>
<%
End Sub

Function GetSpecialOnChangeForList(strParamName)
	GetSpecialOnChangeForList = ""
End Function

Sub DrawSpecialButtons()
	Dim arrButtons
	If bFullAccessEditing Then
		arrButtons = Array( _
			"userInfoEdit.browseStaffFormT2(1)", obLanguage("SetupSchoolUI","kPage_") & 1, "", obLanguage("SetupSchoolUI","kPage_") & 1, _
			"userInfoEdit.browseStaffFormT2(2)", obLanguage("SetupSchoolUI","kPage_") & 2 , "", obLanguage("SetupSchoolUI","kPage_") & 2, _
			"userInfoEdit.browseStaffFormT2(3)", obLanguage("SetupSchoolUI","kPage_") & 3, "", obLanguage("SetupSchoolUI","kPage_") & 3, _
			"userInfoEdit.browseStaffFormT2(4)", obLanguage("SetupSchoolUI","kPage_") & 4, "", obLanguage("SetupSchoolUI","kPage_") & 4 _
			)
		DropDownButtonEx obLanguage("SetupSchoolUI","kStaffCard"), "glyphicon glyphicon-print", "btn-default", arrButtons
		If bTeacher Or bPrincipal Or bPsychologist Then
			Button "viewPortfolio();", obLanguage("Common", "kPedagogicalPortfolio"), obLanguage("Common", "kPedagogicalPortfolio"), "glyphicon glyphicon-briefcase"
		End If
	End If
End Sub

Sub DrawSpecialMainTable()
	Call DrawRights()
	If bTeacher Then Call DrawTeacherSubjects()
End Sub

Function DrawParamFeatures( strParamName )
	Select Case strParamName
	Case "FAMILYINFO", "CATEGORY", "CATEGORY2", "REQ_CATEGORY", "REQ_CATEGORY2", "POSITION", "POSITION2"
		DrawParamFeatures = True
	Case Else
		DrawParamFeatures = False
	End Select
End Function

Sub DrawParameterFeatures( objGroup, strUniqueParamName )
	Dim objListItems, rsItem
	Select Case CStr(objGroup("NAME"))
	Case "FAMILYINFO"
		Call DrawFamilyInfo( strUniqueParamName )
	Case "POSITION"
		Set objListItems = objGroup("chaptListItems_Group").Value
		arrPosList = objListItems.GetRows(,,Array("ITEMID", "ITEMNAME"))
		DrawSelectArr arrPosList, strUniqueParamName, GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", ""
	Case "POSITION2"
		DrawSelectArr arrPosList, strUniqueParamName, GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", ""
	Case "CATEGORY"
		Set objListItems = objGroup("chaptListItems_Group").Value
		arrCategList = objListItems.GetRows(,,Array("ITEMID", "ITEMNAME"))
		DrawSelectArr arrCategList, strUniqueParamName, GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", ""
	Case "CATEGORY2", "REQ_CATEGORY", "REQ_CATEGORY2"
		DrawSelectArr arrCategList, strUniqueParamName, GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", ""
	End Select
End Sub

Sub DrawFamilyInfo( strUniqueParamName )
	Dim objListItems, arrItems, i, nCnt', strSafeParamID, bAccordance
	Dim arrAllItems, arrAllNames

	objListItems = objInfo("chaptListItems")
	If objListItems.EOF Then Exit Sub
	arrItems = objListItems.GetRows(,,Array("ITEMID", "ITEMNAME"))
	nCnt = UBound(arrItems, 2)
	ReDim arrAllItems(nCnt)
	ReDim arrAllNames(nCnt)
	For i = 0 To nCnt
		arrAllItems(i) = arrItems(0,i)
		arrAllNames(i) = arrItems(1,i)
	Next
	nCnt = Fix(nCnt / 2)
	If not readonly Then
		If bMale Then
			For i = 0 To nCnt
				arrItems(0, i) = arrItems(0, i + nCnt + 1)
				arrItems(1, i) = arrItems(1, i + nCnt + 1)
			Next
		End If
		ReDim Preserve arrItems(1, nCnt)
	
		Call DrawSelectArr(arrItems, strUniqueParamName, GetSafeStrParam(objInfo("PARAMVALUE_ID"), "-1"), " ", Null)
		rw WriteHiddenTags(Array("F_INFO_NAME", strUniqueParamName, "F_INFO", Join(arrAllItems, "|"), "F_INFO_TEXT", Join(arrAllNames, "|")))
	End If
End Sub

Sub DrawTeacherSubjects()
	Dim mdClass

	mdClass = "col-md-12"
	OpenFormGroup obLanguage("Common","kTS")
		%><div class="row"><%
		If Not objSubjects.EOF Then
			bSubjects = True
			mdClass = "col-md-2"
			%><div class="col-md-10"><%
			Do%>
			<%=DB2HTML(objSubjects("SUBJECTNAME"))%><br><%
				objSubjects.MoveNext
			Loop Until objSubjects.EOF
			%></div><%
		Else
			bSubjects = False
		End If
		If not readonly And bFullAccessEditing Then 
			%><div class="<%=mdClass%>"><%
			Call DrawContextButtons(Array("editSubjects()", obLanguage("SetupSchoolUI","kBtnEdit"), "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
			%></div><%
		End If
		%></div><%
	CloseFormGroup
End Sub

Sub DrawRights()
	Dim i, strRole
	OpenFormGroup obLanguage("Common","kUserRights")
		%>
		<table class="table table-condensed" id="roles_table">
			<tr>
				<%
				For i = 0 to UBound(arrRoles)
					strRole = arrRoles(i).NAME
					%><td><label for="role_<%=i+1%>"><%=strRole%></label></td><%
				Next
				%>
			</tr>
			
			<tr><%
			If Not readonly And blnCanEditRights And bFullAccessEditing Then
				For i = 0 to UBound(arrRoles)
					strRole = arrRoles(i).shortName
					%><td><%
					If CInt(arrRoles(i).id) = rlTeacher And (bSubjects Or bTeacherHasClass) Then
						If objNSNET.DoesTeacherHaveAnyClass(strEditUserID, strSchoolID, -1) Then
							%>X<%
						Else
							%><%=ShowAnchor( IIF(bSubjects, "hasSubjects()", "hasClasses()"), obLanguage("SetupSchoolUI","kTeacherHasClasses",strFunctionalityType), "X", "" )%><%
						End If%>
						<input type="checkbox" name="TCH" value="YES" checked="checked" style="display:none">
						<input type="hidden" name="TID" value="<%=strEditUserID%>"><%
					Else
						%><input type="checkbox" name="<%=strRole%>" onclick="roleChanged();dataChanged()" value="YES" id="role_<%=i+1%>"
							<%=IIF(arrStaffRoles(arrRoles(i).id), " checked ", "")%>
							<%=IIF(CInt(arrRoles(i).id)=1 And HasUserRight(arProfileDefineSecurityRoles) And (strEditUserId = strUserID), " disabled=""disabled"" ", "")%> /><%
					End If
					 %></td><%
				Next
			Else
				For i = 0 to UBound(arrRoles)
					strRole = arrRoles(i).shortName
					%><td><%
					If arrStaffRoles(arrRoles(i).id) Then
						Response.write "X<input TYPE=""hidden"" NAME=""" & strRole &"""VALUE=""YES"">"
					Else
						Response.write "<input TYPE=""hidden"" NAME=""" & strRole &""" VALUE="""">"
					End If
					%></td><%
				Next
			End If
		%>
			</tr>
		</table><%
	CloseFormGroup
End Sub

Sub DrawFreeParam(objInfo, nElementStatus)
	Dim objCmd, objRs, objrs2
	Dim arrSenior, strSenName, arrTotals
	Dim i
	Dim mdClass

	mdClass = "col-md-12"
	Select Case objInfo("NAME")
	Case "SENIORITY"
		' Draw SENIORITY
		Set objCmd = objNSNET.GetStaffSeniorities_Prepare()
		Set objRs = objNSNET.GetStaffSeniorities_Execute(objCmd, strEditUserID)
		Call objNSNET.DisposeCommand(objCmd)

		%><div class="row"><%
		If Not objRs.EOF Then
			mdClass = "col-md-2"
			%><div class="col-md-10"><%
			arrSenior = GetSenArray(objRs)
			For i = 0 To Ubound(arrSenior, 2)
				strSenName = arrSenior(1, i)
				arrTotals = arrSenior(3, i)
				%><%=DB2HTML(strSenName)%><%
				If IsArray(arrTotals) Then
					%>&nbsp;<%=GreenText((arrTotals(0) & " " & obLanguage("SetupSchool","kYears") & ", " & arrTotals(1) & " " & obLanguage("SetupSchool","kMonthsS") & ", " & arrTotals(2) & " " & obLanguage("SetupSchool","kDaysS")))%><%
				End If
				%><br /><%
			Next
			%></div><%
		End If
		If Not readonly And Not bWizard And bFullAccessEditing Then
			%><div class="<%=mdClass%>"><%
			Call DrawContextButtons(Array("editSeniorities()", obLanguage("SetupSchoolUI","kBtnEditSeniorities"), "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
			%></div><%
		End If
		%></div><%
	Case "RELATIVES"
		%><div class="row"><%
		If Not IsDull( objInfo("PARAMVALUE") ) Then
			mdClass = "col-md-2"
			%><div class="col-md-10"><%
			rw DB2HTML_BR(objInfo("PARAMVALUE"))
			%></div><%
		End If
		If Not readonly And bFullAccessEditing Then 
			%><div class="<%=mdClass%>"><%
			Call DrawContextButtons(Array("editFamilyInfo()", obLanguage("SetupSchoolUI","kBtnEditFamilyInfo"), "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
			%></div><%
		End If
		%></div><%
	End Select
End Sub

Sub DrawButtonsDel()
	If bMayMoveStaff And Not bIsStaffDismissed Then
		ButtonDel "userInfoEdit.deleteUser();", obLanguage("Common","kRemove")
		Button "userInfoEdit.dismissStaff()", obLanguage("Buttons","kDismiss"), obLanguage("Buttons","kDismissStaff"), "glyphicon glyphicon-minus-sign"
	End If
End Sub

Sub DrawButtonsBeforeBack()
	If bMayMoveStaff And bIsStaffDismissed Then
		Button "userInfoEdit.recruitStaff()", obLanguage("Buttons","kRecruit"), obLanguage("Buttons","kRecruitStaff"), "glyphicon glyphicon-plus-sign"
	End If
End Sub
%>
