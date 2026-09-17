<!-- #INCLUDE FILE="include/header.asp" -->
<%
Const IND_CHOICES = 10

Sub CheckLACCError()
    If Err <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode = 10007 Then Call RedirectToScreen("login.asp")
    'Response.Redirect "login.asp"
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

Call CheckSession

Call CheckAssignment
Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Контрольные вопросы"

dim strReviewTest

strReviewTest = dictParams.Item("ReviewTest")

Dim adoRs

If nTestID <> Storage.GetData( strID, "CurrentTestID" ) Then
	Call Storage.SetData( strID, "Questions", Null )
End If

If Not IsEmptyStr(Storage.GetData( strID, "IsGraded" )) Then 
	Call Storage.SetData( strID, "Assignments", Null )
	Call RedirectToScreen("main.asp")
	'Response.Redirect "main.asp?id=" & strID
End If

Dim strQuestionNo, nQuestionNo, i, j
arrQuestions = Storage.GetData( strID, "Questions" )

If IsEmpty(arrQuestions) Or IsNull(arrQuestions) Then 
	Set adoRs = adoConn.Execute( "SELECT COUNT(*) Cnt FROM Questions WHERE TestID=" & nTestID )
	CheckADOError
	If Not adoRs.EOF Then
		ReDim arrQuestions( CLng(adoRs("Cnt")) - 1, QUESTION_LAST_FIELD )
		Set adoRs = adoConn.Execute( "SELECT QuestionID, TypeID FROM Questions WHERE TestID=" & nTestID & " ORDER BY QNumber" )
		CheckADOError
		Randomize
		For i = 0 To UBound(arrQuestions)
			If GetSafeLng( Storage.GetData( strID, "QuestionsOrder" ), 0 ) Then
				arrQuestions( i, QST_ID ) = CLng(adoRs("QuestionID"))
				arrQuestions( i, QST_TYPE ) = CStr(adoRs("TypeID"))
				arrQuestions( i, QST_USERANSWER ) = 0
			Else
				j = Int((UBound(arrQuestions) + 1) * Rnd)
				Do
					If IsEmpty(arrQuestions( j, QST_ID )) Then
						arrQuestions( j, QST_ID ) = CLng(adoRs("QuestionID"))
						arrQuestions( j, QST_TYPE ) = CStr(adoRs("TypeID"))
						arrQuestions( j, QST_USERANSWER ) = 0
						Exit Do
					End If
					j = ( j + 1 ) Mod ( UBound(arrQuestions) + 1 )
				Loop
			End If
			adoRs.MoveNext
		Next
		If GetSafeLng( Storage.GetData( strID, "QuestionsOrder" ), 0 ) = qo_80Rnd Then 
			Dim nSize, arrTmpQuestions
			nSize = Int( 0.8 * ( UBound(arrQuestions) + 1 ) )
			If nSize < 1 Then nSize = 1
			ReDim arrTmpQuestions( nSize - 1, QUESTION_LAST_FIELD )
			For i = 0 To nSize - 1
				For j = 0 To QUESTION_LAST_FIELD
					arrTmpQuestions(i,j) = arrQuestions(i,j)
				Next
			Next
			arrQuestions = arrTmpQuestions
		End If

		Call Storage.SetData( strID, "Questions", arrQuestions )
		Call Storage.SetData( strID, "CurrentTestID", nTestID )
	End If
	nQuestionNo = 0
Else
	nQuestionNo = CLng(dictParams.Item("NextQuestion"))
	If Not IsEmptyStr( dictParams.Item("Question") ) Then
		if strReviewTest <> "Y" then
			Dim nPrevQuestionNo
			nPrevQuestionNo = CLng(dictParams.Item("Question"))
			If nQuestionNo <> nPrevQuestionNo Or Not IsEmptyStr(dictParams.Item("ReadArticle")) Then
				'Set the current answers
				If arrQuestions( nPrevQuestionNo, QST_TYPE ) = "MCQ" Or arrQuestions( nPrevQuestionNo, QST_TYPE ) = "SEQ" Or arrQuestions( nPrevQuestionNo, QST_TYPE ) = "WEB" Or arrQuestions( nPrevQuestionNo, QST_TYPE ) = "PFQ" Then
					If Not IsEmpty(dictParams.Item("Answer")) Then
						arrQuestions( nPrevQuestionNo, QST_USERANSWER ) = CLng(dictParams.Item("Answer"))
						Call Storage.SetData( strID, "Questions", arrQuestions )
					End If
				End If
			End If
			
		End If
		Call SaveParamsInDict

		If Not IsEmptyStr(dictParams.Item("ReadArticle")) Then
		    Call RedirectToScreen("fulltext.asp")
			'Response.Redirect "fulltext.asp?id=" & strID
		End If

		If nQuestionNo > UBound(arrQuestions) Then
			Call RedirectToScreen("grade.asp")
			'Response.Redirect "grade.asp?id=" & strID
		End If
	End If
End If

If nQuestionNo > UBound(arrQuestions) Or nQuestionNo < LBound(arrQuestions)Then
    Call RedirectToScreen("main.asp")
	'Response.Redirect "main.asp?id=" & strID
End If

%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function SetAnswer(nAnswer) 
{
	var form = document.forms[0];
	form.elements[ <%=IND_CHOICES%> - 1 + nAnswer ].checked = true;
}
function IsAnswer() 
{
	var form = document.forms[0];
	<%if strReviewTest = "Y" then%>
	return true;
	<%End If%> 
	for( i = <%=IND_CHOICES%>; i < form.elements.length; i++ ) 
	{
		if( form.elements[i].checked ) return true;
	}
	alert('Пожалуйста, ответьте на этот вопрос.');
	return false;
}
function GoFullText() 
{
	var form = document.forms[0];
	form.elements['ReadArticle'].value = 'yes';
	form.submit();
}
function GoNext() 
{
	if( IsAnswer() ) 
	{
		var form = document.forms[0];
		form.elements['NextQuestion'].value = <%=(nQuestionNo+1)%>;
		form.submit();
	}
}
function GoPrev() 
{ 
	var form = document.forms[0];
	form.elements['NextQuestion'].value = <%=(nQuestionNo-1)%>;
	form.submit();
}
function GoMainMenu() 
{
	var form = document.forms[0];
	form.action = 'main.asp';
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
<%BeginForm( "test.asp" )%>
<INPUT TYPE="HIDDEN" NAME="BackPage" VALUE="test.asp">
<INPUT TYPE="HIDDEN" NAME="TestID" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="AssignmentID" VALUE="<%=strAssignmentID%>">
<INPUT TYPE="HIDDEN" NAME="Question" VALUE="<%=nQuestionNo%>">
<INPUT TYPE="HIDDEN" NAME="NextQuestion" VALUE="<%=nQuestionNo%>">
<INPUT TYPE="HIDDEN" NAME="ReadArticle" VALUE="">
<INPUT TYPE="HIDDEN" NAME="ReviewTest" VALUE="<%=strReviewTest%>"> 
<%
Dim adoCmd, strArr
Dim strQuestion, strUsageNotes

If Not( nQuestionNo > UBound(arrQuestions) Or nQuestionNo < LBound(arrQuestions) )Then
	If strReviewTest<>"Y" Then
		Dim Item
		Set Item = lacc.GetStudentAssignmentInfo( strAccessToken, strAssignmentID, SCORE )
		CheckLACCError
	End If	

	Set adoCmd = Server.CreateObject("ADODB.Command")
	adoCmd.ActiveConnection = adoConn
	adoCmd.CommandText = "SELECT * FROM QuestionInfo WHERE QuestionID=?"
	adoCmd.Parameters.Append adoCmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, arrQuestions( nQuestionNo, QST_ID ) )
	Set adoRs = adoCmd.Execute()
	CheckADOError

	strQuestion = CStr(adoRs("QText"))
	strUsageNotes = CStr(adoRs("UsageNotes"))

	If Not adoRs.EOF Then%>
		<CENTER>
			<FONT COLOR="red">
				<H3>Вопрос <%=(nQuestionNo+1)%> из <%=(UBound(arrQuestions)+1)%>
					<%If strReviewTest<>"Y" Then
						If Storage.GetData( strID, "LAID" ) = LAID_A Then
							Set Item = lacc.GetStudentAssignmentInfo( strAccessToken, strAssignmentID, SCORE )
						Else
							Set Item = lacc.GetStudentSPAssignmentInfo( strAccessToken, Storage.GetData( strID, "ClassID" ), LAID_SS, nTestID, SCORE )
						End If
						CheckLACCError
						If Not IsEmptyStr( Item.Field(SCORE) ) Then%> (Вторая попытка)<%End If%>
					<%End If%>	
				</H3>
			</FONT>
		</CENTER>
		<P></P>
<%	End If%>
	<TABLE BORDER=0 WIDTH=80% ALIGN=CENTER>
	<TR>
		<TD ALIGN=CENTER>
<%			Select Case arrQuestions( nQuestionNo, QST_TYPE )
				Case "SEQ"
					strArr = split( strQuestion, "|" )
					If UBound(strArr) >= 0 Then%>
						<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=3>
						<TR>
							<TD>
                                <%If UBound(strArr)=3 Then %>  							
								<B>Что пропущено:</B>
								<UL>
<%									For i = 0 To UBound(strArr)
										Writeln "<LI>" & DB2HTML(strArr(i))
									Next%>
								</UL>
								<%Else %>
								<B><%=DB2HTML(strArr(0))%></B>
								<UL>
<%									For i = 1 To UBound(strArr)
										Writeln "<LI>" & DB2HTML(strArr(i))
									Next%>
								</UL>
								<%End If%>
							</TD>
						</TR>
						</TABLE>
<%					End If
				Case "WEB"
					strArr = split( strQuestion, "|" )
					If UBound(strArr) = 5 Then%>
						<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=5>
							<%If strArr(0) = "" Then%>
								<TR><TD COLSPAN=2 ALIGN=CENTER><B>Заполните пустой блок:</B></TD></TR>
							<%Else%>
								<TR><TD COLSPAN=2 ALIGN=CENTER><B><%=DB2HTML(strArr(0))%></B></TD></TR>
							<%End If%>
							<TR><TD COLSPAN=2 ALIGN=CENTER><B><%=DB2HTML(strArr(1))%></B></TD></TR>
							<TR>
								<TD WIDTH=300 ALIGN=CENTER><%=DB2HTML(strArr(2))%></TD>
								<TD WIDTH=300 ALIGN=CENTER><%=DB2HTML(strArr(3))%></TD>
							</TR>
							<TR> 
								<TD WIDTH=300 ALIGN=CENTER><%=DB2HTML(strArr(4))%></TD>
								<TD WIDTH=300 ALIGN=CENTER><%=DB2HTML(strArr(5))%></TD>
							</TR>
						</TABLE> 
						
<%					Else%>
					    <TABLE  BORDER=2 BGCOLOR=#ffffff CELLPADDING=5> 
<%					    Dim cSpan
					    cSpan = UBound(strArr) - 1
					    If strArr(0) = "" Then%>  
						<TR><TD COLSPAN=<%=cSpan%> ALIGN=CENTER><B>Заполните пустой блок:</B></TD></TR> 
<%					    Else %>
						<TR><TD COLSPAN=<%=cSpan%> ALIGN=CENTER><B><%=strArr(0)%></B></TD></TR> 
<%					    End If
					    If strArr(1) = "" Then strArr(1) = "&nbsp;"%>
					    <TR><TD COLSPAN=<%=cSpan%> ALIGN=CENTER><B><%=strArr(1)%></B></TD></TR> 
					    <TR> 
<% 					    For i=2 To UBound(strArr)
						    If strArr(i) = "" Then strArr(i) = "&nbsp;" %>
						    <TD WIDTH=300 ALIGN=CENTER><%=strArr(i)%></TD> 
<%					    Next%>
					    </TR> 
					    </TABLE> 
<%                  End If
				Case "PFQ" %>
					<DIV ALIGN=CENTER><%=strQuestion%></DIV>

<%				Case Else%>
					<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=5>
						<TR><TD ALIGN=CENTER><B><%=DB2HTML(strQuestion)%><B></TD></TR>
					</TABLE>
<%			End Select%>
		</TD>
	</TR>
	</TABLE>
<%
	If strReviewTest<>"Y" Then	
		Set adoCmd = Server.CreateObject("ADODB.Command")
		adoCmd.ActiveConnection = adoConn
		adoCmd.CommandText = "SELECT Choices.* FROM Choices WHERE Choices.QuestionID=? ORDER BY Choices.ChoiceNumber"
		adoCmd.Parameters.Append adoCmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, arrQuestions( nQuestionNo, QST_ID ) )
		Set adoRs = adoCmd.Execute()
		CheckADOError
    
%>
		<TABLE BORDER=0 CELLPADDING=3 ALIGN=CENTER>
<%				Dim nChoiceNo, nChoiceNumber
				nChoiceNo = 0
				While Not adoRS.EOF%>
		<TR VALIGN=top>
<%					nChoiceNumber = CLng(adoRs("ChoiceNumber")) %>
            <TD WIDTH=10% NOWRAP>
<%					If arrQuestions( nQuestionNo, QST_TYPE ) = "MCQ" Or arrQuestions( nQuestionNo, QST_TYPE ) = "SEQ" Or arrQuestions( nQuestionNo, QST_TYPE ) = "WEB" Or arrQuestions( nQuestionNo, QST_TYPE ) = "PFQ" Then%>
							<SPAN STYLE="cursor:hand" onclick="SetAnswer(<%=nChoiceNumber%>)" onmouseover="self.status='Выбрать ответ <%=(nChoiceNo + 1)%>';return true;" onmouseout="self.status=''">
								<INPUT TYPE="RADIO" NAME="Answer" VALUE="<%=nChoiceNumber%>" <%If arrQuestions( nQuestionNo, QST_USERANSWER ) = nChoiceNumber Then%>CHECKED<%End If%>><B><%=nChoiceNumber%>.</B> 
							</SPAN>
<%					End If %>
            </TD>
            <TD>
<%					If arrQuestions( nQuestionNo, QST_TYPE ) = "MCQ" Or arrQuestions( nQuestionNo, QST_TYPE ) = "SEQ" Or arrQuestions( nQuestionNo, QST_TYPE ) = "WEB" Or arrQuestions( nQuestionNo, QST_TYPE ) = "PFQ" Then%>
								<%=DB2HTML(adoRs("CText"))%>
<%					End If %>
            </TD>
<%					nChoiceNo = nChoiceNo + 1
					adoRS.MoveNext %>
		</TR>
					
<%			    WEnd%>
		</TABLE>
<%
	End If
End If
EndForm
%>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR>
	<TD ALIGN=CENTER>
		<%If nQuestionNo < UBound(arrQuestions) Then%>
			<%=ShowButton( "Next", "Следующий", "JavaScript:GoNext()", "К следующему вопросу" )%>
		<%Elseif strReviewTest<>"Y" Then%>
			<%=ShowButton( "Grade", "Результат", "JavaScript:GoNext()", "Результат теста" )%>
		<%End If%>
		<%If nQuestionNo > 0 Then%>
			<BR>
			<%=ShowButton( "Prev", "Предыдущий", "JavaScript:GoPrev()", "К предыдущему вопросу" )%>
		<%End If%>
		<%If strReviewTest<>"Y" Then
			If Storage.GetData( strID, "MayReadArticle" ) Then%>
				<BR><HR>
				<%=ShowButton( "Fulltext", "Читать текст", "JavaScript:GoFullText()", "Читать текст" )%>
			<%End If%>
			<HR>
			<%=ShowButton( "MainMenu", "Главное меню", "JavaScript:GoMainMenu()", "Главное меню" )%>
		<%Else %>	
			<BR><HR>
			<%=ShowButton( "Back", "Назад", "JavaScript:GoFullText()", "Назад к тексту" )%>
		<%End If %>	
	</TD>
</TR>
</TABLE>
<% 
%>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%
If Not IsEmptyStr(strUsageNotes) Then
	Call BeginHint
	Writeln DB2HTML(strUsageNotes)
	Call EndHint
End If
%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
