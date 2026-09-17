<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
'Question related constants
Const A_ID				= 0
Const A_TYPE			= 1
Const A_USERANSWER1		= 2
Const A_USERANSWER2		= 3
Const A_LAST_FIELD	    = 3

Sub CheckLACCError()
    Dim strError
    strError = ""
    If Err.Number <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode <> 0 And lacc.LastErrorCode <> 10006 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

nInfoType = 0
strOnLoad = "window.focus();"
CheckCNLogin
strID = Storage.CreateToken( 1 )
Call Storage.SetTokenTimeout(strID, DEFAULT_TEACHER_TIMEOUT*60000)

Dim strStudentID, strAID
strStudentID = GetSafeLng(Request("STUDENTID"),null)
strAID = GetSafeLng(Request("AID"),null)
Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Результаты теста"

Dim ItemRes, strRes, arrQA(), strFirstAttempt, strSecondAttempt, strTestID, pos
Dim pos1, pos2, currAnswer, lngNumAnswers, strQID, strQType, strUAns1, strUAns2, strAPos, cntAnswers
Dim strArticleID, adoRs , strTitle, strCitation

Dim strQTypes(3),strQTypeID(3), curType
Set adoRs = adoConn.Execute("SELECT QuestionTypeID, "&csType&" FROM QuestionTypes")
CheckADOError
curType = 0
Do While Not adoRs.EOF
  strQTypeID(curType) = adoRs("QuestionTypeID")
  strQTypes(curType) = adoRs("Type")
  adoRS.MoveNext
  curType = curType+1
Loop
If curType<>4 Then Call HandleError( "Неверное значение QuestionTypes", curType, "Пожалуйста, обратитесь к разработчикам системы." )

Set ItemRes = lacc.GetStudentAssignmentInfoForTeacher( strToken, strStudentID, strAID, RESULTSBYQUESTIONS )
strRes = GetSafeStr( ItemRes.Field(RESULTSBYQUESTIONS))
cntAnswers = 0

If strRes<>"" Then
  If InStr(Len(strRes),strRes,";") Then
    pos = InStr(strRes,"|")
    strTestID = Mid(strRes,1,pos-1)
    If InStr(pos+1,strRes,"|")>0 Then
        strFirstAttempt = Mid(strRes,pos+1,InStr(pos+1,strRes,"|")-pos-1)
        strSecondAttempt = Mid(strRes,InStr(pos+1,strRes,"|")+1) 
    Else
        strFirstAttempt = Mid(strRes,pos+1)
        strSecondAttempt = ""
    End If

    pos = 1
    While pos<Len(strFirstAttempt)
        cntAnswers = cntAnswers +1
        pos = InStr(pos,strFirstAttempt,";")+1
    Wend    
    Redim arrQA(cntAnswers-1,A_LAST_FIELD)
      
    pos1 = 1 
    pos2 = 1
    lngNumAnswers = 0
    While pos1<Len(strFirstAttempt)
        lngNumAnswers = lngNumAnswers + 1
        currAnswer = Mid(strFirstAttempt,pos1,InStr(pos1,strFirstAttempt,";")-pos1)
        pos1 = InStr(pos1,strFirstAttempt,";")+1
        strAPos = 1
        strQID = Mid(currAnswer,strAPos,InStr(strAPos,currAnswer,",")-strAPos)
        strAPos = InStr(strAPos,currAnswer,",") + 1
        strQType = Mid(currAnswer,strAPos,InStr(strAPos,currAnswer,",")-strAPos)
        strAPos = InStr(strAPos,currAnswer,",") + 1
        strUAns1 = Mid(currAnswer,strAPos)
        If strSecondAttempt<>"" Then
            currAnswer = Mid(strSecondAttempt,pos2,InStr(pos2,strSecondAttempt,";")-pos2)
            pos2 = InStr(pos2,strSecondAttempt,";")+1
            strAPos = 1
            strQID = Mid(currAnswer,strAPos,InStr(strAPos,currAnswer,",")-strAPos)
            strAPos = InStr(strAPos,currAnswer,",") + 1
            strQType = Mid(currAnswer,strAPos,InStr(strAPos,currAnswer,",")-strAPos)
            strAPos = InStr(strAPos,currAnswer,",") + 1
            strUAns2 = Mid(currAnswer,strAPos)
        Else 
           strUAns2 = "-1" 
        End If
        arrQA(lngNumAnswers-1,A_ID) = strQID
        arrQA(lngNumAnswers-1,A_TYPE) = strQType         
        arrQA(lngNumAnswers-1,A_USERANSWER1) = strUAns1
        arrQA(lngNumAnswers-1,A_USERANSWER2) = strUAns2
    Wend
    
    Set adoRs = adoConn.Execute( "SELECT ARTICLEID FROM TESTVIEW('" & strTestSuffix & "') WHERE TestID=" & strTestID )
    CheckADOError
    If adoRs.EOF Then HandleFatalError "Неверные параметры"
    strArticleID = adoRs("ARTICLEID") 
    Set adoRs = adoConn.Execute( "SELECT * FROM Articles WHERE ArticleID=" & strArticleID )
    CheckADOError
    strTitle = DB2HTML(adoRs("Title"))
    strCitation = DB2HTML(adoRs("Source"))
    Call Storage.SetData( strID, "Questions", arrQA )
    Call Storage.SetData( strID, "ArticleTitle", strTitle )
    Call Storage.SetData( strID, "ArticleCitation", strCitation )
  End If  
End If

Dim adoCmd1
Set adoCmd1 = Server.CreateObject("ADODB.Command")
adoCmd1.ActiveConnection = adoConn
adoCmd1.Prepared = True
adoCmd1.CommandText = "SELECT ChoiceNumber FROM Choices WHERE (QuestionID=?) AND (CValue>0)"
adoCmd1.Parameters.Append adoCmd1.CreateParameter( "QuestionID", adInteger, adParamInput, 4, 0 )

Dim nScore, nAnsweredRight, bIsCompleted, i, nWatermark, nPoints, nMaxPoints, nCurrPoints 
Dim bIsTeacher
bIsTeacher = lacc.IsTeacher(strToken)

Call PrintPreScripts '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<SCRIPT><!--
function ViewQuestion( question ) 
{
	var form = document.forms[0];
	form.elements['QstNo'].value = question;
	form.submit();
}
function GoBack() 
{
	var form = document.forms[0];
	window.location = '<%=Request("BACK")%>';
}
//--></SCRIPT>
<%Call PrintPreTitle '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
If strRes="" Then
  Call PrintHeaderMessage("")
Else
  Call PrintHeaderMessage(strTitle & "<BR> (" & strCitation & ")")
End If
Call PrintPrePage '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call BeginTeacherForm( "cn_studenttestview.asp", "TESTVIEW" ) %>
<INPUT TYPE="HIDDEN" NAME="ID" VALUE="<%=strID%>"> 
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=strTestID%>">
<INPUT TYPE="HIDDEN" NAME="QstNo" VALUE="">
<INPUT TYPE="HIDDEN" NAME="BackPage" VALUE="cn_results.asp?AT=<%=strToken%>&BACK=<%=Server.URLEncode(Request("BACK"))%>&TTSURL=<%=strTTSURL%>&LAID=<%=LAID_A%>&STUDENTID=<%=strStudentID%>&AID=<%=strAID%>">
<br><%
Call EndTeacherForm
If strRes="" Then %>
<TABLE BORDER=0 CELLPADDING=0 WIDTH=95% ALIGN=CENTER><TR><TH ALIGN=CENTER><FONT SIZE=4><%
If bIsTeacher Then%>
Оценка данному ученику выставлена вручную.<%
Else%>
Пожалуйста, обратитесь к учителю за информацией об этом задании. Ваш учитель ввел оценку вручную.<%
End If%>
</FONT></TH></TR></TABLE>
<%Else %>      
	<TABLE BORDER=2 CELLPADDING=3 WIDTH="640" ALIGN=CENTER>
		<TR>
			<TH COLSPAN=5>Обзор контрольных вопросов</TH>
		</TR>
		<TR BGCOLOR=#ffffff>
			<TH ALIGN=CENTER>Вопрос</TH>
			<TH>Попытка&nbsp;1</TH>
			<TH>Попытка&nbsp;2</TH>
			<TH>Правильный ответ</TH>
			<TH ALIGN=CENTER>Тип вопроса</TH>
		</TR><%

If bIsTeacher Then  ' показывать результаты теста только учителю!
		
		Dim qestionHash(4,2), j
        For i = 0 To cntAnswers-1
			curType = -1
			For j=0 To UBound(strQTypes)
			  If strQTypeID(j)=arrQA(i, A_TYPE) Then
				curType = j
				Exit For
			  End If
			Next
			If curType <> -1 Then
				adoCmd1("QuestionID") = arrQA( i, A_ID )
				Set adoRS = adoCmd1.Execute
				CheckADOError
				If Not adoRS.EOF Then
					If IsEmpty( qestionHash( curType, 0) ) Then 
						qestionHash( curType, 0) = 1
						qestionHash( curType, 1) = 0
					Else
						qestionHash( curType, 0) = qestionHash( curType, 0) + 1
					End If
					
					If arrQA( i, A_USERANSWER2 )="-1" Then
					    If CLng(arrQA( i, A_USERANSWER1 )) = CLng(adoRs("ChoiceNumber")) Then 
							qestionHash( curType, 1) = qestionHash( curType, 1) + 1
		%>	<TR BGCOLOR=#00ff00>    					     
						<%Else
		%>	<TR BGCOLOR=#ff0000>
						<%End If
					ElseIf CLng(arrQA( i, A_USERANSWER1 )) = CLng(adoRs("ChoiceNumber")) AND _
       			         CLng(arrQA( i, A_USERANSWER2 )) = CLng(adoRs("ChoiceNumber")) Then
							qestionHash( curType, 0) = qestionHash( curType, 0) + 1
							qestionHash( curType, 1) = qestionHash( curType, 1) + 2
		%>	<TR BGCOLOR=#00ff00>
					<%ElseIF (CLng(arrQA( i, A_USERANSWER1 )) = CLng(adoRs("ChoiceNumber"))) OR _
					   (CLng(arrQA( i, A_USERANSWER2 )) = CLng(adoRs("ChoiceNumber")))  Then
							qestionHash( curType, 0) = qestionHash( curType, 0) + 1
							qestionHash( curType, 1) = qestionHash( curType, 1) + 1
		%>	<TR BGCOLOR=#00ff00>
					<%Else
							qestionHash( curType, 0) = qestionHash( curType, 0) + 1
		%>	<TR BGCOLOR=#ff0000>
					<%End If

					%><TD ALIGN=CENTER>
					<A HREF="JavaScript:ViewQuestion(<%=i%>)" onmouseover="self.status='Просмотреть вопрос <%=(i+1)%>';return true;" onmouseout="self.status=''">
							&nbsp;&nbsp;&nbsp;&nbsp;<%=(i+1)%>&nbsp;&nbsp;&nbsp;&nbsp;</A></TD>
					<TD ALIGN=CENTER><%=arrQA( i, A_USERANSWER1 )%></TD>
					<%If arrQA( i, A_USERANSWER2 )<>"-1" Then
						%><TD ALIGN=CENTER><%=arrQA( i, A_USERANSWER2 )%></TD>
					<%Else
						%><TD ALIGN=CENTER>&nbsp;</TD><%
					End If%>
					<TD ALIGN=CENTER><%=CLng(adoRs("ChoiceNumber"))%></TD>
					<TD ALIGN=CENTER><%=strQTypes( curType )%></TD>
		</TR>
<%			End If
			End If
		Next

Else
   ' заход ученика %>
	<TR BGCOLOR=#afffff>
		<TH COLSPAN=5>Извините, Ваш учитель запретил просмотр правильных ответов.</TH>
	</TR>
<%
End If

		%>
	</TABLE>
<%End If%>
<%EndForm%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR><TD><BR><table border="1" align="center" width="640">
<tr><th colspan=4>Баллы по типам вопросов</th></tr>
<tr><%For i=0 To 3%><th><%=strQTypes(i)%></th><%next%></tr>
<tr align="center"><%For i = 0 To 3%><td BGCOLOR="white"><%
				If IsEmpty( qestionHash( i, 0) ) Then %>-<%Else%><%=Round(qestionHash( i, 1)*100 /qestionHash( i, 0),0) %>%<%End If%></td>
	<%next%>
</tr>
</table>
</TD></TR>
<TR>
	<td align="center">
	<%If Request("BACK")<>"" Then %>
	        <%=ShowButton( "Back", "Назад", "JavaScript:GoBack();", "Назад" )%>
	<%Else %>      
	        <%=ShowButton( "Close", "Закрыть", "JavaScript:window.close();", "Закрыть" )%>
	<%End If%>
	</TD>
</TR>
</TABLE>
<%Call PrintPreButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintHints '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Call PrintFooter '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
