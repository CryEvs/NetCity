<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
strOnLoad = "window.focus();"
nInfoType = 0

CheckCNTeacherLogin
strID = Request("id")
If IsEmptyStr(strID) Then
	If InStr(UCase(Request.ServerVariables("HTTP_REFERER")), "VIEWACTIVITYPROXY.ASP" ) Then
		strID = Storage.CreateToken( 1 )
		Call Storage.SetTokenTimeout(strID, DEFAULT_TEACHER_TIMEOUT*60000)
		Call Storage.SetData( strID, "NRO", "1" )
	Else
		HandleFatalError "Неверные параметры"
	End If
End If

Dim nArticleID, TA_ID, adoRs
Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Аннотация"

TA_ID = Request("Parameters")
If Left(TA_ID,1)<>"A" Then
	Set adoRs = adoConn.Execute( "SELECT ArticleID FROM TESTVIEW('" & strTestSuffix & "') WHERE TestID=" & TA_ID )
	CheckADOError
	If adoRs.EOF Then HandleFatalError "Неверные параметры"
	nArticleID = adoRs("ARTICLEID")
Else
	nArticleID = Mid(TA_ID,2)
End If

Set adoRs = adoConn.Execute( "SELECT * FROM Articles WHERE ArticleID=" & nArticleID )
CheckADOError
If adoRs.EOF Then HandleFatalError "Неверные параметры"

Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function CloseWnd() 
{
	window.close();
}
function GoFullText() 
{
	var form = document.forms[0];
	form.submit(); 
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintHeaderMessage(adoRs("Title") & "<BR> (" & adoRs("Source") & ")")
Call PrintPreFullTextPage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call BeginTeacherForm( "cn_fulltext.asp", "Form" ) %>
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=TA_ID%>">
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>"><%
Call EndTeacherForm %>
<TABLE BORDER=1 CELLPADDING=10 WIDTH=95% ALIGN="CENTER">
<TR>
	<TH><FONT SIZE="+1">Аннотация</FONT></TH>
</TR>
<TR>
	<TD ALIGN=LEFT BGCOLOR=#ffffff><%=DB2HTML(adoRs("Summary"))%></TD>
</TR>
</TABLE>
<%Call PrintPreFullTextButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR>
	<TD ALIGN=CENTER VALIGN=BOTTOM>
		<%=ShowButton( "Fulltext", "Читать текст", "JavaScript:GoFullText()", "Читать текст" )%>
		<BR><HR>
		<%=ShowButton( "Close", "Закрыть", "JavaScript:CloseWnd()", "Закрыть" )%>
	</TD>
</TR>
</TABLE>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
