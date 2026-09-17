<!-- #INCLUDE FILE="../../../../em_screen.asp" -->" -->

<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 9
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
	<!-- #INCLUDE FILE="Sections/Section11_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalcEMInfo()
	Dim objTable
	
	Set objTable = objSchoolFormComponent.CalcTableStatFormParameters(strEMID, strCommonYearID, Array(8), , ,GetSourceFormId(), 10, 1, 1, 3, 17)
	
	Call CommonProcessParams(objTable)
End Sub

Sub CommonProcessParams(objTable)
	Dim i, j, nValue, nRow, nCol, strFieldName
	
	While Not objTable.EoF
		nRow = GetSafeLng(objTable("CELLROW"), Null)
		nCol = GetSafeLng(objTable("CELLCOLUMN"), Null)
		nValue = GetSafeLng(objTable("SUMMA"), 0)
		
		If nValue > 0 Then
			strFieldName = GetFieldName(11, nRow, nCol)
			Call SetLoadedRIKValue(strFieldName, nValue)
		End If
		objTable.MoveNext
	WEnd
End Sub
%>

