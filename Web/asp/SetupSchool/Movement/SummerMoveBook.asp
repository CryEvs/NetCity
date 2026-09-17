<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/FilterYears.asp -->
<!-- #INCLUDE VIRTUAL=/asp/scripts/filterClasses.asp -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim nDocType
Dim objDocs, bEmpty, bEditRight
Dim objActivePeriods
Dim strFutureYearName
Dim nYearID, strDocTypeName
Dim nDocSubType, bFutureMode
Dim bAddSchool, bNoStudents

Function GetPageMenuItem()
	GetPageMenuItem = miSetupSchoolCalendar
End Function

Function GetPageTabItem()
	GetPageTabItem = tbYear
End Function

Function GetPageTitle()
	GetPageTitle = Application("kTitle_SummerMoveBook")(strFunctionalityType) & " - " & GreenText(strDocTypeName)
End Function

Function hasUserRightsOnPage()
	If HasUserRight(arMoveBookEdit) Then
		hasUserRightsOnPage = True
		bEditRight = True
		Exit Function
	End If
	bEditRight = False
	hasUserRightsOnPage = HasUserRight(arMoveBookView)
End Function

Sub ReadState()
	Dim objYearInfo, objStudentList
	bFutureMode = True
	nYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
	If nYearID = 0 Then GenerateError kUnexpErr
	Set objYearInfo = objNSNET.GetYearInfo(nYearID)
	If objYearInfo.EOF Then GenerateError kUnexpErr
	If Not bEditRight Then readonly = True
	strFutureYearName = GetSafeStr(objYearInfo("SCHOOLYEARNAME"), -1, Null)
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)

	nDocType = GetSafeLng(Request("DOCTYPEFILTER"), GetSafeLng(Request("DOCTYPE"), -1))
	If nDocType = kDocType_ENROLL Then
		nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), IIf(bAddSchool, 6,1))
	Else
		nDocSubType = -1
	End If
	strDocTypeName = GetCurrDocTypeName()
	bNoStudents = False
	If nDocType = kDocType_OUT Then
		Set objStudentList = objNSNET.GetFutureYearNonClassStudents(strCurrYearID, 1)
		If objStudentList.EOF Then
			InitMoveDocClasses nYearID, nDocType, nDocSubType, bAddSchool
			If strClassID="0" Then bNoStudents = True
		End If
	End If
End Sub

Sub Main()
	Set objDocs = objNSNET.GetMoveBookDocs( nYearID, nDocType, CLng(nDocSubType), -1)
	bEmpty = objDocs.EOF
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stMoveDocType, nDocType)
End Sub

Sub onHead()
%>
<SCRIPT><!--
	var wndPrint=null;
	function closePrint() {
		if (wndPrint && !wndPrint.closed) {
			wndPrint.forceClosing = true;
			wndPrint.close();
		}
	}
	function openPrint() {
		closePrint();
		wndPrint=window.open('PrintMoveBook.asp?AT=<%=strToken%>&Ver=<%=GetVer()%>&FutureYearID=<%=nYearID%>', '_prnt', 'status=no,toolbar=yes,menubar=yes,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=550');
		center(wndPrint, 750,550);
	}
	function openExcel() {
		closePrint();
		if (confirm("<%=kExportIntoExcel%>")) {
			var form = document.forms['ExcelForm'];
			form.action='ExportMoveBook.asp?FutureYearID=<%=nYearID%>';
			form.submit();
		}
	}
function editDoc(nDocID)
{
	if( nDocID==0)
	{<%If bNoStudents Then%>alert("<%=kNoStudentsForOut%>"); return;<%End IF%>
	}
	var form=document.forms['View'];
	form.DOCID.value = nDocID;
	ok( 'View', 'SummerMoveBookEdit.asp' );
}
function ChangeDocSubType(){
		setDBBusy();
		DoSubmit(document.View,"SummerMoveBook.asp");
}
//--></SCRIPT>
<%
End Sub

Sub DrawFilters( strForm )%>
	<tr><th nowrap align="left"><%=kSchoolYear%>:</th><td><%=strFutureYearName%></td></tr>
	<tr><th nowrap align="left"><%=kDocType%>:</th><td><%=strDocTypeName%></td></tr><%
	If nDocType = kDocType_ENROLL Then
		If CLng(strFunctionalityType)=kFuncType_Add Then
			nHiddenDocSubType = kmdstAllClassesEnroll ' —юда вынесено то, что делалось в DrawSelectDocSubType, т.к. эта ф-€ сейчас дл€ AddSchool не вызываетс€, чтобы вообще не рисовать строку, а DocSubType - надо чтобы сохран€лс€ правильно.
		Else%>
			<tr><th nowrap align="left"><%=kDocSubType%>:</th><%Call DrawSelectDocSubType("ChangeDocSubType()", true)%></tr><%
		End If
	End If
End Sub

Sub DrawButtons()
	If Not readonly Then ButtonAdd "editDoc(0);", kAddNewDoc
	ButtonCancel "goBack( document.View, '/asp/SetupSchool/Calendar/Years.asp')", kBack
	If Not bEmpty Then
		Response.Write "<br><br>"
		Response.Write ShowButton("printEx1", "printEx1", "JavaScript:openPrint()", kBtnViewPrintable, kBtnPrint) & "&nbsp;"
		Response.Write ShowButton("printEx2", "printEx2", "JavaScript:openExcel()", kBtnViewExcel, kBtnExcel)
	End If
End Sub

Sub onDrawPage()%>
	<FORM NAME="View" ACTION="SummerMoveBook.asp" METHOD="POST">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("DOCID", ""))%>
	<%=WriteHiddenTags(Array("FutureMode", "1", "DOCTYPE", nDocType, "FUTUREYEARID", nYearID))%><%
	Call DrawButtonsFilters(True, "View")
	If Not IsEmpty(nHiddenDocSubType) Then%>
		<%=WriteHiddenTags( Array("DOCSUBTYPE", nHiddenDocSubType) )%><%
	End If
	If bEmpty Then%>
		<H3 ALIGN="LEFT"><%
		Select Case nDocType
		Case kDocType_YEAR, kDocType_STAY, kDocType_GRADUATE
			Response.Write kDocsEmptyYSG
		Case Else
			Response.Write Application("kDocsEmpty")(strFunctionalityType)
		End Select%></H3><%
	Else
		Call DrawMoveBookTable(objDocs, True)
	End If%>
	</FORM><%
	If Not bEmpty Then Call DrawExcelForm()
End Sub

Function GetCurrDocTypeName()
	Dim strName

	strName = ""
	Select Case nDocType
	  Case kDocType_OUT: strName = Application("kDocName_OUT")(strFunctionalityType)
	  Case kDocType_ENROLL: strName = Application("kDocName_ENROLL")(strFunctionalityType)
	End Select
	GetCurrDocTypeName = strName
End Function
%>
