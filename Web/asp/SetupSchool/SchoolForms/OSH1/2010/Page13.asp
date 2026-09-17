<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 13
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
		<script> <!--
		function CalculateOSH()
		{
			var form = document.SchoolEdit;

			if (GetValueInt(form.T220103) < GetValueInt(form.T220203))
			{
				alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
				form.T220203.focus();
				return false;
			}
			if (GetValueInt(form.T220104) < GetValueInt(form.T220204))
			{
				alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
				form.T220204.focus();
				return false;
			}

			if (GetValueInt(form.T220303) < GetValueInt(form.T220403))
			{
				alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
				form.T220403.focus();
				return false;
			}
			if (GetValueInt(form.T220304) < GetValueInt(form.T220404))
			{
				alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
				form.T220404.focus();
				return false;
			}

			if (GetValueInt(form.T220503) < GetValueInt(form.T220603))
			{
				alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
				form.T220603.focus();
				return false;
			}
			if (GetValueInt(form.T220504) < GetValueInt(form.T220604))
			{
				alert(<%=obLanguage("SchoolInfo","kerrOshCalculate")%>);
				form.T220604.focus();
				return false;
			}

			return true;
		}
		//--></script>
		<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section22_inc.asp" -->
	<%
End Sub
%>