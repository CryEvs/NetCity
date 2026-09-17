<!-- #INCLUDE VIRTUAL="/asp/headernoscreen.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Dim dtStartMonth, nNumMonth
Dim strStudID, nStudCnt
Dim arrParentPay
Dim nRealNormCount
Dim strAC_Name, strNorm_Name
Dim nNormCount, arrNorms, nAC, strNormID
Dim strPayVal_Name, strPayVal
Dim i, j
Dim strPayNormID, nOutDept
Dim strParentID, strParentID_Name
Dim nRes
Dim strClassID, bOutDebt

strClassID = GetSafeID(Request("PCLID"), Null)
bOutDebt = (strClassID = "-1")

dtStartMonth = obTokenMgr.GetData(strToken, stParentPayStartMonth)
If Not IsDate(dtStartMonth) Then
	GenerateError obLanguage("Common","kInvalidParameter")
End If

nNumMonth = GetSafeLng(obTokenMgr.GetData(strToken, stParentPayNumMonth), Null)
If nNumMonth < 1 Then
	GenerateError obLanguage("Common","kInvalidParameter")
End If

nStudCnt = Request("StudID").Count
If nStudCnt = 0 Then
	GenerateError obLanguage("Common","kInvalidParameter")
End If

nOutDept = IIf(bOutDebt, 1, 0)
strPayNormID = GetSafeID(Request("PayNormID"), Null)
ReDim arrParentPay(7, nStudCnt - 1)
' 2015_03_04. Новая родительская плата.
' Добавляем ещё 3 значения, с индексами:
' 5 - Коррекция
' 6 - Стоимость 1 дня, из последнего норматива, для выбывших выпускников, нужно для расчёта "К компенсации" (для обычных - считается в компоненте)
' 7 - Средний размер за 1 день, из последнего норматива, для выбывших выпускников, нужно для расчёта "К компенсации" (для обычных - считается в компоненте)
For i = 1 To nStudCnt
	strStudID = GetSafeID(Request("StudID")(i), Null)
	arrParentPay(0, i - 1) = strStudID

	nRealNormCount = 0
	If Not bOutDebt Then
		strAC_Name = "AC_" & strStudID
		strNorm_Name = "Norm_" & strStudID
		nNormCount = Request(strAC_Name).Count
		ReDim arrNorms(1, nNormCount - 1)
		For j = 1 To nNormCount
			nAC = GetSafeLng(Request(strAC_Name)(j), -1)
			If nAC > -1 Then
				strNormID = GetSafeID(Request(strNorm_Name)(j), Null)
				If strNormID = "0" Then
					GenerateError obLanguage("Common","kInvalidParameter")
				End If

				arrNorms(0, nRealNormCount) = nAC
				arrNorms(1, nRealNormCount) = strNormID
				nRealNormCount = nRealNormCount + 1
			End If
		Next
	End If

	If nRealNormCount = 0 Then
		arrParentPay(1, i - 1) = Empty
	Else
		ReDim Preserve arrNorms(1, nRealNormCount - 1)
		arrParentPay(1, i - 1) = arrNorms
	End If

	strPayVal_Name = "PayVal_" & strStudID
	strPayVal = Request(strPayVal_Name) & ""
	If nRealNormCount = 0 And strPayVal = "" Then
		arrParentPay(2, i - 1) = 0
		arrParentPay(3, i - 1) = 1 ' delete flag
	Else
		arrParentPay(2, i - 1) = CDbl(strPayVal)
		arrParentPay(3, i - 1) = 0 ' delete flag
	End If

	strParentID_Name = "ParentID_" & strStudID
	strParentID = GetSafeID(Request(strParentID_Name), "0")
	arrParentPay(4, i - 1) = strParentID

	arrParentPay(5, i - 1) = FormParamVal2DblVal("Correction_" & strStudID)
	If bOutDebt Then
		arrParentPay(6, i - 1) = FormParamVal2DblVal("LastNorm_" & strStudID)
		arrParentPay(7, i - 1) = FormParamVal2DblVal("LastAver_" & strStudID)
	Else
		arrParentPay(6, i - 1) = 0 ' not used
		arrParentPay(7, i - 1) = 0 ' not used
	End If
Next

On Error Resume Next
nRes = objNSNET.SaveParentPay(strCurrYearID, dtStartMonth, nNumMonth, strPayNormID, nOutDept, arrParentPay)
TestError obLanguage("Grade","kErrCantSaveParentPay")
If nRes = -1 Then
	GenerateError obLanguage("Grade","kErrCantSaveParentPay") & " " & obLanguage("Grade","kErrPayNormsOutOfMonth")
End If

RedirectTo "ParentPay.asp", Null

Function FormParamVal2DblVal(strParamName)
	Dim strParamVal
	strParamVal = Request(strParamName) & ""
	If strParamVal = "" Then
		FormParamVal2DblVal = 0
	Else
		FormParamVal2DblVal = CDbl(strParamVal)
	End If
End Function
%>
