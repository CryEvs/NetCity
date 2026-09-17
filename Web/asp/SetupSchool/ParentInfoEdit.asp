<!-- #INCLUDE Virtual="/asp/header1.asp" -->
<!-- #INCLUDE file="UserInfoEdit_inc.asp" -->

<% ' © 2007-2014 IRTech. All rights reserved.

Dim objChl, strClassID, strClassName
Dim strMobileName
Dim bChildsAssociated
Dim bChildsHomeAddressesIsDifferent, strChildsHomeAddress
Dim bChildsRegAddressesIsDifferent, strChildsRegAddress
Dim isDontDelMobPhone
Dim mobilePhoneForSchoolSms
Dim objSmsComponent

Function GetRoleGroup()
	GetRoleGroup = RoleGroup_Parents
End Function

Function GetUserListPage()
	GetUserListPage = "/angular/school/users/parents/"
End Function

Sub GetUserRightsToEditing
	Dim bFullInfo, rsTmp
	Dim bChildHasMainSchool

	bFullAccessEditing = False
	strClassID = "0"
	Set objChl = objNSNET.GetStudentListForParent(strEditUserID, strCurrYearID, true)
	If HasUserRight(arUsersEditStudents) Then
		bFullAccessEditing = True
	Else
		bFullAccessEditing = False
		If HasUserRight(arEditInfoSelf) Then
			Do While Not objChl.EOF
				strClassName = objNSNET.GetClassNameForStudent(objChl("STUDENTID"), strCurrYearID)
				If strClassName = "" Then
					bFullInfo = False
				Else
					strClassID = objNSNET.GetClassID(Empty, strCurrYearID, strClassName)
					If objNSNET.IsClassChief(strClassID, strUserID) Then bFullAccessEditing = True : Exit Do
					bFullAccessEditing = False
				End If
				objChl.MoveNext
			Loop
			If Not objChl.BOF Then objChl.MoveFirst
		End IF
	End If
	
	' В данном случае флаг bAddSchoolParentEdit определяет возможность редактирования Родителя в УДОДе
	' #25123. Похоже, что флаг bAddSchoolParentEdit становится ненужным, он почти везде используется в связке (bFullAccessEditing Or bAddSchoolParentEdit)
	If bAddSchool Then
		'bFullAccessEditing = False
		If Not readonly And HasUserRight(arUsersEditStudents) Then ' См. StudentInfoEdit.asp
			If Not objNSNET.HasUserActiveSchoolNotAddSchool(strEditUserID) Then
				bAddSchoolParentEdit = True
				bCanSave = True
			Else
				readonly = True
			End If
		Else
			readonly = True
		End If
	End If

End Sub

Function GetPageTitle()
	Dim UserName
	If bIsEMForSchool Then
		UserName = strLastName & " " &strFirstName & " " & strMiddleName
	Else
		UserName = objNSNET.GetUserNickName(strEditUserID)
	End If
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleParentInfo") & ": " & GreenText(DB2HTML(UserName))
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbParents
 	bTabInternalPage = True
End Function

Sub SpecialWriteState()
	Call obTokenMgr.SetData(strToken, "ROLEID", rlParent)
	Call obTokenMgr.SetData(strToken, stSavePage, "SaveParentInfo.asp")
	Call obTokenMgr.SetData(strToken, stStudClassID, strClassID)  ' for MChoiceParamEdit.asp
End Sub

Sub Main()
	If bNewAttrParams Then
		Exit Sub
	End If
	Dim objAddress

	Call MainUserInfo()

	bParent = True
	strChildsHomeAddress = ""
	strChildsRegAddress = ""
	bChildsAssociated = False
	bChildsRegAddressesIsDifferent = False
	bChildsHomeAddressesIsDifferent = False

	Set objInfo = objNSNET.GetUserInfoForRole(strSchoolID, strCurrYearID, 3, strEditUserID, "", IIf(bShowMNSForms, "", "'MNS'"))
	Set objSmsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISmsComponent")
	mobilePhoneForSchoolSms = GetSafeStrParam(objSmsComponent.GetParentMobPhoneForSchoolSms(strEditUserID),"")
	isDontDelMobPhone = (NOT IsDull(mobilePhoneForSchoolSms))

	objInfo.Sort = "ORDERNO"
	nChildrenID = -1
	If Not objChl.EOF Then
		bChildsAssociated = True
		Do While Not objChl.EOF
			'Childrens Etokens
			If bETokenAuthentication And nChildrenID = -1 Then
				If objChl("LOGINTYPE") = 2 Then
					If IsDull(strEToken) Then
						nChildrenID = objChl("STUDENTID")
					ElseIf strEToken = DB2HTML(objChl("SERIALNUMBER")) Then
						nChildrenID = objChl("STUDENTID")
					End If
				End If
			End If
			'Childrens Addresses
			If Not (bChildsHomeAddressesIsDifferent And bChildsRegAddressesIsDifferent) Then
				Set objAddress = objNSNET.GetUserAddress(objChl("STUDENTID"), 1)
				If Not objAddress.EOF And Not bChildsHomeAddressesIsDifferent Then
					If strChildsHomeAddress = "" Then
						strChildsHomeAddress = objAddress("ADDRESSID")
					ElseIf strChildsHomeAddress <> objAddress("ADDRESSID") Then
						bChildsHomeAddressesIsDifferent = True
					End IF
				End IF
				Set objAddress = objNSNET.GetUserAddress(objChl("STUDENTID"), 0)
				If Not objAddress.EOF And Not bChildsRegAddressesIsDifferent Then
					If strChildsRegAddress = "" Then
						strChildsRegAddress = objAddress("ADDRESSID")
					ElseIf strChildsRegAddress <> objAddress("ADDRESSID") Then
						bChildsRegAddressesIsDifferent = True
					End IF
				End If
			End If
			If bChildsHomeAddressesIsDifferent And bChildsRegAddressesIsDifferent And ( Not bETokenAuthentication Or nChildrenID <> -1 ) Then Exit Do
			objChl.MoveNext
		Loop
		objChl.MoveFirst
	End If
	bRightOnDelete = Not readonly And HasUserRight(arDeleteUsers) And ((strFunctionalityType <> kFuncType_Add) Or bAddSchoolParentEdit)

	bNeedScanParams = True
	strMobileName = ""
End Sub

Sub OnScanParams(strParamName, strUniqueParamName)
	If Not bNeedScanParams Then Exit Sub

	If strParamName = "MOBILE" Then
		strMobileName = strUniqueParamName
	End If

	If strMobileName <> "" Then bNeedScanParams = False
End Sub

Sub SpecialHead()
If bNewAttrParams Then Exit Sub
%>
<script>
function gotoUserEdit( nUID ) {
	checkForChanges().then(function(){
		dataWereChanged = false;
		var form = document.MenuForm;
		if (!form.elements["UID"]) { $('<input/>').attr({type:'hidden',name:'UID'}).appendTo('form'); }
		form.elements["UID"].value = nUID;
		DoSubmit( form, "StudentInfoEdit.asp" );
	});
}
<%If Not readonly Then
	If bChildsAssociated And _
	( Not bChildsRegAddressesIsDifferent _
	Or Not bChildsHomeAddressesIsDifferent) _
		And ((strAddressID <> strChildsHomeAddress Or IsDull(strAddressID)) _
			Or (strAddressID2 <> strChildsRegAddress Or IsDull(strAddressID2))) Then%>

		function setEqualChildHomeAddress(nIsFact, nAddrID){
			var form = document.MenuForm;
			<%If Not IsDull(strChildsHomeAddress) Or Not IsDull(strChildsRegAddress) Then%>
			DoSubmit( form, "SetChildsAddressForParent.asp?IsFactAddress=" + nIsFact + "&AddrID=" + nAddrID + "&UID=" + <%=strEditUserID%>);
			<%End IF%>
		}
	<%End If%>

function saveChanges() {
	<%If bShowMPhone Then%>

	var mobphone = $("[name='MT']").val();
	if(mobphone.length == 0){
		<% IF isDontDelMobPhone THEN %>
			alert('<%=obLanguage("MySettings","kOnlyChangeMobPhone") %>' + ' ' + '<%=obLanguage("MySettings","kUserHasSmsAgreement") %>')
			return false;
		<% END IF %>
	}

	<%End If %>

	if( isDBBusy() ) return false;
	userInfoEdit.save("SaveUserForm.asp");
}

function editAidResults() {
	userInfoEdit.navigateToPage( document.MenuForm, "ParentAidEdit.asp?UID=<%=strEditUserID%>");
}
$(function(){
	$(document).on("click", "ul.copyfrom li", function() {
	//console.log( $( this ).text() );
		$(this)
		.parents(".copyto")
		.find("input")
		.val($( this ).text());
		dataChanged();
});});

<%End If%>
</script>
<%
End Sub

Function OnSpecialDrawParameter(strParamName, objInfo, strUniqueParamName)
	Dim strSnils
	OnSpecialDrawParameter = False
	If strParamName = "RELATIONSHIP" Then
		Call DrawInputSelectRow( DB2HTML_BR(objInfo("TITLE")), GetSafeStrParam(objInfo("PARAMVALUE"), ""), strUniqueParamName, GetSafeLng(objInfo("EXTRAINFO"), Null), 17, strUniqueParamName & "S", Array("", obLanguage("Common","kMother"), obLanguage("Common","kFather"), obLanguage("SetupSchoolUI","kTrustee"), obLanguage("SetupSchoolUI","kKin") ) )
		OnSpecialDrawParameter = True
	End If
	If strParamName = "SNILS" Then
		strSnils = objInfo("PARAMVALUE")
		Call DrawInputRow(DB2HTML_BR(objInfo("TITLE")), strSnils, strUniqueParamName + "_MASK", "text", 25, 20, "")
		WriteHiddenTags Array(strUniqueParamName, strSnils)
		OnSpecialDrawParameter = True
	End If
End Function

Function DrawParamFeatures( strParamName )
	Select Case strParamName
	Case "EDUCATION"
		DrawParamFeatures = True
	Case Else
		DrawParamFeatures = False
	End Select
End Function

Sub DrawParameterFeatures( objGroup, strUniqueParamName )
	Dim objListItems
	Select Case CStr(objGroup("NAME"))
	Case "EDUCATION"
		Set objListItems = objNSNET.GetUserInfoListItems(4)
		Call DrawSelectRs( objListItems, strUniqueParamName, "ITEMID", "ITEMNAME", GetSafeStrParam(objGroup("PARAMVALUE_ID"), "-1"), " ", "" )
	End Select
End Sub

Sub DrawFreeParam(objInfo, nElementStatus)
	Dim objRs
	Dim mdClass

	mdClass = "col-md-12"
	If objInfo("NAME") <> "AIDRESULTS" Then%>
		<%Exit Sub
	End If
	' Draw AIDRESULTS
	Set objRs = objNSNET.GetParentAids(strEditUserID, strCurrYearID)
	%><div class="row"><%
	If Not objRs.EOF Then
		mdClass = "col-md-2"
		%><div class="col-md-10"><%
		While Not objRs.EOF%>
			<%=Date2Str(objRs("AIDDATE"))%>, <%=GreenText(DB2HTML(objRs("AIDRES_NAME")))%>,<br>
			<%=DB2HTML_BR(objRs("AIDCOMMENT"))%><br><%
			objRs.MoveNext
		Wend
		%></div><%
	End If
	If not readonly Then 
		%><div class="<%=mdClass%>"><%
			Call DrawContextButtons(Array("editAidResults()", obLanguage("SetupSchoolUI","kBtnEditAidResults", strFunctionalityType), "primary", "glyphicon glyphicon-pencil"), True, , "ctx-btns-icons-lg")
		%></div><%
	End If
	%></div><%
End Sub

Sub DrawSpecials()
	Dim nStudID, nStudOld
	nStudOld=-1

	If bShowMPhone Then 
		If SendingSchoolSmsAvailable() THEN
			If NOT IsDull(mobilePhoneForSchoolSms) Then 
				Call DrawReadonlyRow( obLanguage("MySettings","kMobilePhoneForSchoolSms"), "+" & mobilePhoneForSchoolSms )
			End If
		End If
	End If

	If bNewAttrParams Then
		%><parent-students></parent-students><%
	Else
		OpenFormGroup obLanguage("Common","kChildren")

		If Not objChl.BOF Then objChl.MoveFirst
		If Not objChl.EOF Then
			nStudID = objChl("STUDENTID")
			Do
				If nStudID<> nStudOld Then%>
					<div class="row">
						<div class="col-md-12">
							<%=ShowAnchor( "gotoUserEdit('"&nStudID&"')", obLanguage("SetupSchoolUI","kChildInfo"), DB2HTML(objChl("STUDENTNAME")), "" )%>
						</div>
					</div><%
				End If

				objChl.MoveNext
				If objChl.EOF Then Exit Do
				nStudOld = nStudID
				nStudID = objChl("STUDENTID")
			Loop
		End If
		CloseFormGroup
	End If
End Sub

Function GetParamStatus(strParamName, strSYDepend)
	Dim nStatus

	nStatus = GetParamStatusCommon(strParamName, strSYDepend)

	If strParamName = "MOBILE" And Not bShowMPhone Then
		'ветка не используется. мобильный телефон получается вне атрибутивных параметров
		nStatus = kParamStatus_RO_NOTSHOW
	ElseIf (strParamName = "MOBILE_SCHOOL_SMS") Or (strParamName = "AGREEMENT_DATE") Then
		nStatus = kParamStatus_Hidden
	End If
	GetParamStatus = nStatus
End Function
%>
