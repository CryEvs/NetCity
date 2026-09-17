<!-- #INCLUDE VIRTUAL=/asp/headernoscreen.asp -->

<% ' © 2007-2011 IRTech. All rights reserved.

Const MaxProgramNameSize = 255
Const MaxProgramAttrSize = 50
Const MaxDescriptionSize = 255
Const MaxArtTypeSize = 200
Const MaxFederalRequirementsSize = 4000
Const kEpsilon = 0.00001

Dim strAct, strProgID, cnt, i, arrPrograms
Dim strDirectionID, strProgName, strProgDescr, dYearHours, dWeekHours, strAddProgramTypeId, strArtType, strFederalRequirements, strAdaptation, strUseDistanceTech
Dim strProgAttr
Dim arrLimits, nInd, strIndex
Dim strReplaceProgID
Dim nViolat_StudentID, strNickName

If CLng(strFunctionalityType) <> kFuncType_Add Then GenerateError obLanguage("Common","kErrPageAccess")

strAct = GetSafeStr(Request("ACT"), -1, Null)

If Request("ACT") = "del" Then
	cnt = Request("delProg").Count
	If cnt = 0 Then GenerateError obLanguage("Common","kInvalidParameter")
	ReDim arrPrograms(cnt-1)
	For i = 1 To cnt
		strProgID = GetSafeID(Request("delProg")(i), Null)
		arrPrograms(i-1) = strProgID
	Next

	Call objNSNET.RemoveAddPrograms(arrPrograms)
	TestError obLanguage("SetupSchool","kCantDeleteAddPrograms")

ElseIf Request("ACT") = "edit" Then
	strProgID = GetSafeID(Request("PROGID"), Null)
	strDirectionID = GetSafeID(Request("DIRID"), Null)
	strProgName = Trim(GetSafeStr(Request("PROGNAME"), MaxProgramNameSize, Null))
	strProgAttr = Trim(GetSafeStr(Request("PROG_ATTR"), MaxProgramAttrSize, Null))
	strArtType = Trim(GetSafeStr(Request("ARTTYPE"), MaxArtTypeSize, ""))
	strFederalRequirements = Trim(GetSafeStr(Request("FEDERALREQUIREMENTS"), MaxFederalRequirementsSize, ""))

	strAdaptation = GetSafeStr(Request("ADAPTATION"), -1, "N")
	strUseDistanceTech = GetSafeStr(Request("USEDISTANCETECH"), -1, "N")
	strAddProgramTypeId = GetSafeID(Request("ADDPROGRAMTYPEID"), Null)
	strProgDescr = GetSafeStr(Request("DESCR"), MaxDescriptionSize, "")
	
	ReDim arrLimits(2, kMaxGrade - kMinGrade)
	nInd = -1
	For i = kMinGrade To kMaxGrade
		dYearHours = 0.0
		dWeekHours = 0.0
		strIndex = "_" & i
		If Not IsDull(Request("WEEKHOURS" & strIndex)) Then
			dWeekHours = CDbl(Request("WEEKHOURS" & strIndex))
			If dWeekHours > kEpsilon Then
				If Not IsDull(Request("YEARHOURS" & strIndex)) Then
					dYearHours = CDbl(Request("YEARHOURS" & strIndex))
				End If
				nInd = nInd + 1
				arrLimits(0, nInd) = i
				arrLimits(1, nInd) = dYearHours
				arrLimits(2, nInd) = dWeekHours
			End If
		End If
	Next
	If nInd = -1 Then
		arrLimits = Empty
	Else
		ReDim Preserve arrLimits(2, nInd)
	End If

	If strProgID = "0" Then
		' create new add education program
		i=objNSNET.CreateAddProgram(strCurrYearID, strSchoolID, strDirectionID, strProgName, strProgAttr, strProgDescr, arrLimits, strAddProgramTypeId, strAdaptation = "Y", strUseDistanceTech = "Y", strArtType, strFederalRequirements)
		TestError obLanguage("SetupSchool","kCantCreateAddProgram")
	Else
		i=objNSNET.EditAddProgram(strCurrYearID, strProgID, strDirectionID, strProgName, strProgAttr, strProgDescr, arrLimits, strAddProgramTypeId, strAdaptation = "Y", strUseDistanceTech = "Y", strArtType, strFederalRequirements)
		TestError obLanguage("SetupSchool","kCantEditAddProgram")
	End If
	If i = -1 Then Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("SetupSchool","kErrProgNameOrAttrExist")))
	
ElseIf Request("ACT") = "replace" Then
	strProgID = GetSafeID(Request("PROGID"), Null)
	strReplaceProgID = GetSafeID(Request("ReplaceProgID"), Null)

	nViolat_StudentID = objNSNET.ReplaceAddPrograms(strCurrYearID, strProgID, strReplaceProgID)
	TestError obLanguage("SetupSchool","kCantReplaceAddPrograms")
	If nViolat_StudentID <> 0 Then
		strNickName = objNSNET.GetUserNickName(nViolat_StudentID)
		GenerateError obLanguage("SetupSchool","kStudentAddProgramViolation") & ": " & strNickName
	End If

Else
	GenerateError obLanguage("Common","kInvalidParameter")
End If

RedirectTo "AddPrograms.asp", Null
%>
