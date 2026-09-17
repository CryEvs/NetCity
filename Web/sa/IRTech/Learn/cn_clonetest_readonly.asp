<%Sub PrintReadOnlyQuestion( adoRS )%>
<TR>
	<TD ALIGN=CENTER><INPUT TYPE=CHECKBOX CHECKED NAME=QuestionsToSave VALUE="<%=adoRS.Fields("QuestionID")%>"></TD>
	<TD ALIGN=CENTER>
<%	  Select Case CStr( adoRs("TypeID") )
		Case "SEQ"
		  strArr = split( strQuestion, "|" )
		  If UBound(strArr) >= 0 Then%>
			<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=3 CELLSPACING=0>
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
			<TABLE BORDER=2 BGCOLOR=#ffffff CELLPADDING=5 CELLSPACING=0>
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
				    <TABLE  BORDER=2 BGCOLOR=#ffffff CELLPADDING=5 CELLSPACING=0> 
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
	<TD ALIGN=LEFT WIDTH=50%>
<%
Dim adoRs2
Set adoRs2 = adoConn.Execute( "SELECT Choices.* FROM Choices WHERE Choices.QuestionID=" & CLng(adoRs("QuestionID")) & " ORDER BY Choices.ChoiceNumber" )
CheckADOError
%>
	<TABLE BORDER=0 CELLPADDING=0>
<%
Dim nChoiceNumber
While Not adoRS2.EOF
  nChoiceNumber = CLng(adoRs2("ChoiceNumber"))
  If CStr( adoRs("TypeID") ) = "MCQ" Or CStr( adoRs("TypeID") ) = "SEQ" Or CStr( adoRs("TypeID") ) = "WEB" Or CStr( adoRs("TypeID") ) = "PFQ" Then%>
	<TR VALIGN=TOP >
	  <TD WIDTH=30>
		<%If CLng(adoRs2("CValue")) > 0 Then%>
		  <IMG SRC="../images/rightanswer.gif" ALT="[Правильный ответ]" WIDTH=24 HEIGHT=24> 
		<%Else%>
		  <IMG SRC="../images/noanswer.gif" WIDTH=24 HEIGHT=24>
		<%End If%>
	  </TD>
	  <TD WIDTH=20>
		<%If CLng(adoRs2("CValue")) > 0 Then%>
		  <FONT COLOR="blue">
			<B><%=nChoiceNumber%>.</B>
		  </FONT>
		<%Else%>
		  <B><%=nChoiceNumber%>.</B> 
		<%End If%>
	  </TD>
	  <TD>
	    <%If CLng(adoRs2("CValue")) > 0 Then%>
   		  <FONT COLOR="blue">
			<B> <%=DB2HTML(adoRs2("CText"))%></B>
		  </FONT>
        <%Else%>
		  <%=DB2HTML(adoRs2("CText"))%>
		<%End If%>
	  <TD>
	</TR>
<%End If
  adoRS2.MoveNext
WEnd%>
	</TABLE>
</TD>
</TR>
<%End Sub%>