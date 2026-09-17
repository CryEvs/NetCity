<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 7
End Function

Sub SpecialOnHead()
%>

<script> <!--
function CalculateOSH()
{
	return true;
}
//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim ArrValue,i
	Redim ArrValue(3,2)

	ArrValue = CalcValue
	For i=1 to 4
		Call SetLoadedRIKValue( GetFieldName(9, i, 3), ArrValue((i-1),0))
		Call SetLoadedRIKValue( GetFieldName(9, i, 4), ArrValue((i-1),1))
		Call SetLoadedRIKValue( GetFieldName(9, i, 5), ArrValue((i-1),2))
	Next
End Sub

Function CalcValue()
	Dim objPivotRs, arrCounts
	Dim arrPivotParams
	Dim i,j
	Redim arrCounts(3,2)
	Dim sourceFormId

	sourceFormId = GetSourceFormId()

	Dim val, val1, val2, val3, val4, val5

	arrPivotParams = Array( _
		GetFormParameter(sourceFormId, 8, 1, 3, Null), _
		GetFormParameter(sourceFormId, 8, 2, 3, Null), _
		GetFormParameter(sourceFormId, 8, 3, 3, Null), _
		GetFormParameter(sourceFormId, 8, 1, 4, Null), _
		GetFormParameter(sourceFormId, 8, 2, 4, Null), _
		GetFormParameter(sourceFormId, 8, 3, 4, Null) _
		)

	Set objPivotRs = GetPivot(strEMID, strCommonYearID, sourceFormId, arrPivotParams, Array(8), Empty, true)

	While Not objPivotRs.EOF
		val = GetSafeLng(objPivotRs("VALUE"), 0)
		val1 = GetSafeLng(objPivotRs("VALUE1"), 0)
		val2 = GetSafeLng(objPivotRs("VALUE2"), 0)
		val3 = GetSafeLng(objPivotRs("VALUE3"), 0)
		val4 = GetSafeLng(objPivotRs("VALUE4"), 0)
		val5 = GetSafeLng(objPivotRs("VALUE5"), 0)

		IF (val<>0 and val1<>0) Or (val2<>0 And val1<>0) Or (val2<>0 And val<>0) Then
			arrCounts(3,0) = arrCounts(3,0)+1
			arrCounts(3,1) = arrCounts(3,1)+val+val1+val2
			arrCounts(3,2) = arrCounts(3,2)+val3+val4+val5
		Else
			IF val<>0 and val1=0 And val2=0 Then
				arrCounts(0,0) = arrCounts(0,0)+1
				arrCounts(0,1) = arrCounts(0,1)+val
				arrCounts(0,2) = arrCounts(0,2)+val3
			End IF
			IF val1<>0 and val=0 And val2=0 Then
				arrCounts(1,0) = arrCounts(1,0)+1
				arrCounts(1,1) = arrCounts(1,1)+val1
				arrCounts(1,2) = arrCounts(1,2)+val4
			End IF
			IF val2<>0 and val1=0 And val=0 Then
				arrCounts(2,0) = arrCounts(2,0)+1
				arrCounts(2,1) = arrCounts(2,1)+val2
				arrCounts(2,2) = arrCounts(2,2)+val5
			End IF   
		End IF
		objPivotRs.MoveNext
	Wend
	CalcValue=arrCounts
End Function
%>

