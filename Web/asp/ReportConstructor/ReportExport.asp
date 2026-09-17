<!-- #INCLUDE FILE="../headerexcel.asp" -->
<!-- #INCLUDE FILE="Report_inc.asp" -->

<% ' © 2007-2011 IRTech. All rights reserved.
	Dim tmpRes

Sub DrawTitleHeader(str)
	rw "<table><tr><td class=""xtl8wr"" nowrap>"
	rw str
	rw "</td></tr>"
End Sub
Sub DrawReportDispName(str)
	rw "<tr><td class=""xtl12bwr"" nowrap><b>"
	rw str
	rw "</b></td></tr><tr><td>&nbsp;</td></tr>"
End Sub
Sub DrawTimeParam(str)
	rw "<tr><td class=""xtl10wr"" nowrap>"
	rw str
	rw "</td></tr>"
End Sub
Sub EndDrawParams()
	rw "<tr><td>&nbsp;</td></tr></table>"
End Sub

%>
