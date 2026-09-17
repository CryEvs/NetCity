<!-- #INCLUDE FILE=../header1.asp -->

<% ' © 2007-2015 IRTech. All rights reserved.

Const kFormName = "LaListForm"

Dim bNoLA, bLAToDel
Dim strCommonAlert
Dim objLAList

Function GetPageTitle()
	GetPageTitle = obLanguage("LearnApp","kTitleLAList")
End Function

Function GetPageMenuItem()
	 GetPageMenuItem = IIf( bIsStaff, MenuItem_miLearningApplications, MenuItem_miStudentDiary )
End Function

Function GetPageTabItem()
	GetPageTabItem = IIf( bIsStaff, TabItem_tbQA, TabItem_tbLearningModules )
End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight( arAddLA )
End Function

Sub ReadState()
	strCommonAlert = obTokenMgr.GetData( strToken, stCommonAlert )
	Call obTokenMgr.SetData( strToken, stCommonAlert, "" )
End Sub

Function onLoad()
	If strCommonAlert <> "" Then onLoad = "load();"
End Function

Sub onHead()
%><script><!--
<%
If strCommonAlert <> "" Then%>
function load() {
	alert('<%=strCommonAlert%>');
}
<%End If
%>function Back()
{ goBack(<%=kFormName%>,'/angular/school/activities') }
function laDel() {
	if( isDBBusy() ) return false;
	var elems = document.<%=kFormName%>.elements;
	var i = 0, infArray = '';
	for (i = 0; i < elems.length; i++) {
		if (elems[i].type == 'checkbox') {
			if (elems[i].checked)
			{ infArray += elems[i].value + '|' }
		}
	}
	if (infArray == '')	{ alert(language.Generic.LearnApp.kLAsNotSelectedToDelete) }
	else
	  $.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function() {
		elems.DELSTR.value = infArray;
		setDBBusy();
		ok('<%=kFormName%>','laDoDel.asp')
	  });
}
function laEdit( laid ) {
	if ( !laid ) { laid='' }
	document.<%=kFormName%>.elements.LAID.value = laid;
	ok('<%=kFormName%>','LAEdit.asp');
}
//--></script>
<%
End Sub

Sub DrawLAListTable()
	Dim i

	If bNoLA Then
		DrawInfo obLanguage("LearnApp","kNoLAs"), False
	Else %>
		<table class="table table-bordered table-condensed">
			<tr>
				<th><%=obLanguage("Common","kName")%></th>
				<th><%=obLanguage("LearnApp","kShortDescription")%></th>
				<th><%=obLanguage("Common","kDeletingMark")%></th>
			</tr><%
			i = 0
			While Not objLAList.EOF%>
				<tr>
					<td>
						<a href="Javascript:laEdit('<%=objLAList("PRODUCTID")%>')" title="<%=obLanguage("LearnApp","kLAEditName")%>">
							<%=DB2HTML(objLAList("PRODUCTNAME"))%>
						</a>
					</td>
					<td><%=DB2HTML(objLAList("DESCRIPTION"))%></td>
					<td class="text-center"><%
						If Clng(objLAList("CNT")) = 0 Then%>
							<input type="checkbox" name="CHB<%=i%>" value="<%=objLAList("PRODUCTID")%>"><%
						Else%>
							<%=obLanguage("LearnApp","kTextsExist")%><%
						End If%>
					</td>
				</tr><%
				objLAList.MoveNext
				i = i + 1
			Wend%>
		</table>
		<%
	End If
End Sub

Sub Main()
	Set objLAList = objLA.GetExtendedProductsList
	bLAToDel = False
	If objLAList.EOF Then
		bNoLA = True
	Else
		bNoLA = False
		While Not ( objLAList.EOF Or bLAToDel )
			If (Clng(objLAList("CNT"))=0 Or Clng(objNSNET.CheckLACourseResults(objLAList("productid")))=0) Then bLAToDel = True
			objLAList.MoveNext
		Wend
		objLAList.MoveFirst
	End If
End Sub

Sub DrawButtons()
	Call ButtonAdd("laEdit()", obLanguage("LearnApp","kBtnAddLA"))
	If bLAToDel Then
		Call ButtonDel("laDel()", obLanguage("Buttons","kRemove"))
	End If
End Sub

Sub onDrawPage()
	Call DrawButtonPanel()%>
	<form name="<%=kFormName%>" method="post" target="_parent">
		<div class="row">
			<div class="col-md-5">
				<%Call DrawLAListTable()%>
			</div>
		</div>
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="DELSTR">
		<input type="hidden" name="NAME">
		<input type="hidden" name="DESCR">
		<input type="hidden" name="LAID">
	</form><%
End Sub
%>
