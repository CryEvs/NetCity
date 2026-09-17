<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/YearIndependent_inc.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<% ' © 2007-2014 IRTech. All rights reserved.
Const kMaxLen_FileName	= 200
Const kMaxLen_DocName	= 200
Const kMaxLen_Descr		= 2000

Dim strAct
Dim nGroupID, strGroupName
Dim strDocID, strDocName, strDescr, strAuthor, dtDocDate
Dim strFileNameOrig
Dim objDocInfo
Dim nServiceNum
Dim arr5ServiceFileExts, str5ServiceFileExts

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arSchoolDocsEdit)
End Function

Sub ReadState()
	Dim objGroupInfo

	arr5ServiceFileExts		= Array("HTML", "HTM", "TXT")
	str5ServiceFileExts		= Join(arr5ServiceFileExts, ", ")
	strAct					= GetSafeStr(Request("ACT"),20, "newdoc")
	nGroupID				= GetSafeLng(Request("PGRID"), GetSafeLng(obTokenMgr.GetData(strToken, stSchoolDocGroupID), 0))
	strDocID				= GetSafeID(Request("DOCID"), "0")

	If nGroupID <> -1 Then
		Set objGroupInfo	= objNSNET.GetSchoolDocsGroupInfo(nGroupID)
		nServiceNum			= GetSafeLng(objGroupInfo("SERVICE_NUM"), 0)
	End If
End Sub

Function GetPageTitle()
	GetPageTitle = IIf(strDocID = "0", obLanguage("SetupSchoolResources", "kTitleSDDocumentCreate", strFunctionalityType), obLanguage("SetupSchoolResources", "kTitleSDDocumentEdit", strFunctionalityType))
End Function

Sub Main
	On Error Resume Next
	If nGroupID <> -1 Then
		strGroupName = objNSNET.GetSchoolDocsGroupName(nGroupID)
		TestError(obLanguage("ResourceGroups","kCantGetGroupName"))
	Else
		strGroupName = ""
	End If

	If strDocID <> "0" Then
		Set objDocInfo = objNSNET.GetSchoolDocInfo(strDocID)
		TestError(obLanguage("SetupSchoolResources","kCantGetDocInfo",strFunctionalityType))

		If objDocInfo.EOF Then
			GenerateError(obLanguage("SetupSchoolResources","kCantGetDocInfo",strFunctionalityType))
		End If

		strFileNameOrig		= GetSafeStr(objDocInfo("FILENAME_ORIG"), kMaxLen_FileName, "")
		strDocName			= GetSafeStr(objDocInfo("DOCNAME"), kMaxLen_DocName, Null)
		strDescr			= GetSafeStr(objDocInfo("DESCRIPTION"), kMaxLen_Descr, "")
		strAuthor			= GetSafeStr(objDocInfo("NICKNAME"), kDisplayNameLen, "")
		dtDocDate			= GetSafeDate(objDocInfo("DOCDATE"), Null)
	Else
		strDocName	= ""
		strDescr	= ""
		strAuthor	= strUserName
		dtDocDate	= NSNow()
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stSchoolDocGroupID, nGroupID)
End Sub

Sub onHead()
	Dim i%>

	<script type="text/javascript">
		<%Call WriteCheckAttachmentSizeJsScript()%>

		function canSubmit() {
			var form = document.forms["DocEdit"];

			<%If strDocID = "0" Then%>
				var sFileName = trimStr(form.elements["file"].value);

				if(sFileName == '') {
					alert(language.Generic.SetupSchoolResources.kErrEmptyFileName);
					form.elements["file"].focus();
					return;
				}
			<%End If

			If nServiceNum = 5 Then%>
				if(!IsValidFileExt(sFileName)) {
					alert('<%=(obLanguage("SetupSchoolResources","kErrInvalidFileExt") & " " & str5ServiceFileExts)%>');
					form.elements["file"].focus();
					return;
				}
			<%End If%>

			if(trimStr(form.elements["DOCNAME"].value ) == "") {
				alert(language.Generic.SetupSchoolResources.kErrEmptyDocName);
				form.elements["DOCNAME"].focus();
				return false;
			}

			if(!checkAreaLength(form.elements["DESCR"], <%=kMaxLen_Descr%>, '<%=obLanguage("SetupSchoolResources","kDescr")%>'))
				return false;

			return true;
		}

		var arrValidExts = new Array();<%
		For i = 0 To UBound(arr5ServiceFileExts)%>
			arrValidExts[<%=i%>]='<%=arr5ServiceFileExts(i)%>';<%
		Next%>

		function IsValidFileExt(sFileName) {
			var nPos = sFileName.lastIndexOf('.');
			if(nPos < 0)
				return false;

			var sExt = sFileName.substring(nPos + 1).toUpperCase();
			for (var i = 0; i < arrValidExts.length; i++) {
				if (sExt == arrValidExts[i])
					return true;
			}
			return false;
		}

		function Back() {
			goBack(document.DocBack, 'SchoolDocsEdit.asp');
		}

		function saveChanges() {
			ok_check_db('DocEdit', 'FileDocSave.asp');
		}
	</script><%
End Sub

Sub DrawButtons()
	Call ButtonSave("saveChanges()", obLanguage("Common","kSave"))
	Call ButtonReset("resetScreen('DocEdit')", obLanguage("Common","kCancel"))
End Sub

Sub onDrawPage()%>
	<FORM NAME="DocEdit" METHOD="post" ENCTYPE="multipart/form-data"  onsubmit="return false;" class="form-horizontal form-edit">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PGRID",nGroupID, "DOCID",strDocID, "ACT",strAct))%><%

		Call DrawButtonPanel()

		Call DrawReadonlyRow(obLanguage("ResourceGroups","kGroupName") & ":", strGroupName)

		If strDocID <> "0" Then
			Call DrawReadonlyRow(obLanguage("SetupSchoolResources", "kExistingDocFile") & ":", strFileNameOrig)
		End If

		Call DrawInputRow(obLanguage("SetupSchoolResources", "kDocName"), strDocName, "DOCNAME", "text", 50, kMaxLen_DocName, "")
		Call DrawInputRow(obLanguage("SetupSchoolResources", "kDescr"), strDescr, "DESCR", "area", 50, 4, "")
		Call DrawReadonlyRow(obLanguage("SetupSchoolResources", "kAuthor"), strAuthor)
		Call DrawReadonlyRow(obLanguage("SetupSchoolResources", "kPublicationDate"), Date2Str(dtDocDate))
		Call DrawFileInputRow(IIf(strDocID = "0", obLanguage("SetupSchoolResources","kDocFile"), obLanguage("SetupSchoolResources","kNewDocFile")))%>
	</FORM>

	<FORM NAME="DocBack" METHOD="post">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("PGRID",nGroupID))%>
	</FORM>
<%End Sub%>