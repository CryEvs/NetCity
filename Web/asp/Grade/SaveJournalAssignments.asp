<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/assignment.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim i, strAID, strAction, arrData, n
Dim objTKRAssignments, nADELCount
Dim strSaveMessage
Dim nWeightsCnt, strCMID, nWeight, j
Dim transaction
Dim dtCurTime, strSubjClassID

On Error Resume Next

If Not HasUserRight(arJournalEditAll) And Not HasUserRight(arJournalEditSelf) Then GenerateError obLanguage("Common","kErrPageAccess")

strAction = GetSafeStr( Request("ACT"), 10, "" )

If strAction = "save" Then
	strSubjClassID = GetSafeID(obTokenMgr.GetData(strToken, stCurrSubjClass), Null)
	transaction = objNSNET.GetTransaction()
	
	strSaveMessage = ""
	ReDim arrData(1, Request("arr_LID").Count-1)
	n = 0
	For i = 0 To UBound(arrData, 2)
		arrData(1, n) = GetSafeLng(Request("arr_LID")(i+1), -1)
		If GetSafeLng(Request("Old_LID")(i+1), -1) <> arrData(1, n) Then
			arrData(0, n) = GetSafeLng(Request("CLMID_")(i+1), Null)
			n = n + 1
		End If
	Next

	If n > 0 Then
		ReDim Preserve arrData(1, n-1)
	
		Call objNSNET.SaveClassMeetingLessons_WT(transaction, arrData)
		TestErrorWithTransaction transaction,  obLanguage("Grade","kErrCantChangeLesson")
	
		strSaveMessage = obLanguage("Grade","kLessonsThemsSaveSuccess")
	End If

	If Request("Weight").Count > 0 Then
		nWeightsCnt = Request("Weight").Count

		ReDim arrData(1, nWeightsCnt - 1)
		For i = 0 To nWeightsCnt - 1
			arrData(0, i) = GetSafeID(Request("WeightedAID")(i+1), Null)
			arrData(1, i) = GetSafeLng(Request("Weight")(i+1), Null)
		Next

		Call objNSNET.SaveAssignmentsWeights_WT(transaction, arrData)
		TestErrorWithTransaction transaction, obLanguage("Grade","kErrCantSaveAssignmentsWeights")
	
		If IsDull(strSaveMessage) Then
			strSaveMessage = obLanguage("Grade","kAssignmentsWeightsSaveSuccess")
		Else
			strSaveMessage = strSaveMessage & vbCrLf & obLanguage("Grade","kAssignmentsWeightsSaveSuccess")
		End If
	End If

	objNSNET.CommitTransaction(transaction)
End If

If strAction = "save" Then
	Call WriteJsonResult(strSaveMessage, False, 0)
Else
	RedirectTo "/angular/school/journal/assignments/",Null
End If%>