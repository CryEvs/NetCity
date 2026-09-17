<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strStudentID
Dim objCommissions, bEmpty
Dim bPreSchool

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleCommissions") & " " & GreenText(DB2HTML(objNSNET.GetUserNickName(strStudentID)))
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
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
End	Sub

Sub	Main
    Set objCommissions = objNSNET.GetStudentCommissions(strStudentID)
    bEmpty = objCommissions.EOF
End	Sub

Sub	onHead()
%>
<SCRIPT><!--

function editCommission(sCommissID){
	var form = document.main;
	form.CommissID.value = sCommissID;
	DoSubmit(form, 'CommissionEdit.asp');
}

function Back(){
	goBack(document.main, '/angular/school/userinfo/students/<%=strStudentID%>');
}

//--></SCRIPT>
<%
End	Sub

Sub DrawLinkButtons()
	ButtonAdd "editCommission('0');", obLanguage("SetupSchool","kAddParentAid")
End Sub

Sub	onDrawPage()
	Dim dtAid, strAidDate, i
    Dim strPrevCommID, strCommissID
    Dim strSocStatus
	
	DrawButtonPanel%>

	<form name="main" method="post" action="CommissionEdit.asp">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strStudentID, "CommissID", ""))%><%

		If bEmpty Then
			DrawInfo obLanguage("SetupSchool","kNoCommissions"), False
		Else%>
			<table class="table table-bordered table-condensed table-thin">
				<tr>
					<th><%=obLanguage("SetupSchool","kCommissionType")%></th>
					<th><%=obLanguage("SetupSchool","kCommissionNum")%></th>
					<th><%=(obLanguage("SetupSchool","kCommissionStartDate") & IIf(bPreSchool, "<br>(" & obLanguage("SetupSchool","kPrivilegeStartDate") & ")", ""))%></th>
					<th><%=IIf(bPreSchool, obLanguage("Common","kEndDate"), obLanguage("SetupSchool","kCommissionEndDate"))%></th>
					<%If Not bPreSchool Then%>
						<th><%=obLanguage("SetupSchool","kEducForm")%></th>
					<%End If%>

					

					<th><%=obLanguage("SetupSchool","kEducProgramm")%></th>
					<th><%=(obLanguage("SetupSchool","kViolationType") & IIf(bPreSchool, "<br>(" & obLanguage("SetupSchool","kPrivilegeType") & ")", ""))%></th>
					<th><%=obLanguage("SetupSchool","kSocialStatus")%></th>
				</tr><%
				While Not objCommissions.EOF
					strCommissID = GetSafeID(objCommissions("COMMISSID"), Null)%>
					<tr>
						<td valign="top"><%=ShowAnchor("editCommission('" & strCommissID & "')", obLanguage("Common","kChange"), DB2HTML(objCommissions("TYPENAME")), "")%></td>
						<td valign="top"><%=DB2HTML(objCommissions("COMMISSNUM"))%></td>
						<td valign="top"><%=Date2Str(objCommissions("STARTDATE"))%></td>
						<td valign="top"><%=Date2Str(objCommissions("ENDDATE"))%></td>
						<%If Not bPreSchool Then%>
							<td valign="top" nowrap><%=DB2HTML(objCommissions("EDUC_FORM"))%></td>
						<%End If%>
						
						<% If bPreSchool Then %>
							<td valign="top" nowrap><%=DB2HTML(objCommissions("EDUC_PROG_PRESCHOOL"))%></td>
						<% Else %>
							<td valign="top" nowrap><%=DB2HTML(objCommissions("EDUC_PROG"))%></td>
						<% End If %>
						
						<td valign="top" nowrap><%=DB2HTML(objCommissions("VIOL"))%><%
							
							strSocStatus = GetSafeStr(objCommissions("SOC_STATUS"), -1, "") 

							strPrevCommID = strCommissID
							Do While Not objCommissions.EOF
								objCommissions.MoveNext
								If objCommissions.EOF Then Exit Do
								strCommissID = GetSafeID(objCommissions("COMMISSID"), Null)
								If strCommissID = strPrevCommID Then%>
									<br><%=DB2HTML(objCommissions("VIOL"))%><%
								Else
									Exit Do
								End If
							Loop%>
						</td>
						
						<td valign="top"><%=DB2HTML(strSocStatus)%></td>
					</tr><%
				   'objCommissions.MoveNext
				Wend%>
			</table><br><%
		End If%>
	</form><%
End	Sub
%>
