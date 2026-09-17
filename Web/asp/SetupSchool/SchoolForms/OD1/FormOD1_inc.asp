<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormTitle()
	GetFormTitle = obLanguage("SchoolInfo","kFormOD1")
End Function

Function GetFormId()
	GetFormId = 111
End Function

Function GetFormName()
	GetFormName = "OD1"
End Function

Function GetFormPresentationDate()
	Dim rsYear

	Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
	GetFormPresentationDate = DateSerial(Year(rsYear("STARTDATE")), 9, 20)
End Function%>
