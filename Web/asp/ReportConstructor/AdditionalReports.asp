<!-- #INCLUDE FILE="ReportConstructor_inc.asp" -->
<!-- #INCLUDE FILE="ReportGroups_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kEmptyMsgDispl = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
Const kFormName = "AdditionalReportsList"

Const kInd_REPORTID		= 0
Const kInd_DISPLAYNAME	= 1
Const kInd_OWNERID		= 2
Const kInd_GROUPID		= 3
Const kInd_GROUPNAME	= 4

Const kIndGroup_ID		= 0
Const kIndGroup_Name	= 1
Const kIndGroup_Size	= 2


Dim objReportsRs
Dim objAdminReportsRs, bNoAdminReports
Dim objReportsAddRs, bNoReportAdd, objReportsRORs, bNoReportRO
Dim strGroupID, objRepGroups, objRepGroupsExternal
Dim bShowGroups
Dim arrReports, arrGroups, arrReportsRO, arrGroupsRO, arrReportsAdd, arrGroupsAdd

Function GetPageTitle()
	GetPageTitle = IIF(bIsEducManager, obLanguage("Constructor","kAdditionalReports1"), obLanguage("Constructor","kAdditionalReports2"))
End Function

Function GetPageTabItem()
	If bIsEducManager Then GetPageTabItem = TabItem_tb_EM_AdditionalReports Else GetPageTabItem = TabItem_tbAdditionalReports
 End Function

Function hasUserRightsOnPage()
	If bIsEducManager Then hasUserRightsOnPage = true Else hasUserRightsOnPage = HasUserRight(arReportsViewAdditionalReports)
End Function

Sub Main()
	Dim bGroups, bGroupsRO, bGroupsAdd
	Call InitReportGroups()
	If bIsEducManager Then
		Set objReportsRORs = objNSNETWork.GetPublishedReports("R", True, strEMID, strGroupID, strFunctionalityType)
		bNoReportRO = objReportsRORs.EOF
		Set objReportsRs = objNSNETWork.GetPublishedReports("A", True, strEMID, strGroupID, strFunctionalityType)
		bNoReport = objReportsRs.EOF
		If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
			Set objReportsAddRs = objNSNETWork.GetPublishedReports("S", True, strEMID, strGroupID, strFunctionalityType)
			bNoReportAdd = objReportsAddRs.EOF
		Else
			bNoReportAdd = True
		End If
	Else
		bNoReportRO = True
		Set objReportsRs = objNSNETWork.GetPublishedReports("S", False, strSchoolID, strGroupID, strFunctionalityType)
		bNoReport = objReportsRs.EOF
		Set objReportsAddRs = objNSNETWork.GetExternalReportList(strSchoolID, strGroupID)
		bNoReportAdd = objReportsAddRs.EOF
	End If

	bGroups = False
	bGroupsRO = False
	bGroupsAdd = False
	If Not bNoReport Then
		bGroups = GetReportArray(objReportsRs, arrReports, arrGroups)
	End If
	If Not bNoReportRO Then
		bGroupsRO = GetReportArray(objReportsRORs, arrReportsRO, arrGroupsRO)
	End If
	If Not bNoReportAdd Then
		bGroupsAdd = GetReportArray(objReportsAddRs, arrReportsAdd, arrGroupsAdd)
	End If

	bShowGroups = (strGroupID = "-1") And (bGroups Or bGroupsRO Or bGroupsAdd)
End Sub

Sub onHeadSpecial()
%><script><!--
function GoToReport( nReportID )
{	document.forms['<%=kFormName%>'].elements['ARPTID'].value = nReportID;
	ok( '<%=kFormName%>', 'ViewReport.asp' );
}
//-->
</script><%
End Sub

Sub DrawFilters()
	OpenFormGroup obLanguage("Constructor","kReportGroups")
	%><select name="GroupID" class="form-control" onChange="OnChangeSelect('<%=kFormName%>','<%=strScriptName%>');">
		<option value="-1" <%=IIf(strGroupID = "-1", "selected", "")%>><%=DB2HTML(obLanguage("Constructor","kAllReports"))%></option>
		<option value="0" <%=IIf(strGroupID = "0", "selected", "")%>><%=DB2HTML(obLanguage("Constructor","kNoReportGroup"))%></option><%
		PopulateSelect objRepGroups, "GROUPID", "GROUPNAME", strGroupID
		If Not bIsEducManager Then
			PopulateSelect objRepGroupsExternal, "GROUPID", "GROUPNAME", strGroupID
		End If%>
	</select><%
	CloseFormGroup
End Sub

Sub DrawReportSection(sectionName, sectionId, arrReports, arrGroups, bNoReports)
	OpenPanel sectionName, sectionId, False

	If bNoReports Then
		DrawInfo obLanguage("Constructor","kNoAdditionalReports"), False
	Else
		Call DrawReports(arrReports, arrGroups)
	End If

	ClosePanel
End Sub

Sub onDrawPage()
	Dim strReportName, strStyle%>
	<form NAME="<%=kFormName%>" class="form-horizontal" METHOD="POST" ACTION="" TARGET="_parent">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="ARPTID" value="">
		<%Call DrawFilters()%>
	</form>

	<div class="row">
		<div class="panel-group col-md-12 col-lg-8">
			<%
				If bIsEducManager Then
					Call DrawReportSection(obLanguage("Constructor","kAdminReports"), "first_section", arrReportsRO, arrGroupsRO, bNoReportRO)
				End If

				Call DrawReportSection(IIf(bIsEducManager, obLanguage("Constructor","kEMReports"), obLanguage("Constructor","kSchoolAddReports",strFunctionalityType)), "second_section", arrReports, arrGroups, bNoReport)
				If Not obContext.ServerSettings.SystemSettings.IsRegionEMForSchool Then
					Call DrawReportSection(IIf(bIsEducManager, obLanguage("Constructor","kSchoolAddReports",strFunctionalityType), obLanguage("Constructor","kExternalReports",strFunctionalityType)), "third_section", arrReportsAdd, arrGroupsAdd, bNoReportAdd)
				End If
			%>
		</div>
	</div><%
End Sub

Sub InitReportGroups()
	Dim bFound

	strGroupID = GetSafeID(Request("GroupID"), GetSafeID(obTokenMgr.GetData(strToken, stReportGroupID), "-1"))
	Set objRepGroups = GetReportGroups()
	If Not bIsEducManager Then
		Set objRepGroupsExternal = objNSNETWork.GetExternalReportGroups(strSchoolID)
	End If

	If strGroupID > "0" Then
		bFound = False
		If Not objRepGroups.EOF Then
			Do While Not objRepGroups.EOF
				If strGroupID = GetSafeID(objRepGroups("GROUPID"), Null) Then
					bFound = True
					Exit Do
				End If
				objRepGroups.MoveNext
			Loop
			objRepGroups.MoveFirst
		End If
		If Not bIsEducManager And Not bFound Then
			If Not objRepGroupsExternal.EOF Then
				Do While Not objRepGroupsExternal.EOF
					If strGroupID = GetSafeID(objRepGroupsExternal("GROUPID"), "0") Then
						bFound = True
						Exit Do
					End If
					objRepGroupsExternal.MoveNext
				Loop
				objRepGroupsExternal.MoveFirst
			End If
		End If
		If Not bFound Then
			strGroupID = "-1"
		End If
	End If

	Call obTokenMgr.SetData(strToken, stReportGroupID, strGroupID)
End Sub

Function GetReportArray(objRs, arrRep, arrGr)
	Dim i, nGroupInd
	Dim strPrevGroup, CurGroup, nCurGroupID

	arrRep = objRs.GetRows(,,Array("REPORTID", "DISPLAYNAME", "OWNERID", "GROUPID", "GROUPNAME"))

	ReDim arrGr(2, UBound(arrRep, 2))
	strPrevGroup= "-1"
	nGroupInd = -1
	For i = 0 To UBound(arrRep, 2)
		CurGroup = GetSafeStr(arrRep(kInd_GROUPNAME, i), -1, "")
		nCurGroupID = GetSafeID(arrRep(kInd_GROUPID, i), "0")
		If CurGroup = strPrevGroup Then
			arrGr(kIndGroup_Size, nGroupInd) = arrGr(kIndGroup_Size, nGroupInd) + 1
		Else
			nGroupInd = nGroupInd + 1
			arrGr(kIndGroup_ID, nGroupInd) = nCurGroupID
			arrGr(kIndGroup_Name, nGroupInd) = CurGroup
			arrGr(kIndGroup_Size, nGroupInd) = 1

			strPrevGroup = CurGroup
		End If
	Next

	ReDim Preserve arrGr(2, nGroupInd)
	GetReportArray = Not (nGroupInd = 0 And arrGr(kIndGroup_ID, 0) = "0" )
End Function

Sub DrawReports(arrRep, arrGr)
	Dim i, j, k
	Dim strGroupName, nGroupSize, strReportName, strStyle

	If bShowGroups Then%>
		<table class="table table-xs table-hover"><%
	End If
	k = 0
	For i = 0 To UBound(arrGr, 2)
		nGroupSize = arrGr(kIndGroup_Size, i)
		If bShowGroups Then
			strGroupName = GetSafeStr(arrGr(kIndGroup_Name, i), -1, obLanguage("Constructor","kNoReportGroup"))%>
			<tr><th><%=DB2HTML(strGroupName)%></th></tr><%
		End If
		For j = 0 To nGroupSize - 1
			strReportName = DB2HTML(arrRep(kInd_DISPLAYNAME, k))
			strStyle = IIf( GetSafeID(arrRep(kInd_OWNERID, k), Null) = "0", "style=""color:green""", "")
			If bShowGroups Then%>
					<tr><td valign="top"><%
			End If%>
			<p>
			<%=ShowAnchor( "GoToReport(" & arrRep(kInd_REPORTID, k) & ")", obLanguage("Common","kChoose"), strReportName, strStyle )%>
			</p>
			<%If bShowGroups Then 
				%></td></tr><%
			End If
			k = k + 1
		Next
	Next
	If bShowGroups Then%>
		</table><%
	End If
End Sub
%>
