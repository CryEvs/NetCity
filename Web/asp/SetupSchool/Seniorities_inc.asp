<!-- #INCLUDE file="SchoolSettings_inc.asp" -->

<% ' © 2007-2008 IRTech. All rights reserved.

Const kDaysInYear = 365
Const kDaysInMonth = 30.42
Const kEps = 0.000001

Const kIndName = 0
Const kIndType = 1
Const kIndID = 2
Const kIndStart = 3
Const kIndEnd = 4
Const kIndAbbr = 5

Dim dtSeniorityOn

Function checkRights(strStaffID)
	Dim objInfo, strLoginName, bLoginName_ADMIN

	strStaffID = GetSafeID(Request("UID"), Null)
	If Not HasUserRight(arUsersEditStaff) Then checkRights = False: Exit Function
	If strStaffID <> strUserID Then
		Set objInfo = objNSNET.GetUserInfo(strStaffID)
		If objInfo.EOF Then GenerateError obLanguage("Common","kInvalidParameter")
		strLoginName = objInfo("LOGINNAME")
		bLoginName_ADMIN = (UCase(strLoginName)=ADMIN_NAME)
		If bLoginName_ADMIN Then
			Call InitSchoolSettings( objNSNET )
			If arrSchoolSettings(1, kSSIndex_AdminEdit) <> "1" Then
				 checkRights = False
				 Exit Function
			End If
		End If
	End If
	checkRights = True
End	Function

Function GetSenArray(objRs)
	Dim arrRs, nCount, i
	Dim indSen, indType, strPrevType, strCurType
	Dim arrSen, arrSenForType

	arrRs = objRs.GetRows(,, Array("TYPENAME", "TYPEID", "SENID", "STARTDATE", "ENDDATE", "TYPEABBR"))
	nCount = Ubound(arrRs,2)
	ReDim arrSen(4, nCount)

	indSen = -1
	indType = -1
	strPrevType = ""
	For i = 0 To nCount
		strCurType = GetSafeID(arrRs(kIndType, i), Null)
		If strCurType <> strPrevType Then
			If indSen > -1 And indType > -1 Then
				ReDim Preserve arrSenForType(2, indSen)
				If IsEmpty(arrSenForType(0, indSen)) Then
					arrSen(2, indType) = Empty
				Else
					arrSen(2, indType) = arrSenForType
				End If
			End If
			indType = indType + 1
			arrSen(0, indType) = strCurType
			arrSen(1, indType) = GetSafeStr(arrRs(kIndName, i), -1, Null)
			arrSen(4, indType) = GetSafeStr(arrRs(kIndAbbr, i), -1, Null)
			ReDim arrSenForType(2, nCount)
			indSen = -1
			strPrevType = strCurType
		End If
		indSen = indSen + 1
		If IsDull(arrRs(kIndID, i)) Then
			arrSenForType(0, indSen) = Empty
		Else
			arrSenForType(0, indSen) = GetSafeID(arrRs(kIndID, i), Null)
			arrSenForType(1, indSen) = CDate(arrRs(kIndStart, i))
			If IsDull(arrRs(kIndEnd, i)) Then
				arrSenForType(2, indSen) = Null
			Else
				arrSenForType(2, indSen) = CDate(arrRs(kIndEnd, i))
			End If
		End If
	Next

	If indSen > -1 And indType > -1 Then
		ReDim Preserve arrSenForType(2, indSen)
		If IsEmpty(arrSenForType(0, indSen)) Then
			arrSen(2, indType) = Empty
		Else
			arrSen(2, indType) = arrSenForType
		End If
	End If

	ReDim Preserve arrSen(4, indType)
	GetSenArray = CalcSenTotals(arrSen) 'arrSen
End Function

' формирует arrSen(3, i) - сумму отрезков стажей по типам, в годах/месяцах/днях
Function CalcSenTotals(arrSen)
	Dim nTotalDays, nDayDiff
	Dim dtStart, dtEnd
	Dim arrTotals, arrSenForType
	Dim i, j
	Dim nYears, nMonths, nDays
	Dim nCnt, bActaulData
	Dim rsYear

	If objNSNET.IsYearClosed(strCurrYearID) Then
'		Call CalcCurrYearLimits(dtStart, dtSeniorityOn)
		Set rsYear = objNSNET.GetYearInfo(strCurrYearID)
		dtSeniorityOn = rsYear("ENDDATE")
	Else
		dtSeniorityOn = NSNow()
		dtSeniorityOn = DateSerial(Year(dtSeniorityOn), Month(dtSeniorityOn), Day(dtSeniorityOn)) ' normalize
	End If

	For i = 0 To Ubound(arrSen, 2)
		arrSenForType = arrSen(2, i)
		If IsEmpty(arrSenForType) Then
			arrSen(3, i) = Empty
		Else
			ReDim arrTotals(2)
			nTotalDays = 0
			bActaulData = False
			For j = 0 To Ubound(arrSenForType, 2)
				dtStart = arrSenForType(1, j)
				If DateDiff("d", dtStart, dtSeniorityOn, 0, 0) >= 0 Then

					bActaulData = True
					dtEnd = arrSenForType(2, j)
					If IsDull(dtEnd) Then
						dtEnd = dtSeniorityOn
					Else
						If DateDiff("d", dtEnd, dtSeniorityOn, 0, 0) < 0 Then
							dtEnd = dtSeniorityOn
						End If
					End If
					nDayDiff = DateDiff("d", dtStart, dtEnd, 0, 0) + 1
'					nDayDiff = DateDiff("d", dtStart, dtEnd, 0, 0) ' если указывать промежутки прямо друг за другом, то по сравнению с одним общим для них промежутком этот вариант даст отличный результат, а предыдущий - одинаковые результаты.
					If nDayDiff > 0 Then
						nTotalDays = nTotalDays + nDayDiff
					End If
				End If
			Next

			If Not bActaulData Then
				arrSen(3, i) = Empty
			Else
				nYears = Fix(nTotalDays / kDaysInYear)
				nTotalDays = nTotalDays - Fix(nYears / 4) ' отнимаем кол-во четвёрок лет от общего кол-ва дней, так пытаемся учесть високосные/невисокосные года.
				nYears = Fix(nTotalDays / kDaysInYear) ' снова пересчитываем кол-во лет

				nCnt = nTotalDays Mod kDaysInYear
				nMonths = Fix(nCnt / kDaysInMonth)
'				nDays = nCnt Mod kDaysInMonth ' ... Mod Round(kDaysInMonth) realy!
				nDays = Round(ModEx(nCnt, kDaysInMonth))

				arrTotals(0) = nYears
				arrTotals(1) = nMonths
				arrTotals(2) = nDays

				arrSen(3, i) = arrTotals
			End If
		End If
	Next
	CalcSenTotals = arrSen	
End Function

Function ModEx(n1, n2)
	If Abs(n1) < kEps Or Abs(n2) < kEps Then
		ModEx = 0
		Exit Function
	End If
	ModEx = n1 - n2 * Fix(n1 / n2)	
End Function
%>
