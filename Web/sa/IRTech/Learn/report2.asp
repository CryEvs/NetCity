<%@ Language=VBScript %>
<%
'On Error Resume Next
Option Explicit
Response.Buffer = True
Response.Expires = 0
Response.AddHeader "pragma", "no-cache"
%>
<!-- #INCLUDE FILE=include/adovbs.asp -->
<!-- #INCLUDE FILE=include/common.asp -->
<%
Sub CheckLACCError()
    If Err.Number <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

Call OpenDatabase
Call CheckSession  ' PRODUCT_NAME is known after OpenDatabase

Dim Item
Set Item = lacc.GetStudentTotalResults( strAccessToken, Storage.GetData( strID, "ClassID" ), LAID_A )
CheckLACCError

Dim nTotalTests, nAvgScore
nTotalTests = GetSafeLng( Item.Field("totaltests"), 0 )
If IsEmptyStr(Item.Field("avgscore")) Then
	nAvgScore = 0
Else
	nAvgScore = Item.Field("avgscore")*100/RESULT_RATIO
End If
%>
<HTML>
<HEAD><TITLE><%=PRODUCT_NAME%> - Отчет для печати</TITLE>
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=utf-8"></HEAD>
<BODY>
<H1 ALIGN="CENTER">Отчет по заданиям <I><%=DB2HTML(PRODUCT_NAME)%></I></H1>
<TABLE BORDER="0" CELLPADDING="0">
<TR> 
	<TD ALIGN="RIGHT"><B>Ученик:</B>&nbsp;&nbsp;&nbsp;</TD>
	<TD><I><%=DB2HTML(Storage.GetData( strID, "StudentName" ))%></I></TD>
</TR>
<TR> 
	<TD ALIGN="RIGHT"><B>Класс/Предмет:</B>&nbsp;&nbsp;&nbsp;</TD>
	<TD><I><%=DB2HTML(Storage.GetData( strID, "ClassName" ))%></I></TD>
</TR>
<TR> 
	<TD ALIGN="RIGHT"><B>Учитель:</B>&nbsp;&nbsp;&nbsp;</TD>
	<TD><I><%=DB2HTML(Storage.GetData( strID, "TeacherName" ))%></I></TD>
</TR>
<TR> 
	<TD ALIGN="RIGHT"><B>Школа:</B>&nbsp;&nbsp;&nbsp;</TD>
	<TD><I><%=DB2HTML(Storage.GetData( strID, "SchoolName" ))%>, <%=DB2HTML(Storage.GetData( strID, "City" ))%></I></TD>
</TR>
<TR> 
	<TD ALIGN="RIGHT"><B>Дата:</B>&nbsp;&nbsp;&nbsp;</TD>
	<TD><I><%=FormatDateTime( Now, vbLongDate )%></I></TD>
</TR>
</TABLE>
<P></P>
<%
Dim adoCmd, adoCmd1, adoRs, List, strDate
Set List = lacc.GetStudentResults( strAccessToken, Storage.GetData( strID, "ClassID" ), LAID_A )
CheckLACCError

If List.Count > 0 Then
	Set adoCmd = Server.CreateObject("ADODB.Command")
	adoCmd.ActiveConnection = adoConn
	adoCmd.Prepared = True
	adoCmd.CommandText = "SELECT Title, Source, ReadingLevel FROM Articles, TESTVIEW('" & strTestSuffix & "') T WHERE (Articles.ArticleID=T.ArticleID) AND (T.TestID=?)"
	adoCmd.Parameters.Append adoCmd.CreateParameter( "TestID", adInteger, adParamInput )

	Set adoCmd1 = Server.CreateObject("ADODB.Command")
	adoCmd1.ActiveConnection = adoConn
	adoCmd1.Prepared = True
	adoCmd1.CommandText = "SELECT Title, Source, ReadingLevel FROM Articles WHERE (Articles.ArticleID=?)"
	adoCmd1.Parameters.Append adoCmd1.CreateParameter( "ArticleID", adInteger, adParamInput )
%>
	<H3 ALIGN="CENTER">Вы полностью выполнили следующие задания:</H3>
	<TABLE ALIGN="CENTER" BORDER="1" CELLPADDING="5" CELLSPACING="0">
	<TR>
		<TH>Дата<BR>выполнения</TH><TH>Заголовок</TH><TH>Источник</TH><TH>Уровень<BR>сложности</TH><TH>Баллы<BR>за тест</TH>
	</TR>
	<%For Each Item In List
		strDate = Item.Field("donedate")
		Dim TA_ID
		TA_ID = Item.Field("parameters")
		If Left(TA_ID,1)<>"A" Then
			adoCmd("TestID") = TA_ID
			Set adoRs = adoCmd.Execute()
		Else
			adoCmd1("ArticleID") = Mid(TA_ID,2)
			Set adoRs = adoCmd1.Execute()
		End If
		CheckADOError
		If Not adoRS.EOF Then%>
			<TR>
				<TD ALIGN="CENTER"><%=CDate(strDate)%></TD>
				<TD ALIGN="LEFT"><%=DB2HTML(adoRs("Title"))%></TD>
				<TD ALIGN="LEFT"><%=DB2HTML(adoRs("Source"))%></TD>
				<TD ALIGN="CENTER"><%=adoRs("ReadingLevel")%></TD>
				<TD ALIGN="CENTER"><%=Item.Field("result")*100/RESULT_RATIO%></TD>
			</TR>
		<%End If%>
	<%Next%>
	</TABLE>
<%End If%>
<P></P>
<FONT SIZE="+1">
В итоге, вы прочитали <%=FormatNoun("текст",nTotalTests,1)%>, и ваш средний результат равен <B><I><FONT SIZE="+2"><%=nAvgScore%></FONT></I></B>.<BR>
</FONT>
<P></P>
<HR>
<FONT SIZE=-1><I><%=COPYRIGHT%></I></FONT>
</BODY>
</HTML>