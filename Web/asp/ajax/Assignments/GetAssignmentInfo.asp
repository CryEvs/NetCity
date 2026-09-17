<!-- #INCLUDE VIRTUAL="/asp/headerajax.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/html_url.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/UI.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/attachments_inc.asp -->

<% ' © 2007-2016 IRTech. All rights reserved.
'	AID=<Assignment ID>

Dim bJuniorLA, bIsResult, bIsManual, bIsDeleted
Dim strAID, strSubjClassID, strStudentID
Dim nAssignTypeId
Dim strTTSURL, strEntryURL, strResultsURL
Dim strStudentName, strLaName, strProductId
Dim objRs, objAssignmentRs, objLessonInfo, showRowsWithCE, bHomeAssignment, bTestAssignment
Dim strTitle, strTable
Dim result, oAttachmentsComponent

strSubjClassID		= GetSafeID(Request("CID"), NULL)
strStudentID		= GetSafeID(obTokenMgr.GetData(strToken, stCurrStudent), NULL)
strAID				= GetSafeID(Request("AID"), NULL)
nAssignTypeId		= GetSafeLng(Request("TP"), NULL)
bHomeAssignment		= (nAssignTypeId = PreDefinedAssignmentType_HomeWork)
bTestAssignment		= (nAssignTypeId = PreDefinedAssignmentType_Test)

If Not HasUserRight(arAssignmentsViewComplete) Then GenerateError obLanguage("Common", "kErrPageAccess")

Set objAssignmentRs = objNSNET.GetStudentAssignmentInfoWithLessonAndSubject(strStudentID, strAID)

Set objLessonInfo = objNSNET.GetLessonInfoWithContentElements(GetSafeLng(objAssignmentRs("LESSONID"), -1))
showRowsWithCE = ShowRowsWithContentElements()

Dim objJName
bIsDeleted = False
If objAssignmentRs("ACTIVITYID") = "courses" Then
	Set objJName	= objNSNET.GetAssignmentsCoursesInfo(strAID)
	strProductId	= objJName("productid")
	strLaName		= objLa.GetProductName(strProductId)
	bJuniorLA		= True
Else
	strLaName = objAssignmentRs("ACTIVITYNAME")
	bJuniorLA = False
	If GetSafeStr(objAssignmentRs("ISDELETED"), 1, "N") = "Y" Then bIsDeleted = True
End If
	
If objAssignmentRs.EOF Then GenerateError "Это задание уже было выполнено."

Set oAttachmentsComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IFileAttachmentsComponent")
Set result = oAttachmentsComponent.GetFileAttachmentInfoAssignment(strAID)
If Not result.IsSuccess Then GenerateError result.Message

strEntryURL			= objAssignmentRs("ENTRYURL")
strResultsURL		= objAssignmentRs("RESULTSURL")
bIsResult			= Not IsDull(objAssignmentRs("RESULT"))
bIsManual			= IsNull(objAssignmentRs("PROBLEMNAME"))
bTestAssignment		= (Not bIsManual And bTestAssignment)

strTitle = IIF(bHomeAssignment, obLanguage("Curriculum","kTitleHAssignmentDetails"), obLanguage("Curriculum","kTitleAssignmentDetails")) & obLanguage("Common","kStudent_r",strFunctionalityType) & ": " & DB2HTML(objAssignmentRs("NAME")) &_
		" (" & DB2HTML(objAssignmentRs("LASTNAME")) & " " & DB2HTML(objAssignmentRs("FIRSTNAME")) & " " & DB2HTML(objAssignmentRs("MIDDLENAME")) & ")"

Call GetTable()

TestError Err.Description

Dim responseResult
Set responseResult = new JSONResult
Call responseResult.AddData("strTitle", strTitle)
Call responseResult.AddData("strTable", strTable)

Response.Write responseResult

Function ShowRowsWithContentElements()
	ShowRowsWithContentElements = False

	If Module_QA_Available() And Not objLessonInfo.EOF Then
		ShowRowsWithContentElements = Not IsNull(objLessonInfo("CONTENTELEMENT"))
	End If
End Function

Sub GetTable()
	Call SetFiltersWidth("", "col-md-4 col-sm-4", "col-md-8 col-sm-8")

	strTable = "<form name=""AssignmentInfo"" class=""form-horizontal form-xs"">"

	strTable = strTable & objHtmlHelper.DrawTitleRow(IIF(bTestAssignment, obLanguage("Assignment","kATAssignment"), IIF(bHomeAssignment, obLanguage("Assignment","kHomeAssignment"), obLanguage("Assignment","kATAssignmentTheme"))), DB2HTML(objAssignmentRs("ASSIGNMENTNAME")))
	strTable = strTable & objHtmlHelper.DrawTitleRow(IIF(bTestAssignment, obLanguage("Curriculum","kDueDateStudent"), IIF(bHomeAssignment, obLanguage("Curriculum","kDueDateStudent"), obLanguage("Curriculum","kDateLesson"))), FormatDateTime(objAssignmentRs("DUEDATE"), vbLongDate))

	strTable = strTable & objHtmlHelper.DrawMultipleRows(IIF(bHomeAssignment, obLanguage("Curriculum","kTeachersDetails"), obLanguage("Curriculum","kNotes")), DB2HTML_BR_URL(objAssignmentRs("ADESCR")))

	If showRowsWithCE Then
		strTable = strTable & objHtmlHelper.DrawTitleRow(obLanguage("Curriculum","kCodeElementContent"), DB2HTML(objLessonInfo("CODECONTENTELEMENT")))
		strTable = strTable & objHtmlHelper.DrawTitleRow(obLanguage("Curriculum","kElementContent"), DB2HTML(objLessonInfo("CONTENTELEMENT")))
	End If

	If Not bIsManual Then
		strTable = strTable & objHtmlHelper.OpenFormGroup(obLanguage("Common","kLearnApp"))
		
		If HasUserRole(rlParent) Then
			strTable = strTable & DB2HTML(strLaName)
		Else
			If bIsResult Then
				If IsDull(strResultsURL) Or bIsDeleted Then
					strTable = strTable & DB2HTML(strLaName)
				Else
					strTable = strTable & ShowAnchor ("ShowResults('" & CStr(strResultsURL) & "','" & strStudentID & "','" & DB2Java(objAssignmentRs("AID")) & "','" & strProductId & "');", obLanguage("Curriculum","kEnterInto") & " " & DB2Java(strLaName), strLaName, "")
				End If
			ElseIf Not (IsDull(strEntryURL) Or bIsDeleted) Then
				strTable = strTable & ShowAnchor ("StartLA('" & CStr(strEntryURL) & "','" & strSubjClassID & "','" & DB2Java(objAssignmentRs("AID")) & "','" & strProductId & "');", obLanguage("Curriculum","kEnterInto") & " " & DB2Java(strLaName), strLaName, "")
			Else
				strTable = strTable & DB2HTML(strLaName)
			End If
		End If

		strTable = strTable & objHtmlHelper.CloseFormGroup()

		strTable = strTable & objHtmlHelper.DrawTitleRow(obLanguage("Assignment","kATAssignmentTheme"), DB2HTML(objAssignmentRs("PROBLEMNAME")))
	End If

	strTable = strTable & objHtmlHelper.OpenFormGroup(obLanguage("Common","kAttachedFiles"))

	If Ubound(result.data) > -1 Then
		Dim i, strAttachments, arrFiles, strTitle
		arrFiles = result.data

		strTable = strTable & "<div class=""file-attachment-block multiple"">"

		For i = 0 To UBound(arrFiles)
			strTitle = arrFiles(i).FileName

			If Not IsDull(arrFiles(i).Description) Then
				strTitle = strTitle & " " & arrFiles(i).Description
			End If
			
			strTable = strTable & "<div class=""file-attachment"" onclick=""FileAttachmentCtrl.openAttachment('" & arrFiles(i).FileName & "', " & arrFiles(i).FileAttachmentId & ");"" title=""" & strTitle & """>"
			strTable = strTable & "<span class=""file-name"">" & arrFiles(i).FileName & "</span>"

			If Not IsDull(arrFiles(i).Description) Then
				strTable = strTable & " <span class=""file-description"">" & arrFiles(i).Description & "</span>" 
			End If
			strTable = strTable & "</div>"
			
			strAttachments = strAttachments & arrFiles(i).FileAttachmentId & ","
		Next

		strTable = strTable & "</div>"

		Call AppendStateDocs(strAttachments)
	End If

	strTable = strTable & objHtmlHelper.CloseFormGroup()
	strTable = strTable & "</form>"

	Call RestoreDefFiltersWidth()
End Sub%>