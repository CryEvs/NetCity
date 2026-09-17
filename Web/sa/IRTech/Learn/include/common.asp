<%
Dim PRODUCT_NAME, SELF_PACED, CONNECTION_STRING, LAID_A, AUTO_PROGRESSION, COPYRIGHT
Dim LA_VERSION
Dim bBrowserIE, nInfoType

bBrowserIE = InStr( 1, Request("HTTP_USER_AGENT"), "MSIE", 1 ) > 0

SELF_PACED			= Application("SELF_PACED")
CONNECTION_STRING	= Application("CONNECTION_STRING")
LAID_A				= Request("LAID")
AUTO_PROGRESSION	= Application("AUTO_PROGRESSION")
COPYRIGHT			= Application("COPYRIGHT")
LA_VERSION          = Application("LA_VERSION")

Const LACC_URL = "/api/lacc.asp"

Const Ora_DB_Provider = "Oracle"
Const IB_DB_Provider = "IB6"

Const DB_Provider = "IB6"
'Const DB_Provider = "Oracle"
Const kInvalidDBProviderConst = "Неверно указан источник данных"

Const RESULT_RATIO = 1000

Dim strTestSuffix
Dim csType

If DB_Provider = Ora_DB_Provider Then
	strTestSuffix = ""
	csType = "TYPE"
ElseIf DB_Provider = IB_DB_Provider Then
	strTestSuffix =  LAID_A
	csType = """TYPE"""
Else
	HandleFatalError( kInvalidDBProviderConst )
End If

'Question order
Const qo_AllRnd    = 0
Const qo_80Rnd     = 1
Const qo_AllSame   = 2

Const PAGE_SIZE  = 10

'Assignment related constants
Const TEST_ID				= 0
Const ASSIGNMENT_ID			= 1
Const ASSIGNMENT_NAME		= 2
Const SUBJECT				= 3
Const DUE_DATE				= 4
Const ASSIGNMENT_LAST_FIELD	= 4

Const SORT_BY_ASSIGNMENT_NAME	= 2
Const SORT_BY_SUBJECT			= 3
Const SORT_BY_DUE_DATE			= 4
Const SORT_BY_TITLE				= 5
Const SORT_BY_SOURCE			= 6
Const SORT_BY_LEXILE			= 7
Const SORT_BY_TYPE				= 8
Const SORT_BY_SCORE				= 9

'Question related constants
Const QST_ID				= 0
Const QST_TYPE				= 1
Const QST_USERANSWER		= 2
Const QUESTION_LAST_FIELD	= 2

'Auto-progressing constants
Const MIN_LEXILE			= 200
Const MAX_LEXILE			= 1700
Const LEXILE_STEP			= 40
Const LEXILE_RANGE			= 100
Const LEXILE_THRESHOLD		= 700

'Parameters names
Const ENABLED				= "Enabled"
Const QUESTIONS_ORDER		= "QuestionsOrder"
Const MAY_READ_ARTICLE		= "MayReadArticle"
Const WATERMARK				= "Watermark"
Const LEXILE_LEVEL			= "LexileLevel"
Const CURRENT_LEXILE_POINTS	= "CurrentLexilePoints"
Const TOTAL_POINTS			= "TotalPoints"
Const CURRENT_LEXILE_TESTS	= "CurrentLexileTests"
Const TOTAL_TESTS			= "TotalTests"
Const TOTAL_SCORE			= "TotalScore"
Const AVG_SCORE				= "AvgScore"
Const SCORE					= "Score"
Const RESULTSBYQUESTIONS    = "ResultsByQuestions"
Const REVIEW_TEST			= "ReviewTest"
Const FONT_SIZE				= "FontSize"
Const FONT_COLOR			= "FontColor"
Const BG_COLOR				= "BGColor"

'Global variables
Dim nTestID
Dim strAccessToken, strAssignmentID, strID
Dim arrQuestions
Dim adoConn, dictParams

Function IsEmptyStr( strSource )
	IsEmptyStr = IsEmpty(strSource) Or strSource = "" Or IsNull(strSource)
End Function

Function ToSQLString( s )
  If IsEmptyStr(s) Then
	ToSQLString="null"
  Else
	Dim strTempResult, i
  
	strTempResult = ""
	for i=1 to len(s)
	  strTempResult = strTempResult & Mid(s, i, 1)
	  if Mid(s, i, 1) = "'" then strTempResult = strTempResult&"'"
	next
	ToSQLString = "'" & strTempResult & "'"
  End If
End Function

Function GetSafeStr( value )
	If IsEmptyStr( value ) Then
		GetSafeStr = ""
	Else
		GetSafeStr = CStr(value)
	End If
End Function

Function GetPreparedStr( Value, defaultValue)
	If IsEmptyStr( Value ) Then
		GetPreparedStr = defaultValue
	Else
		GetPreparedStr = Value
	End If
End Function

Function GetSafeLng( value, defvalue )
	On Error Resume Next
	If IsEmptyStr( value ) Then
		GetSafeLng = defvalue
	Else
		GetSafeLng = CLng(value)
		If Err <> 0 Then
			GetSafeLng = defvalue
			Err.Clear
		End If
	End If
End Function

Function GetSafeBool( value, defvalue )
	If IsEmptyStr( value ) Then
		GetSafeBool = defvalue
	Else
		GetSafeBool = ( value = "Y" Or value = "y" Or value = "1" Or value = "T" Or value = "t" )
	End If
End Function

Sub CheckSession
	strID = GetSessionID()
	strAccessToken = Storage.GetData( strID, "AccessToken" )
	If Request.Form.Count>2 Then  ' ID & LAID
    	Set dictParams = Request
    Else
    	Set dictParams = Storage.GetData( strID, "Parameters" )
    End If	
    If IsEmpty(dictParams) Or IsNull(dictParams) Then Call RedirectToScreen("main.asp")
End Sub

Sub CheckAssignment()
	nTestID = dictParams.Item("TestID")
	If IsEmptyStr(nTestID) Then nTestID = Request("TestID")
	If IsEmptyStr(nTestID) Then Call RedirectToScreen("main.asp")

	strAssignmentID = dictParams.Item("AssignmentID")
	If IsEmptyStr(strAssignmentID) Then strAssignmentID = Request("AssignmentID")
	If IsEmptyStr(strAssignmentID) Then Call RedirectToScreen("main.asp")
End Sub

Sub CheckGradedAssignment
	nTestID = Storage.GetData( strID, "GradedTestID" )
	If IsEmptyStr(nTestID) Then Call RedirectToScreen("main.asp")
	strAssignmentID = Storage.GetData( strID, "GradedAssignmentID" )
	If IsEmptyStr(strAssignmentID) Then Call RedirectToScreen("main.asp")
End Sub

Sub SaveParamsInDict
    Dim dctParams, param
    Set dctParams = CreateObject("NetCity.Storage")
    For Each param In Request.Form
    	dctParams.Add param, CStr(Request.Form(param))
    Next
    Call Storage.SetData( strID, "Parameters", dctParams )
End Sub

Sub OpenDatabase
	Dim objName
	On Error Resume Next
	Set adoConn = Server.CreateObject("ADODB.Connection")
	adoConn.Open CONNECTION_STRING
	If (adoConn.State And adStateOpen) = 0 Then Call HandleError( "Ошибка при обращении к базе данных:", 0, "Невозможно открыть базу:" & err.description )
	CheckADOError
	Set objName = adoConn.Execute("select productname from products where productid = '" & LAID_A & "'")
	PRODUCT_NAME = objName("productname")
End Sub

Sub CheckQuestions
	On Error Resume Next
	If nTestID <> Storage.GetData( strID, "CurrentTestID" ) Then Call Storage.SetData( strID, "Questions", Null )
		
	arrQuestions = Storage.GetData( strID, "Questions" )
	If IsEmpty(arrQuestions) Or IsNull(arrQuestions) Then Call RedirectToScreen("main.asp")
End Sub

Function GetSessionID
	On Error Resume Next
	Dim strSessionID
	strSessionID = Request("id")
	If IsEmptyStr(strSessionID) Then Call RedirectToScreen("login.asp")
	If CStr(Storage.UserID(strSessionID)) = "" Or lacc.KeepAlive( Storage.GetData( strSessionID, "AccessToken" ) ) = 0 Then Call HandleExpired
	GetSessionID = strSessionID
End Function

Function DB2HTML( strText )
	If IsEmptyStr( strText ) Then 
		DB2HTML = "&nbsp;"
	Else
		Dim strNormStr
		strNormStr = Trim(Server.HTMLEncode( strText ) )
		strNormStr = Replace( strNormStr, Chr(10), "<br>" )
		If IsEmptyStr( strNormStr ) Then 
			DB2HTML = "&nbsp;"
		Else
			DB2HTML = strNormStr
		End If
    End If
End Function

Function DB2Java( strText )
	If IsEmptyStr( strText ) Then 
		DB2Java = ""
	Else
		Dim strNormStr, i, ch
		strNormStr = ""
		For i = 1 To Len( strText )
			ch = Mid( strText, i, 1 )
			If ch = """" Then
				strNormStr = strNormStr & "\"""
			Else
				strNormStr = strNormStr & ch
		    End If
		Next
		DB2Java = Trim(strNormStr)
	End If
End Function

Function DB2Value( strText )
	If IsEmptyStr( strText ) Then 
		DB2Value = ""
	Else
		DB2Value = Trim(Server.HTMLEncode( strText ) )
    End If
End Function

Sub BeginHint
    Writeln "<TABLE WIDTH=100% BORDER=0 SELLPADDING=3><TR>"
    Writeln "<TD ALIGN=LEFT VALIGN=TOP WIDTH=10><IMG SRC=""../images/hint.gif""></TD>"
    Writeln "<TD ALIGN=LEFT WIDTH=100% ><I>"
End Sub

Sub EndHint
    Writeln "</I></TD></TR></TABLE>"
End Sub

Sub CheckADOError()
    If Err <> 0 Then Call HandleError( "Ошибка при обращении к базе данных:", Err.Number, Err.Description )
End Sub

Function GetHelpLink()
	Dim strScriptName, nPos, strHelpName

	strScriptName = UCase(Request.ServerVariables("SCRIPT_NAME"))
	nPos = InStrRev( strScriptName, "/" )
	If nPos > 0 Then strScriptName = Mid( strScriptName, nPos + 1 )
	If strScriptName = "CN_ARTICLES.ASP" Or strScriptName = "CN_ASSIGNMENT.ASP" Or _
	   strScriptName = "CN_CHART.ASP" Or strScriptName = "CN_FULLTEXT.ASP" Or _
	   strScriptName = "CN_SUMMARY.ASP" Or strScriptName = "CN_TESTVIEW.ASP" Or _
	   strScriptName = "CN_CLONETEST.ASP" _
	Then
		GetHelpLink = Application("TEACHER_HELP_LINK")
	Else
		GetHelpLink = Application("STUDENT_HELP_LINK")
	End If
End Function

Sub HandleError( errMsg, errCode, errDescr )
	Response.Clear
	PrintSimplePageHeader "Ошибка"
    Writeln "<H2><FONT COLOR=""red"">" & DB2HTML(errMsg) & "</FONT></H2><BR>"
    Writeln "<P>"
    If errCode <> 0 Then Writeln "[" & errCode & "] "
    Writeln DB2HTML(errDescr)
    Writeln "</P>"
    Writeln "<FORM METHOD=POST>"
	Dim Item, i
	For Each Item In Request.Form
		For i = 1 To Request.Form(Item).Count
		    Writeln "<INPUT TYPE=""HIDDEN"" NAME=""" & Item & """ VALUE=""" & DB2Value(Request.Form(Item)(i)) & """>"
		Next
	Next
    Writeln "</FORM>"
	Writeln "<CENTER>"
    Writeln ShowButton( "TryAgain", "Повторить...", "JavaScript:document.forms[0].submit();", "Попробовать еще раз..." )
    Writeln "&nbsp;&nbsp;&nbsp;"
    If IsEmptyStr(strID) Then
		Writeln ShowButton( "Close", "Закрыть", "JavaScript:window.close();", "Закрыть окно" )
	Else
		Writeln ShowButton( "Login", "Войти", "JavaScript:window.location='login.asp'", "Войти через главную страницу..." )
	End If
	Writeln "</CENTER>"
    PrintSimplePageFooter
    Response.End
End Sub

Sub HandleFatalError( errMsg )
	Response.Clear
	PrintSimplePageHeader "Ошибка"
    Writeln "<H2><FONT COLOR=""red"">" & DB2HTML(errMsg) & "</FONT></H2><BR>"
	Writeln "<CENTER>"
    Writeln ShowButton( "Close", "Закрыть", "JavaScript:window.close();", "Закрыть окно" )
	Writeln "</CENTER>"
    PrintSimplePageFooter
    Response.End
End Sub

Sub HandleExpired
	Response.Clear
	PrintSimplePageHeader "Ошибка"
	Writeln "<CENTER>"
    Writeln "<H2><FONT COLOR=""red"">Так как вы долго не использовали " & DB2HTML(PRODUCT_NAME) & ", ваш сеанс работы завершен.</FONT></H2>"
    'Writeln ShowButton( "Login", "login.asp", "Login again..." )
	Writeln "</CENTER>"
    PrintSimplePageFooter
    Response.End
End Sub

Sub ClassNotFound
	Response.Clear
	PrintSimplePageHeader "Ошибка"
	Writeln "<CENTER>"
    Writeln "<H2><FONT COLOR=""red"">В настоящее время вы не числитесь в этом классе, либо учебный период для этого класса закончился. Пожалуйста, обратитесь к вашему учителю и/или системному администратору, чтобы вас зачислили в класс.<br></FONT></H2>"
    Writeln ShowButton( "Close", "Закрыть", "JavaScript:window.close()", "Закрыть окно" )
	Writeln "</CENTER>"
    PrintSimplePageFooter
    Response.End
End Sub

Sub RedirectToScreen(strAction)
	Response.Clear
%><html><head></head>
<body>
<FORM NAME="RF" METHOD="post" ACTION="<%=strAction%>" >
  <INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>">
  <INPUT TYPE="HIDDEN" NAME="LAID" VALUE="<%=LAID_A%>">
</FORM>
<script>
  var form=document.forms[0];
  form.submit();
</script>
</body></html><%
	Response.End
End Sub

Function Ver()
    Randomize
	Ver = DateDiff("s", #1/1/1999#,now() , 0, 0) & Rnd()
End Function

Sub BeginForm( strName )
	Writeln "<FORM ACTION=""" & strName & "?VER=" & Ver() & """ METHOD=""POST"" ID=""Form"" NAME=""Form"">"
	Writeln "<INPUT TYPE=""HIDDEN"" NAME=""ID"" VALUE=""" & strID & """>"
	Writeln "<INPUT TYPE=""HIDDEN"" NAME=""SVER"" VALUE=""" & Ver() & """>"
	Writeln "<INPUT TYPE=""HIDDEN"" NAME=""LAID"" VALUE=""" & LAID_A & """>"
End Sub

Sub EndForm
	Writeln "</FORM>"
End Sub

Function ShowButton( strName, strRusName, strLink, strStatus )
	Dim strButton
	strButton = "<A HREF=""" & strLink & """ "
	If InStr( UCase(strLink), "JAVASCRIPT:" ) = 1 Then 
		strButton = strButton & "onclick=""" & Mid( strLink, 12 ) & ";return false;"" "
	End If
	ShowButton = strButton & _
	             "onmousedown=""setState('" & strName & "',2);"" " & _
	             "onmouseover=""setState('" & strName & "',1); self.status='" & DB2JAVA(strStatus) & "'; return true;"" " & _
	             "onmouseout=""setState('" & strName & "',0); self.status='';""> " & _
	             "<IMG NAME=""btn_" & strName & """ SRC=""../images/" & strName & ".gif"" ALT=""[" & strRusName & "]"" BORDER=0>" & _
	             "</A>"
End Function

Sub Writeln( strText )
	Response.Write strText & Chr(10)
End Sub

Function Search( nItem, arrArray )
	Dim nF, nL, nN, nN2, nM
	nItem = CLng(nItem)
	nF = LBound(arrArray)
	nL = UBound(arrArray) + 1
	nN = nL - nF
	While nN > 0
		nN2 = Round( nN / 2 )
		nM = nF + nN2
		If arrArray(nM) = nItem Then
			Search = True
			Exit Function
		End If
		If arrArray(nM) < nItem Then
			nF = nM + 1
			nN = nN - nN2 - 1
		Else
			nN = nN2
		End If
	WEnd

	If nF < nL Then
		Search = Not ( nItem <> arrArray(nF) )
	Else
		Search = False
	End If
End Function

Function ConvertText( strDB )
	Dim strNormStr, i, ch, nSize, nPos, nPos1
	strDB = Server.HTMLEncode(strDB)
	strNormStr = Replace(strDB, CHR(10), "<BR>")
	strNormStr = Replace(strNormStr, "  ", " &nbsp;")
	strNormStr = Replace(strNormStr, "&nbsp; ", "&nbsp;&nbsp;")
    	if Len(strNormStr) = 0 then ConvertText = "&nbsp;" else ConvertText = strNormStr
End Function

Function IsTextHTML( strDB )
  IsTextHTML = (InStr(LTrim(strDB),"<")=1)
End Function

Function FormatNoun( strWord, nNum, nType )
  FormatNoun = "<B><I><FONT SIZE=""+2"">" & nNum & "</FONT></I></B> " & AddEnding(strWord,nNum,nType)
End Function

Function AddEnding( strWord, nNum, nType )
  Select Case nType
    Case 1: AddEnding = AddEnding1( strWord, nNum )
    Case 2: AddEnding = AddEnding2( strWord, nNum )
  End Select
End Function

Function AddEnding1( strWord, nNum )
  ' strWord = "балл", "текст", "вопрос"
  Dim strResult
  If (nNum Mod 100 >= 11) And (nNum Mod 100 <= 14) Then
    strResult = strWord & "ов"
  Else
    Select Case (nNum Mod 10)
	Case 1:		strResult = strWord
	Case 2,3,4:	strResult = strWord & "а"
	Case Else 	strResult = strWord & "ов"
    End Select
  End If
  AddEnding1 = strResult
End Function

Function AddEnding2( strWord, nNum )
  ' strWord = "задание"
  Dim strResult
  strResult = Left( strWord, Len(strWord)-2 )
  If (nNum Mod 100 >= 11) And (nNum Mod 100 <= 14) Then
    strResult = strResult & "ий"
  Else
    Select Case (nNum Mod 10)
	Case 1:		strResult = strResult & "ие"
	Case 2,3,4:	strResult = strResult & "ия"
	Case Else 	strResult = strResult & "ий"
    End Select
  End If
  AddEnding2 = strResult
End Function

Sub PrintSimplePageHeader(strTitle)
	Dim strScriptName, nPos, strHelpName

    Writeln "<HTML>"
    Writeln "<HEAD><TITLE>"
	If IsEmptyStr(PRODUCT_NAME) Then
		Writeln DB2HTML(strTitle) & "</TITLE>"
	Else
		Writeln PRODUCT_NAME & " - " & DB2HTML(strTitle) & "</TITLE>"
	End If
    Writeln "<META HTTP-EQUIV=""Content-type"" CONTENT=""text/html; charset=utf-8""></HEAD>"
    Writeln "<SCRIPT>"
    Writeln "function setState( img, state ) {"
    Writeln "  var newImg = new Image();"
    Writeln "  if( state == 1 ) newImg.src = '../images/' + img + '_on.gif';"
    Writeln "  else if( state == 2 ) newImg.src = '../images/' + img + '_dn.gif';"
    Writeln "  else newImg.src = '../images/' + img + '.gif';"
    Writeln "  document['btn_'+img].src = newImg.src;"
    Writeln "}"
	Writeln "function OnHelp() {"
	Writeln "  window.open( '" & GetHelpLink() & "', 'Help', 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no' );"
	Writeln "}"
    Writeln "</SCRIPT>"
    dim strBkcolor, strBaseFont, strBodyParams
    strBkcolor = Application("BACKGROUND_COLOR")
    strBaseFont = Application("BASEFONT_COLOR")
    strBodyParams = Application("BODY_PARAMS")
    
	If IsEmpty(strBkcolor) Or strBkcolor="" Then
           Writeln "<BODY leftmargin=0 topmargin=0 bottommargin=0 rightmargin=0 marginwidth=0 marginheight=0 " & strBodyParams & " BACKGROUND=""../images/back3.gif"">"
	Else
	   Writeln "<BODY leftmargin=0 topmargin=0 bottommargin=0 rightmargin=0 marginwidth=0 marginheight=0 " & strBodyParams & " BGCOLOR=""" &strBkcolor & """>"
	End If 	
	Writeln "<BASEFONT FACE=""" & strBaseFont & """>"
	Writeln "<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=0>"
	Writeln "<TR BGCOLOR=#4545c3>"
	Writeln "<TD WIDTH=50% ALIGN=LEFT>"
	Writeln "<font size=""5"" color=""white"">&nbsp;" & DB2HTML(PRODUCT_NAME) & "</font>"
	Writeln "</TD>"
	Writeln "<TD ALIGN=RIGHT><H1><FONT COLOR=""white""><B>" & strTitle & "&nbsp;</B></FONT></H1></TD>"
	Writeln "</TR>"
	Writeln "</TABLE>"
	Writeln "<TABLE WIDTH=100% CELLSPACING=0 CELLPADDING=0 BORDER=0>"
	Writeln "<TR><TD WIDTH=100% HEIGHT=100% BACKGROUND=""../images/tb.gif"" VALIGN=TOP><IMG SRC=""../images/tb.gif""></TD></TR>"
	Writeln "</TABLE>"
	Writeln "<TABLE WIDTH=95% ALIGN=CENTER CELLSPACING=0 CELLPADDING=0 BORDER=0><TR><TD><BR>"
End Sub

Sub PrintSimplePageFooter
	Writeln "</TD></TR></TABLE>"
	Writeln "<TABLE WIDTH=100% CELLSPACING=0 CELLPADDING=0 BORDER=0>"
	Writeln "<TR><TD  WIDTH=100% HEIGHT=100% BACKGROUND=""../images/mid.gif"" VALIGN=TOP><IMG SRC=""../images/mid.gif"" ></TD></TR>"
	Writeln "<TR BGCOLOR=#4545c3 height=50><TD COLSPAN=1 ALIGN=LEFT>&nbsp;<FONT FACE=""Arial"" size=-1 color=white>"
	Writeln COPYRIGHT & "</FONT>"
	Writeln "</TD></TR></TABLE>"
    Writeln "</BODY></HTML>"
End Sub
%>
