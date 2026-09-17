<% ' © 2007-2013 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub
Function GetMinGlobalYear()
	GetMinGlobalYear = 12
End Function

Function GetFormName()
	Select case bFormSpec
		Case FormSpecific_GOU
			GetFormName = obLanguage("EMReportNames", "kFormD6")
		Case FormSpecific_NOU
			GetFormName = obLanguage("EMReportNames", "kFormD6NOU")
	End Select
End Function

Function GetFormId()
	GetFormId = 6
End Function
%>
