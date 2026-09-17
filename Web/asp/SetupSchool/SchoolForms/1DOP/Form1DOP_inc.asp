<% ' © 2007-2018 IRTech. All rights reserved.
Function GetFormTitle()
	GetFormTitle = obLanguage("SchoolInfo","kForm1DOP")
End Function

Function GetFormId()
	GetFormId = 51
End Function

Function GetFormName()
	GetFormName = "1DOP"
End Function

Function GetFormPresentationDate()
	Dim rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	GetFormPresentationDate = DateSerial(Year(rsYear("STARTDATE")), 12, 31)
End Function
%>

<!-- #INCLUDE VIRTUAL="/asp/Setupschool/SchoolForms/StatFormAutoCalc_js_inc.asp" -->