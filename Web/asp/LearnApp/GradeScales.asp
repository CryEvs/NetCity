<!-- #INCLUDE FILE="../header1.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strGSID, objRs

Function GetPageTitle()
	GetPageTitle = obLanguage("MenuFolders","kFNGradingScales")
End Function

Function GetPageMenuItem()
	GetPageMenuItem = MenuItem_miLearningApplications
End Function

Function GetPageTabItem()
	GetPageTabItem = TabItem_tbGrScales
 End Function

Function hasUserRightsOnPage()
	hasUserRightsOnPage = HasUserRight(arLACreateGradingScales)
End Function

Sub Main()
	Dim gradeComponent
	Set gradeComponent = obComponentMgr.Resolve("NetCity.Common.Components.Abstraction.IGradingComponent")
	strGSID = GetSafeID( Request("GSID"), "0" )
	Set objRs = gradeComponent.GetGradingSystemList(strCurrYearId )
	If objRs.EOF Then
		strGSID="0"
	Else
		If strGSID="0" Then strGSID=objRs("GRADINGSYSTEMID")
	End If
End Sub

Sub onHead()
	Dim strDefVal
%>
<SCRIPT><!--
<% If Not ReadOnly Then %>
var arrgsdefval = new Array(<%
	strDefVal = ""
	While Not objRs.EOF
		If GetSafeStr(objRs("DEFAULTVAL"),-1,"N")="N" Then
			strDefVal = strDefVal & "0,"
		Else
			strDefVal = strDefVal & "1,"
		End If
		objRs.MoveNext
	Wend
	objRs.MoveFirst
	Response.Write Left( strDefVal, Len( strDefVal ) - 1 )
%>);

function removeGS() {
	if( isDBBusy() ) return false;
	var form = document.forms["GS"];
	var elGSID = form.elements["GSID"];
	if( elGSID.selectedIndex == -1) {
		alert(language.Generic.LearnApp.kSelectGSToDelete); return;
	}
	if ( arrgsdefval[elGSID.selectedIndex] == 1 || (arrgsdefval[elGSID.selectedIndex] + '') == 'undefined' ) {
		alert(language.Generic.LearnApp.kCantDeleteDefaultGS); return;
	}
	$.show.confirmation(language.Generic.LearnApp.kSureToDeleteGS + ' \"' + elGSID[elGSID.selectedIndex].text + '\"?' ).then(function() {
		form.elements["ACT"].value="remove";
		setDBBusy();
		ok('GS','GradeSave.asp');
	});
}

function canSubmit() { return true; }

function newGS() {
	var form = document.forms["GS"];
	form.ACT.value = "create";
	ok('GS','Grades.asp');
}
<% End If %>
function editGS() {
	var form = document.forms["GS"];
	if (form.GSID.value=="")
	{alert(language.Generic.LearnApp.kSelectGS);
	 form.elements['GSID'].focus();
	 return false;
	}
	form.elements["ACT"].value = "edit";
	ok('GS','Grades.asp');
}
//--></SCRIPT>
<%
End Sub

Sub DrawButtons()
	If Not ReadOnly Then
		ButtonCreate "newGS()", obLanguage("LearnApp","kBtnCreateGS")
		If strGSID <> "0" Then
			ButtonChange "editGS()", obLanguage("LearnApp","kBtnEditGS")
			ButtonDel "removeGS()", obLanguage("LearnApp","kBtnDelGS")
		End If
	Else
		Response.Write ShowButton("view", "view", "JavaScript:editGS()", obLanguage("LearnApp","kBtnViewGS"), obLanguage("LearnApp","kBtnViewGS"))&"<br>"
	End If
End  Sub

Sub onDrawPage()%>
	<form name="GS" method="post" action="" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<input type="hidden" name="ACT" value=""><%
		Call DrawButtonPanel%>

		<%If strGSID = "0" Then
			DrawInfo obLanguage("LearnApp","kNoGradeScales"), False
		Else%>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<select name="GSID" size="10" style="width:100%;">
						<%PopulateSelect objRs, "GRADINGSYSTEMID", "NAME", strGSID%>
					</select>
				</div>
			</div>
		<%End If%>
	</form><%
End Sub
%>
