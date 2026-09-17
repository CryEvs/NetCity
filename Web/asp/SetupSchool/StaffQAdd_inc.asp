<!-- #INCLUDE VIRTUAL=/asp/Setupschool/qadd_vb.asp -->
<!-- #INCLUDE VIRTUAL=/asp/Setupschool/qadd.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim objSecurityComponent, arrRoles

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolUI","kTitleStaffQAdd")
End Function

Sub ReadState()
	strListTitle = obLanguage("SetupSchoolUI","kListStaffQAdd")
	bIsBDateObligatory = True
	Call ReadStateSpecial()
	Call obTokenMgr.SetData(strToken, stBackPage, strBackPage)
End Sub

Sub ReadStateSpecial()
End Sub

Sub Main()
	If Not HasUserRight(arUsersEditStaff) Then GenerateError obLanguage("Common","kErrPageAccess")
	QuickAddInit
End Sub

Sub InitStaffRoles()
	Set objSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	arrRoles = objSecurityComponent.GetStaffRoles()
End Sub

Sub initRoles()
	Dim i, k

	InitStaffRoles()
	Redim Preserve qadd_edit_name(10 + UBound(arrRoles) + 1)
	k = 1
	For i = 0 To Ubound(arrRoles)
		qadd_edit_name(10 + k) = arrRoles(i).shortName
		k = k + 1
	Next
End Sub

Sub onSpecialHead()
	Dim bStudent

	bStudent = (InStrRev(Request.ServerVariables("SCRIPT_NAME"),"Student") > 0) 
	qadd_edit_name = Array("FN", "MN", "LN", "GN", "LON", "PW", "PW2", "ChangePW", "PCM", "EM", "BDT")
	initRoles
	Call qAddScript()%>

	<script><!--
		function ValidateSpecific() {
			var frmElements = document.forms.UserInfo.elements;
			var minorStaffShortName = "<%=objSecurityComponent.GetRole(Role_MinorStaff).ShortName%>";
			var TeacherShortName = "<%=objSecurityComponent.GetRole(Role_Teacher).ShortName%>";
			var checkedCnt = $(':checkbox:checked','#roles').length
			var ischeckedTCS = $(':checkbox:checked[name=' + minorStaffShortName + ']','#roles').length > 0

			if(checkedCnt == 0) {
				alert(language.Generic.SetupSchoolUI.kErrorURightCannotBeEmpty);
				frmElements[TeacherShortName].focus();

				return false;
			}

			if(ischeckedTCS && checkedCnt > 1) {
				alert(language.Generic.SetupSchoolUI.kErrorURightCannotBeChecked);
				frmElements[minorStaffShortName].focus();

				return false;
			}

			return true;
		}

		function Back() {
			goBack(document.UserInfo,'<%=strBackPage%>');
		}
	//--></script><%
End Sub

Sub DrawSpecificRows()
	Dim arrRoles, strRole, objSecurityComponent, i

	Set objSecurityComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.ISecurityComponent")
	arrRoles = objSecurityComponent.GetStaffRoles()
	
	OpenFormGroup obLanguage("Common","kUserRights")%>
		<div id="roles"><%
			For i = 0 To UBound(arrRoles)%>
				<div class="checkbox">
					<label>
						<input type="checkbox" name="<%=arrRoles(i).shortName%>" value="1" onclick="qadd_on_data_change()" <%=IIF(arrRoles(i).Id = 3," CHECKED ","")%>/><%=arrRoles(i).Name%>
					</label>
				</div><%
			Next%>
		</div><%
	CloseFormGroup
End Sub%>