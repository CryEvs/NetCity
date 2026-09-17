<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->
<!-- #INCLUDE FILE="../../Form_autocalc_inc.asp" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	SumRowAllColsByIndex(1, 1, 3, 6, [6,7,8,9]);
	SumRowAllColsByIndex(1, 10, 3, 6, [11,12]);
	SumRowAllColsByIndex(1, 14, 3, 6, [1,13]);
	SumRowAllColsByIndex(1, 18, 4, 6, [14,16]);
	ValidateIncludedRows(1, 1, [2,3,4,5], 3, 4);
	ValidateIncludedRows(1, 14, [15], 3, 6);
	ValidateIncludedRows(1, 16, [17], 3, 6);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc( )
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo( )
	Dim objCityRes, objProvinceRes
	Dim i, j
	Dim arrAssignments,arrFOSchoolsCounts
	ReDim arrAssignments(19,7)
	Dim arrSchoolsCounts
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	arrSchoolsCounts = GetSplitEOCountSchools()
	For i = 6 to 9
		Call SetLoadedRIKValue( "T01" & LPad2(i) & "03" , arrSchoolsCounts((i-4),1))
	Next
	Call SetLoadedRIKValue( "T011303", arrSchoolsCounts(6,1))
	Call SetLoadedRIKValue( "T011503", arrSchoolsCounts(1,2))

	arrSchoolsCounts=CalcStringValue()
	For i = 2 to 5
		Call SetLoadedRIKValue( "T01" & LPad2(i) & "03" , arrSchoolsCounts((i-2),0))
		Call SetLoadedRIKValue( "T01" & LPad2(i) & "04" , arrSchoolsCounts((i-2),1))
	Next

	call GetEOSumValuesForEOTypesAndEOForms("T010604", sourceFormId, 3, 7, 8, Empty, Array(8), Array(30))
	call GetEOSumValuesForEOTypesAndEOForms("T010704", sourceFormId, 3, 7, 8, Empty, Array(8), Array(33))
	call GetEOSumValuesForEOTypesAndEOForms("T010804", sourceFormId, 3, 7, 8, Empty, Array(8), Array(32))
	call GetEOSumValuesForEOTypesAndEOForms("T010904", sourceFormId, 3, 7, 8, Empty, Array(8), Array(31))

	call GetSplitEOSumValuesForEOTypes("", "T011504", sourceFormId, 3, 7, 8, Empty, Array(8))

	call GetEOSumValuesForEOTypesAndEOForms("T010605", sourceFormId, 2, 1, 3, Empty, Array(8), Array(30))
	call GetEOSumValuesForEOTypesAndEOForms("T010705", sourceFormId, 2, 1, 3, Empty, Array(8), Array(33))
	call GetEOSumValuesForEOTypesAndEOForms("T010805", sourceFormId, 2, 1, 3, Empty, Array(8), Array(32))
	call GetEOSumValuesForEOTypesAndEOForms("T010905", sourceFormId, 2, 1, 3, Empty, Array(8), Array(31))

	call GetSplitEOSumValuesForEOTypes("", "T011505", sourceFormId, 2, 1, 3, Empty, Array(8))

	call GetEOSumValuesForEOTypesAndEOForms("T010606", sourceFormId, 2, 2, 3, Empty, Array(8), Array(30))
	call GetEOSumValuesForEOTypesAndEOForms("T010706", sourceFormId, 2, 2, 3, Empty, Array(8), Array(33))
	call GetEOSumValuesForEOTypesAndEOForms("T010806", sourceFormId, 2, 2, 3, Empty, Array(8), Array(32))
	call GetEOSumValuesForEOTypesAndEOForms("T010906", sourceFormId, 2, 2, 3, Empty, Array(8), Array(31))

	call GetSplitEOSumValuesForEOTypes("", "T011506", sourceFormId, 2, 2, 3, Empty, Array(8))

	call GetEOSumValuesForEOTypes("T011304", sourceFormId, 3, 7, 8, Empty, Array(11))
	call GetEOSumValuesForEOTypes("T011305", sourceFormId, 2, 1, 3, Empty, Array(11))
	call GetEOSumValuesForEOTypes("T011306", sourceFormId, 2, 2, 3, Empty, Array(11))

	arrSchoolsCounts=CalcDEOValue()
	For i = 3 to 6
		Call SetLoadedRIKValue( "T0116" & LPad2(i) , arrSchoolsCounts((i-3),0))
		Call SetLoadedRIKValue( "T0117" & LPad2(i) , arrSchoolsCounts((i-3),1))
	Next
End Sub

Function CalcStringValue()
	Dim objCityRS,objProvinceRes,arrCounts
	Redim arrCounts(3,1)
	Dim strValue
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	'Array("T0002","T030704","T030706","T060303","T030707",""), 
	Set objCityRS = GetPivot(strEMID, strCommonYearID, sourceFormId, _
			Array( _
				GetFormParameter(sourceFormId, 0, 1, 2, Null), _
				GetFormParameter(sourceFormId, 3, 7, 4, Null), _
				GetFormParameter(sourceFormId, 3, 7, 6, Null), _
				GetFormParameter(sourceFormId, 3, 7, 7, Null)), _
			Array(8), Empty, False)

	While Not objCityRS.EOF
		strValue= GetSafeStr(objCityRS("VALUE"), -1, "")
		If strValue <> "" Then
			strValue = UCase(strValue)
			If strValue = "ОЧНОЙ" Then
				arrCounts(0,0) = arrCounts(0,0) + 1
				arrCounts(0,1) = arrCounts(0,1) + GetSafeLng(objCityRS("VALUE1"), 0)
				arrCounts(3,1) = arrCounts(3,1) + GetSafeLng(objCityRS("VALUE3"), 0)
			ElseIf strValue = "ЗАОЧНОЙ" Then
				arrCounts(2,0) = arrCounts(2,0) + 1 
				arrCounts(2,1) = arrCounts(2,1) + GetSafeLng(objCityRS("VALUE2"), 0)
				arrCounts(3,1) = arrCounts(3,1) + GetSafeLng(objCityRS("VALUE3"), 0)
			ElseIf strValue = "ОЧНОЙ И ЗАОЧНОЙ" Then
				arrCounts(1,0) = arrCounts(1,0) + 1
				arrCounts(1,1) = arrCounts(1,1) + GetSafeLng(objCityRS("VALUE1"), 0) + GetSafeLng(objCityRS("VALUE2"), 0)
				arrCounts(3,1) = arrCounts(3,1) + GetSafeLng(objCityRS("VALUE3"), 0)
			ElseIf strValue = "ЭКСТЕРНАТНОЙ" then  
				arrCounts(3,0) = arrCounts(3,0) + 1
				arrCounts(0,1) = arrCounts(0,1) + GetSafeLng(objCityRS("VALUE1"), 0)
				arrCounts(2,1) = arrCounts(2,1) + GetSafeLng(objCityRS("VALUE2"), 0)
				arrCounts(3,1) = arrCounts(3,1) + GetSafeLng(objCityRS("VALUE3"), 0)
			End If
		End If

		objCityRS.MoveNext
	Wend	
	CalcStringValue=arrCounts
End Function

Function CalcDEOValue()
	'Подсчет для дневных ОУ(2,5,7,10,11,13)
	Dim objCityRS,objProvinceRes,ArrValue
	Dim Matches,i,Match,strRelativeString
	Dim regeDEO,value
	Dim sourceFormId

	ReDim ArrValue(4,1)

	set regeDEO = New RegExp
	regeDEO.Pattern = "(отдельные классы)|(УКП)"
	regeDEO.Global = True
	regeDEO.IgnoreCase = True

	sourceFormId = GetSourceFormId()

	'Call objNSNET.ValueSimpleEMParameter(strEMID, strCommonYearID, Array("T0004","T030708","T060303","T0201","T0202"), "2,5,7,10,11,13", "",False,true,objCityRS, objProvinceRes )
	Call GetSplittedPivot(strEMID, strCommonYearID, sourceFormId, _
			Array( _
				GetFormParameter(sourceFormId, 0, 1, 4, Null), _
				GetFormParameter(sourceFormId, 3, 7, 8, Null), _
				GetFormParameter(sourceFormId, 2, 1, 3, Null), _
				GetFormParameter(sourceFormId, 2, 2, 3, Null)), _
			Array(2,5,7,10,11,13), Empty, False, objCityRS, objProvinceRes)

	While Not objProvinceRes.EOF
		If Not IsDull(objProvinceRes("VALUE")) Then
			value = Cstr(objProvinceRes("VALUE"))
			Set Matches = regeDEO.Execute(value)
			For Each Match in Matches
				strRelativeString = Trim(Match.Value)
				If (strRelativeString<>"") Then
					ArrValue(0,1) = ArrValue(0,1) + 1
					ArrValue(1,1) = ArrValue(1,1) + GetSafeLng(objProvinceRes("VALUE1"), 0)
					ArrValue(2,1) = ArrValue(2,1) + GetSafeLng(objProvinceRes("VALUE2"), 0)
					ArrValue(3,1) = ArrValue(3,1) + GetSafeLng(objProvinceRes("VALUE3"), 0)
				End If
			Next
		End If
		objProvinceRes.MoveNext
	Wend
	ArrValue(0,0) = ArrValue(0,1)
	ArrValue(1,0) = ArrValue(1,1)
	ArrValue(2,0) = ArrValue(2,1)
	ArrValue(3,0) = ArrValue(3,1)

	While Not objCityRS.EOF
		If Not IsDull(objCityRS("VALUE")) Then
			value = Cstr(objCityRS("VALUE"))
			Set Matches = regeDEO.Execute(value)
			For Each Match in Matches
				strRelativeString = Trim(Match.Value)
				If (strRelativeString<>"") Then
					ArrValue(0,0) = ArrValue(0,0) + 1 
					ArrValue(1,0) = ArrValue(1,0) + GetSafeLng(objCityRS("VALUE1"), 0)
					ArrValue(2,0) = ArrValue(2,0) + GetSafeLng(objCityRS("VALUE2"), 0)
					ArrValue(3,0) = ArrValue(3,0) + GetSafeLng(objCityRS("VALUE3"), 0)
				End If
			Next
		End If
		objCityRS.MoveNext
	Wend

	CalcDEOValue=ArrValue
End Function

Function GetSplitEOCountSchools
	Dim arrCounts
	Dim objSchoolList, objStudentsCount
	Dim nSettlementType
	Redim arrCounts(6,2)

	Set objSchoolList = objNSNET.GetEMSchools(filterEMID, kWizardSteps)	
	While Not objSchoolList.EOF
		If objSchoolList("SETTLEMENTTYPEID") = 1 Then nSettlementType = 2 Else nSettlementType = 1 
		Select Case CInt(objSchoolList("EOFORMID"))
			Case 30,31,32,33
				arrCounts(1,nSettlementType) = arrCounts(1,nSettlementType) + 1
				Select Case CInt(objSchoolList("EOFORMID"))
					Case 30
						arrCounts(2,nSettlementType) = arrCounts(2,nSettlementType) + 1
					Case 33
						arrCounts(3,nSettlementType) = arrCounts(3,nSettlementType) + 1
					Case 32
						arrCounts(4,nSettlementType) = arrCounts(4,nSettlementType) + 1
					Case 31
						arrCounts(5,nSettlementType) = arrCounts(5,nSettlementType) + 1    
				End Select
			Case 43,44,45
				arrCounts(6,nSettlementType) = arrCounts(6,nSettlementType) + 1    
		End Select
		objSchoolList.MoveNext
	Wend
	GetSplitEOCountSchools = arrCounts
End Function
%>
