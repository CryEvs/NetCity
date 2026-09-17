<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--

<%If Not bIsMNS Then%>
	BindChangeTrigger(8, 3, 5, [6]);
	BindChangeTrigger(10, 3, 1, [3]);
	BindChangeTrigger(10, 3, 2, [4]);

	LaunchTrigger(8, 3, 5, [6]);
	LaunchTrigger(10, 3, 1, [3]);
	LaunchTrigger(10, 3, 2, [4]);
<%End If%>

BindChangeTrigger(11, 3, 1, [2]);
BindChangeTrigger(12, 3, 1, [2, 3]);

LaunchTrigger(11, 3, 1, [2]);
LaunchTrigger(12, 3, 1, [2, 3]);

isInfoFormValid();

function CalculateOSH()
{
	ValidateIncludedRows(8, 1, [2], 3, 3);
	ValidateIncludedRows(8, 3, [4], 3, 3);
	<%if Not bIsMNS Then%>
		ValidateTrigger(8, 3, 5, [6]);
		ValidateTrigger(10, 3, 1, [3]);
		ValidateTrigger(10, 3, 2, [4]);
	<%End If%>
	ValidateTrigger(11, 3, 1, [2]);
	ValidateTrigger(12, 3, 1, [2, 3]);
	return true;
}


//--></script>
<%
	End If
End Sub

Sub DrawPage()%>
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section10_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section11_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section12_inc.asp" -->
<%End Sub
%>
