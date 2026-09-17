<!-- #INCLUDE FILE="include/header.asp" -->
<!-- #INCLUDE FILE="include/cn_common.asp" -->
<%
Dim SHOW_LEXILE, SHOW_ARTICLE_TYPE, j, bDeleteArticleForbidden

SHOW_LEXILE		= Application("SHOW_LEXILE")
SHOW_ARTICLE_TYPE	= Application("SHOW_ARTICLE_TYPE")

Sub CheckLACCError()
    If Err <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", Err.Number, Err.Description )
    If lacc.LastErrorCode = 10007 Then Call RedirectToScreen("login.asp")
    If lacc.LastErrorCode <> 0 Then Call HandleError( "Ошибка при обращении к TTS серверу:", lacc.LastErrorCode, lacc.LastError )
End Sub

Function IsNumberic( str )
  IsNumberic = RegRepl(str, "[ ]*[0-9]+[ ]*", "0") = "0"
End Function

Function RegRepl( str, patrn, replStr)
  Dim regEx
  Set regEx = New RegExp
  regEx.Pattern = patrn
  regEx.IgnoreCase = True
  RegRepl = regEx.Replace(str, replStr)
End Function

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
			Response.Write " SELECTED "
			bSelected = True
		End If
		Response.Write ">" & Server.HTMLEncode(objRs(strNameField))
		Response.Write "</OPTION>"
	    objRs.MoveNext
	Loop
	Response.Write "<OPTION VALUE=""0"" "
	If Not bSelected Then Response.Write "SELECTED"
	Response.Write ">--- Все разделы ---</OPTION>"
	PopulateSelect = bSelected
End Function

Function ImgSort( img )
	ImgSort = "<IMG SRC=""../images/"&img&".gif"" BORDER=0 ALIGN=MIDDLE>"
End Function

Function AnchorSort( ind, name, img )
	AnchorSort = "<A HREF=""JavaScript:ChangeSortMode(" & ind & ")"" title='Упорядочить по " & name & "'>"&ImgSort( img )&"</A>"
End Function
Function WriteSort( ind, name, img )
	If nSortOrder = ind Then
		WriteSort = ImgSort( img & "d" )
	Else
		WriteSort = AnchorSort( ind, name, img )
	End If
End Function

Sub PrintHeader( ind, header, name )
	Response.Write "<TH ><table width=""1%""><tr><td>"
	Response.Write WriteSort( -ind, name, "up" )
	Response.Write "</td><td><b>" & header & "</b></td><td>"
	Response.Write WriteSort( ind, name, "down" )
	Response.Write "<tr></table></TH>"
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

strOnLoad = "window.focus();"

nInfoType = 0

CheckCNTeacherLogin

Dim nPageNo, nSortOrder, strTests, lngSubjectID
Dim nCLID, nTID
Dim strWhereFTS, strSelFTS, strSortFTS, strFTS, strLXfrom, strLXto, strLXFilter
Dim strLXfromTo, nDel, strSchtype, bReadOnly, strNRO

If DB_Provider = Ora_DB_Provider Then
	strFTS=Request("FTS")
ElseIf DB_Provider = IB_DB_Provider Then
	strFTS=""  ' Full Text Search is disabled in the Interbase version
Else
	HandleFatalError( kInvalidDBProviderConst )
End If
lngSubjectID = GetSafeLng( Request("Subject"), 0 )
strSchtype=Request("schtype")
strNRO = ""
bReadOnly = Cbool( Request("RO") = "1")

Call OpenDatabase()

If bReadOnly Then
	strPageTitle = PRODUCT_NAME & " - Просмотр текстов"
Else
	strPageTitle = PRODUCT_NAME & " - Выбор текстов"
	strNRO = "1" ' not ReadOnly
End If

strID = Storage.CreateToken( 1 )
Call Storage.SetTokenTimeout(strID, DEFAULT_TEACHER_TIMEOUT*60000)
Call Storage.SetData( strID, "NRO", strNRO )

If  IsEmpty(strSchtype) Then  strSchtype="Subject"
If  strSchtype = "Subject" Then
	strFTS=""
ElseIf strSchtype = "Keyword" Then
	lngSubjectID=0
End If

strLXfromTo=Request("LXfromTo")
nDel = Instr(strLXfromTo, "-")
If nDel > 0 Then
	strLXfrom=Left( strLXfromTo, nDel-1)
	strLXto=Mid(strLXfromTo, nDel+1)
End If
strSelFTS = ""
strWhereFTS = ""
strSortFTS = ""
strLXFilter = ""
If  IsEmpty(strFTS) Then  strFTS=""
If  IsNumberic(strLXfrom) Then
	strLXFilter = strLXFilter& " AND ReadingLevel >=" & strLXfrom & " "
Else
	strLXfrom=""
End If
If  IsNumberic(strLXto) Then
	strLXFilter = strLXFilter& " AND ReadingLevel <= " & strLXto & " "
Else
	strLXto=""
End If

If strFTS<>"" Then
	strSelFTS = "Score(1), "
	strWhereFTS = " AND Contains( fulltext,'" &strFTS& "', 1 ) > 0 "
'	strSortFTS = " Score(1) DESC, "
End If

nCLID = Request("CLID")
nTID = Request("TID")
'If IsEmptyStr(nCLID) Or IsEmptyStr(nTID) Then HandleFatalError("Invalid parameters")

nPageNo = GetSafeLng( Request("PageNo"), 0 )
nSortOrder = GetSafeLng( Request("SortOrder"), SORT_BY_SUBJECT )
strTests = GetSafeStr( Request("Tests") )
If IsEmptyStr(strTests) Then strTests = ";"

Dim nArticleID, rsProd
nArticleID = GetSafeLng(Request("DelArticleID"), 0)

If nArticleID>0 Then
	Dim CountTest
	Set CountTest = adoConn.Execute("select count(*) as cnt from CUSTOMTESTS CT WHERE TESTID IN (SELECT TESTID FROM TESTS T WHERE T.TESTID=CT.TESTID AND T.ARTICLEID=" & nArticleID & ")")
	if CLng(CountTest("cnt"))=0 Then
		adoConn.Execute("DELETE FROM ARTICLES WHERE ARTICLEID=" & nArticleID)
	else
		bDeleteArticleForbidden = True
		' возможна ситуация, когда статья находится одновременно в разных учебных курсах (была импортирована несколько раз). Вывести названия всех этих курсов для диагностики
		Set rsProd = adoConn.Execute("select distinct p.productid, p.productname from products p, producttest pt, tests t " &_
				" where p.productid=pt.productid and pt.testid=t.testid and t.articleid=" & nArticleID &_
				" and p.productid<>'" & LAID_A & "'")
		Response.Clear
		PrintSimplePageHeader "Ошибка"
		Writeln "<SCRIPT>"
		Writeln "function GoBackToArticles(){"
		Writeln "document.forms[0].elements['DelArticleID'].value='0';"
		Writeln "document.forms[0].submit();"
		Writeln "}"
		Writeln "</SCRIPT>"
		Writeln "<H2 ALIGN=CENTER><FONT COLOR=""red"">Текст не удален, потому что у него есть тесты.</FONT></H2>"
		If rsProd.EOF Then ' статья импортирована только в один учебный курс
			Writeln "<H3 ALIGN=CENTER>Если вы все же хотите удалить этот текст: нажмите кнопку ""Назад"", чтобы вернуться к выбору текстов и удалить у него все тесты.</H3>"
		Else ' статья импортирована в два и более курсов
			Writeln "<H3 ALIGN=CENTER>Этот же текст был импортирован также в другие наполняемые учебные курсы:</H3>"
			While Not rsProd.EOF
			   Writeln "<H3 ALIGN=CENTER><FONT COLOR=""blue"">" & rsProd("productname") & "</FONT></H3>"
			   rsProd.MoveNext
			Wend
			Writeln "<H3 ALIGN=CENTER>Сначала попробуйте удалить тесты из курса <FONT COLOR=""blue"">"& PRODUCT_NAME &"</FONT>.</H3>"
			Writeln "<H3 ALIGN=CENTER>Если после этого не получается удалить этот текст, то войдите в другой учебный курс и удалите из него соответствующие тесты либо весь текст целиком.</H3>"
		End If
		Writeln "<FORM METHOD=POST ACTION=""cn_articles.asp"">"
		For Each Item In Request.Form
			For j = 1 To Request.Form(Item).Count
			    Writeln "<INPUT TYPE=""HIDDEN"" NAME=""" & Item & """ VALUE=""" & DB2Value(Request.Form(Item)(j)) & """>"
			Next
		Next
		Writeln "</FORM>"
		Writeln "<CENTER>"
		strTests = ""
	End if
	CheckADOError
End If

If GetSafeLng(Request("DeleteTests"), 0)=1 Then
	Dim arrTests, strTempTests
	Dim adoCheckCustomTestCmd, adoDeleteTestCmd, adoDeleteCustomTestCmd, adoGetTestNameCmd

	Set adoGetTestNameCmd = Server.CreateObject("ADODB.Command")
	adoGetTestNameCmd.ActiveConnection = adoConn
	adoGetTestNameCmd.CommandText = _
	    "SELECT Name FROM TESTVIEW('" & strTestSuffix & "') WHERE TestID=?"
	adoGetTestNameCmd.Parameters.Append adoGetTestNameCmd.CreateParameter( "TestID", adInteger, adParamInput, 4, 0 )
	adoGetTestNameCmd.Prepared = True

	Set adoCheckCustomTestCmd = Server.CreateObject("ADODB.Command")
	adoCheckCustomTestCmd.ActiveConnection = adoConn
	adoCheckCustomTestCmd.CommandText = _
	    "SELECT Count(TestID) AS theCount FROM CustomTests WHERE TestID=?"
	adoCheckCustomTestCmd.Parameters.Append adoCheckCustomTestCmd.CreateParameter( "TestID", adInteger, adParamInput, 4, 0 )
	adoCheckCustomTestCmd.Prepared = True

	Set adoDeleteCustomTestCmd = Server.CreateObject("ADODB.Command")
	adoDeleteCustomTestCmd.ActiveConnection = adoConn
	adoDeleteCustomTestCmd.CommandText = "DELETE FROM CustomTests WHERE TestID=?"
	adoDeleteCustomTestCmd.Parameters.Append adoDeleteCustomTestCmd.CreateParameter( "TestID", adInteger, adParamInput, 4, 0 )
	adoDeleteCustomTestCmd.Prepared = True

	Set adoDeleteTestCmd = Server.CreateObject("ADODB.Command")
	adoDeleteTestCmd.ActiveConnection = adoConn
	adoDeleteTestCmd.CommandText = "DELETE FROM Tests WHERE TestID=?"
	adoDeleteTestCmd.Parameters.Append adoDeleteTestCmd.CreateParameter( "TestID", adInteger, adParamInput, 4, 0 )
	adoDeleteTestCmd.Prepared = True

	If Left( strTests, 1 ) = ";" Then strTempTests = Right( strTests, Len(strTests) - 1 )
	If Right( strTests, 1 ) = ";" Then strTempTests = Left( strTests, Len(strTests) - 1 )
	If Not IsEmptyStr(strTests) Then arrTests = Split( strTempTests, ";" )
	Dim List, Item, bDeleteTestForbidden, adoRSTemp, strTestName
	bDeleteTestForbidden = False
	If Not IsEmpty(arrTests) Then
		For i = 0 To UBound(arrTests)
			adoCheckCustomTestCmd("TestID") = GetSafeLng(arrTests(i), 0)
			Set adoRS = adoCheckCustomTestCmd.Execute()
			CheckADOError
			if CLng(adoRS("theCount"))=1 Then
				Set List = lacc.GetAssignmentListForTest(GetSafeLng(arrTests(i), 0), "courses")
				CheckLACCError
				If List.Count=0 Then
					adoDeleteCustomTestCmd("TestID") = GetSafeLng(arrTests(i), 0)
					call adoDeleteCustomTestCmd.Execute()
					CheckADOError
					adoDeleteTestCmd("TestID") = GetSafeLng(arrTests(i), 0)
					call adoDeleteTestCmd.Execute()
					CheckADOError
				Else
					If Not bDeleteTestForbidden Then
						' first time, write page header here
						Response.Clear
						PrintSimplePageHeader "Ошибка"
						Writeln "<SCRIPT>"
						Writeln "function GoBackToArticles(){"
						Writeln "document.forms[0].elements['DeleteTests'].value='0';"
						Writeln "document.forms[0].submit();"
						Writeln "}"
						Writeln "</SCRIPT>"
						Writeln "<H2 ALIGN=CENTER><FONT COLOR=""red"">Следующие тесты не удалены, потому что они назначены ученикам.</FONT></H2>"
						Writeln "<H3 ALIGN=CENTER>Если вы всё же хотите удалить эти тесты: вернитесь в NetSchool, удалите соответствующие задания, затем нажмите кнопку ""Повторить"" для удаления этих тестов. Или нажмите кнопку ""Назад"", чтобы вернуться к выбору текстов.</H3>"
						Writeln "<FORM METHOD=POST ACTION=""CN_ARTICLES.ASP"">"
						For Each Item In Request.Form
							For j = 1 To Request.Form(Item).Count
							    Writeln "<INPUT TYPE=""HIDDEN"" NAME=""" & Item & """ VALUE=""" & DB2Value(Request.Form(Item)(j)) & """>"
							Next
						Next
						Writeln "</FORM>"
						Writeln "<CENTER>"
						Writeln "<TABLE ALIGN=CENTER BORDER=1 CELLPADDING=5><TR>"
						Writeln "<TH>Тест</TH>"
						Writeln "<TH>Класс/Предмет</TH>"
						Writeln "<TH>Тема задания</TH>"
						Writeln "</TR>"
					End If
					bDeleteTestForbidden = True
					For Each Item In List
						Response.Write "<TR BGCOLOR=#FFFFFF>"
						adoGetTestNameCmd("TestID") = arrTests(i)
						Set adoRSTemp = adoGetTestNameCmd.Execute
						CheckADOError
						If Not adoRSTemp.EOF Then strTestName = adoRSTemp("Name") Else strTestName = "Недоступно название теста (TestID=" & arrTests(i) & ")"
						CheckADOError
						Response.Write "<TD>" & strTestName & "</TD><TD>" & Item.Field("classname") & "</TD><TD>" & Item.Field("assignmentname") & "</TD>"
						Response.Write "</TR>"
					Next
				End If
			End If
		Next
	End If
	strTests = ""
End If

If bDeleteTestForbidden or bDeleteArticleForbidden Then
	Writeln "</TABLE><BR>"
	if Not bDeleteArticleForbidden Then
		Writeln ShowButton( "TryAgain", "Повторить...", "JavaScript:document.forms[0].submit();", "Попытаться еще раз..." )
		Writeln "&nbsp;&nbsp;&nbsp;"
	End if
	Writeln ShowButton( "Back", "Назад", "JavaScript:GoBackToArticles();", "Назад" )
	Writeln "</CENTER>"
	PrintSimplePageFooter
	Response.End
End If

Dim i, objSubjectsRs, bIsTeacher, bIsAdmin
bIsTeacher = lacc.IsTeacher(strToken)
bIsAdmin = lacc.IsAdmin(strToken)

Set objSubjectsRs = adoConn.Execute("SELECT distinct s.subjectid,s.subject FROM subjects s, articles a, TESTVIEW('" & strTestSuffix & "') t " & _
						"  WHERE s.subjectid=a.subjectid and a.articleid=t.articleid " & _
						"  ORDER BY s.subject " )
CheckADOError
If objSubjectsRs.EOF Then
	Response.Clear
	PrintSimplePageHeader "Нет текстов в базе данных"
	Writeln "<H3>Этот учебный курс можно наполнить собственными учебными материалами.</H3>"
	Writeln "<H3>Для этого предназначен экран ""Создание курсов"".</H3>"
	PrintSimplePageFooter
	Response.End
End If

If ( nSortOrder = SORT_BY_SUBJECT Or nSortOrder = -SORT_BY_SUBJECT ) And lngSubjectID <> 0 Then nSortOrder = SORT_BY_TITLE

Dim strFilter
strFilter = ""

If lngSubjectID <> 0 Then
	strFilter = strFilter & " AND Subjects.SubjectID=" & lngSubjectID & " "
End If
Dim adoRs, bFound, nSkip, nTestCount
Set adoRs = adoConn.Execute("SELECT COUNT(DISTINCT ARTICLES.ARTICLEID) Cnt " & _
                            "   FROM Articles, Subjects, TESTVIEW('" & strTestSuffix & "') T " &_
                            "   WHERE Subjects.SubjectID=Articles.SubjectID AND Articles.ArticleID=T.ArticleID "& strWhereFTS & strFilter & strLXFilter)

CheckADOError
nTestCount = CLng(adoRs("Cnt"))

Dim strSortOrder, strSortColumn, strSortFieldAndOrder
strSortColumn = ""
strSortFieldAndOrder = ""
If DB_Provider = Ora_DB_Provider Then  ' ### DB fork ###

Select Case nSortOrder
	Case SORT_BY_SUBJECT
		If lngSubjectID = 0 Then
			strSortOrder = "UPPER(Subject) ASC, UPPER(Title) ASC"
		Else
			strSortOrder = "UPPER(Title) ASC"
		End If
	Case -SORT_BY_SUBJECT
		If lngSubjectID = 0 Then
			strSortOrder = "UPPER(Subject) DESC, UPPER(Title) ASC"
		Else
			strSortOrder = "UPPER(Title) ASC"
		End If
	Case SORT_BY_SCORE
		If strFTS = "" Then
			strSortOrder = "UPPER(Title) ASC"
			nSortOrder = SORT_BY_TITLE
		Else
			strSortOrder = "SCORE(1) DESC, UPPER(Title) ASC"
		End If
	Case -SORT_BY_SCORE
		If strFTS = "" Then
			nSortOrder = SORT_BY_TITLE
			strSortOrder = "UPPER(Title) ASC"
		Else
			strSortOrder = "SCORE(1) ASC, UPPER(Title) ASC"
		End If
	Case SORT_BY_TYPE
		strSortOrder = "UPPER(Type) ASC, UPPER(Title) ASC"
	Case -SORT_BY_TYPE
		strSortOrder = "UPPER(Type) DESC, UPPER(Title) ASC"
	Case SORT_BY_TITLE
		strSortOrder = "UPPER(Title) ASC"
	Case -SORT_BY_TITLE
		strSortOrder = "UPPER(Title) DESC"
	Case SORT_BY_SOURCE
		strSortOrder = "UPPER(Source) ASC, UPPER(Title) ASC"
	Case -SORT_BY_SOURCE
		strSortOrder = "UPPER(Source) DESC, UPPER(Title) ASC"
	Case SORT_BY_LEXILE
		strSortOrder = "ReadingLevel ASC, UPPER(Title) ASC"
	Case -SORT_BY_LEXILE
		strSortOrder = "ReadingLevel DESC, UPPER(Title) ASC"
	Case Else
		If lngSubjectID = 0 Then
			strSortOrder = "UPPER(Subject) ASC, UPPER(Title) ASC"
		Else
			strSortOrder = "UPPER(Title) ASC"
		End If
End Select
Set adoRs = adoConn.Execute( _
    "SELECT DISTINCT "&strSelFTS&"Articles.ArticleID,Articles.Source,Articles.Citation,Articles.ReadingLevel, " & _
    "                Articles.Title,Subjects.Subject, ArticleTypes.Type " & _
    "   FROM Articles, Subjects, ArticleTypes,TESTS " & _
    "   WHERE Subjects.SubjectID=Articles.SubjectID AND " & _
    "   	  Articles.TypeID=ArticleTypes.ArticleTypeID AND " & _
	"		  Articles.ArticleID=Tests.ArticleID" & strWhereFTS &   strFilter & strLXFilter & _
    "   ORDER BY " &strSortFTS& strSortOrder )

ElseIf DB_Provider = IB_DB_Provider Then  ' ### DB fork ###

Select Case nSortOrder
	Case SORT_BY_SUBJECT
		If lngSubjectID = 0 Then
			strSortColumn = "UPPER(Subject) as SortFld1, UPPER(Title) as SortFld2, "
			strSortFieldAndOrder = "1 ASC, 2 ASC"
		Else
			strSortColumn = "UPPER(Title) as SortFld1, "
			strSortFieldAndOrder = "1 ASC"
		End If
	Case -SORT_BY_SUBJECT
		If lngSubjectID = 0 Then
			strSortColumn = "UPPER(Subject) as SortFld1, UPPER(Title) as SortFld2, "
			strSortFieldAndOrder = "1 DESC, 2 ASC"
		Else
			strSortColumn = "UPPER(Title) as SortFld1, "
			strSortFieldAndOrder = "1 ASC"
		End If
	Case SORT_BY_SCORE
		If strFTS = "" Then
		Else
		End If
	Case -SORT_BY_SCORE
		If strFTS = "" Then
		Else
		End If
	Case SORT_BY_TYPE
		strSortColumn = "UPPER(""TYPE"") as SortFld1, UPPER(Title) as SortFld2, "
		strSortFieldAndOrder = "1 ASC, 2 ASC"
	Case -SORT_BY_TYPE
		strSortColumn = "UPPER(""TYPE"") as SortFld1, UPPER(Title) as SortFld2, "
		strSortFieldAndOrder = "1 DESC, 2 ASC"
	Case SORT_BY_TITLE
		strSortColumn = "UPPER(Title) as SortFld1, "
		strSortFieldAndOrder = "1 ASC"
	Case -SORT_BY_TITLE
		strSortColumn = "UPPER(Title) as SortFld1, "
		strSortFieldAndOrder = "1 DESC"
	Case SORT_BY_SOURCE
		strSortColumn = "UPPER(Source) as SortFld1, UPPER(Title) as SortFld2, "
		strSortFieldAndOrder = "1 ASC, 2 ASC"
	Case -SORT_BY_SOURCE
		strSortColumn = "UPPER(Source) as SortFld1, UPPER(Title) as SortFld2, "
		strSortFieldAndOrder = "1 DESC, 2 ASC"
	Case SORT_BY_LEXILE
		strSortColumn = "UPPER(Title) as SortFld1, "
		strSortFieldAndOrder = "ReadingLevel ASC, 1 ASC"
	Case -SORT_BY_LEXILE
		strSortColumn = "UPPER(Title) as SortFld1, "
		strSortFieldAndOrder = "ReadingLevel DESC, 1 ASC"
	Case Else
		If lngSubjectID = 0 Then
			strSortColumn = "UPPER(Subject) as SortFld1, UPPER(Title) as SortFld2, "
			strSortFieldAndOrder = "1 ASC, 2 ASC"
		Else
			strSortColumn = "UPPER(Title) as SortFld1, "
			strSortFieldAndOrder = "1 ASC"
		End If
End Select
Set adoRs = adoConn.Execute( _
    "SELECT DISTINCT "&strSortColumn&" Articles.ArticleID,Articles.Source,Articles.Citation,Articles.ReadingLevel, " & _
    "                Articles.Title,Subjects.Subject, ArticleTypes.""TYPE"" " & _
    "   FROM Articles, Subjects, ArticleTypes, TESTVIEW('" & strTestSuffix & "') T " & _
    "   WHERE Subjects.SubjectID=Articles.SubjectID AND " & _
    "   	  Articles.TypeID=ArticleTypes.ArticleTypeID AND " & _
	"		  Articles.ArticleID=T.ArticleID" & strFilter & strLXFilter & _
    "   ORDER BY " &strSortFieldAndOrder )

Else
	HandleFatalError( kInvalidDBProviderConst )
End If
CheckADOError

If nTestCount < PAGE_SIZE * nPageNo Then nPageNo = 0
nSkip = PAGE_SIZE * nPageNo

If Not adoRs.EOF Then adoRs.Move nSkip
CheckADOError

Dim strTGLink
strTGLink = Application("TEACHER_GUIDE_LINK")

Call PrintPreScripts
%>
<SCRIPT>
function ChangeSortMode( ind )
{
	var form2 = document.forms[1];
	form2.elements['SortOrder'].value = ind;
	form2.submit();
}
<%If DB_Provider = Ora_DB_Provider Then %>
function ChangeSubject()
{
	var form2 = document.forms["Form2"];
	form2.elements['FTS'].value = "";
	form2.elements['schtype'][0].checked = true
}
function checkKeyword()
{
	var form2 = document.forms["Form2"];
	form2.elements['schtype'][1].checked = true;
	form2.elements['Subject'].selectedIndex=form2.elements['Subject'].options.length-1;
}<%
End If%>
function GoPage( page )
{
	var form2 = document.forms[1];
	form2.elements['PageNo'].value = page;
	var test_str = '';
	var old_text_str = form2.elements['Tests'].value;
	for (var i=0;i<form2.elements.length;i++) {
	  if (form2.elements[i].type=='checkbox') {
	   old_text_str = old_text_str.replace( ';' + form2.elements[i].value + ';', ';' );
	   if (form2.elements[i].checked)
	     test_str += (form2.elements[i].value + ';');
	  }
	}
    form2.elements['Tests'].value = old_text_str+test_str;
	form2.submit();
}
function ViewSummary( testID )
{
	window.open( 'cn_summary.asp?AT=<%=strToken%>&TTSURL=<%=Server.URLEncode(strTTSURL)%>&LAID=<%=LAID_A%>&id=<%=strID%>&Parameters=' + testID, '_blank', 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no' );
}
function ViewChart()
{
	window.open( 'cn_chart.asp?AT=<%=strToken%>&TTSURL=<%=Server.URLEncode(strTTSURL)%>', 'Chart', 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=640,height=450' );
}
<%If Not IsEmptyStr( strTGLink ) Then%>
function ViewTeacherGuide()
{
	window.open( '<%=strTGLink%>', 'TeacherGuide', 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=640,height=450' );
}
<%End If
If (Not bReadOnly) Or bIsAdmin Then%>
function OnDeleteTestsClick()
{
	if (confirm('Вы уверены, что хотите удалить выбранные тесты?\n\n(Вы сможете удалить только собственные тесты. Тесты с названием-кодом могут быть удалены, когда вы удалите текст)')==true){
		var form2 = document.forms[1];

		var test_str = '';
		var old_text_str = form2.elements['Tests'].value;
		for (var i=0;i<form2.elements.length;i++) {
		  if (form2.elements[i].type=='checkbox') {
		   old_text_str = old_text_str.replace( ';' + form2.elements[i].value + ';', ';' );
		   if (form2.elements[i].checked)
		     test_str += (form2.elements[i].value + ';');
		  }
		}
		form2.elements['Tests'].value = old_text_str+test_str;
		form2.elements['DeleteTests'].value='1';
		form2.submit();
	}
}
<%End If
If Not bReadOnly Then%>
function DoSave()
{
	var form1 = document.forms[0],form2 = document.forms[1];
	var subj2 = form2.elements['Subject'];
	form1.elements['Subject'].value = subj2.options[subj2.selectedIndex].value;
	var test_str = '';
	var old_text_str = form2.elements['Tests'].value;
	for (var i=0;i<form2.elements.length;i++) {
	  if (form2.elements[i].type=='checkbox') {
	   old_text_str = old_text_str.replace( ';' + form2.elements[i].value + ';', ';' );
	   if (form2.elements[i].checked)
	     test_str += (form2.elements[i].value + ';');
	  }
	}
    form1.elements['Tests'].value = old_text_str+test_str;
	form1.submit();
}
<%End If
If (Not bReadOnly) Or bIsAdmin Then%>
function DelArticle(articleID)
{
	if (confirm('Вместе с текстом, будут удалены все контрольные вопросы к нему.\n\nВы уверены, что хотите удалить выбранный текст?'))
	  if (confirm('Вы уверены?')){
		var form2 = document.forms[1];
		form2.elements['DelArticleID'].value=articleID;
		form2.submit();
	  }
}
<%End If%>
function CloneTest( testID, ArticleID )
{
	var form3 = document.forms[2];
	form3.elements['Parameters'].value = testID;
	form3.elements['ArticleID'].value = ArticleID;
	form3.submit();
}
function CloseWnd()
{ <%
If Not bReadOnly Then%>
	if( confirm('Вы уверены, что хотите закрыть это окно без сохранения выбранных заданий?') )<%
End If%>
		if( window.parent )
			window.parent.window.close();
		else
			window.close();
}
</SCRIPT>
<%Call PrintPreTitle
If bReadOnly Then
	Call PrintHeaderMessage("Просмотр текстов")
Else
	Call PrintHeaderMessage("Выбор текстов")
End If
Call PrintPreNoButtonsPage
Call BeginTeacherForm( "cn_assignment.asp", "Form1" ) %>
<INPUT TYPE="HIDDEN" NAME="CLID" VALUE="<%=nCLID%>">
<INPUT TYPE="HIDDEN" NAME="TID" VALUE="<%=nTID%>">
<INPUT TYPE="HIDDEN" NAME="Subject" VALUE="<%=lngSubjectID%>">
<INPUT TYPE="HIDDEN" NAME="SortOrder" VALUE="<%=nSortOrder%>">
<INPUT TYPE="HIDDEN" NAME="PageNo" VALUE="<%=nPageNo%>">
<INPUT TYPE="HIDDEN" NAME="Tests" VALUE="<%=strTests%>"> <%
Call EndTeacherForm
Call BeginTeacherForm( "cn_articles.asp", "Form2" ) %>
<INPUT TYPE="HIDDEN" NAME="CLID" VALUE="<%=nCLID%>">
<INPUT TYPE="HIDDEN" NAME="TID" VALUE="<%=nTID%>">
<INPUT TYPE="HIDDEN" NAME="SortOrder" VALUE="<%=nSortOrder%>">
<INPUT TYPE="HIDDEN" NAME="PageNo" VALUE="<%=nPageNo%>">
<INPUT TYPE="HIDDEN" NAME="Tests" VALUE="<%=strTests%>">
<INPUT TYPE="HIDDEN" NAME="DeleteTests" VALUE="0">
<INPUT TYPE="HIDDEN" NAME="DelArticleID" VALUE="">
<INPUT TYPE="HIDDEN" NAME="RO" VALUE="<%If bReadOnly Then%>1<%End If%>">

<CENTER>
	<table width="95%">
    <tr><td width="40%">&nbsp;<B>Критерии поиска:</B></td><td>&nbsp;</td></tr>
	<tr>
	  <td align="left"><B><Font Size="-1">Выберите раздел</font></b><br>
	   	<SELECT NAME="Subject"<%If DB_Provider = Ora_DB_Provider Then %> onChange="ChangeSubject()"<%End If%>>
	   		<% PopulateSelect objSubjectsRs, "SUBJECTID", "SUBJECT", lngSubjectID %>
	   	</SELECT>
	  </td>
	  <td>&nbsp;<br>
<%If DB_Provider = Ora_DB_Provider Then %>
	<input type="radio" name="schtype" onClick="ChangeSubject()" value="Subject" <%If strSchtype="Subject" Then%>CHECKED<%End If%>><B><Font Size="-1">Раздел</font></b>
<%ElseIf DB_Provider = IB_DB_Provider Then %>
	<INPUT TYPE="Submit" VALUE="Искать" id=Submit1 name=Submit1>
<%Else
	HandleFatalError( kInvalidDBProviderConst )
End If %> </td>
	</tr><%
If SHOW_LEXILE Then%>
	<tr>
	  <td>
	    <B><Font Size="-1">Выберите уровень сложности</font></b><br>
	    <SELECT NAME="LXFromTo"  >
	    <OPTION VALUE="100-500" <%If strLXfrom="100" Then%>SELECTED<%End If%>>100-500 Классы 1-4</OPTION>
	    <OPTION VALUE="500-900" <%If strLXfrom="500" Then%>SELECTED<%End If%>>500-900 Классы 5-8</OPTION>
	    <OPTION VALUE="900-1200" <%If strLXfrom="900" Then%>SELECTED<%End If%>>900-1200 Классы 9-11</OPTION>
	    <OPTION VALUE="" <%If strLXfrom="" Then%>SELECTED<%End If%>>--Все уровни сложности--</OPTION>
	    </SELECT>
      </td>
	  <td>&nbsp;</td>
	</tr><%
End If%>
<%If DB_Provider = Ora_DB_Provider Then %>
	<tr>
	  <td>
        <B><Font Size="-1">Введите ключевое слово</font></b><br>
        <INPUT SIZE=30 NAME="FTS" TYPE="text" VALUE="<%=strFTS%>" onFocus="checkKeyword()">&nbsp;&nbsp;<INPUT TYPE="Submit" VALUE="Искать" id=Submit1 name=Submit1>
	  </td>
	  <td>
	    &nbsp;<br>
	    <input type="radio" name="schtype"  onClick="checkKeyword()" value="Keyword" <%If strSchtype="Keyword" Then%>CHECKED<%End If%>><B><Font Size="-1">Ключевое слово</font></b>
	  </td>
	</tr>
<%End If%>
	</table>
<%If Not adoRs.EOF Then%>
	<table border=0 cellpadding=5 width="95%">
	<tr><td width="30%" valign="bottom"><Font Size="-1"><b>Для сортировки используйте стрелки.</b></font></td><td align="left"><b><%
	If Not bReadOnly Then
		%>Чтобы назначить тесты учащимся, сделайте соответствующие пометки, затем нажмите "Назначить".<br>Нажмите имя теста, чтобы просмотреть вопросы или создать свои вопросы.<%
	ElseIf bIsAdmin Then
		%>Как администратор, вы можете просматривать и удалять тесты и тексты.<br>Создавать и редактировать тесты может только пользователь с ролью учителя, причём в режиме назначения задания.<%
	End If%></b></td>
	</tr></table>
	<TABLE BORDER="1" CELLPADDING="5" WIDTH="95%">
	<TR><%
		If lngSubjectID = 0 Then Call PrintHeader( SORT_BY_SUBJECT, "Раздел", "Разделу" )
        If SHOW_ARTICLE_TYPE Then Call PrintHeader( SORT_BY_TYPE, "Тип", "Типу текста" )
		Call PrintHeader( SORT_BY_TITLE, "Заголовок", "Заголовку текста" )
		Call PrintHeader( SORT_BY_SOURCE, "Источник", "Источнику" )
		If SHOW_LEXILE Then Call PrintHeader( SORT_BY_LEXILE, "Уровень сложности", "Уровню сложности" )
		If strFTS<>"" Then Call PrintHeader( SORT_BY_SCORE, "Рейтинг поиска", "Рейтингу поиска" )
		Response.Write "<th>Тесты</th>"
	%></TR>
<%
	Dim nCount, rsTests, nTempTestID
	nCount = 0
	While Not adoRs.EOF And nCount < PAGE_SIZE
		set rsTests = adoConn.Execute( _
		    "SELECT TestID, Name FROM TESTVIEW('" & strTestSuffix & "') WHERE ArticleID=" & CLng(adoRS("ArticleID")) )
		CheckAdoError
		If Not rsTests.EOF Then nTempTestID=rsTests("TestID") Else nTempTestID=0

		%><TR BGCOLOR=#ffffff>
			<%If lngSubjectID = 0 Then
				%><TD ALIGN=CENTER><%=DB2HTML(adoRs("Subject"))%></TD><%
			End If
			If SHOW_ARTICLE_TYPE Then
				%><TD ALIGN=CENTER><%=DB2HTML(adoRs("Type"))%></TD><%
			End If%>
			<TD ALIGN=LEFT><A HREF="JavaScript:ViewSummary(<%=CLng(nTempTestID)%>)" onclick="ViewSummary(<%=CLng(nTempTestID)%>);return false;" onmouseover="self.status='Краткая аннотация';return true;" onmouseout="self.status=''"><I><%=adoRs("Title")%></I></A><%
			If (Not bReadOnly) Or bIsAdmin Then%>
				<BR><A HREF="JavaScript:DelArticle(<%=CLng(adoRS("ArticleID"))%>)" onclick="DelArticle(<%=CLng(adoRS("ArticleID"))%>);return false;" onmouseover="self.status='Удалить текст';return true;" onmouseout="self.status=''"><I style="color:#808080;font-size:9pt;text-decoration:none">Удалить текст</I></A></TD><%
			End If%>
			<TD ALIGN=CENTER><%=adoRs("Source")%></TD><%
			If SHOW_LEXILE Then
				%><TD ALIGN=CENTER><%=adoRs("ReadingLevel")%></TD><%
			End If
			If strFTS<>"" Then
				%><TD ALIGN=CENTER><%=DB2HTML(adoRs("SCORE(1)"))%></TD><%
			End If
			%><TD ALIGN=LEFT NOWRAP><%

'			If rsTests.EOF Then Response.Write "Тесты недоступны"
			Dim nTempCount,rsQst
			nTempCount = 0
			While Not rsTests.EOF
			   nTempTestID = rsTests("TestID")
'			   Set rsQst = adoConn.Execute("SELECT Count(*) Cnt FROM Questions WHERE TestID="& nTempTestID )
'			   CheckADOError
'			   If CLng(rsQst("Cnt")) > 0  Then  ' раньше не показывались тесты без единого вопроса (таковые могли быть созданы по ошибке), в результате их нельзя было удалить :(
				Dim rsCustomTests
				Set rsCustomTests = adoConn.Execute( _
				    "SELECT * FROM CustomTests WHERE TestID=" & CLng(nTempTestID) )
				CheckADOError

				Dim bCustomTest
				bCustomTest = (Not rsCustomTests.EOF)
'				If GetSafeLng(rsCustomTests("TeacherID"), 0)=GetSafeLng(nTID, 0) And GetSafeLng(rsCustomTests("ClassID"), 0)=GetSafeLng(nCLID, 0) Then bCustomTest = true

				nTempCount = nTempCount + 1
				If nTempCount > 1 Then Response.Write "<br>"
				If (Not bReadOnly) Or bIsAdmin Then
					%><INPUT TYPE="CHECKBOX" NAME="Test<%=CLng(nTempTestID)%>" VALUE="<%=CStr(nTempTestID)%>"<%If InStr( strTests,";" & CStr(nTempTestID) & ";" ) > 0 Then%> CHECKED<%End If%>><%
				End If
				Response.Write "&nbsp;"
				If bIsTeacher Or bIsAdmin Then
					If bCustomTest Then
						%><A HREF="JavaScript:CloneTest(<%=CLng(nTempTestID)%>,0)" onclick="CloneTest(<%=CLng(nTempTestID)%>,0);return false;" onmouseover="self.status='Копировать / редактировать свои вопросы';return true;" onmouseout="self.status=''"><i><b><%=DB2Html(rsTests("Name"))%></b></i></a><%
					Else
						%><A HREF="JavaScript:CloneTest(<%=CLng(nTempTestID)%>,0)" onclick="CloneTest(<%=CLng(nTempTestID)%>,0);return false;" onmouseover="self.status='Просмотреть вопросы / создать свои вопросы';return true;" onmouseout="self.status=''"><%=DB2Html(rsTests("Name"))%></a><%
					End If
				Else
					Response.Write DB2Html(rsTests("Name"))
				End If

'			   End If
			   rsTests.MoveNext
			Wend
			If nTempCount = 0 Then Response.Write "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<I>Тесты не заданы</I>"
			rsTests.Close
			If Not bReadOnly Then
				%><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<A HREF="JavaScript:CloneTest(0,<%=CLng(adoRS("ArticleID"))%>)" onclick="CloneTest(0,<%=CLng(adoRS("ArticleID"))%>);return false;" onmouseover="self.status='Создать свои вопросы';return true;" onmouseout="self.status=''"><i><b>Создать</b></i></a><%
			End If
			%></TD>
		</TR>
<%		nCount = nCount + 1
		adoRs.MoveNext
	WEnd%>
	</TABLE>

	<%If nTestCount >= PAGE_SIZE Then%>
		<P></P>
		<CENTER>
			<TABLE RULES=NONE BORDER=2 CELLPADDING=3 CELLSPACING=3><TR><%
				If nPageNo > 0 Then%>
					<TH BGCOLOR=#ffffff VALIGN=TOP>
						<A HREF="JavaScript:GoPage(<%=(nPageNo-1)%>)" onmouseover="self.status='Предыдущая страница';return true;" onmouseout="self.status=''">Пред.&nbsp;стр.</A>
					</TH><%
				Else%>
					<TH BGCOLOR=#ffffff VALIGN=TOP><FONT COLOR=#C0C0C0>Пред.&nbsp;стр.</FONT></TH><%
				End If
				%><TH BGCOLOR=#ffffff ALIGN=CENTER><%
				For i = 0 To PageCount( nTestCount, PAGE_SIZE ) - 1
					If i <> nPageNo Then%>
						<A HREF="JavaScript:GoPage(<%=i%>)" onmouseover="self.status='Страница <%=(i+1)%>';return true;" onmouseout="self.status=''"><%
					End If%>
					<B>&nbsp;<%=(i+1)%>&nbsp;</B><%
					If i <> nPageNo Then%>
						</A><%
					End If
				Next
				%></TH><%
				If (nPageNo+1) * PAGE_SIZE < nTestCount Then%>
					<TH BGCOLOR=#ffffff VALIGN=TOP>
						<A HREF="JavaScript:GoPage(<%=(nPageNo+1)%>)" onmouseover="self.status='Следующая страница';return true;" onmouseout="self.status=''">След.&nbsp;стр.</A>
					</TH><%
				Else%>
					<TH BGCOLOR=#ffffff VALIGN=TOP><FONT COLOR=#C0C0C0>След.&nbsp;стр.</FONT></TH><%
				End If%>
			</TR></TABLE>
		</CENTER>
	<%End If
Else%>
	<H2 ALIGN="CENTER">По вашим критериям поиска результатов нет</H2>
<%End If%>
	<P></P>
	<TABLE BORDER="0" WIDTH="95%">
	<TR>
		<TD ALIGN="LEFT" NOWRAP>
			<%=ShowButton( "LexileChart", "Уровни сложности...", "JavaScript:ViewChart()", "Примерное соответствие между классом и уровнем сложности" )%>
			<%If Not IsEmptyStr( strTGLink ) Then%>
				&nbsp;&nbsp;&nbsp;
				<%=ShowButton( "TeacherGuide", "Рук-во учителя", "JavaScript:ViewTeacherGuide()", "Перейти в Руководство учителя" )%>
			<%End If%>
		</TD>
		<TD ALIGN="RIGHT" NOWRAP>
			<%If (Not bReadOnly) Or bIsAdmin Then%>
				<%=ShowButton( "DeleteTest", "Удалить тесты", "JavaScript:OnDeleteTestsClick()", "Удалить эти тесты" )%>
				&nbsp;&nbsp;&nbsp;<%
			End If
			If Not bReadOnly Then%>
				<%=ShowButton( "Assign", "Назначить", "JavaScript:DoSave()", "Назначить эти задания" )%>
				&nbsp;&nbsp;&nbsp;<%
			End If%>
			<%=ShowButton( "Close", "Закрыть", "JavaScript:CloseWnd()", "Вернуться к редактированию задания" )%>
		</TD>
	</TR>
	</TABLE>
</CENTER><%
Call EndTeacherForm
Call BeginTeacherForm( "cn_clonetest.asp", "Form3" ) %>
<INPUT TYPE="HIDDEN" NAME="CLID" VALUE="<%=nCLID%>">
<INPUT TYPE="HIDDEN" NAME="TID" VALUE="<%=nTID%>">
<INPUT TYPE="HIDDEN" NAME="Subject" VALUE="<%=lngSubjectID%>">
<INPUT TYPE="HIDDEN" NAME="SortOrder" VALUE="<%=nSortOrder%>">
<INPUT TYPE="HIDDEN" NAME="PageNo" VALUE="<%=nPageNo%>">
<INPUT TYPE="HIDDEN" NAME="Tests" VALUE="<%=strTests%>">
<INPUT TYPE="HIDDEN" NAME="Parameters" VALUE="">
<INPUT TYPE="HIDDEN" NAME="ArticleID" VALUE=""><%
If Not bReadOnly Then
%><INPUT TYPE="hidden" NAME="Read_Only" VALUE="-1">
<%End If
Call EndTeacherForm

Call PrintHints()
Call PrintFooter()%>
