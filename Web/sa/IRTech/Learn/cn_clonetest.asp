<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
nInfoType = 0
CheckCNTeacherLogin

Dim bReadOnly, i
Dim nQstNo, nQstCount, lngSubjectID, nPageNo, nSortOrder, nCLID, nTID
Dim strArr, strQuestion, strTests
Dim adoRs

bReadOnly = CBool( GetSafeLng( Request("Read_Only"), 0 ) <> -1 )
nCLID = Request("CLID")
nTID = Request("TID")
nTestID = GetSafeLng( Request("Parameters"), 0 )
nPageNo = GetSafeLng( Request("PageNo"), 0 )
nSortOrder = GetSafeLng( Request("SortOrder"), SORT_BY_SUBJECT )
If IsEmptyStr(strTests) Then strTests = ";"

Call OpenDatabase
strPageTitle = PRODUCT_NAME & " - Просмотр вопросов"

If nTestID = 0 Then
	Dim nOLRWPos, cTSeqNextVal,cTSeqCurrVal, csOLRW
	If DB_Provider = Ora_DB_Provider Then
		cTSeqNextVal = "TESTS_SEQ.NEXTVAL"
		cTSeqCurrVal = "TESTS_SEQ.CURRVAL"
		csOLRW = "olrw."
	ElseIf DB_Provider = IB_DB_Provider Then
		cTSeqNextVal = "GEN_ID(TESTS_SEQ, 1)"
		cTSeqCurrVal = "GEN_ID(TESTS_SEQ, 0)"
		csOLRW = ""
	Else
		HandleFatalError( kInvalidDBProviderConst )
	End If
	call adoConn.Execute( _
	    "INSERT INTO "&csOLRW&"Tests " & _
		"   (TestID, ArticleID, TypeID, Name) " & _
		"   VALUES( "&cTSeqNextVal&", "& Request("ArticleID") &", 1, 'Свой тест' )" )
	CheckADOError

	call adoConn.Execute( _
	    "INSERT INTO "&csOLRW&"ProductTest " & _
		"   (ProductId, TestID) " & _
		"   VALUES " & _
		"   ('" & LAID_A & "', "&cTSeqCurrVal&")")
	CheckADOError
	' get the new testID
	Dim rsTemp
	set rsTemp = adoConn.Execute("SELECT "&cTSeqCurrVal&" AS theTestID FROM DUAL")
	CheckADOError
	nTestID = rsTemp("theTestID")
	call adoConn.Execute( _
	    "INSERT INTO CustomTests " & _
		"   (TestID, TeacherID, ClassID )" & _
		"   VALUES " & _
		"   (" & nTestID & ", " & nTestID & ", " & nTestID & ")" )
'		"   (" & nTestID & ", " & nTID & ", " & nCLID & ")" )
	CheckADOError
End If

Set adoRS = adoConn.Execute( "SELECT * FROM CustomTests WHERE TestID = " & nTestID )

Dim bCustomTest
Dim nClassID, nTeacherID

If adoRS.EOF Then
	bCustomTest = False
Else
	bCustomTest = True
	nClassID = adoRS.Fields("ClassID")
	nTeacherID = adoRS.Fields("TeacherID")
End If
adoRS.Close

	
Set adoRs = adoConn.Execute( "SELECT Count(*) Cnt FROM Questions WHERE (TestID=" & nTestID & ")" )
CheckADOError
nQstCount = CLng(adoRs("Cnt"))

Dim objSubjectsRs
Set objSubjectsRs = adoConn.Execute( _
	"SELECT DISTINCT S.SubjectID, S.Subject " & _
	"   FROM Subjects S, Articles A, TESTVIEW('" & strTestSuffix & "') T " & _
	"   WHERE S.SubjectID=A.SubjectID AND " & _
	"         A.ArticleID=T.ArticleID " & _
	"   ORDER BY S.Subject " )
CheckADOError
If objSubjectsRs.EOF Then Call HandleFatalError( "Нет текстов в базе данных" )
lngSubjectID = GetSafeLng( Request("Subject"), CLng(objSubjectsRs("SubjectID")) )
objSubjectsRS.Close

Dim rsTest, strTestName
Set rsTest = adoConn.Execute("SELECT Name FROM TESTVIEW('" & strTestSuffix & "') WHERE TestID=" & nTestID)
CheckADOError
strTestName = rsTest("Name")
rsTest.Close
Dim rsArticle ' taking article title and citation (top of the page)

Set rsArticle = adoConn.Execute( _
	"SELECT A.TITLE, A.SOURCE " & _
	"   FROM Articles A, TESTVIEW('" & strTestSuffix & "') T " & _
	"   WHERE T.ArticleID=A.ArticleID AND T.TestID=" & nTestID & " " )
CheckADOError
Dim strArticleTitle, strArticleCitation
strArticleTitle = DB2HTML(rsArticle("Title"))
strArticleCitation = DB2HTML(rsArticle("Source"))
rsArticle.Close
Set adoRs = adoConn.Execute( _
	"SELECT Q.QUESTIONID, Q.QNUMBER, Q.TYPEID, Q.QTEXT, A.TITLE, A.CITATION " & _
	"   FROM Questions Q, Articles A, TESTVIEW('" & strTestSuffix & "') T " & _
	"   WHERE T.TestID=Q.TestID AND " & _
	"         T.ArticleID=A.ArticleID AND " & _
	"         Q.TestID=" & nTestID & " " & _
	"   ORDER BY Q.QuestionID DESC" ) ' newly created question will go first
CheckADOError

If adoRs.EOF And Not bCustomTest Then HandleErrorFatalError "В этом тесте нет вопросов."
Function PopulateSelect( objRs, strIDField, strNameField, strCurID )
	Dim strID, bSelected
	bSelected = False
	Do While Not objRs.EOF
		If VarType(strCurID) = 8 Then
			strID = objRs(strIDField)
		Else
			strID = CLng(objRs(strIDField))
		End If
		Response.Write "<OPTION VALUE=""" & DB2Value(strID) & """"
		If (strID = strCurID Or IsNull(strCurID)) And Not bSelected Then
			Response.Write " SELECTED"
			bSelected = True
		End If
		Response.Write ">" & Server.HTMLEncode(objRs(strNameField))
		Response.Write "</OPTION>"
	    objRs.MoveNext
	Loop
	PopulateSelect = bSelected
	objRS.MoveFirst
End Function

Function PopulateQuestionTypeSelect( strSelectedQuestionType )
%>	<OPTION VALUE="MCQ"<%If UCase(strSelectedQuestionType)="MCQ" Then Response.Write " SELECTED"%>>Альтернативный</OPTION>
	<OPTION VALUE="SEQ"<%If UCase(strSelectedQuestionType)="SEQ" Then Response.Write " SELECTED"%>>Последовательный</OPTION>
	<OPTION VALUE="WEB"<%If UCase(strSelectedQuestionType)="WEB" Then Response.Write " SELECTED"%>>Табличный</OPTION><%
End Function
Call PrintPreScripts()

%><SCRIPT>
function GoArticleList() 
{ 
	var form = document.forms[0];
	form.submit();
}
<% If Not bReadOnly Then %>
function CloneThisTest() 
{
	var form = document.forms[1];
    form.elements['CloneTest'].value=1;
    form.submit();
}
<%If bCustomTest Then%>function SaveThisTest()
{
	if (ValidateQuestions()) {
		var form = document.forms[1];
		form.elements['SaveTest'].value='1';
		form.submit();
	}
}

function ValidateQuestions()
{ return true; }
function DeleteQuestion(nQID) {
	if ( confirm('Вы уверены, что хотите удалить этот вопрос?')==true ){
		if (ValidateQuestions()) {
			var form = document.forms[1];
			form.elements['SaveTest'].value='1';
			form.elements['QuestionIDtoDelete'].value=nQID;
			form.submit();
		}
	}
}
function DeleteThisTest() {
	if (confirm('Вы уверены, что хотите удалить весь этот тест и вернуться к выбору текстов?')==true){
		var form = document.forms[1];
		form.elements['DeleteTest'].value='1';
		form.submit();
	}
}
function CreateNewQuestion() {
	if (ValidateQuestions()) {
		var form = document.forms[1];
		form.elements['CreateQuestion'].value='1';
		form.elements['SaveTest'].value='1';
		form.submit();
	}
}
<%End If
   End If %>
</SCRIPT><%
Call PrintPreTitle()
Call PrintHeaderMessage( strArticleTitle & "<BR> (" & strArticleCitation & ")")
Call PrintPreFullTextPage
Call BeginTeacherForm( "cn_articles.asp", "Form1" ) %>
<INPUT TYPE="HIDDEN" NAME="CLID" VALUE="<%=nCLID%>">
<INPUT TYPE="HIDDEN" NAME="TID" VALUE="<%=nTID%>">
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="Subject" VALUE="<%=lngSubjectID%>">
<INPUT TYPE="HIDDEN" NAME="SortOrder" VALUE="<%=nSortOrder%>">
<INPUT TYPE="HIDDEN" NAME="PageNo" VALUE="<%=nPageNo%>"><%
If bReadOnly Then
%><input type="hidden" name="RO" value="1"><%
End If
Call EndTeacherForm
Call BeginTeacherForm( "cn_clonetest_update.asp", "Form2" ) %>
<INPUT TYPE="HIDDEN" NAME="CLID" VALUE="<%=nCLID%>">
<INPUT TYPE="HIDDEN" NAME="TID" VALUE="<%=nTID%>">
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="<%=nTestID%>">
<INPUT TYPE="HIDDEN" NAME="Subject" VALUE="<%=lngSubjectID%>">
<INPUT TYPE="HIDDEN" NAME="SortOrder" VALUE="<%=nSortOrder%>">
<INPUT TYPE="HIDDEN" NAME="PageNo" VALUE="<%=nPageNo%>">
<INPUT TYPE="HIDDEN" NAME="SaveTest" VALUE="0">
<INPUT TYPE="HIDDEN" NAME="GoArticleListFlag" VALUE="0">
<INPUT TYPE="HIDDEN" NAME="CloneTest" VALUE="0">
<INPUT TYPE="HIDDEN" NAME="QuestionIDtoDelete" VALUE="0">
<INPUT TYPE="HIDDEN" NAME="DeleteTest" VALUE="0">
<INPUT TYPE="HIDDEN" NAME="CreateQuestion" VALUE="0"><%
If Not bReadOnly Then
%><INPUT TYPE="hidden" NAME="Read_Only" VALUE="-1">
<%End If

If bCustomTest And Not bReadOnly Then 
	%>
	<table cellpadding="5" cellspacing="5">
		<tr>
			<td>
	<H3 ALIGN=CENTER>Название нового теста: <INPUT TYPE=TEXT MAXLENGTH=400 SIZE=30 ID=TestName NAME=TestName VALUE="<%=DB2Value(strTestName)%>"></H3>
	<H4>
Чтобы ввести новый вопрос, нажмите кнопку <I>"Создать новый вопрос"</I>.
Кнопка <I>"Сохранить тест"</I> сохраняет изменения, <I>"Удалить тест"</I> - удаляет весь тест целиком 
из базы данных. Чтобы удалить вопрос из теста, используйте ссылку <I>"удалить"</I> рядом с вопросом. 
Кнопка <I>"Назад"</I> возвращает вас к выбору текстов, не сохраняя никаких изменений.
Чтобы создать новый тест на базе существующего, пометьте вопросы, которые вы хотите включить в него, затем нажмите
кнопку <I>"Создать новый тест"</I>.
	</H4>
			</td>
		</tr>
	</table>
	<%
Else
	%><H3 ALIGN=CENTER>Название теста: <FONT COLOR=RED><%=DB2Html(strTestName)%></FONT></H3><%
	If Not bReadOnly Then
	%><H4 ALIGN=CENTER>Выберите вопросы, которые вы хотите включить в ваш собственный тест, и нажмите "Создать новый тест".
	Чтобы вернуться к выбору текстов, нажмите кнопку "Назад".</H4><%
	End If
End If%>
<TABLE WIDTH="90%" BORDER="1" ALIGN="CENTER" CELLPADDING="5"><%
If Not bReadOnly Then
%><TR>
	<TH COLSPAN=3 ALIGN=CENTER BGCOLOR=#FFFFFF NOWRAP=TRUE>
		<INPUT TYPE="BUTTON" VALUE="Назад" ONCLICK="GoArticleList();" id=BUTTON0 name=BUTTON0>
		<%if bCustomTest Then%>
		<INPUT TYPE="BUTTON" VALUE="Создать новый вопрос" ONCLICK="CreateNewQuestion();" id=BUTTON4 name=BUTTON4>
		<INPUT TYPE="BUTTON" VALUE="Сохранить тест" ONCLICK="document.forms[1].elements['GoArticleListFlag'].value='1';SaveThisTest();" id=BUTTON2 name=BUTTON2>
		<BR><INPUT TYPE="BUTTON" VALUE="Удалить тест" ONCLICK="DeleteThisTest();" id=BUTTON3 name=BUTTON3>
		<%End If%>
		<INPUT TYPE="BUTTON" VALUE="Создать новый тест" ONCLICK="CloneThisTest();" id=BUTTON1 name=BUTTON1>
	</TH>
</TR><%
End If
%><TR>
	<TH ALIGN=CENTER>&nbsp;</TH>
	<TH ALIGN=CENTER>Вопросы</TH><%
	If Not bReadOnly Then
	%><TH ALIGN=CENTER>Варианты ответа</TH><%
	End If
%></TR>
<!-- #INCLUDE FILE="cn_clonetest_readonly.asp"-->
<!-- #INCLUDE FILE="cn_clonetest_editable.asp"-->
<%
If nTestID Then
	i = 0
	While Not adoRS.EOF
		i = i + 1
		strQuestion = CStr( adoRs("QText") )
		If bReadOnly Then
			PrintTestQuestions( adoRs )
		Else
			If bCustomTest Then 
				PrintEditableQuestion( adoRS )
			Else 
				PrintReadOnlyQuestion( adoRS )
			End If
		End If
		adoRS.MoveNext
		Response.Flush
	WEnd
End if

Call EndTeacherForm
%>
</TABLE>
<%Call PrintPreFullTextButtons '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>
<TABLE BORDER=0 WIDTH=100% CELLSPACING=0 CELLPADDING=5>
<TR>
  <TD ALIGN=CENTER>
	<HR><%=ShowButton( "Back", "Назад", "JavaScript:GoArticleList()", "Назад к списку текстов" )%>
  </TD>
</TR>
</TABLE><%
Call PrintHints()
Call PrintFooter()

Sub PrintTestQuestions( adoRs )
%><tr>
	<td><%=i%></td>
	<td><b><%=DB2HTML( strQuestion )%></b></td>
</tr><%
End Sub
%>
