<!-- #INCLUDE VIRTUAL="/asp/header1.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/filterClasses.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/scripts/FilterTerms.asp" -->
<!-- #INCLUDE File="SecretaryAndClassChiefFilter_inc.asp" -->
<!-- #INCLUDE VIRTUAL="/asp/Reports/SchoolReports_inc.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

Dim bEmpty, bClassesExist, objStudentsRs

Function hasUserRightsOnPage()
	If HasUserRight(arReportsViewAdministrativeReports) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAllClasses) Then bAll = True: hasUserRightsOnPage = True: Exit Function
	If HasUserRight(arReportsForAssignedClass) Then bAll = False: hasUserRightsOnPage = True: Exit Function
	hasUserRightsOnPage = False
End Function

Sub specialRead()
	Call ReadSecretClassChiefFilter()
	If bAll Then Call InitYearClasses() Else InitYearTeacherClasses( strUserID )' Получаются классы, где strUserID - классный руководитель!
	If strClassID = "0" Then Exit Sub

	Call InitTermsForClass( False, strClassID )
	If strTermID = "0" Then Exit Sub
End Sub

Sub specialWrite()
	WriteSecretClassChiefFilter
	WriteClass
	WriteTerm
End Sub

Sub Main
	bEmpty = True

	bClassesExist = Not objClassesRs.EOF
	If bClassesExist Then
		If strClassID = "0" Then
			strClassID = GetSafeID( objClassesRs("CLASSID"), "0" )
			Call InitTermsForClass( False, strClassID )
		End If

		If strTermID = "0" Then Exit Sub
		Set objStudentsRs = objNSNET.GetStudentListForClass(strClassID, strTermID)
		bEmpty = objStudentsRs.EOF
	End If
End Sub

Sub specialHead()

%>
<script>
$(document).ready(function (){
	$('input[type=checkbox]').bind("click",
		function ( e )
		{
			form = document.forms["Reports"];
			var sFilter = '';
			if (form.ShowLastFirst.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowMiddle.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowBirthDate.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowGender.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowPersonalNum.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowForeign.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowHomeAddress.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowPassport.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			if (form.ShowParentsInfo.checked) sFilter = sFilter + '1'; else sFilter = sFilter + '0';
			$('input[name=REP_FILTER]').val(sFilter);
			return true;
		});
});
</script><%
End Sub

Sub specialFilters( strForm )
	Call DrawYearClasses( strForm, False, IIf(bAll, obLanguage("Filter","kNoYearClasses",strFunctionalityType), obLanguage("Filter","kYouNotChief",strFunctionalityType)) ) : If bExit Then Exit Sub
	Call DrawTerms( strForm ) : If bExit Then Exit Sub
	OpenFormGroup obLanguage("Reports","kIncludeFieldsToReport")%>
		<input type="checkbox" name="ShowLastFirst" checked disabled value="1"><%=(obLanguage("Common","kLastName") & ", " & obLanguage("Common","kFirstName"))%>
		<%=WriteHiddenTags(Array("REP_FILTER", "")) %>
		<%=ShowCheckbox( "ShowMiddle", 1, bMiddle, obLanguage("Common","kMiddleName"), "" )%>
		<%=ShowCheckbox( "ShowBirthDate", 1, bBirthDate, obLanguage("Common","kBDate"), "" )%>
		<%=ShowCheckbox( "ShowGender", 1, bGender, obLanguage("Common","kGender"), "" )%>
		<%=ShowCheckbox( "ShowPersonalNum", 1, bPersonalNum, obLanguage("Reports","kPersonalFileNum"), "" )%>
		<%=ShowCheckbox( "ShowForeign", 1, bForeign, obLanguage("Reports","kForeignLanguage"), "" )%>
		<%=ShowCheckbox( "ShowHomeAddress", 1, bHomeAddress, obLanguage("Reports","kHomeAddressAndPhone"), "" )%>
		<%=ShowCheckbox( "ShowPassport", 1, bPassport, obLanguage("Reports","kPassportAndBirthCertificate"), "" )%>
		<%=ShowCheckbox( "ShowParentsInfo", 1, bParentsInfo, obLanguage("Reports","kParentsInfo"), "" )%>
	<%
	CloseFormGroup
End Sub

Sub specialDraw()
	If bExit Then Exit Sub
	If bEmpty Then 
		DrawInfo obLanguage("Filter","kNoStudents",strFunctionalityType), False
		bDrawReportButtonPanel = False
	End If
End Sub
%>
