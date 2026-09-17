<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 8
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;


	if (GetValueInt(form.T170103) < GetValueInt(form.T170203) + GetValueInt(form.T170303) + GetValueInt(form.T170403) + GetValueInt(form.T170503) + GetValueInt(form.T170603))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>Sum);
		form.T170103.focus();
		return false;
	}
	if (GetValueInt(form.T170104) < GetValueInt(form.T170204) + GetValueInt(form.T170304) + GetValueInt(form.T170404) + GetValueInt(form.T170504) + GetValueInt(form.T170604))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>Sum);
		form.T170104.focus();
		return false;
	}
	if (GetValueInt(form.T170105) < GetValueInt(form.T170205) + GetValueInt(form.T170305) + GetValueInt(form.T170405) + GetValueInt(form.T170505) + GetValueInt(form.T170605))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>Sum);
		form.T170105.focus();
		return false;
	}
	if (GetValueInt(form.T170107) < GetValueInt(form.T170207) + GetValueInt(form.T170307) + GetValueInt(form.T170407) + GetValueInt(form.T170507) + GetValueInt(form.T170607))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>Sum);
		form.T170107.focus();
		return false;
	}
	if (GetValueInt(form.T170108) < GetValueInt(form.T170208) + GetValueInt(form.T170308) + GetValueInt(form.T170408) + GetValueInt(form.T170508) + GetValueInt(form.T170608))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>Sum);
		form.T170108.focus();
		return false;
	}
	if (GetValueInt(form.T170109) < GetValueInt(form.T170209) + GetValueInt(form.T170309) + GetValueInt(form.T170409) + GetValueInt(form.T170509) + GetValueInt(form.T170609))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>Sum);
		form.T170109.focus();
		return false;
	}

	form.T170106.value = GetValueInt(form.T170103) + GetValueInt(form.T170104) + GetValueInt(form.T170105);
	form.T170206.value = GetValueInt(form.T170203) + GetValueInt(form.T170204) + GetValueInt(form.T170205);
	form.T170306.value = GetValueInt(form.T170303) + GetValueInt(form.T170304) + GetValueInt(form.T170305);
	form.T170406.value = GetValueInt(form.T170403) + GetValueInt(form.T170404) + GetValueInt(form.T170405);
	form.T170506.value = GetValueInt(form.T170503) + GetValueInt(form.T170504) + GetValueInt(form.T170505);
	form.T170606.value = GetValueInt(form.T170603) + GetValueInt(form.T170604) + GetValueInt(form.T170605);
	form.T170706.value = GetValueInt(form.T170703) + GetValueInt(form.T170704) + GetValueInt(form.T170705);
	form.T170806.value = GetValueInt(form.T170803) + GetValueInt(form.T170804) + GetValueInt(form.T170805);
	form.T170906.value = GetValueInt(form.T170903) + GetValueInt(form.T170904) + GetValueInt(form.T170905);
	form.T171006.value = GetValueInt(form.T171003) + GetValueInt(form.T171004) + GetValueInt(form.T171005);

	form.T170110.value = GetValueInt(form.T170107) + GetValueInt(form.T170108) + GetValueInt(form.T170109);
	form.T170210.value = GetValueInt(form.T170207) + GetValueInt(form.T170208) + GetValueInt(form.T170209);
	form.T170310.value = GetValueInt(form.T170307) + GetValueInt(form.T170308) + GetValueInt(form.T170309);
	form.T170410.value = GetValueInt(form.T170407) + GetValueInt(form.T170408) + GetValueInt(form.T170409);
	form.T170510.value = GetValueInt(form.T170507) + GetValueInt(form.T170508) + GetValueInt(form.T170509);
	form.T170610.value = GetValueInt(form.T170607) + GetValueInt(form.T170608) + GetValueInt(form.T170609);
	form.T170710.value = GetValueInt(form.T170707) + GetValueInt(form.T170708) + GetValueInt(form.T170709);
	form.T170810.value = GetValueInt(form.T170807) + GetValueInt(form.T170808) + GetValueInt(form.T170809);
	form.T170910.value = GetValueInt(form.T170907) + GetValueInt(form.T170908) + GetValueInt(form.T170909);
	form.T171010.value = GetValueInt(form.T171007) + GetValueInt(form.T171008) + GetValueInt(form.T171009);

	return true;
}
//--></script>
<%
	End If
%>

<%
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section17_inc.asp" -->
	<%
End Sub
%>
