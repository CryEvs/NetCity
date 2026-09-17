<!-- #INCLUDE VIRTUAL="/asp/headernoscreen_YearNo.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kCantSaveSchoolCode = "Невозможно сохранить код ОУ"
Const kSchoolCodeMaxLen = 6

Dim strSchoolCode, nLen_0, i

If Not HasUserRight(arProfileEditSchoolInfo) Then GenerateError obLanguage("Common","kErrPageAccess")

strSchoolCode = GetSafeStr(Request("SCHOOLCODE"), kSchoolCodeMaxLen, "")
If strSchoolCode = "" Then
	strSchoolCode = Null
Else
	nLen_0 = kSchoolCodeMaxLen - Len(strSchoolCode)
	For i = 1 To nLen_0
		strSchoolCode = "0" & strSchoolCode
	Next
End If
Call objNSNET.SetSchoolCode(strSchoolID, strSchoolCode)
TestError kCantSaveSchoolCode

RedirectTo "SchoolEGE.asp?", Null
%>
