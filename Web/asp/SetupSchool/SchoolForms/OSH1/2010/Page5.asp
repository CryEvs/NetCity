<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2012 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 5
End Function

Sub SpecialOnHead()
	If Not readonly Then
%>
<script> <!--
function CalculateOSH()
{
	var form = document.SchoolEdit;

	if (GetValueInt(form.T0803) < GetValueInt(form.T0804))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0804.focus();
		return false;
	}

	if (GetValueInt(form.T0805) < GetValueInt(form.T0806))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T0806.focus();
		return false;
	}

	if (GetValueInt(form.T1202) < GetValueInt(form.T1203))
	{
		alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
		form.T1203.focus();
		return false;
	}

	return true;
}
//--></script>
<script>
$(document).ready( function(){

} )
</script>
<%
	End If
%>

<%
End Sub

Sub DrawPage()%>
	<!-- #INCLUDE FILE="Sections/Section8_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section9_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section10_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section11_inc.asp" -->
	<!-- #INCLUDE FILE="Sections/Section12_inc.asp" -->
<%End Sub
%>
