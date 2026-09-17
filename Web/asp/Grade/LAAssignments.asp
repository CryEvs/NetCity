<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/teacher.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClasses_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommon.asp" -->
<!-- #INCLUDE FILE="../scripts/PrintCommonJs.asp" -->
<!-- #INCLUDE FILE="Grade_inc.asp" -->
<!-- #INCLUDE FILE="../scripts/dateinput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
'	LAID=<LA ID>
'	ADT=<Start Date>
'	DDT=<End Date>

Const clrSelected = " bgcolor=""#FEE6C5"""

'Array indices
Const indDueDate	= 0
Const indID			= 1
Const indName		= 2
Const indType		= 3
Const indResults	= 4

Dim bJuniorLA, bIsDeleted
Dim strLAID, strLAName, strLAURL, strAID, strLAJID, strBack, strTTSURL
Dim strClassName, strSubjClassName
Dim arrList

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kLAAssignments") & ": <U>" & GreenText(DB2HTML(strLAName)& IIF(bIsDeleted," "&obLanguage("LearnApp","kDeleted"),"")) & "</U>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningApplications
End Function

Function GetPageTabItem()
	If Not IsDull(strBack) Then
		If InStr(strBack, "skysmart") > 0 Then
			GetPageTabItem =  TabItem_tbSkySmart
		Else
			GetPageTabItem =  TabItem_tbQA
		End If
	Else
		GetPageTabItem =  TabItem_tbQA
	End If
 End Function

Sub ReadState_Special()
	Dim strLAID_Request
	Dim strStateLa
	strBack = GetSafeStr( Request("LABACK"), -1, "" )
	If IsDull(strBack) Then
		strBack = GetSafeStr( Request("Back"), -1, "" )	
	End If
	strStateLA = GetSafeStr(Request("STATELA"), -1, "")
	If strStateLA <> "" Then Call obTokenMgr.SetData(strToken, stLaState, strStateLA)

	strLAID_Request = ParseLA( GetSafeStr( Request("LAID"), -1, "" ) )
	strLAID = GetSafeActivityID( strLAID_Request )
	strTTSURL = GetSafeStr(Request("TTSURL"), -1, "")

	bIsDeleted = False
	If strLAID = "" Then
		strLAID_Request = ParseLA( obTokenMgr.GetData(strToken, stCurrLAID) )
		strLAID = GetSafeActivityID( strLAID_Request )
		strLAName = GetSafeStr(obTokenMgr.GetData(strToken, stActName), -1, Null)
		strLAURL = GetSafeStr(obTokenMgr.GetData(strToken, stLAURL), -1, Null)
		If GetSafeStr(obTokenMgr.GetData(strToken, stLADeleted), 1, "N")="Y" Then bIsDeleted = True
	Else
		strLAName = (GetSafeStr( Request("LANAME"), -1, "" ))
		strLAURL = (GetSafeStr( Request("LAURL"), -1, "" ))
		If bJuniorLA Then
			Call obTokenMgr.SetData(strToken, stCurrLAID, strLAID & "|" & strLAJID)
		Else
			Call obTokenMgr.SetData(strToken, stCurrLAID, strLAID)
			If GetSafeStr(Request("LADELETED"), 1, "N")="Y" Then bIsDeleted = True
		End If
		Call obTokenMgr.SetData(strToken, stActName, strLAName)
		Call obTokenMgr.SetData(strToken, stActId, strLAID)
		Call obTokenMgr.SetData(strToken, stLAURL, strLAURL)
		Call obTokenMgr.SetData(strToken, stLADeleted, IIF(bIsDeleted,"Y","N"))
	End If

	strAID = GetSafeID(Request("AID"), "0")
	If strAID = "0" Then
		strAID = GetSafeID(obTokenMgr.GetData(strToken, stCrMngmAssignmentID), "0")
	End If
	strCalendarTargetForm = "LAAssignments"
	strCalendarTargetAction = "LAAssignments.asp"
End Sub

Sub WriteState_Special()
End Sub

Sub Main_Before()
	Dim rsAssignments

	' For this page the test of existing of students is enough
	bNoStudents = CBool(objNSNET.IsEmptyCSG(strSubjClassID))

	bMayAddLAAssignment = Not readonly

	If Not bNoStudents Then
		If bJuniorLA Then
			Set rsAssignments = objNSNET.GetLACoursesAssignmentsWithResCount(strSubjClassID, strLAID, strLAJID, dtStartDate, dtEndDate)
		Else
			Set rsAssignments = objNSNET.GetLAAssignmentsWithResCount(strSubjClassID, strLAID, dtStartDate, dtEndDate)
		End If
		If Not rsAssignments.EOF Then
			arrList = rsAssignments.GetRows()
			bNoAssignments = False
		Else
			bNoAssignments = True
		End If
		rsAssignments.Close
		Set rsAssignments = Nothing
	End If
End Sub

Sub onHead_Special()
%>
function Back() {
	goBack(document.QAssignment, '<%=strBack%>');
}
<%
If readonly Then Exit Sub
	If bIsDeleted Then Exit Sub%>
var wndApp = null;
function OpenQAApp() {
	var url = urlHelper.makeUrl("/asp/RemoteHostProxy.asp", { PROXYURL: "<%=strLAURL%>", TTSURL: "<%=IIf(IsDull(strTTSURL), GetTTSURL(), strTTSURL)%>", LAID: "<%=IIf( bJuniorLA, strLAJID, strLAID )%>" });
	var winOptions = { url: url, name: '_blank', specs: 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=950,height=660', winChild: wndApp };
	windowOpen( winOptions );
	wndApp = winOptions.winChild;
//	maximize(wndApp);
}<%If Not bOK Then Exit Sub

	If bNoAssignments Then Exit Sub%>
		function EditAssignment( aid, type ) {
			var form = document.Assignments;
			form.AID.value = aid;
			form.ATYPE.value = type;
			DoSubmit(form, "");
		}
function DelAssignments() {
	var form = document.DelForm;
	if( form.AID ) {
		if( form.AID.length ) {
			for( var i = 0; i < form.AID.length; i++ ) {
				if( form.AID[i].checked ) {
					$.show.confirmation(language.Generic.Grade.kDelAssignsConfirm).then(function() {
						$(document).trigger('showProcessing');
						DoSubmit(form, "");
					});
					return;
				}
			}
		}
		else {
			if(form.AID.checked) {
				$.show.confirmation(language.Generic.Grade.kDelAssignsConfirm).then(function(){
					$(document).trigger('showProcessing');
					DoSubmit(form, "");
				});
				return;
			}
		}
	}

	alert(language.Generic.Grade.kNoAssignSelected);
}<%
End Sub


Sub DrawFilters_Before()
End Sub

Sub DrawButtons()
	If Not readonly Then
		If Not bIsDeleted Then
			Call Button("OpenQAApp();", obLanguage("Grade","kCreateAssignment"), obLanguage("Grade","kCreateAssignment"), "")
		End If
		If Not bNoAssignments Then
			Call ButtonDel("DelAssignments()", obLanguage("Grade","kDeleteAssigns"))
		End If
	End If
End Sub

Sub DrawLinkButtons()
	If Not bNoAssignments Then 
		DrawPrintButtons
	End If
End Sub

Sub onDrawPage()
	If Not bIsDebug Then On Error Resume Next
	If bExit Then Exit Sub%>

	<form name="QAssignment" action="<%
		If strBack = "" Then
			%>/angular/school/activities<%
		Else
			rw strBack
		End If
		%>" method="post">
		<%=WriteObligatoryTags()%>
	</form>

	<form name="QA" action="/asp/Curriculum/EditAssignment.asp" method="post">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="AURL" value="<%=strLAURL%>">
		<input type="hidden" name="AID" value="-1">
		<input type="hidden" name="ASL" value="">
		<input type="hidden" name="QA" value="1">
		<input type="hidden" name="BACK" value="/asp/Grade/LAAssignments.asp">
		<input type="hidden" name="LA_Mode" value="1">
	</form>

	<form name="Assignments" action="/asp/Curriculum/EditAssignment.asp" method="post">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="AID" value>
		<input type="hidden" name="ATYPE" value>
		<input type="hidden" name="BACK" value="/asp/Grade/LAAssignments.asp">
		<input type="hidden" name="LA_Mode" value="1">
	</form>

	<form name="LAAssignments" action="LAAssignments.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%Call DrawButtonsFilters( True, "LAAssignments" )%>
	</form>

	<form name="DelForm" action="DelAssignments.asp" method="post">
		<%=WriteObligatoryTags()%>
		<%Call DrawAssignmentsTable()%>
	</form><%
End Sub

Sub DrawAssignmentsTable()
	If Not bIsDebug Then On Error Resume Next

	Dim strColor, i
	Dim strVaildIDs
	Dim strStatus

	If bNoAssignments Then
		DrawInfo obLanguage("Grade","kNoAssignments"), False
		Exit Sub
	End If

	If Not readonly Then
		strVaildIDs = "a"
	End If

	rw "<div class=""row print-block""><div class=""col-md-6""><table class=""table table-bordered table-print"">"
	rw "<tr class=""info""><th>" & obLanguage("Grade","kExecDate") & "</th><th>" & obLanguage("Grade","kAssignTheme") & "</th>" & ShowDelCellHeader(1) & "</tr>"

	strStatus = IIf(readonly, obLanguage("Grade","kViewAssignment"), obLanguage("Grade","kEditAssignment"))
	For i = 0 To UBound(arrList,2)
		If CStr(strAID) = CStr(arrList(indID,i)) Then strColor = clrSelected Else strColor = ""

		rw "<tr>"
		rw "<td class=""text-center""" & strColor & "><span name=""a" & arrList(indID,i) & """>" & Date2Str_NoYear(arrList(indDueDate,i)) & "</span></td>"
		rw "<td " & strColor & ">"
		If readonly Then
			rw DB2HTML(arrList(indName,i))
		Else
			rw ShowAnchor("EditAssignment('" & arrList(indID,i) & "','" & arrList(indType,i) & "')", strStatus, DB2HTML(arrList(indName,i)), "")
		End If
		rw "</td>"
		If Not readonly Then
			rw "<td class=""text-center""" & strColor & ">"
			If CLng(arrList(indResults,i)) > 0 Then
				rw obLanguage("Grade","kMarksExists")
			Else
				rw "<input type=""checkbox"" name=""AID"" value=""" & arrList(indID,i) & """>"
				strVaildIDs = strVaildIDs & arrList(indID,i) & "a"
			End If
			rw "</td>"
		End If
		rw "</tr>"

	Next
	rw "</table></div></div>"

	If Not readonly Then
		Call obTokenMgr.SetData(strToken, stAvailableSID, strVaildIDs)
	End If
End Sub
%>
