<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2016 IRTech. All rights reserved.
const rowcount = 8
const colcount = 7
const offset = 40

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()
%>
<script> 
<!--
function CalculateOSH()
{
	SumRowAllCols('01.1', 1, 3, 8, 2, 8);
	SumColAllRows('01.2', 3, 2, 8, 4, 7);
	SumRowAllCols('01.2', 1, 3, 7, 2, 8);

	ValidateIncludedCols('01.1', 4, [5, 6], 1, 11);
	ValidateIncludedCols('01.1', 4, [7], 1, 11);
	ValidateIncludedRows('01.1', 1, [9, 10, 11], 4, 8);

	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.1_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section1.2_inc.asp" -->
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
	' 1.1
	FillAssociationsCount
	FillChildsCount
	FillAttendance

	' 1.2
End Sub

' заполняет число объединений
Sub FillAssociationsCount()
	Dim rsAssociations
	Dim i

	Set rsAssociations = objNSNET.GetOdoCountAssociations(strSchoolyearid)
	TestError obLanguage("Common","kUnexpErr")

	If Not rsAssociations.EOF Then
		For i = 2 to rowcount
			Call SetLoadedOSHValue("T01.1" + FormatValueIndex(i) + "03", GetSafeLng(rsAssociations(i-2), 0))
		Next
	End If
End Sub

' заполняет численность учащихся
Sub FillChildsCount()
	Dim rsChilds
	Dim i, j

	Set rsChilds = objNSNET.GetOdoChildsCountByDirection(strSchoolyearid, GetFormPresentationDate())
	TestError obLanguage("Common","kUnexpErr")

	If Not rsChilds.EOF Then
		' 1.1
		For j = 4 to colcount
			For i = 2 to 11
				Call SetLoadedOSHValue("T01.1" + FormatValueIndex(i) + FormatValueIndex(j), GetSafeLng(rsChilds((j-4)*10+i-2), 0))
			Next
		Next

		' 1.2
		For j = 4 to colcount
			For i = 2 to 8
				Call SetLoadedOSHValue("T01.2" + FormatValueIndex(i) + FormatValueIndex(j), GetSafeLng(rsChilds(offset+(j-4)*7+i-2), 0))
			Next
		Next
	End If
End Sub

' заполняет число посещений
Sub FillAttendance()
	
	Dim rsAttendance, rsAttendancePrev, prevschoolyearid
	Dim i

	Set rsAttendance = objNSNET.GetOdoChildsAttendance(strSchoolyearid, 1, 9)

	prevschoolyearid = objNSNET.GetPrevSchoolYearId(strSchoolyearid)
	Set rsAttendancePrev = objNSNET.GetOdoChildsAttendance(prevschoolyearid, 9, 12)

	TestError obLanguage("Common","kUnexpErr")

	If Not rsAttendance.EOF And Not rsAttendancePrev.EOF Then
		For i = 2 to rowcount
			Call SetLoadedOSHValue("T01.1" + FormatValueIndex(i) + "08", GetSafeLng(rsAttendance(i-2), 0) + GetSafeLng(rsAttendancePrev(i-2), 0))
		Next
	ElseIf Not rsAttendance.EOF Then
		For i = 2 to rowcount
			Call SetLoadedOSHValue("T01.1" + FormatValueIndex(i) + "08", GetSafeLng(rsAttendance(i-2), 0))
		Next
	ElseIf Not rsAttendancePrev.EOF Then
		For i = 2 to rowcount
			Call SetLoadedOSHValue("T01.1" + FormatValueIndex(i) + "08", GetSafeLng(rsAttendancePrev(i-2), 0))
		Next
	End If
End Sub
%>