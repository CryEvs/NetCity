<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE=../../../MoveDoc_inc.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section6_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
	isInfoFormValid();
function CalculateOSH()
{
    SumRow(6, 1, [3, 4], 2, 9);
	return true;
}
//--></script>
<%
	End If
End Sub

Function IsServerSideAutoCalc()
	IsServerSideAutoCalc = True
End Function

Sub AutoCalc()
	Dim objStudentsOutInfo
	Dim nReason, nStudents
	Dim nStudents4Reason2, nStudents4Reason3, nStudents4Reason4, nStudents4Reason7
	Dim nStudents4ReasonOthers

	' Page 5 Table 8 
	Set objStudentsOutInfo = objNSNET.GetOSH5StudentsOutInfo( strCurrYearID )
	TestError( kStudentsOutInfoUnavalable )
	nStudents4Reason2 = 0
	nStudents4Reason3 = 0
	nStudents4Reason4 = 0
	nStudents4Reason7 = 0
	nStudents4ReasonOthers = 0
	Do While Not objStudentsOutInfo.EoF
		nReason = GetSafeLng( objStudentsOutInfo("REASON"), kOtherReason )
		nStudents = GetSafeLng( objStudentsOutInfo("STUDENTSCOUNT"), 0 )
		If nReason = 4 Then
			nStudents4Reason2 = nStudents4Reason2 + nStudents
		ElseIf nReason = 5 Or nReason = 6 Then
			nStudents4Reason3 = nStudents4Reason3 + nStudents
		ElseIf nReason = 7 Or nReason = 8 Then
			nStudents4Reason4 = nStudents4Reason4 + nStudents
		ElseIf nReason = 14 Then
			nStudents4Reason7 = nStudents4Reason7 + nStudents
		Else
			nStudents4ReasonOthers = nStudents4ReasonOthers + nStudents
		End If
		objStudentsOutInfo.MoveNext
	Loop
	Call SetLoadedOSHValue( "T060203", nStudents4Reason2 )
	Call SetLoadedOSHValue( "T060303", nStudents4Reason3 )
	Call SetLoadedOSHValue( "T060403", nStudents4Reason4 )
	Call SetLoadedOSHValue( "T060703", nStudents4Reason7 )
	Call SetLoadedOSHValue( "T060903", nStudents4ReasonOthers )
End Sub
%>
