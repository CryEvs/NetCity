<!-- #INCLUDE FILE=../../../../header1.asp -->
<!-- #INCLUDE FILE="PageX_main_inc.asp" -->

<% ' © 2007-2015 IRTech. All rights reserved.
Function GetFormPageNum()
	GetFormPageNum = 12
End Function

Sub SpecialOnHead()
	If Not readonly Then%>
		<script> <!--
		function CalculateOSH()
		{
			var form = document.SchoolEdit;
	
			form.T210104.value = GetValueInt(form.T210105) + GetValueInt(form.T210106) + GetValueInt(form.T210107) + GetValueInt(form.T210108) + GetValueInt(form.T210109) + GetValueInt(form.T210110) + GetValueInt(form.T210111) + GetValueInt(form.T210112);
			form.T210204.value = GetValueInt(form.T210205) + GetValueInt(form.T210206) + GetValueInt(form.T210207) + GetValueInt(form.T210208) + GetValueInt(form.T210209) + GetValueInt(form.T210210) + GetValueInt(form.T210211) + GetValueInt(form.T210212);
			form.T210304.value = GetValueInt(form.T210305) + GetValueInt(form.T210306) + GetValueInt(form.T210307) + GetValueInt(form.T210308) + GetValueInt(form.T210309) + GetValueInt(form.T210310) + GetValueInt(form.T210311) + GetValueInt(form.T210312);
			form.T210404.value = GetValueInt(form.T210405) + GetValueInt(form.T210406) + GetValueInt(form.T210407) + GetValueInt(form.T210408) + GetValueInt(form.T210409) + GetValueInt(form.T210410) + GetValueInt(form.T210411) + GetValueInt(form.T210412);
			form.T210504.value = GetValueInt(form.T210505) + GetValueInt(form.T210506) + GetValueInt(form.T210507) + GetValueInt(form.T210508) + GetValueInt(form.T210509) + GetValueInt(form.T210510) + GetValueInt(form.T210511) + GetValueInt(form.T210512);
			form.T210604.value = GetValueInt(form.T210605) + GetValueInt(form.T210606) + GetValueInt(form.T210607) + GetValueInt(form.T210608) + GetValueInt(form.T210609) + GetValueInt(form.T210610) + GetValueInt(form.T210611) + GetValueInt(form.T210612);
			form.T210704.value = GetValueInt(form.T210705) + GetValueInt(form.T210706) + GetValueInt(form.T210707) + GetValueInt(form.T210708) + GetValueInt(form.T210709) + GetValueInt(form.T210710) + GetValueInt(form.T210711) + GetValueInt(form.T210712);
			form.T210804.value = GetValueInt(form.T210805) + GetValueInt(form.T210806) + GetValueInt(form.T210807) + GetValueInt(form.T210808) + GetValueInt(form.T210809) + GetValueInt(form.T210810) + GetValueInt(form.T210811) + GetValueInt(form.T210812);
			form.T210904.value = GetValueInt(form.T210905) + GetValueInt(form.T210906) + GetValueInt(form.T210907) + GetValueInt(form.T210908) + GetValueInt(form.T210909) + GetValueInt(form.T210910) + GetValueInt(form.T210911) + GetValueInt(form.T210912);
			form.T211004.value = GetValueInt(form.T211005) + GetValueInt(form.T211006) + GetValueInt(form.T211007) + GetValueInt(form.T211008) + GetValueInt(form.T211009) + GetValueInt(form.T211010) + GetValueInt(form.T211011) + GetValueInt(form.T211012);
			form.T211104.value = GetValueInt(form.T211105) + GetValueInt(form.T211106) + GetValueInt(form.T211107) + GetValueInt(form.T211108) + GetValueInt(form.T211109) + GetValueInt(form.T211110) + GetValueInt(form.T211111) + GetValueInt(form.T211112);
			form.T211204.value = GetValueInt(form.T211205) + GetValueInt(form.T211206) + GetValueInt(form.T211207) + GetValueInt(form.T211208) + GetValueInt(form.T211209) + GetValueInt(form.T211210) + GetValueInt(form.T211211) + GetValueInt(form.T211212);
			form.T211304.value = GetValueInt(form.T211305) + GetValueInt(form.T211306) + GetValueInt(form.T211307) + GetValueInt(form.T211308) + GetValueInt(form.T211309) + GetValueInt(form.T211310) + GetValueInt(form.T211311) + GetValueInt(form.T211312);
			form.T211404.value = GetValueInt(form.T211405) + GetValueInt(form.T211406) + GetValueInt(form.T211407) + GetValueInt(form.T211408) + GetValueInt(form.T211409) + GetValueInt(form.T211410) + GetValueInt(form.T211411) + GetValueInt(form.T211412);

			form.T211503.value = GetValueInt(form.T210103) + GetValueInt(form.T210203) + GetValueInt(form.T210303) + GetValueInt(form.T210403) + GetValueInt(form.T210503) + GetValueInt(form.T210603) + GetValueInt(form.T210703) + GetValueInt(form.T210803) + GetValueInt(form.T210903) + GetValueInt(form.T211003) + GetValueInt(form.T211103) + GetValueInt(form.T211203) + GetValueInt(form.T211303) + GetValueInt(form.T211403);
			form.T211504.value = GetValueInt(form.T210104) + GetValueInt(form.T210204) + GetValueInt(form.T210304) + GetValueInt(form.T210404) + GetValueInt(form.T210504) + GetValueInt(form.T210604) + GetValueInt(form.T210704) + GetValueInt(form.T210804) + GetValueInt(form.T210904) + GetValueInt(form.T211004) + GetValueInt(form.T211104) + GetValueInt(form.T211204) + GetValueInt(form.T211304) + GetValueInt(form.T211404);
			form.T211505.value = GetValueInt(form.T210105) + GetValueInt(form.T210205) + GetValueInt(form.T210305) + GetValueInt(form.T210405) + GetValueInt(form.T210505) + GetValueInt(form.T210605) + GetValueInt(form.T210705) + GetValueInt(form.T210805) + GetValueInt(form.T210905) + GetValueInt(form.T211005) + GetValueInt(form.T211105) + GetValueInt(form.T211205) + GetValueInt(form.T211305) + GetValueInt(form.T211405);
			form.T211506.value = GetValueInt(form.T210106) + GetValueInt(form.T210206) + GetValueInt(form.T210306) + GetValueInt(form.T210406) + GetValueInt(form.T210506) + GetValueInt(form.T210606) + GetValueInt(form.T210706) + GetValueInt(form.T210806) + GetValueInt(form.T210906) + GetValueInt(form.T211006) + GetValueInt(form.T211106) + GetValueInt(form.T211206) + GetValueInt(form.T211306) + GetValueInt(form.T211406);
			form.T211507.value = GetValueInt(form.T210107) + GetValueInt(form.T210207) + GetValueInt(form.T210307) + GetValueInt(form.T210407) + GetValueInt(form.T210507) + GetValueInt(form.T210607) + GetValueInt(form.T210707) + GetValueInt(form.T210807) + GetValueInt(form.T210907) + GetValueInt(form.T211007) + GetValueInt(form.T211107) + GetValueInt(form.T211207) + GetValueInt(form.T211307) + GetValueInt(form.T211407);
			form.T211508.value = GetValueInt(form.T210108) + GetValueInt(form.T210208) + GetValueInt(form.T210308) + GetValueInt(form.T210408) + GetValueInt(form.T210508) + GetValueInt(form.T210608) + GetValueInt(form.T210708) + GetValueInt(form.T210808) + GetValueInt(form.T210908) + GetValueInt(form.T211008) + GetValueInt(form.T211108) + GetValueInt(form.T211208) + GetValueInt(form.T211308) + GetValueInt(form.T211408);
			form.T211509.value = GetValueInt(form.T210109) + GetValueInt(form.T210209) + GetValueInt(form.T210309) + GetValueInt(form.T210409) + GetValueInt(form.T210509) + GetValueInt(form.T210609) + GetValueInt(form.T210709) + GetValueInt(form.T210809) + GetValueInt(form.T210909) + GetValueInt(form.T211009) + GetValueInt(form.T211109) + GetValueInt(form.T211209) + GetValueInt(form.T211309) + GetValueInt(form.T211409);
			form.T211510.value = GetValueInt(form.T210110) + GetValueInt(form.T210210) + GetValueInt(form.T210310) + GetValueInt(form.T210410) + GetValueInt(form.T210510) + GetValueInt(form.T210610) + GetValueInt(form.T210710) + GetValueInt(form.T210810) + GetValueInt(form.T210910) + GetValueInt(form.T211010) + GetValueInt(form.T211110) + GetValueInt(form.T211210) + GetValueInt(form.T211310) + GetValueInt(form.T211410);
			form.T211511.value = GetValueInt(form.T210111) + GetValueInt(form.T210211) + GetValueInt(form.T210311) + GetValueInt(form.T210411) + GetValueInt(form.T210511) + GetValueInt(form.T210611) + GetValueInt(form.T210711) + GetValueInt(form.T210811) + GetValueInt(form.T210911) + GetValueInt(form.T211011) + GetValueInt(form.T211111) + GetValueInt(form.T211211) + GetValueInt(form.T211311) + GetValueInt(form.T211411);
			form.T211512.value = GetValueInt(form.T210112) + GetValueInt(form.T210212) + GetValueInt(form.T210312) + GetValueInt(form.T210412) + GetValueInt(form.T210512) + GetValueInt(form.T210612) + GetValueInt(form.T210712) + GetValueInt(form.T210812) + GetValueInt(form.T210912) + GetValueInt(form.T211012) + GetValueInt(form.T211112) + GetValueInt(form.T211212) + GetValueInt(form.T211312) + GetValueInt(form.T211412);
			form.T211513.value = GetValueInt(form.T210113) + GetValueInt(form.T210213) + GetValueInt(form.T210313) + GetValueInt(form.T210413) + GetValueInt(form.T210513) + GetValueInt(form.T210613) + GetValueInt(form.T210713) + GetValueInt(form.T210813) + GetValueInt(form.T210913) + GetValueInt(form.T211013) + GetValueInt(form.T211113) + GetValueInt(form.T211213) + GetValueInt(form.T211313) + GetValueInt(form.T211413);

			return true;
		}
		//--></script>
		<%
	End If
End Sub

Sub DrawPage()
	%>
	<!-- #INCLUDE FILE="Sections/Section21_inc.asp" -->
	<%
End Sub
%>
