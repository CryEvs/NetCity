<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim arrTerms, nCount, i, j, k, index
Dim strTerm, arrInfo
Dim strTermTypeIndex, strTermID
Dim nTermTypesCount, arrTermTypes
Dim nRes, strTermType
Dim objDocInfo, dtDocDate, strDocNumber, strErrMessage
Dim strSGName, strClassName, dtOutOfTermsDate

Dim strScriptName ' почему-то сюда не дошло определение этой переменной

strScriptName = Request.ServerVariables("SCRIPT_NAME")


SetScriptTimeOut 900

If Not HasUserRight(arCreateEditTerm) Then GenerateError obLanguage("Common","kErrPageAccess")

nTermTypesCount = Request.Form("TERM_TYPE").Count
If nTermTypesCount > 0 Then
	ReDim arrTermTypes(1, nTermTypesCount - 1)
	' (0, j) - TermTypeID, (1, j) - arrTerms
	index = 0
	For j = 1 To nTermTypesCount
		strTermType = Request.Form("TERM_TYPE")(j)
		arrInfo = Split(strTermType, ",", 2)
		If Ubound(arrInfo) <> 1 Then GenerateError obLanguage("Common","kInvalidParameter")
		arrTermTypes(0, j - 1) = GetSafeID(arrInfo(0), Null)
		nCount = GetSafeLng(arrInfo(1), Null)
		ReDim arrTerms(2, nCount - 1)
		' (0, k) - TermID, (1, k) - StartDate, (2, k) - EndDate

		For i = 1 To nCount
			index = index + 1
			strTerm = Request.Form("TERM")(index)
			arrInfo = Split(strTerm, ",", 2)
			If Ubound(arrInfo) <> 1 Then GenerateError obLanguage("Common","kInvalidParameter")
			strTermTypeIndex = arrInfo(0)
			strTermID = GetSafeID(arrInfo(1), Null)

			k = i - 1
			arrTerms(0, k) = strTermID
			arrTerms(1, k) = GetSafeDate(Request("SDT" & strTermTypeIndex), NULL)
			arrTerms(2, k) = GetSafeDate(Request("EDT" & strTermTypeIndex), NULL)
			If k>0 Then
				If DateDiff( "d", arrTerms(2, k-1), arrTerms(1, k), 0, 0)<>1 Then GenerateError obLanguage("SetupSchoolCalendar","kErrTermLimits") &arrTerms(2, k-1)&" - "& arrTerms(1, k)
			End If
		Next
		arrTermTypes(1, j - 1) = arrTerms
	Next

	strSGName = ""
	strClassName = ""
	dtOutOfTermsDate = NSNow()

	On Error Resume Next
	nRes = objNSNET.SaveTermsInfoChange(strCurrYearID, arrTermTypes, strSGName, strClassName, dtOutOfTermsDate)
	TestError obLanguage("SetupSchoolCalendar","kErrEditTerms")
	nRes = CLng(nRes)

	If nRes <> 0 Then
		If (nRes = -1) Or (nRes = -2) Then
			If nRes = -1 Then
				strErrMessage = obLanguage("SetupSchoolCalendar","kErrEditTerms") & ", " & obLanguage("SetupSchoolCalendar","kViolation_CM") & "<br>"
			ElseIf nRes = -2 Then
				strErrMessage = obLanguage("SetupSchoolCalendar","kErrEditTerms") & ", " & obLanguage("SetupSchoolCalendar","kViolation_Asg") & "<br>"
			End If
			strErrMessage = strErrMessage & "<br>" & _
				obLanguage("Common","kClass",strFunctionalityType) & ": " & strClassName & "<br>" & _
				obLanguage("Curriculum","kSubjectGroup") & ": " & strSGName & "<br>" & _
				obLanguage("Common","kDate") & ": " & Date2Str(dtOutOfTermsDate)
			GenerateError strErrMessage
		Else
			Set objDocInfo = objNSNET.GetMoveDocInfo(nRes)
			If objDocInfo.EOF Then
				GenerateError obLanguage("Common","kUnexpErr")
			End If
			dtDocDate = GetSafeDate(objDocInfo("DOCDATE"), Null)
			strDocNumber = GetSafeStr(objDocInfo("DOCNUMBER"), 20, Null)
			strErrMessage = obLanguage("SetupSchoolCalendar","kErrEditTerms") & ", <br>" & obLanguage("SetupSchoolCalendar","kMoveDocsOutOfTermBounds") & "<br>"
			strErrMessage = strErrMessage & "'" & strDocNumber & "' " & obLanguage("ClassManagement","kFrom") & " " & Date2Str(dtDocDate)
			GenerateError strErrMessage
		End If
	End If
End If

RedirectTo "Years.asp?", Null
%>
