<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
Const QST_USERANSWER2		= 3
nInfoType = 0

strID = Request("id")
CheckCNLogin
Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Просмотр вопросов"
arrQuestions = Storage.GetData( strID, "Questions" )

Dim nQstCount, strArr, nQuestionNo, i, j, strBackPage
    
nTestID = GetSafeLng( Request("Parameters"), 0 )
nQuestionNo = GetSafeLng( Request("QstNo"), 0 )
strBackPage = Request("BACKPAGE")
%>
<%Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function GoNext() 
{
	var form = document.forms[0];
	form.elements['QstNo'].value = <%=(nQuestionNo+1)%>; 
	form.submit();
}
function GoPrev() 
{
	var form = document.forms[0];
	form.elements['QstNo'].value = <%=(nQuestionNo-1)%>;
	form.submit();
}
function GoBack() 
{
	var form = document.forms[0];
	window.location = '<%=strBackPage%>';
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Dim strTitle, strCitation
strTitle = Storage.GetData( strID, "ArticleTitle" )
strCitation = Storage.GetData( strID, "ArticleCitation" )

Call PrintHeaderMessage(strTitle & "<BR> (" & strCitation & ")")
Call PrintPrePage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call BeginTeacherForm( "cn_studenttestview.asp", "TESTVIEW" ) %>
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>">
<INPUT TYPE="HIDDEN" NAME="AssignmentID" VALUE="<%=strAssignmentID%>">
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="QstNo" VALUE="<%=nQuestionNo%>">
<INPUT TYPE="HIDDEN" NAME="BACKPAGE" VALUE="<%=strBackPage%>">
<%
Call EndTeacherForm
If Not ( nQuestionNo > UBound(arrQuestions) Or nQuestionNo < LBound(arrQuestions) ) Then

	Dim adoCmd, adoRs, nAttemptNo

	Set adoCmd = Server.CreateObject("ADODB.Command")
	adoCmd.ActiveConnection = adoConn
	adoCmd.CommandText = "SELECT * FROM QuestionInfo WHERE QuestionID=?"
	adoCmd.Parameters.Append adoCmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, arrQuestions( nQuestionNo, QST_ID ) )
	Set adoRs = adoCmd.Execute()
	CheckADOError

	Dim strQuestion, strUsageNotes
	strQuestion = CStr(adoRs("QText"))
    
	If Not adoRs.EOF Then%>
		<CENTER>
			<FONT COLOR="red">
				<H3>Вопрос <%=(nQuestionNo+1)%> из <%=(UBound(arrQuestions)+1)%></H3>
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
								<TR><TD COLSPAN=2 ALIGN=CENTER><B><%=DB2HTML(strArr(0))%></TD></TR>
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
<%					End If
				Case "PFQ"%>
					<DIV ALIGN=CENTER><%=strQuestion%></DIV>
<%				Case Else%>
					<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=5>
						<TR><TD ALIGN=CENTER><B><%=DB2HTML(strQuestion)%><B></TD></TR>
					</TABLE>
<%			End Select%>
		</TD>
	</TR>
	</TABLE>
	<P></P>
<%
	Set adoCmd = Server.CreateObject("ADODB.Command")
	adoCmd.ActiveConnection = adoConn
	adoCmd.CommandText = "SELECT Choices.* FROM Choices WHERE Choices.QuestionID=? ORDER BY Choices.ChoiceNumber"
	adoCmd.Parameters.Append adoCmd.CreateParameter( "QuestionID", adInteger, adParamInput, 4, arrQuestions( nQuestionNo, QST_ID ) )

	Set adoRs = adoCmd.Execute()
	CheckADOError
%>
	<TABLE BORDER=0 CELLPADDING=0 ALIGN=CENTER>
<%
	Dim nChoiceNumber 
	While Not adoRS.EOF
		nChoiceNumber = CLng(adoRs("ChoiceNumber"))
		If arrQuestions( nQuestionNo, QST_TYPE ) = "MCQ" Or arrQuestions( nQuestionNo, QST_TYPE ) = "SEQ" Or arrQuestions( nQuestionNo, QST_TYPE ) = "WEB"  Or arrQuestions( nQuestionNo, QST_TYPE ) = "PFQ" Then%>
			<TR VALIGN=TOP>
				<TD ALIGN=LEFT>
					<%If CLng(adoRs("CValue")) > 0 Then%>
						<IMG SRC="../images/rightanswer.gif" ALT="[Right answer]" WIDTH=24 HEIGHT=24>
					<%ElseIf CLng(arrQuestions( nQuestionNo, QST_USERANSWER )) = nChoiceNumber Then%>
						<IMG SRC="../images/useranswer.gif" ALT="[Your answer]" WIDTH=24 HEIGHT=24>
					<%ElseIf CLng(arrQuestions( nQuestionNo, QST_USERANSWER2 )) = nChoiceNumber Then%>
						<IMG SRC="../images/useranswer2.gif" ALT="[Your answer]" WIDTH=24 HEIGHT=24>
					<%Else%>
						<IMG SRC="../images/noanswer.gif" WIDTH=24 HEIGHT=24>
					<%End If%>
				</TD>
				<TD ALIGN=LEFT>
					<%If CLng(adoRs("CValue")) > 0 Then%>
						<FONT COLOR="blue">
							<B><%=nChoiceNumber%>.</B>
						</FONT>
					<%ElseIf CLng(arrQuestions( nQuestionNo, QST_USERANSWER )) = nChoiceNumber Then%>
						<FONT COLOR="red">
							<B><%=nChoiceNumber%>.</B>
						</FONT>
					<%ElseIf CLng(arrQuestions( nQuestionNo, QST_USERANSWER2 )) = nChoiceNumber Then%>
						<FONT COLOR="red">
							<B><%=nChoiceNumber%>.</B>
						</FONT>
					<%Else%>
						<B><%=nChoiceNumber%>.</B>
					<%End If%>
				</TD>
				<TD ALIGN=LEFT>
					<%If CLng(adoRs("CValue")) > 0 Then%>
						<FONT COLOR="blue">
							<B><%=DB2HTML(adoRs("CText"))%></B>
						</FONT>
					<%ElseIf CLng(arrQuestions( nQuestionNo, QST_USERANSWER )) = nChoiceNumber Then%>
						<FONT COLOR="red">
							<B><%=DB2HTML(adoRs("CText"))%></B>
						</FONT>
					<%ElseIf CLng(arrQuestions( nQuestionNo, QST_USERANSWER2 )) = nChoiceNumber Then%>
						<FONT COLOR="red">
							<B><%=DB2HTML(adoRs("CText"))%></B>
						</FONT>
					<%Else%>
						<%=DB2HTML(adoRs("CText"))%>
					<%End If%>
				</TD>
			</TR>
<%		End If
		adoRS.MoveNext
	WEnd%>
	</TABLE>
<%End If%>
<%EndForm%>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR>
	<TD ALIGN=CENTER>
		<%If nQuestionNo < UBound(arrQuestions) Then%>
			<%=ShowButton( "Next", "Следующий", "JavaScript:GoNext()", "К следующему вопросу" )%>
		<%End If%>
		<%If nQuestionNo > 0 Then%>
			<BR>
			<%=ShowButton( "Prev", "Предыдущий", "JavaScript:GoPrev()", "К предыдущему вопросу" )%>
		<%End If%>
		<BR><HR>
		<%=ShowButton( "Back", "Назад", "JavaScript:GoBack()", "Назад" )%>
	</TD>
</TR>
</TABLE>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
