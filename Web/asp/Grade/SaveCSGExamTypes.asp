<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.


Dim strSubjClassID
Dim i, j
Dim nCount
Dim arrCSGExamTypes, bUse
Dim strTypeID


If Not ( HasUserRight(arTotalsEditAll) Or HasUserRight(arTotalsEditSelf) ) Then GenerateError obLanguage("Common","kErrPageAccess")

strSubjClassID = obTokenMgr.GetData( strToken, stCurrSubjClass )

nCount = Request("TypeID").Count

If nCount > 0 Then
	ReDim arrCSGExamTypes( 1, nCount - 1 )
	' (0, j) - TypeID, (1, j) - Choice
	j = -1
	For i = 1 To nCount
		strTypeID = GetSafeID( Request("TypeID")(i), Null )
		bUse = True
		If IsDull(Request("Use_" & strTypeID)) Then
			If IsDull(Request("IsUsed_" & strTypeID)) Then
				bUse = False
			End If
		End If
		If bUse Then
			j = j + 1
			arrCSGExamTypes(0, j) = CLng( strTypeID )
			arrCSGExamTypes(1, j) = IIf(IsDull(Request("Choice_" & strTypeID)), "N", "Y")
		End If
	Next
	ReDim Preserve arrCSGExamTypes( 1, j )
	
	On Error Resume Next
	Call objNSNET.SaveCSGExamTypes(strSubjClassID, arrCSGExamTypes)
	TestError obLanguage("Grade","kErrCantSaveCSGExamTypes")
End If

RedirectTo GetSafeStr(Request("Back"), 255, "/angular/school/journal/totals"), Null
%>
