<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 4
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	ValidateDividedRows(4, 7, [8], 3, 3);
	ValidateDividedRows(4, 8, [9, 11], 3, 3);
	ValidateDividedRows(4, 9, [10], 3, 3);
	ValidateDividedRows(4, 11, [12], 3, 3);
	SumRowAllCols(5, 1, 3, 3, 2, 16);
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section4_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section5_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim i,arrColLang
	ReDim arrColLang(5,1)
	Dim sourceFormId

	sourceFormId = GetSourceFormId()
	
	For i = 1 to 12
		Call GetEOSumValuesForEOTypes(GetFieldName(4, 1, i + 2), sourceFormId, 4, 1, i + 2, Empty, Array(8))
	Next
    
	For i = 2 to 14
		Call GetEOSumValuesForEOTypes(GetFieldName(4, i, 3), sourceFormId, 4, i, -1, Empty, Array(8))
	Next
	
	Call GetEOSumValuesForEOTypes(GetFieldName(5, 2, 3), sourceFormId, 1, 1, 3,  Empty, Array(8))
	arrColLang=CalcStringValue()
	
	For i=0 to UBound(arrColLang)
		If Not IsDull(arrColLang(i, 1)) Then Call SetLoadedRIKValue( "T050" & i + 3 &"03", arrColLang(i, 1) )
	Next
End Sub

Function CalcStringValue()
	Dim objCityRS,objProvinceRes,arrCounts,arrLanguage, arrPivotParams
	Dim Matches,i,j,Match,strRelativeString
	Dim regeOZ,value
	Dim sourceFormId
	Redim arrCounts(5,1)
	Redim arrLanguage(5,0)
	arrLanguage=Array("башкирский","татарский","чувашский","марийский","тувинский", "якутский")
	set regeOZ = New RegExp
	regeOZ.Pattern = "(башкирский)|(татарский)|(чувашский)|(марийский)|(тувинский)|(якутский)"
	regeOZ.Global = True
	regeOZ.IgnoreCase = True
	sourceFormId = GetSourceFormId()
	Set objCityRS = GetPivot(strEMID, strCommonYearID, sourceFormId, Array(GetFormParameter(sourceFormId, 1, 2, 1, Null), GetFormParameter(sourceFormId, 1, 2, 3, Null)), Array(8), Empty, true)
	While Not objCityRS.EOF
		value = objCityRS("VALUE")
		If Not isDull(value) Then 
			Set Matches = regeOZ.Execute(value)
			For Each Match in Matches
				strRelativeString = Trim(Match.Value)
				for i=0 to 5
				IF UCase(strRelativeString) = UCase(arrLanguage(i)) then 
					arrCounts(i,0) = arrLanguage(i)
					arrCounts(i,1) = arrCounts(i,1) + Cint(iif(IsNull(objCityRS("VALUE1")),0,objCityRS("VALUE1")))
					Exit For
				End If
				Next
			Next
		End If
		objCityRS.MoveNext
	Wend
	CalcStringValue=arrCounts
End Function

%>

