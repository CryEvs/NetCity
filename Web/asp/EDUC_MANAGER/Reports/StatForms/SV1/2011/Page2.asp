<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

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
	SumRowAllColsByIndex(1, 1, 3, 3, [2,3,4]);
	SumRowAllColsByIndex(1, 1, 4, 4, [2,3,4,5]);
	SumRowAllColsByIndex(1, 1, 5, 6, [6,7,8,9]);
	SumRowAllColsByIndex(1, 10, 3, 6, [11,12]);
	SumRowAllColsByIndex(1, 14, 3, 6, [1,13]);
	SumRowAllColsByIndex(1, 18, 3, 6, [14,16]);
	
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

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = False
End Function

Sub AutoCalcEMInfo( )
    Dim objCityRes, objProvinceRes
    Dim i, j
    Dim arrAssignments,arrFOSchoolsCounts
    ReDim arrAssignments(19,7)
    Dim arrSchoolsCounts
    arrSchoolsCounts = GetSplitEOCountSchools()
    For i = 6 to 9
     Call SetLoadedRIKValue( "CB1_01_" & LPad2(i) & "_03" , arrSchoolsCounts((i-4),1))
    Next
    Call SetLoadedRIKValue( "CB1_01_13_03", arrSchoolsCounts(6,1))
    Call SetLoadedRIKValue( "CB1_01_15_03", arrSchoolsCounts(1,2))
    arrSchoolsCounts=CalcStringValue()
    'ReDim arrSchoolsCounts(2,1)
    For i = 2 to 4
        Call SetLoadedRIKValue( "CB1_01_" & LPad2(i) & "_03" , arrSchoolsCounts((i-2),0))
        Call SetLoadedRIKValue( "CB1_01_" & LPad2(i) & "_04" , arrSchoolsCounts((i-2),1))
        Call SetLoadedRIKValue( "CB1_01_" & LPad2(i) & "_05" , arrSchoolsCounts((i-2),2))
    Next
    Call SetLoadedRIKValue( "CB1_01_05_04" , arrSchoolsCounts(3,1))
    
    call GetEOSumValuesForEOTypes("CB1_01_06_04","T030708","8","30")
    call GetEOSumValuesForEOTypes("CB1_01_07_04","T030708","8","33")
    call GetEOSumValuesForEOTypes("CB1_01_08_04","T030708","8","32")
    call GetEOSumValuesForEOTypes("CB1_01_09_04","T030708","8","31")
    call GetSplitEOSumValuesForEOTypes("","CB1_01_15_04","T030708","8")
    call GetEOSumValuesForEOTypes("CB1_01_06_05","T060303","8","30")
    call GetEOSumValuesForEOTypes("CB1_01_07_05","T060303","8","33")
    call GetEOSumValuesForEOTypes("CB1_01_08_05","T060303","8","32")
    call GetEOSumValuesForEOTypes("CB1_01_09_05","T060303","8","31")
    call GetSplitEOSumValuesForEOTypes("","CB1_01_15_05","T060303","8")
    call GetEOSumValuesForEOTypes("CB1_01_06_06","T0201","8","30")
    call GetEOSumValuesForEOTypes("CB1_01_07_06","T0201","8","33")
    call GetEOSumValuesForEOTypes("CB1_01_08_06","T0201","8","32")
    call GetEOSumValuesForEOTypes("CB1_01_09_06","T0201","8","31")
    call GetSplitEOSumValuesForEOTypes("","CB1_01_15_06","T0201","8")
    call GetEOSumValuesForEOTypes("CB1_01_06_07","T0202","8","30")
    call GetEOSumValuesForEOTypes("CB1_01_07_07","T0202","8","33")
    call GetEOSumValuesForEOTypes("CB1_01_08_07","T0202","8","32")
    call GetEOSumValuesForEOTypes("CB1_01_09_07","T0202","8","31")
    call GetSplitEOSumValuesForEOTypes("","CB1_01_15_07","T0202","8")
    call GetEOSumValuesForEOTypes("CB1_01_13_04","T030708","11","")
    call GetEOSumValuesForEOTypes("CB1_01_13_05","T060303","11","")
    call GetEOSumValuesForEOTypes("CB1_01_13_06","T0201","11","")
    call GetEOSumValuesForEOTypes("CB1_01_13_07","T0202","11","")
    arrSchoolsCounts=CalcDEOValue()
    'ReDim arrSchoolsCounts(2,1)
    For i = 3 to 7
        Call SetLoadedRIKValue( "CB1_01_16_" & LPad2(i) , arrSchoolsCounts((i-3),0))
        Call SetLoadedRIKValue( "CB1_01_17_" & LPad2(i) , arrSchoolsCounts((i-3),1))
    Next
    
End Sub

Function CalcStringValue()
    Dim objCityRS,objProvinceRes,arrCounts
    Redim arrCounts(3,2)
    Call objNSNET.ValueSimpleEMParameter(strEMID, strCommonYearID,Array("T0002","T030704","T030706","T060303","T030707",""), "8", "",False,true,objCityRS, objProvinceRes )
    While Not objCityRS.EOF
        IF UCase(objCityRS("VALUE")) = "ОЧНОЙ" then  
            arrCounts(0,0) = arrCounts(0,0) + 1
            arrCounts(0,1) = arrCounts(0,1) + Cint(iif(IsNull(objCityRS("VALUE1")),0,objCityRS("VALUE1")))
            arrCounts(0,2) = arrCounts(0,2) + Cint(iif(IsNull(objCityRS("VALUE3")),0,objCityRS("VALUE3")))
            arrCounts(3,1) = arrCounts(3,1) + Cint(iif(IsNull(objCityRS("VALUE4")),0,objCityRS("VALUE4")))
        End If
        IF UCase(objCityRS("VALUE")) = "ЗАОЧНОЙ" then  
            arrCounts(2,0) = arrCounts(2,0) + 1 
            arrCounts(2,1) = arrCounts(2,1) + Cint(iif(IsNull(objCityRS("VALUE2")),0,objCityRS("VALUE2")))
            arrCounts(2,2) = arrCounts(2,2) + Cint(iif(IsNull(objCityRS("VALUE3")),0,objCityRS("VALUE3")))
            arrCounts(3,1) = arrCounts(3,1) + Cint(iif(IsNull(objCityRS("VALUE4")),0,objCityRS("VALUE4")))
        End If
        IF UCase(objCityRS("VALUE")) = "ОЧНОЙ И ЗАОЧНОЙ" then  
            arrCounts(1,0) = arrCounts(1,0) + 1
            arrCounts(1,1) = arrCounts(1,1) + Cint(iif(IsNull(objCityRS("VALUE1")),0,objCityRS("VALUE1"))) + Cint(iif(IsNull(objCityRS("VALUE2")),0,objCityRS("VALUE2")))
		    arrCounts(1,2) = arrCounts(1,2) + Cint(iif(IsNull(objCityRS("VALUE3")),0,objCityRS("VALUE3")))
		    arrCounts(3,1) = arrCounts(3,1) + Cint(iif(IsNull(objCityRS("VALUE4")),0,objCityRS("VALUE4")))
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
    ReDim ArrValue(4,1)
    set regeDEO = New RegExp
    regeDEO.Pattern = "(отдельные классы)|(УКП)"
	regeDEO.Global = True
	regeDEO.IgnoreCase = True
    Call objNSNET.ValueSimpleEMParameter(strEMID, strCommonYearID,Array("T0004","T030708","T060303","T0201","T0202"), "2,5,7,10,11,13", "",False,true,objCityRS, objProvinceRes )
    IF (IsEmpty(objCityRS)=false) Then
     While Not objCityRS.EOF
        value = Cstr(objCityRS("VALUE"))
		Set Matches = regeDEO.Execute(value)
	    For Each Match in Matches
            strRelativeString = Trim(Match.Value)
            IF (strRelativeString<>"") then  
               ArrValue(0,0) = ArrValue(0,0) + 1 
               ArrValue(1,0) = ArrValue(1,0) + objCityRS("VALUE1")
               ArrValue(2,0) = ArrValue(2,0) + objCityRS("VALUE2")
               ArrValue(3,0) = ArrValue(3,0) + objCityRS("VALUE3")
               ArrValue(4,0) = ArrValue(4,0) + objCityRS("VALUE4")
            End IF
		Next        	    
	    objCityRS.MoveNext
    Wend
    End IF
    Call objNSNET.ValueSimpleEMParameter(strEMID, strCommonYearID,Array("T0004","T030708","T060303","T0201","T0202"), "2,5,7,10,11,13", "",False,true,objCityRS, objProvinceRes )
    If (IsEmpty(objProvinceRes)=false) Then
     While Not objProvinceRes.EOF
        value = Cstr(objProvinceRes("VALUE"))
		Set Matches = regeDEO.Execute(value)
	    For Each Match in Matches
            strRelativeString = Trim(Match.Value)
            IF (strRelativeString<>"") then  
               ArrValue(0,1) = ArrValue(0,1) + 1 
               ArrValue(1,1) = ArrValue(1,1) + objProvinceRes("VALUE1")
               ArrValue(2,1) = ArrValue(2,1) + objProvinceRes("VALUE2")
               ArrValue(3,1) = ArrValue(3,1) + objProvinceRes("VALUE3")
               ArrValue(4,1) = ArrValue(4,1) + objProvinceRes("VALUE4")
            End IF
		Next        	    
	    objProvinceRes.MoveNext
    Wend
    End IF
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

