<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
CheckCNTeacherLogin
%>
<HTML>
<HEAD><TITLE>Соответствие между классом и уровнем сложности</TITLE>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8"></HEAD>
<SCRIPT>
function setState( img, state )
{
	var newImg = new Image();
	if( state == 1)
		newImg.src = '../images/' + img + '_on.gif';
    else if( state == 2)
		newImg.src = '../images/' + img + '_dn.gif';
    else
		newImg.src = '../images/' + img + '.gif';
    document['btn_'+img].src = newImg.src;
}
function CloseWnd() 
{ 
	window.close();
}
</SCRIPT>
<% 
dim strBodyParams 
strBodyParams = Application("BODY_PARAMS")%>
<BODY <%=strBodyParams%> BACKGROUND="../images/back3.gif" TEXT="black" LINK="blue" ALINK="red" VLINK="blue" onLoad="window.focus();">
	<H2 ALIGN="CENTER">Примерное соответствие между классом и уровнем сложности</H2>
	<TABLE BORDER="0" ALIGN="CENTER" CELLPADDING="10">
	<TR>
		<TD>
			<TABLE BORDER="1" ALIGN="CENTER" CELLPADDING="5">
			<TR BGCOLOR="#E7EFF7"><TH>Класс</TH><TH>Диапазон уровней сложности</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>1-й</TH><TH ALIGN="CENTER">100 - 200</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>2-й</TH><TH ALIGN="CENTER">200 - 300</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>3-й</TH><TH ALIGN="CENTER">300 - 400</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>4-й</TH><TH ALIGN="CENTER">400 - 500</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>5-й</TH><TH ALIGN="CENTER">500 - 600</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>6-й</TH><TH ALIGN="CENTER">600 - 700</TH></TR>
			</TABLE>
		</TD>
		<TD>
			<TABLE BORDER="1" ALIGN="CENTER" CELLPADDING="5">
			<TR BGCOLOR="#E7EFF7"><TH>Класс</TH><TH>Диапазон уровней сложности</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>7-й</TH><TH ALIGN="CENTER">700 - 800</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>8-й</TH><TH ALIGN="CENTER">800 - 900</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>9-й</TH><TH ALIGN="CENTER">900 - 1000</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>10-й</TH><TH ALIGN="CENTER">1000 - 1100</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>11-й</TH><TH ALIGN="CENTER">1100 - 1200</TH></TR>
			<TR BGCOLOR="#FFFFFF"><TH>&nbsp;</TH><TH ALIGN="CENTER">&nbsp;</TH></TR>
			</TABLE>
		</TD>
	</TR>
	</TABLE>
	<CENTER>
		<%=ShowButton( "Close", "Закрыть", "JavaScript:CloseWnd()", "Закрыть окно" )%>
	</CENTER>
	<HR>
    <FONT SIZE=-1><I><%=COPYRIGHT%></I></FONT>
</BODY>
</HTML>
