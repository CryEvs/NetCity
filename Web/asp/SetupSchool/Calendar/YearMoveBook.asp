<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/SetupSchool/Calendar/YearMoveBook_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.

Dim nDocType, nDocSubType, nGrade
Dim objDocs
Dim nLastGrade, bYearUpAllStudents, bThisDocTypeAllStudentsYearUp
Dim bAddSchool, nYearID

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arCreateCloseEditYear) Or HasUserRight(arMoveBookEdit)
End Function
Function GetPageTitle()
	GetPageTitle = obLanguage("Movement","kTitle_SummerMoveBook",strFunctionalityType) & " - " & GreenText(obLanguage("Movement","kFutureYearMove"))
End Function

Sub ReadState()
	nDocType = GetSafeLng(Request("DOCTYPEFILTER"), GetSafeLng(Request("DOCTYPE"), -2))
	If nDocType <> kDocType_YEAR Then
		nDocSubType=-1
	Else
		nDocSubType = GetSafeLng(Request("DOCSUBTYPEFILTER"), GetSafeLng(Request("DOCSUBTYPE"), -1))
	End If
	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)
	nYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
End Sub

Sub Main()
	Set objDocs = objNSNET.GetMoveBookDocs(strCurrYearID, nDocType, CLng(nDocSubType), -1)
	bYearUpAllStudents = IsNotExistsNotEnrolledClasses( nDocType, nDocSubType )
	Select Case nDocType
	Case -2 ,kDocType_YEAR :
		Select Case nDocSubType
		Case -1, kYearDocSubType_NotEnrolled :
			bThisDocTypeAllStudentsYearUp = bYearUpAllStudents And Not IsExistsNotEnrolledNotYearMoved()
		Case Else
			bThisDocTypeAllStudentsYearUp = bYearUpAllStudents
		End Select
	Case Else
		bThisDocTypeAllStudentsYearUp = bYearUpAllStudents
	End Select
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stMoveDocType, nDocType)
End Sub

Sub onHead()
%>
<SCRIPT><!--
function addDoc()
{
<%If bThisDocTypeAllStudentsYearUp Then%>
	alert(language.Generic.Movement.kErrMsgAllMoveDocsThisTypeCreated);
	return false;
<%Else%>
	var form = document.View;
	if (form.DOCTYPE.value <= 0)
	{
		alert(language.Generic.Movement.kErrMsgYouNeedSelectDocType);
		return false;
	}

	var bAllStudentsEnrolled = <%=IIF(bThisDocTypeAllStudentsYearUp, "true", "false")%>;
	if( bAllStudentsEnrolled )
	{
		alert(language.Generic.Movement.kErrMsgAllMoveDocsThisTypeCreated);
		return false;
	}

	if( form.DOCSUBTYPE && form.DOCSUBTYPE.value < 0)
	{
		alert(language.Generic.Movement.kErrMsgYouNeedSelectDocSubType);
		return false;
	}

	document.View.DOCID.value = 0;
	ok( 'View', 'YearMoveBookEdit.asp');
<%End If%>
}
function editDoc(nDocID)
{
	document.View.DOCID.value = nDocID;
	ok( 'View', 'YearMoveBookEdit.asp');
}

function Back(){
	goBack(document.View, 'Years.asp');
}
//--></SCRIPT>
<%
End Sub

Sub DrawFilters( strForm )
	Call DrawSelectDocType(strForm, Not bFutureMode, "ok('View','');")
	If CLng(strFunctionalityType)<>kFuncType_Add And CLng(strFunctionalityType)<>kFuncType_PreSchool Then
		If nDocType = kDocType_YEAR Then
			Call DrawSelectDocSubTypeYEAR(strForm, True, "ok('View','');")
		ElseIf nDocType = kDocType_GRADUATE Then
			Call DrawSelectDocSubTypeGRADUATE(strForm, True, "ok('View','');")
		End If
	End If
End Sub

Sub DrawButtons()
	ButtonAdd "addDoc();", obLanguage("Movement","kAddNewDoc")
End Sub

Sub onDrawPage()%>
	<FORM NAME="View" ACTION="YearMoveBook.asp" METHOD="POST">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("DOCID", ""))%><%
	Call DrawButtonsFilters(True, "View")
	If Not IsEmpty(nHiddenDocSubType) Then%>
		<%=WriteHiddenTags( Array("DOCSUBTYPE", nHiddenDocSubType) )%><%
	End If
	If objDocs.EOF Then%>
		<H3 ALIGN="LEFT"><%=obLanguage("Movement","kDocsEmpty",strFunctionalityType)%></H3><%
	Else
		Call DrawMoveBookTable(objDocs, True)
	End If%>
	</FORM><%
End Sub
%>
