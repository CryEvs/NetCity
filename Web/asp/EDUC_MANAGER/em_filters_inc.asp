
<% ' © 2007-2014 IRTech. All rights reserved.
Sub DrawUserRoles(nSelectUserRoleID, bReadOnly)
	Dim objRoles
	Set objRoles = objNSNET.GetEMUserRoles()

	OpenFormGroup obLanguage("SetupSchoolUI","kUserRole")%>
		<select name="UR" class="form-control" onchange="dataChanged()" <%=IIF(bReadOnly,"disabled=""disabled""","")%>><%
			objRoles.MoveFirst
			While Not objRoles.EOF%>
				<option value="<%=objRoles("ROLEID")%>"<%=IIf( CInt(objRoles("ROLEID")) = nSelectUserRoleID," selected","")%>><%=objRoles("ROLENAME")%></option><%
				objRoles.MoveNext
			Wend
		%></select><%
	CloseFormGroup
End Sub%>