<% ' © 2007-2015 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub

Function GetMinGlobalYear()
	GetMinGlobalYear = 12
End Function

Function GetFormName()
	GetFormName = obLanguage("EMReportNames","kFormD11")
End Function

Function GetFormId()
	GetFormId = 110
End Function

Function GetSourceFormId()
	GetSourceFormId = StatForm_Osh9
End Function
%>
