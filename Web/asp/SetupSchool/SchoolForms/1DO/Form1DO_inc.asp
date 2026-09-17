<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormTitle()
	GetFormTitle = obLanguage("SchoolInfo","kForm1DO")
End Function

Function GetFormId()
	GetFormId = 121
End Function

Function GetFormName()
	GetFormName = "1DO"
End Function

Function GetFormPresentationDate()
	Dim rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	GetFormPresentationDate = DateSerial(Year(rsYear("STARTDATE")), 12, 31)
End Function%>