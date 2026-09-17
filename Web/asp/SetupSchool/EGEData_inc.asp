<!-- #INCLUDE FILE="SchoolEGE_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Dim strSchoolCode, strRegCode
Dim objEgeData
Dim nEGESubjectsCount
Dim nStudentNum
Dim arrEgeClasses, nEGEClassNum, strEGEClassName
Dim strEgeYear, arrGrades

Function GetSchoolEGEData(bTest) ' return error if exists and "" if no errors
	Dim objEgeSubjects
	Dim objClasses, nClassesCnt
	Dim objRs

	GetSchoolEGEData = ""

	Set objRs = objNSNET.GetYearInfo(strCurrYearID)
	If objRs.EOF Then GenerateError obLanguage("Common","kUnexpErr")
	strEgeYear = CStr(Year(objRs("ENDDATE")))
	If IsEmpty(arrGrades) Then arrGrades = obTokenMgr.GetData(strToken, "stEGEGrades")
	Set objEgeData = objNSNET.GetEGEData(strCurrYearID, arrGrades)
	If objEgeData.EOF Then
		GetSchoolEGEData = kNoStudentsForEGE
		Exit Function
	End If
	
	Set objEgeSubjects = objNSNET.GetUserInfoListItems(kEGESubjectsParamID)
	If objEgeSubjects.EOF Then
		GetSchoolEGEData = kNoEGESubjects
		Exit Function
	End If
	nEGESubjectsCount = objEgeSubjects.RecordCount
	
	Set objClasses = objNSNET.GetCurrClassesList(strCurrYearID)
	If objClasses.EOF Then
		GetSchoolEGEData = obLanguage("ClassManagement","kNoClasses") & obLanguage("SchoolSettings","kClasses",strFunctionalityType)
		Exit Function
	End If
	nClassesCnt = objClasses.RecordCount
	ReDim arrEgeClasses(1, nClassesCnt)
	
	On Error Resume Next
	GetSchoolEGEData = GetStudentsEGEData(bTest)
	TestError obLanguage("Common","kUnexpErr")
End Function

Function GetStudentsEGEData(bTest)
	Dim strStudentData, strError
	
	nEGEClassNum = -1
	strEGEClassName = ""

	GetStudentsEGEData = ""
	strError = ""
	nStudentNum = 0
	Do
		nStudentNum = nStudentNum + 1
		strStudentData = GetStudentData(objEgeData, bTest, strError)
		If strError <> "" Then
			GetStudentsEGEData = strError
			Exit Function
		End If
		If strStudentData = "" Then Exit Do
		If Not bTest Then
			Response.Write strStudentData & vbCrLf
		End If
	Loop
	
	If nEGEClassNum = -1 Then GenerateError obLanguage("Common","kUnexpErr")
	ReDim Preserve arrEgeClasses(1, nEGEClassNum)
End Function

Function GetStudentData(objRs, bTest, ByRef strError)
	Dim arrData, arrSubjects, arrShortSubjects
	Dim strStudentID, strStudentIDNext
	Dim nCnt, i
	Dim nEGESubjPos
	Dim strLastName, strFirstName, strMiddleName, strClassName, strClassNameUC
	Dim strDocType, nDocType, strDocNum, strDocSer, bDocSerObligatory
	Dim strGender, dtBirthDate, strBirthDate
	Dim strGUID
	Dim strScopeRestrict, objShortSubjects

	If objRs.EOF Then
		GetStudentData = ""
		Exit Function
	End If

	ReDim arrData(kEGEDataCount - 1)
	For i = 0 To UBound(arrData)
		arrData(i) = ""
	Next

	ReDim arrSubjects(nEGESubjectsCount - 1)
	ReDim arrShortSubjects(nEGESubjectsCount - 1)
	For i = 0 To UBound(arrSubjects)
		arrSubjects(i) = "0"
		arrShortSubjects(i) = "0"
	Next

	strError = ""
	nCnt = 0
	Do
		nCnt = nCnt + 1
		If nCnt > nEGESubjectsCount Then GenerateError kInvalidEGESubjects 'obLanguage("Common","kUnexpErr")

		If nCnt = 1 Then
			' get main parameters here
			strStudentID = GetSafeID(objRs("USERID"), Null)
			
			strLastName = GetSafeStr(objRs("LASTNAME"), -1, Null)
			strFirstName = GetSafeStr(objRs("FIRSTNAME"), -1, "")
			strMiddleName = GetSafeStr(objRs("MIDDLENAME"), -1, "")
			strClassName = GetSafeStr(objRs("CLASSNAME"), -1, "")
			strClassNameUC = UCase(strClassName)
			
			If strFirstName = "" Then
				strError = kEGE_EmptyFirstName
				Exit Do
			End If
			
			If strClassNameUC = "" Then
				strError = kEGE_EmptyClass
				Exit Do
			End If
			
			If Not CheckNameForEGE(strLastName) Then
				strError = kEGE_InvalidLastName
				Exit Do
			End If
			
			If Not CheckNameForEGE(strFirstName) Then
				strError = kEGE_InvalidFirstName
				Exit Do
			End If
			
			If Not CheckNameForEGE(strMiddleName) Then
				strError = kEGE_InvalidMiddleName
				Exit Do
			End If
			
			If Not CheckStringForEGE(strClassNameUC) Then
				strError = kEGE_InvalidClassName
				Exit Do
			End If

			strDocType = GetSafeStr(objRs("EGE_DOCTYPE"), kDocTypeLen, "")
			If strDocType = "" Then
				strError = kEGE_EmptyDocType
				Exit Do
			End If
			nDocType = GetSafeLng(strDocType, Null)
			strDocType = FillPrevZero(strDocType, kDocTypeLen)

			bDocSerObligatory = False
			If nDocType = kEGEDocType_BIRTHCERTIF Then
				strDocNum = GetSafeStr(objRs("BIRTHCERTIF_NO"), -1, "")
				strDocSer = GetSafeStr(objRs("BIRTHCERTIF_SERIES"), -1, "")
				bDocSerObligatory = True
			Else
				strDocNum = GetSafeStr(objRs("PASS_NUM"), -1, "")
				strDocSer = GetSafeStr(objRs("PASS_SER"), -1, "")
			
				If nDocType = kEGEDocType_PASSPORT Then
					bDocSerObligatory = True
				End If
			End If
			
			If strDocNum = "" Then
				strError = kEGE_EmptyDocNum
				Exit Do
			End If
			If Not CheckNumberForEGE(strDocNum) Then
				strError = kEGE_InvalidDocNum
				Exit Do
			End If
			
			If bDocSerObligatory Then
				If strDocSer = "" Then
					strError = kEGE_EmptyDocSer
					Exit Do
				End If
				If Not CheckStringForEGE(strDocSer) Then
					strError = kEGE_InvalidDocSer
					Exit Do
				End If
			End If

			strGender = GetSafeStr(objRs("GENDER"), 1, Null)
			If strGender <> obLanguage("Common","kMaleLet") And strGender <> obLanguage("Common","kFemaleLet") Then
				strError = kEGE_InvalidGender
				Exit Do
			End If

			If IsNull(objRs("BIRTHDATE")) Then
				strError = kEGE_EmptyBirthDate
				Exit Do
			End If
			dtBirthDate = CDate(objRs("BIRTHDATE"))
			strBirthDate = FormatEGEDate(dtBirthDate)

			strScopeRestrict = GetSafeStr(objRs("SCOPE_RESTRICT"), kScopeRestrictLen, "")
			If strScopeRestrict = "" Then
				strError = kEGE_EmptyScopeRestrict
				Exit Do
			End If
			strScopeRestrict = FillPrevZero(strScopeRestrict, kScopeRestrictLen)

			Set objShortSubjects = objNSNET.GetEGEStudentShortSubject(strCurrYearID, strStudentID)
			While Not objShortSubjects.EOF
				nEGESubjPos = GetSafeLng(objShortSubjects("EGE_SUBJECTPOS"), Null)
				If (nEGESubjPos < 1) Or (nEGESubjPos > nEGESubjectsCount) Then
					GenerateError kInvalidEGESubjects
				End If
				arrShortSubjects(nEGESubjPos - 1) = "-1"
				objShortSubjects.MoveNext
			WEnd

			strGUID = objNSNET.GenerateGUID()

			arrData(0) = MakeEGE_GUID(strGUID)
			arrData(1) = kEGE_RemouteNo
			arrData(2) = strRegCode

			arrData(3) = MakeStudentCode()
			arrData(4) = strLastName
			arrData(5) = strFirstName
			arrData(6) = strMiddleName
			arrData(7) = strDocSer
			arrData(8) = strDocNum
			arrData(9) = strDocType

			arrData(10) = strGender
'			arrData(11) = ... after cycle
			arrData(12) = strSchoolCode
			arrData(13) = strClassNameUC
			arrData(14) = kEGEWorkField
			arrData(15) = strBirthDate
			arrData(16) = strScopeRestrict
			arrData(17) = Join(arrShortSubjects, kEGESubjectsSeparator)

			arrData(18) = strEgeYear
			arrData(21) = kEGESchoolPriority
			arrData(24) = kEGE_Early

			' Classes statistics
			If strEGEClassName <> strClassName Then
				nEGEClassNum = nEGEClassNum + 1
				arrEgeClasses(0, nEGEClassNum) = strClassName
				arrEgeClasses(1, nEGEClassNum) = 1
				strEGEClassName = strClassName
			Else
				arrEgeClasses(1, nEGEClassNum) = arrEgeClasses(1, nEGEClassNum) + 1
			End If
		End If
		
		' may be multiple	
		nEGESubjPos = GetSafeLng(objRs("EGE_SUBJECTPOS"), Null)
		If (nEGESubjPos < 1) Or (nEGESubjPos > nEGESubjectsCount) Then
			GenerateError kInvalidEGESubjects
		End If
		arrSubjects(nEGESubjPos - 1) = "-1"

		objRs.MoveNext
		If objRs.EOF Then Exit Do
		strStudentIDNext = GetSafeID(objRs("USERID"), Null)
		If strStudentID <> strStudentIDNext Then Exit Do
	Loop
	
	If strError <> "" Then
		strError = kEGE_ExportImpossible & vbCrLf & strError & vbCrLf & MakeStudentInfo(strLastName, strFirstName, strMiddleName, strClassName) & "."
		GetStudentData = ""
		Exit Function
	End If
	
	arrData(11) = Join(arrSubjects, kEGESubjectsSeparator)
	GetStudentData = Join(arrData, kEGESeparator)
End Function

Function MakeStudentInfo(strLastName, strFirstName, strMiddleName, strClassName)
	Dim strInfo
	
	strInfo = obLanguage("Common","Ученик",strFunctionalityType) & ": " & strLastName & " " & strFirstName & " " & strMiddleName
	If Not IsDull(strClassName) Then
		strInfo = strInfo & ", " & obLanguage("Common","kClass",strFunctionalityType) & ": " & strClassName
	End If
	MakeStudentInfo = strInfo
End Function

Function FormatEGEDate(dtDate) ' dd.mm.yyyy ' ? dd/mm/yyyy
	Dim strDate, strNum
	
	strNum = CStr(Day(dtDate))
	If Len(strNum) = 1 Then
		strNum = "0" & strNum
	End If
	strDate = strNum & "/"

	strNum = CStr(Month(dtDate))
	If Len(strNum) = 1 Then
		strNum = "0" & strNum
	End If
	
	strDate = strDate & strNum & "/" & CStr(Year(dtDate))
	FormatEGEDate = strDate
End Function

Function MakeStudentCode()
	Dim strCode, strSudenSubCode, i
	Dim strSudenSubCodeMax

	strSudenSubCode = CStr(nStudentNum)
	If Len(strSudenSubCode) > kStudentSubCodeLen Then
		strSudenSubCodeMax = ""
		For i = 1 To kStudentSubCodeLen
			strSudenSubCodeMax = "9" & strSudenSubCodeMax
		Next
		GenerateError kTooManyStudentsForEGE & ": " & strSudenSubCodeMax
	End If

	For i = Len(strSudenSubCode) + 1 To kStudentSubCodeLen
		strSudenSubCode = "0" & strSudenSubCode
	Next
	
	strCode = strRegCode & kConstInStudentCode & strSchoolCode & strSudenSubCode
	MakeStudentCode = strCode
End Function

Function CheckNameForEGE(strName)
	Dim strChar, i

	If Not CheckEGEStringLen(strName) Then
		CheckNameForEGE = False
		Exit Function
	End If

	For i = 1 To Len(strName)
		strChar = UCase(Mid(strName, i, 1))
		If (strChar < obLanguage("Common","kFirstLetter")) Or (strChar > obLanguage("Common","kLastLetter")) Then
			If (strChar <> obLanguage("Common","kYoLetter")) And (strChar <> " ") And (strChar <> "-") Then
				CheckNameForEGE = False
				Exit Function
			End If
		End If
	Next

	CheckNameForEGE = True
End Function

Function CheckStringForEGE(strData)
	Dim strChar, i

	If Not CheckEGEStringLen(strData) Then
		CheckStringForEGE = False
		Exit Function
	End If

	For i = 1 To Len(strData)
		strChar = Mid(strData, i, 1)
		If (Asc(strChar) < 32) Or (strChar = kEGESeparator) Then
			CheckStringForEGE = False
			Exit Function
		End If
	Next

	CheckStringForEGE = True
End Function

Function CheckNumberForEGE(strNumber)
	Dim strChar, i
	
	If Not CheckEGEStringLen(strNumber) Then
		CheckNumberForEGE = False
		Exit Function
	End If
	
	For i = 1 To Len(strNumber)
		strChar = Mid(strNumber, i, 1)
		If (strChar < "0") Or (strChar > "9") Then
			CheckNumberForEGE = False
			Exit Function
		End If
	Next
	
	CheckNumberForEGE = True
End Function

Function CheckEGEStringLen(strData)
	CheckEGEStringLen = (Len(strData) <= kEGEStringDataLen)
End Function

Function MakeEGE_GUID(strGUID)
	MakeEGE_GUID = "{" & Left(strGUID, 8) & "-" & Mid(strGUID, 9, 4) & "-" & Mid(strGUID, 13, 4) & "-" & Mid(strGUID, 17, 4) & "-" & Right(strGUID, 12) & "}"
End Function

Function FillPrevZero(strParam, nLen)
	Dim i, strResult

	strResult = strParam
	For i = Len(strParam) To nLen - 1
		strResult = "0" & strResult
	Next
	FillPrevZero = strResult
End Function
%>
