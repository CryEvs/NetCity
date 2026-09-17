<!-- #INCLUDE FILE="include/header.asp" -->
<%
strPageTitle = PRODUCT_NAME & " - Результаты"

Sub CheckLACCError()
    If Err <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode = 10007 Then Call RedirectToScreen("login.asp")
    If lacc.LastErrorCode = 10011 Then Exit Sub
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

Call CheckSession
Call CheckAssignment
Call OpenDatabase
Call CheckQuestions

Dim adoCmd1, adoRS
Set adoCmd1 = Server.CreateObject("ADODB.Command")
adoCmd1.ActiveConnection = adoConn
adoCmd1.Prepared = True
adoCmd1.CommandText = "SELECT ChoiceNumber FROM Choices WHERE (QuestionID=?) AND (CValue>0)"
adoCmd1.Parameters.Append adoCmd1.CreateParameter( "QuestionID", adInteger, adParamInput, 4, 0 )

Dim nScore, nPrevScore, nAnsweredRight, bSecondAttempt, bIsCompleted, i, nWatermark, nPoints, nMaxPoints

nAnsweredRight = 0
nScore = 0
bSecondAttempt = False
bIsCompleted = False

Dim ResByQuestions
For i = 0 To UBound(arrQuestions)
	If arrQuestions( i, QST_USERANSWER ) = 0 Then Call RedirectToScreen("test.asp")

	If arrQuestions( i, QST_TYPE ) = "MCQ" Or arrQuestions( i, QST_TYPE ) = "SEQ" Or arrQuestions( i, QST_TYPE ) = "WEB" Or arrQuestions( i, QST_TYPE ) = "PFQ" Then
		adoCmd1("QuestionID") = arrQuestions( i, QST_ID )
		Set adoRS = adoCmd1.Execute
		CheckADOError
		If Not adoRS.EOF Then
			If arrQuestions( i, QST_USERANSWER ) = CLng(adoRs("ChoiceNumber")) Then nAnsweredRight = nAnsweredRight + 1
		End If
	End If
	ResByQuestions = ResByQuestions & arrQuestions( i, QST_ID ) & "," & arrQuestions( i, QST_TYPE ) & "," &  arrQuestions( i, QST_USERANSWER ) & ";"
Next

Dim Item, ItemRes, strClassID

strClassID = Storage.GetData( strID, "ClassID" )

Set Item = lacc.GetStudentAssignmentInfo( strAccessToken, strAssignmentID, SCORE )
Set ItemRes = lacc.GetStudentAssignmentInfo( strAccessToken, strAssignmentID, RESULTSBYQUESTIONS )
CheckLACCError

bSecondAttempt = Not IsEmptyStr( Item.Field(SCORE) )
nPrevScore = GetSafeLng( Item.Field(SCORE), 0 )
		
nWatermark = GetSafeLng( Storage.GetData( strID, "Watermark" ), 0 )
'Calculate score
nScore = Round( nAnsweredRight * RESULT_RATIO / (UBound(arrQuestions)+1) )
If bSecondAttempt Then
	nScore = CLng( ( nScore + nPrevScore ) / 2 )
	bIsCompleted = True
Else
	If nScore >= nWatermark*RESULT_RATIO/100 Then bIsCompleted = True
End If
If nScore < 0 Then nScore = 0

Dim strTransactionID
strTransactionID = lacc.BeginTrans( strAccessToken )
If IsEmptyStr(strTransactionID) Then
	Call HandleError( "Не могу создать транзакцию", Err.Number, Err.Description )
End If

Dim nCurrPoints, nNewLexile
nCurrPoints = 0
nNewLexile = 0

Dim nLexS, nCurrLexPoints, nTotalPoints, nCurrLexTests, nTotalTests, nTotalScore

If bIsCompleted Then
	Call lacc.SetScoreAnswers( strTransactionID, strAccessToken, strAssignmentID, nScore )
	CheckLACCError
	Call lacc.SetStudentAssignmentInfo( strTransactionID, strAccessToken, strAssignmentID, SCORE, "" )
	CheckLACCError
	Dim prevRes
	prevRes = GetSafeStr( ItemRes.Field(RESULTSBYQUESTIONS))
	If prevRes<>"" Then
		ResByQuestions = prevRes & "|" & ResByQuestions
    Else		    
        ResByQuestions = CStr(nTestID) & "|" & ResByQuestions
    End If
	Call lacc.SetStudentAssignmentInfo( strTransactionID, strAccessToken, strAssignmentID, RESULTSBYQUESTIONS, ResByQuestions )
	CheckLACCError
Else
	Call lacc.SetStudentAssignmentInfo( strTransactionID, strAccessToken, strAssignmentID, SCORE, nScore )
	CheckLACCError
	
	ResByQuestions = CStr(nTestID) & "|" & ResByQuestions
	Call lacc.SetStudentAssignmentInfo( strTransactionID, strAccessToken, strAssignmentID, RESULTSBYQUESTIONS, ResByQuestions )
	CheckLACCError
End If

If Not lacc.CommitTrans( strAccessToken, strTransactionID ) Then
	Call HandleError( "Не могу завершить транзакцию", lacc.LastErrorCode, lacc.LastError )
End If

Call Storage.SetData( strID, "IsGraded", "Y" )
Call Storage.SetData( strID, "GradedAssignmentID", strAssignmentID )
Call Storage.SetData( strID, "GradedTestID", nTestID )
Call Storage.SetData( strID, "SecondAttempt", bSecondAttempt )
Call Storage.SetData( strID, "AnsweredRight", nAnsweredRight )
Call Storage.SetData( strID, "Score", nScore )
Call Storage.SetData( strID, "IsCompleted", bIsCompleted )
Call RedirectToScreen("results.asp")
%>
