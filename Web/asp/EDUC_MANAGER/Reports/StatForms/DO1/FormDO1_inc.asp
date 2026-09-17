<% ' © 2007-2014 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub
Function GetMinGlobalYear()
	GetMinGlobalYear = 13
End Function

Function GetFormName()
	GetFormName = obLanguage("EMReportNames", "kFormDO1Sv")
End Function

Function GetFormId()
	GetFormId = 101
End Function

Function GetSourceFormId()
	GetSourceFormId = StatForm_Do1
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
