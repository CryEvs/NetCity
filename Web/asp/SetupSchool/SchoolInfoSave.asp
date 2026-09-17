<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_Year.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.
Dim backPage, pageNum, strPageNum, nGroup, strFormName, strOshName
Dim i, name, value
Dim arrParams, n

If Not HasUserRight(arProfileEditSchoolInfo) Then  GenerateError obLanguage("Common","kErrPageAccess")

pageNum = GetSafeLng(Request("PAGE"), 0)
nGroup = GetSafeLng(Request("GROUP"), 0)
strFormName = GetSafeStr(Request("FPATH"), 10,"OSH")

If pageNum=0 Then
	strPageNum=""
Else
	strPageNum = CStr(pageNum)
End If

strOshName = strFormName
If strOshName = "OSH" Then
	strOshName = "OSH1"
End If
backPage = GetSafeStr(Request("BACK"),100, strFormName & "/SchoolInfo" & strPageNum & "_" & strOshName & ".asp")

ReDim arrParams(1,Request.Form.Count-1)

n = 0
For i = 1 To Request.Form.Count
	name = Request.Form.key(i)
	value = Left(Trim(Request.Form(i)), 250)

	If Left(name, 1) = "T" or name="SCHOOLTYPE" Then
		arrParams(0,n) = name
		arrParams(1,n) = CStr(value)
		n = n + 1
	End If
Next

If n > 0 Then
	ReDim Preserve arrParams(1,n-1)
	Call objNSNET.SaveSchoolInfo(strCurrYearID, nGroup, arrParams)
	TestError obLanguage("Common","kErrSaveSchoolInfo",strFunctionalityType)
End If

Response.Redirect backPage & "?" & Ver() & "&AT=" & strToken & "&SV=Y"
%>
