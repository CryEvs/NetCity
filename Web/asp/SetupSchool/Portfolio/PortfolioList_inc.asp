<% ' © 2007-2015 IRTech. All rights reserved.

Dim objRsGroups, objRsLinks, objRsDocs
Dim nPrevLevel, nLevel
Dim bExit
Dim nMinLevel
Dim bIsLeaf
Dim strDocIDs

Const ind_GROUPID = 0
Const ind_GROUPLEVEL = 1
Const ind_GROUPNAME = 2
Const ind_PARENTGROUPID = 3
Const ind_DISPLAY = 4
Const ind_INDENT_GROUPNAME = 5


Function HasAccessToGroup(objRs)
	HasAccessToGroup = True
End Function

Sub DrawChildGroup(strGroupId, strGroupName)%>
	<li class="tree-group-item tree-group-subgroup">
		<span>
			<label class="section-level" for="<%=strGroupId%>">
				<%=DB2HTML(strGroupName)%>
			</label>
		</span>
		<div>
			<input type="checkbox" id="<%=strGroupId%>">
			<%Call DrawResources(strGroupId)%>
		</div>
	</li><%
End Sub

Function GetChildGroups(nParentGroupID, nGroupLevel)
	objRsGroups.MoveFirst

	objRsGroups.Filter = "1 = 1" & _
			IIf(IsDull(nParentGroupID), "", " AND PARENTGROUPID=" & nParentGroupID) & _
			IIf(IsDull(nGroupLevel), "", " AND GROUPLEVEL=" & nGroupLevel)

	If objRsGroups.EOF Then
		GetChildGroups = Empty
	Else
		GetChildGroups = objRsGroups.GetRows(,,Array("GROUPID", "GROUPLEVEL", "GROUPNAME", "PARENTGROUPID"))
	End If
End Function


Sub DrawPortfolioResources()
	Dim nRootGroupCnt, nCounter, nLimit, bSecondColumn
	Dim arrTopGroups, i

	objRsGroups.MoveFirst
	nCounter = 0

	objRsGroups.Filter = "GROUPLEVEL=" & objRsGroups("GROUPLEVEL")
	nRootGroupCnt = objRsGroups.RecordCount
	objRsGroups.Filter = ""
	nLimit = CLng(nRootGroupCnt / 2)

	If nLimit * 2 < nRootGroupCnt Then nLimit = nLimit + 1

	rw "<ul class=""tree col-xs-12 col-md-6 col-lg-6"">"
	bSecondColumn = False
	bIsLeaf = False

	strDocIDs = ""

	arrTopGroups = GetChildGroups(Null, objRsGroups("GROUPLEVEL"))
	For i = 0 To UBound(arrTopGroups, 2)
		strGroupId = arrTopGroups(ind_GROUPID, i)

		nCounter = nCounter + 1

		If nCounter > nLimit And Not bSecondColumn Then 
			rw "</ul><ul class=""tree col-xs-12 col-md-6 col-lg-6"">"
			bSecondColumn = True
		End If%>

		<li class="tree-group">
			<span>
				<label for="<%=strGroupId%>">
					<%=DB2HTML(arrTopGroups(ind_GROUPNAME, i))%>
				</label>
			</span>
			<input type="checkbox" checked id="<%=strGroupId%>"/><%
			Call DrawResources(strGroupId)%>
		</li><%
	Next

	Call obTokenMgr.SetData(strToken, stDocIDs, strDocIDs)

	rw "</ul>"
End Sub


Sub DrawLinks()
	Dim strDescription%>

	<li class="tree-group-item">
		<span <%=IIF(bIsLeaf, "class=""border-remove""", "")%>>
			<label>
				<%=obLanguage("SetupSchoolPortfolio","kLinks")%>
			</label>
		</span>
		<div <%=IIF(bIsLeaf, "class=""border-remove""", "")%>><%
			While Not objRsLinks.EOF
				strDescription = objRsLinks("RESOURCENAME")

				rw DB2HTML_URL(objRsLinks("URL"))
				If Not IsDull(strDescription) Then rw "<p>" & DB2HTML(strDescription) & "</p>"

				objRsLinks.MoveNext
			Wend%>
		</div>
	</li><%
End Sub

Sub DrawDocs()
	Dim strExtImg, strFileNameOrig
	Dim strDocID

	If Not objRsDocs.EOF Then
		While Not objRsDocs.EOF
			strDocID = GetSafeID(objRsDocs("RESOURCEID"), Null)
			strDocIDs = strDocIDs & strDocID & ","
			objRsDocs.MoveNext
		WEnd

		objRsDocs.MoveFirst
	End If%>

	<li class="tree-group-item">
		<span <%=IIF(bIsLeaf, "class=""border-remove""", "")%>>
			<label><%=obLanguage("SetupSchoolPortfolio","kDocuments")%></label>
		</span>
		<div <%=IIF(bIsLeaf, "class=""border-remove""", "")%>><%
			While Not objRsDocs.EOF
				strFileNameOrig = GetSafeStr(objRsDocs("FILENAME_ORIG"), kMaxLen_FileName_Orig, "")
				strExtImg = GetImgForKnownExt(strFileNameOrig)%>

				<a HREF="/portfolio/<%=Server.HTMLEncode(GetFileName(strFileNameOrig))%>?AT=<%=strToken%>&amp;Ver=<%=GetVer()%>&amp;DOCID=<%=objRsDocs("RESOURCEID")%>" 
					target="_blank" onMouseOver="self.status='<%=obLanguage("SetupSchoolPortfolio","kOpenDoc")%>'; return true;" onMouseOut="self.status='';"><%If Not IsDull(strExtImg) Then%><IMG SRC="<%=kFolderFileExtPic%>/<%=strExtImg%>" BORDER="0" VALIGN="TOP">&nbsp;<%End If%><%=DB2HTML(objRsDocs("RESOURCENAME"))%></a>
				<p><%=DB2HTML_BR(objRsDocs("DESCRIPTION"))%></p><%

				objRsDocs.MoveNext
			WEnd%>
		</div>
	</li><%
End Sub

Sub DrawResources(strGroupId)
	Dim bIsResourcesExists
	Dim i
	Dim arrChildGroups
	Dim strChildGroupId, strChildGroupName

	objRsLinks.Filter = "GROUPID=" & strGroupId
	If Not IsEmpty(objRsDocs) Then objRsDocs.Filter = "GROUPID=" & strGroupId

	bIsResourcesExists = True
	'If Not HasUserRole(rlAdmin) Then bIsResourcesExists = HasAccessToGroup(objRsGroups) - условие всегда True
	
	If bIsResourcesExists Then%>
		<ul class="tree-group-item"><%
			
		arrChildGroups = GetChildGroups(strGroupId, Null)
		bIsLeaf = IsEmpty(arrChildGroups)

		If Not objRsLinks.EOF Then Call DrawLinks()
		If Not IsEmpty(objRsDocs) Then
			If Not objRsDocs.EOF Then Call DrawDocs()
		End If
		bIsLeaf = False

		If IsArray(arrChildGroups) Then
			For i = 0 To UBound(arrChildGroups, 2)
				strChildGroupId = arrChildGroups(ind_GROUPID, i)
				strChildGroupName = arrChildGroups(ind_GROUPNAME, i)
				Call DrawChildGroup(strChildGroupId, strChildGroupName)
			Next
		End If%>

		</ul><%

	End If
End Sub
%>
