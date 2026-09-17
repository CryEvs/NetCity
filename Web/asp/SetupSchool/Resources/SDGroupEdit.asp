<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/ResGroupNavigation.asp" -->
<!-- #INCLUDE FILE="FileDoc_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strAct, strGroupID, strParentGroupID, strGroupName, objRsGroups, bGroups, nItemCount
Dim nSchoolDocType

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolDocsEdit)
End Function

Sub ReadState()
	strAct = GetSafeStr(Request("ACT"),20, "newgroup" )
	If strAct = "newgroup" Then
		strGroupID = "0"
		strParentGroupID = GetSafeID( Request("PGRID"), "0" )
	Else
		strGroupID = GetSafeID( Request("PGRID"), "0" )
		strParentGroupID = "0"
	End If
	nSchoolDocType = GetSafeLng(Request("SchoolDocType"), GetSafeLng(obTokenMgr.GetData(strToken,stSchoolDocType), 1))
End Sub

Function GetPageTitle()
	If strGroupID <> "0" Then GetPageTitle = obLanguage("SetupSchoolResources","kTitleSDGroupEdit") Else GetPageTitle = obLanguage("SetupSchoolResources","kTitleSDGroupCreate") 
End Function

Sub Main
	Dim vSchoolDocType
	Dim objGroupInfo

	vSchoolDocType = IIf(nSchoolDocType=2, 1, Null)
	If strGroupID <> "0" Then
		On Error Resume Next
		'strGroupName = objNSNET.GetSchoolDocsGroupName(strGroupID)
		Set objGroupInfo = objNSNET.GetSchoolDocsGroupInfo(strGroupID)
		TestError(obLanguage("ResourceGroups","kCantGetGroupName"))
		On Error Goto 0
		If objGroupInfo.EOF Then
			GenerateError(obLanguage("ResourceGroups","kCantGetGroupName"))
		End If
		strGroupName = GetSafeStr(objGroupInfo("GROUPNAME"), -1, Null)
		bIsForService = (GetSafeLng(objGroupInfo("SERVICE_NUM"), 0) <> 0)
	Else
		strGroupName = obLanguage("ResourceGroups","kNewGroup")
	End If

	Set objRsGroups = objNSNET.GetSchoolDocsGroupTree(strSchoolID, Null, vSchoolDocType)
	bGroups = objRsGroups.RecordCount > 0
	If strGroupID = "0" Then nItemCount = objRsGroups.RecordCount + 1 Else nItemCount = objRsGroups.RecordCount
	
	nMaxLen_GroupName = kMaxLen_DocGroupName
End Sub

Sub onHead()%>
	<SCRIPT><!--
		function Back() {
			goBack(document.GroupEdit, 'SchoolDocsEdit.asp');
		}

		function saveChanges() {
			ok_check_db('GroupEdit', 'SchoolDocsSave.asp');
		}
	//--></SCRIPT><%
	Call scriptResGroupNavigation()
End Sub%>