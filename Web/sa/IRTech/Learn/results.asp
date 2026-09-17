<!-- #INCLUDE FILE="include/header.asp" -->
<%
Call CheckSession
Call CheckGradedAssignment
Call OpenDatabase
Call CheckQuestions
strPageTitle = PRODUCT_NAME & " - Результаты"

Dim strQTypes(3),strQTypeID(3), curType

Dim adoCmd1, adoRS
Set adoCmd1 = Server.CreateObject("ADODB.Command")
adoCmd1.ActiveConnection = adoConn
adoCmd1.Prepared = True
adoCmd1.CommandText = "SELECT QuestionTypeID, "&csType&" FROM QuestionTypes"
Set adoRS = adoCmd1.Execute
CheckADOError
curType = 0
Do While Not adoRS.EOF
  strQTypeID(curType) = adoRS("QuestionTypeID")
  strQTypes(curType) = adoRS("Type")
  adoRS.MoveNext
  curType = curType+1
Loop
If curType<>4 Then Call HandleError( "Неверное значение QuestionTypes", curType, "Пожалуйста, обратитесь к разработчикам системы." )

adoCmd1.CommandText = "SELECT ChoiceNumber FROM Choices WHERE (QuestionID=?) AND (CValue>0)"
adoCmd1.Parameters.Append adoCmd1.CreateParameter( "QuestionID", adInteger, adParamInput, 4, 0 )

Dim nScore, nAnsweredRight, bSecondAttempt, bIsCompleted, i,j, nWatermark, nPoints, nMaxPoints, nCurrPoints, nNewLexile

bSecondAttempt = Storage.GetData( strID, "SecondAttempt" )
nAnsweredRight = Storage.GetData( strID, "AnsweredRight" )
nScore = Storage.GetData( strID, "Score" )
bIsCompleted = Storage.GetData( strID, "IsCompleted" )
nWatermark = GetSafeLng( Storage.GetData( strID, "Watermark" ), 0 )

If AUTO_PROGRESSION Then
	nPoints = Storage.GetData( strID, "Points" )
	nMaxPoints = Storage.GetData( strID, "MaxPoints" )
	nCurrPoints = GetSafeLng( Storage.GetData( strID, "CurrPoints" ), 0 )
	nNewLexile = GetSafeLng( Storage.GetData( strID, "NewLexile" ), 0 )
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
function ViewQuestion( question ) 
{
	var form = document.forms[0];
	form.elements['Question'].value = question;
	form.action = 'testview.asp';
	form.submit();
}
function refreshOpener()
{
    if (window.opener)
    {
        if (window.opener.refreshAssignments)
        {
            window.opener.refreshAssignments();
        }
    }
}
</SCRIPT>
<%strOnLoad = "refreshOpener();"%>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%
Dim strTitle, strCitation
strTitle = Storage.GetData( strID, "ArticleTitle" )
strCitation = Storage.GetData( strID, "ArticleCitation" )
%>
<%Call PrintHeaderMessage(DB2HTML(strTitle) & "<BR> (" & DB2HTML(strCitation) & ")")%>
<%Call PrintPrePage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%BeginForm( "main.asp" )%>
<INPUT TYPE="HIDDEN" NAME="AssignmentID" VALUE="<%=strAssignmentID%>">
<INPUT TYPE="HIDDEN" NAME="TestID" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="Reload" VALUE="<%If bIsCompleted Then%>1<%End If%>">
<INPUT TYPE="HIDDEN" NAME="Question" VALUE="">
<P>
	<TABLE BORDER=2 CELLPADDING=10 WIDTH=80% ALIGN=CENTER>
	<TR BGCOLOR=#ffffff>
		<TD ALIGN=CENTER>
			<%If nWatermark > 0 Then%>
				<B><%If Not bSecondAttempt Then%>С первой<%Else%>Со второй<%End If%></B> попытки вы 
			<%Else%>
				Вы
			<%End If%>
			правильно ответили на <B><%=nAnsweredRight%></B> <%=AddEnding1("вопрос",nAnsweredRight)%> из <B><%=(UBound(arrQuestions)+1)%></B>.<BR>
			<%If bIsCompleted Then%>
				Ваши баллы за этот тест: <B><%=nScore*100/RESULT_RATIO%></B>.<BR>
				Результаты приведены ниже. Чтобы снова увидеть вопросы и правильные ответы, нажмите на номер вопроса.
			<%Else%>
				Попробуйте еще раз прочитать текст и ответить на вопросы, чтобы улучшить ваши очки. Будет засчитан средний результат.<BR>Удачи!
			<%End If%>
		</TD>
	</TR>
	</TABLE>
</P>
<%If bIsCompleted Then%>
	<%If AUTO_PROGRESSION Then%>
		<%If nCurrPoints <> 0 And nNewLexile <> 0 Then%>
			<TABLE BORDER=2 CELLPADDING=10 WIDTH=80% ALIGN=CENTER>
			<TR BGCOLOR=#ffffff>
				<TD ALIGN=CENTER>
					<FONT COLOR=#ff0000>
						<B>Поздравляю!</B><BR>
						Вы набрали <B><%=nCurrPoints%></B> <%=AddEnding1("балл",nCurrPoints)%> в рамках текущего уровня сложности, и теперь ваш уровень увеличивается до <B><%=nNewLexile%></B>
					</FONT>
				</TD>
			</TR>
			</TABLE>
		<%End If%>
	<%End If%>
	<A NAME=grades></A>
	<P>
		<TABLE BORDER=2 CELLPADDING=3 WIDTH=80% ALIGN=CENTER>
		<TR><TH COLSPAN=4>Результаты теста</TH></TR>
		<TR BGCOLOR=#ffffff><TH ALIGN=CENTER>Вопрос</TH><TH>Ваш ответ</TH><TH>Правильный ответ</TH><TH>Тип вопроса</TH>
		</TR>
<%	
If False Then
		For i = 0 To UBound(arrQuestions)
			curType = -1
			For j=0 To UBound(strQTypes)
			  If strQTypeID(j)=arrQuestions(i, QST_TYPE) Then
				curType = j
				Exit For
			  End If
			Next
			If curType <> -1 Then
				adoCmd1("QuestionID") = arrQuestions( i, QST_ID )
				Set adoRS = adoCmd1.Execute
				CheckADOError
				If Not adoRS.EOF Then
					If arrQuestions( i, QST_USERANSWER ) = CLng(adoRs("ChoiceNumber")) Then%>
						<TR BGCOLOR=#00ff00>
					<%Else%>
						<TR BGCOLOR=#ff0000>
					<%End If%>
					<TD ALIGN=CENTER>
						<A HREF="JavaScript:ViewQuestion(<%=i%>)" onmouseover="self.status='Просмотреть вопрос <%=(i+1)%>';return true;" onmouseout="self.status=''">
							&nbsp;&nbsp;&nbsp;&nbsp;<%=(i+1)%>&nbsp;&nbsp;&nbsp;&nbsp;
						</A>
					</TD>
					<TD ALIGN=CENTER><%=arrQuestions( i, QST_USERANSWER )%></TD>
					<TD ALIGN=CENTER><%=CLng(adoRs("ChoiceNumber"))%></TD>
					<TD ALIGN=CENTER><%=strQTypes( curType )%></TD>
					</TR>
<%				End If
			End If
		Next
Else%>
	<TR BGCOLOR=#afffff>
		<TH COLSPAN=5>Извините, Ваш учитель запретил просмотр правильных ответов.</TH>
	</TR>
<%
End If
%>
	</TABLE>
</P>
<%End If%>
</CENTER>
<%EndForm%>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR>
	<TD ALIGN=CENTER>
		<%If bIsCompleted Then%>
		    <%=ShowButton( "MainMenu", "Главное меню", "JavaScript:GoMainMenu()", "Главное меню" )%>
		<%Else%>
			<%=ShowButton( "Fulltext", "Читать текст", "JavaScript:GoFullText()", "Читать текст" )%>
		<%End If%>
	</TD>
</TR>
</TABLE>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
