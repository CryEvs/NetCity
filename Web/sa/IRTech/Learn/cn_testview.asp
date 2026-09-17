<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
nInfoType = 0

CheckCNTeacherLogin
strID = Request("id")
If IsEmptyStr(strID) Then HandleFatalError "Неверные параметры"

Dim nQstNo, nQstCount, strArr, strQuestion, i, bNotReadOnly
nTestID = GetSafeLng( Request("Parameters"), 0 )
bNotReadOnly = (CStr(Storage.GetData( strID, "NRO" ))="1")
nQstNo = GetSafeLng( Request("QstNo"), 0 )
If nQstNo = 0 Then HandleFatalError "В этом тесте нет вопросов"

Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Вопросы и ответы"

Dim adoRs
Set adoRs = adoConn.Execute( "SELECT Count(*) Cnt FROM Questions WHERE (TestID=" & nTestID & ")" )
CheckADOError

nQstCount = CLng(adoRs("Cnt"))
If nQstCount = 0 Then HandleFatalError "Этот тест не содержит вопросов"

Set adoRs = adoConn.Execute( "SELECT QUESTIONS.QUESTIONID, QUESTIONS.TYPEID, ARTICLES.TITLE, ARTICLES.SOURCE, QUESTIONS.QTEXT "&_
	"FROM Questions, Articles, TESTVIEW('" & strTestSuffix & "') T " &_
	"WHERE (T.TestID=Questions.TestID) AND (T.ArticleID=Articles.ArticleID) "&_
		"AND (Questions.TestID=" & nTestID & ") AND (QNumber=" & nQstNo & ")" )
CheckADOError

If adoRs.EOF Then HandleFatalError "Неверные параметры"

strQuestion = CStr( adoRs("QText") )
Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT>
function GoNext() 
{
	var form = document.forms[0];
	form.elements['QstNo'].value = <%=(nQstNo+1)%>; 
	form.submit();
}
function GoPrev() 
{
	var form = document.forms[0];
	form.elements['QstNo'].value = <%=(nQstNo-1)%>;
	form.submit();
}
function GoBack() 
{
	var form = document.forms[1];
	form.submit();
}
</SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintHeaderMessage(DB2HTML(adoRs("Title")) & "<BR> (" & DB2HTML(adoRs("Source")) & ")")
Call PrintPreFullTextPage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call BeginTeacherForm( "cn_testview.asp", "Form1" ) %>
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="QstNo" VALUE="<%=nQstNo%>">
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>"><%
Call EndTeacherForm
Call BeginTeacherForm( "cn_fulltext.asp", "Form2" ) %>
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>"><%
Call EndTeacherForm %>

<CENTER>
	<FONT COLOR="red">
		<H3>Вопрос <%=nQstNo%> из <%=nQstCount%></H3>
	</FONT>
</CENTER>
<P></P>
<TABLE BORDER=0 WIDTH=80% ALIGN=CENTER>
<TR>
	<TD ALIGN=CENTER>
<%	  Select Case CStr( adoRs("TypeID") )
		Case "SEQ"
		  strArr = split( strQuestion, "|" )
		  If UBound(strArr) >= 0 Then%>
			<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=3>
			<TR>
			  <TD>
                <%If UBound(strArr)=3 Then %>  							
 				<B>Что пропущено:</B>
				<UL>
<%				  For i = 0 To UBound(strArr)
					Writeln "<LI>" & DB2HTML(strArr(i))
				  Next%>
				</UL>
				<%Else %>
				<B><%=DB2HTML(strArr(0))%></B>
				<UL>
<%				  For i = 1 To UBound(strArr)
					Writeln "<LI>" & DB2HTML(strArr(i))
				  Next%>
				</UL>
				<%End If%>
			  </TD>
			</TR>
			</TABLE>
<%		  End If
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
<%				Else%>
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
<%		      End If
		  Case "PFQ"%>
			<DIV ALIGN=CENTER><%=strQuestion%></DIV>
<%	 	  Case Else%>
		    <TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=5>
				<TR><TD ALIGN=CENTER><B><%=DB2HTML(strQuestion)%><B></TD></TR>
		    </TABLE>
<%	  End Select%>
	</TD>
</TR>
</TABLE>
<P></P>
<%
Dim adoRs2
Set adoRs2 = adoConn.Execute( "SELECT Choices.* FROM Choices WHERE Choices.QuestionID=" & CLng(adoRs("QuestionID")) & " ORDER BY Choices.ChoiceNumber" )
CheckADOError
If bNotReadOnly Then
%>
<TABLE BORDER=0 CELLPADDING=0 ALIGN=CENTER>
<%
Dim nChoiceNumber
While Not adoRS2.EOF
  nChoiceNumber = CLng(adoRs2("ChoiceNumber"))
  If CStr( adoRs("TypeID") ) = "MCQ" Or CStr( adoRs("TypeID") ) = "SEQ" Or CStr( adoRs("TypeID") ) = "WEB" Or CStr( adoRs("TypeID") ) = "PFQ" Then%>
	<TR VALIGN=TOP>
	  <TD ALIGN=LEFT>
		<%If CLng(adoRs2("CValue")) > 0 Then
			%><IMG SRC="../images/rightanswer.gif" ALT="[Правильный ответ]" WIDTH=24 HEIGHT=24><%
		Else
			%><IMG SRC="../images/noanswer.gif" WIDTH=24 HEIGHT=24><%
		End If%>
	  </TD>
	  <TD ALIGN=LEFT>
		<%If CLng(adoRs2("CValue")) > 0 Then
		  %><FONT COLOR="blue">
			<B><%=nChoiceNumber%>.</B>
		  </FONT><%
		  Else
			%><B><%=nChoiceNumber%>.</B><%
		  End If%>
	  </TD><TD ALIGN=LEFT>
		<%If CLng(adoRs2("CValue")) > 0 Then
		  %><FONT COLOR="blue">
			<B><%=DB2HTML(adoRs2("CText"))%></B>
		  </FONT><%
		  Else
			%><%=DB2HTML(adoRs2("CText"))%><%
		  End If%>
	  </TD>
	</TR>
<%End If
  adoRS2.MoveNext
WEnd%>
</TABLE>
<%End If
Call PrintPreFullTextButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR>
  <TD ALIGN=CENTER>
	<%If nQstNo < nQstCount Then%>
	  <%=ShowButton( "Next", "Следующий", "JavaScript:GoNext()", "К следующему вопросу" )%>
	<%End If
	If nQstNo > 1 Then%>
	  <BR>
	  <%=ShowButton( "Prev", "Предыдущий", "JavaScript:GoPrev()", "К предыдущему вопросу" )%>
	<%End If%>
	<BR><HR>
	<%=ShowButton( "Back", "Назад", "JavaScript:GoBack()", "Назад" )%>
  </TD>
</TR>
</TABLE>
<%Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<%Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
