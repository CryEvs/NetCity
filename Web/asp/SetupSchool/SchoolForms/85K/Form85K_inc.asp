<% ' © 2007-2016 IRTech. All rights reserved.
Function GetFormTitle()
	GetFormTitle = obLanguage("SchoolInfo","kForm85K")
End Function

Function GetFormId()
	GetFormId = 85
End Function

Function GetFormName()
	GetFormName = "85K"
End Function

Function GetFormPresentationDate()
	Dim rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	GetFormPresentationDate = DateSerial(Year(rsYear("STARTDATE")), 12, 31)
End Function
%>
<script>
<!--
function GetParameterName(nSection, nRow, nCol) {
	if (nSection.indexOf('.') > 0) {
		nSection = nSection.replace('.', '\\.');
	}
	else {
		nSection = lpad(nSection, 2);
	}
	if (nCol == null) {
		return 'T' + nSection + lpad(nRow, 2);
	}
	else {
		return 'T' + nSection + lpad(nRow, 2) + lpad(nCol, 2);
	}
}
//--></script>