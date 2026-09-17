<!-- #INCLUDE File="master_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngSetupSchoolCalendar.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngSetupSchoolUI.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Language/lngFilter.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Const kStep = 10

Dim objStudentList, blnFirstEntrance, strSaved
Dim lngStudentCnt
Dim pageCount, nCurrPage, nPageSize, lngSortOrder

Function GetWizardTitle()
	GetWizardTitle = Application("kWizardTitleStudents")(strFunctionalityType)
End Function
Sub ReadState()
	nPageSize = kDefaultUsersPageSize
	nCurrPage = GetSafeLng(Request("cp"), GetSafeLng( obTokenMgr.GetData( strToken, stCurrPage ),0) )
	lngSortOrder = GetSafeLng( Request("SORT"), GetSafeLng( obTokenMgr.GetData( strToken, stSortOrder ), 0) )
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stCurrPage, nCurrPage)
	Call obTokenMgr.SetData(strToken, stPageSize, nPageSize)
End Sub

Sub Main()
	strPrev = "ClassesW.asp"
	strNext = "Finish.asp"
	Set objStudentList = objNSNET.GetStudentList(strSchoolID, strCurrYearID, " ", " ", "", Null, lngSortOrder, "", False, False, nPageSize, nCurrPage, pageCount, 0)
	InitStep
	strSaved = obTokenMgr.GetData(strToken,stWasSaved)
	Call obTokenMgr.SetData(strToken,stWasSaved, null)

	lngStudentCnt = 0
	If Not objStudentList Is Nothing Then lngStudentCnt = objStudentList.RecordCount
End Sub

Function onLoad()
	If Not IsDull( strSaved ) Then onLoad = "JavaScript:WasSaved('" & strSaved & "');" Else onLoad = ""
End Function

Sub onSpecialHead()
%>
<SCRIPT><!--
function CanImportStudents() {
	var form = document.ImportForm;
	if( trimStr( form.elements["File"].value ) == '' )
	{
		alert( '<%=kMsgSelectFileName%>' );
		form.elements["File"].focus();
		return false;
	}
	if ( trimStr( form.elements["Separator"].value ) == '' )
	{
		alert( '<%=kMsgInpuDelimiter%> (<%=kMsgExample%>, \',\' <%=kMsgOr%> \';\')' );
		form.elements["Separator"].focus();
		return false;
	}
	if (!confirm('<%=Application("kBeginImport")(strFunctionalityType)%>')) return false;
	window.open('/asp/blank.htm', 'im_port', 'status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no');
	return true;
}
function importStudents() {
	var form = document.ImportForm;
	if(CanImportStudents()) DoSubmit( form, '' );
}
function gotoPage(nPage)
{
	var form = document.forms.MainForm;
	form.elements["cp"].value = nPage;
	DoSubmit( form, "<%=strScriptName%>" );
}
function changeSortOrder( nNewSortOrder )
{
	var form = document.forms.MainForm;
	form.elements["SORT"].value = ( nNewSortOrder == <%= lngSortOrder%> ) ? -nNewSortOrder : nNewSortOrder;
	DoSubmit( form, "<%=strScriptName%>" );
}
//--></SCRIPT>
<%
End Sub

Sub ImportForm()%>
	<tr><td><br><FORM NAME="ImportForm" METHOD="POST" ENCTYPE="multipart/form-data" ACTION="../importstudents.asp" OnSubmit="return CanImportStudents();" TARGET="im_port">
	<%=WriteObligatoryTags()%><a name="exportref">
	<DIV CLASS="body"> <%=kImportFIle%>: <INPUT TYPE="file" name="File" size="25">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	<%=kDelimiter%>: <INPUT TYPE="text" name="Separator" size="<%=TextInputSize(1)%>" value=";" maxlength="1"></DIV> <BR>
	<% =ShowButton("import","import", "JavaScript:importStudents()", kImport, kImport) %>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	<A HREF="../import.asp?RT=2" target="_helpImport"><%=kHowToUseImport%></A>
</FORM></td></tr><%
End Sub

Sub DrawFilters( strForm )%>
	<tr><td><%Call DrawTable%></td></tr><%
	Call ImportForm()
End Sub

Sub DrawSpecialButtons()
End Sub

Sub onDrawPage()
	Call DrawButtonsFilters( True, "MainForm" )
End Sub

Sub DrawTable()%>
<FORM Name="MainForm" METHOD="POST" ACTION="/asp/SetupSchool/delusers.asp">
<%=WriteObligatoryTags()%>
<%=WriteHiddenTags( Array("Back", strScriptName, "cp", "", "SORT", "0" ) )%><%
	If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)%>
	<BR><%Call DrawListTable()%><br><br><%
	If pageCount > 1 Then Call ShowPageList(pageCount,nCurrPage)%>
</FORM><%
End Sub

Sub DrawListTable()
	Dim QuickLetter, CurLetter, CurName, i
	Dim nStartNum
	If lngStudentCnt=0 Then Response.write "<h3>"&Application("kEmptyStudentsList")(strFunctionalityType)&".</h3>": Exit Sub%>
	<table class="ThinTable" border="1" cellpadding="3" cellspacing="0">
		<tr nowrap><th>¹</th><th><%=kGender%></th>
			<th><%= GetSortHeader( kDisplayName,0,lngSortOrder)%></th>
			<th><%= GetSortHeader( kBDate,2,lngSortOrder)%></th>
			<th><%= GetSortHeader( Application("kClass")(strFunctionalityType),4,lngSortOrder)%></th>
		</tr><%
	QuickLetter = ""
	nStartNum = nCurrPage * nPageSize
	i = 1
	While Not objStudentList.EOF
		CurName = DB2HTML(objStudentList("NICKNAME"))
		CurLetter = UCase(Left(objStudentList("LASTNAME"),1)) %>
		<tr align="center"><td align="right"><%=nStartNum + i%>&nbsp;</td><td><%=DB2HTML(objStudentList("GENDER"))%></td>
			<td width="30%" align="left"> <%If CurLetter<>QuickLetter Then Response.Write "<A NAME="""&CurLetter&"""></A>": QuickLetter=CurLetter
				Response.Write CurName%>
			</td>
			<td><%=Date2Str(objStudentList("BIRTHDATE"))%></td>
			<td><%=DB2HTML(objStudentList("CLASSNAME"))%></td>
		</tr><%
		i = i + 1
		objStudentList.MoveNext
	Wend%>
	</table>
<%
End Sub

Function GetSortHeader( strName, lngSortOrder, lngCurrSortOrder )
	If Not bIsDebug Then On Error Resume Next
	Dim strImage
	If lngSortOrder = lngCurrSortOrder Then
		lngSortOrder = lngSortOrder + 1
		strImage = "<IMG SRC=""/images/down.gif"" BORDER=""0"" ALIGN=""MIDDLE"">"
	ElseIf lngSortOrder + 1 = lngCurrSortOrder Then
		strImage = "<IMG SRC=""/images/up.gif"" BORDER=""0"" ALIGN=""MIDDLE"">"
	Else
		strImage = "&nbsp;"
	End If
	GetSortHeader ="<nobr>" & strImage & ShowAnchor( "changeSortOrder(" & lngSortOrder &");", kChangeSortOrder, strName, "" )& strImage & "</nobr>"
End Function
%>
