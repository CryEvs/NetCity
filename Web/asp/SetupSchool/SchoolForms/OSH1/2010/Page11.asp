<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 11
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
		<script> <!--
		function CalculateOSH()
		{
			var form = document.SchoolEdit;
	
			form.T200104.value = GetValueInt(form.T200105) + GetValueInt(form.T200106) + GetValueInt(form.T200107) + GetValueInt(form.T200108) + GetValueInt(form.T200109) + GetValueInt(form.T200110) + GetValueInt(form.T200111) + GetValueInt(form.T200112);
			form.T200204.value = GetValueInt(form.T200205) + GetValueInt(form.T200206) + GetValueInt(form.T200207) + GetValueInt(form.T200208) + GetValueInt(form.T200209) + GetValueInt(form.T200210) + GetValueInt(form.T200211) + GetValueInt(form.T200212);
			form.T200304.value = GetValueInt(form.T200305) + GetValueInt(form.T200306) + GetValueInt(form.T200307) + GetValueInt(form.T200308) + GetValueInt(form.T200309) + GetValueInt(form.T200310) + GetValueInt(form.T200311) + GetValueInt(form.T200312);
			form.T200404.value = GetValueInt(form.T200405) + GetValueInt(form.T200406) + GetValueInt(form.T200407) + GetValueInt(form.T200408) + GetValueInt(form.T200409) + GetValueInt(form.T200410) + GetValueInt(form.T200411) + GetValueInt(form.T200412);
			form.T200504.value = GetValueInt(form.T200505) + GetValueInt(form.T200506) + GetValueInt(form.T200507) + GetValueInt(form.T200508) + GetValueInt(form.T200509) + GetValueInt(form.T200510) + GetValueInt(form.T200511) + GetValueInt(form.T200512);
			form.T200604.value = GetValueInt(form.T200605) + GetValueInt(form.T200606) + GetValueInt(form.T200607) + GetValueInt(form.T200608) + GetValueInt(form.T200609) + GetValueInt(form.T200610) + GetValueInt(form.T200611) + GetValueInt(form.T200612);
			form.T200704.value = GetValueInt(form.T200705) + GetValueInt(form.T200706) + GetValueInt(form.T200707) + GetValueInt(form.T200708) + GetValueInt(form.T200709) + GetValueInt(form.T200710) + GetValueInt(form.T200711) + GetValueInt(form.T200712);
			form.T200804.value = GetValueInt(form.T200805) + GetValueInt(form.T200806) + GetValueInt(form.T200807) + GetValueInt(form.T200808) + GetValueInt(form.T200809) + GetValueInt(form.T200810) + GetValueInt(form.T200811) + GetValueInt(form.T200812);
			form.T200904.value = GetValueInt(form.T200905) + GetValueInt(form.T200906) + GetValueInt(form.T200907) + GetValueInt(form.T200908) + GetValueInt(form.T200909) + GetValueInt(form.T200910) + GetValueInt(form.T200911) + GetValueInt(form.T200912);
			form.T201004.value = GetValueInt(form.T201005) + GetValueInt(form.T201006) + GetValueInt(form.T201007) + GetValueInt(form.T201008) + GetValueInt(form.T201009) + GetValueInt(form.T201010) + GetValueInt(form.T201011) + GetValueInt(form.T201012);
			form.T201104.value = GetValueInt(form.T201105) + GetValueInt(form.T201106) + GetValueInt(form.T201107) + GetValueInt(form.T201108) + GetValueInt(form.T201109) + GetValueInt(form.T201110) + GetValueInt(form.T201111) + GetValueInt(form.T201112);
			form.T201204.value = GetValueInt(form.T201205) + GetValueInt(form.T201206) + GetValueInt(form.T201207) + GetValueInt(form.T201208) + GetValueInt(form.T201209) + GetValueInt(form.T201210) + GetValueInt(form.T201211) + GetValueInt(form.T201212);
			form.T201304.value = GetValueInt(form.T201305) + GetValueInt(form.T201306) + GetValueInt(form.T201307) + GetValueInt(form.T201308) + GetValueInt(form.T201309) + GetValueInt(form.T201310) + GetValueInt(form.T201311) + GetValueInt(form.T201312);
			form.T201404.value = GetValueInt(form.T201405) + GetValueInt(form.T201406) + GetValueInt(form.T201407) + GetValueInt(form.T201408) + GetValueInt(form.T201409) + GetValueInt(form.T201410) + GetValueInt(form.T201411) + GetValueInt(form.T201412);

			form.T201503.value = GetValueInt(form.T200103) + GetValueInt(form.T200203) + GetValueInt(form.T200303) + GetValueInt(form.T200403) + GetValueInt(form.T200503) + GetValueInt(form.T200603) + GetValueInt(form.T200703) + GetValueInt(form.T200803) + GetValueInt(form.T200903) + GetValueInt(form.T201003) + GetValueInt(form.T201103) + GetValueInt(form.T201203) + GetValueInt(form.T201303) + GetValueInt(form.T201403);
			form.T201504.value = GetValueInt(form.T200104) + GetValueInt(form.T200204) + GetValueInt(form.T200304) + GetValueInt(form.T200404) + GetValueInt(form.T200504) + GetValueInt(form.T200604) + GetValueInt(form.T200704) + GetValueInt(form.T200804) + GetValueInt(form.T200904) + GetValueInt(form.T201004) + GetValueInt(form.T201104) + GetValueInt(form.T201204) + GetValueInt(form.T201304) + GetValueInt(form.T201404);
			form.T201505.value = GetValueInt(form.T200105) + GetValueInt(form.T200205) + GetValueInt(form.T200305) + GetValueInt(form.T200405) + GetValueInt(form.T200505) + GetValueInt(form.T200605) + GetValueInt(form.T200705) + GetValueInt(form.T200805) + GetValueInt(form.T200905) + GetValueInt(form.T201005) + GetValueInt(form.T201105) + GetValueInt(form.T201205) + GetValueInt(form.T201305) + GetValueInt(form.T201405);
			form.T201506.value = GetValueInt(form.T200106) + GetValueInt(form.T200206) + GetValueInt(form.T200306) + GetValueInt(form.T200406) + GetValueInt(form.T200506) + GetValueInt(form.T200606) + GetValueInt(form.T200706) + GetValueInt(form.T200806) + GetValueInt(form.T200906) + GetValueInt(form.T201006) + GetValueInt(form.T201106) + GetValueInt(form.T201206) + GetValueInt(form.T201306) + GetValueInt(form.T201406);
			form.T201507.value = GetValueInt(form.T200107) + GetValueInt(form.T200207) + GetValueInt(form.T200307) + GetValueInt(form.T200407) + GetValueInt(form.T200507) + GetValueInt(form.T200607) + GetValueInt(form.T200707) + GetValueInt(form.T200807) + GetValueInt(form.T200907) + GetValueInt(form.T201007) + GetValueInt(form.T201107) + GetValueInt(form.T201207) + GetValueInt(form.T201307) + GetValueInt(form.T201407);
			form.T201508.value = GetValueInt(form.T200108) + GetValueInt(form.T200208) + GetValueInt(form.T200308) + GetValueInt(form.T200408) + GetValueInt(form.T200508) + GetValueInt(form.T200608) + GetValueInt(form.T200708) + GetValueInt(form.T200808) + GetValueInt(form.T200908) + GetValueInt(form.T201008) + GetValueInt(form.T201108) + GetValueInt(form.T201208) + GetValueInt(form.T201308) + GetValueInt(form.T201408);
			form.T201509.value = GetValueInt(form.T200109) + GetValueInt(form.T200209) + GetValueInt(form.T200309) + GetValueInt(form.T200409) + GetValueInt(form.T200509) + GetValueInt(form.T200609) + GetValueInt(form.T200709) + GetValueInt(form.T200809) + GetValueInt(form.T200909) + GetValueInt(form.T201009) + GetValueInt(form.T201109) + GetValueInt(form.T201209) + GetValueInt(form.T201309) + GetValueInt(form.T201409);
			form.T201510.value = GetValueInt(form.T200110) + GetValueInt(form.T200210) + GetValueInt(form.T200310) + GetValueInt(form.T200410) + GetValueInt(form.T200510) + GetValueInt(form.T200610) + GetValueInt(form.T200710) + GetValueInt(form.T200810) + GetValueInt(form.T200910) + GetValueInt(form.T201010) + GetValueInt(form.T201110) + GetValueInt(form.T201210) + GetValueInt(form.T201310) + GetValueInt(form.T201410);
			form.T201511.value = GetValueInt(form.T200111) + GetValueInt(form.T200211) + GetValueInt(form.T200311) + GetValueInt(form.T200411) + GetValueInt(form.T200511) + GetValueInt(form.T200611) + GetValueInt(form.T200711) + GetValueInt(form.T200811) + GetValueInt(form.T200911) + GetValueInt(form.T201011) + GetValueInt(form.T201111) + GetValueInt(form.T201211) + GetValueInt(form.T201311) + GetValueInt(form.T201411);
			form.T201512.value = GetValueInt(form.T200112) + GetValueInt(form.T200212) + GetValueInt(form.T200312) + GetValueInt(form.T200412) + GetValueInt(form.T200512) + GetValueInt(form.T200612) + GetValueInt(form.T200712) + GetValueInt(form.T200812) + GetValueInt(form.T200912) + GetValueInt(form.T201012) + GetValueInt(form.T201112) + GetValueInt(form.T201212) + GetValueInt(form.T201312) + GetValueInt(form.T201412);
			form.T201513.value = GetValueInt(form.T200113) + GetValueInt(form.T200213) + GetValueInt(form.T200313) + GetValueInt(form.T200413) + GetValueInt(form.T200513) + GetValueInt(form.T200613) + GetValueInt(form.T200713) + GetValueInt(form.T200813) + GetValueInt(form.T200913) + GetValueInt(form.T201013) + GetValueInt(form.T201113) + GetValueInt(form.T201213) + GetValueInt(form.T201313) + GetValueInt(form.T201413);

			return true;
		}
		//--></script>
		<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section20_inc.asp" -->
	<%
End Sub
%>
