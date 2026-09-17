<!-- #INCLUDE VIRTUAL=/asp/headernoscreen_YearNo.asp -->

<%	'©2001-2004 ROOS. All rights reserved.
Dim arrLanguages, i
ReDim arrLanguages(Request("LANGS").Count-1)
For i = 0 To UBound(arrLanguages)
	arrLanguages(i) = GetSafeLng(Request("LANGS")(i+1), NULL)
Next
Call obNS2.SaveLanguages(objCon, strSchoolID, arrLanguages)
TestError "Невозможно сохранить информацию"

RedirectTo GetSafeStr( obTokenMgr.GetData(strToken, stBackPage), 255, "SchoolSubjects.asp"), null
%>
