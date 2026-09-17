<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 6
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;

	form.T140703.value=GetValueInt(form.T140103) + GetValueInt(form.T140203) + GetValueInt(form.T140303) + GetValueInt(form.T140403) + GetValueInt(form.T140503) + GetValueInt(form.T140603);
	form.T140704.value=GetValueInt(form.T140104) + GetValueInt(form.T140204) + GetValueInt(form.T140304) + GetValueInt(form.T140404) + GetValueInt(form.T140504) + GetValueInt(form.T140604);
	form.T140705.value=GetValueInt(form.T140105) + GetValueInt(form.T140205) + GetValueInt(form.T140305) + GetValueInt(form.T140405) + GetValueInt(form.T140505) + GetValueInt(form.T140605);
	form.T140706.value=GetValueInt(form.T140106) + GetValueInt(form.T140206) + GetValueInt(form.T140306) + GetValueInt(form.T140406) + GetValueInt(form.T140506) + GetValueInt(form.T140606);

	if (GetValueInt(form.T140103) < GetValueInt(form.T140104))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140104.focus();
		return false;
	}

	if (GetValueInt(form.T140203) < GetValueInt(form.T140204))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140204.focus();
		return false;
	}
	if (GetValueInt(form.T140303) < GetValueInt(form.T140304))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140304.focus();
		return false;
	}
	if (GetValueInt(form.T140403) < GetValueInt(form.T140404))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140404.focus();
		return false;
	}
	if (GetValueInt(form.T140503) < GetValueInt(form.T140504))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140504.focus();
		return false;
	}
	if (GetValueInt(form.T140603) < GetValueInt(form.T140604))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140604.focus();
		return false;
	}

	if (GetValueInt(form.T140105) < GetValueInt(form.T140106))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140106.focus();
		return false;
	}
	if (GetValueInt(form.T140205) < GetValueInt(form.T140206))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140206.focus();
		return false;
	}
	if (GetValueInt(form.T140305) < GetValueInt(form.T140306))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140306.focus();
		return false;
	}
	if (GetValueInt(form.T140405) < GetValueInt(form.T140406))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140406.focus();
		return false;
	}
	if (GetValueInt(form.T140505) < GetValueInt(form.T140506))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140506.focus();
		return false;
	}
	if (GetValueInt(form.T140605) < GetValueInt(form.T140606))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T140606.focus();
		return false;
	}

	if (GetValueInt(form.T1315) < GetValueInt(form.T1316))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1316.focus();
		return false;
	}
	if (GetValueInt(form.T0801) < GetValueInt(form.T0802))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0802.focus();
		return false;
	}
	if (GetValueInt(form.T1328) < GetValueInt(form.T1329))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1329.focus();
		return false;
	}
	if (GetValueInt(form.T1328) < GetValueInt(form.T1330))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1330.focus();
		return false;
	}
	if (GetValueInt(form.T1328) < GetValueInt(form.T1331))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1331.focus();
		return false;
	}
	if (GetValueInt(form.T1331) < GetValueInt(form.T1356))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1356.focus();
		return false;
	}
	if (GetValueInt(form.T1328) < GetValueInt(form.T1357))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1357.focus();
		return false;
	}
	if (GetValueInt(form.T1357) < GetValueInt(form.T1358))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1358.focus();
		return false;
	}
	if (GetValueInt(form.T1328) < GetValueInt(form.T1338))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1338.focus();
		return false;
	}
	if (GetValueInt(form.T1338) < GetValueInt(form.T1362))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1362.focus();
		return false;
	}

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
	<!-- #INCLUDE FILE="Sections/Section13_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section14_inc.asp" -->
	<%
End Sub
%>
