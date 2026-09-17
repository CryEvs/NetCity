<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kParamID_Social = "1026"

Dim strEditUserID, strRole, strBackPage
Dim strParamID, strParamTitle, strSYDepend
Dim objRs, bEmpty
Dim bExcludeMode

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kChoiceParam") & ": " & GreenText( DB2HTML(strParamTitle) ) & "<br>" &_
					strRole & ": "& GreenText( DB2HTML(objNSNET.GetUserNickName(strEditUserID)) )
End Function

Sub ReadState()
	strParamID = GetSafeID(Request("MChoiceParamID"), NULL)
	strParamTitle = GetSafeStr(Request("MChoiceParamTitle"), 200, NULL)
	strSYDepend = GetSafeStr(Request("MChoiceSYDepend"), 1, NULL)
	strBackPage = GetSafeStr(Request("BackPage"), 255, Request.ServerVariables("HTTP_REFERER"))
End Sub

Function LocationPath()
	LocationPath = GetSystemLocationPath() & "/" & obLanguage("SetupSchool","kChoiceParam")
End Function

Function hasUserRightsOnPage()
	strEditUserID = GetSafeID(Request("UID"), NULL) ' RightsOnPage depend on strEditUserID
	If objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlStudent) Then
		hasUserRightsOnPage = hasRightsToEditStudentOrParent()
		strRole = obLanguage("Common","Ученик",strFunctionalityType)
	ElseIf (objNSNET.DoesUserHaveRole(strEditUserID, strSchoolID, rlParent) And InStr(UCase(Request.ServerVariables("HTTP_REFERER" )),"PARENT" ) > 0 ) Then
		hasUserRightsOnPage = hasRightsToEditStudentOrParent()
		strRole = obLanguage("Common","kParent")
	Else 'Staff
		hasUserRightsOnPage = HasUserRight(arUsersEditStaff)
		strRole = obLanguage("Common","kStaff")
	End If
End	Function

Function hasRightsToEditStudentOrParent()
	Dim strClassID
	If HasUserRight(arUsersEditStudents) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arUsersEditStudentsPsyInfo) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arUsersEditStudentsMedInfo) Then hasRightsToEditStudentOrParent = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then
		strClassID = GetSafeID( obTokenMgr.GetData(strToken,stStudClassID), "0" )
		If strClassID <> "0" Then
			If objNSNET.IsClassChief(strClassID, strUserID) Then hasRightsToEditStudentOrParent = True: Exit Function
		End If
	End If
	hasRightsToEditStudentOrParent = False
End Function

Sub Main()
	Set objRs = objNSNET.GetMChoiceParam(strEditUserID, strParamID, strSchoolID, strCurrYearID)
	bEmpty = objRs.EOF

	bExcludeMode = False
	If strParamID = kParamID_Social Then
		bExcludeMode = True
	End If
End Sub

Sub	onHead()
%>
<SCRIPT><!--
function doSave(){
	if(!dataWereChanged) return;
	if( isDBBusy() ) return;

	<%If bExcludeMode Then%>
		var form=document.forms['MChoiceParam'];
		var chkBox=form.elements['MCHOICEITEMS'];
		var elExclude=form.elements['Exclude'];
		var elItemName=form.elements['ItemName'];
		var el_1 = '';
		var el_2 = '';
		if (chkBox) {
			if (chkBox.length && chkBox.length == elExclude.length && chkBox.length == elItemName.length) {
				for (var j=0;j<chkBox.length;j++) {

					if (chkBox[j].checked && elExclude[j].value == '1') {
						if (el_1 == '') {
							el_1 = elItemName[j].value;
						}
						else {
							el_2 = elItemName[j].value;
							break;
						}
					}
				}
			}
		}
		if (el_1 != '' && el_2 != '') {
			alert(language.Generic.SetupSchool.kDoNotSelectExcludeValues + ': \"' + el_1 + '\", \"' + el_2 + '\"');
			return;
		}
	<%End If%>

	ok_check_db('MChoiceParam', '');
}
//--></SCRIPT>
<%
End	Sub

Sub onDrawPage()
Dim strExcludeIndex, strItemName%>
<FORM NAME="MChoiceParam" METHOD="POST" ACTION="MChoiceParamSave.asp">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags(Array("UID", strEditUserID, "BackPage", strBackPage, "MChoiceParamID", strParamID, "MChoiceSYDepend", strSYDepend))%>
	<table border=0 cellspacing=0 cellpadding=3>
	<tr><td valign="top"><%
		If Not bEmpty Then ButtonSave "doSave();", obLanguage("Common","kSave") End If
		ButtonCancel "OnChangeSelect('MChoiceParam', '" & strBackPage & "');", obLanguage("Common","kBack")%>
	</td><%
	If bEmpty Then%><th><%=obLanguage("SetupSchool","kEmptyList")%></th><%
	Else%>
		<td valign="top"><%
			If strParamID = kParamID_Social Then
				While Not objRs.EOF
					strItemName = GetSafeStr(objRs("ITEMNAME"), -1, "")
					If strItemName = obLanguage("SetupSchool","kParamName_Orphan") Then
						strExcludeIndex = "1"
					ElseIf strItemName = obLanguage("SetupSchool","kParamName_WithoutCare") Then
						strExcludeIndex = "1"
					Else
						strExcludeIndex = "0"
					End If
					If strExcludeIndex = "0" Then
						strItemName = ""
					End If%>
					<INPUT TYPE="hidden" NAME="Exclude" VALUE="<%=strExcludeIndex%>">
					<INPUT TYPE="hidden" NAME="ItemName" VALUE="<%=DB2Value(strItemName)%>"><%
					objRs.MoveNext
				WEnd
				objRs.MoveFirst
			End If

			While Not objRs.EOF%>
				<INPUT TYPE="checkbox" NAME="MCHOICEITEMS" VALUE="<%=objRs("ITEMID")%>" <%If Not IsNull(objRs("CHOICE_ITEMID")) Then%>CHECKED<%End If%> OnClick="dataChanged();"><%=DB2HTML_BR(objRs("ITEMNAME"))%><BR><%
				objRs.MoveNext
			WEnd%>
		</td><%
	End If%>
	</tr></table>
</FORM><%
End Sub
%>
