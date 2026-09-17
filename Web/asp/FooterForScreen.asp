<% ' © 2007-2014 IRTech. All rights reserved.
%>

<div class="footer">
	<%
		On Error Resume Next
		If kShowEserviceReceiptNotice Then
			%><span class="eservice-receipt-notice">Вы получаете государственные (муниципальные) услуги в сфере образования в электронной форме</span><%
		End If
		On Error Resume Next
	%>
	<a class="logo-footer" href="#"></a>
	<div class="block-debug-information">
	<p class="p-line-height-09 p-font-weight-900"><%=NETSCHOOL_PRODUCT_NAME%> &nbsp;<%=CStr(obConfig.Version)%> &nbsp;<%=NETSCHOOL_VERSION_DATE%></p>	
	<%If bIsDebug Then
		%><p class="debug_information">Exec time: <%=FormatNumber(Timer - tmExec,3)%>c / <%=NSNow%> &nbsp;<%
		If GetScreenType() <> stSimple Then
			%><span>БД - <%=IIF(objNSNET.IsWorkConnection(), "рабочая", "архивная")%></span><%
		End If
	End If%>
	</p>
	<p class="p-line-height-09"><%=NETSCHOOL_COPYRIGHT%>, <%=NETSCHOOL_COPYRIGHT2%></p>	
	</div>
</div>
