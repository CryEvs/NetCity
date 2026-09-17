<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 2
End Function

Sub DrawPage()
%>
<!-- #INCLUDE FILE="Sections/Section1_inc.asp" -->
<!-- #INCLUDE FILE="Sections/Section2_inc.asp" -->
<%
End Sub

Sub SpecialOnHead()
	If Not readonly Then
%>
<SCRIPT><!--
function CalculateOSH()
{
	var form = document.SchoolEdit;

	form.T010103.value = GetValueInt(form.T010104) + GetValueInt(form.T010105) + GetValueInt(form.T010106) + GetValueInt(form.T010107) + GetValueInt(form.T010108);
	
	form.T010203.value = GetValueInt(form.T010204) + GetValueInt(form.T010205) + GetValueInt(form.T010206) + GetValueInt(form.T010207) + GetValueInt(form.T010208);
	
	form.T010303.value = GetValueInt(form.T010304) + GetValueInt(form.T010305) + GetValueInt(form.T010306) + GetValueInt(form.T010307) + GetValueInt(form.T010308);

	form.T010403.value = GetValueInt(form.T010404) + GetValueInt(form.T010405) + GetValueInt(form.T010406) + GetValueInt(form.T010407) + GetValueInt(form.T010408);

    form.T010503.value = GetValueInt(form.T010504) + GetValueInt(form.T010505) + GetValueInt(form.T010506) + GetValueInt(form.T010507) + GetValueInt(form.T010508);

    form.T020103.value = GetValueInt(form.T020203) + GetValueInt(form.T020303) + GetValueInt(form.T020403);

	return true;
}
//--></SCRIPT>
<%
	End If
End Sub
%>
