<% ' © 2007-2015 IRTech. All rights reserved.
Const kBirthRole_Staff		= 1
Const kBirthRole_Student	= 2
Const kBirthRole_Parent		= 4

Const kInd_CLASSNAME = 0
Const kInd_ROLEID	 = 1
Const kInd_BIRTHDATE = 2
Const kInd_USERNAME	 = 3

Dim arrMonthBirth

Function GetRoleName(nRoleID)
	Select Case nRoleID
		Case rlStudent: GetRoleName = obLanguage("Common","kStudent",strFunctionalityType)
		Case rlParent: GetRoleName = obLanguage("Common","kParent")
		Case Else GetRoleName = IIF(bIsStaff, obLanguage("Common","kStaff"), obLanguage("Common","kTeacher",strFunctionalityType))
	End Select
End Function

Sub DrawMonthBirth()
	Dim i, birthDate%>

	<table class="table table-bordered table-condensed print-block">
		<tr>
			<th><%=obLanguage("Common","kClass",strFunctionalityType)%></th>
			<th><%=obLanguage("Calendar","kRole")%></th>
			<th><%=obLanguage("Common","kBDate")%></th>
			<th><%=obLanguage("Common","kDisplayName")%></th>
		</tr><%
			For i = 0 To Ubound(arrMonthBirth, 2)
				birthDate = Date2Str(arrMonthBirth(kInd_BIRTHDATE, i))

				If Not HasUserRight(arUsersEditStaff) And CLng(arrMonthBirth(kInd_ROLEID, i))<>rlStudent Then
					birthDate = LPad(Day(birthDate),2) & "." & LPad(Month(birthDate),2)
				End If%>	

				<tr>
					<td class="text-center"><%=DB2HTML(arrMonthBirth(kInd_CLASSNAME, i))%></td>
					<td class="text-center"><%=GetRoleName(CLng(arrMonthBirth(kInd_ROLEID, i)))%></td>
					<td class="text-center"><%=birthDate%></td>
					<td class="text-left"><%=DB2HTML(arrMonthBirth(kInd_USERNAME, i))%></td>
				</tr><%
			Next%>
	</table><%
End Sub%>