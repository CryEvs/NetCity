<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 10
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
		<script> <!--
		function CalculateOSH()
		{
			var form = document.SchoolEdit;
	
			form.T190103.value = GetValueInt(form.T190203) + GetValueInt(form.T190303) + GetValueInt(form.T190403) + GetValueInt(form.T190503) + GetValueInt(form.T190603) + GetValueInt(form.T190703) + GetValueInt(form.T190803) + GetValueInt(form.T190903);
			form.T190104.value = GetValueInt(form.T190204) + GetValueInt(form.T190304) + GetValueInt(form.T190404) + GetValueInt(form.T190504) + GetValueInt(form.T190604) + GetValueInt(form.T190704) + GetValueInt(form.T190804) + GetValueInt(form.T190904);
			form.T190105.value = GetValueInt(form.T190205) + GetValueInt(form.T190305) + GetValueInt(form.T190405) + GetValueInt(form.T190505) + GetValueInt(form.T190605) + GetValueInt(form.T190705) + GetValueInt(form.T190805) + GetValueInt(form.T190905);
			form.T190106.value = GetValueInt(form.T190206) + GetValueInt(form.T190306) + GetValueInt(form.T190406) + GetValueInt(form.T190506) + GetValueInt(form.T190606) + GetValueInt(form.T190706) + GetValueInt(form.T190806) + GetValueInt(form.T190906);

			return true;
		}
		//--></script>
		<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section19_inc.asp" -->
	<%
End Sub
%>
