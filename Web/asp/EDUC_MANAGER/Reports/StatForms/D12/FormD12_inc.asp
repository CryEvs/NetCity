<% ' © 2007-2015 IRTech. All rights reserved.

'Данный файл должен служить для специфичных параметров/настроек целиком для всей формы
'Как минимум это ее наименование и идентификатор

Function GetFormName()
	Select case bFormSpec
		Case FormSpecific_GOU
			GetFormName = obLanguage("EMReportNames", "kFormD12")
		Case FormSpecific_NOU
			GetFormName = obLanguage("EMReportNames", "kFormD12NOU")
	End Select
End Function

Function GetFormId()
	GetFormId = 12
End Function

Function GetSourceFormId()
	GetSourceFormId = StatForm_Osh1
End Function
%>
