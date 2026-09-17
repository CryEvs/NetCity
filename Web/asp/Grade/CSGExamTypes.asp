<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strSubjClassID
Dim objCSGExamTypes, bEmptyExamTypes
Dim strBackPage

Function GetPageTitle()
	GetPageTitle = obLanguage("Grade","kExamTypes")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miJournal
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbTotals
	bTabInternalPage = True
End Function

Sub	ReadState()
	If CBool(objNSNET.IsYearClosed(strCurrYearID)) Or Not ( HasUserRight(arTotalsEditAll) Or HasUserRight(arTotalsEditSelf) ) Then GenerateError obLanguage("Common","kErrPageAccess")
	strSubjClassID = GetSafeID(Request.Item("SGID"), GetSafeID(obTokenMgr.GetData(strToken, stCurrSubjClass), "-1"))
	strBackPage = GetSafeStr(Request("Back"), 255, "/angular/school/journal/totals")
End Sub

Sub Main()
	Set objCSGExamTypes = objNSNET.GetCSGExamTypes_2(strSubjClassID )
	bEmptyExamTypes = objCSGExamTypes.EOF
End Sub

Sub onHead()
	Dim i

%><SCRIPT><!--
function Back()
{
	goBack(document.main, '<%=strBackPage%>');
}

function DoSave()
{
	if( isDBBusy() ) return false;
	var form = document.forms['main'];
	var elTypeID = form.elements['TypeID'];

	if ( elTypeID.length ){
		for ( var i = 0; i < elTypeID.length; i++ ) {
			var sTypeID = elTypeID[i].value;
			if ( form.elements['Choice_' + sTypeID].checked )
				if ( form.elements['Use_' + sTypeID] && !form.elements['Use_' + sTypeID].checked ){
					alert(language.Generic.Grade.kChoiceWithoutUsed);
					return;			
				}
		}
	}
	else{
		var sTypeID = elTypeID.value;
		if ( form.elements['Choice_' + sTypeID].checked )
			if ( form.elements['Use_' + sTypeID] && !form.elements['Use_' + sTypeID].checked ){
				alert(language.Generic.Grade.kChoiceWithoutUsed);
				return;			
			}
	}
	setDBBusy();
	ok('main','');
}

//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	If Not bEmptyExamTypes Then
		ButtonSave "DoSave();", obLanguage("Common","kSave")
		ButtonReset "resetScreen('main');", obLanguage("Common","kReset")
	End If
End Sub

Sub DrawFilters(strForm)
	DrawTitleRow obLanguage("Common","kSubject"), objNSNET.GetSubjectClassName(strSubjClassID )
End Sub

Sub	onDrawPage()
	%><form NAME="main" ACTION="SaveCSGExamTypes.asp" METHOD="post">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("TYPE", kExamType, "BACK", strBackPage))%>
	<%Call DrawButtonsFilters(True, "main")
		
	If bEmptyExamTypes Then
		DrawInfo obLanguage("Grade","kEmptyExamTypes"), False
	Else
		%><div class="row">
			<div class="col-md-6"><%Call DrawExamTypesTable()%></div>
		</div><%
	End If

	%></form><%
End Sub

Sub DrawExamTypesTable()
	Dim	strTypeID, bChoice
	%><table class="table table-bordered">
		<tr>
			<th><%=obLanguage("Grade","kExamTypes")%></th>
			<th><%=obLanguage("Grade","kUse")%></th>
			<th><%=obLanguage("Grade","kChoice")%></th>
		</tr><%
		While Not objCSGExamTypes.EOF
			strTypeID = GetSafeID(objCSGExamTypes("PERIODTYPEID"), Null)%>
			<tr>
				<td><%=DB2HTML(objCSGExamTypes("TITLE"))%><INPUT TYPE="hidden" NAME="TypeID" VALUE="<%=strTypeID%>"></td>
				<td align="center"><%
				If IsDull(objCSGExamTypes("YT_CSGID")) Then%>
					<INPUT TYPE="checkbox" NAME="Use_<%=strTypeID%>" value="1" OnClick="dataChanged()"<%=IIF(Not IsDull(objCSGExamTypes("TYPEID")), " checked", "")%>><%
				Else%>
					<%=obLanguage("Grade","kIsUsed")%><INPUT TYPE="hidden" NAME="IsUsed_<%=strTypeID%>" VALUE="1"><%
				End If%>
				</td><%
				If IsDull(objCSGExamTypes("CHOICE")) Then
					bChoice = False
				Else
					bChoice = GetSafeStr(objCSGExamTypes("CHOICE"), 1, Null) = "Y"
				End If%>
				<td align="center"><INPUT TYPE="checkbox" NAME="Choice_<%=strTypeID%>" value="1" OnClick="dataChanged()"<%=IIF(bChoice, " checked", "")%>></td>
			</tr><%
			objCSGExamTypes.MoveNext
		WEnd
	%></table><%
End Sub
%>
