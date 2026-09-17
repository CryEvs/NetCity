<!-- #INCLUDE FILE="include/header.asp" -->
<%
Sub CheckLACCError()
    If Err <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode = 10007 Then Call RedirectToScreen("login.asp")
    If lacc.LastErrorCode = 10011 Then Exit Sub
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

Call OpenDatabase
Call CheckSession  ' PRODUCT_NAME is known after OpenDatabase
Call CheckAssignment
strPageTitle = PRODUCT_NAME & " - Чтение текста"

if GetSafeLng( dictParams.Item("ArticleDone"), 0 ) = 1 then
	Call lacc.SetScoreAnswers( "", strAccessToken, GetSafeStr( dictParams.Item("AssignmentID") ), 100 )
	CheckLACCError
	Call Storage.SetData( strID, "Assignments", Null )
	Call RedirectToScreen("main_A.asp")
end if

Call Storage.SetData( strID, "IsGraded", Null )

Dim strBackPage, strReviewTest, lNextQuestion
strBackPage = dictParams.Item("BackPage")
strReviewTest = dictParams.Item("ReviewTest")

Dim strTransactionID, strClassID
strClassID = Storage.GetData( strID, "ClassID" )

dim strFontSize, strFontColor, strBGColor

strFontSize = Storage.GetData( strID, "FontSize" )
If Not IsEmpty(dictParams.Item("FontSize")) and strFontSize<>dictParams.Item("FontSize") Then
	strFontSize=dictParams.Item("FontSize")
	Call Storage.SetData( strID, "FontSize", strFontSize)
	strTransactionID = lacc.BeginTrans( strAccessToken )
	If IsEmptyStr(strTransactionID) Then
   		Call HandleError( "Ошибка при создании транзакции", Err.Number, Err.Description )
   	End If	
   	Call lacc.SetStudentInfo( strTransactionID, strAccessToken, strClassID, LAID_A, FONT_SIZE, strFontSize)
	CheckLACCError
End If	 

strFontColor = Storage.GetData( strID, "FontColor" )
If  Not IsEmpty(dictParams.Item("FontColor")) and strFontColor<>dictParams.Item("FontColor") Then
	strFontColor=dictParams.Item("FontColor")
	Call Storage.SetData( strID, "FontColor", strFontColor)
	If IsEmptyStr(strTransactionID) Then
		strTransactionID = lacc.BeginTrans( strAccessToken )
		If IsEmptyStr(strTransactionID) Then
   			Call HandleError( "Ошибка при создании транзакции", Err.Number, Err.Description )
   		End If	
	End If	
	Call lacc.SetStudentInfo( strTransactionID, strAccessToken, strClassID, LAID_A, FONT_COLOR, strFontColor)
	CheckLACCError
End If	 

strBGColor = Storage.GetData( strID, "BGColor" )
If  Not IsEmpty(dictParams.Item("BGColor")) and strBGColor<>dictParams.Item("BGColor") Then
	strBGColor=dictParams.Item("BGColor")
	Call Storage.SetData( strID, "BGColor", strBGColor)
	If IsEmptyStr(strTransactionID) Then
		strTransactionID = lacc.BeginTrans( strAccessToken )
		If IsEmptyStr(strTransactionID) Then
   			Call HandleError( "Ошибка при создании транзакции", Err.Number, Err.Description )
   		End If	
	End If	
	Call lacc.SetStudentInfo( strTransactionID, strAccessToken, strClassID, LAID_A, BG_COLOR, strBGColor)
	CheckLACCError
End If

If Not IsEmptyStr(strTransactionID) Then
	If Not lacc.CommitTrans( strAccessToken, strTransactionID ) Then
		Call HandleError( "Ошибка при завершении транзакции", lacc.LastErrorCode, lacc.LastError )
	End If
End If	

if IsEmpty(strBGColor) or strBGColor="" Then
	strBGColor = "#FFFFFF"
End If

If strReviewTest<>"Y" Then
	lNextQuestion = CLng(dictParams.Item("NextQuestion"))
Else
	lNextQuestion = 0
End If	

If IsEmptyStr(strBackPage) Then strBackPage = "summary.asp"

Dim adoCmd, adoCmd1, adoRs, TA_ID
Set adoCmd = Server.CreateObject("ADODB.Command")
adoCmd.ActiveConnection = adoConn
adoCmd.CommandText = "SELECT Articles.* FROM Articles, TESTVIEW('" & strTestSuffix & "') T WHERE (Articles.ArticleID=T.ArticleID) AND (T.TestID=?)"
adoCmd.Parameters.Append adoCmd.CreateParameter( "TestID", adInteger, adParamInput )

Set adoCmd1 = Server.CreateObject("ADODB.Command")
adoCmd1.ActiveConnection = adoConn
adoCmd1.Prepared = True
adoCmd1.CommandText = "SELECT Articles.* FROM Articles WHERE (Articles.ArticleID=?)"
adoCmd1.Parameters.Append adoCmd1.CreateParameter( "ArticleID", adInteger, adParamInput )

TA_ID = dictParams.Item("TestID")
If Left(TA_ID,1)<>"A" Then
	adoCmd("TestID") = TA_ID
	Set adoRs = adoCmd.Execute()
Else
	adoCmd1("ArticleID") = Mid(TA_ID,2)
	strReviewTest="ReadArticle"
	Set adoRs = adoCmd1.Execute()
End If

CheckADOError

Dim strArticleFulltext
If Not adoRs.EOF Then
	strArticleFulltext = CStr(adoRs("FullText"))
Else
	strArticleFulltext = "<H2>Текст не найден</H2>"
End If
strOnUnLoad = "closeFont()"
Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<script>
function Done() 
{
	var form = document.forms[0];
	form.elements['ArticleDone'].value = '1';
	form.action = 'fulltext.asp';
	form.submit();
}
function GoBack() 
{
	var form = document.forms[0];
	form.action = '<%=strBackPage%>';
	form.submit();
}
function GoTakeTest() 
{
	var form = document.forms[0];
	form.action = 'test.asp';
	form.elements['ReviewTest'].value = 'N';
	form.submit();
}
function GoReviewTest() 
{
	var form = document.forms[0];
	form.action = 'test.asp';
	form.elements['ReviewTest'].value = 'Y';
	form.submit();
}
var wndFont = null;
function closeFont()
{
	if( wndFont && !wndFont.closed )
	{
		wndFont.forceClosing = true;
		wndFont.close();
	}
}
function getVer() { var d; d = new Date(); return d.getTime(); }
function GoFont()
{
	closeFont();
	var form = document.forms[0];
	wndFont = window.open( 'changefont.asp?VER=' + getVer() + '&FontSize=<%=strFontSize%>&FontColor=<%=Server.URLEncode(strFontColor)%>&BGColor=<%=Server.URLEncode(strBGColor)%>','_blank', 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=670,height=550' );
}
function ChangeTextParameters(FontSize,FontColor,BGColor)
{	
	closeFont();
	var form = document.forms[0];
	form.elements['FontSize'].value = FontSize;
	form.elements['FontColor'].value = FontColor;
	form.elements['BGColor'].value = BGColor;
	form.action = 'fulltext.asp';
	form.submit();
}
</script><%
Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Dim strTitle, strCitation

strTitle = Storage.GetData( strID, "ArticleTitle" )
strCitation = Storage.GetData( strID, "ArticleCitation" )

Call PrintHeaderMessage(DB2HTML(strTitle) & "<BR> (" & DB2HTML(strCitation) & ")")
Call PrintPreFullTextPage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

BeginForm( "main.asp" )
%><INPUT TYPE="HIDDEN" NAME="ArticleDone" VALUE="">
<INPUT TYPE="HIDDEN" NAME="TestID" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="AssignmentID" VALUE="<%=strAssignmentID%>">
<INPUT TYPE="HIDDEN" NAME="NextQuestion" VALUE="<%=lNextQuestion%>">
<INPUT TYPE="HIDDEN" NAME="ReviewTest" VALUE="<%=strReviewTest%>">
<INPUT TYPE="HIDDEN" NAME="FontSize" VALUE=<%=strFontSize%>>
<INPUT TYPE="HIDDEN" NAME="FontColor" VALUE=<%=strFontColor%>>
<INPUT TYPE="HIDDEN" NAME="BGColor" VALUE=<%=strBGColor%>>
<INPUT TYPE="HIDDEN" NAME="BackPage" VALUE=<%=strBackPage%>>
<%EndForm%>
<table BORDER="1" CELLPADDING="10" WIDTH="98%" ALIGN="CENTER" STYLE="text-align: justify">
<tr>
	<td BGCOLOR="<%=strBGColor%>">
	  <FONT SIZE="<%=strFontSize%>" COLOR="<%=strFontColor%>" >
      <% If IsTextHTML(CStr(adoRs("FullText"))) Then %>
        <%=CStr(adoRs("FullText"))%>
      <%Else%>  
      <tt>
        <%=ConvertText(CStr(adoRs("FullText")))%>
	  </tt>      
      <%End If%>
	  </FONT>
	</td>
</tr>
</table>
<table BORDER="0" CELLPADDING="0" WIDTH="95%" ALIGN="CENTER">
<tr>
	<td ALIGN="RIGHT">
		<a HREF="#top_screen" onmouseover="self.status='В начало текста'; return true;" onmouseout="self.status='';">
			<nobr><img SRC="../images/top.gif" VALIGN="BOTTOM" BORDER="0" WIDTH="14" HEIGHT="15"><font SIZE="-1"><i>В начало текста</i></font><img SRC="../images/top.gif" VALIGN="BOTTOM" BORDER="0" WIDTH="14" HEIGHT="15"></nobr>
		</a>
	</td>
</tr>
</table>
<%
Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Dim bTakeTest, bBack
bTakeTest = strReviewTest="Y" Or (InStr(Request.ServerVariables("HTTP_REFERER"),"test.asp") = 0 And strBackPage<>"test.asp")
bBack = InStr(Request.ServerVariables("HTTP_REFERER"),"grade.asp") = 0

Response.Write ShowButton( "Font", "Шрифт", "JavaScript:GoFont()", "Настроить параметры текста" )
%>
</td></tr><tr><td valign="bottom">
<table BORDER="0" WIDTH="100%" CELLSPACING="0" CELLPADDING="5">
<tr>
	<td ALIGN="CENTER"><%      
		If strReviewTest="ReadArticle" Then
			Response.Write "&nbsp<BR><IMG SRC=""images/hint.gif"" ALT=[Hint] BORDER=0><font size=""-1""><i>Нажмите кнопку ""Завершить"", чтобы показать, что вы закончили читать текст. После этого задание будет <b>удалено</b> из списка заданий.</i></font><br>"
			Response.Write ShowButton( "Done", "Завершить", "JavaScript:Done()", "Вернуться к тексту заданий" )
		ElseIf bTakeTest Then 
			If Storage.GetData( strID, "ReviewTest" ) Then 
			  Response.Write ShowButton( "ReviewTest", "Смотреть вопросы", "JavaScript:GoReviewTest()", "Просмотреть контрольные вопросы" )
			  Response.Write "&nbsp<BR>"
			End If  
			Response.Write ShowButton( "TakeTest", "Начать тест", "JavaScript:GoTakeTest()", "Начать тест" )
		End If  
		If bBack Then Response.Write "&nbsp<BR><HR>"
		If bBack Then Response.Write ShowButton( "Back", "Назад", "JavaScript:GoBack()", "Назад" )
		Response.Write "&nbsp"
%>
	</td>
</tr>
</table>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
