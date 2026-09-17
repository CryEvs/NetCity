<!-- #INCLUDE FILE="include/header.asp" -->
<%
Sub CheckLACCError()
    If Err <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode = 10007 Then Call RedirectToScreen("login.asp")
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

Call OpenDatabase
Call CheckSession  ' PRODUCT_NAME is known after OpenDatabase

Call Storage.SetData( strID, "Questions", Null )

'Check if we have changed the class
Dim strClassName, strClassInfo
strClassName = dictParams.Item("ClassName")
strClassInfo = dictParams.Item("ClassInfo")
If Not IsEmptyStr(strClassName) And Not IsEmptyStr(strClassInfo) Then
	Dim arrClassInfo
	arrClassInfo = Split( strClassInfo, Chr(1) )
	If UBound(arrClassInfo) = 2 And arrClassInfo(0) <> Storage.GetData( strID, "ClassID" ) Then
		Call Storage.SetData( strID, "ClassID", arrClassInfo(0) )
		Call Storage.SetData( strID, "TeacherID", arrClassInfo(1) )
		Call Storage.SetData( strID, "TeacherName", arrClassInfo(2) )
		Call Storage.SetData( strID, "ClassName", strClassName )
		Call Storage.SetData( strID, "Assignments", Null )
	End If
End If

'Check if we have to reload assignment
Dim strReload
strReload = dictParams.Item("Reload")
If Not IsEmptyStr(strReload) Then
	Call Storage.SetData( strID, "Assignments", Null )
End If

Dim i, List, arrAssignments
arrAssignments = Storage.GetData( strID, "Assignments" )

Dim adoCmd, adoCmd1, adoRs, Item
If IsEmpty(arrAssignments) Or IsNull(arrAssignments) Then
    Set List = lacc.GetAssignment( strAccessToken, Storage.GetData( strID, "ClassID" ), LAID_A )
    CheckLACCError

	Set adoCmd = Server.CreateObject("ADODB.Command")
	adoCmd.ActiveConnection = adoConn
	adoCmd.Prepared = True
	adoCmd.CommandText = "SELECT Subject FROM Subjects, Articles, TESTVIEW('" & strTestSuffix & "') T " &_
		"WHERE (Subjects.SubjectID=Articles.SubjectID) AND (T.ArticleID=Articles.ArticleID) AND (T.TestID=?)"
	adoCmd.Parameters.Append adoCmd.CreateParameter( "TestID", adInteger, adParamInput, 4, 0 )

	Set adoCmd1 = Server.CreateObject("ADODB.Command")
	adoCmd1.ActiveConnection = adoConn
	adoCmd1.Prepared = True
	adoCmd1.CommandText = "SELECT Subject FROM Subjects, Articles WHERE (Subjects.SubjectID=Articles.SubjectID) AND (Articles.ArticleID=?)"
	adoCmd1.Parameters.Append adoCmd1.CreateParameter( "ArticleID", adInteger, adParamInput, 4, 0 )
	If List.Count > 0 Then
		ReDim arrAssignments( List.Count - 1, ASSIGNMENT_LAST_FIELD )
		Dim strDate, strParam, TA_ID
		i = 0
		For Each Item In List
		    strDate = Item.Field("duedate")
		    arrAssignments( i, TEST_ID )			= Item.Field("parameters")
		    arrAssignments( i, ASSIGNMENT_ID )      = Item.Field("assignmentid")
		    arrAssignments( i, ASSIGNMENT_NAME )	= Item.Field("assignmentname")
		    arrAssignments( i, DUE_DATE )		= CDate(strDate) ' DateSerial( Mid(strDate,7), Mid(strDate,1,2), Mid(strDate,4,2) )
			TA_ID = arrAssignments( i, TEST_ID )
			If Left(TA_ID,1)<>"A" Then
				adoCmd("TestID") = TA_ID
				Set adoRs = adoCmd.Execute()
			Else
				adoCmd1("ArticleID") = Mid(TA_ID,2)
				Set adoRs = adoCmd1.Execute()
			End If

			CheckADOError
			If Not adoRS.EOF Then arrAssignments( i, SUBJECT ) = adoRs("Subject")

		    i = i + 1
		Next
		
		Call Storage.SetData( strID, "Assignments", arrAssignments )

		Set Item = lacc.GetStudentInfo( strAccessToken, Storage.GetData( strID, "ClassID" ), LAID_A, "" )
		CheckLACCError

		Call Storage.SetData( strID, "QuestionsOrder", GetSafeLng( Item.Field(QUESTIONS_ORDER), 0 ) )
		Call Storage.SetData( strID, "MayReadArticle", GetSafeBool( Item.Field(MAY_READ_ARTICLE), True ) )
		Call Storage.SetData( strID, "ReviewTest", GetSafeBool( Item.Field(REVIEW_TEST), True ) )
		Call Storage.SetData( strID, "Watermark", GetSafeLng( Item.Field(WATERMARK), 0 ) )
		Call Storage.SetData( strID, "FontSize", GetSafeStr( Item.Field(FONT_SIZE) ) )
		Call Storage.SetData( strID, "FontColor", GetSafeStr( Item.Field(FONT_COLOR) ) )
		Call Storage.SetData( strID, "BGColor", GetSafeStr( Item.Field(BG_COLOR) ) )
		Call Storage.SetData( strID, "LAID", LAID_A )
	Else
		Call RedirectToScreen("main_NO.asp")
	End If
End If

Call RedirectToScreen("main_A.asp")
%>
