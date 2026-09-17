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
<!-- #INCLUDE FILE="Sections/Section7_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;
	form.T060303.value = GetValueInt(form.T060103) + GetValueInt(form.T060203);
	form.T080103.value = GetValueInt(form.T080203) + GetValueInt(form.T080303) + GetValueInt(form.T080403) + GetValueInt(form.T080503) + GetValueInt(form.T080603) + GetValueInt(form.T080703) + GetValueInt(form.T080803);
	form.T080104.value = GetValueInt(form.T080204) + GetValueInt(form.T080304) + GetValueInt(form.T080404) + GetValueInt(form.T080504) + GetValueInt(form.T080604) + GetValueInt(form.T080704) + GetValueInt(form.T080804);
	return true;
}
//--></script>
<%
	End If
End Sub

Sub AutoCalcShoolInfo( objDataCon )
	Dim objStudentsOutInfo
	Dim nReason, nStudents
	Dim nStudents4Reason2, nStudents4Reason3, nStudents4Reason4, nStudents4Reason7
	Dim nStudents4ReasonOthers

	' Page 5 Table 8 
	Set objStudentsOutInfo = objDataCon.GetOSH5StudentsOutInfo( strCurrYearID )
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
	Call SetLoadedOSHValue( "T080203", nStudents4Reason2 )
	Call SetLoadedOSHValue( "T080303", nStudents4Reason3 )
	Call SetLoadedOSHValue( "T080403", nStudents4Reason4 )
	Call SetLoadedOSHValue( "T080703", nStudents4Reason7 )
	Call SetLoadedOSHValue( "T080803", nStudents4ReasonOthers )
End Sub
%>
