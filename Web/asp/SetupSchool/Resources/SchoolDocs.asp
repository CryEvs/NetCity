<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/html_url.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->
<!-- #INCLUDE FILE="FileDoc_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim objRsGroups, objRsResources, objRsLinks, strGroupID, bEmpty
Dim bEditRight, bDrawButtons
Dim nSchoolDocType
Dim strDocIDs

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchoolResources","kTitleSchoolDocs",strFunctionalityType)
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miResources
End Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbDocuments
End Function

Function hasUserRightsOnPage()
	If HasUserRight(arSchoolDocsEdit) Then
		hasUserRightsOnPage = True
		bEditRight = True
		Exit Function
	End If
	bEditRight = False
	If HasUserRight(arSchoolDocsView) Then
		hasUserRightsOnPage = True
		Exit Function
	End If
	hasUserRightsOnPage = HasUserRight(arSchoolPublicDocsView)
End Function

Sub ReadState()
	If bIsEMForSchool Then
		nSchoolDocType = 2
	Else
		If HasUserRight(arSchoolPublicDocsView) Then 
			nSchoolDocType = 2 'родителю доступны только публичные документы школы
		Else
			nSchoolDocType = GetSafeLng(Request("SchoolDocType"), GetSafeLng(obTokenMgr.GetData(strToken,stSchoolDocType), 0))
		End If
	End If
'	If nSchoolDocType = 0 And bEditRight Then bEditRight = False ' predefined school docs cannot be changed
	strGroupID = GetSafeID( Request("PGRID"), "0" )
	bDrawButtons = bEditRight And nSchoolDocType <> 0 And Not readonly
End Sub

Sub Main
	Dim varSchoolID, varGroupID
	Dim vSchoolDocType
	Dim strDocID
'DB-specific
' запросы аналогичные как в Curriculum/SchoolResources.asp
	varSchoolID = IIf(nSchoolDocType = 0, Null, strSchoolID)
	varGroupID = IIf(strGroupID="0", Null, strGroupID)
	vSchoolDocType = IIf(nSchoolDocType=2, 1, Null)

	Set objRsGroups = objNSNET.GetSchoolDocsGroupTree(varSchoolID, Null, vSchoolDocType)
	bEmpty = objRsGroups.EOF
	strDocIDs = ""
	If Not bEmpty Then
		If strGroupID <> "0" Then
			If Not objNSNET.IsValidDocGroupForSchool(strGroupID, varSchoolID, vSchoolDocType) Then
				strGroupID = "0"
				varGroupID = Null
			End If
		End If
		Set objRsResources = objNSNET.GetSchoolDocsGroupTree(varSchoolID, varGroupID, vSchoolDocType)
		If objRsResources.EOF Then GenerateError(obLanguage("SetupSchoolResources","kCantGetDocsInGroup"))
		Set objRsLinks = objNSNET.GetSchoolDocsGroupTreeDocList(varSchoolID, varGroupID)
		If Not objRsLinks.EOF Then
			While Not objRsLinks.EOF
				strDocID = GetSafeID(objRsLinks("SCHOOLDOCID"), Null)
				strDocIDs = strDocIDs & strDocID & ","
				objRsLinks.MoveNext
			WEnd
			objRsLinks.MoveFirst
		End If
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stSchoolDocType, nSchoolDocType)
	Call obTokenMgr.SetData(strToken, stDocIDs, strDocIDs)
End Sub

Sub onHead()%>
	<script type="text/javascript">
		function getSchoolDoc(docId, fileName) {
			downloadFile('/webapi/schools/' + appContext.schoolId + '/docs/' + docId + '/file/' + fileName);
		}
	</script><%

	If bEditRight And (nSchoolDocType <> 0) Then%>
		<script>
			function changeData() {
				DoSubmit(document.GroupList, "SchoolDocsEdit.asp");
			}
		</script><%
	End If
End Sub

Sub DrawLinkButtons()
	ButtonChange "changeData();", obLanguage("SetupSchoolResources","kEditDocs")
End Sub

Function GetDocTypes()
	If bIsEMForSchool Or HasUserRight(arSchoolPublicDocsView) Then
		GetDocTypes = Array(2, obLanguage("SetupSchoolResources","kPublics"))
	Else
		GetDocTypes = Array(0, obLanguage("SetupSchoolResources","kPresettings"), 1, obLanguage("SetupSchoolResources","kIntraSchools", strFunctionalityType), 2, obLanguage("SetupSchoolResources","kPublics"))
	End If
End Function

Sub DrawFilters( strForm )
	DrawSimpleFilterRow  obLanguage("SetupSchoolResources","kDocType"), "SchoolDocType", GetDocTypes(), nSchoolDocType, False, SelectChangeHandler("GroupList")

	If bEmpty Then
		%><input type="hidden" name="PGRID" value="0"><%
		Exit Sub
	End If

	Call comHelper.DataSetAdapterHelper.Indent(objRsGroups, "GROUPNAME", "GROUPLEVEL", Chr(160) & Chr(160), "INDENT_GROUPNAME")
	Call DrawSelectInfoRow(obLanguage("SetupSchoolResources","kDocGroup"), strGroupID, "PGRID", objRsGroups, "GROUPID", "INDENT_GROUPNAME", obLanguage("SetupSchoolResources","kAllDocGroups"), SelectChangeHandler("GroupList"))
End Sub

Sub DrawDocList()
	Dim i, nLevel, strDescription, bFirst, nCols
	Dim strFileNameOrig, strExtImg

	nCols = IIF(nSchoolDocType = 0, 3, 4)

	%><table class="table table-condensed table-sm">
		<tr>
			<th class="disable-th-center"><%=obLanguage("Common","kName")%></th>
			<th class="disable-th-center"><%=obLanguage("SetupSchoolResources","kDescr")%></th>
			<%If nSchoolDocType <> 0 Then%><th class="disable-th-center"><%=obLanguage("SetupSchoolResources","kAuthor")%></th><%End If%>
			<th class="disable-th-center"><%=obLanguage("SetupSchoolResources","kPublicationDate")%></th>
		</tr><%

	bFirst = True
	While Not objRsResources.EOF
		nLevel = CLng(objRsResources("GROUPLEVEL"))

		%><tr><td colspan="<%=nCols%>"><h3 style="margin-top: 5px;"><span class="label label-info" style="display:block;"><%=DB2HTML(objRsResources("GROUPNAME"))%></span></h3></td></tr><%

		objRsLinks.Filter = "GROUPID=" & CStr(objRsResources("GroupID"))
		If Not objRsLinks.EOF Then
			While Not objRsLinks.EOF
				strFileNameOrig = GetSafeStr(objRsLinks("FILENAME_ORIG"), kMaxLen_FileName_Orig, "")
				strExtImg = GetImgForKnownExt(strFileNameOrig)%>
				<tr>
					<td>
						<a onclick="Javascript:getSchoolDoc(<%=objRsLinks("SCHOOLDOCID")%>, '<%=Server.HTMLEncode(GetFileName(strFileNameOrig))%>'); return false;" href="" title='<%=obLanguage("SetupSchoolResources","kOpenSchoolDoc",strFunctionalityType)%>'>
							<%If Not IsDull(strExtImg) Then%>
							<img src="<%=kFolderFileExtPic%>/<%=strExtImg%>" border="0" valign="top">&nbsp;
							<%End If%>
							<%=DB2HTML(objRsLinks("DOCNAME"))%>
						</a>
					</td>
					<td><%=DB2HTML_BR_URL(objRsLinks("DESCRIPTION"))%></td>
					<%If nSchoolDocType <> 0 Then%>
						<td><%=DB2HTML(objRsLinks("NICKNAME"))%></td>
					<%End If%>
					<td><%=Date2Str(objRsLinks("DOCDATE"))%></td>
				</tr><%
				objRsLinks.MoveNext
			Wend
		End If
		bFirst = False
		objRsResources.MoveNext
	Wend
	%></table><%
End Sub

Sub onDrawPage()
	%><form name="GroupList" method="post" action="SchoolDocs.asp">
	<%=WriteObligatoryTags()%><%
	Call DrawButtonsFilters(bDrawButtons, "GroupList")
	%></form><%

	If bEmpty Then
		DrawInfo obLanguage("SetupSchoolResources","kNoGroupsForDocType"), False
		Exit Sub
	End If

	Call DrawDocList()
End Sub
%>
