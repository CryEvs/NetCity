<!-- #INCLUDE FILE="include/header.asp" -->
<%
Sub PrintHeader( ind, header, name )
	Response.Write "<TH ><NOBR>"
	If nSortOrder = ind Then 
		Response.Write "<IMG SRC=""../images/upd.gif"" BORDER=0 ALIGN=MIDDLE>"
	Else
		Response.Write "<A HREF=""JavaScript:ChangeSortMode(" & ind & ")"" onmouseover=""self.status='Упорядочить по " & name & "';return true;"" onmouseout=""self.status=''""><IMG SRC=""../images/up.gif"" BORDER=0 ALIGN=MIDDLE></A>"
	End If
	Response.Write header
	If nSortOrder = -ind Then 
		Response.Write "<IMG SRC=""../images/downd.gif"" BORDER=0 ALIGN=MIDDLE>"
	Else
		Response.Write "<A HREF=""JavaScript:ChangeSortMode(" & -ind & ")"" onmouseover=""self.status='Упорядочить по " & name & "';return true;"" onmouseout=""self.status=''""><IMG SRC=""../images/down.gif"" BORDER=0 ALIGN=MIDDLE></A>"
	End If
	Response.Write "</NOBR></TH>"
End Sub

Sub SortAssignments
    Dim ind
    ind = Abs(nSortOrder)
    For i = 0 To UBound(arrAssignments) - 1
        Dim i, j, k, v, b
        k = i
        v = arrAssignments(i,ind)
        For j = i + 1 To UBound(arrAssignments) 
			If VarType(v) = vbString Then
				b = UCase(arrAssignments(j,ind)) > UCase(v)
			Else
				b = arrAssignments(j,ind) > v
			End If
            If nSortOrder < 0 Then b = Not b
            If b Then
                k = j
                v = arrAssignments(j,ind)
            End If
        Next
        If i <> k Then
            For j = 0 To UBound(arrAssignments,2) 
                v = arrAssignments(k,j)
                arrAssignments(k,j) = arrAssignments(i,j)
                arrAssignments(i,j) = v
            Next
        End If        
    Next
End Sub

Function PageCount( nArticleCount, nArticlePerPage )
    Dim n, r
    n = Fix( nArticleCount / nArticlePerPage )
    r = nArticleCount - n * nArticlePerPage
    If r = 0 Then
	    PageCount = n
    Else
	    PageCount = n + 1
    End If
End Function

Call OpenDatabase
Call CheckSession  ' PRODUCT_NAME is known after OpenDatabase
strPageTitle = PRODUCT_NAME & " - Главное меню"

If Storage.GetData( strID, "LAID" ) <> LAID_A Then Call RedirectToScreen("main.asp")
'Response.Redirect "main.asp" & "?id=" & strID

Call Storage.SetData( strID, "IsGraded", Null )
Dim i, List, arrAssignments
arrAssignments = Storage.GetData( strID, "Assignments" )

If IsEmpty(arrAssignments) Or IsNull(arrAssignments) Then Call RedirectToScreen("main.asp")
'Response.Redirect "main.asp" & "?id=" & strID
If UBound(arrAssignments) < 0 Then Call RedirectToScreen("main.asp")
'Response.Redirect "main.asp" & "?id=" & strID

Dim nPageNo, strPageNo
strPageNo = dictParams.Item("Page")
If IsEmptyStr(strPageNo) Then strPageNo = Storage.GetData( strID, "PageNo_A" )
nPageNo = CLng(strPageNo)
If nPageNo <> CLng(Storage.GetData( strID, "PageNo_A" )) Then
    Call Storage.SetData( strID, "PageNo_A", nPageNo )
End If

Dim nSortOrder
nSortOrder = GetSafeLng( dictParams.Item("SortOrder"), 0 )
If nSortOrder = 0 Then nSortOrder = CLng(Storage.GetData( strID, "SortOrder_A" ))
If nSortOrder = 0 Then nSortOrder = -SORT_BY_ASSIGNMENT_NAME
If nSortOrder <> CLng(Storage.GetData( strID, "SortOrder_A" )) Then
    Call SortAssignments
    Call Storage.SetData( strID, "SortOrder_A", nSortOrder )
    Call Storage.SetData( strID, "Assignments", arrAssignments )
End If
%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function ChangeSortMode( ind )
{
	var form = document.forms[0];
	form.elements['SortOrder'].value = ind;
	form.submit();
}
function GoPage( page )
{ 
	var form = document.forms[0];
	form.elements['Page'].value = page;
	form.submit();
}
function ViewReportCard() 
{ 
	var form = document.forms[0];
	form.action = 'report.asp';
	form.submit();
}
function ReloadAssignment() 
{ 
	var form = document.forms[0];
	form.action = 'main.asp';
	form.elements['Reload'].value = 1;
	form.submit();
}
function ViewSummary( testID, assignmentID ) 
{ 
	var form = document.forms[0];
	form.action = 'summary.asp';
	form.elements['TestID'].value = testID;
	form.elements['AssignmentID'].value = assignmentID;
	form.submit();
}
function DoQuit() 
{ 
	var form = document.forms[0];
	if( window.confirm( 'Вы действительно хотите выйти?' ) ) 
	{
		window.forceClosing = true;
		window.close();
	} 
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintHeaderMessage("Добро пожаловать, " & DB2HTML(Storage.GetData( strID, "StudentName" )) & "!")%>
<%Call PrintPrePage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%BeginForm( "main_A.asp" )%>
<INPUT TYPE="HIDDEN" NAME="SortOrder" VALUE="<%=nSortOrder%>">
<INPUT TYPE="HIDDEN" NAME="Page" VALUE="<%=nPageNo%>">
<INPUT TYPE="HIDDEN" NAME="Reload" VALUE="">
<INPUT TYPE="HIDDEN" NAME="TestID" VALUE="">
<INPUT TYPE="HIDDEN" NAME="AssignmentID" VALUE="">
<%EndForm%>

<CENTER>
	<TABLE BORDER=0 WIDTH=80% CELLSPACING=0 CELLPADDING=3>
	<TR><TH ALIGN=CENTER >
		<FONT SIZE="+1"><%=Storage.GetData( strID, "TeacherName" )%> выбрал(а) для вас следующие тексты. Прочитайте текст, а затем ответьте на контрольные вопросы. Чтобы выбрать текст, нажмите на его заголовок.</FONT>
	</TH></TR>
	</TABLE>
<%	'Check if we have late tests
	For i = 0 To UBound(arrAssignments)
	    If arrAssignments( i, DUE_DATE ) < Now Then%>
	        <TABLE BORDER=0 WIDTH=80% CELLSPACING=0 CELLPADDING=3>
	        <TR>
				<TH ALIGN=CENTER>
					<FONT SIZE="+1" COLOR="red">Вы не выполнили эти тесты. Пожалуйста, немедленно выполните их.</FONT>
				</TH>
			</TR>
			</TABLE>
<%	        Exit For
	    End If
	Next%>
	<P></P>
		       
	<TABLE BORDER=1 CELLPADDING=5 WIDTH=95% >
	<TR>
		<TH>&#35;</TH>
		<%Call PrintHeader( SORT_BY_ASSIGNMENT_NAME, "Задание", "Заданию" )%>
		<%Call PrintHeader( SORT_BY_SUBJECT, "Раздел", "Разделу" )%>
		<TH WIDTH=80% >Заголовок</TH>
		<%Call PrintHeader( SORT_BY_DUE_DATE, "Срок сдачи", "Сроку сдачи" )%>
	</TR>
<%
	Dim bLate, bNotFound, nLastArticleNo
	bLate = False
	bNotFound = False
	nLastArticleNo = ( nPageNo + 1 ) * PAGE_SIZE - 1
	If nLastArticleNo > UBound(arrAssignments) Then nLastArticleNo = UBound(arrAssignments)

	Dim adoCmd, adoCmd1, adoRs
	Set adoCmd = Server.CreateObject("ADODB.Command")
	adoCmd.ActiveConnection = adoConn
	adoCmd.Prepared = True
	adoCmd.CommandText = "SELECT Articles.Title FROM Articles, TESTVIEW('" & strTestSuffix & "') T WHERE (Articles.ArticleID=T.ArticleID) AND (T.TestID=?)"
	adoCmd.Parameters.Append adoCmd.CreateParameter( "TestID", adInteger, adParamInput )

	Set adoCmd1 = Server.CreateObject("ADODB.Command")
	adoCmd1.ActiveConnection = adoConn
	adoCmd1.Prepared = True
	adoCmd1.CommandText = "SELECT Articles.Title FROM Articles WHERE (Articles.ArticleID=?)"
	adoCmd1.Parameters.Append adoCmd1.CreateParameter( "ArticleID", adInteger, adParamInput )

	For i = nPageNo * PAGE_SIZE To nLastArticleNo
		Dim strTitle, TA_ID
		TA_ID = arrAssignments( i, TEST_ID )
		If Left(TA_ID,1)<>"A" Then
			adoCmd("TestID") = TA_ID
			Set adoRs = adoCmd.Execute()
		Else
			adoCmd1("ArticleID") = Mid(TA_ID,2)
			Set adoRs = adoCmd1.Execute()
		End If

		CheckADOError
		If Not adoRs.EOF Then strTitle = CStr(adoRs("Title"))
				
	    If IsEmptyStr(strTitle) Then
	        bNotFound = True%>
			<TR BGCOLOR=#cccccc>
<%	    Else            
	        If arrAssignments( i, DUE_DATE ) < Now Then
	            bLate = True%>
				<TR BGCOLOR=#ffbbbb>
<%	        Else%>
				<TR BGCOLOR=#ffffff>
<%	        End If
	    End If%>
	    <TD ALIGN=CENTER><%=(i+1)%></TD>
	    <TD ALIGN=CENTER><%=DB2HTML(arrAssignments( i, ASSIGNMENT_NAME ))%></TD>
	    <TD ALIGN=CENTER><%=arrAssignments( i, SUBJECT )%></TD>
<%		If IsEmptyStr(strTitle) Then%>
	        <TD ALIGN=LEFT><I>Контрольные вопросы не найдены</I></A></TD>
<%	    Else%>
		    <TD ALIGN=LEFT>
				<A HREF="JavaScript:ViewSummary('<%=arrAssignments( i, TEST_ID )%>',<%=arrAssignments( i, ASSIGNMENT_ID )%>)" onmouseover="self.status='Краткая аннотация';return true;" onmouseout="self.status=''"><I><%=strTitle%></I></A>
			</TD>
<%		End If%>
	    <TD ALIGN=CENTER><%=arrAssignments( i, DUE_DATE )%></TD>
	    </TR>
<%	Next%>
	</TABLE>

	<%If UBound(arrAssignments) >= PAGE_SIZE Then%>
		<P></P>
		<CENTER>
			<TABLE RULES=NONE BORDER=2 CELLPADDING=3 CELLSPACING=3>
			<TR>
				<%If nPageNo > 0 Then%>
					<TH BGCOLOR=#ffffff VALIGN=TOP>
						<A HREF="JavaScript:GoPage(<%=(nPageNo-1)%>)" onmouseover="self.status='Предыдущая страница';return true;" onmouseout="self.status=''">
							Пред.&nbsp;стр.
						</A>
					</TH>
				<%Else%>
					<TH BGCOLOR=#ffffff VALIGN=TOP>
						<FONT COLOR=#C0C0C0>Пред.&nbsp;стр.</FONT>
					</TH>
				<%End If%>
				<TH BGCOLOR=#ffffff ALIGN=CENTER>
				<%For i = 0 To PageCount( UBound(arrAssignments)+1, PAGE_SIZE ) - 1%>
					<%If i <> nPageNo Then%> 
						<A HREF="JavaScript:GoPage(<%=i%>)" onmouseover="self.status='Страница <%=(i+1)%>';return true;" onmouseout="self.status=''">
					<%End If%>
					<B>&nbsp;<%=(i+1)%>&nbsp;</B>
					<%If i <> nPageNo Then%>
						</A>
					<%End If%>
				<%Next%>
				</TH>
				<%If (nPageNo+1) * PAGE_SIZE <= UBound(arrAssignments) Then%>
					<TH BGCOLOR=#ffffff VALIGN=TOP>
						<A HREF="JavaScript:GoPage(<%=(nPageNo+1)%>)" onmouseover="self.status='Следующая страница';return true;" onmouseout="self.status=''">
							След.&nbsp;стр.
						</A>
					</TH>
				<%Else%>
					<TH BGCOLOR=#ffffff VALIGN=TOP>
						<FONT COLOR=#C0C0C0>След.&nbsp;стр.</FONT>
					</TH>
				<%End If%>
			</TR>
			</TABLE>
		</CENTER>
	<%End If%>
</CENTER>

<%If bLate Or bNotFound Then%>
    <P><B>Легенда:</B></P>
    <TABLE BORDER=0 ALIGN=LEFT>
	<TR>
		<TD ALIGN=LEFT>
			<TABLE BORDER=1><TR><TD BGCOLOR=#ffffff WIDTH=20>&nbsp;</TD></TR></TABLE>
		</TD>
		<TD>Невыполненные тесты</TD>
	</TR>
    <%If bLate Then%>
    <TR>
		<TD ALIGN=LEFT>
			<TABLE BORDER=1><TR><TD BGCOLOR=#ffbbbb WIDTH=20>&nbsp;</TD></TR></TABLE>
		</TD>
		<TD>Просроченные тесты</TD>
	</TR>
    <%End If%>
    <%If bNotFound Then%>
    <TR>
		<TD ALIGN=LEFT>
			<TABLE BORDER=1><TR><TD BGCOLOR=#cccccc WIDTH=20>&nbsp;</TD></TR></TABLE>
		</TD>
		<TD>Тесты не найдены</TD>
	</TR>
    <%End If%>
    </TABLE>
<%End If%>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=3 WIDTH=100% CELLSPACING=0 CELLPADDING=3 RULES=0>
<TR>
	<TD>
		<B>Вторая попытка:</B> <I><%If CLng(Storage.GetData( strID, "Watermark" )) > 0 Then%>Разрешено<%Else%>Запрещено<%End If%></I><BR>
		<B>Ссылка на текст:</B> <I><%If Storage.GetData( strID, "MayReadArticle" ) Then%>Разрешено<%Else%>Запрещено<%End If%></I><BR>
		<B>Просмотр вопросов:</B> <I><%If Storage.GetData( strID, "ReviewTest" ) Then%>Разрешено<%Else%>Запрещено<%End If%></I><BR>
		<B>Вопросы:</B><BR><I>
			<%Select Case CLng(Storage.GetData( strID, "QuestionsOrder" ))%>
				<%Case qo_AllRnd%>100% случайный порядок
				<%Case qo_80Rnd%>80% случайный порядок
				<%Case qo_AllSame%>100% одинаковый порядок
				<%Case Else%>Не определено
			<%End Select%>
		</I>
	</TD>
</TR>
</TABLE>
<BR>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=3>
<TR>
	<TD ALIGN=CENTER>
		<%=ShowButton( "Reload", "Обновить", "JavaScript:ReloadAssignment()", "Обновить задания" )%><BR>
		<%'=ShowButton( "ChangeClass", "Сменить класс", "JavaScript:GoChangeClass()", "Сменить класс" )%><!--BR-->
		<%=ShowButton( "ReportCard", "Отчет", "JavaScript:ViewReportCard()", "Посмотреть отчет" )%><BR>
		<HR>
		<%=ShowButton( "Quit", "Выход", "JavaScript:DoQuit()", "Выйти из " & PRODUCT_NAME )%>
	</TD>
</TR>
</TABLE>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
