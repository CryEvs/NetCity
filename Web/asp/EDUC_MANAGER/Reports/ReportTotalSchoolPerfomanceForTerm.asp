<!-- #INCLUDE FILE="YearDates_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Dim strTerm, objTerms

Sub InitSchoolTerms()
	bIsHeavyReport = True
	strTerm = GetSafe("TERMNAME", "0")
	Set objTerms = objNSNET.GetGLobalTermList(nGlobalYearID, 2)
	If objTerms.EOF Then strTerm = "0" : Exit Sub
	If strTerm <> "0" Then strTerm = objNSNET.GetSafeTermNameForGYear(strTerm, nGlobalYearID)
	If strTerm <> "0" Then Exit Sub
	strTerm = objTerms("TERMNAME")
End Sub

Sub SpecialRead()
	bIsCheckDates = False
	InitEM_NotArchivedGlobalYears
	InitSchoolTerms
End Sub

Sub SpecialWrite()
	Call obTokenMgr.SetData(strToken, stGlobalYearID, nGlobalYearID)
End Sub

Sub SpecialFilters( strForm )
	FilterGlobalYear
	DrawTermsYearAndTotal( strForm )
End Sub

Sub DrawTermsYearAndTotal( theStrForm )
	Dim arr
	arr = Array( _
		"kYear",obLanguage("Common","kYear"), _
		"kYearTotal",obLanguage("Common","kYearTotal"))

	Call DrawPeriodsFilter( theStrForm , obLanguage("Filter","kMarkFor"), arr )
End Sub

Sub DrawReportButtonPanel()
	If bExit Then Exit Sub
	%>
	<div class="buttons-panel" id="buttonPanel">
	<%If bDrawReportButtonPanel Then%>
		<div class="buttons-panel-left"><%
			ButtonGenerate "report.generate()", obLanguage("Buttons", "kGenerate")
			If Not objNSNET.AllYearsClosed(nGlobalYearID, FuncType_School) Then
				rw ShowButtonBase( "report.generate({data:{recalc:true}})", obLanguage("Buttons", "kReGenerate"), "glyphicon glyphicon-repeat", obLanguage("Buttons", "kReGenerate"), "", False ) 
			End If
			%>
		</div>
	<%End If%>
		<div class="buttons-panel-right hidden" id="actionPanel">
			<%Call DrawReportButtons%>
		</div>
	</div>
	<%
End Sub
Sub DrawPeriodsFilter( theStrForm, header, arr )
	Dim errMsg
	'errMsg = GetNoTermsInYearDefineTermsTypes(theStrForm, False)
	'dbgstr strTerm
	If strTerm = "0" Then
		'DrawWarning errMsg
		bExit = True
		Exit Sub
	End If
	OpenFormGroup header
		%>
			<select NAME="TERMNAME" class="form-control" >
			<optgroup label="<%=LCase(obLanguage("Common","kPeriod"))%>"><%
				PopulateSelect objTerms, "TERMNAME", "TERMNAME", strTerm%>
				</optgroup>
				<optgroup label="<%=obLanguage("Grade","kForYear")%>"><%
				PopulateSelectArray convert1Dto2D(arr), strTerm %>
				</optgroup>
			</select>
		<%
	CloseFormGroup
End Sub
%>
