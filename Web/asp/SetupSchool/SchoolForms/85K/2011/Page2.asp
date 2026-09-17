<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.

Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub SpecialOnHead()%>
<script> 
<!--
function CalculateOSH()
{
	return true;
}

//--></script>
<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section1.1_inc.asp" -->
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
	Dim objSchoolInfo, eotypeid, eoformid
	Set objSchoolInfo = objNSNET.GetSchoolInfo(strSchoolID)
	Set eotypeid = objSchoolInfo("EOTYPEID")
	Set eoformid = objSchoolInfo("EOFORMID")

	Select Case eotypeid.Value
    Case 1
        Call SetLoadedOSHValue("T01.10103", 1)
    Case 2
        Call SetLoadedOSHValue("T01.10203", 1)
    End Select

	Select Case eoformid.Value
    Case 3
        Call SetLoadedOSHValue("T01.10303", 1)
    Case 4
        Call SetLoadedOSHValue("T01.10403", 1)
    Case 5
        Call SetLoadedOSHValue("T01.10403", 1)
    Case 6
        Call SetLoadedOSHValue("T01.10603", 1)
    Case 7
        Call SetLoadedOSHValue("T01.10703", 1)
    Case 8
        Call SetLoadedOSHValue("T01.10803", 1)
    Case 9
        Call SetLoadedOSHValue("T01.10903", 1)
    Case 10
        Call SetLoadedOSHValue("T01.11003", 1)
    Case 11
        Call SetLoadedOSHValue("T01.10803", 1)
    End Select
End Sub
%>

