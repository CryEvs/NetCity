<% ' © 2007-2012 IRTech. All rights reserved.
' NOTE: This file should be included before onDrawPage() sub and after end of the onHead() sub

Function GetFormFieldName(nSection, nRow, nCol)
	On Error Resume Next
	If InStr(nSection, ".") > 0 Then
		GetFormFieldName = "T" & nSection & LPad2(nRow) & LPad2(nCol)
	Else
		GetFormFieldName = "T" & LPad2(nSection) & LPad2(nRow) & LPad2(nCol)
	End If
	TestError(obLanguage("SchoolInfo","kErrorSchoolInfo"))
End Function
	
Function GetFormName()
	Select Case bFormSpec
		Case FormSpecific_GOU
			GetFormName = obLanguage("EMReportNames","kForm76")
		Case FormSpecific_NOU
			GetFormName = obLanguage("EMReportNames","kForm76NOU")
		Case FormSpecific_InternatsGOU
			GetFormName = obLanguage("EMReportNames","kForm76InternatsGOU")
		Case FormSpecific_InternatsNOU
			GetFormName = obLanguage("EMReportNames","kForm76InternatsNOU")
		Case FormSpecific_KMNS
			GetFormName = obLanguage("EMReportNames","kForm76MNS")
	End Select
End Function

Function GetSourceFormId()
	GetSourceFormId = StatForm_OSH1
End Function

Function GetFormId()
	GetFormId = 76
End Function

Function GetSchoolsListByForms(objList)
	Dim arrCounts
	Dim nSettlementType
	Dim nRowNum, nAddRowNum

	Redim arrCounts(20,2)
	While Not objList.EOF
		If objList("SETTLEMENTTYPEID") = 1 Then nSettlementType = 2 Else nSettlementType = 1
		nRowNum = FormID2RowNum(CInt(objList("EOFORMID")), nAddRowNum)
		If nRowNum >=0 Then
			arrCounts(nRowNum, nSettlementType) = arrCounts(nRowNum, nSettlementType) + 1
			If nAddRowNum >=0 Then
				arrCounts(nAddRowNum, nSettlementType) = arrCounts(nAddRowNum, nSettlementType) + 1
			End If
		End If
		objList.MoveNext
	Wend
	GetSchoolsListByForms = arrCounts
End Function

' Ф-ция делает соответствие между EOFORMID и номером строки в разделе 1.1
' Это соответствие берётся за основу, в других разделах соответствие несколько нарушается, там оно подправляется.
' Используется в форме 76-Рик.
Function FormID2RowNum(nFormID, ByRef nAddRowNum)
	Dim nRowNum

	nRowNum = -1
	nAddRowNum = -1
	Select Case nFormID
		Case 7,8,9
			nRowNum = 2
		Case 18,19,20,21,22,23,24,25,26
			'nRowNum = 3 - это суммарная строка!
			Select Case nFormID
				Case 18
					nRowNum = 4
				Case 19
					nRowNum = 5
				Case 20
					nRowNum = 6
				Case 21
					nRowNum = 8
				Case 22,25
					nRowNum = 9
				Case 23,26
					nRowNum = 10
				Case 24
					nRowNum = 6
			 End Select
		Case 28,29
			nRowNum = 11
		Case 27
			nRowNum = 12
		Case 34,35,36,37,38
			nRowNum = 16
		Case 39,40
			nRowNum = 14
		Case 41,42,43,44,45
			nRowNum = 13
		Case 51,52,53
			nRowNum = 15
		Case 46,47,48,49,50,53
			nAddRowNum = 17
			Select Case nFormID
				Case 46
					nRowNum = 2
				Case 47,48
					nRowNum = 6
				Case 49,50
					nRowNum = 13
			 End Select
	End Select

	FormID2RowNum = nRowNum
End Function

Function IsMns()
	IsMns = (bFormSpec = 5)
End Function%>
<script> 
<!--
function GetParameterName(nSection, nRow, nCol) {
	if (typeof(nSection) == 'string' && nSection.indexOf('.') > 0) {
		nSection = nSection.replace('.', '\\.');
	}
	else {
		nSection = lpad(nSection, 2);
	}
	if (nCol == null)
		return 'T' + nSection + lpad(nRow, 2);
	else
		return 'T' + nSection + lpad(nRow, 2) + lpad(nCol, 2);
}
//--></script>
