<!-- #INCLUDE VIRTUAL="/asp/headertxt.asp" -->
<!-- #INCLUDE FILE="EGEData_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Sub onDrawPage()
	Dim strError

	If Not HasUserRight(arProfileEditSchoolInfo) Then GenerateError obLanguage("Common","kErrPageAccess")
	
	strSchoolCode = GetSafeStr(obTokenMgr.GetData(strToken, stEGESchoolCode), kSchoolCodeMaxLen, Null)
	strRegCode = GetSafeStr(obTokenMgr.GetData(strToken, stEGERegCode), kRegCodeLen, Null)
	
	strError = GetSchoolEGEData(False)
	If strError <> "" Then GenerateError strError
	
	If Not CheckEGEClasses() Then GenerateError kEGEDataChanged
End Sub

Function CheckEGEClasses()
	Dim nClassesSizeStat, nStudentsCntSizeStat
	Dim strClassNameStat, nStudentsCntStat
	Dim nClassesSize
	Dim strClassName, nStudentsCnt
	Dim i
	
	CheckEGEClasses = False
	nClassesSizeStat = Request("EGEClassName").Count
	If nClassesSizeStat = 0 Then GenerateError obLanguage("Common","kInvalidParameter")

	nStudentsCntSizeStat = Request("EGEStunentsCnt").Count
	If nClassesSizeStat <> nStudentsCntSizeStat Then GenerateError obLanguage("Common","kInvalidParameter")

	nClassesSize = UBound(arrEgeClasses, 2) + 1
	If nClassesSizeStat <> nClassesSize Then
		Exit Function
	End If
	
	For i = 1 To nClassesSize
		strClassNameStat = GetSafeStr(Request("EGEClassName")(i), -1, Null)
		nStudentsCntStat = GetSafeLng(Request("EGEStunentsCnt")(i), Null)

		strClassName = arrEgeClasses(0, i - 1)
		nStudentsCnt = arrEgeClasses(1, i - 1)
		
		If (strClassNameStat <> strClassName) Or (nStudentsCntStat <> nStudentsCnt) Then
			Exit Function
		End If
	Next
	
	CheckEGEClasses = True
End Function
%>
