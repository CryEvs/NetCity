<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Resources/FileDoc_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.

Dim strGroupName
Dim strDocID, strDocName, strDescr
Dim strFileNameOrig
Dim bNewDoc

Dim strAct
Dim strGroupID

Sub ReadState()
	strAct			= GetSafeStr(Request("ACT"),20, kAction_NewDoc)
	strGroupID		= GetSafeID( Request("PGRID"), "0")
	bNewDoc			= (strAct = kAction_NewDoc)

	If Not bNewDoc Then
		strDocID = GetSafeID(Request("DOCID"), "0")
	Else
		strDocID = 0
	End If

	Call ReadStateSpecial()
End Sub

Sub ReadStateSpecial()
End Sub

Function GetPageTitle()
	GetPageTitle = IIf(bNewDoc, obLanguage("SetupSchoolPortfolio","kTitlePortfolioDocCreate"), obLanguage("SetupSchoolPortfolio","kTitlePortfolioDocEdit"))
End Function

Sub scriptFunc()
End Sub

Sub onHead()%>
	<SCRIPT type="text/javascript">
		<%Call WriteCheckAttachmentSizeJsScript()%>

		function canSubmit() {
			var form = document.forms["DocEdit"];

			<%If bNewDoc Then%>
				if(!trimStr(form.elements["file"].value)) {
					alert(language.Generic.SetupSchoolPortfolio.kErrEmptyFileName);

					return;
				}
			<%End If%>

			if(trimStr(form.elements["DOCNAME"].value ) == "") {
				alert(language.Generic.SetupSchoolPortfolio.kErrEmptyDocName);
				form.elements["DOCNAME"].focus();

				return false;
			}

			if(!checkAreaLength(form.elements["DESCR"], <%=kMaxLen_Descr%>, '<%=obLanguage("SetupSchoolPortfolio","kDescr")%>'))
				return false;

			return true;
		}
	</SCRIPT><%

	Call scriptFunc()
End Sub

Sub GetPortfolioDocInfo(strPortfolioID)
	Dim objDocInfo

	If Not bIsDebug Then On Error Resume Next

	If strGroupID <> "0" Then
		strGroupName = objNSNET.GetPortfolioGroupName(strGroupID)
		TestError obLanguage("ResourceGroups","kCantGetGroupName")
	Else
		strGroupName = ""
	End If

	If Not bNewDoc Then
		Set objDocInfo = objNSNET.GetPortfolioDocInfo(strDocID)
		TestError obLanguage("SetupSchoolPortfolio","kErrorCannotGetPortDocInfo")
		If objDocInfo.EOF Then
			GenerateError obLanguage("SetupSchoolPortfolio","kErrorCannotGetPortDocInfo")
		End If

		strFileNameOrig		= GetSafeStr(objDocInfo("FILENAME_ORIG"), kMaxLen_FileName, "")
		strDocName			= GetSafeStr(objDocInfo("RESOURCENAME"), kMaxLen_Name, Null)
		strDescr			= GetSafeStr(objDocInfo("DESCRIPTION"), kMaxLen_Descr, "")
	Else
		strDocName		= ""
		strDescr		= ""
	End If
End Sub

Function WritePortfolioObligatoryTags()
	WritePortfolioObligatoryTags = ""
End Function

Sub onDrawPage()%>
	<FORM NAME="DocEdit" METHOD="post" ENCTYPE="multipart/form-data" onsubmit="return false;" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WritePortfolioObligatoryTags()%><%

		OpenBtnGroup
			Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
			Call ButtonReset("resetScreen('DocEdit')", obLanguage("Common","kCancel"))
		CloseBtnGroup%>

		<div class="row">
			<div class="col-md-8 col-lg-7"><%
				Call DrawReadonlyRow(obLanguage("ResourceGroups","kGroupName"), strGroupName)
		
				Call DrawFileInputRow(IIf(bNewDoc, obLanguage("SetupSchoolPortfolio","kDocFile"), obLanguage("SetupSchoolPortfolio","kNewDocFile")))

				If Not bNewDoc Then
					Call DrawReadonlyRow(obLanguage("SetupSchoolPortfolio","kExistingDocFile"), strFileNameOrig )
				End If
				Call DrawInputRow(obLanguage("SetupSchoolPortfolio","kDocName"), strDocName, "DOCNAME", "text", 50, kMaxLen_Name, "")
				Call DrawInputRowEx(obLanguage("SetupSchoolPortfolio","kDescr"), strDescr, "DESCR", "area", 50, 4, "", "maxlength=""200""")%>
			</div>
		</div>
	</FORM>

	<FORM NAME="DocBack" METHOD="post">
		<%=WriteObligatoryTags()%>
		<%=WritePortfolioObligatoryTags()%>
	</FORM><%
End Sub%>