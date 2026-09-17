<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
nInfoType = 0

CheckCNTeacherLogin
strID = Request("id")
If IsEmptyStr(strID) Then HandleFatalError "Неверные параметры"

Dim nArticleID, adoRs, TA_ID, bViewTest, bIsTeacher
Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Текст"
TA_ID = Request("Parameters")
If Left(TA_ID,1)<>"A" Then
	Set adoRs = adoConn.Execute( "SELECT ArticleID FROM TESTVIEW('" & strTestSuffix & "') WHERE TestID=" & TA_ID )
	CheckADOError
	If adoRs.EOF Then HandleFatalError "Неверные параметры"
	nArticleID = adoRs("ARTICLEID")
	Set adoRs = adoConn.Execute("SELECT Count(*) Cnt FROM Questions WHERE TestID="& TA_ID )
	CheckADOError
	bViewTest = ( CLng(adoRs("Cnt")) > 0 )
Else
	nArticleID = Mid(TA_ID,2)
	bViewTest = False
End If

bIsTeacher = lacc.IsTeacher(strToken)

Set adoRs = adoConn.Execute( "SELECT Articles.* FROM Articles WHERE Articles.ArticleID=" & nArticleID )
CheckADOError

If adoRs.EOF Then HandleFatalError "Неверные параметры"
%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<script>
function GoBack() 
{
	var form = document.forms[0];
	form.submit();
}
function GoViewTest() 
{
	var form = document.forms[1];
	form.submit();
}
</script>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintHeaderMessage(DB2HTML(adoRs("Title")) & "<BR> (" & DB2HTML(adoRs("Source")) & ")")
Call PrintPreFullTextPage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call BeginTeacherForm( "cn_summary.asp", "Form1" ) %>
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=TA_ID%>">
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>"><%
Call EndTeacherForm
Call BeginTeacherForm( "cn_testview.asp", "Form2" ) %>
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=TA_ID%>">
<INPUT TYPE="HIDDEN" NAME="QstNo" VALUE="1">
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>"><%
Call EndTeacherForm%>
<table BORDER="1" CELLPADDING="10" WIDTH="98%" ALIGN="CENTER" STYLE="text-align: justify">
<tr>
  <td BGCOLOR="#ffffff">
    <% If IsTextHTML(CStr(adoRs("FullText"))) Then %>
      <%=CStr(adoRs("FullText"))%>
    <%Else%>  
    <tt>
      <%=ConvertText(CStr(adoRs("FullText")))%>
	</tt>      
    <%End If%>
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
<%Call PrintPreFullTextButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<table BORDER="0" WIDTH="100%" CELLSPACING="0" CELLPADDING="5">
<tr>
	<td ALIGN="CENTER"><%
	If bIsTeacher Then  ' только пользователь-учитель может просматривать вопросы тестов
		If bViewTest Then
			%><%=ShowButton( "ReviewTest", "Смотреть вопросы", "JavaScript:GoViewTest()", "Просмотреть вопросы и ответы" )%><BR><HR><%
		End If
	End If%>
	<%=ShowButton( "Back", "Назад", "JavaScript:GoBack()", "Назад" )%>
	</td>
</tr>
</table>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
