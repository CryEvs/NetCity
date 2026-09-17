<% ' © 2007-2008 IRTech. All rights reserved.

Const kTermStart_Quarter_1	= #1 September#
Const kTermStart_Quarter_2	= #11 November#
Const kTermStart_Quarter_3	= #13 January#
Const kTermStart_Quarter_4	= #1 April#
'Const kTermEnd_Quarter_1	= #10	 November#
'Const kTermEnd_Quarter_2	= #12 January#
'Const kTermEnd_Quarter_3	= #30 March#
'Const kTermEnd_Quarter_4	= #31 May#

Const kTermStart_OneThird_1	= #1 September#
Const kTermStart_OneThird_2	= #1 December#
Const kTermStart_OneThird_3	= #1 March#
'Const kTermEnd_OneThird_1	= #31 November#
'Const kTermEnd_OneThird_2	= #28 February#
'Const kTermEnd_OneThird_3	= #31 May#
Const kTermsEnd	= #31 May#

Function MakeTermDate(ByVal nYear, ByVal dtTerm)
	MakeTermDate = DateSerial(nYear, Month(dtTerm), Day(dtTerm))
End Function

Sub RecalcTermsRanges(ByRef arrTermsRanges)
	Dim dtStart, dtEnd, nUbound2, nLength, i

	nUbound2 = Ubound(arrTermsRanges, 2)
	dtStart = arrTermsRanges(0, 0)
	dtEnd = arrTermsRanges(1, nUbound2)

	nLength = DateDiff("d", dtStart, dtEnd, 0, 0) / (nUbound2 + 1)
	For i = 1 To nUbound2
		arrTermsRanges(0, i) = DateAdd("d", i * nLength, dtStart)
		arrTermsRanges(1, i-1) = DateAdd("d", - 1, arrTermsRanges(0, i))
	Next
End Sub

Sub InsertTerms_WT(transaction, ByVal nTermTypeID, ByVal nTermsCount, ByVal strSchYearID, ByVal dtYearStart, ByVal dtYearEnd)
	Dim dtTemp
	Dim arrTermsRanges, i
	Dim nYearStart, nYearEnd
	Dim bRecalcAll

	nYearStart = Year(dtYearStart)
	nYearEnd = Year(dtYearEnd)

	bRecalcAll = (nYearEnd - nYearStart <> 1)

	' arrTermsRanges(0, i) term start; (1, i) term end
	ReDim arrTermsRanges(1, nTermsCount - 1)
	arrTermsRanges(0, 0) = dtYearStart
	arrTermsRanges(1, nTermsCount - 1) = dtYearEnd

	If Not bRecalcAll Then
		If nTermTypeID = 1 Then
			arrTermsRanges(0, 0) = MakeTermDate(nYearStart, kTermStart_Quarter_1)
			If DateDiff("d", arrTermsRanges(0, 0), dtYearStart, 0, 0) > 0 Then arrTermsRanges(0, 0) = dtYearStart
			arrTermsRanges(1, 3) = MakeTermDate(nYearEnd, kTermsEnd)
			If DateDiff("d", arrTermsRanges(1, 3), dtYearEnd, 0, 0) < 0 Then arrTermsRanges(1, 3) = dtYearEnd

			arrTermsRanges(0, 1) = MakeTermDate(nYearStart, kTermStart_Quarter_2)
			arrTermsRanges(1, 0) = DateAdd("d", -1, arrTermsRanges(0, 1))
			If DateDiff("d", arrTermsRanges(1, 0), arrTermsRanges(0, 0), 0, 0) >= 0 Then
				bRecalcAll = True
			Else
				arrTermsRanges(0, 3) = MakeTermDate(nYearEnd, kTermStart_Quarter_4)
				If DateDiff("d", arrTermsRanges(0, 3), arrTermsRanges(1, 3), 0, 0) <= 0 Then
					bRecalcAll = True
				Else
					arrTermsRanges(0, 2) = MakeTermDate(nYearEnd, kTermStart_Quarter_3)
					arrTermsRanges(1, 1) = DateAdd("d", -1, arrTermsRanges(0, 2))
					arrTermsRanges(1, 2) = DateAdd("d", -1, arrTermsRanges(0, 3))
				End If
			End If
		ElseIf nTermTypeID = 2 Then
			arrTermsRanges(0, 0) = MakeTermDate(nYearStart, kTermStart_OneThird_1)
			If DateDiff("d", arrTermsRanges(0, 0), dtYearStart, 0, 0) > 0 Then arrTermsRanges(0, 0) = dtYearStart
			arrTermsRanges(1, 2) = MakeTermDate(nYearEnd, kTermsEnd)
			If DateDiff("d", arrTermsRanges(1, 2), dtYearEnd, 0, 0) < 0 Then arrTermsRanges(1, 2) = dtYearEnd

			arrTermsRanges(0, 1) = MakeTermDate(nYearStart, kTermStart_OneThird_2)
			arrTermsRanges(1, 0) = DateAdd("d", -1, arrTermsRanges(0, 1))
			If DateDiff("d", arrTermsRanges(1, 0), arrTermsRanges(0, 0), 0, 0) >= 0 Then
				bRecalcAll = True
			Else
				arrTermsRanges(0, 2) = MakeTermDate(nYearEnd, kTermStart_OneThird_3)
				If DateDiff("d", arrTermsRanges(0, 2), arrTermsRanges(1, 2), 0, 0) <= 0 Then
					bRecalcAll = True
				Else
					arrTermsRanges(1, 1) = DateAdd("d", -1, arrTermsRanges(0, 2))
				End If
			End If
		ElseIf nTermTypeID = 3 Then
			arrTermsRanges(0, 0) = MakeTermDate(nYearStart, kTermStart_Quarter_1)
			If DateDiff("d", arrTermsRanges(0, 0), dtYearStart, 0, 0) > 0 Then arrTermsRanges(0, 0) = dtYearStart
			arrTermsRanges(1, 1) = MakeTermDate(nYearEnd, kTermsEnd)
			If DateDiff("d", arrTermsRanges(1, 1), dtYearEnd, 0, 0) < 0 Then arrTermsRanges(1, 1) = dtYearEnd

			arrTermsRanges(0, 1) = MakeTermDate(nYearEnd, kTermStart_Quarter_3)
			arrTermsRanges(1, 0) =DateAdd("d", -1, arrTermsRanges(0, 1))
			If DateDiff("d", arrTermsRanges(1, 0), arrTermsRanges(0, 0), 0, 0) >= 0 Then
				bRecalcAll = True
			Else
				If DateDiff("d", arrTermsRanges(0, 1), arrTermsRanges(1, 1), 0, 0) <= 0 Then bRecalcAll = True
			End If
		Else
			' non default type, it is allowed now
			bRecalcAll = True
		End If
	End If

	If bRecalcAll Then Call RecalcTermsRanges(arrTermsRanges)
	Call objNSNET.CreateTerms_WT(transaction, strSchYearID, nTermTypeID, arrTermsRanges)
End Sub

' Call this Sub inside Transaction!

Sub UpdateSchoolsTermTypes_WT(transaction, dctTermTypes)
	Dim nProfileID, arrGradeSet
	Dim objRs
	Dim arrTermInfo, i, no, nCount
	Dim dtYearStart, dtYearEnd

	Set objRs = objNSNET.GetYearInfo(strCurrYearId)
	If objRS.EOF Then GenerateErrorWithTransaction transaction,obLanguage("Common","kUnexpErr")
	dtYearStart = objRs("STARTDATE")
	dtYearEnd = objRs("ENDDATE")
	nCount = 0
	For Each nProfileID In dctTermTypes
		arrGradeSet = dctTermTypes(nProfileID)
		nCount = nCount + UBound(arrGradeSet, 2) + 1
	Next

	ReDim arrTermInfo(2, nCount-1)
	no = 0
	For Each nProfileID In dctTermTypes
		arrGradeSet = dctTermTypes(nProfileID)
		For i = 0 To UBound(arrGradeSet, 2)
			arrTermInfo(0,no) = nProfileID
			arrTermInfo(1,no) = arrGradeSet(0, i)
			arrTermInfo(2,no) = arrGradeSet(1, i)
			no = no + 1
		Next
	Next
	Set objRs = objNSNET.SetSchoolTermTypes_WT(transaction, strCurrYearId, arrTermInfo)
	If Not objRs Is Nothing Then
		While Not objRs.EOF
			Call InsertTerms_WT(transaction, objRs("TermTypeID"), objRs("TermsCount"), strCurrYearId, dtYearStart, dtYearEnd)
			objRs.MoveNext
		WEnd
		objRs.Close
	End If
	Call objNSNET.ValidateClasses_WT(transaction, strCurrYearId)
End Sub
%>
