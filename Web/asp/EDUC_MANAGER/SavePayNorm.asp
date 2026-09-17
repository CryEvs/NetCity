<!-- #INCLUDE FILE="../headernoscreen_YearNo.asp" -->
<!-- #INCLUDE FILE="em_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim strAct
Dim strPNID, bNewTable
Dim strRuleResol, nStart_Month, nStart_Year
Dim dtStart
Dim strAbbrev_New, strNormVal_New, strAverVal_New, strComment_New
Dim nNoAttendance_New

Dim nCount, nNormID, arrNorms
Dim strAbbrev, strNormVal, strAverVal, strComment
Dim nNoAttendance
Dim i
Dim nResult
Dim strPNID_Prev
Dim dtUsedMaxPrev, dtUsedMinThis
Dim nValInd, bUsed

If Not HasUserRight(arEMDouPayNormEdit) Then GenerateError obLanguage("Common","kErrPageAccess")

strAct = GetSafeStr(Request("ACT"), -1, Null) ' save, deleteAll, delete, add

If strAct <> "delete" Then
	strPNID = GetSafeID(obTokenMgr.GetData(strToken, stPayNormID), "0")
	bNewTable = (strPNID = "0")
	strPNID_Prev = GetSafeID(Request("PNID_Prev"), "0")
End If

If strAct = "delete" Then
	nCount = Request("delNorm").Count
	ReDim arrNorms(nCount - 1)

	For i = 1 To nCount
		nNormID = GetSafeID(Request("delNorm")(i), Null)
		arrNorms(i - 1) = nNormID
	Next

	On Error Resume Next
	nResult = objNSNET.DeletePayNorms(arrNorms)
	TestError obLanguage("EM","kCantDeletePayNorms")
ElseIf strAct = "deleteAll" Then
	On Error Resume Next

	nResult = objNSNET.DeletePayNormTable(strPNID)
	TestError obLanguage("EM","kCantDeletePayNormTable")

	If nResult = -1 Then
		GenerateError obLanguage("EM","kCantDeletePayNormTable") & vbCrLf & obLanguage("EM","kPayNormTableIsUsed")
	Else
		Call obTokenMgr.SetData(strToken, stPayNormID, Null)
	End If
ElseIf strAct = "save" Then
	nStart_Month = GetSafeLngInRange(Request("Start_Month"), 1, 12)
	nStart_Year = GetSafeLng(Request("Start_Year"), Null)
	dtStart = DateSerial(nStart_Year, nStart_Month, 1)
	strRuleResol = GetSafeStr(Request("RuleResol"), -1, Null)

	dtUsedMaxPrev = Null
	dtUsedMinThis = Null

	If bNewTable Then
		On Error Resume Next
		strPNID = objNSNET.CreatePayNormTable(strEMID, strPNID_Prev, strRuleResol, dtStart, dtUsedMaxPrev)

		TestError obLanguage("EM","kCantCreatePayNormTable")
		If strPNID = -1 Then
			GenerateError obLanguage("EM","kCantCreatePayNormTable") & vbCrLf & obLanguage("EM","kErrStartDate_LaterUsedPrevTable")  & " (" & Date2Str(dtUsedMaxPrev) & ")"
		End If

		Call obTokenMgr.SetData(strToken, stPayNormID, strPNID)
	Else
		nCount = Request("NormID").Count
		ReDim arrNorms(5, nCount - 1)

		nValInd = 0
		For i = 1 To nCount
			nNormID = GetSafeID(Request("NormID")(i), Null)
			strAbbrev = GetSafeStr(Request("Abbrev")(i), -1, Null)
			strComment = GetSafeStr(Request("Comment")(i), -1, Null)

			bUsed = (CStr(Request("USED")(i)) = "1")
			If bUsed Then
				strNormVal = "-1"
				strAverVal = "-1"
				nNoAttendance = 0
			Else
				nValInd = nValInd + 1
				strNormVal = GetSafeStr(Request("NormVal")(nValInd), -1, Null)
				strAverVal = GetSafeStr(Request("AverVal")(nValInd), -1, Null)
				nNoAttendance = GetSafeLng(Request("NoAttendance_" & nNormID), 0)
			End If

			arrNorms(0, i - 1) = nNormID
			arrNorms(1, i - 1) = strAbbrev
			arrNorms(2, i - 1) = CDbl(strNormVal)
			arrNorms(3, i - 1) = CDbl(strAverVal)
			arrNorms(4, i - 1) = strComment
			arrNorms(5, i - 1) = nNoAttendance
		Next

		On Error Resume Next
		nResult = objNSNET.EditPayNormTable(strPNID, strPNID_Prev, strRuleResol, dtStart, arrNorms, dtUsedMaxPrev, dtUsedMinThis)
		TestError obLanguage("EM","kCantEditPayNormTable")

		If nResult = -1 Then
			GenerateError obLanguage("EM","kCantEditPayNormTable") & vbCrLf & obLanguage("EM","kErrStartDate_LaterUsedPrevTable")  & " (" & Date2Str(dtUsedMaxPrev) & ")"
		ElseIf nResult = -2 Then
			GenerateError obLanguage("EM","kCantEditPayNormTable") & vbCrLf & obLanguage("EM","kErrStartDate_NotLaterUsedTable")  & " (" & Date2Str(dtUsedMinThis) & ")"
		End If
	End If
ElseIf strAct = "add" Then
	strAbbrev_New = GetSafeStr(Request("Abbrev_New"), -1, "")
	strNormVal_New = GetSafeStr(Request("NormVal_New"), -1, "")
	strAverVal_New = GetSafeStr(Request("AverVal_New"), -1, "")
	strComment_New = GetSafeStr(Request("Comment_New"), -1, "")
	nNoAttendance_New = GetSafeLng(Request("NoAttendance_New"), 0)

	If bNewTable Then
		On Error Resume Next

		nStart_Month	= GetSafeLngInRange(Request("Start_Month"), 1, 12)
		nStart_Year		= GetSafeLng(Request("Start_Year"), Null)
		dtStart			= DateSerial(nStart_Year, nStart_Month, 1)
		strRuleResol	= GetSafeStr(Request("RuleResol"), -1, Null)
		dtUsedMaxPrev	= Null

		strPNID = objNSNET.CreatePayNormTable(strEMID, strPNID_Prev, strRuleResol, dtStart, dtUsedMaxPrev)

		TestError obLanguage("EM","kCantCreatePayNormTable")
		If strPNID = -1 Then
			GenerateError obLanguage("EM","kCantCreatePayNormTable") & vbCrLf & obLanguage("EM","kErrStartDate_LaterUsedPrevTable")  & " (" & Date2Str(dtUsedMaxPrev) & ")"
		End If

		Call obTokenMgr.SetData(strToken, stPayNormID, strPNID)
	End If

	Call objNSNET.CreatePayNorm(strPNID, strAbbrev_New, CDbl(strNormVal_New), CDbl(strAverVal_New), strComment_New, nNoAttendance_New)
	TestError "Невозможно добавить новый норматив"
Else
	GenerateError obLanguage("Common","kInvalidParameter")
End If

If strAct = "deleteAll" Then
	Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("EM","kPayNormTableWasDelete")))
	RedirectTo "PayNorms.asp?", Null
Else
	If strAct = "delete" Then
		Call obTokenMgr.SetData(strToken, stWasSaved, CStr(obLanguage("EM","kPayNormsWasDelete")))
		RedirectTo "EditPayNorm.asp?", Null
	ElseIf strAct = "save" Then
		Call WriteJsonResult(obLanguage("EM","kPayNormTableWasSaved"), False, 0)
	Else
		Call obTokenMgr.SetData(strToken, stWasSaved, "Норматив был успешно добавлен")
		RedirectTo "EditPayNorm.asp?", Null
	End If
End If%>