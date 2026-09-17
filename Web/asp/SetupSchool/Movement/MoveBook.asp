<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterYears.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterClasses.asp" -->
<!-- #INCLUDE FILE="MoveBook_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommon.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/PrintCommonJs.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kHelpPage = "/Help/CloseYear.htm"

Dim nDocType, nDocSubType
Dim objDocs, bEmpty, bEditRight
Dim nGrade
Dim bNoActivePeriods
Dim bAddSchool

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miManagementMovements
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbMoveBook
End Function

Function GetPageTitle()
	GetPageTitle = obLanguage("Movement","kTitle_MoveBook",strFunctionalityType)
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

Function IsNotEditableYearMoveDocs
	Dim objActivePeriods
	Dim nFutureYearID

	If Not GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False) Then IsNotEditableYearMoveDocs = True: Exit Function

	If bFutureMode Then
		IsNotEditableYearMoveDocs = True
	Else
		nFutureYearID = objNSNET.GetSchoolFutureYear(strSchoolID)
		Set objActivePeriods = objNSNET.GetSYMovePeriodsInfo(nFutureYearID)

		If objActivePeriods.EOF Then
			IsNotEditableYearMoveDocs = True
		Else
			IsNotEditableYearMoveDocs = Clng(objActivePeriods("STATUS")) <> 1
		End If
	End If
	bNoActivePeriods = IsNotEditableYearMoveDocs
End Function

Function IsMoveDocTypeWithSubType
	IsMoveDocTypeWithSubType = False
	IsMoveDocTypeWithSubType = (nDocType=kDocType_OUT or nDocType=kDocType_Year or nDocType=kDocType_ENROLL)
	If IsMoveDocTypeWithSubType Then
		Exit Function
	End If

	If CLng(strFunctionalityType) = kFuncType_Common Then
		IsMoveDocTypeWithSubType = (nDocType=kDocType_GRADUATE or nDocType=kDocType_MOVE)
	End If
End Function

Function IsNoActiveMovePeriods
	Dim	 objActivePeriods

	Set objActivePeriods = objNSNET.GetActiveMovePeriods(strCurrYearID)
	IsNoActiveMovePeriods = objActivePeriods.EOF
End Function

Sub ReadState()
	If Not bFutureMode Then InitYears
	nDocType = GetSafeLng(Request("DOCTYPEFILTER"), GetSafeLng(Request("DOCTYPE"), -1))
	nDocSubType = GetSafeLng(Request("DOCSUBTYPE"), -1)
	strAfterOpenMessage = GetSafeStr(Request("OUTERMESSAGE"), -1, "")
	nDocSubType = CheckDocSubType(nDocType, nDocSubType, True)
	nDocSubType = CLng(nDocSubType)

	InitMoveYearPeriods
	InitMoveBookMode

	nGrade = GetSafeLng(Request("NON_CLASS_GRADE"), GetSafeLng(obTokenMgr.GetData( strToken, stCurrGrade),1))

	If Not bEditRight Then readonly = True
	If Not PERSON_DATA Then readonly = True

	bNoActivePeriods = False
	If Not readonly Then
		If IsYearMoveDoc(nDocType) Then
			readonly = Not (IsWorkYear() And GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False))
		Else
			bNoActivePeriods = IsNoActiveMovePeriods()
			readonly = bNoActivePeriods
		End If
	End If

	bAddSchool = (CLng(strFunctionalityType) = kFuncType_Add)

	Call obTokenMgr.SetData(strToken, stMoveDocState, Null)
	Call InitMovDocClasses(strCurrYearID, nDocType, Nothing)

	' здесь надо сбросить накопительный Dictionary.
	Call obTokenMgr.SetData(strToken, stMoveDocState, Null)
End Sub
	
Sub Main()
	If Not IsMoveDocTypeWithSubType Then
		Set objDocs = objNSNET.GetMoveBookDocs( strCurrYearID, nDocType, Nothing, strMDClassName)
	Else
		Set objDocs = objNSNET.GetMoveBookDocs( strCurrYearID, nDocType, nDocSubType, IIF(nDocSubType = kmdstNoClassEnroll,-nGrade,strMDClassName))
	End if
	bEmpty = objDocs.EOF
		
End Sub

Sub WriteState()
	Call obTokenMgr.SetData(strToken, stMoveDocType, nDocType)
	Call obTokenMgr.SetData(strToken, stMoveDocSubType, nDocSubType)
	Call obTokenMgr.SetData(strToken, stCurrGrade, nGrade)
	WriteClass
End Sub

Sub onHead()%>
	<script src="<%=GetVersionedResLink("/vendor/pages/common/js/queue.js")%>" type="text/javascript"></script>
	<script><!--
		function editDoc(nDocID, nDocType) {
			var form = document.forms['View'];

			form.DOCID.value = nDocID;

			if(nDocType == 0) {
				nDocType = form.DOCTYPE.value
			}

			if(nDocID == 0 && nDocType <= 0) {
				alert(language.Generic.Movement.kErrMsgYouNeedSelectDocType);
				return;
			}

			if( nDocType == 4 || nDocType == 5 || nDocType == 6){
				ok('View', 'YearMoveBookEdit.asp');
			}
			else if( nDocType == 3){
				ok('View', 'ClassesMoveBookEdit.asp');
			}
			else {
				ok('View', 'MoveBookEdit.asp');
			}
		}

		function ShowHelp_MB() {
			if(wndHelp && !wndHelp.closed) { 
				wndHelp.forceClosing = true; 
				wndHelp.close(); 
			}
			
			var winOptions = { url: "<%=kHelpPage%>", name: "_help", specs: "status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,directories=no,width=750,height=560", winChild: wndHelp };
			windowOpen( winOptions );
			wndHelp = winOptions.winChild;
			center(wndHelp, 750,560);
		}
		$(document).ready(function() {
			<%
			If Not IsDull(strAfterOpenMessage) Then %>
				alert("<%=DB2Java(strAfterOpenMessage)%>");<% 
				strAfterOpenMessage = ""
			End If
			%>
		});


	//--></script><%
End Sub

Sub DrawFilters(strForm)
	If Not bFutureMode Then
		Call DrawYears(strForm)
	End If

	Call DrawSelectDocType(strForm, True, Not bFutureMode, "ok('View','');", True)
	If Not IsMoveDocTypeWithSubType Then
		Call DrawMovDocClasses(strForm, strCurrYearID, True, obLanguage("Filter","kNoYearClasses",strFunctionalityType))
		Exit Sub
	End If

	Call DrawSelectDocSubType(nDocType, true, "ok('View','');")

	if nDocSubType = kmdstNoClassEnroll Then
		Call DrawExGrade("NON_CLASS_GRADE", nGrade,"ok('View','');",true, obLanguage("Movement","kExGrade"))
	Else
		Call DrawMovDocClasses(strForm, strCurrYearID, True, obLanguage("Filter","kNoYearClasses",strFunctionalityType))
	End if
End Sub

Sub DrawButtons()
	If Not readonly Then ButtonAdd "editDoc(0,0);", obLanguage("Movement","kAddNewDoc")
End Sub

Sub DrawLinkButtons
	If Not bEmpty Then Call DrawPrintButtons()
	If obContext.ServerSettings.UserAccountsSettings.QueueImportMode Then
		Button "taskQueue.showQueuedTasks();", "Очередь выполнения процессов импорта учащихся", "Очередь выполнения процессов импорта учащихся", "glyphicon glyphicon-time"
	End If
End Sub

Sub onDrawPage()%>
	<form name="View" action="MoveBook.asp" method="POST" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("DOCID", ""))%><%

		If bNoActivePeriods Then
			%>
			<div class="row">
				<div class="col-md-10 col-lg-8"><%
					Call DrawMessage(obLanguage("Movement","kMovementForbidden"), "danger", False)%>
				</div>
			</div>
			<%
		End If
		Call DrawButtonsFilters(Not readonly Or Not bEmpty, "View")

		If Not IsEmpty(nHiddenDocSubType) Then%>
			<%=WriteHiddenTags(Array("DOCSUBTYPE", nHiddenDocSubType))%><%
		End If%>

		<div class="row">
			<div class="col-md-12"><%
				If IsYearMoveDoc(nDocType) Then
					If IsWorkYear() Then
						If Not GetSafeBool(obTokenMgr.GetData(strToken, stFutureYearExists), False) Then
							Dim strText
							
							strText = DB2HTML_BR(obLanguage("Movement","kHintYearMoveDocs").Format(Array( _
										obLanguage("MenuFolders","kPlanning"), _
										obLanguage("MenuFolders","kFNSchoolYearAndTerms"), _
										obLanguage("Buttons","kEditFutureYear"))))%>

							<div class="alert alert-info" role="alert">
								<%=strText%>
							</div><%
						End If
					End If
				End If

				If bEmpty Then
					Call DrawInfo(obLanguage("Movement","kDocsEmpty",strFunctionalityType), False)
					If Not readonly Then Call DrawInfo(obLanguage("Movement","kForAddDocClickBtn"), False)
				Else
					Call DrawMoveBookTable(objDocs, True)
				End If%>
			</div>
		</div>
	</form><%

	If Not bEmpty Then Call DrawExcelForm()
End Sub%>