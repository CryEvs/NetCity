<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/ResGroupNavigation.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const kGroupNameLen = 100

Dim strAct, strGroupID, strParentGroupID, strGroupName, objRsGroups, bGroups, nItemCount

Sub ReadState()
	If Not bIsStaff Then GenerateError obLanguage("Common","kErrPageAccess")
	strAct = GetSafeStr(Request("ACT"), 20, "newgroup")

	If strAct = "newgroup" Then
		strGroupID = "0"
		strParentGroupID = GetSafeID(Request("PGRID"), "0")
	Else
		strGroupID = GetSafeID(Request("PGRID"), "0")
		strParentGroupID = "0"
	End If
End Sub

Function GetPageTitle()
	If strGroupID <> "0" Then GetPageTitle = obLanguage("Curriculum","kTitleSRGroupEdit") Else GetPageTitle = obLanguage("Curriculum","kTitleSRGroupCreate")
End Function

Sub Main
	If strGroupID <> "0" Then
		On Error Resume Next
		strGroupName = objNSNET.GetSchoolResourcesGroupName(strGroupID)
		TestError(obLanguage("ResourceGroups","kCantGetGroupName"))
		On Error Goto 0
	Else
		strGroupName = obLanguage("ResourceGroups","kNewGroup")
	End If

  Set objRsGroups = objNSNET.GetSchoolResourcesGroupTree(strSchoolID, 0)
  bGroups = objRsGroups.RecordCount > 0
  If strGroupID = "0" Then nItemCount = objRsGroups.RecordCount + 1 Else nItemCount = objRsGroups.RecordCount
  nMaxLen_GroupName = kGroupNameLen
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function back() {
			goBack(document.GroupEdit, 'SchoolResourcesEdit.asp');
		}

		function saveChanges() {
			ok_check_db('GroupEdit', 'SchoolResourcesSave.asp');
		}
	//--></SCRIPT><%

	Call scriptResGroupNavigation()
End Sub%>