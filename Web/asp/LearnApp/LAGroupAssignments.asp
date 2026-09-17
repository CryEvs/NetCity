<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/teacher.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterYears.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects.asp" -->
<!-- #INCLUDE FILE="../scripts/FilterClassSubjects_IUP.asp" -->
<!-- #INCLUDE FILE="../scripts/dateinput.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const clrSelected = " bgcolor=""#FEE6C5"""
Const kTable = "таблица"
Const kTree = "дерево"
Const kSort = "Сортировка"
Const kSort1= "ученики, задания"
Const kSort2 = "задания, ученики"
Const kTitleLAGA = "Выбор тестирований для отчёта по курсу:"
Const kTeacherHasNoSubjInYear = "Этот учитель не преподает никаких предметов в данном учебном году"
Const kSelectedTesting = "Выберите хотя бы одно тестирование"
Const kChooseTest = "-----Выберите тест------"
Const kCollapseExpand = "Свернуть/Развернуть"

const l = 2
'Array indices
Const indDueDate	= 0
Const indID			= 1
Const indName		= 2
Const indType		= 3
Const indResults	= 4

Dim bOK, dtEndDate, dtStartDate
Dim strCalendarTargetForm, strCalendarTargetAction
Dim rsAssignments, strAssignmentID
Dim rsTests, strTestID, nViewType, nSortType

Dim bJuniorLA
Dim strLAID, strLAName, strLAURL, strLAJID, strBack
Dim strClassName, strSubjClassName
Dim arrList

Function GetPageTitle()
	GetPageTitle = kTitleLAGA& " <U>" & GreenText(DB2HTML(strLAName)) & "</U>"
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningApplications
End Function
Function GetPageTabItem()
	GetPageTabItem =  TabItem_tbQA
 	bTabInternalPage = True
End Function

Function ParseLA( strLAID_Request )
	Dim arrLAID
	If Instr(1, strLAID_Request, "|") Then
		arrLAID = Split(strLAID_Request,"|")
		ParseLA = arrLAID(0)
		strLAJID = arrLAID(1)
		bJuniorLA = True
		Call obTokenMgr.SetData(strToken, stJuniorLA, strLAJID )
	Else
		ParseLA = strLAID_Request
		bJuniorLA = False
		Call obTokenMgr.SetData(strToken, stJuniorLA, "" )
	End If
End Function

Sub ReadState()
	bOK = False
	Call InitDateRange(dtMinDate, dtMaxDate, dtStartDate, dtEndDate)
	Call InitSubjectsForTeacherAndInterval_IUP(False, strUserID, dtStartDate, dtEndDate)
	bOK = True
	nViewType = Request("ViewType")
	If IsDull(nViewType) Then nViewType = kTree
	nSortType = Request("SortType")
	If IsDull(nSortType) Then nSortType = kSort1
	strTestID = Request("TestID")
	If IsDull(strTestID) Then strTestID = "-1"
	strCalendarTargetForm = "LAAssignments"
	strCalendarTargetAction = "LAGroupAssignments.asp"
	Dim strLAID_Request
	Dim strStateLa
	strBack = GetSafeStr( Request("LABACK"), -1, "" )
	strStateLA = GetSafeStr(Request("STATELA"), -1, "")
	If strStateLA <> "" Then Call obTokenMgr.SetData(strToken, stLaState, strStateLA)

	strLAID_Request = ParseLA( GetSafeStr( Request("LAID"), -1, "" ) )
	strLAID = GetSafeActivityID( strLAID_Request )
	If strLAID = "" Then
		strLAID_Request = ParseLA( obTokenMgr.GetData(strToken, stCurrLAID) )
		strLAID = GetSafeActivityID( strLAID_Request )
		strLAName = GetSafeStr(obTokenMgr.GetData(strToken, stActName), -1, Null)
		strLAURL = GetSafeStr(obTokenMgr.GetData(strToken, stLAURL), -1, Null)
	Else
		strLAName = (GetSafeStr( Request("LANAME"), -1, "" ))
		strLAURL = (GetSafeStr( Request("LAURL"), -1, "" ))
		If bJuniorLA Then
			Call obTokenMgr.SetData(strToken, stCurrLAID, strLAID & "|" & strLAJID)
		Else
			Call obTokenMgr.SetData(strToken, stCurrLAID, strLAID)
		End If
		Call obTokenMgr.SetData(strToken, stActName, strLAName)
		Call obTokenMgr.SetData(strToken, stLAURL, strLAURL)
	End If
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken,stCurrSubjClass, strSubjClassID)
	Call obTokenMgr.SetData(strToken,"TestEnd", dtEndDate)
	Call obTokenMgr.SetData(strToken,"TestStart", dtStartDate)
End Sub

Function OnUnload()
	If bOK Then OnUnload = "closeDate()"
End Function

Sub Main()
	Set rsTests = objNSNET.GetActivityTests(strLAID, CLng(strSubjectID), dtStartDate, dtEndDate, strCurrYearID)
	If rsTests.EOF Then Exit Sub
	If strTestID = "-1" Then strTestID = rsTests("TESTID")
	Set rsAssignments = objNSNET.GetTestings(strTestID, CBool(nSortType = kSort2), strLAID, dtStartDate, dtEndDate, strCurrYearID)
End Sub

Sub onHead()
	If bOK Then Call scriptCalendar(strCalendarTargetForm, dtMinDate, dtMaxDate)%>
<script><!--
<%If bOK Then%>
function OpenQAApp()
{
<%If strTestID <> "-1" Then%>
	var form = document.DelForm;
	var chkBox = form.UserTest;
	var bOk = false;

	if( chkBox )
		if( chkBox.length )
		{
			for(var i = 0; i < chkBox.length; i++)
				if( chkBox[i].checked )
					bOk = true;
		}
		else
			bOk = chkBox.checked;
	if( bOk )
	{
		DoSubmit( document.DelForm, '');
	}
	else
<%End If%>
		alert('<%=kSelectedTesting%>');

//	var url = '/asp/RemoteHostProxy.asp?PROXYURL=<%=strLAURL & "&AT=" & strToken & "&TTSURL=" & Server.URLEncode( GetTTSURL() )%>&LAID=<%=strLAID%>';
	//var wndApp = window.open( url, '_blank', 'status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560' );
}
function checkNodes(el)
{
	for( el = el.nextSibling; el.tagName != "DIV" ; el = el.nextSibling )
		;
	var els = el.children(0).children
	for(var i=0;i< els.length; i++)
	{
//		els(i).children(0).checked=el.checked;
		els(i).children(0).click();
	}
}
function ClickTree(el)
{
	var l = document.getElementById(el);
	l.style.display = (l.style.display != 'none') ? 'none' : 'block';
	var im = document.getElementById('i'+el);
	im.src = (l.style.display != 'none') ? '\\images\\Common\\plminus.gif' : '\\images\\Common\\plplus.gif'; "";
//	return false;
}
function closeDate()
{
	var form = document.forms['<%=strCalendarTargetForm%>'];
	if (form.elements['ADT'])
	{
		form.elements['ADT'].value = '';
		form.elements['DDT'].value = '';
	}
}
function CheckAndSubmit()
{
	var form = document.forms['<%=strCalendarTargetForm%>'];
	var startDate = str2date( form.ADT.value );
	if( startDate == null )
	{
		alert(language.Generic.Common.kErrInvalidStartDate );
		form.ADT.value = '<%=Date2Java(dtStartDate)%>';
		return false;
	}
	var endDate = str2date( form.DDT.value );
	if( endDate == null )
	{
		alert(language.Generic.Common.kErrInvalidEndDate );
		form.DDT.value = '<%=Date2Java(dtEndDate)%>';
		return false;
	}
	if( startDate > endDate )
	{
		alert(language.Generic.Common.kMsgStartBeforeEnd );
		form.ADT.value = '<%=Date2Java(dtStartDate)%>';
		form.DDT.value = '<%=Date2Java(dtEndDate)%>';
		return false;
	}
	form.action = '<%=strCalendarTargetAction%>';
	DoSubmit(form, "");
}<%
End If
%>

function Back(){
	goBack(document.LAAssignments, '/angular/school/activities');
}
//--></script>
<%End Sub

Sub DrawFilters( strForm )
	Call DrawSubjects( strForm, obLanguage("Reports","kTeacherHasNoSubjInYear",strFunctionalityType) ) : If bExit Then Exit Sub
	Call DrawDateIntervalRow()%>
	<tr><th><%=obLanguage("Assignment","kATTesting")%>:</th><td class="select"><%
		If rsTests.EOF Then Response.Write obLanguage("Common","kNo") & "</td></tr>" : bExit=True : Exit Sub
		Call DrawSelectRs( rsTests, "TestID", "TESTID", "TestName", strTestID, kChooseTest, "OnChangeSelect('" & strForm & "','" & strScriptName & "');" )%>
	</td></tr>
	<tr><th align="left"><%=obLanguage("Common","kView")%>:</th>
		<td class="select">
			<select NAME="ViewType" onChange="<%="OnChangeSelect('" & strForm & "','" & strScriptName & "');"%>">
				<option value="<%=kTable%>"<%If nViewType = kTable Then response.write " selected"%>><%=kTable%></option>
				<option value="<%=kTree%>"<%If nViewType = kTree Then response.write " selected"%>><%=kTree%></option>
			</select>
		</td></tr>
	<tr><th align="left"><%=kSort%>:</th>
		<td class="select">
			<select NAME="SortType" onChange="<%="OnChangeSelect('" & strForm & "','" & strScriptName & "');"%>">
				<option value="<%=kSort1%>"<%If nSortType = kSort1 Then response.write " selected"%>><%=kSort1%></option>
				<option value="<%=kSort2%>"<%If nSortType = kSort2 Then response.write " selected"%>><%=kSort2%></option>
			</select>
		</td>
	</tr><%If strTestID = "-1" Then bExit=True
End Sub

Sub DrawButtons()
	If Not readonly And Not rsTests.EOF Then
		If Not rsAssignments.EOF Then Response.Write( ShowButton("report", "report", "JavaScript:OpenQAApp();", obLanguage("Common","kContinue"), obLanguage("Common","kContinue")) & "<br>" )
	End If
End Sub

Sub onDrawPage()
	If Not bIsDebug Then On Error Resume Next
	If bExit Then Exit Sub%>
	<form NAME="LAAssignments" ACTION="LAAssignments.asp" METHOD="post">
	<%=WriteObligatoryTags()%>
	<%Call DrawButtonsFilters( True, "LAAssignments" )%>
	</form><%If bExit Then Exit Sub%>
	<form NAME="DelForm" ACTION="/asp/RemoteHostProxy.asp?PROXYURL=<%=strLAURL & "&AT=" & strToken & "&TTSURL=" & Server.URLEncode( GetTTSURL() )%>&LAID=<%=strLAID%>" METHOD="post" target="TTS">
		<%=WriteObligatoryTags()%>
		<%If Not rsAssignments.EOF Then Call DrawAssignmentsTable( "#E7EFF7" ) Else Response.Write "<h3>"&obLanguage("Grade","kNoMarks")&"</h3>"%>
	</form><%
End Sub

Sub DrawTable1( rsObj )
	Dim Item, n,i, dctFieldNames
	Set dctFieldNames = Server.CreateObject("NetCity.Storage")
	dctFieldNames("CLASSNAME") = obLanguage("Common","kClass",strFunctionalityType)
	dctFieldNames("NICKNAME") = obLanguage("Common","kStudent",strFunctionalityType)
	dctFieldNames("ASSIGNMENTNAME") = obLanguage("Assignment","kATAssignment")
	dctFieldNames("STARTDATE") = LCase(obLanguage("Assignment","kARMissedS"))

		If rsObj.EOF Then Exit Sub
		n = rsObj.Fields.Count-1%>
	<table class="ThinTable" cellspacing="0" border><tr align="center"><%
		For i = 0 To n - l
			Response.Write "<th> "&dctFieldNames(rsObj.Fields()(i).Name) &"</th>"
		Next%><th>&nbsp;</th></tr><%
	While Not rsObj.EOF%><tr>
	<%
		For i = 0 To n - l
			Item = DB2HTML( rsObj.Fields()(i) )
			Response.Write "<td> "&Item&"</td>"
		Next%><td><input type="checkbox" name="UserTest"value="<%=rsObj.Fields()(n-1)&","&rsObj.Fields()(n)%>"></td>
		</tr><%
		rsObj.MoveNext
	WEnd%>
</table>
<%
End Sub

Sub DrawTable( rsObj )
	Dim Item, arrRs, i, j, k, n
	If rsObj.EOF Then Exit Sub
	k = 1
	n = rsObj.Fields.Count-1
	arrRs = Array("","","")%><ul><li><input type="checkbox" onClick="checkNodes(this);"><%=obLanguage("Common","kAll")%><div><%
	While Not rsObj.EOF
		For i = 0 To k
			If arrRs(i) <> rsObj.Fields()(i) Then
				If arrRs(i) <>"" Then%></ul><%
					For j = i+1 To k
						arrRs(j)=""%></div></li></ol><%
					Next%></div></li><li><%
				Else%><ol><li><%
				End If
				arrRs(i) = rsObj.Fields()(i)%><input type="checkbox" onClick="checkNodes(this);">
				<%=ShowIMGAnchor( "JavaScript:ClickTree('"&arrRs(i)&"');", kCollapseExpand, "plminus.gif", "[+/-]", "border=""0"" name=""i"&arrRs(i)&"""")%>&nbsp;<%=arrRs(i)%>
				<div id="<%=arrRs(i)%>"><%
				If i=k Then%><ul><%End If
			Else%><%
			End If
		Next%><li><input type="checkbox" name="UserTest"value="<%=rsObj.Fields()(n-1)&","&rsObj.Fields()(n)%>"><%
		For i = k+1 To n - l
			Item = DB2HTML( rsObj.Fields()(i) )
			Response.Write "&nbsp;&nbsp;&nbsp;"&Item
		Next%></li>
		<%
		rsObj.MoveNext
	WEnd%>
	</ul><%
	For j =0 To k
		arrRs(j)=""%></div></li></ol><%
	Next%></div></li></ul><%
End Sub

Sub DrawAssignmentsTable( strBkColor )
	If Not bIsDebug Then On Error Resume Next
	If nViewType = kTable Then DrawTable1(rsAssignments) Else DrawTable(rsAssignments)
End Sub
%>
