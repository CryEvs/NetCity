<!-- #INCLUDE FILE=../header1.asp -->

<% ' © 2007-2008 IRTech. All rights reserved.

Function GetPageTabItem()
	bTabInternalPage = False
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolRoot","kMainSettings") & obLanguage("Common","kOfSchool",strFunctionalityType)
End Function

Sub onDrawPage()
Dim strName, arrStudTabs, arrParentTabs
arrStudTabs = Array(arUsersEditStudents, arUsersEditStudentsMedInfo, arUsersEditStudentsPsyInfo, arEditInfoSelf, arShortInfoStudents)
arrParentTabs = Array(arUsersEditStudents, arEditInfoSelf, arUsersEditStudentsPsyInfo, arShortInfoStudents)%>
<br><table cellpadding=4>
<tr>
  <td valign="top" width="25%">
<%=ShowGroupHeader( MenuItem_miManagementSchoolInfo, obLanguage("MenuFolders","kSchoolInfo",strFunctionalityType) )%>
	<ul><%=ShowTabHeader( Array(arProfileEditSchoolInfo, arProfileViewSchoolInfo ), TabItem_tbSchoolInfo, obLanguage("MenuFolders","kFNSchoolInfoCard") )%>
	<%If Not bIsEMForSchool Then%>
		<br><br>
	<%=ShowTabHeader( arProfileEditRegionalSettings, TabItem_tbRegSettings, obLanguage("MenuFolders","kFNRegionalSettings") )%>
		<%=obLanguage("SetupSchoolRoot","kFNRegionalSettings_Comment")%><br><br>
	<%=ShowTabHeader( arEditSchoolSettings, TabItem_tbSchoolSettings, obLanguage("MenuFolders","kFNSchoolSettings",strFunctionalityType) )%>
		<%=obLanguage("SetupSchoolRoot","kFNSchoolSettings_Comment") & obLanguage("Common","kOfSchool",strFunctionalityType)%><br><br>
	<%=ShowTabHeader( arProfileDefineSecurityRoles, TabItem_tbSecRoles, obLanguage("MenuFolders","kFNSecurityRights") )%>
		<%=obLanguage("SetupSchoolRoot","kFNSecurityRights_Comment")%><br><br>
	<%=ShowTabHeader( arEditReferenceBook, TabItem_tbReferenceBook, obLanguage("MenuFolders","kFNReferenceBooks") )%>
		<%=obLanguage("SetupSchoolRoot","kFNReferenceBooks_Comment")%><%
	End If%>
	</ul>
  </td>
  <td valign="top" width="25%">
<%=ShowGroupHeader( MenuItem_miManagementUsers, obLanguage("MenuFolders","kUsers") )%>
	<ul><%=ShowTabHeader( Array(arUsersEditStaff, arUsersEditStaffMedInfo, arShortInfoStaff ), TabItem_tbStaff, obLanguage("MenuFolders","kFNStaff") )%>
		<%=obLanguage("SetupSchoolRoot","kFNStaff_Comment")%><br><br>
	<%=ShowTabHeader( arrStudTabs, TabItem_tbStudents, obLanguage("MenuFolders","kFNStudents",strFunctionalityType) )%>
		<%=obLanguage("SetupSchoolRoot","kFNStudents_Comment") & obLanguage("SetupSchoolRoot","kAboutStudents",strFunctionalityType)%><br><br>
	<%=ShowTabHeader( arrParentTabs, TabItem_tbParents, obLanguage("MenuFolders","kFNParents") )%>
			<%=obLanguage("SetupSchoolRoot","kFNParents_Comment")%><br /><br />
	<%=ShowTabHeader( arrUserStatTabs, TabItem_tbUserStat, obLanguage("MenuFolders","kFNUserStat") )%>
			<%=obLanguage("SetupSchoolRoot","kFNUserStat_Comment")%><br /><br />

	<%'ShowTabHeader( arrParentTabs, TabItem_tbInviteStat, obLanguage("MenuFolders","kFNInviteStat") )%>
 			<%'obLanguage("SetupSchoolRoot","kFNInviteStat_Comment")%>
	</ul>
	</td>
	<td valign="top" width="25%">
<%=ShowGroupHeader( MenuItem_miCurriculumPlan, obLanguage("MenuFolders","kCurriculumPlan") )%>
	<ul><%
	If Not bIsEMForSchool Then%>
	<%=ShowTabHeader( Array(arCreateCloseEditYear, arMoveBookEdit), TabItem_tbYear, obLanguage("MenuFolders","kFNSchoolYearAndTerms") )%>
		<%=obLanguage("SetupSchoolRoot","kFNSchoolYearAndTerms_Comment")%><br><br>
	<%=ShowTabHeader( arSchoolSubjects, TabItem_tbSchoolSubjects, obLanguage("MenuFolders","kFNSubjects") )%>
		<%=obLanguage("SetupSchoolRoot","kFNSubjects_Comment",strFunctionalityType)%><br><br>
	<%=ShowTabHeader( arSchoolSubjects, TabItem_tbCuriculumComponents, obLanguage("MenuFolders","kFNComponents") )%>
		<%=obLanguage("SetupSchoolRoot","kFNComponents_Comment")%><br><br>
	<%=ShowTabHeader( arSchoolSubjects, TabItem_tbCuriculumProfiles, obLanguage("MenuFolders","kFNProfiles",strFunctionalityType) )%>
		<%=obLanguage("SetupSchoolRoot","kFNProfiles_Comment")%><br><br>
	<%=ShowTabHeader( arSchoolSubjects, TabItem_tbCuriculumLimits, obLanguage("MenuFolders","kFNCurriculumLimits") )%>
		<%=obLanguage("SetupSchoolRoot","kFNCurriculumLimits_Comment")%><br><br><%
	End If%>
	<%=ShowTabHeader( arSchoolSubjects, TabItem_tbCuriculumPlan, obLanguage("MenuFolders","kFNCurriculumPlan") )%>
		<%=obLanguage("SetupSchoolRoot","kFNCurriculumPlan_Comment")%><%
	If IsShowIUP() Then%>
		<br><br>
		<%=ShowTabHeader( arSchoolSubjects, TabItem_tbIUP, obLanguage("MenuFolders","kFNIUP") )%>
			<%=obLanguage("SetupSchoolRoot","kFNIUP_Comment")%><%
	End If%>
	</ul>
	</td>
  <td valign="top" width="25%">
<%=ShowGroupHeader( MenuItem_miManagementMovements, obLanguage("MenuFolders","kMovement") )%>
	<ul><%=ShowTabHeader( Array(arMoveBookView, arMoveBookEdit ), TabItem_tbMoveBook, obLanguage("MenuFolders","kFNStudentsMovement",strFunctionalityType) )%>
		<%=obLanguage("SetupSchoolRoot","kFNStudentsMovement_Comment") & obLanguage("Common","kStudents_r",strFunctionalityType)%><br><br>
	<%=ShowTabHeader( arMovePoolStudents, TabItem_tbMovePoolStudents, IIf(obContext.ServerSettings.SystemSettings.ModuleEServices, obLanguage("MenuFolders","kFNStudentsPool_ES"), obLanguage("MenuFolders","kFNStudentsPool")) )%>
		<%=obLanguage("SetupSchoolRoot","kFNStudentsPool_Comment")%>
	</ul>
	</td>
</tr>
</table>
<%
End Sub

Function IsShowIUP()
	IsShowIUP = False

	If (strFunctionalityType = kFuncType_Common Or strFunctionalityType = kFuncType_Profession) Then
		IsShowIUP = True
	End If
End Function

Function ShowGroupHeader( nGroupID, strGroupName )
  If isInARGroup( nGroupID ) Then
	Response.Write "<div align=""center"">" &_
		ShowAnchor( "JavaScript:SetSelectedMenu('"&nGroupID&"','"&arrTabURLs(arrCurrDefaultFolders(CInt(nGroupID)))&"')", strGroupName, strGroupName, "class=""SmallHeader"" ")
  Else
	Response.Write "<div align=""center"" class=""SmallHeader"">" & strGroupName
  End If
  Response.Write "</div><br>"
End Function

Function ShowTabHeader( theRightID, nGoTabID, strTabName )
	Dim nRightID, bHasUserRight
	If Not IsArray(theRightID) Then
		bHasUserRight = HasUserRight( theRightID )
	Else
		bHasUserRight = False
		For Each nRightID In theRightID
			If HasUserRight( nRightID ) Then bHasUserRight = True: Exit For
		Next
	End If
	If bHasUserRight Then
		Response.Write "<li><B>" &ShowAnchor( "JavaScript:SetSelectedTab('"&nGoTabID&"','"&arrTabURLs(CInt(nGoTabID))&"')", strTabName, strTabName, "")& "</B><BR>"
	Else
		Response.Write "<li><B>" &strTabName& "</B><BR>"
	End If
End Function
%>
