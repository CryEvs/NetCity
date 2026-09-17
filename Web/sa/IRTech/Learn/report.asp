<!-- #INCLUDE FILE="include/header.asp" -->
<%
Sub CheckLACCError()
    If Err.Number <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

nInfoType = 0
Call OpenDatabase
Call CheckSession  ' PRODUCT_NAME is known after OpenDatabase
strPageTitle = PRODUCT_NAME & " - Отчет"

Dim UserInfo
Set UserInfo = lacc.GetUserInfo( strAccessToken )

Dim strStudentID
strStudentID        = CStr( UserInfo.Field("userid") )

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

Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%><SCRIPT>
function GoDetailedReport()
{
	window.open( 'report2.asp?ID=<%=strID%>&LAID=<%=LAID_A%>', '_blank', 'status=yes,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no' );
}
function GoMainMenu() 
{
	document.forms[0].submit(); 
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintHeaderMessage("Добро пожаловать, " & DB2HTML(Storage.GetData( strID, "StudentName" )) & "!")
Call PrintPreNoButtonsPage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
BeginForm( "main.asp" )
EndForm
%>
<H1 ALIGN="CENTER"><FONT COLOR="red">Отчет об успеваемости</FONT></H1>
<TABLE BORDER="1" CELLPADDING="5">
<TR> 
	<TD BGCOLOR="#E7EFF7" ALIGN="RIGHT"><B>Ученик:</B></TD>
	<TD BGCOLOR="#FFFFFF"><I><%=DB2HTML(Storage.GetData( strID, "StudentName" ))%></I></TD>
</TR>
<TR> 
	<TD BGCOLOR="#E7EFF7" ALIGN="RIGHT"><B>Класс/Предмет:</B></TD>
	<TD BGCOLOR="#FFFFFF"><I><%=DB2HTML(Storage.GetData( strID, "ClassName" ))%></I></TD>
</TR>
<TR> 
	<TD BGCOLOR="#E7EFF7" ALIGN="RIGHT"><B>Учитель:</B></TD>
	<TD BGCOLOR="#FFFFFF"><I><%=DB2HTML(Storage.GetData( strID, "TeacherName" ))%></I></TD>
</TR>
<TR> 
	<TD BGCOLOR="#E7EFF7" ALIGN="RIGHT"><B>Школа:</B></TD>
	<TD BGCOLOR="#FFFFFF"><I><%=DB2HTML(Storage.GetData( strID, "SchoolName" ))%>, <%=DB2HTML(Storage.GetData( strID, "City" ))%></I></TD>
</TR>
<TR> 
	<TD BGCOLOR="#E7EFF7" ALIGN="RIGHT"><B>Дата:</B></TD>
	<TD BGCOLOR="#FFFFFF"><I><%=FormatDateTime( Now, vbLongDate )%></I></TD>
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
				<TD ALIGN="LEFT"><a href="cn_results.asp?AT=<%=strAccessToken%>&TTSURL=<%=Server.URLEncode(Storage.GetData( strID, "TTSURL" ))%>&LAID=<%=LAID_A%>&BACK=<%=Server.URLEncode("report.asp?ID=" &strID&"&LAID="&LAID_A)%>&STUDENTID=<%=strStudentID%>&AID=<%=Item.Field("aid")%>"><%=DB2HTML(adoRs("Title"))%></a></TD>
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
В итоге, вы прочитали <%=FormatNoun("текст",nTotalTests,1)%>, и ваш средний результат равен <B><I><FONT SIZE="+2"><%=FormatNumber(nAvgScore,2)%></FONT></I></B>.<BR>
</FONT>
<P></P>
<CENTER>
	<%=ShowButton( "Details", "Для печати...", "JavaScript:GoDetailedReport()", "Для печати" )%>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	<%=ShowButton( "MainMenu", "Главное меню", "JavaScript:GoMainMenu()", "Главное меню" )%>
</CENTER>
<P>&nbsp;</P>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
BeginHint%>
Нажмите кнопку <B><I><U>Для печати...</U></I></B>, чтобы посмотреть этот отчет в виде, удобном для печати.<BR>
<%EndHint
Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
