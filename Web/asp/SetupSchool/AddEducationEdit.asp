<!-- #INCLUDE FILE="../header1.asp" -->
<!-- #INCLUDE FILE="../scripts/dateinput.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strStudentID, objStudentCreatives, bEmptyStudentCreatives
Dim objSchoolInfo, strCityID
Dim objEOSWithCreatives, bEmptyEOSWithCr, strEOID
Dim objCreatives, bEmptyCreatives

Function GetPageTitle()
	GetPageTitle = obLanguage("SetupSchool","kTitleCreativsEdit",strFunctionalityType) & GreenText(objNSNET.GetUserNickName(strStudentID))
End	Function
Function GetPageTabItem()
	GetPageTabItem = TabItem_tbStudents
 	bTabInternalPage = True
End	Function

Function hasUserRightsOnPage()
	Dim strClassName, strClassID
	strStudentID = GetSafeID(Request("UID"), Null)
	strCurrYearID = GetSafeLng(Request("CURRYEAR"),obTokenMgr.GetData(strToken,stCurrYear))
	If HasUserRight(arUsersEditStudents) Then hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arEditInfoSelf) Then
		strClassName = objNSNET.GetClassNameForStudent(strStudentID, strCurrYearID)
		If Not isDull(strClassName) Then
			strClassID = objNSNET.GetClassID(Empty, strCurrYearID, strClassName)
			If obNS2.IsClassChief(objCon, strClassID, strUserID) Then hasUserRightsOnPage = True: Exit Function
		End If
	End If
	hasUserRightsOnPage = False
End	Function

Sub ReadState()
	If readonly Then GenerateError obLanguage("Filter","kErrorEditClosedYear")
	strStudentID = GetSafeID(Request("UID"), Null)
	strEOID = GetSafeID(Request("EOID"), "0")
End	Sub

Sub	Main
	Set objStudentCreatives = objNSNET.GetStudentCreatives(strStudentID, strCurrYearID)
	bEmptyStudentCreatives = objStudentCreatives.EOF

	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	If objSchoolInfo.EOF Then GenerateError obLanguage("SetupSchool","kCantGetSchoolInfo")
	strCityID = GetSafeID(objSchoolInfo("CITYID"), Null)

	Set objEOSWithCreatives = objNSNET.GetEOSWithCreatives(strCityID)
	bEmptyEOSWithCr = objEOSWithCreatives.EOF
	If bEmptyEOSWithCr Then Exit Sub

	If strEOID <> "0" Then
		strEOID = objNSNET.GetSafeEOIDWithCreatives(strCityID, strEOID)
	End If
	If strEOID = "0" Then
		strEOID = GetSafeID(objEOSWithCreatives("EOID"), Null)
	End If

	Set objCreatives = objNSNET.GetStudentUnassignedCreatives(strEOID, strStudentID, strCurrYearID)
	bEmptyCreatives = objCreatives.EOF
End	Sub


Sub	onHead()
%>
<SCRIPT><!--
function deleteAids() {
	if( isDBBusy() ) return false;
	var form=document.forms['main'];
	var chkBox=form.elements.delCreative, chkItems=0;
	if (chkBox) {
		if (chkBox.length) {
			for (var j=0;j<chkBox.length;j++)
				if (chkBox[j].checked==true) {chkItems=1; break;}
		}
		else if (chkBox.checked==true)
			chkItems=1;
	}
	if (chkItems>0) {
		$.show.confirmation(language.Generic.Common.kMsgAreYouSure).then(function(){
			form.ACT.value = 'delete';
			setDBBusy();
			ok( 'main', 'AddEducationSave.asp' );
		});
	}
	else {alert(language.Generic.Common.kErrMsgNoChecks); return};
}

function addCreative() {
	if( isDBBusy() ) return false;
	var form = document.main;
	form.ACT.value = 'add';
	setDBBusy();
	ok('main', 'AddEducationSave.asp');
}

function Back() {
    goBack(document.main, '/angular/school/userinfo/students/<%=strStudentID%>');
}
//--></SCRIPT>
<%
End	Sub

Sub	DrawButtons()
	If Not bEmptyStudentCreatives Then ButtonDel "deleteAids();", obLanguage("Common","kRemove")
End	Sub

Sub	onDrawPage()
	Dim dtAid, strAidDate, i%>

	<form name="main" method="post" action="AddEducationSave.asp" class="form-horizontal">
		<%=WriteObligatoryTags()%>
		<%=WriteHiddenTags(Array("UID", strStudentID, "ACT", ""))%>

		<%DrawButtonPanel

		If bEmptyStudentCreatives Then
			DrawInfo obLanguage("SetupSchool","kEmptyStudentCreatives"), False
		Else%>
			<table class="table table-bordered table-thin">
				<tr>
					<th><%=obLanguage("Common","kEO")%></th>
					<th><%=obLanguage("SetupSchool","kCreativeType")%></th>
					<%=ShowDelCellHeader(1)%>
				</tr><%

				i = 1
				While Not objStudentCreatives.EOF%>
					<tr>
						<td valign="top"><%=DB2HTML(objStudentCreatives("EONAME"))%></td>
						<td valign="top"><%=DB2HTML(objStudentCreatives("TYPENAME"))%></td>
						<td valign="top" class="text-center">
							<%=WriteHiddenTags(Array("DEL_EOID", objStudentCreatives("EOID"), "DEL_TYPEID", objStudentCreatives("TYPEID")))%>
							<input type="checkbox" name="delCreative" value="<%=i%>">
						</td>
					</tr><%
					objStudentCreatives.MoveNext
					i = i + 1
				Wend%>
			</table><br><%
		End If

		If bEmptyEOSWithCr Then
			DrawInfo obLanguage("SetupSchool","kEmptyEOSWithCr"), False
		Else
			OpenPanel obLanguage("SetupSchool","kAddStudentCreative"), "add_student_creative", False
				Call DrawSelectInfoRow(obLanguage("Common","kEO") & ":", strEOID, "EOID", objEOSWithCreatives, "EOID", "EONAME", Null, "ok_check_db('main', 'AddEducationEdit.asp');")
				If Not bEmptyCreatives Then
					Call DrawSelectInfoRow(obLanguage("SetupSchool","kCreativeType") & ":", "", "TYPEID", objCreatives, "TYPEID", "TYPENAME", Null, "")
				End If
				If bEmptyCreatives Then
					DrawInfo obLanguage("SetupSchool","kAssignAllCreatives",strFunctionalityType), False
				Else
					ButtonAdd "addCreative();", obLanguage("SetupSchool","kAddStudentCreative")
				End If
			ClosePanel
		End If%>
	</form><%
End	Sub
%>
