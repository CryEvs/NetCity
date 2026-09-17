<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/dateinput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kCommissNumMaxLen = 100
Const kCommissTypeID_PMPK   = "1"
Const kCommissTypeID_MSE	= "2"
Const kCommissTypeID_VK	 = "3"
Const kCommissTypeID_Privilege	= "4"
Const kViolationItemName2_Som = "SOM"
Const kSocialStatusInvalidUFTT_ItemName3 = "2"


Dim strStudentID
Dim strCommissID, strCommissTypeID, bNewComm
Dim objCommissTypes, objCommissInfo
Dim strCommissNum, dtStartDate, dtEndDate
Dim strStartDate, strEndDate
Dim objHealthViols, objSocialStatus
Dim objEducForms, objEducProgramms
Dim strEducFormID, strEducProgrammID
Dim strCosialStatusItemID
Dim strViolationItemID
Dim strCommissTypeName
Dim bPreSchool, objPrivileges

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleCommission") & " " & GreenText(DB2HTML(objNSNET.GetUserNickName(strStudentID)))
End	Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStudents
 	bTabInternalPage = True
End	Function

Function hasUserRightsOnPage()
	Dim strClassID
	If HasUserAnyRights(Array(arUsersEditStudents, arUsersEditStudentsMedInfo)) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then
		strClassID = GetSafeID( obTokenMgr.GetData(strToken,stStudClassID), "0" )
		If strClassID <> "0" Then
			If objNSNET.IsClassChief(strClassID, strUserID) Then hasUserRightsOnPage = True: Exit Function
		End If
	End If
	hasUserRightsOnPage = False
End	Function

Sub ReadState()
	If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")
	strStudentID = GetSafeID(Request("UID"), Null)
	strCommissID = GetSafeID(Request("CommissID"), Null)
	bNewComm = (strCommissID = "0")
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
End	Sub

Sub	Main

	Dim strItemName2_Exclude
	If bNewComm Then
		Set objCommissTypes = objNSNET.GetCommissTypes(IIf(bPreSchool, kCommissTypeID_VK, kCommissTypeID_Privilege))
		If objCommissTypes.EOF Then GenerateError obLanguage("SetupSchool","kErrNoCommissTypes")

		strCommissTypeID = GetSafeID(Request("CommissTypeID"), "1")
		strCommissNum = GetSafeStr(Request("CommissNum"), kCommissNumMaxLen, "")
		dtStartDate = Null
		dtEndDate = Null

		strStartDate = GetSafeStr(Request("StartDate"), -1, "")
		strEndDate = GetSafeStr(Request("EndDate"), -1, "")
	Else
		Set objCommissInfo = objNSNET.GetCommissInfo(strCommissID)
		If objCommissInfo.EOF Then GenerateError obLanguage("SetupSchool","kErrCantGetCommissInfo")

		strCommissTypeID = GetSafeID(objCommissInfo("COMMISSTYPEID"), "0")
		strCommissTypeName = GetSafeStr(objCommissInfo("TYPENAME"), -1, "")
		strCommissNum = GetSafeStr(objCommissInfo("COMMISSNUM"), kCommissNumMaxLen, "")
		dtStartDate = objCommissInfo("STARTDATE")
		dtEndDate = objCommissInfo("ENDDATE")
		strStartDate = Date2Str(dtStartDate)
		strEndDate = Date2Str(dtEndDate)
	End If

	Set objEducForms = Nothing
	Set objEducProgramms = Nothing

	If strCommissTypeID = kCommissTypeID_PMPK Or strCommissTypeID = kCommissTypeID_VK Then
		Set objEducForms = objNSNET.GetUserInfoListItems(1041)
		If objEducForms.EOF Then GenerateError obLanguage("SetupSchool","kErrCantGetEducForms")

		If bNewComm Then
			strEducFormID = GetSafeID(Request("EducFormID"), "-1")
		Else
			strEducFormID = GetSafeID(objCommissInfo("EDUC_FORM_ID"), "-1")
		End If

		If strCommissTypeID = kCommissTypeID_PMPK Then
			
			If CLng(strFunctionalityType) = kFuncType_PreSchool Then
				Set objEducProgramms = objNSNET.GetUserInfoListItems(1071)
			Else
				Set objEducProgramms = objNSNET.GetUserInfoListItems(1042)
			End If

			
			If objEducProgramms.EOF Then GenerateError obLanguage("SetupSchool","kErrCantGetEducProgramms")

			strEducProgrammID = "-1"
			If Not bNewComm Then
				strEducProgrammID = GetSafeID(objCommissInfo("EDUC_PROG_ID"), "-1")
			End If

		End If
	End If

	Set objHealthViols = Nothing
	If strCommissTypeID = kCommissTypeID_PMPK Then
		If bPreSchool Then
			strItemName2_Exclude = "'SOC_PED'"
		Else
			strItemName2_Exclude = "'SOM', 'FFN', 'RDA'"
		End If
		Set objHealthViols = objNSNET.GetHealthViolations(strCommissID, "", strItemName2_Exclude)
	ElseIf strCommissTypeID = kCommissTypeID_VK Then
		Set objHealthViols = objNSNET.GetHealthViolations(strCommissID, "'SOM'", "")
	ElseIf strCommissTypeID = kCommissTypeID_MSE Then
		Set objSocialStatus = objNSNET.GetSocialStatusInfo(kSocialStatusInvalidUFTT_ItemName3)
		If objSocialStatus.EOF Then GenerateError obLanguage("SetupSchool","kErrCantGetSocialStatus")
		strCosialStatusItemID = GetSafeID(objSocialStatus("ITEMID"), Null)
	ElseIf strCommissTypeID = kCommissTypeID_Privilege Then
		Set objPrivileges = objNSNET.GetPrivileges(strCommissID)
		If objPrivileges.EOF Then GenerateError obLanguage("Common","kUnexpErr")
	End If

	If Not objHealthViols Is Nothing Then
		If objHealthViols.EOF Then GenerateError obLanguage("SetupSchool","kErrCantGetViolationTypes")
		If strCommissTypeID = kCommissTypeID_VK Then
			strViolationItemID = GetSafeID(objHealthViols("ITEMID"), Null)
		End If
	End If
End	Sub

Sub	onHead()
	Call scriptCalendar("main", null, null)
%>
<SCRIPT><!--

function deleteCommiss(){
	if( isDBBusy() ) return false;
	$.show.confirmation(language.Generic.SetupSchool.kConfirmDeleteCommiss).then(function(){
		var form = document.main;
		form.ACT.value= 'delete';
		setDBBusy();
		DoSubmit(form, "CommissionSave.asp");
	});
}

function doSave(){
	if( isDBBusy() ) return false;
	if (isFormValid()){
		var form = document.main;
		form.ACT.value= 'edit';
		setDBBusy();
		DoSubmit(form, "CommissionSave.asp");
	}
}

function isFormValid(){
	var form = document.main;
	var chkBox;
	var nCheckCnt=0;

	<%If strCommissTypeID <> kCommissTypeID_Privilege Then%>
		var sCommissNum = trimStr(form.elements['CommissNum'].value);
		if( sCommissNum.length == 0 ){
			focusAlert(form.CommissNum, language.Generic.SetupSchool.kErrEmptyCommissNum );
			return false;
		}
	<%Else%>
		chkBox=form.elements['PrivilID']
		nCheckCnt=0;
		if (chkBox) {
			if (chkBox.length) {
				for (var j=0;j<chkBox.length;j++)
					if (chkBox[j].checked==true) {nCheckCnt++;}
			}
		}
		if( nCheckCnt == 0 ){
			alert(language.Generic.SetupSchool.kErrEmptyPrivilege );
			return false;
		}
	<%End If%>

	var startDateFilter = getDateFilterInfo("StartDate");
	if (startDateFilter.date() == null) {
		alert(language.Generic.SetupSchool.kErrEmptyProtocolDate);
		return false;
	}
	var endDateFilter = getDateFilterInfo("EndDate");
	if (endDateFilter.date() == null) {
		alert(language.Generic.SetupSchool.kErrEmptyResultDate);
		return false;
	}
	if(!startDateFilter.check() || !endDateFilter.check()){
		return false;
	}

	if( startDateFilter.date() > endDateFilter.date() ){
		focusAlert(startDateFilter.element, language.Generic.SetupSchool.kErrCommissStartGreaterEndDate);
		return false;
	}

	<%If strCommissTypeID = kCommissTypeID_PMPK Then%>
		<%If Not bPreSchool Then%>
			if( getListValue(form.elements['EducFormID']) == '-1' && getListValue(form.elements['EducProgrammID']) == '-1' )
			{
				focusAlert(form.EducFormID, language.Generic.SetupSchool.kErrEmptyEducFormAndProgramm );
				return false;
			}
		<%End If%>

		chkBox=form.elements['ViolID']
		nCheckCnt=0;
		if (chkBox) {
			if (chkBox.length) {
				for (var j=0;j<chkBox.length;j++)
					if (chkBox[j].checked==true) {nCheckCnt++;}
			}
		}
		if( nCheckCnt == 0 ){
			alert(language.Generic.SetupSchool.kErrEmptyHealthViolation );
			return false;
		}
		if( !chkBox[chkBox.length - 1].checked && nCheckCnt > 1 ){
			alert(language.Generic.SetupSchool.kErrHealthViolation_Complex );
			return false;
		}

	<%End If%>
	return true;
}

function Back(){
	goBack(document.main ,'Commissions.asp');
}

//--></SCRIPT>
<%
End	Sub

Sub DrawButtons()
	ButtonSave "doSave();", obLanguage("Common","kSave")
	If Not bNewComm Then ButtonDel "deleteCommiss();", obLanguage("Common","kRemove")
	ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
End Sub

Sub	onDrawPage()
	Dim dtAid, strAidDate, i
	Dim strEmptyVal
	
	DrawButtonPanel%>

	<form name="main" method="post" action="CommissionEdit.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strStudentID, "ACT", "", "CommissID", strCommissID, "ItemID_invalid", strCosialStatusItemID, "ItemID_SOM", strViolationItemID))%>
		<%If Not bNewComm Then%>
			<%=WriteHiddenTags(Array("CommissTypeID", strCommissTypeID))%>
		<%End If

		Call SetFiltersWidth("", "col-md-3 col-lg-2 col-sm-3", "col-md-8 col-lg-5 col-sm-8")
		If bNewComm Then
			Call DrawSelectInfoRow(obLanguage("SetupSchool","kCommissionType") & ":", strCommissTypeID, "CommissTypeID", objCommissTypes, "COMMISSTYPEID", "TYPENAME", Null, "ok_check_db('main','" & strScriptName & "');")
		Else
			Call DrawReadonlyRow(obLanguage("SetupSchool","kCommissionType") & ":", strCommissTypeName)
		End If
		
		If strCommissTypeID <> kCommissTypeID_Privilege Then Call DrawInputRow(obLanguage("SetupSchool","kCommissionNum") & ":", strCommissNum, "CommissNum", "text", 50, kCommissNumMaxLen, "")
		
		Call DrawDateInfoRow(IIf(strCommissTypeID = kCommissTypeID_Privilege, obLanguage("SetupSchool","kPrivilegeStartDate"), obLanguage("SetupSchool","kCommissionStartDate")) & ":", strStartDate, "StartDate", obLanguage("SetupSchool","kChooseDate"))
		Call DrawDateInfoRow(IIf(strCommissTypeID = kCommissTypeID_Privilege, obLanguage("SetupSchool","kPrivilegeEndDate"), obLanguage("SetupSchool","kCommissionEndDate")) & ":", strEndDate, "EndDate", obLanguage("SetupSchool","kChooseDate"))

		If Not bPreSchool Then
			If strCommissTypeID = kCommissTypeID_PMPK Or strCommissTypeID = kCommissTypeID_VK Then
				strEmptyVal = ""
				If strCommissTypeID = kCommissTypeID_VK Then
					strEmptyVal = Null
				End If
				Call DrawSelectInfoRow(obLanguage("SetupSchool","kEducForm") & ":", strEducFormID, "EducFormID", objEducForms, "ITEMID", "ITEMNAME", strEmptyVal, "")
			End If
		End If
		
		If strCommissTypeID = kCommissTypeID_PMPK Then
			strEmptyVal = ""
			If bPreSchool Then
				strEmptyVal = Null
			End If
			Call DrawSelectInfoRow(obLanguage("SetupSchool","kEducProgramm") & ":", strEducProgrammID, "EducProgrammID", objEducProgramms, "ITEMID", "ITEMNAME", strEmptyVal, "")
		End If

		If strCommissTypeID = kCommissTypeID_VK Then
			Call DrawReadonlyRow(obLanguage("SetupSchool","kViolationType") & ":", objHealthViols("ITEMNAME"))
		End If

		If strCommissTypeID = kCommissTypeID_MSE Then
			Call DrawReadonlyRow(obLanguage("SetupSchool","kSocialStatus") & ":", objSocialStatus("ITEMNAME"))
		End If%>

		<table class="table table-bordered table-condensed table-thin"><%
			If strCommissTypeID = kCommissTypeID_Privilege Then%>
				<tr>
					<th valign="top"><%=obLanguage("SetupSchool","kPrivilegeType")%>:</th>
					<td><%
						While Not objPrivileges.EOF%>
							<input type="checkbox" name="PrivilID" OnClick="dataChanged()" value="<%=objPrivileges("ITEMID")%>" <%If Not IsDull(objPrivileges("PRIVILID")) Then%>checked<%End If%>  ><%=objPrivileges("ITEMNAME")%><br><% 
							objPrivileges.MoveNext
						WEnd%>
					</td>
				</tr><%
			End If

			If strCommissTypeID = kCommissTypeID_PMPK Then%>
				<tr>
					<th valign="top"><%=obLanguage("SetupSchool","kViolationType")%>:</th>
					<td><%
						While Not objHealthViols.EOF%>
							<input type="checkbox" name="ViolID" OnClick="dataChanged()" value="<%=objHealthViols("ITEMID")%>" <%If Not IsDull(objHealthViols("VIOLID")) Then%>checked<%End If%>  ><%=objHealthViols("ITEMNAME")%><br><%
							objHealthViols.MoveNext
						WEnd%>
					</td>
				</tr><%
			End If%>
		</table>
	</form><%
End	Sub
%>
