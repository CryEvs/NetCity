<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim cntDel, arrData, j
Dim strTermTypeName, nTermsCount, bOk

cntDel = Request("delTermType").Count
If cntDel > 0 Then
	' delete TermTypes
	ReDim arrData(cntDel-1)
	For j=1 To cntDel
		arrData(j-1) = GetSafeID(Request("delTermType")(j), NULL)
	Next
	Call objNSNET.RemoveTermTypes(arrData)
	TestError obLanguage("SetupSchoolCalendar","kErrDeleteTermType")
Else
	If Not HasUserRight(arEditSchoolTermTypes) Then GenerateError obLanguage("Common","kErrPageAccess")
	' create new
	strTermTypeName = Trim(GetSafeStr(Request("TermTypeName"), 30, Null))
	nTermsCount = GetSafeLng(Request("TermsCount"), Null)

	bOk = objNSNET.CreateTermType(strTermTypeName, nTermsCount)
	TestError obLanguage("SetupSchoolCalendar","kErrCreateTermType")
	If Not bOk Then GenerateError obLanguage("SetupSchoolCalendar","kErrExistTermTypes")
End If

RedirectTo GetSafeStr( obTokenMgr.GetData(strToken,stBackPage), -1, "TermTypes.asp"), Null
%>
