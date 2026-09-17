<!-- #INCLUDE FILE="include/header.asp" -->
<%
Call CheckSession
Call OpenDatabase
Call CheckAssignment
strPageTitle = PRODUCT_NAME & " - Аннотация"

Call Storage.SetData( strID, "IsGraded", Null )

'Get article info
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
	Set adoRs = adoCmd1.Execute()
End If
CheckADOError

Dim strArticleSummary
If Not adoRs.EOF Then
	Call Storage.SetData( strID, "ArticleTitle", CStr(adoRs("Title")) )
	Call Storage.SetData( strID, "ArticleCitation", CStr(adoRs("Source")) )
	strArticleSummary = CStr(adoRs("Summary"))
Else
	Call Storage.SetData( strID, "ArticleTitle", "" )
	Call Storage.SetData( strID, "ArticleCitation", "" )
	strArticleSummary = "<H2>Текст не найден</H2>"
End If
%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function GoMainMenu() 
{
	var form = document.forms[0];
	form.submit();
}
function GoFullText() 
{
	var form = document.forms[0];
	form.action = 'fulltext.asp';
	form.submit(); 
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%
Dim strTitle, strCitation
strTitle = Storage.GetData( strID, "ArticleTitle" )
strCitation = Storage.GetData( strID, "ArticleCitation" )
%>

<%Call PrintHeaderMessage(DB2HTML(strTitle) & "<BR> (" & DB2HTML(strCitation) & ")")%>

<%Call PrintPrePage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%BeginForm( "main.asp" )%>
<INPUT TYPE="HIDDEN" NAME="BackPage" VALUE="summary.asp">
<INPUT TYPE="HIDDEN" NAME="TestID" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="AssignmentID" VALUE="<%=strAssignmentID%>">
<%EndForm%>
<TABLE BORDER=1 CELLPADDING=10 WIDTH=95% ALIGN="CENTER">
<TR>
	<TH><FONT SIZE="+1">Аннотация</FONT></TH>
</TR>
<TR>
	<TD ALIGN=LEFT BGCOLOR=#ffffff><%=DB2HTML(strArticleSummary)%></TD>
</TR>
</TABLE>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR>
	<TD ALIGN=CENTER>
		<%=ShowButton( "Fulltext", "Читать текст", "JavaScript:GoFullText()", "Читать текст" )%><BR>
		<HR>
		<%=ShowButton( "MainMenu", "Главное меню", "JavaScript:GoMainMenu()", "Главное меню" )%>
	</TD>
</TR>
</TABLE>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
