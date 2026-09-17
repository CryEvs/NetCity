<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2013 IRTech. All rights reserved.

' Dim i, strAID, arrData, n
' Dim bDelAllResults
' Dim dtCurTime, strSubjClassID
' Dim transaction
Dim result, sch_code
Dim retCode

Function hasUserRightsOnPage()
	hasUserRightsOnPage = bIsEducManager
End Function
Function GetErrDetails(objErr)
	GetErrDetails = objErr.Description
End Function

If hasUserRightsOnPage() Then
	sch_code = GetSafe(Request("SchoolCode"), Null)
	If Not IsNull(sch_code) Then sch_code = CStr(sch_code)

	retCode = objNSNET.SetSchoolCode(Request("sch"), sch_code)
	TestError ""

	Set result = new JSONResult
	'result.Message = Request("sch") &"_"& Request("SchoolCode")
	result.Message = retCode
	Response.Write result
Else
	GenerateError obLanguage("Common","kErrPageAccess")
End If
%>
