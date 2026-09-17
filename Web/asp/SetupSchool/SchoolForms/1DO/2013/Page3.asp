<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 3
End Function

const kMaxProgDirections = 14

Dim progDirections

Sub SpecialOnHead()
%>

<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols(2, 1, 3, 10, 2, 9);

	ValidateIncludedCols(2, 3, [4], 2, 11);
	ValidateIncludedCols(2, 5, [6], 2, 11);
	ValidateIncludedCols(2, 5, [7], 2, 11);
	ValidateIncludedCols(2, 5, [8], 2, 11);
	ValidateIncludedCols(2, 5, [9], 2, 11);
	ValidateIncludedCols(2, 5, [10], 2, 11);
	ValidateIncludedRows(2, 1, [10], 3, 10);
	ValidateIncludedRows(2, 1, [11], 3, 10);
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
	<%
End Sub

Function IsServerSideAutoCalc()
	if readonly Then
		IsServerSideAutoCalc = False
	Else
		IsServerSideAutoCalc = True
	End If
End Function

Sub AutoCalcEMInfo()
End Sub

Sub AutoCalc()
	'Для групп гр. 3
	Dim objInfoOfJoints, objInfoOfOthersJoints, strProgDirections
	Dim objStudentsWithParams, col, row
	
	strProgDirections = "3,6,7,8,10,13,14"

	Set objInfoOfJoints = objNSNET.GetNumberOfJoint(strSchoolYearId, strProgDirections)
	Set objInfoOfOthersJoints = objNSNET.GetNumberOfJoint(strSchoolYearId, strProgDirections, true)

	Call CalcForJoints(objInfoOfJoints, objInfoOfOthersJoints, "CLASSCOUNT", "VILLAGECLASSCOUNT", 3)

	'Для воспитанников гр. 5
	Set objInfoOfJoints = objNSNET.Get1DO_StudentsClassesInfo(strSchoolYearId, dtPresentationDate)

	Call CalcForJoints(objInfoOfJoints, objInfoOfOthersJoints, "STUDENTSCOUNT", "STUDENTSSUM", 5)
	
	'Для воспитанников гр. 6
	Set objInfoOfJoints = objNSNET.Get1DO_StudentsClassesInfo(strSchoolYearId, dtPresentationDate, true)

	Call CalcForJoints(objInfoOfJoints, objInfoOfOthersJoints, "STUDENTSCOUNT", "STUDENTSSUM", 6)

	' гр. 8,9,10
	Set objStudentsWithParams = objNSNET.GetOdoStudentsWithParams(strSchoolYearId, dtPresentationDate)

	If Not objStudentsWithParams.EOF Then
		For col = 8 to 10
			For row = 2 to 9
				Call SetLoadedOSHValue("T02" & FormatValueIndex(row) & FormatValueIndex(col), GetSafeLng(objStudentsWithParams((col-8)*9+row-2), 0))
			Next
			Call SetLoadedOSHValue("T0211" & FormatValueIndex(col), GetSafeLng(objStudentsWithParams((col-8)*9+8), 0))
		Next
	End If
End Sub

Sub CalcForJoints(objInfoOfJoints, objInfoOfOthersJoints, FieldName1, FieldName2, column)
	Dim sumByVilliage, i, strColumn, sumOthers, nDirectionId, strDirIDs

	strDirIDs = "3,6,7,8,10,13,14"

	ReDim progDirections(kMaxProgDirections)
	sumByVilliage = 0
	sumOthers = 0
	While Not objInfoOfJoints.EOF
		nDirectionId = GetSafeLng(objInfoOfJoints("DIRECTIONID"), Null)
		progDirections(nDirectionId) = objInfoOfJoints(FieldName1)
		sumByVilliage = sumByVilliage + GetSafeLng(objInfoOfJoints(FieldName2), 0)
		If InStr(strDirIDs, CStr(nDirectionId)) = 0 Then
			sumOthers = sumOthers + GetSafeLng(objInfoOfJoints(FieldName1), 0)
		End If
		objInfoOfJoints.MoveNext
	Wend

	strColumn = FormatValueIndex(column)
	Call SetLoadedOSHValue("T0202" & strColumn, progDirections(13))
	Call SetLoadedOSHValue("T0203" & strColumn, progDirections(10))
	Call SetLoadedOSHValue("T0204" & strColumn, progDirections(6))
	Call SetLoadedOSHValue("T0205" & strColumn, progDirections(8))
	Call SetLoadedOSHValue("T0206" & strColumn, progDirections(7))
	Call SetLoadedOSHValue("T0207" & strColumn, progDirections(14))
	Call SetLoadedOSHValue("T0208" & strColumn, progDirections(3))

	If column = 5 Or column = 6 Then
		Call SetLoadedOSHValue("T0209" & strColumn, sumOthers)
	ElseIf Not objInfoOfOthersJoints.EOF Then
		sumByVilliage = sumByVilliage + GetSafeLng(objInfoOfOthersJoints(FieldName2), 0)
		Call SetLoadedOSHValue("T0209" & strColumn, objInfoOfOthersJoints(FieldName1))
	End If
	Call SetLoadedOSHValue("T0211" & strColumn, sumByVilliage)
End Sub
%>