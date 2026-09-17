<!-- #INCLUDE VIRTUAL="/asp/scripts/filtersCommon.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Const strSaveScript = "/asp/ClassManagement/SaveClassRelays.asp"

Const ind_TERMTYPEID = 0
Const ind_TERMTYPENAME = 1
Const ind_TERMSCOUNT = 2

Const ind_CLASSID = 0
Const ind_CLASSNAME = 1
Const ind_PROFILENAME = 2
Const ind_NICKNAME = 3
Const ind_TERMID = 4
Const ind_TERMNAME = 5
Const ind_RELAY = 6

Dim bAll, arrAllProfiles, bDrawProfiles, strTableHeader
Dim strTermTypeID, arrTermTypes, objClasses
Dim bNoTermTypes, bNoClasses
Dim nTermsCount, nClassCount
Dim arrRelays, strBackPage
Dim nWizard

Sub ReadState()
	strTermTypeID = GetSafeID(Request("TTID"), "0")
	strBackPage = GetSafeStr(Request("BackPage"), -1, obTokenMgr.GetData(strToken, stBackPage))
End Sub

Sub Main
	Dim objTermType, i, nCurIndex
	Dim objRelays

	bNoClasses = True
	nTermsCount = 0
	nClassCount = 0

	' TermTypes ...
	Set objTermType = objNSNET.GetTermTypesForClasses(strCurrYearID)
	bNoTermTypes = objTermType.EOF
	If bNoTermTypes Then Exit Sub

	arrTermTypes = objTermType.GetRows(,,Array("TERMTYPEID", "TERMTYPENAME", "TERMSCOUNT"))
	' GetSafe TermTypeID
	If strTermTypeID = "0" Then
		nCurIndex = 0
	Else
		nCurIndex = -1
		For i = 0 To Ubound(arrTermTypes, 2)
			If strTermTypeID = GetSafeID(arrTermTypes(ind_TERMTYPEID, i), Null) Then
				nCurIndex = i
				Exit For
			End If
		Next
		If nCurIndex = -1 Then nCurIndex = 0
	End If

	strTermTypeID = GetSafeID(arrTermTypes(ind_TERMTYPEID, nCurIndex), Null)
	nTermsCount = GetSafeLng(arrTermTypes(ind_TERMSCOUNT, nCurIndex), Null)

	' Classes ...
	Set objClasses = objNSNET.GetClassesForTermType(strCurrYearID, strTermTypeID)
	bNoClasses = objClasses.EOF
	If bNoClasses Then Exit Sub

	nClassCount = (objClasses.RecordCount) / nTermsCount

	Set objRelays = objNSNET.GetScheduleRelays()
	If objRelays.EOF Then GenerateError obLanguage("ClassManagement","kCantGetScheduleRelays")
	arrRelays = objRelays.GetRows()

	SpecialMain
	If Not bAll Then readonly = True
End Sub

Sub onHead()
%><script><!--
function Back() {
	goBack(document.ClassList,'<%=strBackPage%>');
}
function save(saveAction, formName) {
	var saveForm = document.forms[formName];
	saveForm.action = saveAction;
	jsSaveForm(saveForm);
}
//--></script>
<%
End Sub

Sub DrawFilters( strForm )
	If bNoTermTypes Then Exit Sub
	DrawTermTypes
End Sub

Sub DrawTermTypes()
	DrawSelectInfoRow obLanguage("ClassManagement","kTermTypeTitle"), strTermTypeID, "TTID", arrTermTypes, "", "", Null, "OnChangeSelect('TermFilter', '" & strScriptName & "');"
End Sub

Sub DrawButtons()
	If Not readonly And Not bNoClasses Then
		ButtonSave "save('" & strSaveScript & "', 'ClassList')", obLanguage("Common","kSave")
		ButtonReset "resetScreen('ClassList');", obLanguage("Common","kReset")
	End If
End Sub

Sub onDrawPage()%>
	<form name="TermFilter" method="post" action="<%=strScriptName%>" OnSubmit="return false;">
	<%=WriteObligatoryTags()%><%
	Call DrawButtonsFilters(True, "TermFilter")%>
	</form><%

	If bNoTermTypes Then
		DrawInfo obLanguage("Reports","kNoClasses",strFunctionalityType) & obLanguage("SchoolSettings","kClasses",strFunctionalityType), False
		Exit Sub
	End If

	If bNoClasses Then
		DrawInfo obLanguage("ClassManagement","kNoClassesForTermTypes") & obLanguage("SchoolSettings","kClasses",strFunctionalityType), False
		Exit Sub
	End If

	%><form name="ClassList" method="post" action="<%=strSaveScript%>" OnSubmit="return false;">
	<%=WriteObligatoryTags()%>
	<%=WriteHiddenTags( Array("TermsCount", nTermsCount, "ClassCount", nClassCount, "TTID", strTermTypeID, "NWizard", nWizard) )%><%
	DrawTable
	%></form><%
End Sub

Sub DrawTable()
	Dim i, j, k, strTermID, strTermName
	Dim strClassID, strClassName, strProfileName, strTeacherName, strRelay
	Dim objTempTeachersRs

	arrAllProfiles = objNSNET.GetGradeProfileList(-1, strSchoolID)
	bDrawProfiles = ( UBound(arrAllProfiles, 2) > 0 )
	strTableHeader = "<th>" & obLanguage("Common","kClass",strFunctionalityType) & "</th>" &_
		 IIf(bDrawProfiles, "<th>"&obLanguage("Common","kProfile", strFunctionalityType)&"</th>" , "") &_
		 "<th>" & obLanguage("Common","kClassChief",strFunctionalityType) & "</th>"

	For i = 0 To nTermsCount - 1
		strTermID = GetSafeID(objClasses("TERMID"), Null)
		strTermName = GetSafeStr(objClasses("TERMNAME"), -1, Null)
		strTableHeader = strTableHeader & "<th class=""text-nowrap"">" & DB2HTML(strTermName) & "</th>"%>
		<input type="hidden" name="TERMID" value="<%=strTermID%>"><%
		objClasses.MoveNext
	Next
	objClasses.MoveFirst%>

	<table class="table table-condensed table-sm table-thin">
		<tr><%=strTableHeader%></tr><%
		k = 0
		If Not objClasses.EOF Then Set objTempTeachersRs = objClasses.Fields()("rsClassTeachers").Value
		While Not objClasses.EOF
			strClassID = GetSafeID(objClasses("CLASSID"), Null)
			strClassName = GetSafeStr(objClasses("CLASSNAME"), -1, Null)
			strProfileName = GetSafeStr(objClasses("PROFILENAME"), -1, Null)
			strTeacherName = GetClassTeachersString(objTempTeachersRs)%>
			<tr>
				<td><%=DB2HTML(strClassName)%>
				<input type="hidden" name="CLASSID" value="<%=strClassID%>"></td>
				<%If bDrawProfiles Then%><td><%=DB2HTML(strProfileName)%></td><%End If%>
				<td><%=DB2HTML(strTeacherName)%></td><%
				For j = 0 To nTermsCount - 1
					strRelay = GetSafeID(objClasses("RELAY").Value, Null)%>
					<td class="text-center"><%If readonly Then%><%=strRelay%><%Else%><%PopulateRelay arrRelays, strRelay%><%End If%></td><%
					'k = k + 1
					objClasses.MoveNext
				Next%>
			</tr><%
	    Wend%>
	</table><%
End Sub

Sub PopulateRelay(arrRelays, strRelay)%>
	<select name="Relay" class="form-control" OnChange="dataChanged()">
		<%PopulateSelectArray Adapt2D(arrRelays), strRelay%>
	</select><%
End Sub

Function GetClassTeachersString(objTeachersRs)
    Dim str
    str = ""
    If Not objTeachersRs.EOF Then
        While Not objTeachersRs.EOF
            str = str & DB2HTML(objTeachersRs("NICKNAME")) & ", " 
            objTeachersRs.MoveNext   
        Wend
        str = Left(str, Len(str)-2)
    End If
    GetClassTeachersString = str
End Function
%>
