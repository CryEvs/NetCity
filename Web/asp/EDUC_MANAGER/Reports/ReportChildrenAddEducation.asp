<!-- #INCLUDE FILE="YearDates_inc.asp" -->
<!-- #INCLUDE FILE="MovementInterval_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Const kMaxLen_FirstName = 30
Const kMaxLen_Certificate = 10

Dim rsFuncTypes
Dim strLastName, strFirstName

Sub SpecialRead()
	bExit = False
	Call InitEOTypesEM_FuncType_Add
	If bExit Then Exit Sub
	'Подсовываем strFilterEMID из Report_inc.asp
	Set objCommonYears = objNSNET.GetEMGlobalYearsForEOType(strFilterEMID, strEOTypeID)
	If objCommonYears.EOF Then Exit Sub

	nGlobalYearID = GetSafeGlobalYearID(objCommonYears)
	Call InitEM_ForEOType(strEOTypeID, nGlobalYearID)
	If bExit Then Exit Sub
	
	strLastName = GetSafeStr(Request("LastName"), -1, "")
	strFirstName = GetSafeStr(Request("FirstName"), -1, "")
End Sub

Sub SpecialWrite()
	If bExit Then Exit Sub
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
	Call obTokenMgr.SetData(strToken, "stCurrEOTypeID", strEOTypeID)
End Sub

Sub specialHead()

%><script>
<!--

	var NormIdValid = function(){
		var form = document.forms['Reports'];
		if( trimStr( form.elements['LastName'].value ) == "" || trimStr( form.elements['FirstName'].value ) == "" ){
			alert(language.Generic.EMReports.kInputLastFirstNames);
			form.elements['LastName'].focus();
			return false;
		}
		return true;
	}

	$(document).ready(function(){
		report.addPreAction(NormIdValid);
	});
//-->
</script><%
End Sub

Sub SpecialFilters( strForm )
	Call DrawEOTypes(strForm)
	If bExit Then Exit Sub
	FilterGlobalYear
	If bExit Then Exit Sub

	DrawEM_EOs obLanguage("EMReports","kEMSchool")
	Call DrawSelectGRade(kFuncType_Add)

	Call DrawInputRow( obLanguage("Common","kLastName") & ":", strLastName, "LastName", "text", 30, kMaxLastName, "" )
	Call DrawInputRow( obLanguage("Common","kFirstName") & ":", strFirstName, "FirstName", "text", 30, kMaxLen_FirstName, "" )
End Sub

%>
