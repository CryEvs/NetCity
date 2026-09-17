<%
Sub PrintEditableQuestion( adoRS )
%><TR>
	<TD ALIGN=CENTER><A HREF="JavaScript:DeleteQuestion(<%=adoRS("QuestionID")%>)" onmouseover="self.status='Удалить этот вопрос';return true;" onmouseout="self.status=''">удалить</A><BR><INPUT TYPE=CHECKBOX NAME=QuestionsToSave VALUE="<%=adoRS.Fields("QuestionID")%>"></TD>
	<TD ALIGN=CENTER VALIGN=MIDDLE>
<%	  Select Case CStr( adoRs("TypeID") )
 	    Case "MCQ"%>
			<FONT SIZE=-1>Тип вопроса:</FONT> <SELECT NAME=QTYPEID<%=adoRS("QuestionID")%> ONCHANGE="SaveThisTest();"><%call PopulateQuestionTypeSelect(adoRS("TypeID"))%></SELECT>
		    <TABLE BORDER=1 CELLPADDING=0 CELLSPACING=0 WIDTH=10 ALIGN=CENTER>
		    <tr><td align=right>
				<TEXTAREA COLS=35 ROWS=6 WRAP=NONE NAME=Question<%=adoRS("QuestionID")%> ID=Question<%=adoRS("QuestionID")%>><%=DB2Value(strQuestion)%></TEXTAREA>
		    </td></tr>
		    </TABLE>
<%		Case "SEQ"
		  strArr = split( strQuestion, "|" )
%>			<FONT SIZE=-1>Тип вопроса:</FONT> <SELECT NAME=QTYPEID<%=adoRS("QuestionID")%> ONCHANGE="SaveThisTest();"><%call PopulateQuestionTypeSelect(adoRS("TypeID"))%></SELECT><%
		  If UBound(strArr) >= 0 Then%>
			<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=3 CELLSPACING=0><TR><TD>
 				<B>Что пропущено:</B><BR>
<%				  For i = 0 To UBound(strArr)
					%>&nbsp;&nbsp;<INPUT TYPE=TEXT NAME="Question<%=adoRS("QuestionID")%>_<%=(i+1)%>" ID="Question<%=adoRS("QuestionID")%>_<%=(i+1)%>" VALUE="<%=DB2VALUE(strArr(i))%>" SIZE=30><BR><%
				  Next
				  For i=UBound(strArr)+1 To 3
				    %>&nbsp;&nbsp;<INPUT TYPE=TEXT NAME="Question<%=adoRS("QuestionID")%>_<%=(i+1)%>" ID="Question<%=adoRS("QuestionID")%>_<%=(i+1)%>" VALUE="" SIZE=30><BR><%
				  Next%>
			</TD></TR></TABLE>
<%		  End If
		Case "WEB"
%>		  <FONT SIZE=-1>Тип вопроса:</FONT> <SELECT NAME=QTYPEID<%=adoRS("QuestionID")%> ONCHANGE="SaveThisTest();"><%call PopulateQuestionTypeSelect(adoRS("TypeID"))%></SELECT><%
			strArr = split( strQuestion, "|" )%>
			<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=5 CELLSPACING=0>
				<TR><TD COLSPAN=2 ALIGN=CENTER><B>Заполните пустой блок:</B><BR><INPUT TYPE=TEXT NAME="Question<%=adoRS("QuestionID")%>_2" ID="Question<%=adoRS("QuestionID")%>_2" VALUE="<%=DB2VALUE(strArr(1))%>" SIZE=35></TD></TR>
				<TR>
					<TD WIDTH=300 ALIGN=CENTER><INPUT TYPE=TEXT NAME="Question<%=adoRS("QuestionID")%>_3" ID="Question<%=adoRS("QuestionID")%>_3" VALUE="<%=DB2VALUE(strArr(2))%>" SIZE=15></TD>
					<TD WIDTH=300 ALIGN=CENTER><INPUT TYPE=TEXT NAME="Question<%=adoRS("QuestionID")%>_4" ID="Question<%=adoRS("QuestionID")%>_4" VALUE="<%=DB2VALUE(strArr(3))%>" SIZE=15></TD>
				</TR>
				<TR>
					<TD WIDTH=300 ALIGN=CENTER><INPUT TYPE=TEXT NAME="Question<%=adoRS("QuestionID")%>_5" ID="Question<%=adoRS("QuestionID")%>_5" VALUE="<%=DB2VALUE(strArr(4))%>" SIZE=15></TD>
					<TD WIDTH=300 ALIGN=CENTER><INPUT TYPE=TEXT NAME="Question<%=adoRS("QuestionID")%>_6" ID="Question<%=adoRS("QuestionID")%>_6" VALUE="<%=DB2VALUE(strArr(5))%>" SIZE=15></TD>
				</TR>
			</TABLE> 
<% 	    Case Else%>
			<FONT SIZE=-1>Тип вопроса:</FONT> <B>Preformatted question</B>
		    <INPUT TYPE=HIDDEN NAME=QTYPEID<%=adoRS("QuestionID")%> VALUE=PFQ>
		    <TABLE BORDER=1 CELLPADDING=0 CELLSPACING=0 ALIGN=CENTER>
		    <TR><TD ALIGN=CENTER BGCOLOR=#FFFFFF>
				<B><%=DB2HTML(strQuestion)%></B>
		    </TD></TR>
		    </TABLE>
<%	  End Select%>
		<INPUT TYPE=HIDDEN NAME=QIDList ID=QIDList VALUE=<%=adoRS("QuestionID")%>>
	</TD>
	<TD ALIGN=LEFT>
<%
Dim adoRs2
Set adoRs2 = adoConn.Execute( "SELECT " & _
								"* " & _
							"FROM " & _
								"Choices " & _
							"WHERE " & _
								"QuestionID=" & CLng(adoRs("QuestionID")) & _
							" ORDER BY ChoiceNumber" )
CheckADOError
%>
	<TABLE BORDER=0 CELLPADDING=0 ALIGN=LEFT>
<%
Dim nChoiceNumber, nChoicesPrinted, strChoiceID
nChoicesPrinted=1
While Not adoRS2.EOF And nChoicesPrinted<=4
  nChoiceNumber = GetSafeLng(adoRs2("ChoiceNumber"), 0)
  strChoiceID = "Choice" & GetSafeLng(adoRS("QuestionID"), 0) & "_" & nChoiceNumber
  If CStr( adoRs("TypeID") ) = "MCQ" Or CStr( adoRs("TypeID") ) = "SEQ" Or CStr( adoRs("TypeID") ) = "WEB" Or CStr( adoRs("TypeID") ) = "PFQ" Then
	%><TR VALIGN=TOP><%
	  If CStr( adoRS("TypeID") ) = "PFQ" Then %>
       <TD ALIGN=LEFT>
		    <%If CLng(adoRs2("CValue")) > 0 Then%>
			  <IMG SRC="../images/rightanswer.gif" ALT="[Правильный ответ]" WIDTH=24 HEIGHT=24>
			<%Else%>
			  <IMG SRC="../images/noanswer.gif" WIDTH=24 HEIGHT=24>
			<%End If%>
	   </TD> 		
       <TD ALIGN=LEFT>
		    <%If CLng(adoRs2("CValue")) > 0 Then%>
			  <FONT COLOR="blue">
				<B><%=nChoiceNumber%>.</B>
			  </FONT>
			<%Else%>
			  <B><%=nChoiceNumber%>.</B>
			<%End If%>
	  </TD> 		
       <TD ALIGN=LEFT>
		    <%If CLng(adoRs2("CValue")) > 0 Then%>
			  <FONT COLOR="blue">
				<B><%=DB2HTML(adoRs2("CText"))%></B>
			  </FONT>
			<%Else%>
			  <%=DB2HTML(adoRs2("CText"))%>
			<%End If%>
	  </TD><%
	  Else
	    %><TD ALIGN=LEFT NOWRAP>		
<%			Response.Write "<INPUT TYPE=RADIO NAME=CorrectChoice" & GetSafeLng(adoRS("QuestionID"), 0) & " VALUE=" & adoRS2("ChoiceNumber")
			If GetSafeLng(adoRs2("CValue"), 0) > 0 Then
				Response.Write " CHECKED>"
			Else
				Response.Write ">"
			End If
			Response.Write "<INPUT TYPE=TEXT NAME=" & strChoiceID & " ID=" & strChoiceID & " VALUE=""" & DB2Value(adoRs2("CText")) & """ MAXLENGTH=500 SIZE=40>"
	    %></TD><%
		End If
	%></TR>
<%End If
  nChoicesPrinted = nChoicesPrinted + 1
  If Not adoRS2.EOF Then adoRS2.MoveNext
WEnd
%>	</TABLE>
</TD></TR><%
End Sub%>