<!-- #INCLUDE VIRTUAL=/asp/header1.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kFormName = "QA"

Dim bLAViewMaterialsOnly, bViewMaterials, bJournal_Assign, bSintez
Dim strSchoolActivityList, strStateLA
Dim rsActivities, objRs
Dim bPreSchool
Dim bYaClassIntegration, strYaClassAuthUrl

Function hasUserRightsOnPage()
	hasUserRightsOnPage = True
	bLAViewMaterialsOnly = False
	If HasUserRight( arLAViewSelf ) Then Exit Function
	If HasUserRight( arLAViewAll ) Then Exit Function
	If HasUserRight( arLAEditSelf ) Then Exit Function
	If HasUserRight( arLAViewMaterials ) Then bLAViewMaterialsOnly = True : Exit Function
	hasUserRightsOnPage = False
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFNLearningApplications")
End Function

Function GetPageMenuItem()
	 GetPageMenuItem = IIf( bIsStaff, miLearningApplications, miStudentDiary )
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf( bIsStaff, tbQA, tbLearningModules )
End Function

Sub WriteState()
	Call obTokenMgr.SetData( strToken, "QA_dct", Null )
	Call obTokenMgr.SetData( strToken, stCrMngmAssignmentID, "-1" )
End Sub

Sub onHead()
%><script><!--
<%If bViewMaterials Then
%>	var wndApp = null;
	function laView( nStrId, nDeleted ) {
	if ( nDeleted==1 )
		alert(language.Generic.LearnApp.kMsgLAWasDeleted);
	else {
		var slval = getListValue(document.<%=kFormName%>.elements['SLA'+nStrId]);
		if ( slval == 0 ) { alert(language.Generic.LearnApp.kSelectLA) }
		else {
			var url = urlHelper.makeUrl("/asp/RemoteHostProxy.asp" , { PROXYURL: slval.substring( 0, slval.indexOf( '|' ) ), TTSURL: "<%=GetTTSURL()%>", RO: 1, LAID: slval.substring( slval.indexOf( '|' ) + 1, slval.lastIndexOf('|') ) });
			var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=950,height=660', winChild: wndApp }
			windowOpen( winOptions );
			wndApp = winOptions.winChild;
		}
	}
}<%
End If
If bJournal_Assign Then%>
function gatherStateLA() {
	var elems = document.<%=kFormName%>.elements;
	var state = '';
	var i = 0;

	while (elems['SLA'+i])
	{ state += elems['SLA'+i].selectedIndex + ','; i++; }
	document.<%=kFormName%>.elements.STATELA.value = state;
}
function laGroupReports( nStrId, nDeleted ) {
	if ( nDeleted==1 )
		alert(language.Generic.LearnApp.kMsgLAWasDeleted);
	else {
		var slval = getListValue(document.<%=kFormName%>.elements['SLA'+nStrId]);
		if ( slval == 0 ) { alert(language.Generic.LearnApp.kSelectLA) }
		else {
			var form = document.<%=kFormName%>;
			form.action = 'LAGroupAssignments.asp';
			if ( nStrId > 0 )
				{ form.LAID.value = slval.substring( slval.indexOf( '|' ) + 1, slval.lastIndexOf('|') ); }
			form.LAURL.value = '/Sintez/AccessPoints/groupReport.asp';
			var sName = slval.substring( slval.lastIndexOf( '|' ) + 1 );
			form.LANAME.value = sName.substring( 0, sName.indexOf('#') );
			gatherStateLA();
			DoSubmit(form, "");
		}
	}
}
function laAssign( nStrId ) {
	var slval = getListValue(document.<%=kFormName%>.elements['SLA'+nStrId]);

	if ( slval == 0 ) { alert(language.Generic.LearnApp.kSelectLA) }
	else {
		var form = document.<%=kFormName%>;
		form.action = '/asp/Grade/LAAssignments.asp';
		if ( nStrId == 0 )
		{ form.LAID.value = 'courses|'+slval.substring( slval.indexOf( '|' ) + 1, slval.lastIndexOf('|') ); }
		else
		{ form.LAID.value = slval.substring( slval.indexOf( '|' ) + 1, slval.lastIndexOf('|') ); }
		form.LAURL.value = slval.substring( 0, slval.indexOf( '|' ) );
		var sName = slval.substring( slval.lastIndexOf( '|' ) + 1 );
		form.LANAME.value = sName.substring( 0, sName.indexOf('#') );
		form.LADELETED.value = sName.substring( sName.indexOf( '#' ) + 1 );
		gatherStateLA();
		DoSubmit(form, "");
	}
}
function laJournal( nStrId ) {
	var slval = getListValue(document.<%=kFormName%>.elements['SLA'+nStrId]);

	if ( slval == 0 ) { alert(language.Generic.LearnApp.kSelectLA) }
	else {
		var form = document.<%=kFormName%>;
		form.action = '/asp/Grade/Gradebook.asp';
		if ( nStrId == 0 )
		{ form.LAID.value = 'courses|'+slval.substring( slval.indexOf( '|' ) + 1, slval.lastIndexOf('|') ); }
		else
		{ form.LAID.value = slval.substring( slval.indexOf( '|' ) + 1, slval.lastIndexOf('|') ); }
		gatherStateLA();
		DoSubmit(form, "");
	}
}<%
End If
If strStateLA <> "" Then%>
var st = new Array(<%=strStateLA%>);
function restorelastate()
{
	var elems = document.<%=kFormName%>.elements, i = 0;
	while ( (i < st.length) && elems['SLA'+i]) {elems['SLA'+i].selectedIndex=st[i]; i++; }
}<%
End If

If strYaClassAuthUrl <> "" Then%>
var wnd = null;
function gotoYaClass() {
	var winOptions = { url: '<%=(kYaClass_WebSite & strYaClassAuthUrl)%>', name: '_blank', winChild: wnd };
	windowOpen( winOptions );
	wnd = winOptions.winChild;
}<%
End If%>

function laImport() {
	$.show.fileDialog({
		title: language.Generic.LearnApp.kImportLearnCourses,
		fileExts: ['.mdb'],
		additionalContent: '<input id="grIDFile" type="hidden" name="GroupID" />',
		invalidFileExtMsg: language.Generic.LearnApp.kAlertInvalidExt,
		url: '/asp/LearnApp/LADoImport.asp',
		contentHtml: $('#laImportTempl').html().replace(/(?:\r\n|\r|\n)/g, ''),
		onShownDlg: function() {
			$('#grIDFile').val($('#grID').val() == null ? '-1' : $('#grID').val());
		},
		customCheck: function() {
			var elems = document.forms['CIFORM'].elements;
			if(elems.LAN.value == 0) {
				alert(language.Generic.LearnApp.kAlertEnterLAName);
				elems.LAN.focus(); 
				return false;
			}
			var form = $('form[name=selectFile]');
			form.append($('<input type=hidden name=LAN>').val(elems['LAN'].value));

			return $.show.confirmation(language.Generic.LearnApp.kConfirmMayTakeTime);
		}
	});
}

function laList() {
	ok ('CIFORMN','LAList.asp')
}
//--></script>
<script src="<%=GetVersionedJsLink("fileAttachments.js")%>" type="text/javascript"></script>
<script src="<%=GetVersionedResLink("/js/fileUpload-bundle.min.js")%>" type="text/javascript"></script>
<%End Sub

Function onLoad()
	If strStateLA <> "" Then onLoad = "restorelastate();"
End Function

Sub ReadState()
	strStateLA = GetSafeStr(obTokenMgr.GetData(strToken, stLaState), -1, "")
	If strStateLA <> "" Then strStateLA = Left(strStateLA, Len(strStateLA) - 1)
	bPreSchool = (CLng(strFunctionalityType) = kFuncType_PreSchool)
End Sub

Sub Main()
	Dim objYaClassComponent

	strSchoolActivityList = obTokenMgr.GetData( strToken, "SCHOOLACTIVITYLIST" )
	If IsDull(strSchoolActivityList) Then GenerateError(obLanguage("LearnApp","kErrExpired"))

	Set rsActivities = objNSNET.GetActivityList(strSchoolActivityList)
	If rsActivities.EOF Then GenerateError obLanguage("LearnApp","kErrCanNotGetActivityList")

	Set objRs = objConLa.Execute("SELECT PRODUCTID, PRODUCTNAME, UPPER(PRODUCTNAME) FROM PRODUCTS ORDER BY 3" )

	bJournal_Assign = HasUserRight( arLAViewSelf ) Or HasUserRight( arLAViewAll ) Or HasUserRight( arLAEditSelf )
	bViewMaterials = HasUserRight( arLAViewMaterials )

	' YaClass region
	strYaClassAuthUrl = ""
	bYaClassIntegration = Trim(kYaClass_WebSite) <> ""
	If bYaClassIntegration Then
		Set objYaClassComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IYaClassComponent")
		TestError obLanguage("ServAdmin", "kCantCreateObj")

		strYaClassAuthUrl = objYaClassComponent.GetAuthUrl(strToken, "")
	End If
End Sub

Sub DrawActionButtons( nStrId, bDeleted, bAssignable )
	Dim arrButtons, strButtonJs, strButtonHint, strButtonImg
	Dim i
	arrButtons = GetActionButtons( nStrId, bDeleted, bAssignable )

	%><span class="input-group-btn"><%
		For i = 0 to Ubound(arrButtons) Step 3
			strButtonJs = arrButtons(i)
			strButtonHint = arrButtons(i+1)
			strButtonImg = arrButtons(i+2)
			If IsDull(strButtonImg) Then
				Call SimpleButton(strButtonJs, strButtonHint)
			Else
				Call Button(strButtonJs, "", strButtonHint, strButtonImg)
			End If
		Next
	%></span><%
End Sub

Function ConcatArrays(arrSeed, arrAddon)
	Dim nCurrUBound, nAddUBound, nNewUbound, i
	nCurrUBound = UBound(arrSeed)
	nAddUBound = UBound(arrAddon)
	nNewUbound = nCurrUBound + nAddUBound + 1

	ReDim Preserve arrSeed(nNewUbound)

	For i = nCurrUBound + 1 To nNewUbound
		arrSeed(i) = arrAddon(i - nCurrUBound - 1)
	Next

	ConcatArrays = arrSeed
End Function

Function GetActionButtons( nStrId, bDeleted, bAssignable )
	Dim arrButtons
	arrButtons = Array()

	If bViewMaterials Then
		arrButtons = ConcatArrays(arrButtons, Array("laView(" & nStrId & "," &IIF(bDeleted,1,0)& ")", obLanguage("LearnApp","kBtnlaView"), "glyphicon-eye-open")) 
	End If

	If bJournal_Assign And bAssignable Then
		arrButtons = ConcatArrays(arrButtons, _
			Array( _
				"laAssign(" & nStrId & ")", obLanguage("LearnApp","kBtnTaskAssign"), "glyphicon-check", _
				"laJournal(" & nStrId & ")", obLanguage("LearnApp","kBtnlaJournal"), "glyphicon-book" _
			) _
		) 
	End If

	If bSintez And bJournal_Assign Then 
		arrButtons = ConcatArrays(arrButtons, Array("laGroupReports(" & nStrId & "," &IIF(bDeleted,1,0)&")", obLanguage("MenuFolders","kFNReports"), "")) 
	End If

	GetActionButtons = arrButtons
End Function

Sub DrawLinkButtons()
	If HasUserRight(arAddLA) Then%>
		<%=ShowButton("LAList", "glyphicon-list", "laList()", obLanguage("LearnApp","kBtnLAList"), obLanguage("LearnApp","kBtnLAList"))%>
		<%=ShowButton("import", "glyphicon-import", "laImport()", obLanguage("LearnApp","kImportLearnCourses"), obLanguage("LearnApp","kImportLearnCourses"))%><%
	End If
End Sub

Sub onDrawPage()
	Dim bTabInit
	Dim nStrId
	Dim strCode, strCurrCode, bIsDeleted

Call DrawButtonPanel
	%><form name="<%=kFormName%>" method="post" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags( Array("LAID","", "BACK","QAssignment.asp", "LANAME", "", "LAURL", "", "LADELETED", "") )%>
		<%
		SetFiltersWidth "", "col-md-2 col-lg-2", "col-md-10 col-lg-8"
		bTabInit = False
		nStrId = 0
		' no LAs
		If rsActivities.EOF Then
			%><div class="PageTitle"><%=obLanguage("LearnApp","kNoLAs")%></div><%
		Else
			' no own LAs
			If rsActivities("PUBCODE") <> "internal" Then
				%><div class="PageTitle"><%=obLanguage("LearnApp","kNoOwnLA")%></div><%
			' own LAs
			Else
				bTabInit = True
				%><h3><%=obLanguage("LearnApp","kYourOwnLA")%></h3>

				<%OpenFormGroup obLanguage("LearnApp","kLAShort") %>
					<div class="input-group">
						<select name="SLA<%=nStrId%>" class="form-control">
							<option value="0"> --- <%=obLanguage("LearnApp","kSelectLA")%> --- </option><%
							While Not objRs.EOF
								%><option value="/courses/cn_articles.asp|<%=objRs("PRODUCTID")%>|<%=DB2HTML(objRs("PRODUCTNAME"))%>#N"><%=DB2HTML(objRs("PRODUCTNAME"))%></option><%
								objRs.MoveNext
							Wend
							objRs.MoveFirst%>
						</select>
						<%Call DrawActionButtons( nStrId, False, True )%>
					</div>
				<%CloseFormGroup%>

				<%
				nStrId = nStrId + 1
				rsActivities.MoveNext
				If rsActivities("PUBCODE") = "internal" Then  ' Moodle courses

				%><h3><%=rsActivities("GROUPNAME")%></h3>

					<%OpenFormGroup obLanguage("LearnApp","kLAShort") %>
						<div class="input-group">
							<select name="SLA<%=nStrId%>" class="form-control">
								<option value="0"> --- <%=obLanguage("LearnApp","kSelectLA")%> --- </option><%
									While Not rsActivities.EOF and rsActivities("PUBCODE") = "internal"
										%><option value="<%=DB2VALUE(rsActivities("PROBLEMLISTURL"))%>|<%=rsActivities("ACTIVITYID")%>|<%=DB2HTML(rsActivities("ACTIVITYNAME"))%>#<%=IIF(bIsDeleted,"Y","N")%>"><%=DB2HTML(rsActivities("ACTIVITYNAME"))%></option><%
										rsActivities.MoveNext
									Wend%>
							</select>
							<% Call DrawActionButtons( nStrId, bIsDeleted, True )%>
						</div>
					<%CloseFormGroup%>
					<%
					nStrId = nStrId + 1
				End If
			End If
			If Not bPreSchool Then
			' no 3rd party LAs
			If rsActivities.EOF Then
				If Not bTabInit Then
					bTabInit = True
				End If

				%><h3><%=obLanguage("LearnApp","k3rdParties")%></h3>
				<%=obLanguage("LearnApp","kNoKnownLA")%><%
			' 3rd party LAs
			Else
				While Not rsActivities("PUBCODE") <> "internal"
					rsActivities.MoveNext
				Wend
				While Not rsActivities.EOF
					bSintez = (rsActivities("ACTIVITYID")="sintez")
					strCode = rsActivities("GROUPID")
					If Not bTabInit Then
						bTabInit = True
					End If
					If bSintez Then
						%><h3><%=DB2Html(rsActivities("GROUPNAME"))%></h3><%
					Else
						%><h3><%=DB2Html(rsActivities("GROUPNAME") & ". " & rsActivities("PUBNAME"))%></h3><%
					End If
					%>	
					<%OpenFormGroup obLanguage("LearnApp","kLAShort") %>
							<div class="input-group">
								<select name="SLA<%=nStrId%>" class="form-control">
									<option value="0"> --- <%=obLanguage("LearnApp","kSelectLA")%> --- </option><%
									StrCurrCode = strCode
									While StrCurrCode = strCode
										bIsDeleted = ( bSintez And (GetSafeStr(rsActivities("ISDELETED"),1,"N")="Y") )
										%><option value="<%=DB2VALUE(rsActivities("PROBLEMLISTURL"))%>|<%=rsActivities("ACTIVITYID")%>|<%=DB2HTML(rsActivities("ACTIVITYNAME"))%>#<%=IIF(bIsDeleted,"Y","N")%>"><%=DB2HTML(rsActivities("ACTIVITYNAME"))%><%
										If bIsDeleted Then Response.Write " "&obLanguage("LearnApp","kDeleted")
										%></option><%
										rsActivities.MoveNext
										If rsActivities.EOF Then
											StrCurrCode = Null
										Else
											StrCurrCode = rsActivities("GROUPID")
										End If
									Wend
								%></select>
								<%Call DrawActionButtons( nStrId, bIsDeleted, ((CLng(strCode)<>8) And (CLng(strCode)<>9)))%>
							</div>
					<%CloseFormGroup%><%
					nStrId = nStrId + 1
				Wend
			End If
			End If ' bPreSchool
			If bTabInit Then
			End If
		End If
		%>
		<input type="hidden" name="STATELA">
	</form>
	<form name="CIFORMN" method="post" target="_parent">
		<%=WriteObligatoryTags()%>
	</form><%
	Call DrawLAImportScript()
    If strYaClassAuthUrl <> "" Then
        Response.Write "<hr><table border=""0"" cellpadding=""0"" cellspacing=""0"" width=""730""><tr><td width=""600"">"
        Response.Write obLanguage("LearnApp","kYaClassDescription_Teacher")
        Response.Write "</td><td>" & ShowAnchor("gotoYaClass();", DB2HTML(obLanguage("LearnApp","kGotoYaClassSite")), "<img src=""/images/Common/yakl_s.gif"">", " style=""color:blue""")
        Response.Write "</td></tr></table>"
  	End If
End Sub

Sub DrawLAImportScript()%>
	<script id="laImportTempl" type="text/html">
		<form name="CIFORM" method="post" target="_parent" enctype="multipart/form-data" runat="server" class="form-horizontal from-edit">
			<p><%=obLanguage("LearnApp","kLAImport1")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i> <%=obLanguage("LearnApp","kLAImport2")%>:
				<ol>
					<li><%=obLanguage("LearnApp","kLAImport3")%></li>
					<li style="padding-top: 16px;">
						<%=obLanguage("LearnApp","kLAImport4")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i>, <%=obLanguage("LearnApp","kLAImport5")%><br>
						<a href="/sa/import/importer.exe"><%=obLanguage("LearnApp","kLAImportTool")%></a> (472 Кб)<br>
						<a href="/sa/import/importer.rtf" target="_blank"><%=obLanguage("LearnApp","kLAImportToolManual")%></a> (70 Кб)
					</li>
					<li style="padding-top: 16px;">
						<%=obLanguage("LearnApp","kLAImport6")%> <i><%=NETSCHOOL_PRODUCT_NAME%></i> (<b>import.mdb</b>).
						
					</li>
				</ol><%
				SetFiltersWidth "", "col-md-3 col-md-offset-1", "col-md-7"
				OpenFormGroup obLanguage("LearnApp","kImportIntoLA")%>
					<select name="LAN" class="form-control">
						<option value="0"> --- <%=obLanguage("LearnApp","kSelectLA")%> --- </option><%
							While Not objRs.EOF%>
								<option value="<%=objRs("PRODUCTID")%>"><%=DB2HTML(objRs("PRODUCTNAME"))%></option><%
								objRs.MoveNext
							Wend%>
					</select><%
				CloseFormGroup%>
			</p>
		</form>
	</script><%
End Sub
%>
