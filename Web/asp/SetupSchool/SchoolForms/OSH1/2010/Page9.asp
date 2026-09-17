<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 9
End Function

Sub SpecialOnHead
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;
	
	form.T180202.value = GetValueInt(form.T180302) + GetValueInt(form.T180402) + GetValueInt(form.T180502)+GetValueInt(form.T180602);
	form.T180203.value = GetValueInt(form.T180303) + GetValueInt(form.T180403) + GetValueInt(form.T180503)+GetValueInt(form.T180603);
	form.T180102.value = GetValueInt(form.T180202) + GetValueInt(form.T180702) + GetValueInt(form.T180802)+GetValueInt(form.T180902) + GetValueInt(form.T181002) + GetValueInt(form.T181102) + GetValueInt(form.T181202) + GetValueInt(form.T181302) + GetValueInt(form.T181402)+GetValueInt(form.T181502) + GetValueInt(form.T181602);
	form.T180103.value = GetValueInt(form.T180203) + GetValueInt(form.T180703) + GetValueInt(form.T180803)+GetValueInt(form.T180903) + GetValueInt(form.T181003) + GetValueInt(form.T181103) + GetValueInt(form.T181203) + GetValueInt(form.T181303) + GetValueInt(form.T181403)+GetValueInt(form.T181503) + GetValueInt(form.T181603);
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
	<!-- #INCLUDE FILE="Sections/Section18_inc.asp" -->
	<%
End Sub
%>
