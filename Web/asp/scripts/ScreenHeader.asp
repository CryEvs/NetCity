
<% ' © 2007-2008 IRTech. All rights reserved.
%>
<td nowrap width="1%" height="57">
	<div style="font-family: Arial, Helvetica, sans-serif; color:#FFFFFF; font-weight: bold;">
			<%Call onWelcomeUser()%>
	</div>
	<div class="smalltext" style="display:inline; font-family: Arial, Helvetica, sans-serif; color:#FFFFFF;">
		<%Call onCurrentSchool()%>
	</div>
	<%Call onCurrentYear()%>
</td>
</script>
<td nowrap>
	<div align="right">
		<b><font face="Arial, Helvetica, sans-serif" color="#FFFFFF"><%Call onCurrentDate()%></font>
		<font face="Arial, Helvetica, sans-serif" color="#FFFFFF" size="+2"><br></font></b>
		<font face="Arial, Helvetica, sans-serif" color="#FFFFFF"><%=obLanguage("Common","kWorkingInSystem")%>: <b><span id="WorkingInSystemCnt"><%=onCurrentWorkingUsers()%></span></b>&nbsp;</font>
	</div>
</td>
