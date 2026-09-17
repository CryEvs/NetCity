<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 13
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
		<script> <!--
			isInfoFormValid();
		function CalculateOSH()
		{
			ValidateIncludedRows(22, 1, [2], 3, 5);
			ValidateIncludedRows(22, 3, [4], 3, 5);
			ValidateIncludedRows(22, 5, [6], 3, 5);
			ValidateIncludedRowsWithIncludedRows(22, [1,3], [5], 3, 5);
		}
		//--></script>
		<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section22_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalc()
	On Error Resume Next
	Dim objHomeEducStudentCount, objHomeEducStudentWithDisabilityCount
	Dim objHomeEducStudentChildCount

	Call ClearAvtoCalcValue()

	Set objHomeEducStudentCount = objNSNET.GetOSH1HomeEducStudentCount(strCurrYearID, dtPresentationDate, -1, bIsMNS)
	Set objHomeEducStudentChildCount = objNSNET.GetOSH1HomeEducStudentCount(strCurrYearID, dtPresentationDate, 18, bIsMNS)
	Set objHomeEducStudentWithDisabilityCount = objNSNET.GetOSH1HomeEducStudentWithDisabilityCount(strCurrYearID, dtPresentationDate, bIsMNS)
	
	Call SetLoadedOSHValue("T220303" , GetSafeLng(objHomeEducStudentCount("GENERALEDUC"), 0))
	Call SetLoadedOSHValue("T220103" , GetSafeLng(objHomeEducStudentCount("CORRECTEDUC"), 0))
	
	Call SetLoadedOSHValue("T220304" , GetSafeLng(objHomeEducStudentChildCount("GENERALEDUC"), 0))
	Call SetLoadedOSHValue("T220104" , GetSafeLng(objHomeEducStudentChildCount("CORRECTEDUC"), 0))
	
	Call SetLoadedOSHValue("T220305" , GetSafeLng(objHomeEducStudentWithDisabilityCount("GENERALEDUC"), 0))
	Call SetLoadedOSHValue("T220105" , GetSafeLng(objHomeEducStudentWithDisabilityCount("CORRECTEDUC"), 0))
End Sub

Sub ClearAvtoCalcValue()
	Dim ArrayClearValues, nCount, i, j, row, col

	ArrayClearValues = Array("T220103","T220104","T220303","T220304")
	nCount = Ubound(ArrayClearValues)
	For i=0 to nCount
		Call SetLoadedOSHValue( ArrayClearValues(i), 0)
	Next
End Sub
%>