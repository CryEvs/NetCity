<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
strPageTitle = PRODUCT_NAME & " - Просмотр вопросов"
nInfoType = 0
CheckCNTeacherLogin
Dim nQstNo, nQstCount, strArr, strQuestion, i
Dim nPageNo, nSortOrder, lngSubjectID
Dim strURL
Dim adoRS
Dim nQID, j
Dim nCLID, nTID
nCLID = Request("CLID")
nTID = Request("TID")
'If IsEmptyStr(nCLID) Or IsEmptyStr(nTID) Then HandleFatalError("Неверные параметры")

nTestID = GetSafeLng( Request("Parameters"), 0 )
nPageNo = GetSafeLng( Request("PageNo"), 0 )
nSortOrder = GetSafeLng( Request("SortOrder"), SORT_BY_SUBJECT )
lngSubjectID = GetSafeLng( Request("Subject"), 0 )

Call OpenDatabase

Dim nOLRWPos
nOLRWPos = 1

Set adoRS = adoConn.Execute( "SELECT * FROM CustomTests WHERE TestID=" & nTestID )
Dim nClassID, nTeacherID, bCustomTest
If adoRS.EOF Then
	bCustomTest = False
Else
	bCustomTest = True
	nClassID = adoRS.Fields("ClassID")
	nTeacherID = adoRS.Fields("TeacherID")
End If


adoRS.Close

Sub ReorderQNumbers( theTestID )
	Dim oRS, i, adoSetQNumberCmd
	Set adoSetQNumberCmd = Server.CreateObject("ADODB.Command")
	adoSetQNumberCmd.ActiveConnection = adoConn
	adoSetQNumberCmd.CommandText = _
	    "UPDATE Questions SET QNumber=? WHERE QuestionID=?"
	adoSetQNumberCmd.Parameters.Append adoSetQNumberCmd.CreateParameter( "QNumber", adInteger, adParamInput, 4, 0 )
	adoSetQNumberCmd.Parameters.Append adoSetQNumberCmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, 0 )
	adoSetQNumberCmd.Prepared = True

	Set oRS = adoConn.Execute("SELECT QuestionID FROM Questions WHERE TestID=" & theTestID & " ORDER BY QuestionID")
	CheckADOError
	i=0
	While Not oRS.EOF
		i=i+1
		adoSetQNumberCmd("QuestionID") = oRS("QuestionID")
		adoSetQNumberCmd("QNumber") = i
		call adoSetQNumberCmd.Execute
		CheckADOError
		oRS.MoveNext
	Wend
End Sub
'=================================================================
'========    Update Commands
'=================================================================
Dim adoQCmd
Set adoQCmd = Server.CreateObject("ADODB.Command")
adoQCmd.ActiveConnection = adoConn
adoQCmd.CommandText = _
    "UPDATE Questions SET TypeID=?, QText=? WHERE QuestionID=?"
adoQCmd.Parameters.Append adoQCmd.CreateParameter( "TypeID", adVarChar, adParamInput, 3, 0 )
adoQCmd.Parameters.Append adoQCmd.CreateParameter( "QText", adVarChar, adParamInput, 2000, 0 )
adoQCmd.Parameters.Append adoQCmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, 0 )
adoQCmd.Prepared = True

Dim adoACmd
Set adoACmd = Server.CreateObject("ADODB.Command")
adoACmd.ActiveConnection = adoConn
adoACmd.CommandText = _
    "UPDATE Choices SET CText=?, CValue=? WHERE QuestionID=? AND ChoiceNumber=?"
adoACmd.Parameters.Append adoACmd.CreateParameter( "CText", adVarChar, adParamInput, 500, 0 )
adoACmd.Parameters.Append adoACmd.CreateParameter( "CValue", adInteger, adParamInput, 1, 0 )
adoACmd.Parameters.Append adoACmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, 0 )
adoACmd.Parameters.Append adoACmd.CreateParameter( "ChoiceNumber", adInteger, adParamInput, 1, 0 )
adoACmd.Prepared = True

Dim cQSeqNextVal,cQSeqCurrVal,cTSeqNextVal,cTSeqCurrVal, csOLRW
If DB_Provider = Ora_DB_Provider Then
	cQSeqNextVal = "QUESTIONS_SEQ.NEXTVAL"
	cQSeqCurrVal = "QUESTIONS_SEQ.CURRVAL"
	cTSeqNextVal = "TESTS_SEQ.NEXTVAL"
	cTSeqCurrVal = "TESTS_SEQ.CURRVAL"
	csOLRW = "olrw."
ElseIf DB_Provider = IB_DB_Provider Then
	cQSeqNextVal = "GEN_ID(QUESTIONS_SEQ, 1)"
	cQSeqCurrVal = "GEN_ID(QUESTIONS_SEQ, 0)"
	cTSeqNextVal = "GEN_ID(TESTS_SEQ, 1)"
	cTSeqCurrVal = "GEN_ID(TESTS_SEQ, 0)"
	csOLRW = ""
Else
	HandleFatalError( kInvalidDBProviderConst )
End If
'=================================================================
'========    Clone Commands
'=================================================================
Dim adoCloneQuestionCmd
Set adoCloneQuestionCmd = Server.CreateObject("ADODB.Command")
adoCloneQuestionCmd.ActiveConnection = adoConn
adoCloneQuestionCmd.CommandText = _
    "INSERT INTO Questions " & _
    "   (QuestionID, TestID, QNumber, TypeID, QText, QValue) " & _
    "   SELECT "&cQSeqNextVal&", ?, ?, Q.TypeID, Q.QText, Q.QValue " & _
	"       FROM Questions Q " & _
	"       WHERE Q.QuestionID=?"
adoCloneQuestionCmd.Parameters.Append adoCloneQuestionCmd.CreateParameter( "TestID", adInteger, adParamInput, 4, 0 )
adoCloneQuestionCmd.Parameters.Append adoCloneQuestionCmd.CreateParameter( "QNumber", adInteger, adParamInput, 4, 0 )
adoCloneQuestionCmd.Parameters.Append adoCloneQuestionCmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, 0 )
adoCloneQuestionCmd.Prepared = True

Dim adoCloneChoiceCmd
Set adoCloneChoiceCmd = Server.CreateObject("ADODB.Command")
adoCloneChoiceCmd.ActiveConnection = adoConn
adoCloneChoiceCmd.CommandText = _
    "INSERT INTO Choices " & _
	"   (QuestionID, ChoiceNumber, CText, CValue) " & _
	"   SELECT ?, C.ChoiceNumber, C.CText, C.CValue " & _
	"       FROM Choices C " & _
	"       WHERE C.QuestionID=?"
adoCloneChoiceCmd.Parameters.Append adoCloneChoiceCmd.CreateParameter( "DestinationQuestionID", adInteger, adParamInput, 4, 0 )
adoCloneChoiceCmd.Parameters.Append adoCloneChoiceCmd.CreateParameter( "SourceQuestionID", adInteger, adParamInput, 4, 0 )
adoCloneChoiceCmd.Prepared = True

'==============================================================================
' Delete Question
' request variables used:
'	"QuestionIDtoDelete" - (number) -- Questions.QuestionID of the question to delete
'										when no deletion is to happen this variable is 0
'==============================================================================
' cascade deletion of choices as well will happen below
If bCustomTest And GetSafeLng(Request("QuestionIDtoDelete"), 0)<>0 Then
	call adoConn.Execute( _
	    "DELETE FROM Questions " & _
		"   WHERE Questions.QuestionID=" & GetSafeLng(Request("QuestionIDtoDelete"), 0) )
	CheckADOError
	call ReorderQNumbers(nTestID)
End If
'==============================================================================
' End of Delete question
'==============================================================================

'==============================================================================
' Create New Question
' request variables used:
'	"CreateQuestion" - (number) -- indicates if user wants to create a new question
'==============================================================================
If (GetSafeLng(Request("CreateQuestion"), 0)=1) And bCustomTest Then
	call adoConn.Execute( _
	    "INSERT INTO Questions " & _
		"   (QuestionID, TestID, QNumber, TypeID, QText, QValue) " & _
		"   VALUES " & _
		"   ("&cQSeqNextVal&", " & nTestID & ", 1, 'MCQ', " & _
		"    'Текст вопроса...', 1 )" )
	CheckADOError
	set adoRS = adoConn.Execute("SELECT "&cQSeqCurrVal&" AS theCurrVal FROM DUAL")
	CheckADOError
	nQID = adoRS("theCurrVal")
	adoRS.Close
	For j=1 To 4
		call adoConn.Execute( _
		    "INSERT INTO Choices " & _
			"   (QuestionID, ChoiceNumber, CText, CValue) " & _
			"   VALUES " & _
			"   (" & nQID & ", " & j & ", 'Вариант ответа ... " & j & "', " & Int(j/4) & ")")
		CheckADOError
	Next
	call ReorderQNumbers(nTestID)
End If
'==============================================================================
' End of Create New question
'==============================================================================

'==============================================================================
' Clone Test, Update TestName and Questions-Answers
' request variables used:
'	"SaveTest" - (0/1) -- Indicates if user wants to save TestName and Questions
'	"CloneTest" - (0/1) -- Indicates if user wants to clone the test
'	"TestID" - (number) -- Tests.TestID
'	"TestName" - (string[200]) -- Tests.Name
'	"QIDList" - (array of numbers) -- list of Question.QuestionIDs to update -- consist of <QID>s
'		"Question<QID>" - (text[2000]) -- Questions.QText (for MULTIPLE CHOICE questions)
'		"Question<QID>_[1..4]" - (text[2000]) -- Questions.QText steps (for SEQUENCE questions)
'		"Question<QID>_[1..6]" - (text[2000]) -- Questions.QText fields (for WEB questions)
'	"QTypeID<QID>" - (string[3]) -- Questions.TypeID
'	"Choice<QID>_<ChoiceNumber>" - (string[200]) -- Choices.CText
'	"CorrectChoice<QID>" - (number) -- number of correct choice (with Choices.CValue=1)
'===============================================================================
If GetSafeLng(Request("SaveTest"), 0)=1 And bCustomTest Then
	If Not IsEmptyStr(Request("TestName")) Then
		If nOLRWPos>0 Then
			adoConn.Execute( _
			    "UPDATE "&csOLRW&"Tests " & _
			    "   SET Name=" & ToSQLString( Request("TestName") ) & _
				"   WHERE TestID=" & nTestID )
			CheckADOError
		Else	
			adoConn.Execute( _
			    "UPDATE Tests " & _
				"   SET Name=" & ToSQLString( Request("TestName") ) & " " & _
				"   WHERE TestID=" & nTestID )
			CheckADOError
		End If
	End If
	
	For i=1 To Request.Form("QIDList").Count
		nQID = Request.Form("QIDList")(i)
		If GetSafeStr(Request.Form("QTypeID" & nQID))="MCQ" Or GetSafeStr(Request.Form("QTypeID" & nQID))="SEQ" Or GetSafeStr(Request.Form("QTypeID" & nQID))="WEB" Then ' skip PFQ questions
			' --- Question -----------
			adoQCmd("QuestionID") = CLng(nQID)
			adoQCmd("TypeID") = GetSafeStr(Request.Form("QTypeID" & nQID))
			Select Case GetSafeStr(Request.Form("QTypeID" & nQID))
				Case "SEQ"
					adoQCmd("QText") = GetSafeStr(Request.Form("Question" & nQID & "_1")) & "|" & GetSafeStr(Request.Form("Question" & nQID & "_2")) & "|" & GetSafeStr(Request.Form("Question" & nQID & "_3")) & "|" & GetSafeStr(Request.Form("Question" & nQID & "_4"))
				Case "WEB"
					adoQCmd("QText") = GetPreparedStr(Request.Form("Question" & nQID & "_1"), "") & "|" & GetPreparedStr(Request.Form("Question" & nQID & "_2"), "Текст вопроса...") & "|" & GetSafeStr(Request.Form("Question" & nQID & "_3")) & "|" & GetSafeStr(Request.Form("Question" & nQID & "_4")) & "|" & GetSafeStr(Request.Form("Question" & nQID & "_5")) & "|" & GetSafeStr(Request.Form("Question" & nQID & "_6"))
				Case Else
					adoQCmd("QText") = GetPreparedStr(Request.Form("Question" & nQID), "Пример вопроса с несколькими вариантами ответа")
			End Select
			adoQCmd.Execute
			CheckADOError
			' --- Answers -----------
			For j=1 to 4
				adoACmd("QuestionID") = CLng(nQID)
				adoACmd("ChoiceNumber") = CLng(j)
				if GetSafeLng(Request.Form("CorrectChoice" & nQID), 1) = j then adoACmd("CValue")=1 else adoACmd("CValue")=0
				adoACmd("CText")=GetSafeStr(Request.Form("Choice" & nQID & "_" & j))
				adoACmd.Execute
				CheckADOError
			Next
		End If
	Next
End If

'================================= clone test
If GetSafeLng(Request("CloneTest"), 0)=1 Then
	Dim rsTemp
	' copy the test
	If nOLRWPos>0 Then ' we are in the Online Reader
		call adoConn.Execute( _
		    "INSERT INTO "&csOLRW&"Tests " & _
			"   (TestID, ArticleID, TypeID, Name) " & _
			"   SELECT "&cTSeqNextVal&", T.ArticleID, T.TypeID, 'Свой тест - ' || T.Name " & _
			"       FROM Tests T " & _
			"       WHERE TestID=" & nTestID)
		CheckADOError
		call adoConn.Execute( _
		    "INSERT INTO "&csOLRW&"ProductTest " & _
			"   (ProductId, TestID) " & _
			"   VALUES " & _
			"   ('" & LAID_A & "', "&cTSeqCurrVal&")")
		CheckADOError
	Else ' we are not in the Online Reader
		call adoConn.Execute( _
		    "INSERT INTO Tests " & _
		    "   ( TestID, ProductID, ArticleID, TypeID, Name) " & _
			"   SELECT "&cTSeqNextVal&", T.ProductID, T.ArticleID, T.TypeID, 'Свой тест-' || T.Name " & _
			"       FROM Tests T " & _
			"       WHERE TestID=" & nTestID)
		CheckADOError
	End If
	' get the new testID
	set rsTemp = adoConn.Execute("SELECT "&cTSeqCurrVal&" AS theTestID FROM DUAL")
	CheckADOError
	nTestID = rsTemp("theTestID")
	call adoConn.Execute( _
	    "INSERT INTO CustomTests " & _
		"   (TestID, TeacherID, ClassID )" & _
		"   VALUES " & _
		"   (" & nTestID & ", " & nTestID & ", " & nTestID & ")" )
'		"   (" & nTestID & ", " & nTID & ", " & nCLID & ")" )
	CheckADOError
	
	Dim nQID2
	For i=1 To Request.Form("QuestionsToSave").Count
		' --- Question -----------
		nQID = Request.Form("QuestionsToSave")(i)
		If DB_Provider = Ora_DB_Provider Then
			adoCloneQuestionCmd("TestID") = nTestID
			adoCloneQuestionCmd("QNumber") = i
			adoCloneQuestionCmd("QuestionID") = nQID
			call adoCloneQuestionCmd.Execute
		ElseIf DB_Provider = IB_DB_Provider Then
			adoConn.Execute ("INSERT INTO Questions " & _
		    " (QuestionID, TestID, QNumber, TypeID, QText, QValue) " & _
		    " SELECT GEN_ID(QUESTIONS_SEQ, 1), " & nTestID& ", " & i & " , Q.TypeID, Q.QText, Q.QValue " & _
		    " FROM Questions Q  WHERE Q.QuestionID="&nQID )
		Else
			HandleFatalError( kInvalidDBProviderConst )
		End If
		CheckADOError

		' get the new QuestionID
		set rsTemp = adoConn.Execute( _
		    "SELECT "&cQSeqCurrVal&" AS theQuestionID FROM DUAL")
		CheckADOError
		nQID2 = rsTemp("theQuestionID")
		' --- Answers -----------
		If DB_Provider = Ora_DB_Provider Then
			adoCloneChoiceCmd("DestinationQuestionID") = nQID2
			adoCloneChoiceCmd("SourceQuestionID") = nQID
			call adoCloneChoiceCmd.Execute
		ElseIf DB_Provider = IB_DB_Provider Then
			adoConn.Execute ("INSERT INTO Choices " & _
			"   (QuestionID, ChoiceNumber, CText, CValue) " & _
			"   SELECT "&nQID2&", C.ChoiceNumber, C.CText, C.CValue " & _
			"       FROM Choices C " & _
			"       WHERE C.QuestionID=" & nQID )
		Else
			HandleFatalError( kInvalidDBProviderConst )
		End If
		CheckADOError
	Next
	bCustomTest = True
End If
'===========================================================================
' End of update test
'===========================================================================

'===========================================================================
' Delete test
' request variables used:
'	"TestID" - (number) -- Tests.TestID
'	"DeleteTest" - (0/1) -- Indicates if user wants to delete the test
'===========================================================================
if (GetSafeLng(Request("DeleteTest"), 0)=1) And bCustomTest then
	call adoConn.Execute("DELETE FROM CustomTests WHERE TestID=" & nTestID) ' - cascade deletion of questions and choices as well
	CheckADOError
	call adoConn.Execute("DELETE FROM Tests WHERE TestID=" & nTestID) ' - cascade deletion of questions and choices as well
	CheckADOError
	strURL = "cn_articles.asp?AT=" & Server.URLEncode(strToken) & _
		"&TTSURL=" & Server.URLEncode(strTTSURL) & _
		"&LAID=" & Server.URLEncode(LAID_A) & _
		"&CLID=" & Server.URLEncode(nCLID) & _
		"&TID=" & Server.URLEncode(nTID) & _
		"&Parameters=" & Server.URLEncode(nTestID) & _
		"&Subject=" & Server.URLEncode(lngSubjectID) & _
		"&SortOrder=" & Server.URLEncode(nSortOrder) & _
		"&PageNo=" & Server.URLEncode(nPageNo)
	Call RedirectToScreen(strUrl)	
	'Response.Redirect strURL
end if
'===========================================================================
' End of Delete test
'===========================================================================

if GetSafeLng(Request("GoArticleListFlag"), 0)=1 then
	strURL = "cn_articles.asp?AT=" & Server.URLEncode(strToken) & _
		"&TTSURL=" & Server.URLEncode(strTTSURL) & _
		"&LAID=" & Server.URLEncode(LAID_A) & _
		"&CLID=" & Server.URLEncode(nCLID) & _
		"&TID=" & Server.URLEncode(nTID) & _
		"&Parameters=" & Server.URLEncode(nTestID) & _
		"&Subject=" & Server.URLEncode(lngSubjectID) & _
		"&SortOrder=" & Server.URLEncode(nSortOrder) & _
		"&PageNo=" & Server.URLEncode(nPageNo)
else
	strURL = "cn_clonetest.asp?AT=" & Server.URLEncode(strToken) & _
		"&TTSURL=" & Server.URLEncode(strTTSURL) & _
		"&LAID=" & Server.URLEncode(LAID_A) & _
		"&CLID=" & Server.URLEncode(nCLID) & _
		"&TID=" & Server.URLEncode(nTID) & _
		"&Parameters=" & Server.URLEncode(nTestID) & _
		"&Subject=" & Server.URLEncode(lngSubjectID) & _
		"&SortOrder=" & Server.URLEncode(nSortOrder) & _
		"&PageNo=" & Server.URLEncode(nPageNo) &_
		"&Read_Only=" & GetSafeLng( Request("Read_Only"), 0 )
end if
Call RedirectToScreen(strUrl)
%>