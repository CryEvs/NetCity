<% ' © 2007-2013 IRTech. All rights reserved.

'Используется для вывода в фильтр, дополнительно к семестрам, значений: Итог и Год.

Sub DrawTermsYearAndTotal( theStrForm )
	Dim arr
	arr = Array( _
		kReportYearTermType, obLanguage("Common","kYear"), _
		kReportTotalTermType, obLanguage("Common","kYearTotal"))

	Call DrawPeriodsFilter( theStrForm , obLanguage("Filter","kMarkFor"), arr )
End Sub

%>
