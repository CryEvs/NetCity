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
			ValidateIncludedRows(22, 1, [2], 3, 4);
			ValidateIncludedRows(22, 3, [4], 3, 4);
			ValidateIncludedRows(22, 5, [6], 3, 4);
			ValidateIncludedRowsWithIncludedRows(4, [20,22], [24], 3, 3);
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
	Dim startDate, objHomeEducStudentCount, objHomeEducStudentWithDisabilityCount
	Call ClearAvtoCalcValue()
	
	startDate = #22/09/2011#

	Set objHomeEducStudentCount = objNSNET.GetOSH1HomeEducStudentCount(strCurrYearID, startDate, -1, bIsMNS)
	Set objHomeEducStudentWithDisabilityCount = objNSNET.GetOSH1HomeEducStudentWithDisabilityCount(strCurrYearID, startDate, bIsMNS)
	
	Call SetLoadedOSHValue("T220303" , IIF(IsDull(objHomeEducStudentCount("GENERALEDUC")), 0, objHomeEducStudentCount("GENERALEDUC")))
	Call SetLoadedOSHValue("T220103" , IIF(IsDull(objHomeEducStudentCount("CORRECTEDUC")), 0, objHomeEducStudentCount("CORRECTEDUC")))
	
	Call SetLoadedOSHValue("T220304" , IIF(IsDull(objHomeEducStudentWithDisabilityCount("GENERALEDUC")), 0, objHomeEducStudentWithDisabilityCount("GENERALEDUC")))
	Call SetLoadedOSHValue("T220104" , IIF(IsDull(objHomeEducStudentWithDisabilityCount("CORRECTEDUC")), 0, objHomeEducStudentWithDisabilityCount("CORRECTEDUC")))
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