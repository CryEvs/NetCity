<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
nInfoType = 0
CheckCNTeacherLogin

Dim nPageNo, nSortOrder, strOriginTests, strTests, arrTests, i, lngSubjectID

Dim nCLID, nTID

nCLID = Request("CLID")
nTID = Request("TID")

lngSubjectID = GetSafeLng( Request("Subject"), 1 )
nPageNo = GetSafeLng( Request("PageNo"), 0 )
nSortOrder = GetSafeLng( Request("SortOrder"), SORT_BY_SUBJECT )
strOriginTests = GetSafeStr( Request("Tests") )

Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Назначение заданий"

Dim adoCmd, adoRs
Set adoCmd = Server.CreateObject("ADODB.Command")
adoCmd.ActiveConnection = adoConn
adoCmd.CommandText = "SELECT Articles.*, T.Name, Subjects.Subject, ArticleTypes."&csType&" " & _
                     "FROM Articles, TESTVIEW('" & strTestSuffix & "') T, Subjects, ArticleTypes " & _
                     "WHERE Subjects.SubjectID=Articles.SubjectID AND " & _
                           "ArticleTypes.ArticleTypeID=Articles.TypeID AND " & _
                           "T.ArticleID=Articles.ArticleID AND " & _
                           "T.TestID=?"
adoCmd.Parameters.Append adoCmd.CreateParameter( "TestID", adInteger, adParamInput, 4, 0 )
adoCmd.Prepared = True

Dim adoCmd1
Set adoCmd1 = Server.CreateObject("ADODB.Command")
adoCmd1.ActiveConnection = adoConn
adoCmd1.CommandText = "SELECT Articles.*, Subjects.Subject, ArticleTypes."&csType&" " & _
                     "FROM Articles, Subjects, ArticleTypes " & _
                     "WHERE Subjects.SubjectID=Articles.SubjectID AND " & _
                           "ArticleTypes.ArticleTypeID=Articles.TypeID AND " & _
                           "Articles.ArticleID =?"
adoCmd1.Parameters.Append adoCmd1.CreateParameter( "ArticleID", adInteger, adParamInput, 4, 0 )
adoCmd1.Prepared = True
strTests = strOriginTests
If Left( strTests, 1 ) = ";" Then strTests = Right( strTests, Len(strTests) - 1 )
If Right( strTests, 1 ) = ";" Then strTests = Left( strTests, Len(strTests) - 1 )

If Not IsEmptyStr(strTests) Then arrTests = Split( strTests, ";" )
%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function GoBack() 
{ 
	var form = document.forms[0];
	form.submit();
}
function DoSave() 
{ 
	var form = document.forms[1];
	form.submit();
}
function CloseWnd() 
{ 
	if( confirm('Вы уверены, что хотите закрыть это окно без сохранения выбранных заданий?') )
	{
		if( window.parent )
			window.parent.window.close();
		else
			window.close();
	}
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintHeaderMessage("Назначение заданий")
Call PrintPreNoButtonsPage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call BeginTeacherForm( "cn_articles.asp", "Form1" ) %>
<INPUT TYPE="HIDDEN" NAME="CLID" VALUE="<%=nCLID%>">
<INPUT TYPE="HIDDEN" NAME="TID" VALUE="<%=nTID%>">
<INPUT TYPE="HIDDEN" NAME="Subject" VALUE="<%=lngSubjectID%>">
<INPUT TYPE="HIDDEN" NAME="SortOrder" VALUE="<%=nSortOrder%>">
<INPUT TYPE="HIDDEN" NAME="PageNo" VALUE="<%=nPageNo%>">
<INPUT TYPE="HIDDEN" NAME="Tests" VALUE="<%=strOriginTests%>"><%
Call EndTeacherForm
Call BeginTeacherForm( "/asp/t_saveproblems.asp", "Form2" ) %>
<CENTER>
	<%If Not IsEmptyStr(strTests) Then%>
		<H2 ALIGN="CENTER">Вы выбрали следующие тексты с контрольными вопросами:</H2>
		<TABLE BORDER=1 CELLPADDING=3 WIDTH=95% >
		<TR>
			<TH>&nbsp;</TH>
			<TH>Раздел</TH>
			<TH>Тип</TH>
			<TH>Заголовок</TH>
			<TH>Источник</TH>
			<TH>Уровень сложности</TH>
			<TH>Название теста</TH>
		</TR>
		<%Dim TA_ID, strTestName
		For i = 0 To UBound(arrTests)
			TA_ID = arrTests(i)
			If Left(TA_ID,1)<>"A" Then
				adoCmd("TestID") = TA_ID
				Set adoRs = adoCmd.Execute()
				strTestName =DB2HTML(adoRs("NAME"))
			Else
				adoCmd1("ArticleID") = Mid(TA_ID,2)
				Set adoRs = adoCmd1.Execute()
				strTestName="Read Article"
			End If
			CheckADOError
			If Not adoRs.EOF Then%>
				<TR BGCOLOR=#FFFFFF>
					<TD ALIGN=CENTER><%=(i+1)%>
					<INPUT TYPE="HIDDEN" NAME="name" VALUE="<%=DB2Value(adoRs("TITLE"))%>">
					<INPUT TYPE="HIDDEN" NAME="parameters" VALUE="<%=Trim(arrTests(i))%>">
					<INPUT TYPE="HIDDEN" NAME="lexile" VALUE="<%=DB2Value(adoRs("READINGLEVEL"))%>">
					</TD>
					<TD ALIGN=CENTER><%=DB2HTML(adoRs("SUBJECT"))%></TD>
					<TD ALIGN=CENTER><%=DB2HTML(adoRs("TYPE"))%></TD>
					<TD ALIGN=LEFT><%=DB2HTML(adoRs("TITLE"))%></TD>
					<TD ALIGN=CENTER><%=DB2HTML(adoRs("SOURCE"))%></TD>
					<TD ALIGN=CENTER><%=DB2HTML(adoRs("READINGLEVEL"))%></TD>
					<TD ALIGN=CENTER NOWRAP><%=strTestName%></TD>
				</TR>
			<%End If%>
		<%Next%>
		</TABLE>
		<P></P>
		<%=ShowButton( "Save", "Сохранить", "JavaScript:DoSave()", "Сохранить эти задания и закрыть окно" )%>
		&nbsp;&nbsp;&nbsp;
		<%=ShowButton( "Back", "Назад", "JavaScript:GoBack()", "Назад" )%>
	<%Else%>
		<H2 ALIGN="CENTER">Вы не выбрали никаких текстов</H2>
		<%=ShowButton( "Back", "Назад", "JavaScript:GoBack()", "Назад" )%>
		&nbsp;&nbsp;&nbsp;
		<%=ShowButton( "Close", "Закрыть", "JavaScript:CloseWnd()", "Закрыть окно" )%>
	<%End If%>
</CENTER>
</FORM>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
