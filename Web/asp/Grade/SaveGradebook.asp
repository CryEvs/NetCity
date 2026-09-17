<!-- #INCLUDE FILE="../headernoscreen.asp" -->
<!-- #INCLUDE FILE="../Reports/GradingScale_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim i, j
Dim nCount
Dim strStudentID, strAID, strValidIDs, strSubjClassID, strActivityId
Dim arrStudentResults

On Error Resume Next

If Not HasUserRight( arLAEditSelf ) Then GenerateError obLanguage("Common","kErrPageAccess")

strActivityId = obTokenMgr.GetData( strToken, stCurrLAID )
strActivityId = Left( strActivityId, Instr( 1, strActivityId , "|" ) - 1  )
strValidIDs = GetSafeStr( obTokenMgr.GetData( strToken, stAvailableSID ), -1, "" )
strSubjClassID = obTokenMgr.GetData( strToken, stCurrSubjClass )
strAID = GetSafeID( Request.Form("AID"), Null )
TestError( obLanguage("Common","kInvalidParameter") )

arrGradingScales = GetGrScale(strActivityID, strSubjClassID)

If InStr( strValidIDs, "a" & strAID & "a" ) = 0 Then GenerateError obLanguage("Grade","kErrCantSaveGradeBook")

nCount = Request.Form("S").Count

If nCount > 0 Then
	ReDim arrStudentResults( 4, nCount - 1 )
	' (0, j) - StudentID, (1, j) - Action, (2, j) - Grade, (3, j) - down grade threshold, (4, j) - up grade threshold
	' Actions: 0 - grade, 1 - mandatory, 2 - remove
	For i = 1 To nCount
		strStudentID = GetSafeID( Request.Form("S")(i), Null )
		If InStr( strValidIDs, "s" & strStudentID & "s" ) = 0 Then GenerateError obLanguage("Grade","kErrCantSaveGradeBook")
	
		j = i - 1
		arrStudentResults(0, j) = CLng( strStudentID )
		If Request.Form("G")(i) <> "" Then ' some grade
			arrStudentResults(1, j) = 0
			arrStudentResults(2, j) = GetMarkFromGradeForBase ( GetSafeLng( Request.Form("G")(i), Null ) )
			Call GetBaseThresholdsForMark( GetSafeLng( Request.Form("G")(i), Null ), arrStudentResults(4, j), arrStudentResults(3, j) )
		Else 'no grade
			arrStudentResults(2, j) = Null
			arrStudentResults(3, j) = Null
			arrStudentResults(4, j) = Null
			If Request("M" & strStudentID) = "1" Then ' still mandatory
				arrStudentResults(1, j) = 1
			Else ' optional
				' remove old grade, if exists
				arrStudentResults(1, j) = 2
			End If
		End If
	Next
End If

Call objNSNET.SaveGradeBook(arrStudentResults, strAID, NSNow())
TestError obLanguage("Grade","kErrCantSaveGradeBook")

RedirectTo "Gradebook.asp?", Null

Function GetMarkFromGradeForBase( nGrade )
	Dim i
	i = 0
	If nGrade < arrGradingScales( 0, Ubound( arrGradingScales, 2 ) ) Then
		GetMarkFromGradeForBase = 0
	Else
		While nGrade <> arrGradingScales( 0, i )
		response.Write nGrade & " " & arrGradingScales( 0, i )
			i = i + 1
			If i > Ubound( arrGradingScales, 2 ) And nGrade <> arrGradingScales( 0, i ) Then GenerateError "Некорректная оценка"
		Wend
		GetMarkFromGradeForBase = arrGradingScales( 1, i )
	End If
End Function

Sub GetBaseThresholdsForMark( nGrade, nUpThreshold, nDownThreshold )
    Dim i
    i = 0
    If nGrade < arrGradingScales( 0, Ubound( arrGradingScales, 2 ) ) Then
		nDownThreshold = 0
		nUpThreshold = 0
	Else
	    While nGrade <> arrGradingScales( 0, i )
			i = i + 1
			If i > Ubound( arrGradingScales, 2 ) And nGrade <> arrGradingScales( 0, i ) Then GenerateError "Некорректная оценка"
		Wend
		nDownThreshold = arrGradingScales( 1, i )    
		If i=0 Then 
		    nUpThreshold = 1000
		Else
		    nUpThreshold = arrGradingScales( 1, i-1 ) - 1
		End If
	End If
End Sub
%>
