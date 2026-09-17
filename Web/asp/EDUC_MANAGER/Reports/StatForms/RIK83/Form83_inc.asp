<% ' © 2007-2015 IRTech. All rights reserved.

'Данный файл должен служить для специфичных параметров/настроек целиком для всей формы
'Как минимум это ее наименование и идентификатор

Function GetFormId()
	GetFormId = 183
End Function

Function GetSourceFormId()
	GetSourceFormId = StatForm_Rik83
End Function

Function GetMinGlobalYear()
	GetMinGlobalYear = 14
End Function

Function GetFormFieldName(nSection, nRow, nCol)
	On Error Resume Next

	If InStr(nSection, ".") > 0 Then
		GetFormFieldName = "T" & nSection & LPad2(nRow)

		If nCol <> -1 Then
			GetFormFieldName = GetFormFieldName & LPad2(nCol)
		End If
	Else
		GetFormFieldName = "T" & LPad2(nSection) & LPad2(nRow) & LPad2(nCol)
	End If
	TestError(obLanguage("SchoolInfo", "kErrorSchoolInfo"))
End Function

Function GetFormName()
	Select case bFormSpec
		Case FormSpecific_GOU
			GetFormName = obLanguage("EMReportNames", "kForm83RIK")
		Case FormSpecific_NOU
			GetFormName = obLanguage("EMReportNames", "kForm83RIKNOU")
	End Select
End Function%>
<script> 
<!--
function GetParameterName(nSection, nRow, nCol) {
	if (typeof(nSection) == 'string' && nSection.indexOf('.') > 0) {
		nSection = nSection.replace('.', '\\.');
	}
	else {
		nSection = lpad(nSection, 2);
	}
	if (nCol == null)
		return 'T' + nSection + lpad(nRow, 2);
	else
		return 'T' + nSection + lpad(nRow, 2) + lpad(nCol, 2);
}
//--></script>
