<% ' © 2007-2015 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub

Function GetFormName()
	Select case bFormSpec
		Case FormSpecific_GOU
			GetFormName = obLanguage("EMReportNames", "kFormD4")
		Case FormSpecific_NOU
			GetFormName = obLanguage("EMReportNames", "kFormD4NOU")
	End Select
End Function

Function GetFormId()
	GetFormId = 4
End Function

Function GetSourceFormId()
	GetSourceFormId = StatForm_Osh1
End Function
%>
